import { ClockIcon, TrashIcon } from '@heroicons/react/solid';
import React, { useContext } from 'react';
import PropTypes from 'prop-types';

import { NotesContext } from '../context/NotesContext';

import { formattedAttributeTime } from '../utils/formattedAttributeTime';
import { showFormattedDate } from '../utils/showFormattedDate';

import MarkText from '../elements/MarkText';

import styles from './CardNote.module.css';

function CardNote({ note }) {
  const { moveNote, deleteNote } = useContext(NotesContext);
  const { keywordTitle } = useContext(NotesContext);

  const regExpKeyword = new RegExp(keywordTitle, 'gi');

  return (
    <article id={note.id} className={styles.articleCard}>
      <h2 className={styles.title}>
        <a className={styles.titleUrl} href={`/catatan/${note.id}`}>
          <MarkText
            keyword={keywordTitle}
            regExpKeyword={regExpKeyword}
            text={note.title}
          />
        </a>
      </h2>
      <p className={styles.dateInfo}>
        <ClockIcon className={styles.iconTime} />{' '}
        <time dateTime={formattedAttributeTime(note.createdAt)}>
          {showFormattedDate(note.createdAt)}
        </time>
      </p>
      <p className={styles.bodyText}>{note.body}</p>
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

CardNote.propTypes = {
  note: PropTypes.shape({
    id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    createdAt: PropTypes.string.isRequired,
    body: PropTypes.string.isRequired,
    archived: PropTypes.bool.isRequired,
  }),
};

export default CardNote;
