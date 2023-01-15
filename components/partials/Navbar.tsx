import Image from "next/image";
import React, { Fragment, useState } from "react";
import { Cog8ToothIcon } from "@heroicons/react/24/outline";
import { Listbox, Transition } from "@headlessui/react";
import { ChevronDownIcon, CheckIcon } from "@heroicons/react/24/solid";

import styles from "../../styles/partials/Navbar.module.css";
import ConnectWallet from "./navbar/ConnectWallet";
import LoggedInWallet from "./navbar/LoggedInWallet";
import Settings from "./navbar/Settings";

interface Cardano {
  name: string;
}

const cardano: Cardano[] = [
  { name: "Cardano" },
  { name: "Ethereum" },
  { name: "Bitcoin" },
];

const Navbar = () => {
  const [selectedCardano, setSelectedCardano] = useState(cardano[0]);
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
            <Listbox value={selectedCardano} onChange={setSelectedCardano}>
              <div className="relative  bg-black rounded-md">
                <Listbox.Button className={styles.listBoxButton}>
                  <div>
                    <Image
                      alt="a star icon"
                      src={"/images/logo/star.png"}
                      height={20}
                      width={20}
                    />
                    <span style={{ fontSize: "12px" }}>
                      {" "}
                      {selectedCardano.name}
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
                    {cardano.map((cardanoValue, cardanoValueIdx) => (
                      <Listbox.Option
                        key={cardanoValueIdx}
                        className={({ active }) =>
                          `relative cursor-pointer select-none py-2 pl-10 pr-4 ${
                            active
                              ? "bg-amber-100 text-amber-900"
                              : "text-gray-900"
                          }`
                        }
                        value={cardanoValue}
                      >
                        {({ selected }) => (
                          <>
                            <span
                              className={`block truncate ${
                                selected ? "font-medium" : "font-normal"
                              }`}
                            >
                              {cardanoValue.name}
                            </span>
                            {selected ? (
                              <span className={styles.selectedCheck}>
                                <CheckIcon
                                  className="h-5 w-5"
                                  aria-hidden="true"
                                />
                              </span>
                            ) : null}
                          </>
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
