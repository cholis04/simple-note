import { useContext } from 'react';
import { SearchIcon } from '@heroicons/react/solid';

import { LanguageContext } from '../context/LanguageContext';
import { NotesContext } from '../context/NotesContext';

import styles from './SearchBar.module.css';

import { locale } from './SearchBar.locale';

function SearchBar() {
  const { lang } = useContext(LanguageContext);
  const { keywordTitle, setKeywordTitle } = useContext(NotesContext);

  const handleChange = (e) => {
    const value = e.target.value;
    setKeywordTitle(value.trimStart());
  };

  return (
    <form role="search" className={styles.form}>
      <div className={styles.inputGroup}>
        <SearchIcon className={styles.icon} />
        <input
          type="search"
          placeholder={locale[lang].placeholder}
          aria-label={locale[lang].label}
          value={keywordTitle}
          onChange={handleChange}
          className={styles.textbox}
          autoComplete="off"
        />
      </div>
    </form>
  );
}

export default SearchBar;
