import { ClockIcon, TrashIcon } from '@heroicons/react/solid';
import { useContext } from 'react';

import { NotesContext } from '../../context/NotesContext';

import { formattedAttributeTime } from '../../utils/formattedAttributeTime';
import { showFormattedDate } from '../../utils/showFormattedDate';

import MarkText from '../../elements/MarkText';

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
        <time dateTime={formattedAttributeTime(note.createdAt)}>
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
        <button onClick={() => moveNote(note.id)} className={styles.btnMove}>
          {note.archived ? '← Aktifkan' : 'Arsipkan →'}
        </button>

        <button
          onClick={() => deleteNote(note.id)}
          className={styles.btnDelete}
        >
          <TrashIcon className={styles.iconBtn} /> Hapus
        </button>
      </div>
    </article>
  );
}

export default NoteCard;
