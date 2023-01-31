import React, { useState } from "react";
import styles from "../../../styles/partials/Navbar.module.css";
import Image from "next/image";
import { ChevronDownIcon } from "@heroicons/react/24/solid";
import WalletDropdown from "./WalletDropdown";
const LoggedInWallet = ({ setDisconnect }: any) => {
  const [walletDropDownShowing, setWalletDropDownShowing] = useState(false);

  return (
    <>
      <div className={styles.loggedWallet}>
        <p>1,600.63 ₳</p>
        <div className="flex items-center">
          <Image
            src={"/images/wallet/wallet-2.png"}
            alt="Wallet image"
            width={20}
            height={20}
            className="mr-1 ml-3"
          />
          <p
            onClick={() => setWalletDropDownShowing(true)}
            className="flex cursor-pointer items-center justify-between "
          >
            addr1...4lyn3h
            <ChevronDownIcon className="w-3 h-3 text-white ml-1" />
          </p>
        </div>
      </div>
      <div className="text-xs">
        <WalletDropdown
          setDisconnect={setDisconnect}
          isShowing={walletDropDownShowing}
          setIsShowing={setWalletDropDownShowing}
        />
      </div>
    </>
  );
};

export default LoggedInWallet;
