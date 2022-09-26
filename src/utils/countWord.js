export const countWords = (str) => {
  const arr = str.split(' ');
  return arr.filter((word) => word !== '').length;
};
