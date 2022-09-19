import React from 'react';

import NoteCard from '../NoteCard';

import styles from './index.module.css';

const breakpointColumnsObj = {
  default: 3,
  1024: 2,
  640: 1,
};

function BoxNoteCard({ notes }) {
  return (
    <div
      breakpointCols={breakpointColumnsObj}
      className={styles.masonryGrid}
      columnClassName={styles.masonryColumn}
    >
      {notes.map((note) => {
        return <NoteCard key={note.id} note={note} />;
      })}
    </div>
  );
}

export default React.memo(BoxNoteCard);
