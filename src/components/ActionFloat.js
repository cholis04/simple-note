import React, { useContext } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

import { PlusIcon } from '@heroicons/react/solid';

import { LanguageContext } from '../context/LanguageContext';

import ButtonIcon from '../elements/ButtonIcon';

import styles from './ActionFloat.module.css';

import { locale } from './ActionFloat.locale';

function ActionFloat() {
  const { lang } = useContext(LanguageContext);
  const navigate = useNavigate();
  const location = useLocation();

  // Navigate Rounte on Button Click
  const onAddButtonClick = () => {
    navigate('/catatan/baru', {
      state: {
        from: location.pathname,
      },
    });
  };

  return (
    <div className={styles.actionFloat}>
      <ButtonIcon
        icon={<PlusIcon />}
        label={locale[lang].links.new}
        onClick={onAddButtonClick}
      />
    </div>
  );
}

export default ActionFloat;
