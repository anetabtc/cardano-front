import { Dialog, Transition } from "@headlessui/react";
import Image from "next/image";
import { Fragment } from "react";

interface Props {
  isOpen: boolean;
  closeAll: any;
  depositAmount: string;
  toReceiveAmount: string;
}

const BtcDepositReceivedSuccess = ({
  isOpen,
  closeAll,
  depositAmount,
  toReceiveAmount,
}: Props) => {
  return (
    <Transition appear show={isOpen} as={Fragment}>
      <Dialog as="div" className="relative z-20" onClose={closeAll}>
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
              <Dialog.Panel className="w-full max-w-md transform overflow-hidden rounded-2xl border border-neutral-800 bg-primary-full-dark-color p-4 text-left align-middle shadow-xl transition-all">
                <div className="flex flex-col gap-4">
                  <div className="flex items-center justify-between text-sm">
                    <h3 className=" font-semibold font-nunito-sans text-base flex items-center gap-2">
                      BTC Deposit
                    </h3>
                  </div>
                  {/* coin Price  */}
                  <div className=" mx-9">
                    <div className="flex justify-between items-start py-2 text-sm">
                      <div className="flex flex-col justify-center items-center gap-1">
                        <div className="flex items-center gap-2 bg-primary-mid-dark-color rounded-md border border-neutral-800 px-2.5 py-1.5 ">
                          <Image
                            src={"/images/logo/bitcoin.png"}
                            alt="Bitcoin"
                            height={20}
                            width={20}
                          />
                          <p>BTC</p>
                        </div>
                        <p className="text-lg font-nunito-sans">
                          {depositAmount}
                        </p>
                      </div>
                      <Image
                        src={"/images/assets/right-arrow.png"}
                        alt="Right Arrow"
                        className=" object-contain mt-2"
                        height={15}
                        width={80}
                      />
                      <div className="flex flex-col justify-center items-center gap-1">
                        <div className="flex items-center gap-2 bg-primary-mid-dark-color rounded-md border border-neutral-800 px-2.5 py-1.5 ">
                          <Image
                            src={"/images/logo/bitcoin-blue.png"}
                            alt="Bitcoin blue"
                            height={20}
                            width={20}
                          />
                          <p>cBTC</p>
                        </div>
                        <p className="text-lg font-nunito-sans">
                          {toReceiveAmount}
                        </p>
                      </div>
                    </div>
                  </div>
                  <p className="text-xs text-neutral-300 font-nunito-sans text-center leading-relaxed max-w-[320px] mx-auto">
                    Thank you for sending your BTC Deposit.
                  </p>
                  <p className="text-xs text-neutral-300 font-nunito-sans text-center mb-2 leading-relaxed max-w-[320px] mx-auto">
                    cBTC will be sent to your Cardano wallet once your BTC
                    deposit is confirmed. This process may take up to 24 hours.
                  </p>
                  {/* btc address */}
                  {/* <div className="rounded-lg p-4 bg-primary-mid-dark-color font-nunito-sans text-xs space-y-1">
                    <div>
                      <h4 className="flex gap-1 items-center">
                        cBTC Destination Address:
                      </h4>
                    </div>
                    <p className=" text-neutral-300">
                      3FZbgi29cpjq2GjdwV8eyHuJJnkLtktZc5
                    </p>
                  </div> */}

                  {/* <p className="text-xs text-neutral-300 font-nunito-sans text-center leading-relaxed max-w-[320px] mx-auto">
                    The status and details of this transaction can be found in
                    the “Transactions” tab on the side menu.
                  </p> */}

                  <div className="rounded-lg text-center p-4 bg-primary-mid-dark-color font-nunito-sans text-xs space-y-1">
                    If you need support, send your BTC transaction ID and your
                    Cardano address and we will help you
                  </div>
                  <button
                    onClick={closeAll}
                    className={
                      "bg-primary-blue-color hover:bg-primary-blue-color/80 transition-all text-gray-50 w-full text-center p-3 rounded-lg text-sm font-semibold font-nunito-sans"
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
