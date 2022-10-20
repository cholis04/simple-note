import { MoonIcon, SunIcon } from '@heroicons/react/solid';

import useLang from '../hooks/useLang';
import useMode from '../hooks/useMode';

import styles from './ToggleMode.module.css';

import { locale } from './ToggleMode.locale';

const ToggleMode = () => {
  const { lang } = useLang();
  const { mode, toggleMode } = useMode();

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
