import Image from "next/image";
import WrapUnwrapModal from "../WrapUnwrapModal";

interface Props {
  isOpen: boolean;
  amount: string;
  amountToReceive: string;
  unwrapBtcDestination: string;
  onClick: () => void;
  onClose: () => void;
}

export default function UnwrapSuccessful({
  isOpen,
  amount,
  amountToReceive,
  unwrapBtcDestination,
  onClick,
  onClose,
}: Props) {
  return (
    <WrapUnwrapModal
      isOpen={isOpen}
      closeModal={onClose}
      title={
        <>
          <Image
            src={"/images/logo/bitcoin-blue.png"}
            alt="Bitcoin image"
            width={25}
            height={25}
          />
          Unwrap cBTC
        </>
      }
      buttonText="Close"
      onClick={onClick}
    >
      <div className="flex gap-6 flex-col">
        <div className="flex items-center justify-center gap-4">
          <div className="flex flex-col justify-center items-center gap-1">
            <div className="flex items-center gap-2 bg-primary-mid-dark-color rounded-md border border-neutral-800 px-2.5 py-1.5 ">
              <Image
                src={"/images/logo/bitcoin.png"}
                alt="Bitcoin"
                height={20}
                width={20}
              />
              <p>BTC</p>
            </div>
            <p className="text-lg font-nunito-sans">{amount}</p>
          </div>
          <Image
            src={"/images/assets/right-arrow.png"}
            alt="Right Arrow"
            className=" object-contain mt-2"
            height={15}
            width={80}
          />
          <div className="flex flex-col justify-center items-center gap-1">
            <div className="flex items-center gap-2 bg-primary-mid-dark-color rounded-md border border-neutral-800 px-2.5 py-1.5 ">
              <Image
                src={"/images/logo/bitcoin-blue.png"}
                alt="Bitcoin blue"
                height={20}
                width={20}
              />
              <p>cBTC</p>
            </div>
            <p className="text-lg font-nunito-sans">{amountToReceive}</p>
          </div>
        </div>
        <div className="rounded-lg p-4 bg-primary-mid-dark-color font-nunito-sans  space-y-1">
          <div>
            <h4 className="flex gap-1 items-center">
              BTC Destination Address:
            </h4>
          </div>
          <p className=" text-neutral-300">{unwrapBtcDestination}</p>
        </div>
        <p>
          Your cBTC has been sent for unwrap. BTC will be sent to your BTC
          wallet shortly. This may take up to 24 hours. Don&apos;t worry, your
          funds are safu :)
        </p>
        <p>
          If you need support, your BTC transaction ID and your ERG transaction
          ID will help us assist you.
        </p>
      </div>
    </WrapUnwrapModal>
  );
}
