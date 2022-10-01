import { useEffect, useRef } from 'react';
import PropTypes from 'prop-types';

import styles from './InputTextArea.module.css';

const InputTextArea = ({ id, placeholder, value, onChange, autoFocus }) => {
  const ref = useRef(null);

  useEffect(() => {
    if (autoFocus) ref.current.focus();
  }, [autoFocus]);

  return (
    <textarea
      id={id}
      className={styles.inputNote}
      value={value}
      onChange={onChange}
      placeholder={placeholder}
      ref={ref}
    ></textarea>
  );
};

InputTextArea.propTypes = {
  id: PropTypes.string.isRequired,
  placeholder: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  autoFocus: PropTypes.bool,
};

export default InputTextArea;
