import { Dialog, Transition } from "@headlessui/react";
import {
  CheckCircleIcon,
  QuestionMarkCircleIcon,
} from "@heroicons/react/24/outline";
import { XMarkIcon } from "@heroicons/react/24/solid";
import Image from "next/image";
import React, { Fragment } from "react";
import WaitingConfirmation from "../WaitingConfirmation";
import { BsCheck2 } from "react-icons/bs";

interface Props {
  isOpen: boolean;
  setIsOpen: (value: boolean) => void;
}

const BtcDepositReceivedSuccess = ({ isOpen, setIsOpen }: Props) => {
  const closeModal = () => {
    setIsOpen(false);
  };

  return (
    <Transition appear show={isOpen} as={Fragment}>
      <Dialog as="div" className="relative z-20" onClose={closeModal}>
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
              <Dialog.Panel className="w-full max-w-md transform overflow-hidden rounded-2xl border border-neutral-800 bg-primary-full-dark-color p-6 text-left align-middle shadow-xl transition-all">
                <div className="flex flex-col gap-4">
                  <div className="flex items-center justify-between text-sm">
                    <h3 className=" font-semibold font-nunito-sans text-base flex items-center gap-2">
                      BTC Deposit Received{" "}
                      <CheckCircleIcon className="w-5 h-5 text-green-500 -mt-0.5" />
                    </h3>
                  </div>
                  {/* coin Price  */}
                  <div className="mx-auto">
                    <BsCheck2 className="w-20 h-20 text-green-500" />
                  </div>
                  <p className="text-[11px] text-neutral-300 font-nunito-sans text-center my-2">
                    Your BTC deposit was received.{" "}
                  </p>
                  <p className="text-xs text-neutral-300 font-nunito-sans text-center mb-2 leading-relaxed max-w-[320px] mx-auto">
                    cBTC will be sent to your Cardano wallet shortly. This may
                    take up to 24 hours. Don’t worry, your funds are safu :)
                  </p>
                  {/* bridge fee and btc address  */}
                  {/* bridge fee */}
                  <div className="rounded-lg p-4 bg-primary-mid-dark-color font-nunito-sans text-xs space-y-2">
                    <div className=" font-medium flex justify-between">
                      <h4 className="flex gap-1 items-center">BTC Deposited</h4>
                      <div className=" flex items-center gap-1">
                        <Image
                          src={"/images/logo/bitcoin.png"}
                          alt="Bitcoin"
                          width={20}
                          height={20}
                        />
                        0.33 BTC
                      </div>
                    </div>
                    <div className=" font-medium flex justify-between">
                      <h4 className="flex gap-1 items-center">
                        cBTC Deposited
                      </h4>
                      <div className=" flex items-center gap-1">
                        <Image
                          src={"/images/logo/bitcoin-blue.png"}
                          alt="Bitcoin Blue"
                          width={20}
                          height={20}
                        />
                        0.33 cBTC
                      </div>
                    </div>
                  </div>
                  {/* btc address */}
                  <div className="rounded-lg p-4 bg-primary-mid-dark-color font-nunito-sans text-xs space-y-1">
                    <div>
                      <h4 className="flex gap-1 items-center">
                        cBTC Destination Address:
                      </h4>
                    </div>
                    <p className=" text-neutral-300">
                      3FZbgi29cpjq2GjdwV8eyHuJJnkLtktZc5
                    </p>
                  </div>
                  <p className="text-[11px] text-neutral-300 font-nunito-sans text-center mt-2">
                    Your unique anetaBTC ID for this entire transaction is:{" "}
                    <h4 className="text-[11px] text-neutral-200 font-semibold text-center mt-1">
                      0qcJoaaDhKrF47bfP03r
                    </h4>
                  </p>
                  <p className="text-xs text-neutral-300 font-nunito-sans text-center mb-2 leading-relaxed max-w-[300px] mx-auto">
                    This unique ID is also available in your Transactions tab.
                    If you need support, this ID will help us assist you.
                  </p>
                  <button
                    onClick={() => {
                      closeModal();
                    }}
                    className={
                      "bg-primary-blue-color text-gray-50 w-full text-center p-3 rounded-lg text-sm"
                    }
                  >
                    Close
                  </button>
                </div>
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </div>
      </Dialog>
    </Transition>
  );
};

export default BtcDepositReceivedSuccess;
