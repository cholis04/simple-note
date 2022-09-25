import { useEffect, useContext } from 'react';

import { NotesContext } from '../context/NotesContext';

import Header from '../blocks/Header';
import Footer from '../blocks/Footer';

import SearchBar from '../components/SearchBar';
import EmptyList from '../components/EmptyList';
import CardNote from '../components/CardNote';

import styles from '../styles/pages/Home.module.css';

function Home() {
  const { activeNotes } = useContext(NotesContext);

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
              Daftar Catatan ({activeNotes.length})
            </h1>
            <SearchBar />
          </div>
        </div>

        {/* Note List */}
        <section
          className={styles.main__notelist}
          id="daftar-catatan"
          aria-label="Daftar Catatan"
        >
          <div className={styles.main__notelistWrapper}>
            {activeNotes.length <= 0 && <EmptyList />}
            {activeNotes.length >= 1 && (
              <div className={styles.main__noteBox}>
                {activeNotes.map((note) => (
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

export default Home;
