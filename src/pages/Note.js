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
import ButtonLinkIcon from '../elements/ButtonLinkIcon';

import { countWords } from '../utils/countWord';

import styles from '../styles/pages/Note.module.css';

function Note() {
  const { id } = useParams();
  const navigate = useNavigate();
  const { getNoteById, moveNote, deleteNote } = useContext(NotesContext);

  const note = getNoteById(Number(id));

  // Title Document
  useEffect(() => {
    if (note !== undefined) document.title = `Catatan - ${note?.title}`;
  }, [note]);

  // Handle Delete Note
  const onClickButtonDelete = () => {
    if (window.confirm('Hapus catatan ?')) {
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
      window.alert('Catatan kembali diaktifkan!');
    } else {
      window.alert('Catatan diarsipkan!');
    }
  };

  // Render NofFound when note is undefined
  if (note === undefined) {
    return <NotFound />;
  }

  // Render Component
  return (
    <>
      <Header />
      <main>
        {/* Note Detail */}
        <section className={styles.detail}>
          <div className={styles.detail__wrapper}>
            <div className={styles.detail__info}>
              <InfoDate time={note.createdAt} />
              {note.archived ? (
                <ButtonLinkIcon
                  icon={<ArrowNarrowLeftIcon />}
                  onClick={onClickButtonMove}
                  label="Aktifkan"
                  color="secondary"
                  iconPosition="before"
                />
              ) : (
                <ButtonLinkIcon
                  icon={<ArrowNarrowRightIcon />}
                  onClick={onClickButtonMove}
                  label="Arsipkan"
                  color="secondary"
                />
              )}
            </div>
            <h1 className={styles.titleNote}>{note.title}</h1>
            <p className={styles.bodyNote}>{note.body}</p>
            <div className={styles.detail__additionalInfo}>
              <p className={styles.detail__infoWordCount}>
                Jumlah Kata : <strong>{countWords(note.body)}</strong>
              </p>
            </div>
            <div className={styles.delete__wrapper}>
              <ButtonLinkIcon
                icon={<TrashIcon />}
                onClick={onClickButtonDelete}
                label="Hapus"
                color="error"
                iconPosition="before"
              />
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}

export default Note;
