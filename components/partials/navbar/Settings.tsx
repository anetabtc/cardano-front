import React, { useState, Fragment } from "react";
import styles from "../../../styles/partials/Navbar.module.css";
import {
  CheckIcon,
  ChevronUpDownIcon,
  XMarkIcon,
} from "@heroicons/react/24/solid";
import { Listbox, Tab, Transition } from "@headlessui/react";
import { classNames } from "../../../utils/Classnames";
import Link from "next/link";
import { languages, settingsRedirectUrl } from "../../../utils/navbar/Settings";

interface Props {
  isShowing: boolean;
  setIsShowing: (value: boolean) => void;
}

const Settings = ({ isShowing, setIsShowing }: Props) => {
  const [selectedLanguages, setSelectedLanguages] = useState(languages[0]);

  return (
    <Transition
      show={isShowing}
      enter="transition-opacity duration-75"
      enterFrom="opacity-0"
      enterTo="opacity-100"
      leave="transition-opacity duration-150"
      leaveFrom="opacity-100"
      leaveTo="opacity-0"
      className={styles.settingsContainer}
    >
      {/* theme */}
      <div className={styles.theme}>
        <h3>Theme</h3>
        <XMarkIcon
          onClick={() => setIsShowing(false)}
          className="w-5 h-5 text-gray-300 outline-none cursor-pointer"
        />
      </div>
      <div className={styles.tabGroup}>
        <Tab.Group>
          <Tab.List className={styles.tabList}>
            {["Dark", "Light", "System"].map((value) => (
              <Tab
                key={value}
                className={({ selected }) =>
                  classNames(
                    "w-full text-gray-300 outline-none rounded-md py-2 text-sm font-medium leading-5",
                    selected
                      ? "bg-primary-blue-color shadow"
                      : "text-blue-100 hover:bg-white/[0.12] hover:text-gray-300 outline-none"
                  )
                }
              >
                {value}
              </Tab>
            ))}
          </Tab.List>
        </Tab.Group>
      </div>
      {/* languages s */}
      <div>
        <h3 className={styles.languages}>Language</h3>
        <div className=" w-full">
          <Listbox value={selectedLanguages} onChange={setSelectedLanguages}>
            <div className="relative mt-3">
              <Listbox.Button className={styles.listBoxButtonSetting}>
                <span>{selectedLanguages.name}</span>
                <p>
                  <ChevronUpDownIcon
                    className="h-5 w-5 text-gray-400"
                    aria-hidden="true"
                  />
                </p>
              </Listbox.Button>
              <Transition
                as={Fragment}
                leave="transition ease-in duration-100"
                leaveFrom="opacity-100"
                leaveTo="opacity-0"
              >
                <Listbox.Options
                  className={`absolute px-1 cursor-pointer mt-1 max-h-60 w-full overflow-auto rounded-md bg-black py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm`}
                >
                  {languages.map((lang, langIdx) => (
                    <Listbox.Option
                      key={langIdx}
                      className={({ active }) =>
                        `relative hover:bg-primary-blue-color rounded-lg  cursor-pointer select-none py-2 pl-10 pr-4 ${
                          active ? "text-gray-100" : "text-gray-100"
                        }`
                      }
                      value={lang}
                    >
                      {({ selected }) => (
                        <>
                          <span
                            className={`block truncate ${
                              selected ? "font-medium" : "font-normal"
                            }`}
                          >
                            {lang.name}
                          </span>
                          {selected ? (
                            <span className={styles.selectedLang}>
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
      {settingsRedirectUrl.map((val) => {
        return (
          <Link key={val.name} legacyBehavior href={val.href}>
            <a className="flex items-center gap-3 mt-2">
              <val.icon className="w-4 h-4 text-gray-50" />
              <p className="text-xs">{val.name}</p>
            </a>
          </Link>
        );
      })}
    </Transition>
  );
};

export default Settings;
