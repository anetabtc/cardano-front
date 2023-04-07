import {
  Constr,
  Data,
  fromText,
  Script,
  toUnit,
  WalletApi,
} from "lucid-cardano";
import { useContext } from "react";
import { GlobalContext } from "../components/GlobalContext";
import { useTryCatch } from "./useTryCatch";

export default function useLucid() {
  const { tryWithErrorHandler } = useTryCatch();

  const { lucid, walletApi } = useContext(GlobalContext);

  const unwrap = async ({
    burnAmount,
    btcAddress,
    cBTCMintingPolicy,
  }: {
    burnAmount: number;
    btcAddress: string;
    cBTCMintingPolicy: Script;
  }) => {
    await tryWithErrorHandler(async () => {
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
      const redeemer = Data.to(new Constr(1, []));

      const totalAssets = { [unit]: BigInt(burnAmount) };
      const tx = await lucid
        .newTx()
        .collectFrom(walletUtxos)
        .attachMintingPolicy(cBTCMintingPolicy)
        .mintAssets(totalAssets, redeemer)
        .attachMetadata(0, { btcAddress: btcAddress, burnAmount: burnAmount })
        .complete();

      const signedTx = await tx.sign().complete();

      const txHash = signedTx.submit();
      return txHash;
    });
  };

  return { unwrap };
}
