import React from "react";
import { Fragment, useState } from "react";
import { Transition } from "@headlessui/react";
import { CheckCircleIcon } from "@heroicons/react/24/outline";
import { XMarkIcon } from "@heroicons/react/20/solid";
import Image from "next/image";

interface Props {
  isShow: boolean;
  setIsShow: (value: boolean) => void;
  success: boolean;
}

export default function Notifications({ isShow, setIsShow, success }: Props) {
  React.useEffect(() => {
    setTimeout(() => {
      setIsShow(false);
    }, 6000);
  }, [isShow]);

  return (
    <>
      {/* Global notification live region, render this permanently at the end of the document */}
      <div
        aria-live="assertive"
        className="pointer-events-none font-nunito-sans z-50 fixed inset-0 flex items-end px-4 py-6 sm:items-start sm:p-6"
      >
        <div className="flex w-full flex-col items-center space-y-4 sm:items-end">
          {/* Notification panel, dynamically insert this into the live region when it needs to be displayed */}
          <Transition
            show={isShow}
            as={Fragment}
            enter="transform ease-out duration-300 transition"
            enterFrom="translate-y-2 opacity-0 sm:translate-y-0 sm:translate-x-2"
            enterTo="translate-y-0 opacity-100 sm:translate-x-0"
            leave="transition ease-in duration-100"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="pointer-events-auto w-full max-w-sm overflow-hidden rounded-lg bg-[#141414] shadow-lg ring-1 ring-black ring-opacity-5">
              <div className="p-4">
                <div className="ml-4 flex flex-shrink-0 float-right">
                  <button
                    type="button"
                    className="inline-flex rounded-md  text-gray-400 hover:text-gray-500"
                    onClick={() => {
                      setIsShow(false);
                    }}
                  >
                    <span className="sr-only">Close</span>
                    <XMarkIcon className="h-5 w-5" aria-hidden="true" />
                  </button>
                </div>
                <div className="flex items-center justify-center">
                  <div className="">
                    {success ? (
                      <Image
                        className=" text-green-400"
                        src={"/images/assets/tick.png"}
                        width={80}
                        height={80}
                        alt="tick"
                      />
                    ) : (
                      <Image
                        className=" text-red-400"
                        src={"/images/assets/cross.png"}
                        width={80}
                        height={80}
                        alt="tick"
                      />
                    )}
                  </div>
                  <div className="ml-3 w-0 flex-1 flex flex-col gap-2 justify-center pt-0.5 ">
                    {success ? (
                      <p className="text-sm font-semibold text-white">
                        Transactions Success!
                      </p>
                    ) : (
                      <p className="text-sm font-semibold text-white">
                        Transactions failed!
                      </p>
                    )}
                    <div>
                      {success ? (
                        <span className="mt-1 cursor-pointer text-gray-300 px-2 py-1 text-[10px] border border-neutral-600 rounded-lg">
                          View on explorer
                        </span>
                      ) : (
                        <span className="mt-1 cursor-pointer text-gray-300 px-2 py-1 text-[10px] border border-neutral-600 rounded-lg">
                          Try again
                        </span>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </Transition>
        </div>
      </div>
    </>
  );
}
