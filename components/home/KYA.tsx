import { Dialog, Transition } from "@headlessui/react";
import { XMarkIcon } from "@heroicons/react/24/solid";
import React, { Fragment, useEffect, useState } from "react";

interface Props {
  isOpen: boolean;
  setIsOpen: (value: boolean) => void;
}

const KYA = ({ isOpen, setIsOpen }: Props) => {
  const [isIamVisit, setIsIamVisit] = useState<boolean>(true);
  const closeModal = () => {
    setIsOpen(false);
    localStorage.setItem("isIamVisit", "true");
  };
  useEffect(() => {
    const isIamVisit = localStorage.getItem("isIamVisit");
    setIsIamVisit(isIamVisit == "true");
  }, []);
  return (
    <>
      {isIamVisit ? (
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
                    <div className="text-sm pb-2 flex items-center justify-between">
                      <h3 className=" font-nunito-sans text-base">
                        Know Your Assumptions (KYA)
                      </h3>
                      <XMarkIcon
                        type="button"
                        className="text-white w-5 h-5 cursor-pointer float-left"
                        onClick={closeModal}
                      />
                    </div>
                    <div className="text-[10px] font-light text-neutral-200 flex flex-col gap-3">
                      <p className="">
                        This website (app.anetabtc.io) provides the means for
                        users to interact with the anetaBTC protocol. <br /> The
                        anetaBTC protocol operates as a financial protocol built
                        on top of the Ergo blockchain, operated in large part by
                        smart contracts.
                      </p>
                      <p>
                        <b className="font-semibold">Notice</b>: <br />{" "}
                        app.anetabtc.io is currently being operated on the Ergo
                        Mainnet. As a precautionary measure, it is strongly
                        recommended that users utilize a new Ergo wallet when
                        interacting with app.anetabtc.io, as the safety and
                        security of the wallet dApp connection is not fully
                        guaranteed during this testing phase.
                      </p>
                      <p>
                        <b className="font-semibold">
                          By Accepting these KYA, you agree that:
                        </b>{" "}
                        <br />
                        <ol className="list-decimal ml-4">
                          {[
                            "You will use app.anetabtc.io at your own risk;",
                            "Only YOU are responsible for your own assets;",
                            "The anetaBTC protocol and its smart contracts meet your expectations",
                          ].map((value, index) => (
                            <li key={index}>{value}</li>
                          ))}
                        </ol>
                      </p>
                      <p>
                        <b className="font-semibold">Notice that:</b>
                        <br />
                        <ul className="list-disc ml-4">
                          {[
                            "app.anetabtc.io operates on a live blockchain, thus all transactions are final and irreversible.",
                            "Every transaction can be viewed via Ergo Explorer and BTC Explorer",
                            "By creating an order you send your funds to a specific smart-contract, all such contracts are wired into the user interface. Thus, orders are created entirely in your browser (on your machine).",
                          ].map((value, index) => (
                            <li key={index}>{value}</li>
                          ))}
                        </ul>
                      </p>
                      <p>
                        <b className="font-semibold">
                          The anetaBTC team doesn&apos;t guarantee the absence
                          of bugs and errors.
                        </b>
                        <br />
                        app.anetabtc.io is without a Know Your Customer (KYC)
                        process and can offer NO assistance if a user is hacked
                        or cheated out of passwords, currency or private wallet
                        keys.
                      </p>
                      <p className="text-[#00FF29]">
                        <b className="font-semibold">NOTICE:</b>
                        <br />
                        This build of app.anetabtc.io is classed as BETA. <br />
                        You should only use this build for testing purposes.{" "}
                        <br />
                        app.anetbtc.io will not be liable for any losses
                        incurred on the user, this includes losses caused by
                        bugs, errors, downtimes or exploits.
                      </p>
                    </div>
                    <button
                      onClick={closeModal}
                      className={
                        "bg-primary-blue-color hover:bg-primary-blue-color/80 mt-2 transition-all text-gray-50 w-full text-center p-3 rounded-lg text-sm"
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
