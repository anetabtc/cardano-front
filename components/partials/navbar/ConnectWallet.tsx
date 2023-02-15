import { Dialog, Transition } from "@headlessui/react";
import { XMarkIcon } from "@heroicons/react/24/solid";
import Image from "next/image";
import { Fragment, useEffect } from "react";
import useCardanoWallet from "../../../hooks/useCardanoWallet";
import styles from "../../../styles/partials/Navbar.module.css";
import { CardanoWallet } from "../../../types/cardano";
interface Props {
  isOpen: boolean;
  setIsOpen: (value: boolean) => void;
  isLoggedIn: boolean;
  setIsLoggedIn: (value: boolean) => void;
}

const ConnectWallet = ({
  isOpen,
  setIsOpen,
  isLoggedIn,
  setIsLoggedIn,
}: Props) => {
  const { cardanoWallets, connectWallet, cardanoWalletApi } =
    useCardanoWallet();

  const handleConnectWallet = (cardanoWallet: CardanoWallet) => {
    setIsOpen(false);
    connectWallet(cardanoWallet);
  };

  /** example of using cardano wallet api */
  useEffect(() => {
    console.log(cardanoWalletApi);
  }, [cardanoWalletApi]);

  return (
    <Transition appear show={isOpen} as={Fragment}>
      <Dialog
        as="div"
        className={styles.dialogContainer}
        onClose={() => setIsOpen(false)}
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
          <div className={styles.bgCreator} />
        </Transition.Child>

        <div className="fixed inset-0 overflow-y-auto">
          <div className={styles.walletPanel}>
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 scale-95"
              enterTo="opacity-100 scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 scale-100"
              leaveTo="opacity-0 scale-95"
            >
              <Dialog.Panel className={styles.dialogPanel}>
                <div>
                  <div className="flex items-center justify-between text-sm">
                    <h3 className="font-semibold font-nunito-sans text-base">
                      Connect Wallet
                    </h3>
                    <XMarkIcon
                      type="button"
                      className="text-white w-5 h-5 cursor-pointer"
                      onClick={() => setIsOpen(false)}
                    />
                  </div>
                  <div className="border border-gray-500 rounded-lg mt-4 divide-y-[1px] divide-gray-500">
                    {cardanoWallets.map((wallet: CardanoWallet, i: number) => (
                      <button
                        key={i}
                        onClick={() => handleConnectWallet(wallet)}
                        className="flex first:rounded-t-lg last:rounded-b-lg items-center justify-between p-4 w-full hover:bg-[#25345A]"
                      >
                        <p className=" font-light">{wallet.name}</p>
                        <Image
                          src={wallet.icon}
                          alt={wallet.name}
                          height={30}
                          width={30}
                        />
                      </button>
                    ))}
                  </div>
                </div>
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </div>
      </Dialog>
    </Transition>
  );
};

export default ConnectWallet;
