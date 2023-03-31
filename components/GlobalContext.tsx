import { Cip30Wallet, WalletApi } from "@cardano-sdk/cip30";
import { Lucid } from "lucid-cardano";
import { createContext, ReactNode, useEffect, useState } from "react";
import { Blockfrost } from "../services/provider/blockfrost";

interface GlobalContextState {
  walletMeta: Cip30Wallet | null;
  setWalletMeta: (_: Cip30Wallet | null) => void;
  walletApi: WalletApi | null;
  setWalletApi: (_: WalletApi | null) => void;
  lucid: Lucid | null;
  setLucid: (_: Lucid) => void;
}

export const GlobalContext = createContext<GlobalContextState>({
  walletMeta: null,
  setWalletMeta: () => {},
  walletApi: null,
  setWalletApi: () => {},
  lucid: null,
  setLucid: () => {},
});

export default function GlobalContextProvider({
  children,
}: {
  children: ReactNode;
}) {
  const [walletMeta, setWalletMeta] = useState<Cip30Wallet | null>(null);
  const [walletApi, setWalletApi] = useState<WalletApi | null>(null);
  const [lucid, setLucid] = useState<Lucid | null>(null);

  const globalContext: GlobalContextState = {
    walletMeta,
    setWalletMeta,
    walletApi,
    setWalletApi,
    lucid,
    setLucid,
  };

  async function initLucid() {
    setLucid(await Lucid.new(new Blockfrost(), "Mainnet"));
  }

  useEffect(() => {
    initLucid();
  }, []);

  return (
    <GlobalContext.Provider value={globalContext}>
      {children}
    </GlobalContext.Provider>
  );
}
