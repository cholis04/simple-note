import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

import FooterText from '../elements/FooterText';

import styles from './Sidenav.module.css';

import LogoDark from '../assets/icons/logo-dark.png';

function Sidenav({ toggleSidenav }) {
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
          <img src={LogoDark} alt="" />
          <span className={styles.title}>Catatan Singkat</span>
        </div>
        <div className={styles.contentInformation}>
          <FooterText />
        </div>
        <ul className={styles.menu}>
          <li>
            <Link to="/catatan/baru" className={styles.menuLink}>
              Tambah
            </Link>
          </li>
          <li>
            <Link to="/" className={styles.menuLink}>
              Semua Catatan
            </Link>
          </li>
          <li>
            <Link to="/arsip" className={styles.menuLink}>
              Daftar Arsip
            </Link>
          </li>
          <li>
            <Link
              to="keluar"
              className={`${styles.menuLink} ${styles.lastMenuLink}`}
            >
              Keluar
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
