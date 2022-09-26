import { useContext, useEffect } from 'react';
import { TrashIcon } from '@heroicons/react/solid';
import { useParams } from 'react-router-dom';

import { NotesContext } from '../context/NotesContext';

import Header from '../blocks/Header';
import Footer from '../blocks/Footer';
import NotFound from '../blocks/NotFound';

import styles from '../styles/pages/Note.module.css';

function Note() {
  const { id } = useParams();
  const { getNoteById, moveNote, deleteNote } = useContext(NotesContext);

  const note = getNoteById(Number(id));

  // Title Document
  useEffect(() => {
    if (note !== undefined) document.title = `Catatan - ${note?.title}`;
  });

  // Render NofFound when note is undefinded
  if (note === undefined) {
    return <NotFound />;
  }

  // Render Component
  return (
    <>
      <Header />
      <main className={styles.main}>
        <section className={styles.main__detail}>
          <div className={styles.main__detailWrapper}>
            <h1>{note.title}</h1>
            <div className={styles.action}>
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
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}

export default Note;
