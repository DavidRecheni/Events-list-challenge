import styles from "./ListItem.module.css";
import Avatar from "./components/Avatar";
import { ColonyEvent } from "../../colony/events";
import Copy from "./components/Copy";

interface IProps {
  event: ColonyEvent;
}
const ListItem = ({ event }: IProps) => {
  return (
    <div className={styles.container}>
      <Avatar userAddress={event.userAddress} />
      <Copy event={event} />
    </div>
  );
};

export default ListItem;
