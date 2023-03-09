import { ColonyEvent } from "../../../../../../../../colony/events";
import { toBigNumber } from "../../../../../../../../utils/toBigNumber";
import { ColonyRole } from "@colony/colony-js";
import styles from "../../EventDetails.module.css";

interface IProps {
  event: ColonyEvent;
}
const ColonyRoleSetDetails = ({ event }: IProps) => {
  const domainId = toBigNumber(event.values.domainId);
  const roleNumber = toBigNumber(event.values.role);
  const role = ColonyRole[roleNumber.toNumber()];
  return (
    <>
      <span className={styles["font-heavy"]}>{`${role}`}</span> role assigned to
      user{" "}
      <span className={styles["font-heavy"]}>{`${event.userAddress}`}</span> in
      domain <span className={styles["font-heavy"]}>{`${domainId}`}</span>.
    </>
  );
};

export default ColonyRoleSetDetails;
