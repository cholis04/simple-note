import React from 'react';
import PropTypes from 'prop-types';

import styles from './ButtonIcon.module.css';

const ButtonIcon = ({ label, onClick, icon }) => {
  return (
    <button aria-label={label} className={styles.buttonIcon} onClick={onClick}>
      {icon}
    </button>
  );
};

ButtonIcon.propTypes = {
  label: PropTypes.string.isRequired,
  icon: PropTypes.element.isRequired,
  onClick: PropTypes.func,
};

export default ButtonIcon;
