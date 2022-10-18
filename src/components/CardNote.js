import React, { useContext, useState } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import {
  ArrowNarrowLeftIcon,
  ArrowNarrowRightIcon,
  TrashIcon,
} from '@heroicons/react/solid';

import useLang from '../hooks/useLang';

import { NotesContext } from '../context/NotesContext';

import { archiveNote, deleteNote, unarchiveNote } from '../fetcher/noteFetcher';

import { AttributeTime, showDate } from '../utils/formattedTime';

import MarkText from '../elements/MarkText';
import InfoDate from '../elements/InfoDate';

import styles from './CardNote.module.css';
import ButtonLinkIcon from '../elements/ButtonLinkIcon';

import { locale } from './CardNote.locale';

function CardNote({ note }) {
  const [loading, setLoading] = useState(false);
  const [loadingText, setLoadingText] = useState(null);

  const { dispatch } = useContext(NotesContext);
  const { keywordTitle } = useContext(NotesContext);

  const { lang } = useLang();

  const regExpKeyword = new RegExp(keywordTitle, 'gi');

  // Handle Delete Note
  const onClickButtonDelete = async (id) => {
    if (window.confirm(locale[lang].confirmDelete)) {
      // Delete Note
      setLoadingText('delete');
      setLoading(true);

      const resJson = await deleteNote(id);

      if (resJson.error === false) {
        dispatch({ type: 'DELETE_NOTE', payload: id });
      }
      setLoading(false);
    }
  };

  // Handle Move Note
  const onClickButtonMove = async (id, archived) => {
    if (archived) {
      setLoadingText('active');
      setLoading(true);

      const resJson = await unarchiveNote(id);

      if (resJson.error === false) {
        dispatch({ type: 'ACTIVE_NOTE', payload: id });
      }
      setLoading(false);
    } else {
      setLoadingText('archive');
      setLoading(true);

      const resJson = await archiveNote(id);

      if (resJson.error === false) {
        dispatch({ type: 'ARCHIVE_NOTE', payload: id });
      }
      setLoading(false);
    }
  };

  return (
    <article id={note.id} className={styles.articleCard}>
      {loading ? (
        <h2 className={styles.title}>
          <MarkText
            keyword={keywordTitle}
            regExpKeyword={regExpKeyword}
            text={note.title}
          />
        </h2>
      ) : (
        <h2 className={styles.title}>
          <Link className={styles.titleUrl} to={`/catatan/${note.id}`}>
            <MarkText
              keyword={keywordTitle}
              regExpKeyword={regExpKeyword}
              text={note.title}
            />
          </Link>
        </h2>
      )}

      <InfoDate
        humanReadable={showDate(note.createdAt, locale[lang].codeLang)}
        datetime={AttributeTime(note.createdAt)}
      />
      <p className={styles.bodyText}>{note.body}</p>
      {loading ? (
        <div className={styles.action}>
          <p className={styles.loading}>
            {locale[lang].loadingText[loadingText]}
          </p>
        </div>
      ) : (
        <div className={styles.action}>
          {note.archived ? (
            <ButtonLinkIcon
              icon={<ArrowNarrowLeftIcon />}
              onClick={() => onClickButtonMove(note.id, note.archived)}
              label={locale[lang].action.activate}
              color="secondary"
              iconPosition="before"
            />
          ) : (
            <ButtonLinkIcon
              icon={<ArrowNarrowRightIcon />}
              onClick={() => onClickButtonMove(note.id, note.archived)}
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
      )}
    </article>
  );
}

CardNote.propTypes = {
  note: PropTypes.shape({
    id: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    createdAt: PropTypes.string.isRequired,
    body: PropTypes.string.isRequired,
    archived: PropTypes.bool.isRequired,
  }),
};

export default CardNote;
