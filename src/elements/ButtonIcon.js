import React from 'react';
import PropTypes from 'prop-types';

import styles from './ButtonIcon.module.css';

const ButtonIcon = ({ label, onClick, children }) => {
  return (
    <button aria-label={label} className={styles.buttonIcon} onClick={onClick}>
      {children}
    </button>
  );
};

ButtonIcon.propTypes = {
  label: PropTypes.string.isRequired,
  onClick: PropTypes.func,
  children: PropTypes.node.isRequired,
};

export default ButtonIcon;
