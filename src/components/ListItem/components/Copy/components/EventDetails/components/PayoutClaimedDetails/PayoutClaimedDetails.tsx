import styles from "../../EventDetails.module.css";
import { ColonyEvent } from "../../../../../../../../colony/events";
import { toBigNumber } from "../../../../../../../../utils/toBigNumber";
import { wei } from "../../../../../../../../utils/wei";
import TOKENS, {
  TokenAddress,
} from "../../../../../../../../colony/constants/tokens";

interface IProps {
  event: ColonyEvent;
}
const PayoutClaimedDetails = ({ event }: IProps) => {
  const amount = toBigNumber(event.values.amount).div(wei.pow(18));
  const fundingPotId = toBigNumber(event.values.fundingPotId);
  const { token }: { token: TokenAddress } = event.values;
  return (
    <>
      User{" "}
      <span className={styles["font-heavy"]}>{`${event.userAddress}`}</span>{" "}
      claimed{" "}
      <span className={styles["font-heavy"]}>
        {`${amount}`} {`${TOKENS[token] || ""}`}
      </span>
      payout from pot
      <span className={styles["font-heavy"]}>{`${fundingPotId}`}</span>.
    </>
  );
};

export default PayoutClaimedDetails;
