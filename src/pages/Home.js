import { useEffect } from 'react';

// import { NotesContext } from '../context/NotesContext';

import Header from '../blocks/Header';
import Footer from '../blocks/Footer';
import SearchBar from '../components/SearchBar';
import EmptyList from '../components/EmptyList';

import styles from '../styles/pages/Home.module.css';

function Home() {
  // const { activeNotes, archiveNotes } = useContext(NotesContext);

  // Title Document
  useEffect(() => {
    document.title = 'Simple Notes';
  });

  // Render Component
  return (
    <>
      <Header />
      <main className={styles.main}>
        {/* Main Heading */}
        <div className={styles.main__heading}>
          <div className={styles.main__headingWrapper}>
            <h1 className={styles.main__title}>Daftar Catatan (0)</h1>
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
            <EmptyList />
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}

export default Home;
