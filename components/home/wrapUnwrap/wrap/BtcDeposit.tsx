import { Dialog, Transition } from "@headlessui/react";
import Image from "next/image";
import { Fragment, useState } from "react";
import BtcDepositSent from "./BtcDepositReceivedSuccess";

interface Props {
  isOpen: boolean;
  setIsOpen: (value: boolean) => void;
  depositAmount: string;
  toReceiveAmount: string;
  depositAddress: string;
}

const BtcDeposit = ({
  isOpen,
  setIsOpen,
  depositAmount,
  toReceiveAmount,
  depositAddress,
}: Props) => {
  const [isDepositAddressShown, setIsDepositAddressShown] =
    useState<boolean>(false);
  const [isFullInfoShown, setIsFullInfoShown] = useState(false);
  const [isBtcDepositSentModelOpen, setIsBtcDepositSentModelOpen] =
    useState<boolean>(false);

  const closeModal = () => {
    setIsOpen(false);
    setIsDepositAddressShown(false);
    setIsFullInfoShown(false);
    setIsBtcDepositSentModelOpen(false);
  };

  return (
    <Transition appear show={isOpen} as={Fragment}>
      <Dialog as="div" className="relative z-10 w-full" onClose={closeModal}>
        <Transition.Child
          as={Fragment}
          enter="ease-out duration-300"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in duration-200"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="fixed inset-0 bg-black bg-opacity-50" />
        </Transition.Child>

        <div className="fixed inset-0 overflow-y-auto">
          <div className="flex min-h-full items-center justify-center p-4 text-center">
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 scale-95"
              enterTo="opacity-100 scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 scale-100"
              leaveTo="opacity-0 scale-95"
            >
              <Dialog.Panel className="w-full max-w-lg transform overflow-hidden rounded-2xl border border-neutral-800 bg-primary-full-dark-color  text-left align-middle shadow-xl transition-all">
                <h3
                  className={`bg-black/[0.5] font-semibold font-nunito-sans text-base text-center p-4 flex items-center gap-2 justify-center`}
                >
                  <Image
                    alt="BTC"
                    width={20}
                    height={20}
                    src={"/images/logo/bitcoin.png"}
                  />
                  Wrap BTC
                </h3>

                {/* Modal body */}
                <div className="px-8 py-8 w-full">
                  <div className="flex flex-col items-center justify-center gap-4 w-full">
                    <p
                      className={`${
                        !isFullInfoShown && "blur-[2px]"
                      } text-base text-center font-nunito-sans`}
                    >
                      Send {depositAmount} BTC
                    </p>
                    <div className="w-full flex flex-col items-center text-neutral-200 gap-2 font-nunito-sans font-light tracking-wide">
                      <p className={`${!isFullInfoShown && "blur-[2px]"}`}>
                        In a single transaction to:
                      </p>
                      <div
                        className={`${
                          !isFullInfoShown && "blur-[2px]"
                        } w-full  py-0.5 px-8 border border-neutral-400 rounded-lg flex items-center gap-1 flex justify-center`}
                      >
                        {isDepositAddressShown ? (
                          <p className="py-2">{depositAddress}</p>
                        ) : (
                          <button
                            onClick={() => setIsDepositAddressShown(true)}
                            className="bg-[#F7931A] hover:bg-[#F7931A]/80  transition-all px-6 py-2 mx-auto rounded-md "
                          >
                            View Address
                          </button>
                        )}
                      </div>

                      <div className="text-center my-2 space-y-4">
                        <h2 className="font-bold text-xl text-[#F7931A]">
                          Attention:
                        </h2>
                        <p>
                          <span className="text-[#F7931A] font-bold">
                            Add your Cardano address
                          </span>{" "}
                          in the “Message (Optional)” section in your Moonshine
                          Wallet before sending this deposit.
                        </p>
                        <p>
                          This Cardano address will receive cBTC. If you do not
                          add your Cardano address into the message section of
                          this transaction, you will not receive cBTC.
                        </p>
                      </div>
                      <p
                        className={`${
                          !isFullInfoShown && "blur-[2px]"
                        } text-center my-2`}
                      >
                        <b className=" font-semibold">Note:</b> Payments may
                        take over 10 minutes to confirm. Don&apos;t worry, your
                        funds are safu :)
                      </p>

                      <button
                        onClick={() => {
                          if (isFullInfoShown) {
                            setIsBtcDepositSentModelOpen(true);
                            return;
                          }
                          setIsFullInfoShown(true);
                        }}
                        className={
                          "bg-primary-blue-color font-nunito-sans font-semibold hover:bg-primary-blue-color/80 transition-all text-gray-50 w-full text-center p-3 rounded-lg "
                        }
                      >
                        {isFullInfoShown
                          ? "I have sent the deposit"
                          : "I will add my Cardano address"}
                      </button>
                    </div>
                    <BtcDepositSent
                      isOpen={isBtcDepositSentModelOpen}
                      closeAll={closeModal}
                      depositAmount={depositAmount}
                      toReceiveAmount={toReceiveAmount}
                    />
                  </div>
                </div>
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </div>
      </Dialog>
    </Transition>
  );
};

export default BtcDeposit;
