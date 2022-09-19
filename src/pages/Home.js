import { useContext, useEffect } from 'react';

import { NotesContext } from '../context/NotesContext';

import TabList from '../containers/TabList';
import ModalForm from '../containers/ModalForm';

import Navbar from '../components/Navbar';
import SearchForm from '../components/SearchForm';
import TabPanel from '../components/TabPanel';
import Footer from '../components/Footer';

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
      <Navbar />

      {/* Main Content ============###======###=====###====###=== */}
      <main className={styles.main}>
        {/* Main Heading */}
        <div className={styles.main__heading}>
          <div className={styles.main__headingWrapper}>
            <SearchForm />
            <TabList />
          </div>
        </div>
        {/* Main Heading */}

        {/* Note List */}
        <section
          className={styles.main__notelist}
          id="daftar-catatan"
          aria-label="Daftar Catatan"
        >
          <div className={styles.main__notelistWrapper}>
            <TabPanel
              panelId={`panel-aktif`}
              panelName={`active`}
              panelLabel={`tab-catatan-aktif`}
              notes={activeNotes}
            />
            <TabPanel
              panelId={`panel-arsip`}
              panelName={`archive`}
              panelLabel={`tab-catatan-arsip`}
              notes={archiveNotes}
            />
          </div>
        </section>
        {/* Note List */}
      </main>

      {/* Footer ============###======###=====###====###=== */}
      <Footer />

      {/* Modal Dialog Form ============###======###=====###====###=== */}
      <ModalForm />
    </>
  );
}

export default Home;
