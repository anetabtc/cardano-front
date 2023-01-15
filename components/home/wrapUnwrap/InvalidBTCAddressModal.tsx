import { Dialog, Transition } from "@headlessui/react";
import { ExclamationCircleIcon } from "@heroicons/react/24/solid";
import { XMarkIcon } from "@heroicons/react/24/solid";
import React, { Fragment } from "react";

interface Props {
  isOpen: boolean;
  setIsOpen: (value: boolean) => void;
}

const InvalidBTCAddressModal = ({ isOpen, setIsOpen }: Props) => {
  const closeModal = () => {
    setIsOpen(true);
  };

  // valid btc address example. use this or any valid btc address on BTC address field to avoid the error
  // 17VZNX1SN5NtKa8UQFxwQbFeFc3iqRYhem

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
              <Dialog.Panel className="w-full max-w-md transform overflow-hidden rounded-2xl border border-neutral-800 bg-primary-full-dark-color p-6 text-left align-middle shadow-xl transition-all">
                <div className="flex flex-col justify-center items-center gap-4 relative">
                  <div>
                    <div className="flex items-center justify-center text-sm gap-2">
                      <ExclamationCircleIcon className="w-6 h-6 text-red-500" />
                      <h3 className=" font-medium font-nunito-sans text-base text-red-500">
                        Please enter a valid BTC Source Address
                      </h3>
                    </div>
                  </div>
                  <button
                    onClick={closeModal}
                    className=" bg-primary-blue-color text-white rounded-lg px-8 py-2"
                  >
                    Ok
                  </button>
                  <p className="absolute text-xs text-neutral-600 top-5">
                    Use this address: 17VZNX1SN5NtKa8UQFxwQbFeFc3iqRYhem
                  </p>
                </div>
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </div>
      </Dialog>
    </Transition>
  );
};

export default InvalidBTCAddressModal;
