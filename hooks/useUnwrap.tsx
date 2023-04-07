import { useContext, useEffect, useState } from "react";
import { GlobalContext } from "../components/GlobalContext";
import useLucid from "./useLucid";

export default function useUnwrap() {
  const { config } = useContext(GlobalContext);
  const unwrapFeeBtc = config.unwrapFeeBtc;
  const unwrapFeeCardano = config.unwrapFeeCardano;

  const { unwrap: lucidUnwrap } = useLucid();

  const [amount, setAmount] = useState<string>("");
  const [unwrapBtcDestination, setUnwrapBtcDestination] = useState("");
  const [bridgeFee, setBridgeFee] = useState(0);

  useEffect(() => {
    const fee = unwrapFeeBtc * 0.01 * Number(amount);
    setBridgeFee(fee);
  }, [unwrapFeeBtc, amount]);

  const unwrap = async () => {
    await lucidUnwrap({
      burnAmount: Number(amount),
      btcAddress: unwrapBtcDestination,
      cBTCMintingPolicy: "" as any,
    });
  };

  return {
    amount,
    setAmount,
    unwrapFeeBtc,
    unwrapFeeCardano,
    bridgeFee,
    btcToBeReceived: Number(amount) - bridgeFee,
    unwrap,
    unwrapBtcDestination,
    setUnwrapBtcDestination,
  };
}
