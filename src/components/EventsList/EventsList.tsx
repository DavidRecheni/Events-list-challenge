import { useEffect, useState } from "react";
import { ColonyEvent, getEvents } from "../../colony/events";
import styles from "./EventsList.module.css";
import ListItem from "../ListItem";

const EventsList = () => {
  const [events, setEvents] = useState<ColonyEvent[]>([]);
  useEffect(() => {
    const getEventLogs = async () => {
      const events = await getEvents();
      setEvents(events);
    };

    getEventLogs();
  }, []);

  return (
    <div className={styles.container}>
      {events.map((event, index) => {
        return <ListItem key={index} event={event} />;
      })}
    </div>
  );
};

export default EventsList;
