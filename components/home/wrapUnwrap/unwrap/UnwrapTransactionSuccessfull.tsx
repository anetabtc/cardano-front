import { Dialog, Transition } from "@headlessui/react";
import { CheckCircleIcon } from "@heroicons/react/24/outline";
import { XMarkIcon } from "@heroicons/react/24/solid";
import Image from "next/image";
import { Fragment } from "react";

interface Props {
  isOpen: boolean;
  setIsOpen: (value: boolean) => void;
}

const UnwrapTransactionSuccessfull = ({ isOpen, setIsOpen }: Props) => {
  const closeModal = () => {
    setIsOpen(false);
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
              <Dialog.Panel className="w-full max-w-lg transform overflow-hidden rounded-2xl border border-neutral-800 bg-primary-full-dark-color p-6 text-left align-middle shadow-xl transition-all">
                <div className="flex flex-col gap-4">
                  <div className="flex items-center justify-between ">
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
                    <div className="flex justify-between py-2 ">
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
                  <p className=" text-neutral-300 font-nunito-sans text-center mb-2 leading-relaxed max-w-[300px] mx-auto">
                    BTC will be sent to your BTC wallet shortly This may take up
                    to 24 hours. Don’t worry, your funds are safu {":)"}
                  </p>
                  {/* btc address */}
                  <div className="rounded-lg p-4 bg-primary-mid-dark-color font-nunito-sans  space-y-1">
                    <div>
                      <h4 className="flex gap-1 items-center">
                        BTC Destination Address:
                      </h4>
                    </div>
                    <p className=" text-neutral-300">
                      3FZbgi29cpjq2GjdwV8eyHuJJnkLtktZc5
                    </p>
                  </div>

                  <p className=" text-neutral-300 font-nunito-sans text-center leading-relaxed max-w-[320px] mx-auto">
                    The status and details of this transaction can be found in
                    the “Transactions” tab on the side menu.
                  </p>

                  <div className="rounded-lg text-center p-4 bg-primary-mid-dark-color font-nunito-sans  space-y-1">
                    <h3 className="font-semibold text-[13px] mb-3">Support</h3>
                    If you need support, your BTC transaction ID and your ERG
                    transaction ID will help us assist you.
                  </div>
                  <button
                    onClick={() => {
                      closeModal();
                    }}
                    className={
                      "bg-primary-blue-color hover:bg-primary-blue-color/80 transition-all font-nunito-sans font-semibold text-gray-50 w-full text-center p-3 rounded-lg "
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
