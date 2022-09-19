import EmptyInboxDesktop from '../../assets/images/Empty_Inbox_Outline_Desktop.png';
import EmptyInboxMobile from '../../assets/images/Empty_Inbox_Outline_Mobile.png';

import styles from './index.module.css';

function Empty() {
  return (
    <div className={styles.boxEmpty}>
      <picture>
        <source media="(min-width:768px)" srcSet={EmptyInboxDesktop} />
        <img src={EmptyInboxMobile} alt="" />
      </picture>
      <p className={styles.text}>
        Catatan singkat tidak ditemukan,{' '}
        <button className={styles.btnAdd}>Buat sekarang!</button>
      </p>
    </div>
  );
}

export default Empty;
