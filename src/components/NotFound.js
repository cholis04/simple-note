import { useContext, useEffect } from 'react';
import { Link } from 'react-router-dom';

import { LanguageContext } from '../context/LanguageContext';
import { ModeContext } from '../context/ModeContext';

import DarkNotFoundDesktop from '../assets/pictures/dark/Page_Not_Found-Desktop.png';
import DarkNotFoundTablet from '../assets/pictures/dark/Page_Not_Found-Tablet.png';
import DarkNotFoundMobile from '../assets/pictures/dark/Page_Not_Found-Mobile.png';
import LightNotFoundDesktop from '../assets/pictures/light/Page_Not_Found-Desktop.png';
import LightNotFoundTablet from '../assets/pictures/light/Page_Not_Found-Tablet.png';
import LightNotFoundMobile from '../assets/pictures/light/Page_Not_Found-Mobile.png';

import styles from './NotFound.module.css';

import { locale } from './NotFound.locale';

function NotFound() {
  const { lang } = useContext(LanguageContext);
  const { mode } = useContext(ModeContext);

  // Set Title
  useEffect(() => {
    document.title = locale[lang].pageTitle;
  }, [lang]);

  return (
    <main className={styles.main}>
      <picture className={styles.boxImage}>
        <source
          media="(min-width:960px)"
          srcSet={mode === 'dark' ? DarkNotFoundDesktop : LightNotFoundDesktop}
        />
        <source
          media="(min-width:480px)"
          srcSet={mode === 'dark' ? DarkNotFoundTablet : LightNotFoundTablet}
        />
        <img
          src={mode === 'dark' ? DarkNotFoundMobile : LightNotFoundMobile}
          alt=""
        />
      </picture>
      <h1 className={styles.title}>{locale[lang].headingText}</h1>
      <p className={styles.paragraph}>
        {locale[lang].paragraphText}{' '}
        <Link className={styles.link} to="/">
          {locale[lang].LinkText}
        </Link>
        .
      </p>
    </main>
  );
}

export default NotFound;
