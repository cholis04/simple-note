import {
  createContext,
  useCallback,
  useEffect,
  useMemo,
  useState,
} from 'react';

import { getColorScheme } from '../utils/getColorScheme';

export const ModeContext = createContext();

const LocalStorageName = 'mode-KS89DK29084H9XC';

// Initialize State
const initialState = () => {
  const localData = localStorage.getItem(LocalStorageName);
  return localData ? localData : getColorScheme();
};

const ModeContextProvider = (props) => {
  const [mode, setMode] = useState(() => initialState());

  const toggleMode = useCallback(() => {
    setMode((prev) => (prev === 'light' ? 'dark' : 'light'));
  }, [setMode]);

  //   Context Value
  const contextValue = useMemo(() => {
    return { mode, toggleMode };
  }, [mode, toggleMode]);

  useEffect(() => {
    // Sync with Local Storage
    localStorage.setItem(LocalStorageName, mode);

    // Update HTML data-mode attribute
    const rootElement = document.documentElement;
    rootElement.setAttribute('data-mode', mode);
  }, [mode]);

  return (
    <ModeContext.Provider value={contextValue}>
      {props.children}
    </ModeContext.Provider>
  );
};

export default ModeContextProvider;
