import { useContext } from 'react';
import { TranslateIcon } from '@heroicons/react/solid';

import { LanguageContext } from '../context/LanguageContext';

import styles from './ToggleLanguage.module.css';

import { locale } from './ToggleLanguage.locale';

const ToggleLanguage = () => {
  const { lang, toggleLang } = useContext(LanguageContext);

  return (
    <button
      className={styles.toggleLanguage}
      title={lang === 'en' ? locale[lang].idTitle : locale[lang].enTitle}
      aria-label={lang === 'en' ? locale[lang].idTitle : locale[lang].enTitle}
      onClick={toggleLang}
    >
      <TranslateIcon /> <span>{locale[lang].currentLang}</span>
    </button>
  );
};

export default ToggleLanguage;
