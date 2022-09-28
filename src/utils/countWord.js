export const countWords = (str) => {
  return (str.match(/[a-zA-Z0-9]+/g) || []).length;
};
