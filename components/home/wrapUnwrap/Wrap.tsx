import Image from "next/image";
import React, { Fragment, useState } from "react";
import styles from "../../../styles/home/WrapUnwrap.module.css";
import Notifications from "./Notifications";
import BtcDeposit from "./wrap/BtcDeposit";

interface Props {
  payBridgeModalOpen: boolean;
  setPayBridgeModalOpen: (value: boolean) => void;
  setValidBtcAddress: (value: boolean) => void;
  validAddress: boolean;
}

const Wrap = ({ payBridgeModalOpen, setPayBridgeModalOpen }: Props) => {
  const [successNotify, setSuccessNotify] = useState<boolean>(false);
  const [btcDepositOpen, setBtcDepositOpen] = useState<boolean>(false);
  const [btcDepositSuccessOpen, setBtcDepositSuccessOpen] =
    useState<boolean>(false);
  const [amount, setAmount] = useState<
    string | number | readonly string[] | undefined
  >();

  const closeAllModal = () => {
    setSuccessNotify(false);
    setBtcDepositOpen(false);
    setBtcDepositSuccessOpen(false);
  };
  
  React.useEffect(() => {
    if (successNotify) {
      setPayBridgeModalOpen(false);
      setBtcDepositOpen(true);
    }
  }, [successNotify]);

  return (
    <Fragment>
      <p className={styles.redeemBtc}>Redeem BTC</p>

      {/* amount field  */}

      <div className={styles.amountContainer}>
        <input
          placeholder="0"
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
          type="number"
          inputMode="text"
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
            <h2 className=" font-medium font-nunito-sans">BTC</h2>
          </div>
          {amount && (
            <p className=" text-xs text-gray-300 font-semibold mt-1">
              ~ $ 5159.16
            </p>
          )}
        </div>
      </div>

      {/* my receive amount  */}

      <div className={styles.receiveAmountContainer}>
        <p className="text-sm font-semibold">You Will Receive</p>
        <div>
          <div className="flex items-center gap-2 text-lg">
            <Image
              src={"/images/logo/bitcoin-blue.png"}
              alt="Bitcoin Blue Image for Receiving amount"
              height={25}
              width={25}
            />
            {amount ? (
              <p className="">0.33</p>
            ) : (
              <p className=" opacity-80">0.0</p>
            )}
            <h2 className="font-medium font-nunito-sans">eBTC</h2>
          </div>
          {amount && <p className={styles.totalEbtc}>= $ 5157.70</p>}
        </div>
      </div>

      {/* bridge fee and cardano network fee  */}

      <div className={styles.bridgeFee}>
        <div className="flex items-center justify-between">
          <h4>Bridge Fee (0.5%)</h4>
          <div>
            <div className="flex items-center gap-2">
              <Image
                src={"/images/logo/circle-star.png"}
                alt="Circle star"
                width={25}
                height={25}
              />
              <p>0.0 ₳</p>
            </div>
            {amount && <p className="text-[13px] text-right mt-1">= $ 13.63</p>}
          </div>
        </div>
        {/* notification of success  */}
        <Notifications
          success={true}
          isShow={successNotify}
          setIsShow={setSuccessNotify}
        />
        {/* btc deposit modal */}
        <BtcDeposit
          isOpen={btcDepositOpen}
          setIsOpen={setBtcDepositOpen}
          setBtcDepositSuccessOpen={setBtcDepositSuccessOpen}
          closeAllModal={closeAllModal}
          wrap={true}
        />
      </div>
      {/* final button  */}
      {amount ? (
        <button
          onClick={() => setBtcDepositOpen(true)}
          className={styles.wrapBtc}
        >
          Wrap BTC
        </button>
      ) : (
        <button disabled={true} className={styles.enterAmountBtc}>
          Enter an amount
        </button>
      )}
    </Fragment>
  );
};

export default Wrap;
