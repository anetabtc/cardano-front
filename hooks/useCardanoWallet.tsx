import { Cip30Wallet } from "@cardano-sdk/cip30";
import { useContext, useEffect, useState } from "react";
import { GlobalContext } from "../components/GlobalContext";
import { LOADING_TEXT } from "../utils/constants";

/**
 * NOTE: all the states should actually be global. It is up to you to implement
 * your preferred state manager.
 */
export default function useCardanoWallet() {
  const globalContext = useContext(GlobalContext);

  const [walletAddress, setWalletAddress] = useState(LOADING_TEXT);

  async function updateWalletAddress() {
    const { walletApi, lucid } = globalContext;
    if (walletApi && lucid) {
      lucid.selectWallet(walletApi as any);
      setWalletAddress(await lucid.wallet.address());
    }
  }
  useEffect(() => {
    updateWalletAddress();
  }, [globalContext.walletApi]);

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
    walletAddress,
  };
}
