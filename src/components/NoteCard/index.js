import { ClockIcon } from '@heroicons/react/solid';
import { useContext } from 'react';

import { NotesContext } from '../../context/NotesContext';

import { showFormattedDate } from '../../utils/showFormattedDate';

import MarkText from '../MarkText';

import styles from './index.module.css';

function NoteCard({ note }) {
  const { moveNote, deleteNote } = useContext(NotesContext);
  const { keyword } = useContext(NotesContext);

  const regExpKeyword = new RegExp(keyword, 'gi');

  return (
    <article id={note.id} className={styles.articleCard}>
      <h2 className={styles.title}>
        <MarkText
          keyword={keyword}
          regExpKeyword={regExpKeyword}
          text={note.title}
        />
      </h2>
      <p className={styles.dateInfo}>
        <ClockIcon className={styles.iconTime} />{' '}
        <time dateTime={new Date(note.createdAt).toLocaleString()}>
          {showFormattedDate(note.createdAt)}
        </time>
      </p>
      <hr className={styles.lineBreak} />
      <p className={styles.bodyText}>
        <MarkText
          keyword={keyword}
          regExpKeyword={regExpKeyword}
          text={note.body}
        />
      </p>
      <hr className={styles.lineBreak} />
      <div className={styles.action}>
        <button onClick={() => moveNote(note.id)}>
          {note.archived ? '← Aktifkan' : 'Arsipkan →'}
        </button>

        <button onClick={() => deleteNote(note.id)}>
          <span>[Icon] </span> Hapus
        </button>
      </div>
    </article>
  );
}

export default NoteCard;
