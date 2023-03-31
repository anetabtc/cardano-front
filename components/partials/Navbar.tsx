import { Listbox, Transition } from "@headlessui/react";
import { ChevronDownIcon } from "@heroicons/react/24/solid";
import Image from "next/image";
import { Fragment, useState } from "react";

import { BsDot } from "react-icons/bs";
import useCardanoWallet from "../../hooks/useCardanoWallet";
import styles from "../../styles/partials/Navbar.module.css";
import ConnectWallet from "./navbar/ConnectWallet";
import LoggedInWallet from "./navbar/LoggedInWallet";

interface Network {
  name: string;
  image: string;
}

const network: Network[] = [
  { name: "Cardano", image: "/images/logo/star.png" },
  { name: "Ergo", image: "/images/assets/m.png" },
];

const Navbar = () => {
  const [selectedNetwork, setSelectedNetwork] = useState(network[0]);
  const [isWalletShowing, setIsWalletShowing] = useState(false);

  const { walletMeta, disconnectWallet } = useCardanoWallet();

  return (
    <div className="fixed w-full max-w-[1600px] pr-20 mx-auto h-2">
      <div className={styles.navbar}>
        <div className={styles.leftside}>
          <Image
            src={"/images/logo/dark-logo.png"}
            alt="Logo of anetaBTC"
            width={150}
            height={50}
          />
        </div>
        <div className={`${styles.rightside} h-10`}>
          <Listbox value={selectedNetwork} onChange={setSelectedNetwork}>
            <div className="relative bg-black rounded-md h-full flex items-center">
              <Listbox.Button className={styles.listBoxButton}>
                <div>
                  <Image
                    alt="a star icon"
                    src={selectedNetwork.image}
                    height={20}
                    width={20}
                  />
                  <span style={{ fontSize: "12px" }}>
                    {" "}
                    {selectedNetwork.name}
                  </span>
                </div>
                <span className={styles.chevDown}>
                  <ChevronDownIcon
                    className="h-3 w-3 text-gray-200"
                    aria-hidden="true"
                  />
                </span>
              </Listbox.Button>
              <Transition
                as={Fragment}
                leave="transition ease-in duration-100"
                leaveFrom="opacity-100"
                leaveTo="opacity-0"
              >
                <Listbox.Options
                  className={
                    styles.listBoxOptions +
                    " min-w-[10rem] absolute right-0 top-12"
                  }
                >
                  <h3 className=" text-xs px-4 py-2 font-medium">
                    Select Network
                  </h3>
                  {network.map((networkValue, networkValueIdx) => (
                    <Listbox.Option
                      key={networkValueIdx}
                      className={({ active }) =>
                        `relative cursor-pointer uppercase select-none py-2 pl-4 pr-4 text-xs ${
                          active ? " text-gray-100" : "text-gray-100"
                        }`
                      }
                      value={networkValue}
                    >
                      {({ selected }) => (
                        <div
                          className={`flex items-center gap-1 ${
                            selected ? "opacity-100" : "opacity-80"
                          }`}
                        >
                          <Image
                            src={networkValue.image}
                            width={15}
                            height={15}
                            alt={networkValue.name}
                          />
                          <span
                            className={`block truncate ${
                              selected ? "font-medium" : "font-normal"
                            }`}
                          >
                            {networkValue.name}
                          </span>
                          {selected ? (
                            <span className={styles.selectedCheck}>
                              <BsDot
                                className="h-7 w-7 text-green-500"
                                aria-hidden="true"
                              />
                            </span>
                          ) : null}
                        </div>
                      )}
                    </Listbox.Option>
                  ))}
                </Listbox.Options>
              </Transition>
            </div>
          </Listbox>

          {walletMeta ? (
            <LoggedInWallet
              disconnectWallet={disconnectWallet}
              walletMeta={walletMeta}
            />
          ) : (
            <button
              onClick={() =>
                isWalletShowing
                  ? setIsWalletShowing(false)
                  : setIsWalletShowing(true)
              }
              className={styles.connectWallet}
            >
              Connect Wallet
            </button>
          )}
          <ConnectWallet
            isOpen={isWalletShowing}
            setIsOpen={setIsWalletShowing}
          />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
