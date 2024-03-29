import PropTypes from 'prop-types';

import styles from './ButtonLinkIcon.module.css';

const ButtonLinkIcon = ({
  label,
  color,
  icon,
  onClick,
  disabled,
  iconPosition = 'after',
}) => {
  const resolveColor = (cl) => {
    if (cl === 'error') return styles.error;
    if (cl === 'secondary') return styles.secondary;
    return styles.primary;
  };

  if (icon === undefined)
    return (
      <button
        onClick={onClick}
        className={`${styles.buttonLinkIcon} ${resolveColor(color)}`}
        disabled={disabled}
      >
        {label}
      </button>
    );

  return (
    <button
      onClick={onClick}
      className={`${styles.buttonLinkIcon} ${resolveColor(color)}`}
      disabled={disabled}
    >
      {iconPosition === 'after' ? (
        <>
          {label} {icon}
        </>
      ) : (
        <>
          {icon} {label}
        </>
      )}
    </button>
  );
};

ButtonLinkIcon.propTypes = {
  label: PropTypes.string.isRequired,
  color: PropTypes.string.isRequired,
  icon: PropTypes.element,
  onClick: PropTypes.func,
  disabled: PropTypes.bool,
  iconPosition: PropTypes.oneOf(['after', 'before']),
};

export default ButtonLinkIcon;
