import Image from "next/image";
import { Fragment } from "react";
import useUnwrap, { UnwrapStage } from "../../../hooks/useUnwrap";
import styles from "../../../styles/home/WrapUnwrap.module.css";
import ButtonLoader from "../../partials/loader/ButtonLoader";
import UnwrapSuccessful from "./unwrap/UnwrapSuccessful";

const Unwrap = () => {
  const {
    unwrapFeeBtc,
    bridgeFee,
    unwrapFeeCardano,
    btcToBeReceived,
    amount,
    setAmount,
    unwrap,
    unwrapBtcDestination,
    setUnwrapBtcDestination,
    isLoading,
    unwrapStage,
    setUnwrapStage,
  } = useUnwrap();

  return (
    <Fragment>
      <p className={styles.redeemBtc}>Unwrap cBTC</p>

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
          value={unwrapBtcDestination}
          onChange={(e) => setUnwrapBtcDestination(e.target.value)}
          type="text"
          placeholder="Enter your BTC address"
          className="w-full text-gray-300 bg-primary-mid-dark-color p-4 rounded-lg outline-none mt-1"
          required
        />
      </div>

      {/* fee */}
      <div className="flex items-center justify-between px-2">
        <p className=" font-semibold">Bridge Fee ({unwrapFeeBtc}%)</p>
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
        <p className=" font-semibold">Cardano Transaction Fee</p>
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
        <p className=" font-semibold">You Will Receive</p>
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
      {/* final button  */}
      <button
        disabled={!Boolean(amount)}
        onClick={unwrap}
        className={styles.wrapBtc}
      >
        {isLoading ? <ButtonLoader /> : null}
        {amount ? "Unwrap cBTC" : "Enter an amount"}
      </button>

      {/* success modal  */}
      <UnwrapSuccessful
        isOpen={unwrapStage === UnwrapStage.Success}
        amount={amount}
        amountToReceive={btcToBeReceived.toString()}
        unwrapBtcDestination={unwrapBtcDestination}
        onClick={() => setUnwrapStage(UnwrapStage.NotStart)}
        onClose={() => setUnwrapStage(UnwrapStage.NotStart)}
      ></UnwrapSuccessful>
    </Fragment>
  );
};

export default Unwrap;
