import Image from "next/image";
import React, { Fragment, useState } from "react";
import { Cog8ToothIcon } from "@heroicons/react/24/outline";
import { Listbox, Transition } from "@headlessui/react";
import { ChevronDownIcon } from "@heroicons/react/24/solid";

import styles from "../../styles/partials/Navbar.module.css";
import ConnectWallet from "./navbar/ConnectWallet";
import LoggedInWallet from "./navbar/LoggedInWallet";
import Settings from "./navbar/Settings";
import { BsDot } from "react-icons/bs";
import WalletDropdown from "./navbar/WalletDropdown";

interface Network {
  name: string;
  image: string;
}

const network: Network[] = [
  { name: "Cardano", image: "/images/logo/star.png" },
  { name: "Ethereum", image: "/images/assets/m.png" },
];

const Navbar = () => {
  const [selectedNetwork, setSelectedNetwork] = useState(network[0]);
  const [isWalletShowing, setIsWalletShowing] = useState<boolean>(false);
  const [isSettingShowing, setIsSettingShowing] = useState<boolean>(false);
  const [isLoggedIn, setIsLoggedIn] = useState<boolean>(false);

  return (
    <div className={styles.navbar}>
      <div className={styles.leftside}>
        <Image
          src={"/images/logo/dark-logo.png"}
          alt="Logo of anetaBTC"
          width={150}
          height={50}
        />
      </div>
      <div className={styles.rightside}>
        <div>
          <div>
            <Listbox value={selectedNetwork} onChange={setSelectedNetwork}>
              <div className="relative  bg-black rounded-md">
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
                  <Listbox.Options className={styles.listBoxOptions}>
                    {network.map((networkValue, networkValueIdx) => (
                      <Listbox.Option
                        key={networkValueIdx}
                        className={({ active }) =>
                          `relative cursor-pointer select-none py-2 pl-4 pr-4 text-xs ${
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
          </div>
        </div>
        {isLoggedIn ? (
          <LoggedInWallet />
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
          setIsLoggedIn={setIsLoggedIn}
          isLoggedIn={isLoggedIn}
        />

        <button
          onClick={() =>
            isSettingShowing
              ? setIsSettingShowing(false)
              : setIsSettingShowing(true)
          }
          className={styles.settings}
        >
          <Cog8ToothIcon className="w-5 h-5 text-white" />
        </button>
        <Settings
          setIsShowing={setIsSettingShowing}
          isShowing={isSettingShowing}
        />
      </div>
    </div>
  );
};

export default Navbar;
