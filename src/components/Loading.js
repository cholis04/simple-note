import React, { useEffect } from 'react';
import PropTypes from 'prop-types';

import useLang from '../hooks/useLang';

import styles from './Loading.module.css';

import { locale } from './Loading.locale';

function Loading({ text }) {
  const { lang } = useLang();

  // Set Title
  useEffect(() => {
    document.title = locale[lang].text[text];
  }, [lang, text]);

  return (
    <main className={styles.container}>
      <h1 className={styles.loadingText}>{locale[lang].text[text]}</h1>
    </main>
  );
}

Loading.propTypes = {
  text: PropTypes.string.isRequired,
};

export default Loading;
