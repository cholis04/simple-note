import PropTypes from 'prop-types';

import styles from './InputText.module.css';

const InputText = ({ id, placeholder, value, onChange, type }) => {
  return (
    <input
      type={type}
      id={id}
      className={styles.inputText}
      placeholder={placeholder}
      autoComplete="off"
      value={value}
      onChange={onChange}
    />
  );
};

InputText.propTypes = {
  id: PropTypes.string.isRequired,
  type: PropTypes.oneOf(['text', 'password']).isRequired,
  placeholder: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};

export default InputText;
