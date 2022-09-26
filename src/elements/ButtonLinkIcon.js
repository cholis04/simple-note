import React from 'react';
import PropTypes from 'prop-types';

import styles from './ButtonLinkIcon.module.css';

const ButtonLinkIcon = ({
  label,
  color,
  icon,
  onClick,
  iconPosition = 'after',
}) => {
  const resolveColor = (cl) => {
    if (cl === 'error') return styles.error;
    if (cl === 'secondary') return styles.secondary;
    return styles.primary;
  };

  return (
    <button
      onClick={onClick}
      className={`${styles.button} ${resolveColor(color)}`}
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
  icon: PropTypes.element.isRequired,
  onClick: PropTypes.func,
  iconPosition: PropTypes.oneOf(['after', 'before']),
};

export default ButtonLinkIcon;
