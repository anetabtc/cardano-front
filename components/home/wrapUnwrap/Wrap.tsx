import Image from "next/image";
import { Fragment, useState } from "react";
import useWrap from "../../../hooks/useWrap";
import styles from "../../../styles/home/WrapUnwrap.module.css";
import Notifications from "./Notifications";
import BtcDeposit from "./wrap/BtcDeposit";

const Wrap = () => {
  const [successNotify, setSuccessNotify] = useState<boolean>(false);

  const {
    amount,
    setAmount,
    wrapFeeBtc,
    btcToBeReceived,
    bridgeFee,
    isBtcDepositModalOpen,
    setIsBtcDepositModelOpen,
    wrapDepositAddress,
  } = useWrap();

  const closeAllModal = () => {
    setSuccessNotify(false);
    setIsBtcDepositModelOpen(false);
  };

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
        <p className="text-sm font-semibold">Bridge Fee ({wrapFeeBtc}%)</p>
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
        <p className="text-sm font-semibold">You Will Receive</p>
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
        onClick={() => setIsBtcDepositModelOpen(true)}
        className={styles.wrapBtc}
      >
        {amount ? "Wrap BTC" : "Enter an amount"}
      </button>

      {/* notification of success  */}
      <Notifications
        success={true}
        isShow={successNotify}
        setIsShow={setSuccessNotify}
      />

      {/* btc deposit modal */}
      <BtcDeposit
        isOpen={isBtcDepositModalOpen}
        setIsOpen={setIsBtcDepositModelOpen}
        depositAmount={amount}
        toReceiveAmount={btcToBeReceived.toString()}
        depositAddress={wrapDepositAddress}
      />
    </Fragment>
  );
};

export default Wrap;
