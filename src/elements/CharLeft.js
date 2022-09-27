import styles from './CharLeft.module.css';
import PropTypes from 'prop-types';

const CharLeft = ({ num }) => {
  return (
    <p className={styles.charLeft}>
      <b>{num}</b> Sisa Karakter
    </p>
  );
};

CharLeft.propTypes = {
  num: PropTypes.number.isRequired,
};

export default CharLeft;
