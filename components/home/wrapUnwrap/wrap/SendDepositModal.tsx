import Image from "next/image";
import WrapUnwrapModal from "../WrapUnwrapModal";
import styles from "../../../../styles/home/WrapUnwrap.module.css";
import { paymentCredentialOf } from "lucid-cardano";

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
  const convert = async () => {
    
    const cardanoAddress = (document.getElementById('cardanoaddr') as HTMLInputElement).value;
    if (cardanoAddress) {
      
      const paymentCreds = paymentCredentialOf(cardanoAddress);   
      (document.getElementById('paymentCredentials') as HTMLInputElement).value = paymentCreds.hash;
    }
  }

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
        <p className="text-[#03C04A] text-center">
          <div className="font-bold text-2xl">Attention</div>
          You must first convert your Cardano address to a <span className="font-bold">Payment Credential</span>&nbsp;
          address and use this <span className="font-bold">Payment Credential</span> in the BTC transaction metadata.
        </p>
        <p>
          <div
            className={`w-5/6 inline-block pr-4`}
          >
            <input
              className={styles.btcAddressInput}
              id='cardanoaddr'>
            </input>
          </div>
          <button
            className={`w-1/6 bg-primary-blue-color hover:bg-primary-blue-color/80 transition-all gap-2 justify-center font-semibold font-nunito-sans text-gray-50 text-center p-2 rounded-lg text-base`}
            onClick={convert}>
            Convert
          </button>
          <div
            className={`w-5/6 inline-block pr-4`}
          >
            <input
              readOnly
              className={styles.btcAddressInput}
              id='paymentCredentials'>
            </input>
          </div>
          <button
            className={`w-1/6 bg-primary-blue-color hover:bg-primary-blue-color/80 transition-all gap-2 justify-center font-semibold font-nunito-sans text-gray-50 text-center p-2 rounded-lg text-base`}
            onClick={() => { navigator.clipboard.writeText((document.getElementById('paymentCredentials') as HTMLInputElement)?.value) }}>
            Copy
          </button>
        </p>
        <p>
          <span className="font-bold text-[#F7931A]">Attention:</span> Add your
          Payment Credentials in the “Message (Optional)” section in your Moonshine
          Wallet before sending this deposit. To get your Payment Credentials, please
          add your Cardano wallet on the next field, and copy the field below
        </p>
        <p>
          This Payment Credentials will make you receive cBTC. If you do not add your Payment
          Credentials into the message section of this transaction, you will not
          receive cBTC into your Cardano address.
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
