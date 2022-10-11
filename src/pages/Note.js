import { useContext, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import {
  ArrowNarrowLeftIcon,
  ArrowNarrowRightIcon,
  TrashIcon,
} from '@heroicons/react/solid';

import { NotesContext } from '../context/NotesContext';

import MemberLayout from '../layouts/MemberLayout';

import NotFound from '../components/NotFound';

import InfoDate from '../elements/InfoDate';
import ButtonLinkIcon from '../elements/ButtonLinkIcon';

import { countWords } from '../utils/countWord';

import styles from '../styles/pages/Note.module.css';

import { locale } from '../locale/Note.locale';

function Note() {
  const lang = 'en';
  const { id } = useParams();
  const navigate = useNavigate();
  const { getNoteById, moveNote, deleteNote } = useContext(NotesContext);

  const note = getNoteById(Number(id));

  // Title Document
  useEffect(() => {
    if (note !== undefined)
      document.title = `${locale[lang].pageTitle} ${note?.title}`;
  }, [note]);

  // Handle Delete Note
  const onClickButtonDelete = () => {
    if (window.confirm(locale[lang].confirmDelete)) {
      if (note.archived) {
        deleteNote(note.id);
        navigate('/arsip');
      } else {
        deleteNote(note.id);
        navigate('/');
      }
    }
  };

  // Handle Move Note
  const onClickButtonMove = () => {
    moveNote(note.id);
    if (note.archived) {
      window.alert(locale[lang].notifActive);
    } else {
      window.alert(locale[lang].notifArchived);
    }
  };

  // Render NofFound when note is undefined
  if (note === undefined) {
    return <NotFound />;
  }

  // Render Component
  return (
    <MemberLayout>
      {/* Note Detail */}
      <section className={styles.detail}>
        <div className={styles.detail__wrapper}>
          <div className={styles.detail__info}>
            <InfoDate time={note.createdAt} />
            {note.archived ? (
              <ButtonLinkIcon
                icon={<ArrowNarrowLeftIcon />}
                onClick={onClickButtonMove}
                label={locale[lang].links.activate}
                color="secondary"
                iconPosition="before"
              />
            ) : (
              <ButtonLinkIcon
                icon={<ArrowNarrowRightIcon />}
                onClick={onClickButtonMove}
                label={locale[lang].links.archive}
                color="secondary"
              />
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
            <ButtonLinkIcon
              icon={<TrashIcon />}
              onClick={onClickButtonDelete}
              label={locale[lang].links.delete}
              color="error"
              iconPosition="before"
            />
          </div>
        </div>
      </section>
    </MemberLayout>
  );
}

export default Note;
