import Spaces from "@ably/spaces";
import { Realtime } from "ably";

const client = new Realtime.Promise({
  key: "Zj3Azw.m_ykfw:fJc8epecTOqI7B3MMk2eDfRwprVcsCI6EeOfjEEvhqU",
  clientId: "rT3Wbw",
});
export const spaces = new Spaces(client);
export const realtime = client;
