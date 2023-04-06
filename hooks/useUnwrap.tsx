import { useContext, useEffect, useState } from "react";
import { GlobalContext } from "../components/GlobalContext";

export default function useUnwrap() {
  const { config } = useContext(GlobalContext);
  const unwrapFeeBtc = config.unwrapFeeBtc;
  const unwrapFeeCardano = config.unwrapFeeCardano;

  const [amount, setAmount] = useState<string>("");
  const [bridgeFee, setBridgeFee] = useState(0);

  useEffect(() => {
    const fee = unwrapFeeBtc * 0.01 * Number(amount);
    setBridgeFee(fee);
  }, [unwrapFeeBtc, amount]);

  return {
    amount,
    setAmount,
    unwrapFeeBtc,
    unwrapFeeCardano,
    bridgeFee,
    btcToBeReceived: Number(amount) - bridgeFee,
  };
}
