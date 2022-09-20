import { PlusIcon } from '@heroicons/react/solid';

import styles from './index.module.css';

function Header() {
  return (
    <nav className={styles.navbar}>
      <div className={styles.wrapper}>
        <h1 className={styles.title}>Catatan Singkat</h1>
        <button
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

export default Header;
