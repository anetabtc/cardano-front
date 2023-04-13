import {
  Constr,
  Data,
  fromText,
  toUnit,
  WalletApi,
} from "lucid-cardano";
import { useContext } from "react";
import { GlobalContext } from "../components/GlobalContext";
import { cBTCMintingPolicy } from "./config"

export default function useLucid() {
  const { lucid, walletApi } = useContext(GlobalContext);

  // TODO: please fix this function
  const unwrap = async ({
    burnAmount,
    btcAddress,
  }: {
    burnAmount: number;
    btcAddress: string;
  }) => {
    if (!walletApi) {
      throw new Error("No wallet connected");
    }

    if (!lucid) {
      throw new Error("Fail to initialize Lucid");
    }

    lucid.selectWallet(walletApi as unknown as WalletApi);

    const unit = toUnit(
      lucid.utils.mintingPolicyToId(cBTCMintingPolicy),
      fromText("cBTC")
    );
    const walletUtxos = await lucid.utxosAtWithUnit(
      await lucid.wallet.address(),
      unit
    );
    if (!walletUtxos.length) {
      throw new Error("cBTC not found in wallet");
    }
    const redeemer = Data.to(new Constr(1, []));

    const totalAssets = { [unit]: BigInt(-burnAmount) };
    const tx = await lucid
      .newTx()
      .collectFrom(walletUtxos)
      .attachMintingPolicy(cBTCMintingPolicy)
      .mintAssets(totalAssets, redeemer)
      .attachMetadata(0, { btcAddress: btcAddress, burnAmount: -burnAmount })
      .complete();

    const signedTx = await tx.sign().complete();

    const txHash = signedTx.submit();
    return txHash;
  };

  return { unwrap };
}
