export const formattedDate = (date) => {
  const year = date.getFullYear();
  const month = (date.getMonth() + 1).toString().padStart(2, "0");
  const day = date.getDate().toString().padStart(2, "0");
  return year + "-" + month + "-" + day;
};

export const getPastDate = () => {
  var ourDate = new Date();
  var pastDate = ourDate.getDate() - 7;
  ourDate.setDate(pastDate);
  return formattedDate(ourDate);
};
