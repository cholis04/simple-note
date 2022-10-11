import styles from './CharLeft.module.css';
import PropTypes from 'prop-types';

import { locale } from './CharLeft.locale';

const CharLeft = ({ num }) => {
  const lang = 'en';
  return (
    <p className={styles.charLeft}>
      <b>{num}</b> {locale[lang].label}
    </p>
  );
};

CharLeft.propTypes = {
  num: PropTypes.number.isRequired,
};

export default CharLeft;
