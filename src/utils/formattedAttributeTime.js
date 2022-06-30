export const formattedAttributeTime = (time) => {
  const newTime = new Date(time);

  const getDate = newTime.toISOString().split('T', 1);
  const getTime = newTime.toTimeString().split(' ', 1);

  return `${getDate} ${getTime}`;
};
