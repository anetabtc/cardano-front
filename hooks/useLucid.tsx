import {
  Constr,
  Data,
  fromText,
  Lucid,
  Script,
  toUnit,
  WalletApi,
} from "lucid-cardano";

export default function useLucid() {
  async function transferAda({
    lucid,
    walletApi,
    toAddress,
    amount,
  }: {
    lucid: Lucid;
    walletApi: WalletApi;
    toAddress: string;
    amount: number;
  }) {
    try {
      // const lucid = await Lucid.new(new CustomBlockfrost(), "Mainnet");
      lucid.selectWallet(walletApi);
      const tx = await lucid
        .newTx()
        .payToAddress(toAddress, { lovelace: BigInt(amount) })
        .complete();
      const signedTx = await tx.sign().complete();
      const txHash = await signedTx.submit();
      return txHash;
    } catch (error) {}
  }

  const burn = async (
    lucid: Lucid,
    burnAmount: number,
    btcAddress: string,
    cBTCMintingPolicy: Script
  ) => {
    try {
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
    } catch (error) {
      if (error instanceof Error) return error;
      return Error(`error : ${JSON.stringify(error)}`);
    }
  };

  return { transferAda };
}
