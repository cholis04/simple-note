import React from 'react';

import BoxNoteCard from '../BoxNoteCard';
import Empty from '../Empty';

import styles from './index.module.css';

function TabPanel({ panelId, panelName, panelLabel, notes }) {
  return (
    <div
      id={panelId}
      role="tabpanel"
      tabIndex="0"
      aria-labelledby={panelLabel}
      className={styles.tabpanel}
    >
      {notes.length >= 1 ? <BoxNoteCard notes={notes} /> : <Empty />}
    </div>
  );
}

export default React.memo(TabPanel);
