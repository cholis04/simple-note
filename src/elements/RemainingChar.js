import { useContext } from 'react';
import PropTypes from 'prop-types';

import { LanguageContext } from '../context/LanguageContext';

import styles from './RemainingChar.module.css';

import { locale } from './RemainingChar.locale';

const RemainingChar = ({ num }) => {
  const { lang } = useContext(LanguageContext);
  return (
    <p className={styles.remainingChar}>
      <b>{num}</b> {locale[lang].label}
    </p>
  );
};

RemainingChar.propTypes = {
  num: PropTypes.number.isRequired,
};

export default RemainingChar;
