import { useEffect, useState } from "react";
import {
  CardanoWallet,
  CardanoWalletApi,
  CARDANO_WALLETS,
} from "../types/cardano";

/**
 * NOTE: all the states should actually be global. It is up to you to implement
 * your preferred state manager.
 */
export default function useCardanoWallet() {
  const [cardanoWallets, setCardanoWallets] = useState<CardanoWallet[]>([]);
  const [cardanoWalletApi, setCardanoWalletApi] =
    useState<CardanoWalletApi | null>(null);

  useEffect(() => {
    const cardano = window.cardano;
    if (cardano == null) {
      // throw new Error("No Cardano wallet found!");
      return alert("No cardano wallet found!");
    }
    setCardanoWallets(
      CARDANO_WALLETS.map((walletKey) => cardano[walletKey]) as any
    );
  }, []);

  async function connectWallet(cardanoWallet: CardanoWallet) {
    try {
      const walletApi = await cardanoWallet.enable();
      setCardanoWalletApi({
        ...walletApi,
        name: cardanoWallet.name,
        icon: cardanoWallet.icon,
      });
    } catch (error) {
      alert("Fail to connect to wallet");
    }
  }

  async function disconnectWallet() {
    setCardanoWalletApi(null);
  }

  return {
    cardanoWallets,
    cardanoWalletApi,
    connectWallet,
    disconnectWallet,
  };
}
