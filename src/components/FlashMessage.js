import PropTypes from 'prop-types';
import { CheckCircleIcon, ExclamationIcon } from '@heroicons/react/solid';

import styles from './FlashMessage.module.css';

function FlashMessage({ type, message }) {
  const colors = {
    success: styles.success,
    error: styles.error,
  };

  const icons = {
    success: <CheckCircleIcon />,
    error: <ExclamationIcon />,
  };

  return (
    <div
      className={`${styles.flashMessage} ${colors[type] || styles.success}`}
      role="alert"
    >
      {icons[type] || <CheckCircleIcon />}
      <p className={styles.messageText}>{message}</p>
    </div>
  );
}

FlashMessage.propTypes = {
  type: PropTypes.oneOf(['success', 'error']).isRequired,
  message: PropTypes.string.isRequired,
};

export default FlashMessage;
