import React from 'react';
import PropTypes from 'prop-types';

import styles from './ButtonIcon.module.css';

const ButtonIcon = ({ label, children }) => {
  return (
    <button aria-label={label} className={styles.buttonIcon}>
      {children}
    </button>
  );
};

ButtonIcon.propTypes = {
  label: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
};

export default ButtonIcon;
