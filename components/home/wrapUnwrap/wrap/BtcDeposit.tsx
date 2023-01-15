import { Dialog, Transition } from "@headlessui/react";
import { QuestionMarkCircleIcon } from "@heroicons/react/24/outline";
import { XMarkIcon } from "@heroicons/react/24/solid";
import Image from "next/image";
import React, { Fragment, useCallback, useEffect } from "react";
import WaitingConfirmation from "../WaitingConfirmation";
import { MdFileCopy } from "react-icons/md";
import ScanningForDeposit from "./ScanningForDeposit";

interface Props {
  isOpen: boolean;
  setIsOpen: (value: boolean) => void;
  setBtcDepositSuccessOpen: (value: boolean) => void;
}

const BtcDeposit = ({ isOpen, setIsOpen, setBtcDepositSuccessOpen }: Props) => {
  const [isScanningShow, setIsScanningShow] = React.useState<boolean>(false);

  const closeModal = () => {
    setIsOpen(false);
    setBtcDepositSuccessOpen(false);
  };

  useEffect(() => {
    if (isScanningShow) {
      setTimeout(() => {
        setIsScanningShow(false);
        setBtcDepositSuccessOpen(true);
      }, 3000);
    }
  }, [isScanningShow]);
  return (
    <Transition appear show={isOpen} as={Fragment}>
      <Dialog as="div" className="relative z-10" onClose={closeModal}>
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
                <h3 className="bg-black/[0.5] font-semibold font-nunito-sans text-base text-center p-4 flex items-center gap-2 justify-center">
                  <Image
                    alt="BTC"
                    width={25}
                    height={25}
                    src={"/images/logo/bitcoin.png"}
                  />
                  BTC Deposit
                </h3>
                <div className="p-6">
                  <div className="flex flex-col items-center justify-center gap-4">
                    <p className="text-base font-nunito-sans">Send 0.33 BTC</p>
                    <div className="flex flex-col items-center text-xs text-neutral-200 gap-2 font-nunito-sans font-light tracking-wide">
                      <p className=" text-xs">In a single transaction to:</p>
                      <div className="text-sm py-2 px-8 border border-neutral-400 rounded-lg flex items-center gap-1">
                        <p>tb1q03i4ngjso93ld8ehtksnf5mndlds8rndnmqoe</p>
                        <MdFileCopy className="w-4 h-4 text-neutral-500" />
                      </div>
                      <p>
                        Within{" "}
                        <span className=" font-semibold">0 Days 23:59:33</span>
                      </p>
                      <p className="max-w-[342px] text-center my-6">
                        <span className="font-semibold">Attention:</span> Some
                        Bitcoin wallets display values in mBTC. In this case,
                        ensure you send the correct amount:{" "}
                        <span className="font-semibold">333mBTC</span>
                      </p>
                      <div>
                        <Image
                          src={"/images/assets/qrcode.png"}
                          alt="Qr code Scanner"
                          height={144}
                          width={144}
                        />
                      </div>
                      <p className=" max-w-[280px] text-center my-6">
                        <b className=" font-semibold">Note:</b> Payments may
                        take over 10 minutes to confirm. Don’t worry, your funds
                        are safu :)
                      </p>
                      <button
                        onClick={() => setIsScanningShow(true)}
                        className={
                          "bg-primary-blue-color text-gray-50 w-full text-center p-3 rounded-lg text-base"
                        }
                      >
                        I have sent the deposit
                      </button>
                    </div>
                    <ScanningForDeposit
                      isOpen={isScanningShow}
                      setIsOpen={setIsScanningShow}
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
