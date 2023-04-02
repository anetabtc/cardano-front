import { CardanoNetwork } from "./api";

export namespace Dto {
  export interface Base {
    query: {};
    body: {};
    response: {};
  }

  export interface GetConfig extends Base {
    response: {
      network: CardanoNetwork;
    };
  }
}
