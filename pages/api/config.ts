// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";
import { CardanoNetwork, isValidNetwork } from "../../utils/api";
import { Dto } from "../../utils/dto";

const CARDANO_NETWORK = process.env.CARDANO_NETWORK;

export default function handler(
  _: NextApiRequest,
  res: NextApiResponse<Dto.GetConfig["response"]>
) {
  let network = CardanoNetwork.Preview;

  if (CARDANO_NETWORK && isValidNetwork(CARDANO_NETWORK)) {
    network = CARDANO_NETWORK;
  }

  res.status(200).json({
    network,
  });
}
