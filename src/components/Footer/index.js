import styles from './index.module.css';

function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.wrapper}>
        <p className={styles.paragraph}>
          Proyek Akhir “Membangun Aplikasi Notes Menggunakan React” dari{' '}
          <a
            className={styles.link}
            href="https://www.dicoding.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Dicoding Indonesia
          </a>
          . Dibuat oleh{' '}
          <a
            className={styles.link}
            href="https://www.dicoding.com/users/cholis04"
            target="_blank"
            rel="noopener noreferrer"
          >
            cholis04
          </a>
          .
        </p>
      </div>
    </footer>
  );
}

export default Footer;
