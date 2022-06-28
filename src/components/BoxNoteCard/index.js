import { useContext } from 'react';

import { NotesContext } from '../../context/NotesContext';

import { showFormattedDate } from '../../utils/showFormattedDate';
import MarkText from '../MarkText';

function BoxNoteCard({ notes, moveNote, deleteNote }) {
  const { keyword } = useContext(NotesContext);

  const regExpKeyword = new RegExp(keyword, 'gi');

  return (
    <div className="box-card">
      {notes.map((note) => {
        return (
          <article key={note.id}>
            <h2>
              <MarkText
                keyword={keyword}
                regExpKeyword={regExpKeyword}
                text={note.title}
              />
            </h2>
            <p className="date-info">
              <span>[Icon]</span>{' '}
              <time dateTime="2015-08-17 20:22">
                {showFormattedDate(note.createdAt)}
              </time>
            </p>
            <hr />
            <p>
              <MarkText
                keyword={keyword}
                regExpKeyword={regExpKeyword}
                text={note.body}
              />
            </p>
            <hr />
            <div className="action">
              <button onClick={() => moveNote(note.id)}>
                {note.archived ? '← Aktifkan' : 'Arsipkan →'}
              </button>

              <button onClick={() => deleteNote(note.id)}>
                <span>[Icon] </span> Hapus
              </button>
            </div>
          </article>
        );
      })}
    </div>
  );
}

export default BoxNoteCard;
