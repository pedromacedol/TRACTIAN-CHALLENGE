export const useFormattedDate = (date: Date) => {
  const dateUTC = new Date(date);
  return dateUTC.toLocaleString("en-US");
};
