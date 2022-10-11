export const getColorScheme = () => {
  const defaultDark = window.matchMedia('(prefers-color-scheme:dark)').matches;
  return defaultDark ? 'dark' : 'light';
};
