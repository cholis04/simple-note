import PropTypes from 'prop-types';

import useLang from '../hooks/useLang';

import styles from './RemainingChar.module.css';

import { locale } from './RemainingChar.locale';

const RemainingChar = ({ num }) => {
  const { lang } = useLang();
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
