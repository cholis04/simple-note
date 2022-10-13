import PropTypes from 'prop-types';

import styles from './InvalidMessage.module.css';

const InvalidMessage = ({ text }) => {
  return (
    <p role="alert" className={styles.invalidMessage}>
      *{text}
    </p>
  );
};

InvalidMessage.propTypes = {
  text: PropTypes.string,
};

export default InvalidMessage;
