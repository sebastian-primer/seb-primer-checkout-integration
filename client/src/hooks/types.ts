import { ClientSession as PrimerClientSession } from "@primer-io/checkout-web";

export interface ClientSession extends PrimerClientSession {
  clientToken: string;
  clientTokenExpiration: string;
}
