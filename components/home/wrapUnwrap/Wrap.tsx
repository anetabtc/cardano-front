import Image from "next/image";
import { Fragment } from "react";
import useWrap, { WrapStage } from "../../../hooks/useWrap";
import styles from "../../../styles/home/WrapUnwrap.module.css";
import ButtonLoader from "../../partials/loader/ButtonLoader";
import DepositSentModal from "./wrap/DepositSentModal";
import SendDepositModal from "./wrap/SendDepositModal";

const Wrap = () => {
  const {
    amount,
    setAmount,
    wrapFeeBtc,
    btcToBeReceived,
    bridgeFee,
    wrapDepositAddress,
    wrap,
    isLoading,
    wrapStage,
    setWrapStage,
  } = useWrap();

  return (
    <Fragment>
      <p className={styles.redeemBtc}>Wrap BTC</p>
      {/* Wrap BTC Input */}
      <div className={styles.amountContainer}>
        <input
          placeholder="0"
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
          type="number"
          className={styles.amountInput}
        />
        <div className="absolute right-6">
          <div className="flex items-center gap-2">
            <Image
              src={"/images/logo/bitcoin.png"}
              alt="Bitcoin image"
              width={25}
              height={25}
            />
          </div>
        </div>
      </div>
      {/* fee */}
      <div className="flex items-center justify-between px-2">
        <p className=" font-semibold">Bridge Fee ({wrapFeeBtc}%)</p>
        <div>
          <div className="flex items-center gap-2 text-lg">
            {bridgeFee}
            <h2 className="font-medium font-nunito-sans">BTC</h2>
            <Image
              src={"/images/logo/bitcoin.png"}
              alt="Bitcoin"
              height={25}
              width={25}
            />
          </div>
        </div>
      </div>
      {/* my receive amount  */}
      <div className="flex items-center justify-between px-2">
        <p className=" font-semibold">You Will Receive</p>
        <div>
          <div className="flex items-center gap-2 text-lg">
            {btcToBeReceived}
            <h2 className="font-medium font-nunito-sans">cBTC</h2>
            <Image
              src={"/images/logo/bitcoin-blue.png"}
              alt="Bitcoin Blue Image for Receiving amount"
              height={25}
              width={25}
            />
          </div>
        </div>
      </div>
      {/* final button  */}
      <button
        disabled={!Boolean(amount)}
        onClick={wrap}
        className={styles.wrapBtc}
      >
        {isLoading ? <ButtonLoader /> : null}

        {amount ? "Wrap BTC" : "Enter an amount"}
      </button>
      <SendDepositModal
        isOpen={wrapStage === WrapStage.Pending}
        amount={amount}
        wrapDepositAddress={wrapDepositAddress}
        onClick={() => setWrapStage(WrapStage.Sent)}
        onClose={() => setWrapStage(WrapStage.NotStarted)}
      ></SendDepositModal>
      <DepositSentModal
        isOpen={wrapStage === WrapStage.Sent}
        amount={amount}
        amountToReceive={btcToBeReceived.toString()}
        onClick={() => setWrapStage(WrapStage.NotStarted)}
        onClose={() => setWrapStage(WrapStage.NotStarted)}
      ></DepositSentModal>
    </Fragment>
  );
};

export default Wrap;
