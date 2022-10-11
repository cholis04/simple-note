import { useContext } from 'react';
import { MoonIcon, SunIcon } from '@heroicons/react/solid';

import { ModeContext } from '../context/ModeContext';

import styles from './ToggleMode.module.css';

const ToggleMode = () => {
  const { mode, toggleMode } = useContext(ModeContext);

  return (
    <button
      className={styles.toggleMode}
      onClick={toggleMode}
      title={mode === 'dark' ? 'Ubah ke mode terang' : 'Ubah ke mode gelap'}
    >
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

export default ToggleMode;
