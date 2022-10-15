import { createContext, useCallback, useMemo, useState } from 'react';

export const AuthContext = createContext();

const AuthContextProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  // Handle Login
  const loginUser = useCallback(
    (userData) => {
      setUser(userData);
    },
    [setUser],
  );

  // Handle Logout
  const logoutUser = useCallback(() => {
    setUser(null);
  }, [setUser]);

  //   Context Value
  const contextValue = useMemo(() => {
    return { user, loginUser, logoutUser };
  }, [user, loginUser, logoutUser]);

  return (
    <AuthContext.Provider value={contextValue}>{children}</AuthContext.Provider>
  );
};

export default AuthContextProvider;
