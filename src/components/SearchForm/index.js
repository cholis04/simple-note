import { useContext } from 'react';
import { SearchIcon } from '@heroicons/react/solid';

import { NotesContext } from '../../context/NotesContext';

import styles from './index.module.css';

function SearchForm() {
  const { keyword, setKeyword } = useContext(NotesContext);

  const handleChange = (e) => {
    setKeyword(e.target.value);
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
        />
      </div>
    </form>
  );
}

export default SearchForm;
