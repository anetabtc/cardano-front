import { Cip30Wallet, WalletApi } from "@cardano-sdk/cip30";

export type CardanoWallet = Cip30Wallet;
export type CardanoWalletApi = WalletApi & { name: string; icon: string };

/**
 * NOTE: please add more wallet names according to your needs.
 *
 * How to get cardano wallet names? go to console and type 'window.cardano'.
 * If wallets are installed on the browser, you can see their names. Use the object
 * keys (not the name in the wallet object) to add the supported wallets
 */
export const CARDANO_WALLETS = ["eternl", "nami", "gerowallet"];
