export const BASE_URL = 'https://notes-api.dicoding.dev/v1';

export const getAccessToken = () => {
  return localStorage.getItem('accessToken');
};

export const putAccessToken = (accessToken) => {
  return localStorage.setItem('accessToken', accessToken);
};

export const fetchWithToken = async (url, options = {}) => {
  return fetch(url, {
    ...options,
    headers: {
      ...options.headers,
      Authorization: `Bearer ${getAccessToken()}`,
    },
  });
};
