import { TranslateIcon } from '@heroicons/react/solid';

import styles from './ToggleLocale.module.css';

const ToggleLocale = () => {
  return (
    <button className={styles.toggleLocale}>
      <TranslateIcon /> <span>ID / EN</span>
    </button>
  );
};

export default ToggleLocale;
