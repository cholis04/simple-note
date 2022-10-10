import FooterText from '../elements/FooterText';

import styles from './Footer.module.css';

function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.wrapper}>
        <FooterText />
      </div>
    </footer>
  );
}

export default Footer;
