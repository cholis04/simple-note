import { useContext, useEffect } from 'react';

import { NotesContext } from '../context/NotesContext';

import Header from '../blocks/Header';
import SearchBar from '../components/SearchBar';
import Footer from '../blocks/Footer';

import styles from '../styles/pages/home.module.css';

function Home() {
  const { activeNotes, archiveNotes } = useContext(NotesContext);

  // Title Document
  useEffect(() => {
    document.title = 'Simple Notes';
  });

  // Render Component
  return (
    <>
      {/* Navbar ============###======###=====###====###=== */}
      <Header />

      {/* Main Content ============###======###=====###====###=== */}
      <main className={styles.main}>
        {/* Main Heading */}
        <div className={styles.main__heading}>
          <div className={styles.main__headingWrapper}>
            <SearchBar />
          </div>
        </div>
        {/* Main Heading */}

        {/* Note List */}
        <section
          className={styles.main__notelist}
          id="daftar-catatan"
          aria-label="Daftar Catatan"
        ></section>
        {/* Note List */}
      </main>

      {/* Footer ============###======###=====###====###=== */}
      <Footer />
    </>
  );
}

export default Home;
