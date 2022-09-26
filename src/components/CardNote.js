import { TrashIcon } from '@heroicons/react/solid';
import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

import { NotesContext } from '../context/NotesContext';

import MarkText from '../elements/MarkText';
import InfoDate from '../elements/InfoDate';

import styles from './CardNote.module.css';

function CardNote({ note }) {
  const { moveNote, deleteNote } = useContext(NotesContext);
  const { keywordTitle } = useContext(NotesContext);

  const regExpKeyword = new RegExp(keywordTitle, 'gi');

  return (
    <article id={note.id} className={styles.articleCard}>
      <h2 className={styles.title}>
        <Link className={styles.titleUrl} to={`/catatan/${note.id}`}>
          <MarkText
            keyword={keywordTitle}
            regExpKeyword={regExpKeyword}
            text={note.title}
          />
        </Link>
      </h2>
      <InfoDate time={note.createdAt} />
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
