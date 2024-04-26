export const getTimeShort = (timeStamp: string): string => {
  const date = new Date(timeStamp);
  if (isNaN(date.getTime())) {
    return "";
  }
  return new Intl.DateTimeFormat("en-US", {
    timeStyle: "short",
    hourCycle: "h12",
  }).format(date);
};

export const getDateMedium = (timeStamp: string): string => {
  const date = new Date(timeStamp);
  if (isNaN(date.getTime())) {
    return "";
  }
  return new Intl.DateTimeFormat("en-US", { dateStyle: "medium" }).format(date);
};