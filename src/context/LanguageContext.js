import {
  createContext,
  useCallback,
  useEffect,
  useMemo,
  useState,
} from 'react';

export const LanguageContext = createContext();

const LocalStorageName = 'lang-KSKSI8D7892KS983';

// Initialize State
const initialState = () => {
  const localData = localStorage.getItem(LocalStorageName);
  return localData ? localData : 'id';
};

const LanguageContextProvider = (props) => {
  const [lang, setLang] = useState(() => initialState());

  const toggleLang = useCallback(() => {
    setLang((prev) => (prev === 'en' ? 'id' : 'en'));
  }, [setLang]);

  //   Context Value
  const contextValue = useMemo(() => {
    return {
      lang,
      toggleLang,
    };
  }, [lang, toggleLang]);

  useEffect(() => {
    // Sync with Local Storage
    localStorage.setItem(LocalStorageName, lang);

    // Update HTML lang attribute
    const rootElement = document.documentElement;
    rootElement.setAttribute('lang', lang);
  }, [lang]);

  return (
    <LanguageContext.Provider value={contextValue}>
      {props.children}
    </LanguageContext.Provider>
  );
};

export default LanguageContextProvider;
