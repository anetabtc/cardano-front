import { validate } from "bitcoin-address-validation";
import Image from "next/image";
import { Fragment, useEffect, useRef, useState } from "react";
import useUnwrap from "../../../hooks/useUnwrap";
import styles from "../../../styles/home/WrapUnwrap.module.css";
import ButtonLoader from "../../partials/loader/ButtonLoader";
import Notifications from "./Notifications";
import UnwrapTransactionSuccessfull from "./unwrap/UnwrapTransactionSuccessfull";

interface Props {
  payBridgeModalOpen: boolean;
  setPayBridgeModalOpen: (value: boolean) => void;
  setValidBtcAddress: (value: boolean) => void;
  validAddress: boolean;
}

const Unwrap = ({
  payBridgeModalOpen,
  setPayBridgeModalOpen,
  setValidBtcAddress,
}: Props) => {
  const [successNotify, setSuccessNotify] = useState<boolean>(false);
  const [successResultModal, setSuccessResultModal] = useState<boolean>(false);
  const [btcAddress, setBtcAddress] = useState<string>("");
  const [buttonLoader, setButtonLoader] = useState<boolean>(false);
  const hasRendered = useRef(false);

  const {
    unwrapFeeBtc,
    bridgeFee,
    unwrapFeeCardano,
    btcToBeReceived,
    amount,
    setAmount,
  } = useUnwrap();

  useEffect(() => {
    if (successNotify) {
      setPayBridgeModalOpen(false);
      setSuccessResultModal(true);
    }
  }, [successNotify]);

  return (
    <Fragment>
      <p className={styles.redeemBtc}>Unwrap BTC</p>

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
              src={"/images/logo/bitcoin-blue.png"}
              alt="Bitcoin blue image"
              width={25}
              height={25}
            />
          </div>
        </div>
      </div>

      {/* source address  */}
      <div>
        <input
          value={btcAddress}
          onChange={(e) => {
            setValidBtcAddress(validate(e.target.value));
            setBtcAddress(e.target.value);
          }}
          type={"text"}
          placeholder="Enter your BTC address"
          className="w-full text-gray-300 bg-primary-mid-dark-color p-4 rounded-lg outline-none mt-1"
          required
        />
      </div>

      {/* fee */}
      <div className="flex items-center justify-between px-2">
        <p className="text-sm font-semibold">Bridge Fee ({unwrapFeeBtc}%)</p>
        <div>
          <div className="flex items-center gap-2 text-lg">
            {bridgeFee}
            <h2 className="font-medium font-nunito-sans">cBTC</h2>
            <Image
              src={"/images/logo/bitcoin-blue.png"}
              alt="Bitcoin"
              height={25}
              width={25}
            />
          </div>
        </div>
      </div>

      {/* fee */}
      <div className="flex items-center justify-between px-2">
        <p className="text-sm font-semibold">Cardano Transaction Fee</p>
        <div>
          <div className="flex items-center gap-2 text-lg">
            {unwrapFeeCardano}
            <h2 className="font-medium font-nunito-sans">ADA</h2>
            <Image
              src={"/images/logo/star.png"}
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
            <p className=" opacity-80">{btcToBeReceived}</p>
            <h2 className="font-medium font-nunito-sans">BTC</h2>
            <Image
              src={"/images/logo/bitcoin.png"}
              alt="Bitcoin Image for Receiving amount"
              height={25}
              width={25}
            />
          </div>
        </div>
      </div>

      {/* success failed notifications  */}

      <Notifications
        success={true}
        isShow={successNotify}
        setIsShow={setSuccessNotify}
      />

      {/* success modal  */}

      <UnwrapTransactionSuccessfull
        isOpen={successResultModal}
        setIsOpen={setSuccessResultModal}
        setSuccessNotify={setSuccessNotify}
        successNotify={successNotify}
      />

      {/* final button  */}
      <button
        disabled={!Boolean(amount)}
        onClick={() => setPayBridgeModalOpen(true)}
        className={styles.wrapBtc}
      >
        {buttonLoader && <ButtonLoader />}
        {amount ? "Unwrap BTC" : "Enter an amount"}
      </button>
    </Fragment>
  );
};

export default Unwrap;
