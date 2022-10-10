import { Link, useLocation } from 'react-router-dom';

import EmptyInboxDesktop from '../assets/pictures/dark/Empty_Inbox-Desktop.png';
import EmptyInboxTablet from '../assets/pictures/dark/Empty_Inbox-Tablet.png';
import EmptyInboxMobile from '../assets/pictures/dark/Empty_Inbox-Mobile.png';

import styles from './EmptyList.module.css';

function Empty() {
  const location = useLocation();

  return (
    <div className={styles.boxEmpty}>
      <picture>
        <source media="(min-width:960px)" srcSet={EmptyInboxDesktop} />
        <source media="(min-width:480px)" srcSet={EmptyInboxTablet} />
        <img src={EmptyInboxMobile} alt="" />
      </picture>
      <p className={styles.text}>
        Catatan singkat tidak ditemukan,{' '}
        <Link
          to="/catatan/baru"
          className={styles.linkAdd}
          state={{
            from: location.pathname,
          }}
        >
          Buat sekarang!
        </Link>
      </p>
    </div>
  );
}

export default Empty;
