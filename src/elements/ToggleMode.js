import { useContext } from 'react';
import { MoonIcon, SunIcon } from '@heroicons/react/solid';

import { ModeContext } from '../context/ModeContext';

import styles from './ToggleMode.module.css';

import { locale } from './ToggleMode.locale';

const ToggleMode = () => {
  const lang = 'en';
  const { mode, toggleMode } = useContext(ModeContext);

  return (
    <button
      className={styles.toggleMode}
      onClick={toggleMode}
      title={mode === 'dark' ? locale[lang].lightTitle : locale[lang].darkTitle}
      aria-label={
        mode === 'dark' ? locale[lang].lightTitle : locale[lang].darkTitle
      }
    >
      {mode === 'dark' ? (
        <>
          <MoonIcon />{' '}
          <span className={styles.label}>{locale[lang].darkLabel}</span>
        </>
      ) : (
        <>
          <SunIcon />{' '}
          <span className={styles.label}>{locale[lang].lightLabel}</span>
        </>
      )}
    </button>
  );
};

export default ToggleMode;
