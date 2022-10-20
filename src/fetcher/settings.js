import { LocalStorageAuth } from '../context/AuthContext';

export const BASE_URL = 'https://notes-api.dicoding.dev/v1';

export const getAccessToken = () => {
  return localStorage.getItem(LocalStorageAuth);
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
