import { useContext, useEffect } from 'react';
import { ClockIcon, TrashIcon } from '@heroicons/react/solid';
import { useParams } from 'react-router-dom';

import { NotesContext } from '../context/NotesContext';

import Header from '../blocks/Header';
import Footer from '../blocks/Footer';
import NotFound from '../blocks/NotFound';

import styles from '../styles/pages/Note.module.css';
import { formattedAttributeTime } from '../utils/formattedAttributeTime';
import { showFormattedDate } from '../utils/showFormattedDate';

function Note() {
  const { id } = useParams();
  const { getNoteById, moveNote, deleteNote } = useContext(NotesContext);

  const note = getNoteById(Number(id));

  // Title Document
  useEffect(() => {
    if (note !== undefined) document.title = `Catatan - ${note?.title}`;
  });

  const countWords = (str) => {
    const arr = str.split(' ');
    return arr.filter((word) => word !== '').length;
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
            <button
              onClick={() => moveNote(note.id)}
              className={styles.btnMove}
            >
              {note.archived ? '← Aktifkan' : 'Arsipkan →'}
            </button>

            <button
              onClick={() => deleteNote(note.id)}
              className={styles.btnDelete}
            >
              <TrashIcon className={styles.iconBtn} /> Hapus
            </button>
          </div>
          <div className={styles.detail__info}>
            <div className={styles.detail__infoDate}>
              <ClockIcon className={styles.iconTime} />{' '}
              <time dateTime={formattedAttributeTime(note.createdAt)}>
                {showFormattedDate(note.createdAt)}
              </time>
            </div>
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
