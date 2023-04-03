import { Dialog, Transition } from "@headlessui/react";
import Image from "next/image";
import { Fragment, useContext, useState } from "react";
import { GlobalContext } from "../../../GlobalContext";
import BtcDepositReceivedSuccess from "./BtcDepositReceivedSuccess";

interface Props {
  isOpen: boolean;
  setIsOpen: (value: boolean) => void;
  setBtcDepositSuccessOpen: (value: boolean) => void;
  closeAllModal: any;
  wrap?: boolean;
}

const BtcDeposit = ({ isOpen, setIsOpen, closeAllModal, wrap }: Props) => {
  const { config } = useContext(GlobalContext);
  const [viewAddress, setViewAddress] = useState<boolean>(false);
  const [addErgAddress, setAddErgAddress] = useState(false);
  const [showTxId, setShowTxId] = useState(false);
  const [btcDepositSuccessOpen, setBtcDepositSuccessOpen] =
    useState<boolean>(false);

  const closeModal = () => {
    setIsOpen(false);
    setTimeout(() => {
      setViewAddress(false);
      setAddErgAddress(false);
      setBtcDepositSuccessOpen(false);
    }, 1000);
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
              <Dialog.Panel className="w-full max-w-md transform overflow-hidden rounded-2xl border border-neutral-800 bg-primary-full-dark-color  text-left align-middle shadow-xl transition-all">
                <h3
                  className={`${
                    !addErgAddress && "blur-[2px]"
                  } bg-black/[0.5] font-semibold font-nunito-sans text-base text-center p-4 flex items-center gap-2 justify-center`}
                >
                  <Image
                    alt="BTC"
                    width={25}
                    height={25}
                    src={"/images/logo/bitcoin.png"}
                  />
                  BTC Deposit
                </h3>
                <div className="px-4 py-4 w-full">
                  <div className="flex flex-col items-center justify-center gap-4 w-full">
                    <p
                      className={`${
                        !addErgAddress && "blur-[2px]"
                      } text-base text-center font-nunito-sans`}
                    >
                      <p>Using Moonshine Wallet,</p>
                      Send 0.33 BTC
                    </p>
                    <div className="w-full flex flex-col items-center text-xs text-neutral-200 gap-2 font-nunito-sans font-light tracking-wide">
                      <p
                        className={`${!addErgAddress && "blur-[2px]"} text-xs`}
                      >
                        In a single transaction to:
                      </p>
                      <div
                        className={`${
                          !addErgAddress && "blur-[2px]"
                        } w-full text-sm py-0.5 px-8 border border-neutral-400 rounded-lg flex items-center gap-1 flex justify-center`}
                      >
                        {viewAddress ? (
                          <p className="py-2">{config.btcWrapAddress}</p>
                        ) : (
                          <button
                            onClick={() => setViewAddress(true)}
                            className="bg-[#F7931A] hover:bg-[#F7931A]/80  transition-all px-6 py-2 text-xs mx-auto rounded-md "
                          >
                            View Address
                          </button>
                        )}
                      </div>
                      {/* <p className={`${!addErgAddress && "blur-[2px]"}`}>
                        Within{" "}
                        <span className=" font-semibold">0 Days 23:59:33</span>
                      </p> */}
                      <div className="max-w-[342px] text-center my-2 space-y-4">
                        <h2 className="font-bold text-xl text-[#F7931A]">
                          Attention:
                        </h2>
                        <p>
                          <span className="text-[#F7931A] font-bold">
                            Add your ERG address
                          </span>{" "}
                          in the “Message (Optional)” section in your Moonshine
                          Wallet before sending this deposit.
                        </p>
                        <p>
                          This ERG address will receive eBTC. If you do not add
                          your ERG address into the message section of this
                          transaction, you will not receive eBTC.
                        </p>
                      </div>
                      <div>
                        <Image
                          src={"/images/assets/qrcode.png"}
                          alt="Qr code Scanner"
                          height={144}
                          width={144}
                          className={`${!viewAddress && "blur-[2px]"}`}
                        />
                      </div>
                      <p
                        className={`${
                          !addErgAddress && "blur-[2px]"
                        } max-w-[280px] text-center my-2`}
                      >
                        <b className=" font-semibold">Note:</b> Payments may
                        take over 10 minutes to confirm. Don’t worry, your funds
                        are safu :)
                      </p>
                      {addErgAddress ? (
                        <button
                          onClick={() =>
                            wrap
                              ? setBtcDepositSuccessOpen(true)
                              : setShowTxId(true)
                          }
                          className={
                            "bg-primary-blue-color font-nunito-sans font-semibold hover:bg-primary-blue-color/80 transition-all text-gray-50 w-full text-center p-3 rounded-lg text-sm"
                          }
                        >
                          I have sent the deposit
                        </button>
                      ) : (
                        <button
                          onClick={() => setAddErgAddress(true)}
                          className={
                            "bg-primary-blue-color font-nunito-sans font-semibold hover:bg-primary-blue-color/80  transition-all text-gray-50 w-full text-center p-3 rounded-lg text-sm"
                          }
                        >
                          I will add my ERG address
                        </button>
                      )}
                    </div>
                    <BtcDepositReceivedSuccess
                      isOpen={btcDepositSuccessOpen}
                      setIsOpen={setBtcDepositSuccessOpen}
                      closeAllModal={closeAllModal}
                      // setBtcDepositOpen={setBtcDepositOpen}
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
