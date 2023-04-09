import Image from "next/image";
import WrapUnwrapModal from "../WrapUnwrapModal";

interface Props {
  isOpen: boolean;
  amount: string;
  wrapDepositAddress: string;
  onClick: () => void;
  onClose: () => void;
}

export default function SendDepositModal({
  isOpen,
  amount,
  wrapDepositAddress,
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
      buttonText="I have sent my deposit"
      onClick={onClick}
    >
      <div className="flex gap-6 flex-col">
        <p>
          <span className="font-bold text-[#F7931A]">IMPORTANT:</span> Add your
          Cardano address in the “Message (Optional)” section in your Moonshine
          Wallet before sending this deposit.
        </p>
        <p>
          This Cardano address will receive cBTC. If you do not add your Cardano
          address into the message section of this transaction, you will not
          receive cBTC.
        </p>
        <hr></hr>
        <p>In a single transaction, send {amount} BTC to</p>
        <div
          className={`w-full py-0.5 px-8 border border-neutral-400 rounded-lg flex items-center gap-1 flex justify-center`}
        >
          <p>{wrapDepositAddress}</p>
        </div>
        <p className="text-xs">
          <b className=" font-semibold">Note:</b> Payments may take over 10
          minutes to confirm. Don&apos;t worry, your funds are safu :)
        </p>
      </div>
    </WrapUnwrapModal>
  );
}
