function Navbar({ openModal }) {
  return (
    <nav>
      <div className="wrapper">
        <h1>Catatan Singkat</h1>
        <button onClick={openModal}>
          <span>[Icon]</span> Buat Catatan
        </button>
      </div>
    </nav>
  );
}

export default Navbar;
