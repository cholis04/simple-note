import styles from './FooterText.module.css';

const FooterText = () => {
  return (
    <p className={styles.paragraph}>
      Proyek “Membangun Single Page Application menggunakan React” dari{' '}
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
  );
};

export default FooterText;
