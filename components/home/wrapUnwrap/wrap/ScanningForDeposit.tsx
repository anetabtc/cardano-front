import { Dialog, Transition } from "@headlessui/react";
import {
  ArrowLeftIcon,
  ExclamationCircleIcon,
} from "@heroicons/react/24/solid";
import { XMarkIcon } from "@heroicons/react/24/solid";
import Image from "next/image";
import React, { Fragment } from "react";

interface Props {
  isOpen: boolean;
  setIsOpen: (value: boolean) => void;
}

const ScanningForDeposit = ({ isOpen, setIsOpen }: Props) => {
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
                <Dialog.Panel className="w-full flex flex-col gap-4 max-w-md transform overflow-hidden rounded-2xl border border-neutral-800 bg-[#0b0b0b] p-4 text-left align-middle shadow-xl transition-all">
                  <div className="text-sm pb-2">
                    <ArrowLeftIcon
                      type="button"
                      className="text-white w-5 h-5 cursor-pointer float-left"
                      onClick={() => setIsOpen(false)}
                    />
                    <h3 className="font-semibold text-center font-nunito-sans text-base">
                      Scanning For Deposit
                    </h3>
                  </div>
                  <div className="flex items-center justify-center">
                    {/* loader   */}
                    <div className="w-20 my-8 h-20 border-8 border-b-[#76D572] rounded-full animate-spin border-black" />
                  </div>
                  <div className="p-3 text-xs bg-primary-mid-dark-color rounded-lg flex items-center justify-between text-neutral-300">
                    <h2>Scanning For</h2>
                    <div className="flex items-center gap-1 text-sm">
                      <Image
                        src={"/images/logo/bitcoin.png"}
                        width={20}
                        height={20}
                        alt="Bitcoin"
                      />
                      0.33 BTC
                    </div>
                  </div>
                  <div className="p-3 font-nunito-sans text-xs bg-primary-mid-dark-color rounded-lg flex flex-col gap-1 tracking-wide text-neutral-300">
                    <span className=" font-medium">
                      From BTC Source Address:
                    </span>
                    <span>3FZbgi29cpjq2GjdwV8eyHuJJnkLtktZc5</span>
                  </div>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition>
    </>
  );
};

export default ScanningForDeposit;
