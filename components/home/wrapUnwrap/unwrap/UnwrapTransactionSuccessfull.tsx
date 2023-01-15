import { Dialog, Transition } from "@headlessui/react";
import {
  CheckCircleIcon,
  QuestionMarkCircleIcon,
} from "@heroicons/react/24/outline";
import { XMarkIcon } from "@heroicons/react/24/solid";
import Image from "next/image";
import React, { Fragment } from "react";
import WaitingConfirmation from "../WaitingConfirmation";

interface Props {
  isOpen: boolean;
  setIsOpen: (value: boolean) => void;
  setSuccessNotify: (value: boolean) => void;
  successNotify: boolean;
}

const UnwrapTransactionSuccessfull = ({
  isOpen,
  setIsOpen,
  setSuccessNotify,
  successNotify,
}: Props) => {
  const [isWaitingShow, setIsWaitingShow] = React.useState<boolean>(false);

  const closeModal = () => {
    setIsOpen(false);
    setSuccessNotify(false);
  };

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
                <div className="flex flex-col gap-4">
                  <div className="flex items-center justify-between text-sm">
                    <h3 className=" font-semibold font-nunito-sans text-base flex items-center gap-2">
                      Unwrap Transaction Successfull{" "}
                      <CheckCircleIcon className="w-5 h-5 text-green-500 -mt-0.5" />
                    </h3>
                    <XMarkIcon
                      type="button"
                      className="text-white w-5 h-5 cursor-pointer"
                      onClick={() => setIsOpen(false)}
                    />
                  </div>
                  {/* coin Price  */}
                  <div className=" mx-9">
                    <div className="flex justify-between py-2 text-sm">
                      <div className="flex items-center gap-2 bg-primary-mid-dark-color rounded-md border border-neutral-800 px-2.5 py-1.5 ">
                        <Image
                          src={"/images/logo/bitcoin-blue.png"}
                          alt="Bitcoin"
                          height={20}
                          width={20}
                        />
                        <p>cBTC</p>
                      </div>
                      <Image
                        src={"/images/assets/right-arrow.png"}
                        alt="Right Arrow"
                        className=" object-contain"
                        height={15}
                        width={80}
                      />
                      <div className="flex items-center gap-2 bg-primary-mid-dark-color rounded-md border border-neutral-800 px-2.5 py-1.5 ">
                        <Image
                          src={"/images/logo/bitcoin.png"}
                          alt="Bitcoin blue"
                          height={20}
                          width={20}
                        />
                        <p>BTC</p>
                      </div>
                    </div>
                    <div className=" justify-between flex text-lg font-nunito-sans">
                      <p>0.3000</p>
                      <p>~.29585</p>
                    </div>
                  </div>
                  <p className="text-[11px] text-neutral-300 font-nunito-sans text-center my-2">
                    Your cBTC payment was successfully submitted{" "}
                  </p>
                  <p className="text-xs text-neutral-300 font-nunito-sans text-center mb-2 leading-relaxed max-w-[300px] mx-auto">
                    BTC will be sent to your BTC wallet shortly This may take up
                    to 24 hours. Don’t worry, your funds are safu {":)"}
                  </p>
                  {/* bridge fee and btc address  */}
                  {/* bridge fee */}
                  <div className="rounded-lg p-4 bg-primary-mid-dark-color font-nunito-sans text-xs space-y-2">
                    <div className=" font-medium flex justify-between">
                      <h4 className="flex gap-1 items-center font-bold">
                        Bridge Fee:
                        <QuestionMarkCircleIcon className="w-4 h-4 text-neutral-600" />
                      </h4>
                      <p className="font-bold">45 ₳</p>
                    </div>
                    <div className="text-xs justify-between flex">
                      <h4>BTC Network Fee:</h4>
                      <p>~.000085 ₿ </p>
                    </div>
                    <div className="flex justify-between">
                      <h4 className="flex gap-1 items-center">
                        Minimum BTC Received:
                      </h4>
                      <p>.29903001 ₿ </p>
                    </div>
                  </div>
                  {/* btc address */}
                  <div className="rounded-lg p-4 bg-primary-mid-dark-color font-nunito-sans text-xs space-y-1">
                    <div>
                      <h4 className="flex gap-1 items-center">
                        BTC Source Address:
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

export default UnwrapTransactionSuccessfull;
