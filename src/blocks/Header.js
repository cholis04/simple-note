import { useContext } from 'react';
import PropTypes from 'prop-types';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import { LogoutIcon, MenuAlt3Icon } from '@heroicons/react/solid';

import { ModeContext } from '../context/ModeContext';

import ButtonLabel from '../elements/ButtonLabel';
import ToggleMode from '../elements/ToggleMode';
import ToggleLocale from '../elements/ToggleLocale';

import styles from './Header.module.css';

import LogoDark from '../assets/icons/logo-dark.png';
import LogoLight from '../assets/icons/logo-light.png';

function Header({ toggleSidenav }) {
  const { mode } = useContext(ModeContext);
  const navigate = useNavigate();
  const location = useLocation();

  // Navigate Rounte on Button Click
  const handleClick = () => {
    navigate('/catatan/baru', {
      state: {
        from: location.pathname,
      },
    });
  };

  return (
    <nav className={styles.navbar}>
      <div className={styles.wrapper}>
        <div className={styles.personalization}>
          <div className={styles.account}>
            <img src={mode === 'dark' ? LogoDark : LogoLight} alt="" />{' '}
            <span
              className={styles.accountName}
              title="Nico Robin Extended Name Version"
            >
              Hai, Nico Robin Extended Name Version
            </span>
          </div>
          <div className={styles.settings}>
            <ToggleMode />
            <ToggleLocale />
          </div>
        </div>

        <ul className={styles.menu}>
          <li className={styles.menuItem}>
            <Link className={styles.link} to="/">
              Catatan
            </Link>
          </li>
          <li className={styles.menuItem}>
            <Link className={styles.link} to="/arsip">
              Arsip
            </Link>
          </li>
          <li className={styles.menuItem}>
            <ButtonLabel
              label="Buat Catatan"
              title="Membuat catatan baru"
              onClick={handleClick}
            />
          </li>
          <li className={styles.menuItem}>
            <Link
              className={styles.link}
              to="/keluar"
              aria-label="Keluar"
              title="Keluar"
            >
              <LogoutIcon />
            </Link>
          </li>
        </ul>

        <button
          className={styles.menuToggle}
          aria-label="Buka Menu"
          onClick={toggleSidenav}
        >
          <MenuAlt3Icon />
        </button>
      </div>
    </nav>
  );
}

Header.propTypes = {
  toggleSidenav: PropTypes.func.isRequired,
};

export default Header;
