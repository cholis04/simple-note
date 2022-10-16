import React from 'react';

import useLang from '../hooks/useLang';

import styles from './Loading.module.css';

import { locale } from './Loading.locale';

function Loading() {
  const { lang } = useLang();

  return (
    <div className={styles.container}>
      <p className={styles.lodingText}>{locale[lang].loading}</p>
    </div>
  );
}

export default Loading;
