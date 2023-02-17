import { Dialog, Transition } from "@headlessui/react";
import { QuestionMarkCircleIcon } from "@heroicons/react/24/outline";
import { XMarkIcon } from "@heroicons/react/24/solid";
import Image from "next/image";
import React, { Fragment } from "react";
import WaitingConfirmation from "../WaitingConfirmation";
import ButtonLoader from "../../../partials/loader/ButtonLoader";

interface Props {
  isOpen: boolean;
  setIsOpen: (value: boolean) => void;
  setSuccessNotify: (value: boolean) => void;
  successNotify: boolean;
}

const ConfirmUnwrap = ({
  isOpen,
  setIsOpen,
  setSuccessNotify,
  successNotify,
}: Props) => {
  const [isWaitingShow, setIsWaitingShow] = React.useState<boolean>(false);
  const [buttonLoader, setButtonLoader] = React.useState<boolean>(false);
  const [showBridgeDetails, setShowBridgeDetails] =
    React.useState<boolean>(false);

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
                      Confirm Unwrap
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
                  {/* bridge fee and btc address  */}
                  {/* bridge fee */}
                  <div className="rounded-lg relative p-4 bg-primary-mid-dark-color font-nunito-sans text-xs space-y-2">
                    <div className=" font-medium flex justify-between">
                      {showBridgeDetails && (
                        <div className="bg-[#36435A] absolute -top-24 left-1.5 w-44 rounded-lg p-4">
                          0.05% of eBTC Quantity Uwrapped + 0.0001 eBTC + 0.05
                          ERG
                          <div className="-mt-1 w-10 h-10 bg-[#36435A] absolute mx-auto left-[4rem] rotate-45" />
                        </div>
                      )}
                      <h4 className="flex gap-1 items-center font-bold">
                        Bridge Fee:
                        <QuestionMarkCircleIcon
                          onMouseEnter={() => setShowBridgeDetails(true)}
                          onMouseLeave={() => setShowBridgeDetails(false)}
                          className="w-4 h-4 text-neutral-200 cursor-pointer"
                        />
                      </h4>
                      <div className="flex items-center gap-3">
                        <p>0.005 cBTC</p>
                        <span>+</span>
                        <p>0.05 ERG </p>
                      </div>
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
                  <button
                    disabled={buttonLoader}
                    onClick={() => {
                      setButtonLoader(true);
                      setTimeout(() => {
                        setButtonLoader(false);
                        submitFinalData();
                        setIsWaitingShow(true);
                      }, 2000);
                    }}
                    className={
                      "bg-primary-blue-color hover:bg-primary-blue-color/80 flex items-center justify-center gap-2  transition-all font-semibold font-nunito-sans text-gray-50 w-full text-center p-3 rounded-lg text-sm"
                    }
                  >
                    {buttonLoader && <ButtonLoader />} Confirm Unwrap
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

export default ConfirmUnwrap;
