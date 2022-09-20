import ButtonLabel from '../elements/ButtonLabel';
import styles from './Header.module.css';

function Header() {
  const handleClick = () => {
    console.log('clicked');
  };

  return (
    <nav className={styles.navbar}>
      <div className={styles.wrapper}>
        <p className={styles.brand}>Catatan Singkat</p>

        <ul className={styles.menu}>
          <li className={styles.menuItem}>
            <a className={styles.link} href="/arsip">
              Arsip
            </a>
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
