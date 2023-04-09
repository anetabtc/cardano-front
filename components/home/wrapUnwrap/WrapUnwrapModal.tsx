import { Dialog, Transition } from "@headlessui/react";
import { Fragment, ReactNode } from "react";

interface Props {
  isOpen: boolean;
  closeModal: any;
  title: ReactNode;
  buttonText: string;
  children?: ReactNode;
  onClick: () => void;
}

export default function WrapUnwrapModal({
  isOpen,
  closeModal,
  title,
  buttonText,
  children,
  onClick,
}: Props) {
  return (
    <Transition appear show={isOpen} as={Fragment}>
      <Dialog as="div" className="relative z-10 w-full" onClose={closeModal}>
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
              <Dialog.Panel className="w-full max-w-lg transform overflow-hidden rounded-2xl border border-neutral-800 bg-primary-full-dark-color  text-left align-middle shadow-xl transition-all">
                <h3
                  className={`bg-black/[0.5] font-semibold font-nunito-sans text-base text-center p-4 flex items-center gap-2 justify-center`}
                >
                  {title}
                </h3>

                {/* Modal body */}
                <div className="px-8 py-8 w-full flex flex-col gap-6">
                  {children}
                  <button
                    onClick={onClick}
                    className={
                      "bg-primary-blue-color font-nunito-sans font-semibold hover:bg-primary-blue-color/80 transition-all text-gray-50 w-full text-center p-3 rounded-lg "
                    }
                  >
                    {buttonText}
                  </button>
                </div>
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </div>
      </Dialog>
    </Transition>
  );
}
