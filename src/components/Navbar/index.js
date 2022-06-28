import { useContext } from 'react';

import { ModalContext } from '../../context/ModalContext';

function Navbar() {
  const { openModal } = useContext(ModalContext);

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
