import PropTypes from 'prop-types';

import styles from './InputText.module.css';

const InputText = ({ id, placeholder, value, onChange }) => {
  return (
    <input
      type="text"
      id={id}
      className={styles.titleTextInput}
      placeholder={placeholder}
      autoComplete="off"
      value={value}
      onChange={onChange}
    />
  );
};

InputText.propTypes = {
  id: PropTypes.string.isRequired,
  placeholder: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};

export default InputText;
