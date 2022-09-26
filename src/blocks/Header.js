import { Link, useNavigate } from 'react-router-dom';

import ButtonLabel from '../elements/ButtonLabel';
import styles from './Header.module.css';

function Header() {
  const navigate = useNavigate();

  // Navigate Rounte on Button Click
  const handleClick = () => {
    navigate('/catatan/baru');
  };

  return (
    <nav className={styles.navbar}>
      <div className={styles.wrapper}>
        <Link className={styles.brand} to="/">
          Catatan Singkat
        </Link>

        <ul className={styles.menu}>
          <li className={styles.menuItem}>
            <Link className={styles.link} to="/arsip">
              Arsip
            </Link>
          </li>
          <li className={styles.menuLastItem}>
            <ButtonLabel
              label="Buat Catatan"
              title="Membuat catatan baru"
              onClick={handleClick}
            />
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Header;
