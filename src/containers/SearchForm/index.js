function SearchForm() {
  return (
    <form role="search">
      <div className="input-group">
        <span>[Icon]</span>
        <input
          name="cari-catatan"
          type="search"
          placeholder="Cari catatan... "
          aria-label="Cari catatan"
        />
      </div>
    </form>
  );
}

export default SearchForm;
