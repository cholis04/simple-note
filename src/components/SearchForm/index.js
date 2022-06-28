import { useContext } from 'react';
import { NotesContext } from '../../context/NotesContext';

function SearchForm() {
  const { keyword, setKeyword } = useContext(NotesContext);

  const handleChange = (e) => {
    setKeyword(e.target.value);
  };

  return (
    <form role="search">
      <div className="search-input-group">
        <span>[Icon]</span>
        <input
          name="cari-catatan"
          type="search"
          placeholder="Cari catatan... "
          aria-label="Cari catatan"
          value={keyword}
          onChange={handleChange}
        />
      </div>
    </form>
  );
}

export default SearchForm;
