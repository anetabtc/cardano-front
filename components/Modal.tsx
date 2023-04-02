import { Dialog, Transition } from "@headlessui/react";
import {
  CheckCircleIcon,
  InformationCircleIcon,
  XCircleIcon,
} from "@heroicons/react/24/solid";
import { Fragment, useContext } from "react";
import { GlobalContext } from "./GlobalContext";

export default function Modal() {
  const { modalState, setModalState } = useContext(GlobalContext);

  function closeModal() {
    setModalState({
      ...modalState,
      open: false,
    });
  }

  const { open: isOpen, text, type } = modalState;

  function Icon() {
    let icon: any = null;
    switch (type) {
      case "error":
        icon = <XCircleIcon className="text-rose-600 w-12"></XCircleIcon>;
        break;
      case "info":
        icon = (
          <InformationCircleIcon className="text-slate-200 w-12"></InformationCircleIcon>
        );
        break;
      case "success":
        icon = (
          <CheckCircleIcon className="text-lime-500 w-12"></CheckCircleIcon>
        );
        break;
    }
    return (
      <Dialog.Title className="w-full flex align-center justify-center">
        {icon}
      </Dialog.Title>
    );
  }

  return (
    <>
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
            <div className="fixed inset-0 bg-black bg-opacity-25" />
          </Transition.Child>

          <div className="fixed inset-0 overflow-y-auto">
            <div className="flex min-h-full items-center justify-center p-4 text-center bg-black/50">
              <Transition.Child
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0 scale-95"
                enterTo="opacity-100 scale-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100 scale-100"
                leaveTo="opacity-0 scale-95"
              >
                <Dialog.Panel className="w-full max-w-sm transform overflow-hidden rounded-2xl p-6 text-left align-middle shadow-xl transition-all bg-black border border-gray-800">
                  <Icon></Icon>
                  <div className="mt-2 text-center">{text}</div>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition>
    </>
  );
}
