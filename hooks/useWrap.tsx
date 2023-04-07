import { useContext, useEffect, useState } from "react";
import { GlobalContext } from "../components/GlobalContext";

export default function useWrap() {
  const { config } = useContext(GlobalContext);
  const wrapFeeBtc = config.wrapFeeBtc;
  const wrapDepositAddress = config.btcWrapAddress;

  const [amount, setAmount] = useState<string>("");
  const [bridgeFee, setBridgeFee] = useState(0);
  const [isBtcDepositModalOpen, setIsBtcDepositModelOpen] = useState(true);

  useEffect(() => {
    const fee = wrapFeeBtc * 0.01 * Number(amount);
    setBridgeFee(fee);
  }, [wrapFeeBtc, amount]);

  const wrap = async () => {};

  const validateInput = () => {};

  return {
    amount,
    setAmount,
    wrapFeeBtc,
    bridgeFee,
    btcToBeReceived: Number(amount) - bridgeFee,
    isBtcDepositModalOpen,
    setIsBtcDepositModelOpen,
    wrapDepositAddress,
  };
}
