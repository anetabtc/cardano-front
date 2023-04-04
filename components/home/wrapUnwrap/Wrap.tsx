import Image from "next/image";
import { Fragment, useState } from "react";
import useWrap from "../../../hooks/useWrap";
import styles from "../../../styles/home/WrapUnwrap.module.css";
import ButtonLoader from "../../partials/loader/ButtonLoader";
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
  const [buttonLoader, setButtonLoader] = useState<boolean>(false);
  const [btcDepositSuccessOpen, setBtcDepositSuccessOpen] =
    useState<boolean>(false);

  const { amount, setAmount, wrapFeeBtc, btcToBeReceived, bridgeFee } =
    useWrap();

  const closeAllModal = () => {
    setSuccessNotify(false);
    setBtcDepositOpen(false);
    setBtcDepositSuccessOpen(false);
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
            <Image
              src={"/images/logo/bitcoin.png"}
              alt="Bitcoin"
              height={25}
              width={25}
            />
            {bridgeFee}
            <h2 className="font-medium font-nunito-sans">BTC</h2>
          </div>
        </div>
      </div>
      {/* my receive amount  */}
      <div className="flex items-center justify-between px-2">
        <p className="text-sm font-semibold">You Will Receive</p>
        <div>
          <div className="flex items-center gap-2 text-lg">
            <Image
              src={"/images/logo/bitcoin-blue.png"}
              alt="Bitcoin Blue Image for Receiving amount"
              height={25}
              width={25}
            />
            {btcToBeReceived}
            <h2 className="font-medium font-nunito-sans">cBTC</h2>
          </div>
        </div>
      </div>

      {/* final button  */}
      <button
        disabled={!Boolean(amount)}
        onClick={() => setBtcDepositOpen(true)}
        className={styles.wrapBtc}
      >
        {buttonLoader && <ButtonLoader />}
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
        isOpen={btcDepositOpen}
        setIsOpen={setBtcDepositOpen}
        setBtcDepositSuccessOpen={setBtcDepositSuccessOpen}
        closeAllModal={closeAllModal}
        wrap={true}
      />
    </Fragment>
  );
};

export default Wrap;
