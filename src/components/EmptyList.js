import { useContext } from 'react';
import { Link, useLocation } from 'react-router-dom';

import { ModeContext } from '../context/ModeContext';

import DarkEmptyInboxDesktop from '../assets/pictures/dark/Empty_Inbox-Desktop.png';
import DarkEmptyInboxTablet from '../assets/pictures/dark/Empty_Inbox-Tablet.png';
import DarkEmptyInboxMobile from '../assets/pictures/dark/Empty_Inbox-Mobile.png';
import LightEmptyInboxDesktop from '../assets/pictures/light/Empty_Inbox-Desktop.png';
import LightEmptyInboxTablet from '../assets/pictures/light/Empty_Inbox-Tablet.png';
import LightEmptyInboxMobile from '../assets/pictures/light/Empty_Inbox-Mobile.png';

import styles from './EmptyList.module.css';

import { locale } from './EmptyList.locale';

function Empty() {
  const lang = 'en';
  const { mode } = useContext(ModeContext);
  const location = useLocation();

  return (
    <div className={styles.boxEmpty}>
      <picture>
        <source
          media="(min-width:960px)"
          srcSet={
            mode === 'dark' ? DarkEmptyInboxDesktop : LightEmptyInboxDesktop
          }
        />
        <source
          media="(min-width:480px)"
          srcSet={
            mode === 'dark' ? DarkEmptyInboxTablet : LightEmptyInboxTablet
          }
        />
        <img
          src={mode === 'dark' ? DarkEmptyInboxMobile : LightEmptyInboxMobile}
          alt=""
        />
      </picture>
      <p className={styles.text}>
        {locale[lang].notification},{' '}
        <Link
          to="/catatan/baru"
          className={styles.linkAdd}
          state={{
            from: location.pathname,
          }}
        >
          {locale[lang].cta}
        </Link>
      </p>
    </div>
  );
}

export default Empty;
