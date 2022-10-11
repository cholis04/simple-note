import styles from './FooterText.module.css';

import { locale } from './FooterText.locale';

const FooterText = () => {
  const lang = 'en';

  return (
    <p className={styles.paragraph}>
      {locale[lang].projectTitle}{' '}
      <a
        className={styles.link}
        href="https://www.dicoding.com/"
        target="_blank"
        rel="noopener noreferrer"
      >
        Dicoding Indonesia
      </a>
      . {locale[lang].madeBy}{' '}
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
