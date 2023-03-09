import { ColonyEvent } from "../../../../../../../../colony/events";
import { toBigNumber } from "../../../../../../../../utils/toBigNumber";
import styles from "../../EventDetails.module.css";

interface IProps {
  event: ColonyEvent;
}
const DomainAddedDetails = ({ event }: IProps) => {
  const domainId = toBigNumber(event.values.domainId);
  return (
    <>
      Domain <span className={styles["font-heavy"]}>{`${domainId}`}</span>{" "}
      added.
    </>
  );
};

export default DomainAddedDetails;
