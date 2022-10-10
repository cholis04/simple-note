import { useEffect } from 'react';
import { Link } from 'react-router-dom';

import styles from './NotFound.module.css';

import PageNotFoundDesktop from '../assets/pictures/dark/Page_Not_Found-Desktop.png';
import PageNotFoundTablet from '../assets/pictures/dark/Page_Not_Found-Tablet.png';
import PageNotFoundMobile from '../assets/pictures/dark/Page_Not_Found-Mobile.png';

function NotFound() {
  useEffect(() => {
    document.title = 'Halaman tidak ditemukan!';
  });

  return (
    <main className={styles.main}>
      <picture className={styles.boxImage}>
        <source media="(min-width:960px)" srcSet={PageNotFoundDesktop} />
        <source media="(min-width:480px)" srcSet={PageNotFoundTablet} />
        <img src={PageNotFoundMobile} alt="" />
      </picture>
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
