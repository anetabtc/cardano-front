import { useContext, useEffect, useState } from "react";
import { GlobalContext } from "../components/GlobalContext";

export default function useWrap() {
  const { config } = useContext(GlobalContext);
  const wrapFeeBtc = config.wrapFeeBtc;

  const [amount, setAmount] = useState<string>("");
  const [bridgeFee, setBridgeFee] = useState(0);

  useEffect(() => {
    const fee = wrapFeeBtc * 0.01 * Number(amount);
    setBridgeFee(fee);
  }, [wrapFeeBtc, amount]);

  return {
    amount,
    setAmount,
    wrapFeeBtc,
    bridgeFee,
    btcToBeReceived: Number(amount) - bridgeFee,
  };
}
