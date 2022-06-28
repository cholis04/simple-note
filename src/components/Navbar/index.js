import { useContext } from 'react';
import { PlusIcon } from '@heroicons/react/solid';

import { ModalContext } from '../../context/ModalContext';

import styles from './index.module.css';

function Navbar() {
  const { openModal } = useContext(ModalContext);

  return (
    <nav className={styles.navbar}>
      <div className={styles.wrapper}>
        <h1 className={styles.title}>Catatan Singkat</h1>
        <button
          onClick={openModal}
          className={styles.addButton}
          aria-label="Buat Catatan"
          title="Membuat catatan baru"
        >
          <PlusIcon className={styles.plusIcon} />{' '}
          <span className={styles.btnLabel}>Buat Catatan</span>
        </button>
      </div>
    </nav>
  );
}

export default Navbar;
