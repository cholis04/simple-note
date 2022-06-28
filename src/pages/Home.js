import { useContext, useEffect } from 'react';

import { NotesContext } from '../context/NotesContext';

import TabList from '../containers/TabList';
import ModalForm from '../containers/ModalForm';
import SearchForm from '../containers/SearchForm';

import Navbar from '../components/Navbar';
import TabPanel from '../components/TabPanel';

function Home() {
  const { activeNotes, archiveNotes } = useContext(NotesContext);

  // Title Document
  useEffect(() => {
    document.title = 'Simple Notes';
  });

  // Render Component
  return (
    <>
      {/* Navbar */}
      <Navbar />

      {/* Main Content */}
      <main>
        <div className="wrapper">
          {/* Filter  */}
          <div className="heading-main">
            <SearchForm />
            <TabList />
          </div>

          {/* Notes */}
          <section id="daftar-catatan" aria-label="Daftar Catatan">
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
          </section>
        </div>
      </main>

      {/* Modal Dialog Form */}
      <ModalForm />
    </>
  );
}

export default Home;
