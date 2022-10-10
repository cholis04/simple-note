import { MoonIcon } from '@heroicons/react/solid';

import styles from './ToggleTheme.module.css';

const ToggleTheme = () => {
  return (
    <button className={styles.toggleTheme}>
      <MoonIcon /> <span className={styles.label}>Gelap</span>
    </button>
  );
};

export default ToggleTheme;
