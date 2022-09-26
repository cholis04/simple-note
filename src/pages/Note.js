import { useContext, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import {
  ArrowNarrowLeftIcon,
  ArrowNarrowRightIcon,
  TrashIcon,
} from '@heroicons/react/solid';

import { NotesContext } from '../context/NotesContext';

import Header from '../blocks/Header';
import Footer from '../blocks/Footer';
import NotFound from '../blocks/NotFound';

import InfoDate from '../elements/InfoDate';

import { countWords } from '../utils/countWord';

import styles from '../styles/pages/Note.module.css';
import ButtonLinkIcon from '../elements/ButtonLinkIcon';

function Note() {
  const { id } = useParams();
  const navigate = useNavigate();
  const { getNoteById, moveNote, deleteNote } = useContext(NotesContext);

  const note = getNoteById(Number(id));

  // Title Document
  useEffect(() => {
    if (note !== undefined) document.title = `Catatan - ${note?.title}`;
  });

  // Handle Delete Note
  const onClickButtonDelete = (id) => {
    if (window.confirm('Hapus catatan ?')) {
      if (note.archived) {
        deleteNote(id);
        navigate('/arsip');
      } else {
        deleteNote(id);
        navigate('/');
      }
    }
  };

  // Render NofFound when note is undefinded
  if (note === undefined) {
    return <NotFound />;
  }

  // Render Component
  return (
    <>
      <Header />
      <main className={styles.main}>
        {/* Note Detail */}
        <section className={styles.detail}>
          <div className={styles.detail__action}>
            {note.archived ? (
              <ButtonLinkIcon
                icon={<ArrowNarrowLeftIcon />}
                onClick={() => moveNote(note.id)}
                label="Aktifkan"
                color="secondary"
                iconPosition="before"
              />
            ) : (
              <ButtonLinkIcon
                icon={<ArrowNarrowRightIcon />}
                onClick={() => moveNote(note.id)}
                label="Arsipkan"
                color="secondary"
              />
            )}
            <ButtonLinkIcon
              icon={<TrashIcon />}
              onClick={() => onClickButtonDelete(note.id)}
              label="Hapus"
              color="error"
              iconPosition="before"
            />
          </div>
          <div className={styles.detail__info}>
            <InfoDate time={note.createdAt} />
            <p className={styles.detail__status}>
              Status :{' '}
              <span className={styles.detail__statusLabel}>
                {note.archived ? 'Arsip' : 'Aktif'}
              </span>
            </p>
          </div>
          <h1 className={styles.titleNote}>{note.title}</h1>
          <p className={styles.bodyNote}>{note.body}</p>
          <div className={styles.detail__info}>
            <p className={styles.detail__infoWordCount}>
              Jumlah Kata : <strong>{countWords(note.body)}</strong>
            </p>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}

export default Note;
