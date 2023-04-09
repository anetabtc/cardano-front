import Image from "next/image";
import WrapUnwrapModal from "../WrapUnwrapModal";

interface Props {
  isOpen: boolean;
  amount: string;
  amountToReceive: string;
  onClick: () => void;
  onClose: () => void;
}

export default function DepositSentModal({
  isOpen,
  amount,
  amountToReceive,
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
            src={"/images/logo/bitcoin.png"}
            alt="Bitcoin image"
            width={25}
            height={25}
          />
          Wrap BTC
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
        <p>
          Thank you for sending your BTC Deposit. cBTC will be sent to your
          Cardano wallet once your BTC deposit is confirmed. This process may
          take up to 24 hours.
        </p>
        <p>
          If you need support, send your BTC transaction ID and your Cardano
          address and we will help you
        </p>
      </div>
    </WrapUnwrapModal>
  );
}
