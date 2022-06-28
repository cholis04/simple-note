import React from 'react';

import NoteCard from '../NoteCard';

function BoxNoteCard({ notes }) {
  return (
    <div className="box-card">
      {notes.map((note) => {
        return <NoteCard key={note.id} note={note} />;
      })}
    </div>
  );
}

export default React.memo(BoxNoteCard);
