export enum CardanoNetwork {
  mainnet = "mainnet",
  preprod = "preprod",
  preview = "preview",
}

export const BLOCKFROST_URL: Record<CardanoNetwork, string> = {
  [CardanoNetwork.mainnet]: "https://cardano-mainnet.blockfrost.io/api/v0",
  [CardanoNetwork.preprod]: "https://cardano-preprod.blockfrost.io/api/v0",
  [CardanoNetwork.preview]: "https://cardano-preview.blockfrost.io/api/v0",
};
