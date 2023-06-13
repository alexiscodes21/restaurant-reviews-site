export const formatDate = (date) => {
  return new Intl.DateTimeFormat("en-US", {
    year: "numeric",
    month: "short",
    date: "2-digit",
  }).format(new Date(Date.parse(date)));
};
