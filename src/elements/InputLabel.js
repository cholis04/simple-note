import PropTypes from 'prop-types';

import styles from './InputLabel.module.css';

const InputLabel = ({ idfor, text }) => {
  return (
    <label className={styles.inputLabel} htmlFor={idfor}>
      {text} :{' '}
    </label>
  );
};

InputLabel.propTypes = {
  idfor: PropTypes.string,
  text: PropTypes.string,
};

export default InputLabel;
