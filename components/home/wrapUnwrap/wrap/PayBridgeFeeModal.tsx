import { Dialog, Transition } from "@headlessui/react";
import { QuestionMarkCircleIcon } from "@heroicons/react/24/outline";
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

const PayBridgeFeeModal = ({
  isOpen,
  setIsOpen,
  setSuccessNotify,
  successNotify,
}: Props) => {
  const [isWaitingShow, setIsWaitingShow] = React.useState<boolean>(false);
  const closeModal = () => {
    setIsOpen(false);
  };

  const submitFinalData = React.useCallback(() => {
    setTimeout(() => {
      setSuccessNotify(true);
    }, 3000);
  }, []);

  React.useEffect(() => {
    !isOpen && setIsWaitingShow(false);
  }, [isOpen]);

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
                    <h3 className=" font-semibold font-nunito-sans text-base">
                      Pay Bridge Fee
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
                          src={"/images/logo/bitcoin.png"}
                          alt="Bitcoin"
                          height={20}
                          width={20}
                        />
                        <p>BTC</p>
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
                          src={"/images/logo/bitcoin-blue.png"}
                          alt="Bitcoin blue"
                          height={20}
                          width={20}
                        />
                        <p>BTC</p>
                      </div>
                    </div>
                    <div className=" justify-between flex text-lg font-nunito-sans">
                      <p>0.33000</p>
                      <p>0.33300</p>
                    </div>
                  </div>
                  {/* bridge fee and btc address  */}
                  {/* bridge fee */}
                  <div className="rounded-lg p-4 bg-primary-mid-dark-color font-nunito-sans text-xs space-y-2">
                    <div className=" font-medium flex justify-between">
                      <h4 className="flex gap-1 items-center">
                        Bridge Fee:
                        <QuestionMarkCircleIcon className="w-4 h-4 text-neutral-600" />
                      </h4>
                      <p>45 ₳</p>
                    </div>
                    <div className="text-xs justify-between flex">
                      <h4>BTC Wrap Request:</h4>
                      <p>0.33 BTC</p>
                    </div>
                  </div>
                  {/* btc address */}
                  <div className=" rounded-lg p-4 bg-primary-mid-dark-color font-nunito-sans text-xs space-y-1">
                    <div>
                      <h4 className="flex gap-1 items-center">
                        BTC Source Address:
                      </h4>
                    </div>
                    <p className=" text-neutral-300">
                      3FZbgi29cpjq2GjdwV8eyHuJJnkLtktZc5
                    </p>
                  </div>
                  <button
                    onClick={() => {
                      submitFinalData();
                      setIsWaitingShow(true);
                    }}
                    className={
                      "bg-primary-blue-color font-nunito-sans font-semibold text-gray-50 w-full text-center p-3 rounded-lg text-sm"
                    }
                  >
                    Pay Bridge Fee
                  </button>
                  <WaitingConfirmation
                    isOpen={isWaitingShow}
                    setIsOpen={setIsWaitingShow}
                    setSuccessNotify={setSuccessNotify}
                  />
                </div>
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </div>
      </Dialog>
    </Transition>
  );
};

export default PayBridgeFeeModal;
