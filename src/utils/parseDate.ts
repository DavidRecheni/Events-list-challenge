import moment from "moment";

export const parseDate = (date: number) => {
  return moment(date).format("DD MMM");
};
