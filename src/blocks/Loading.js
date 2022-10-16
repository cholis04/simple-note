import React, { useEffect } from 'react';

import useLang from '../hooks/useLang';

import styles from './Loading.module.css';

import { locale } from './Loading.locale';

function Loading() {
  const { lang } = useLang();

  // Set Title
  useEffect(() => {
    document.title = locale[lang].loading;
  }, [lang]);

  return (
    <div className={styles.container}>
      <p className={styles.lodingText}>{locale[lang].loading}</p>
    </div>
  );
}

export default Loading;
