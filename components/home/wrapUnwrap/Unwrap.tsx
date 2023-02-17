import Image from "next/image";
import React, { Fragment, useState, useRef } from "react";
import styles from "../../../styles/home/WrapUnwrap.module.css";
import { validate } from "bitcoin-address-validation";
import ConfirmUnwrap from "./unwrap/ConfirmUnwrap";
import Notifications from "./Notifications";
import UnwrapTransactionSuccessfull from "./unwrap/UnwrapTransactionSuccessfull";
import ButtonLoader from "../../partials/loader/ButtonLoader";

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
  const [amount, setAmount] = useState<
    string | number | readonly string[] | undefined
  >();
  const hasRendered = useRef(false);

  React.useEffect(() => {
    if (successNotify) {
      setPayBridgeModalOpen(false);
      setSuccessResultModal(true);
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
              src={"/images/logo/bitcoin-blue.png"}
              alt="Bitcoin blue image"
              width={25}
              height={25}
            />
            <h2 className=" font-medium font-nunito-sans">cBTC</h2>
          </div>
          {amount && (
            <p className=" text-xs text-gray-300 font-semibold mt-1">
              ~ $ 5159.16
            </p>
          )}
        </div>
      </div>

      {/* source address  */}

      <div>
        <label className="text-xs text-gray-100" htmlFor="btc-address">
          BTC Destination Address
        </label>
        <input
          value={btcAddress}
          onChange={(e) => {
            setValidBtcAddress(validate(e.target.value));
            setBtcAddress(e.target.value);
          }}
          type={"text"}
          placeholder="Enter your BTC address"
          className={styles.btcAddressInput}
          required
        />
      </div>

      {/* my receive amount  */}

      <div className={styles.receiveAmountContainer}>
        <p className="text-sm font-semibold">You Will Receive</p>
        <div>
          <div className="flex items-center gap-2 text-lg">
            <Image
              src={"/images/logo/bitcoin.png"}
              alt="Bitcoin Image for Receiving amount"
              height={25}
              width={25}
            />
            <p className=" opacity-80">~ 0.299915</p>
            <h2 className="font-medium font-nunito-sans">BTC</h2>
          </div>
          {amount && <p className={styles.totalEbtc}>= $ 5157.70</p>}
        </div>
      </div>

      {/* bridge fee and cardano network fee  */}

      <div className={styles.bridgeFee}>
        <div className="flex  justify-between">
          <h3>Bridge Fee</h3>
          <div>
            <div className="flex items-center justify-center gap-3">
              <div className="flex items-center gap-2">
                <Image
                  src={"/images/logo/bitcoin-blue.png"}
                  alt="Circle star"
                  width={25}
                  height={25}
                />
                <p>0.005 cBTC</p>
              </div>
              <p>+</p>
              <div className="flex items-center gap-2">
                <Image
                  src={"/images/assets/m.png"}
                  alt="Circle star"
                  width={25}
                  height={25}
                />
                <p>0.05 ERG</p>
              </div>
            </div>
            {amount && <p className="text-[13px] text-right mt-1">= $ 13.63</p>}
          </div>
        </div>
        {/* <div className="flex items-center justify-between">
          <h4>BTC Network Fee</h4>
          <div>
            <div className="flex items-center gap-2">
              <Image
                src={"/images/logo/bitcoin.png"}
                alt="Bitcoin"
                width={25}
                height={25}
              />
              <p>~ 0.000085 ₿</p>
            </div>
            {amount && <p className="text-[13px] text-right mt-1">= $ 1.43</p>}
          </div>
        </div> */}

        {validate(btcAddress) && (
          <ConfirmUnwrap
            isOpen={payBridgeModalOpen}
            setIsOpen={setPayBridgeModalOpen}
            setSuccessNotify={setSuccessNotify}
            successNotify={successNotify}
          />
        )}
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

      {amount ? (
        <button
          disabled={buttonLoader}
          onClick={() => {
            setButtonLoader(true);
            setTimeout(() => {
              setButtonLoader(false);
              setPayBridgeModalOpen(true);
            }, 2000);
          }}
          className={styles.wrapBtc}
        >
          {buttonLoader && <ButtonLoader />} Unwrap cBTC
        </button>
      ) : (
        <button disabled={true} className={styles.enterAmountBtc}>
          Insufficient cBTC balance
        </button>
      )}
    </Fragment>
  );
};

export default Unwrap;
