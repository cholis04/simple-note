import PropTypes from 'prop-types';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import { LogoutIcon, MenuAlt3Icon } from '@heroicons/react/solid';

import useLang from '../hooks/useLang';
import useMode from '../hooks/useMode';
import useAuth from '../hooks/useAuth';

import ButtonLabel from '../elements/ButtonLabel';
import ToggleMode from '../elements/ToggleMode';
import ToggleLanguage from '../elements/ToggleLanguage';

import styles from './Header.module.css';

import LogoDark from '../assets/icons/logo-dark.png';
import LogoLight from '../assets/icons/logo-light.png';

import { locale } from './Header.locale';

function Header({ toggleSidenav }) {
  const { lang } = useLang();
  const { mode } = useMode();
  const navigate = useNavigate();
  const location = useLocation();
  const { user, handleLogout } = useAuth();

  // Navigate Rounte on Button Click
  const handleClick = () => {
    navigate('/catatan/baru', {
      state: {
        from: location.pathname,
      },
    });
  };

  // Logout
  const logout = () => {
    if (window.confirm(locale[lang].logoutConfirm)) {
      handleLogout();
    }
  };

  return (
    <nav className={styles.navbar}>
      <div className={styles.wrapper}>
        <div className={styles.personalization}>
          <div className={styles.account}>
            <img src={mode === 'dark' ? LogoDark : LogoLight} alt="" />{' '}
            <span className={styles.accountName} title={user.name}>
              {locale[lang].greeting}, {user.name}
            </span>
          </div>
          <div className={styles.settings}>
            <ToggleMode />
            <ToggleLanguage />
          </div>
        </div>

        <ul className={styles.menu}>
          <li className={styles.menuItem}>
            <Link className={styles.link} to="/">
              {locale[lang].links.allNote}
            </Link>
          </li>
          <li className={styles.menuItem}>
            <Link className={styles.link} to="/arsip">
              {locale[lang].links.archiveList}
            </Link>
          </li>
          <li className={styles.menuItem}>
            <ButtonLabel label={locale[lang].links.new} onClick={handleClick} />
          </li>
          <li className={styles.menuItem}>
            <button
              className={styles.buttonLogout}
              aria-label={locale[lang].links.logout}
              title={locale[lang].links.logout}
              onClick={logout}
            >
              <LogoutIcon />
            </button>
          </li>
        </ul>

        <button
          className={styles.menuToggle}
          aria-label={locale[lang].menuToggle}
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
