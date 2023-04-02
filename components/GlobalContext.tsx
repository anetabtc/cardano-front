import { Cip30Wallet, WalletApi } from "@cardano-sdk/cip30";
import { Lucid } from "lucid-cardano";
import { createContext, ReactNode, useState } from "react";
import { ModalState } from "../hooks/useModal";
import { CardanoNetwork } from "../utils/api";

interface GlobalContextState {
  walletMeta: Cip30Wallet | null;
  setWalletMeta: (_: Cip30Wallet | null) => void;
  walletApi: WalletApi | null;
  setWalletApi: (_: WalletApi | null) => void;
  lucid: Lucid | null;
  setLucid: (_: Lucid) => void;
  network: CardanoNetwork;
  setNetwork: (_: CardanoNetwork) => void;
  modalState: ModalState;
  setModalState: (_: ModalState) => void;
  btcWrapAddress: string;
  setBtcWrapAddress: (_: string) => void;
  btcUnwrapAddress: string;
  setBtcUnwrapAddress: (_: string) => void;
}

export const GlobalContext = createContext<GlobalContextState>({
  walletMeta: null,
  setWalletMeta: () => {},
  walletApi: null,
  setWalletApi: () => {},
  lucid: null,
  setLucid: () => {},
  network: CardanoNetwork.Preview,
  setNetwork: () => {},
  modalState: {
    open: false,
    type: "info",
    text: "",
  },
  setModalState: () => {},
  btcWrapAddress: "",
  setBtcWrapAddress: () => {},
  btcUnwrapAddress: "",
  setBtcUnwrapAddress: () => {},
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
  const [modalState, setModalState] = useState<ModalState>({
    open: false,
    type: "info",
    text: "",
  });
  const [btcWrapAddress, setBtcWrapAddress] = useState("");
  const [btcUnwrapAddress, setBtcUnwrapAddress] = useState("");

  const globalContext: GlobalContextState = {
    walletMeta,
    setWalletMeta,
    walletApi,
    setWalletApi,
    lucid,
    setLucid,
    network,
    setNetwork,
    modalState,
    setModalState,
    btcWrapAddress,
    setBtcWrapAddress,
    btcUnwrapAddress,
    setBtcUnwrapAddress,
  };

  return (
    <GlobalContext.Provider value={globalContext}>
      {children}
    </GlobalContext.Provider>
  );
}
