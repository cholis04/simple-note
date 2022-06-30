import { useEffect } from 'react';
import { Link } from 'react-router-dom';

import styles from '../styles/notfound.module.css';

function NotFound() {
  useEffect(() => {
    document.title = 'Halaman tidak ditemukan!';
  });

  return (
    <main className={styles.main}>
      <p className={styles.notfound}>404</p>
      <h1 className={styles.title}>Ups, terjadi kesalahan!</h1>
      <p className={styles.paragraph}>
        Halaman yang anda cari tidak ditemukan. Silahkan kembali ke{' '}
        <Link className={styles.link} to="/">
          halaman utama
        </Link>
        .
      </p>
    </main>
  );
}

export default NotFound;
