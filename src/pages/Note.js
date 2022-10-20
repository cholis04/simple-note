import { useContext, useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import {
  ArrowNarrowLeftIcon,
  ArrowNarrowRightIcon,
  TrashIcon,
} from '@heroicons/react/solid';

import { NotesContext } from '../context/NotesContext';

import useLang from '../hooks/useLang';
import useNote from '../hooks/useNote';

import { archiveNote, deleteNote, unarchiveNote } from '../fetcher/noteFetcher';

import MemberLayout from '../layouts/MemberLayout';

import NotFound from '../components/NotFound';
import Loading from '../components/Loading';

import InfoDate from '../elements/InfoDate';
import ButtonLinkIcon from '../elements/ButtonLinkIcon';

import { countWords } from '../utils/countWord';
import { AttributeTime, showDate } from '../utils/formattedTime';

import styles from '../styles/pages/Note.module.css';

import { locale } from '../locale/Note.locale';

function Note() {
  const [actionLoading, setActionLoading] = useState(false);
  const [loadingText, setLodingText] = useState(null);

  const { dispatch } = useContext(NotesContext);

  const { id } = useParams();
  const navigate = useNavigate();

  const { lang } = useLang();
  const { note, loading, error } = useNote(id);

  // Handle Delete Note
  const onClickButtonDelete = async (id, archived) => {
    if (window.confirm(locale[lang].confirmDelete)) {
      setLodingText('delete');
      setActionLoading(true);

      const resJson = await deleteNote(id);

      if (resJson.error) {
        setLodingText(null);
        setActionLoading(false);

        window.alert('Action Error');
      } else {
        dispatch({
          type: 'DELETE_NOTE',
          payload: id,
        });
      }

      if (archived) {
        navigate('/arsip');
      } else {
        navigate('/');
      }
    }
  };

  // Handle Move Note
  const onClickButtonMove = async (id, archived) => {
    setLodingText(archived ? 'active' : 'archive');
    setActionLoading(true);

    const moveFetcher = archived ? unarchiveNote : archiveNote;
    const resJson = await moveFetcher(id);

    if (resJson.error) {
      setLodingText(null);
      setActionLoading(false);

      window.alert('Action Error');
    } else {
      if (archived) {
        dispatch({
          type: 'ACTIVE_NOTE',
          payload: id,
        });
        window.alert(locale[lang].notifActive);
      } else {
        dispatch({
          type: 'ARCHIVE_NOTE',
          payload: id,
        });
        window.alert(locale[lang].notifArchived);
      }

      setLodingText(null);
      setActionLoading(false);
    }
  };

  // Title Document
  useEffect(() => {
    if (error === false)
      document.title = `${locale[lang].pageTitle} ${note?.title}`;
  }, [note, error, lang]);

  // Render Loading when data is fetching
  if (loading) return <Loading text="note" />;

  // Render NofFound when note is undefined || Error
  if (error) return <NotFound />;

  // Render Component
  return (
    <MemberLayout>
      {/* Note Detail */}
      <section className={styles.detail}>
        <div className={styles.detail__wrapper}>
          <div className={styles.detail__info}>
            <InfoDate
              humanReadable={showDate(note.createdAt, locale[lang].codeLang)}
              datetime={AttributeTime(note.createdAt)}
            />
            {loadingText === 'active' || loadingText === 'archive' ? (
              <span className={styles.detail__actionLoading}>
                {locale[lang].loadingText[loadingText]}
              </span>
            ) : (
              <>
                {note.archived ? (
                  <ButtonLinkIcon
                    icon={<ArrowNarrowLeftIcon />}
                    onClick={() => onClickButtonMove(note.id, note.archived)}
                    label={locale[lang].links.activate}
                    color="secondary"
                    iconPosition="before"
                    disabled={actionLoading}
                  />
                ) : (
                  <ButtonLinkIcon
                    icon={<ArrowNarrowRightIcon />}
                    onClick={() => onClickButtonMove(note.id, note.archived)}
                    label={locale[lang].links.archive}
                    color="secondary"
                    disabled={actionLoading}
                  />
                )}
              </>
            )}
          </div>
          <h1 className={styles.detail__titleNote}>{note.title}</h1>
          <p className={styles.detail__bodyNote}>{note.body}</p>
          <div className={styles.detail__additionalInfo}>
            <p className={styles.detail__infoWordCount}>
              {locale[lang].numberOfWords} :{' '}
              <strong>{countWords(note.body)}</strong>
            </p>
          </div>
          <div className={styles.detail__action}>
            {loadingText === 'delete' ? (
              <span>{locale[lang].loadingText[loadingText]}</span>
            ) : (
              <ButtonLinkIcon
                icon={<TrashIcon />}
                onClick={() => onClickButtonDelete(note.id, note.archived)}
                label={locale[lang].links.delete}
                color="error"
                iconPosition="before"
                disabled={actionLoading}
              />
            )}
          </div>
        </div>
      </section>
    </MemberLayout>
  );
}

export default Note;
