import PropTypes from 'prop-types';

import styles from './InvalidMessage.module.css';

const InvalidMessage = ({ errorText }) => {
  return (
    <p role="alert" className={styles.invalid}>
      *{errorText}
    </p>
  );
};

InvalidMessage.propTypes = {
  errorText: PropTypes.string,
};

export default InvalidMessage;