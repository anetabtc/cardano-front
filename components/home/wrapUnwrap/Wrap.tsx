import Image from "next/image";
import React, { Fragment, useState } from "react";
import styles from "../../../styles/home/WrapUnwrap.module.css";
import PayBridgeFeeModal from "./wrap/PayBridgeFeeModal";
import { validate } from "bitcoin-address-validation";
import Notifications from "./Notifications";
import BtcDeposit from "./wrap/BtcDeposit";
import BtcDepositReceivedSuccess from "./wrap/BtcDepositReceivedSuccess";
import { ExclamationCircleIcon } from "@heroicons/react/24/solid";

interface Props {
  payBridgeModalOpen: boolean;
  setPayBridgeModalOpen: (value: boolean) => void;
  setValidBtcAddress: (value: boolean) => void;
  validAddress: boolean;
}

const Wrap = ({
  payBridgeModalOpen,
  setPayBridgeModalOpen,
  setValidBtcAddress,
  validAddress,
}: Props) => {
  const [btcAddress, setBtcAddress] = useState<string>("");
  const [successNotify, setSuccessNotify] = useState<boolean>(false);
  const [btcDepositOpen, setBtcDepositOpen] = useState<boolean>(false);
  const [btcDepositSuccessOpen, setBtcDepositSuccessOpen] =
    useState<boolean>(false);

  const [amount, setAmount] = useState<
    string | number | readonly string[] | undefined
  >();

  // when notification appear, the loading and popup will disable

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

      {/* source address  */}

      <div>
        <label
          className="text-xs text-gray-100 flex items-center gap-1"
          htmlFor="btc-address"
        >
          BTC Source Address{" "}
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
        <p className="text-base">You Will Receive</p>
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
          <h4>Bridge Fee</h4>
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
        <div className="flex items-center justify-between">
          <h4>Cardano Network Fee</h4>
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
            {amount && <p className="text-[13px] text-right mt-1">= $ 0.8</p>}
          </div>
        </div>
        {/* final button  */}
        {amount ? (
          <button
            onClick={() => setPayBridgeModalOpen(true)}
            className={styles.wrapBtc}
          >
            Wrap BTC
          </button>
        ) : (
          <button disabled={true} className={styles.enterAmountBtc}>
            Enter an amount
          </button>
        )}
        {validate(btcAddress) && (
          <PayBridgeFeeModal
            isOpen={payBridgeModalOpen}
            setIsOpen={setPayBridgeModalOpen}
            setSuccessNotify={setSuccessNotify}
            successNotify={successNotify}
          />
        )}
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
        />
        {/* btc deposit success  */}
        <BtcDepositReceivedSuccess
          isOpen={btcDepositSuccessOpen}
          setIsOpen={setBtcDepositSuccessOpen}
          setBtcDepositOpen={setBtcDepositOpen}
        />
      </div>
    </Fragment>
  );
};

export default Wrap;
