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
      throw new Error("No Cardano wallet found!");
    }
    setCardanoWallets(CARDANO_WALLETS.map((walletKey) => cardano[walletKey]));
  }, []);

  async function connectWallet(cardanoWallet: CardanoWallet) {
    const walletApi = await cardanoWallet.enable();
    setCardanoWalletApi({
      ...walletApi,
      name: cardanoWallet.name,
      icon: cardanoWallet.icon,
    });
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
