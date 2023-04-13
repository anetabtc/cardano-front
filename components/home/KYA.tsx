import { Dialog, Transition } from "@headlessui/react";
import { XMarkIcon } from "@heroicons/react/24/solid";
import { Fragment, useEffect, useState } from "react";

interface Props {
  isOpen: boolean;
  setIsOpen: (value: boolean) => void;
}

const KYA = ({ isOpen, setIsOpen }: Props) => {
  const [kyaApproved, setKyaApproved] = useState<boolean>(true);
  const closeModal = () => {
    setIsOpen(false);
    localStorage.setItem("kyaApproved", "true");
  };
  useEffect(() => {
    const kyaApproved = localStorage.getItem("kyaApproved");
    setKyaApproved(kyaApproved == "true");
  }, []);
  return (
    <>
      {kyaApproved ? (
        ""
      ) : (
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
              <div className="fixed inset-0 bg-neutral-500 bg-opacity-50" />
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
                  <Dialog.Panel className="w-full flex flex-col gap-2 max-w-md transform overflow-hidden rounded-2xl border border-neutral-800 bg-[#0b0b0b] p-6 text-left align-middle shadow-xl transition-all">
                    <div className="pb-2 flex items-center justify-between">
                      <h3 className="font-nunito-sans text-lg">
                        Know Your Assumptions (KYA)
                      </h3>
                      <XMarkIcon
                        type="button"
                        className="text-white w-5 h-5 cursor-pointer float-left"
                        onClick={closeModal}
                      />
                    </div>
                    <div className="font-light text-neutral-200 flex flex-col gap-3">
                      <p>
                        This website (app.anetabtc.io) provides the means for
                        users to interact with the anetaBTC protocol. The
                        anetaBTC protocol operates as a financial protocol built
                        on top of the Cardano blockchain, operated in large part
                        by smart contracts.
                      </p>
                      <p className="font-bold">
                        By Accepting these KYA, you agree that:
                      </p>
                      <p>
                        <ol className="list-decimal ml-4">
                          {[
                            "You will use app.anetabtc.io at your own risk;",
                            "All transactions are final and irreversible;",
                            "Only YOU are responsible for your own assets;",
                            "app.anetabtc.io is without a Know Your Customer (KYC) process and can offer NO assistance if a user is hacked or cheated out of passwords, currency or private wallet keys;",
                            "The anetaBTC team doesn't guarantee the absence of bugs and errors;",
                            "The platform will not be liable for any losses incurred on the user, this includes losses caused by bugs, errors, downtimes or exploits.",
                          ].map((value, index) => (
                            <li key={index}>{value}</li>
                          ))}
                        </ol>
                      </p>
                    </div>
                    <button
                      onClick={closeModal}
                      className={
                        "bg-primary-blue-color hover:bg-primary-blue-color/80 mt-2 transition-all text-gray-50 w-full text-center p-3 rounded-lg"
                      }
                    >
                      I understand the risks and accept KYA
                    </button>
                  </Dialog.Panel>
                </Transition.Child>
              </div>
            </div>
          </Dialog>
        </Transition>
      )}
    </>
  );
};

export default KYA;
