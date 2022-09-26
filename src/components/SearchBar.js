import { useContext } from 'react';
import { SearchIcon } from '@heroicons/react/solid';

import { NotesContext } from '../context/NotesContext';

import styles from './SearchBar.module.css';

function SearchBar() {
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
          name="cari-catatan"
          type="search"
          placeholder="Cari berdasarkan judul ... "
          aria-label="Cari catatan berdasarkan judul"
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
