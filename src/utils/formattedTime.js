export const showDate = (date, locale) => {
  const options = {
    weekday: 'long',
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  };
  return new Date(date).toLocaleDateString(locale, options);
};

export const AttributeTime = (time) => {
  const newTime = new Date(time);

  const getDate = newTime.toISOString().split('T', 1);
  const getTime = newTime.toTimeString().split(' ', 1);

  return `${getDate} ${getTime}`;
};
