import { Dialog, Transition } from "@headlessui/react";
import { ExclamationCircleIcon } from "@heroicons/react/24/solid";
import { XMarkIcon } from "@heroicons/react/24/solid";
import React, { Fragment } from "react";
import Notifications from "./Notifications";

interface Props {
  isOpen: boolean;
  setIsOpen: (value: boolean) => void;
  setSuccessNotify: (value: boolean) => void;
}

const WaitingConfirmation = ({
  isOpen,
  setIsOpen,
  setSuccessNotify,
}: Props) => {
  const closeModal = () => {
    setIsOpen(true);
  };

  return (
    <>
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
                <Dialog.Panel className="w-full flex flex-col gap-4 max-w-md transform overflow-hidden rounded-2xl border border-neutral-800 bg-primary-full-dark-color p-6 text-left align-middle shadow-xl transition-all">
                  <div className="flex items-center justify-between text-sm border-b border-neutral-600 pb-2">
                    <h3 className="font-semibold font-nunito-sans text-base">
                      Waiting for confirmation
                    </h3>
                    <XMarkIcon
                      type="button"
                      className="text-white w-5 h-5 cursor-pointer"
                      onClick={() => setIsOpen(false)}
                    />
                  </div>
                  <div className="flex items-center justify-center">
                    {/* loader   */}
                    <div className="w-20 h-20 border-8 border-b-[#76D572] rounded-full animate-spin border-black" />
                  </div>
                  <p className="text-xs font-nunito-sans text-neutral-200 text-center flex flex-col justify-center items-center gap-[2px]">
                    Sending 0.30 cBTC for BTC
                    <span>Paying 45 ADA Bridge Fee</span>
                  </p>
                  <p className="text-xs text-neutral-400 text-center">
                    Confirm this transaction in your wallet
                  </p>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition>
    </>
  );
};

export default WaitingConfirmation;
