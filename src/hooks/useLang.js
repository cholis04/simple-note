import { useContext } from 'react';

import { LanguageContext } from '../context/LanguageContext';

const useLang = () => {
  const { lang, toggleLang } = useContext(LanguageContext);
  return { lang, toggleLang };
};

export default useLang;
