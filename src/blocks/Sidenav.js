import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

import useLang from '../hooks/useLang';
import useMode from '../hooks/useMode';

import FooterText from '../elements/FooterText';

import styles from './Sidenav.module.css';

import LogoDark from '../assets/icons/logo-dark.png';
import LogoLight from '../assets/icons/logo-light.png';

import { locale } from './Sidenav.locale';

function Sidenav({ toggleSidenav }) {
  const { lang } = useLang();
  const { mode } = useMode();

  // Handle Close Overlay
  const handleClose = (e) => {
    if (e.target.id === 'overlay-aside') {
      toggleSidenav();
    }
  };

  return (
    <aside className={styles.overlay} id="overlay-aside" onClick={handleClose}>
      <nav className={styles.navContent}>
        <div className={styles.navHeader}>
          <img src={mode === 'dark' ? LogoDark : LogoLight} alt="" />
          <span className={styles.title}>{locale[lang].title}</span>
        </div>
        <div className={styles.contentInformation}>
          <FooterText />
        </div>
        <ul className={styles.menu}>
          <li>
            <Link to="/catatan/baru" className={styles.menuLink}>
              {locale[lang].links.add}
            </Link>
          </li>
          <li>
            <Link to="/" className={styles.menuLink}>
              {locale[lang].links.allNote}
            </Link>
          </li>
          <li>
            <Link to="/arsip" className={styles.menuLink}>
              {locale[lang].links.archiveList}
            </Link>
          </li>
          <li>
            <Link
              to="/keluar"
              className={`${styles.menuLink} ${styles.lastMenuLink}`}
            >
              {locale[lang].links.logout}
            </Link>
          </li>
        </ul>
      </nav>
    </aside>
  );
}

Sidenav.propTypes = {
  toggleSidenav: PropTypes.func.isRequired,
};

export default Sidenav;
