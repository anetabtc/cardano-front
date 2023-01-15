//icons
import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/24/solid";
import { BsBoxArrowUpRight } from "react-icons/bs";
//react
import React, { Fragment, useState } from "react";
//css
import styles from "../../styles/partials/Leftbar.module.css";
import { classNames } from "../../utils/Classnames";
import { navigationLeftbar, socialIconLeftbar } from "../../utils/leftbar";
import { Transition } from "@headlessui/react";
import Link from "next/link";
import { useRouter } from "next/router";

const Leftbar = () => {
  const [isShowing, setIsShowing] = useState<boolean>(true);
  const router = useRouter();
  return (
    <div className={styles.maincontainer}>
      <button
        onClick={() => (isShowing ? setIsShowing(false) : setIsShowing(true))}
        className={styles.chevron}
      >
        {isShowing ? (
          <ChevronLeftIcon className={styles.whiteicon} />
        ) : (
          <ChevronRightIcon className={styles.whiteicon} />
        )}
      </button>
      <Transition
        show={isShowing}
        enter="transition ease-in-out duration-300 transform"
        enterFrom="-translate-x-[150%]"
        enterTo="translate-x-0"
        leave="transition ease-in-out duration-300 transform"
        leaveFrom="translate-x-0"
        leaveTo="-translate-x-[150%]"
        className={styles.container}
      >
        <div>
          <div className={styles.navigationContainer}>
            <div className="flex justify-center">
              <h2 className={styles.testnet}>Testnet</h2>
            </div>
            <nav className="space-y-1">
              {navigationLeftbar.map((item) => (
                <Fragment key={item.name}>
                  <Link href={item.href} legacyBehavior>
                    <div className="cursor-pointer">
                      <a
                        className={classNames(
                          router.pathname == item.href
                            ? " bg-primary-blue-color text-white"
                            : "text-gray-300 hover:bg-primary-blue-color transition-all duration-100 hover:text-white",
                          "group flex items-center px-4 py-2 text-sm font-medium rounded-md gap-2"
                        )}
                      >
                        <item.icon
                          className={classNames(
                            router.pathname == item.href
                              ? "text-gray-300"
                              : "text-gray-400 group-hover:text-gray-300",
                            "mr-4 flex-shrink-0 h-4 w-4"
                          )}
                          aria-hidden="true"
                        />
                        {item.name}{" "}
                        {item.name == "Docs" && (
                          <BsBoxArrowUpRight className="w-3 h-3 text-gray-100" />
                        )}
                      </a>
                      {item.name == "Dashboard" && (
                        <div className={styles.devider} />
                      )}
                    </div>
                  </Link>
                </Fragment>
              ))}
            </nav>
            <div className={styles.socialIconContainer}>
              {socialIconLeftbar.map((val, i) => {
                return (
                  <Fragment key={i}>
                    <val.icon
                      className={styles.socialIcon}
                      aria-hidden="true"
                    />
                  </Fragment>
                );
              })}
            </div>
          </div>
        </div>
      </Transition>
    </div>
  );
};

export default Leftbar;
