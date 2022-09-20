import EmptyInboxDesktop from '../assets/images/Empty_Inbox-Desktop.png';
import EmptyInboxTablet from '../assets/images/Empty_Inbox-Tablet.png';
import EmptyInboxMobile from '../assets/images/Empty_Inbox-Mobile.png';

import styles from './EmptyList.module.css';

function Empty() {
  return (
    <div className={styles.boxEmpty}>
      <picture>
        <source media="(min-width:960px)" srcSet={EmptyInboxDesktop} />
        <source media="(min-width:480px)" srcSet={EmptyInboxTablet} />
        <img src={EmptyInboxMobile} alt="" />
      </picture>
      <p className={styles.text}>
        Catatan singkat tidak ditemukan,{' '}
        <a href="/catatan/baru" className={styles.linkAdd}>
          Buat sekarang!
        </a>
      </p>
    </div>
  );
}

export default Empty;
