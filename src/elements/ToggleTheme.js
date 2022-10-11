import { useContext } from 'react';
import { MoonIcon, SunIcon } from '@heroicons/react/solid';

import { ModeContext } from '../context/ModeContext';

import styles from './ToggleTheme.module.css';

const ToggleTheme = () => {
  const { mode, toggleMode } = useContext(ModeContext);

  return (
    <button className={styles.toggleTheme} onClick={toggleMode}>
      {mode === 'dark' ? (
        <>
          <MoonIcon /> <span className={styles.label}>Gelap</span>
        </>
      ) : (
        <>
          <SunIcon /> <span className={styles.label}>Terang</span>
        </>
      )}
    </button>
  );
};

export default ToggleTheme;
