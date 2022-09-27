import PropTypes from 'prop-types';

import styles from './ButtonLabel.module.css';

const ButtonLabel = ({
  label,
  title,
  fullWidth = false,
  onClick,
  disabled = false,
}) => {
  return (
    <button
      className={styles.buttonLabel}
      aria-label="Buat Catatan"
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
