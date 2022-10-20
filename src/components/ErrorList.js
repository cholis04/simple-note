import { ExclamationCircleIcon } from '@heroicons/react/solid';

import useLang from '../hooks/useLang';

import styles from './ErrorList.module.css';

import { locale } from './ErrorList.locale';

function ErrorList() {
  const { lang } = useLang();

  return (
    <div className={styles.errorBox}>
      <div className={styles.iconBox}>
        <ExclamationCircleIcon className={styles.icon} />
      </div>
      <p className={styles.errorText}>{locale[lang].text}</p>
    </div>
  );
}

export default ErrorList;
