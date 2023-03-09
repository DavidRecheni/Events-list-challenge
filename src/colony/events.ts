import { getBlockTime, getLogs } from "@colony/colony-js";
import { getClient, provider } from "./client";
import { LogDescription } from "ethers/utils";
import { Log } from "ethers/providers";
import { toBigNumber } from "../utils/toBigNumber";

// Shorten the block number to speed up the query
const fromBlock = 9839527;

const getLogTime = async (blockHash: string | undefined) => {
  if (!blockHash) return -1;
  return await getBlockTime(provider, blockHash);
};

// Get the raw logs array
export const getEvents = async () => {
  const client = await getClient();

  const getUserAddress = async (fundingPotId: string) => {
    const convertedPotId = toBigNumber(fundingPotId);
    const fundingPot = await client.getFundingPot(convertedPotId);
    if (!fundingPot) return;
    const payment = await client.getPayment(fundingPot.associatedTypeId);
    if (!payment) return;
    return payment.recipient;
  };

  const filterArray = [
    client.filters.PayoutClaimed(null, null, null),
    client.filters.DomainAdded(null),
    client.filters.ColonyRoleSet(null, null, null, null),
    client.filters.ColonyInitialised(null, null),
  ];

  const eventLogs = await Promise.all(
    filterArray.map((filter) => getLogs(client, filter, { fromBlock }))
  );

  const logParser = async (log: Log): Promise<ColonyEvent> => {
    const parsedLog = client.interface.parseLog(log);
    const time = await getLogTime(log.blockHash);
    const userAddress =
      parsedLog.values.user ||
      (await getUserAddress(parsedLog.values.fundingPotId));
    return { ...parsedLog, time, userAddress };
  };

  // Flat result , sort by block number and parse
  const parsedLogs = await Promise.all(
    eventLogs.flatMap((logs) => logs).map((log) => logParser(log))
  );

  // Get the parsed logs array

  return parsedLogs.sort((a, b) => b.time - a.time);
};

export interface ColonyEvent extends LogDescription {
  time: number;
  userAddress?: string;
}
