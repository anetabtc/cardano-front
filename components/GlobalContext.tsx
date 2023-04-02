import { Cip30Wallet, WalletApi } from "@cardano-sdk/cip30";
import { Lucid } from "lucid-cardano";
import { createContext, ReactNode, useEffect, useState } from "react";
import { BffService } from "../services/bff";
import { Blockfrost } from "../services/provider/blockfrost";
import { CardanoNetwork } from "../utils/api";

interface GlobalContextState {
  walletMeta: Cip30Wallet | null;
  setWalletMeta: (_: Cip30Wallet | null) => void;
  walletApi: WalletApi | null;
  setWalletApi: (_: WalletApi | null) => void;
  lucid: Lucid | null;
  setLucid: (_: Lucid) => void;
  network: CardanoNetwork;
}

export const GlobalContext = createContext<GlobalContextState>({
  walletMeta: null,
  setWalletMeta: () => {},
  walletApi: null,
  setWalletApi: () => {},
  lucid: null,
  setLucid: () => {},
  network: CardanoNetwork.Preview,
});

export default function GlobalContextProvider({
  children,
}: {
  children: ReactNode;
}) {
  const [walletMeta, setWalletMeta] = useState<Cip30Wallet | null>(null);
  const [walletApi, setWalletApi] = useState<WalletApi | null>(null);
  const [lucid, setLucid] = useState<Lucid | null>(null);
  const [network, setNetwork] = useState<CardanoNetwork>(
    CardanoNetwork.Preview
  );

  const globalContext: GlobalContextState = {
    walletMeta,
    setWalletMeta,
    walletApi,
    setWalletApi,
    lucid,
    setLucid,
    network,
  };

  async function initLucid() {
    const { network } = await BffService.getConfig();
    setNetwork(network);
    setLucid(await Lucid.new(new Blockfrost(), network));
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
