import { useEffect } from 'react';

// import { NotesContext } from '../context/NotesContext';

import Header from '../blocks/Header';
import SearchBar from '../components/SearchBar';
import Footer from '../blocks/Footer';

import styles from '../styles/pages/Home.module.css';
import EmptyList from '../components/EmptyList';

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
            <h1>Daftar Catatan (0)</h1>
            <SearchBar />
          </div>
        </div>

        {/* Note List */}
        <section
          className={styles.main__notelist}
          id="daftar-catatan"
          aria-label="Daftar Catatan"
        >
          <EmptyList />
        </section>
      </main>
      <Footer />
    </>
  );
}

export default Home;
