import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import {
  ArrowNarrowLeftIcon,
  ArrowNarrowRightIcon,
  TrashIcon,
} from '@heroicons/react/solid';

import useLang from '../hooks/useLang';

import { NotesContext } from '../context/NotesContext';

import { AttributeTime, showDate } from '../utils/formattedTime';

import MarkText from '../elements/MarkText';
import InfoDate from '../elements/InfoDate';

import styles from './CardNote.module.css';
import ButtonLinkIcon from '../elements/ButtonLinkIcon';

import { locale } from './CardNote.locale';

function CardNote({ note }) {
  const { lang } = useLang();
  const { moveNote, deleteNote } = useContext(NotesContext);
  const { keywordTitle } = useContext(NotesContext);

  const regExpKeyword = new RegExp(keywordTitle, 'gi');

  // Handle Delete Note
  const onClickButtonDelete = (id) => {
    if (window.confirm(locale[lang].confirmDelete)) {
      deleteNote(id);
    }
  };

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
      <InfoDate
        humanReadable={showDate(note.createdAt, locale[lang].codeLang)}
        datetime={AttributeTime(note.createdAt)}
      />
      <p className={styles.bodyText}>{note.body}</p>
      <div className={styles.action}>
        {note.archived ? (
          <ButtonLinkIcon
            icon={<ArrowNarrowLeftIcon />}
            onClick={() => moveNote(note.id)}
            label={locale[lang].action.activate}
            color="secondary"
            iconPosition="before"
          />
        ) : (
          <ButtonLinkIcon
            icon={<ArrowNarrowRightIcon />}
            onClick={() => moveNote(note.id)}
            label={locale[lang].action.archive}
            color="secondary"
          />
        )}
        <ButtonLinkIcon
          icon={<TrashIcon />}
          onClick={() => onClickButtonDelete(note.id)}
          label={locale[lang].action.delete}
          color="error"
          iconPosition="before"
        />
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
