import { useContext, useEffect, useState } from "react";
import { GlobalContext } from "../components/GlobalContext";
import useLucid from "./useLucid";
import { useTryCatch } from "./useTryCatch";

export enum UnwrapStage {
  NotStart,
  Success,
}

export default function useUnwrap() {
  const { config } = useContext(GlobalContext);
  const unwrapFeeBtc = config.unwrapFeeBtc;
  const unwrapFeeCardano = config.unwrapFeeCardano;

  const { tryWithErrorHandler } = useTryCatch();
  const { unwrap: lucidUnwrap } = useLucid();

  const [amount, setAmount] = useState<string>("");
  const [unwrapBtcDestination, setUnwrapBtcDestination] = useState("");
  const [bridgeFee, setBridgeFee] = useState(0);
  const [isTxSuccessful, setIsTxSuccessful] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [unwrapStage, setUnwrapStage] = useState<UnwrapStage>(
    UnwrapStage.NotStart
  );

  useEffect(() => {
    const fee = unwrapFeeBtc * 0.01 * Number(amount);
    setBridgeFee(fee);
  }, [unwrapFeeBtc, amount]);

  const unwrap = async () => {
    await tryWithErrorHandler(async () => {
      setIsLoading(true);
      const amountNumber = Number(amount);
      if (isNaN(amountNumber) || amountNumber <= 0) {
        throw new Error(
          "Unwrap amount is invalid. It should be a number greater than 0"
        );
      }

      await lucidUnwrap({
        burnAmount: Number(amount),
        btcAddress: unwrapBtcDestination,
        cBTCMintingPolicy: "" as any,
      });

      setUnwrapStage(UnwrapStage.Success);
    });
    setIsLoading(false);
  };

  return {
    amount,
    unwrapFeeBtc,
    unwrapFeeCardano,
    bridgeFee,
    btcToBeReceived: Number(amount) - bridgeFee,
    unwrapBtcDestination,
    isTxSuccessful,
    setAmount,
    unwrap,
    setUnwrapBtcDestination,
    isLoading,
    unwrapStage,
    setUnwrapStage,
  };
}
