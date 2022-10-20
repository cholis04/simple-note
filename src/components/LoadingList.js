import React from 'react';

import styles from './LoadingList.module.css';

const CardSkeleoton = () => {
  return (
    <div className={styles.cardSkeleton}>
      <div className={styles.row}>
        <div className={styles.skeleton}></div>
        <div className={`${styles.skeleton} ${styles.skeleton__half}`}></div>
      </div>
      <div className={styles.row}>
        <div className={styles.skeleton}></div>
        <div className={styles.skeleton}></div>
        <div
          className={`${styles.skeleton} ${styles.skeleton__threeQuarter}`}
        ></div>
      </div>
      <div className={`${styles.row} ${styles.row__twoColumn}`}>
        <div className={styles.skeleton}></div>
        <div className={styles.skeleton}></div>
      </div>
    </div>
  );
};

const LoadingList = () => {
  return (
    <div className={styles.loadingBox}>
      <CardSkeleoton />
      <CardSkeleoton />
      <CardSkeleoton />
    </div>
  );
};

export default LoadingList;
