import { ColonyEvent } from "../../../../../../colony/events";
import ColonyInitDetails from "./components/ColonyInitDetails";
import ColonyRoleSetDetails from "./components/ColonyRoleSetDetails";
import DomainAddedDetails from "./components/DomainAddedDetails";
import PayoutClaimedDetails from "./components/PayoutClaimedDetails";

interface IProps {
  event: ColonyEvent;
}
const EventDetails = ({ event }: IProps) => {
  switch (event.name) {
    case "PayoutClaimed": {
      return <PayoutClaimedDetails event={event} />;
    }
    case "DomainAdded": {
      return <DomainAddedDetails event={event} />;
    }
    case "ColonyRoleSet": {
      return <ColonyRoleSetDetails event={event} />;
    }
    case "ColonyInitialised":
      return <ColonyInitDetails />;
    default:
      return null;
  }
};

export default EventDetails;
