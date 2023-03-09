import { ColonyEvent } from "../../../../colony/events";
import { parseDate } from "../../../../utils/parseDate";
import styles from "./Copy.module.css";
import EventDetails from "./components/EventDetails/EventDetails";

interface IProps {
  event: ColonyEvent;
}

const Copy = ({ event }: IProps) => {
  return (
    <div className={styles.container}>
      <div className={`${styles["text-primary"]} ${styles["hide-overflow"]}`}>
        <EventDetails event={event} />
      </div>
      <div className={styles["text-secondary"]}>{parseDate(event.time)}</div>
    </div>
  );
};

export default Copy;
