import {
  createContext,
  useCallback,
  useEffect,
  useMemo,
  useState,
} from 'react';

import { getUserLogged } from '../fetcher/userFetcher';

export const AuthContext = createContext();

export const LocalStorageAuth = 'auth-HSBSKSIUOS89JLS2983';

const AuthContextProvider = ({ children }) => {
  const [loading, setLoading] = useState(false);
  const [user, setUser] = useState(null);

  // Get user
  const getUser = async () => {
    setLoading(true);

    const resJson = await getUserLogged();

    if (resJson.error === false) {
      setUser(resJson.data);
      setLoading(false);
    } else {
      setUser(null);
      setLoading(false);
    }
  };

  // Handle Login
  const handleLogin = useCallback((accessToken) => {
    localStorage.setItem(LocalStorageAuth, accessToken);
    getUser();
  }, []);

  // Handle Logout
  const handleLogout = useCallback(() => {
    localStorage.removeItem(LocalStorageAuth);
    setUser(null);
  }, []);

  //   Context Value
  const contextValue = useMemo(() => {
    return { user, loading, handleLogin, handleLogout };
  }, [user, loading, handleLogin, handleLogout]);

  useEffect(() => {
    if (localStorage.getItem(LocalStorageAuth)) {
      getUser();
    }
  }, []);

  return (
    <AuthContext.Provider value={contextValue}>{children}</AuthContext.Provider>
  );
};

export default AuthContextProvider;
