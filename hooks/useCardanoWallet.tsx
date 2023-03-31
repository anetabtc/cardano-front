import { Cip30Wallet } from "@cardano-sdk/cip30";
import { useContext } from "react";
import { GlobalContext } from "../components/GlobalContext";

/**
 * NOTE: all the states should actually be global. It is up to you to implement
 * your preferred state manager.
 */
export default function useCardanoWallet() {
  const globalContext = useContext(GlobalContext);

  async function connectWallet(cardanoWallet: Cip30Wallet) {
    try {
      const walletApi = await cardanoWallet.enable();
      globalContext.setWalletMeta(cardanoWallet);
      globalContext.setWalletApi(walletApi);
    } catch (error) {
      alert("Fail to connect to wallet");
    }
  }

  async function disconnectWallet() {
    globalContext.setWalletMeta(null);
    globalContext.setWalletApi(null);
  }

  return {
    connectWallet,
    disconnectWallet,
    walletApi: globalContext.walletApi,
    walletMeta: globalContext.walletMeta,
  };
}
