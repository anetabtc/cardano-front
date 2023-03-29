import type { NextApiRequest, NextApiResponse } from "next";

const mainnetUrl = "https://cardano-mainnet.blockfrost.io/api/v0";
const projectId = "";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const { url, method, body, headers } = req.body;

  const fetchResponse = await (
    await fetch(`${mainnetUrl}${url}`, {
      method,
      body,
      headers: {
        ...headers,
        project_id: projectId,
      },
    })
  ).json();

  res.status(200).send(fetchResponse);
}
