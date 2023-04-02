import { Cip30Wallet } from "@cardano-sdk/cip30";
import { Transition } from "@headlessui/react";
import Image from "next/image";
import { Fragment } from "react";
import useCardanoWallet from "../../../hooks/useCardanoWallet";
import useVisible from "../../../hooks/useVisible";
import styles from "../../../styles/partials/Navbar.module.css";
import { shortenAddress } from "../../../utils/address";
import { CONSTANTS } from "../../../utils/constants";

interface Props {
  disconnectWallet: Function;
  walletMeta: Cip30Wallet;
}

const LoggedInWallet = ({ disconnectWallet, walletMeta }: Props) => {
  const { visible, setVisible, ref } = useVisible(false);
  const { walletAddress } = useCardanoWallet();

  return (
    <div
      ref={ref}
      className={`${styles.loggedWallet} h-full flex items-center gap-2 relative`}
      onClick={() => setVisible(!visible)}
    >
      <Image src={walletMeta.icon} alt="Wallet image" width={20} height={20} />
      <p className="flex cursor-pointer items-center justify-between ">
        {walletAddress === CONSTANTS.WALLET_CONNECTING_TEXT
          ? walletAddress
          : shortenAddress(walletAddress)}
      </p>

      <Transition
        as={Fragment}
        leave="transition ease-in duration-100"
        leaveFrom="opacity-100"
        leaveTo="opacity-0"
        show={visible}
      >
        <div
          className={`${styles.loggedWallet} w-full h-full absolute right-0 top-12 flex items-center justify-center`}
          onClick={() => disconnectWallet()}
        >
          Disconnect
        </div>
      </Transition>
    </div>
  );
};

export default LoggedInWallet;
