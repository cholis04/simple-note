import PropTypes from 'prop-types';
import { ClockIcon } from '@heroicons/react/solid';

import styles from './InfoDate.module.css';

const InfoDate = ({ humanReadable, datetime }) => {
  return (
    <div className={styles.infoDate}>
      <ClockIcon className={styles.iconTime} />{' '}
      <time dateTime={datetime}>{humanReadable}</time>
    </div>
  );
};

InfoDate.propTypes = {
  humanReadable: PropTypes.string.isRequired,
  datetime: PropTypes.string.isRequired,
};

export default InfoDate;
