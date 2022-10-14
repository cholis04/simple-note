import { createContext, useCallback, useMemo, useState } from 'react';

export const AuthContext = createContext();

const AuthContextProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  //   Handle Login
  const login = useCallback(() => {
    setUser({
      name: 'Miranda Flower',
    });
  }, [setUser]);

  //   Handle Logout
  const logout = useCallback(() => {
    setUser(null);
  }, [setUser]);

  //   Context Value
  const contextValue = useMemo(() => {
    return { user, login, logout };
  }, [user, login, logout]);

  return (
    <AuthContext.Provider value={contextValue}>{children}</AuthContext.Provider>
  );
};

export default AuthContextProvider;
