import React from 'react';
import PropTypes from 'prop-types';
import { ClockIcon } from '@heroicons/react/solid';

import { formattedAttributeTime } from '../utils/formattedAttributeTime';

import styles from './InfoDate.module.css';

import { locale } from './InfoDate.locale';

const InfoDate = ({ time }) => {
  const lang = 'en';

  const showFormattedDate = (date) => {
    const options = {
      weekday: 'long',
      year: 'numeric',
      month: 'long',
      day: 'numeric',
    };
    return new Date(date).toLocaleDateString(locale[lang].codeLang, options);
  };

  return (
    <div className={styles.infoDate}>
      <ClockIcon className={styles.iconTime} />{' '}
      <time dateTime={formattedAttributeTime(time)}>
        {showFormattedDate(time)}
      </time>
    </div>
  );
};

InfoDate.propTypes = {
  time: PropTypes.string.isRequired,
};

export default InfoDate;
