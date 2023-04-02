import { Cip30Wallet } from "@cardano-sdk/cip30";
import { useContext, useEffect, useState } from "react";
import { GlobalContext } from "../components/GlobalContext";
import { CONSTANTS } from "../utils/constants";
import { useTryCatch } from "./useTryCatch";

/**
 * NOTE: all the states should actually be global. It is up to you to implement
 * your preferred state manager.
 */
export default function useCardanoWallet() {
  const globalContext = useContext(GlobalContext);
  const { tryWithErrorHandler } = useTryCatch();

  const [walletAddress, setWalletAddress] = useState(
    CONSTANTS.WALLET_CONNECTING_TEXT
  );

  async function updateWalletAddress() {
    const { walletApi, lucid } = globalContext;
    if (walletApi && lucid) {
      lucid.selectWallet(walletApi as any);
      setWalletAddress(await lucid.wallet.address());
    }
  }
  useEffect(() => {
    updateWalletAddress();
  }, [globalContext.walletApi, globalContext.lucid]);

  async function connectWallet(cardanoWalletName: string) {
    await tryWithErrorHandler(async () => {
      if (!window.cardano) {
        throw new Error("No cardano wallet is installed");
      }

      const cardanoWallet = window.cardano[
        cardanoWalletName.toLowerCase()
      ] as unknown as Cip30Wallet;
      const walletApi = await cardanoWallet.enable();

      globalContext.setWalletMeta(cardanoWallet);
      globalContext.setWalletApi(walletApi);
      localStorage.setItem(
        CONSTANTS.LOCAL_STORAGE_KEYS.WALLET,
        cardanoWalletName
      );
    });
  }

  async function disconnectWallet() {
    globalContext.setWalletMeta(null);
    globalContext.setWalletApi(null);
    localStorage.removeItem(CONSTANTS.LOCAL_STORAGE_KEYS.WALLET);
  }

  return {
    connectWallet,
    disconnectWallet,
    walletApi: globalContext.walletApi,
    walletMeta: globalContext.walletMeta,
    walletAddress,
  };
}
