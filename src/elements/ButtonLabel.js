import PropTypes from 'prop-types';

import styles from './ButtonLabel.module.css';

const ButtonLabel = ({ label, title, fullWidth, onClick, disabled }) => {
  return (
    <button
      className={styles.buttonLabel}
      style={{ width: fullWidth ? '100%' : 'auto' }}
      title={title}
      onClick={onClick}
      disabled={disabled}
    >
      {label}
    </button>
  );
};

ButtonLabel.propTypes = {
  label: PropTypes.string.isRequired,
  title: PropTypes.string,
  fullWidth: PropTypes.bool,
  onClick: PropTypes.func,
  disabled: PropTypes.bool,
};

export default ButtonLabel;
