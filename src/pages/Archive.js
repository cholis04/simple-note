import { useEffect, useContext } from 'react';

import { NotesContext } from '../context/NotesContext';

import Header from '../blocks/Header';
import Footer from '../blocks/Footer';

import SearchBar from '../components/SearchBar';
import EmptyList from '../components/EmptyList';
import CardNote from '../components/CardNote';

import styles from '../styles/pages/Archive.module.css';

function Archive() {
  const { archiveNotes } = useContext(NotesContext);

  // Title Document
  useEffect(() => {
    document.title = 'Daftar Catatan';
  });

  // Render Component
  return (
    <>
      <Header />
      <main className={styles.main}>
        {/* Main Heading */}
        <div className={styles.main__heading}>
          <div className={styles.main__headingWrapper}>
            <h1 className={styles.main__title}>
              Daftar Arsip ({archiveNotes.length})
            </h1>
            <SearchBar />
          </div>
        </div>

        {/* Note List */}
        <section
          className={styles.main__notelist}
          id="daftar-arsip"
          aria-label="Daftar Arsip"
        >
          <div className={styles.main__notelistWrapper}>
            {archiveNotes.length <= 0 && <EmptyList />}
            {archiveNotes.length >= 1 && (
              <div className={styles.main__noteBox}>
                {archiveNotes.map((note) => (
                  <CardNote key={note.id} note={note} />
                ))}
              </div>
            )}
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}

export default Archive;
