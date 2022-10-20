import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
} from 'react';

import { NotesContext } from './NotesContext';

import { getUserLogged } from '../fetcher/userFetcher';

export const AuthContext = createContext();

export const LocalStorageAuth = 'auth-KSBSKSIUOS89JLS2983';

const AuthContextProvider = ({ children }) => {
  const [loading, setLoading] = useState(true);
  const [user, setUser] = useState(null);

  const { dispatch } = useContext(NotesContext);

  // Remove auth storage
  const cleanLocalStorage = () => {
    localStorage.removeItem(LocalStorageAuth);
  };

  // Get user
  const getUser = useCallback(async () => {
    const resJson = await getUserLogged();

    if (resJson.error === false) {
      setUser(resJson.data);
      setLoading(false);
    } else {
      setUser(null);
      setLoading(false);
      cleanLocalStorage();
    }
  }, []);

  // Handle Login
  const handleLogin = useCallback(
    (accessToken) => {
      setLoading(true);
      localStorage.setItem(LocalStorageAuth, accessToken);
      getUser();
    },
    [getUser],
  );

  // Handle Logout
  const handleLogout = useCallback(() => {
    cleanLocalStorage();
    setUser(null);
    dispatch({ type: 'RESET' });
  }, [dispatch]);

  //   Context Value
  const contextValue = useMemo(() => {
    return { user, loading, handleLogin, handleLogout };
  }, [user, loading, handleLogin, handleLogout]);

  // Check local storage token
  useEffect(() => {
    if (localStorage.getItem(LocalStorageAuth)) {
      getUser();
    } else {
      setLoading(false);
    }
  }, [getUser]);

  return (
    <AuthContext.Provider value={contextValue}>{children}</AuthContext.Provider>
  );
};

export default AuthContextProvider;
