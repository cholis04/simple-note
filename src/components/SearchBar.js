import { useContext } from 'react';
import { SearchIcon } from '@heroicons/react/solid';

import { NotesContext } from '../context/NotesContext';

import styles from './SearchBar.module.css';

function SearchBar() {
  const { keyword, setKeyword } = useContext(NotesContext);

  const handleChange = (e) => {
    const value = e.target.value;
    setKeyword(value.trimStart());
  };

  return (
    <form role="search" className={styles.form}>
      <div className={styles.inputGroup}>
        <SearchIcon className={styles.icon} />
        <input
          name="cari-catatan"
          type="search"
          placeholder="Cari catatan ... "
          aria-label="Cari catatan"
          value={keyword}
          onChange={handleChange}
          className={styles.textbox}
          autoComplete="off"
        />
      </div>
    </form>
  );
}

export default SearchBar;
