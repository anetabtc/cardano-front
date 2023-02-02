import { Dialog, Transition } from "@headlessui/react";
import {
  ArrowLeftIcon,
  ExclamationCircleIcon,
} from "@heroicons/react/24/solid";
import { XMarkIcon } from "@heroicons/react/24/solid";
import Image from "next/image";
import React, { Fragment, useEffect, useState } from "react";
import ScanningForDeposit from "./ScanningForDeposit";

interface Props {
  isOpen: boolean;
  setIsOpen: (value: boolean) => void;
  setBtcDepositSuccessOpen: (value: boolean) => void;
}

const EnterTXId = ({ isOpen, setIsOpen, setBtcDepositSuccessOpen }: Props) => {
  const [txId, setTxId] = useState<string>("");
  const [isScanningShow, setIsScanningShow] = useState<boolean>(false);

  const closeModal = () => {
    setIsOpen(true);
  };

  return (
    <>
      <Transition appear show={isOpen} as={Fragment}>
        <Dialog
          as="div"
          className="relative z-20 font-nunito-sans"
          onClose={closeModal}
        >
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
                      Enter BTC TX ID
                    </h3>
                  </div>
                  <div className="p-3 text-sm font-semibold  text-center text-neutral-300">
                    Enter the BTC Transaction ID from the BTC deposit
                    transaction you just submitted.
                  </div>
                  <div>
                    <label
                      className="text-xs text-gray-100 "
                      htmlFor="btc-address"
                    >
                      BTC Transaction ID{" "}
                    </label>
                    <input
                      value={txId}
                      onChange={(e) => {
                        setTxId(e.target.value);
                      }}
                      type={"text"}
                      placeholder="Enter TX ID"
                      className={`w-full text-gray-300 text-sm bg-primary-mid-dark-color p-2.5 rounded-lg outline-none mt-1 placeholder:text-xs`}
                      required
                    />
                  </div>
                  <button
                    onClick={() => {
                      setIsScanningShow(true);
                      setTimeout(() => {
                        setIsOpen(false);
                      }, 2000);
                    }}
                    className={
                      "bg-primary-blue-color hover:bg-primary-blue-color/80  transition-all text-gray-50 w-full text-center p-3 rounded-lg text-sm font-semibold"
                    }
                  >
                    Continue
                  </button>
                  <ScanningForDeposit
                    isOpen={isScanningShow}
                    setIsOpen={setIsScanningShow}
                    setBtcDepositSuccessOpen={setBtcDepositSuccessOpen}
                  />
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition>
    </>
  );
};

export default EnterTXId;
