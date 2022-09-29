import PropTypes from 'prop-types';

import styles from './InputLabel.module.css';

const InputLabel = ({ id, idfor, text }) => {
  return (
    <label id={id} className={styles.inputLabel} htmlFor={idfor}>
      {text} :{' '}
    </label>
  );
};

InputLabel.propTypes = {
  idfor: PropTypes.string,
  text: PropTypes.string,
};

export default InputLabel;
