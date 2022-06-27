import { useEffect, useState } from 'react';

import { getInitialData } from '../data';

import TabList from '../containers/TabList';
import ModalForm from '../containers/ModalForm';
import SearchForm from '../containers/SearchForm';

import Navbar from '../components/Navbar';
import TabPanel from '../components/TabPanel';

function Home() {
  const [notes, setNotes] = useState(getInitialData);

  const [panel, setPanel] = useState('active');
  const [modalIsOpen, setIsOpen] = useState(false);

  const activeNotes = notes.filter((note) => note.archived === false);
  const archiveNotes = notes.filter((note) => note.archived === true);

  const amountOfData = {
    active: activeNotes.length,
    archive: archiveNotes.length,
  };

  // Title Document
  useEffect(() => {
    document.title = 'Simple Notes';
  });

  // Open Modal
  const openModal = () => {
    document.body.style.overflow = 'hidden';
    setIsOpen(true);
  };

  // Close Modal
  const closeModal = () => {
    document.body.style.removeProperty('overflow');
    setIsOpen(false);
  };

  // Delete note by Id
  const deleteNote = (id) => {
    if (window.confirm('Hapus catatan ?')) {
      const deletedNotes = notes.filter((note) => note.id !== id);
      setNotes(deletedNotes);
    }
  };

  // Move Note Archived False or True by ID
  const moveNote = (id) => {
    const filteredNotes = notes.map((note) => {
      if (note.id === id) {
        return {
          ...note,
          archived: !note.archived,
        };
      }

      return note;
    });
    setNotes(filteredNotes);
  };

  // Render Component
  return (
    <>
      {/* Navbar */}
      <Navbar openModal={openModal} />
      {/* End Navbar */}

      {/* Main Content */}
      <main>
        <div className="wrapper">
          {/* Filter  */}
          <div className="heading-main">
            <SearchForm />
            <TabList
              panel={panel}
              setPanel={setPanel}
              amountOfData={amountOfData}
            />
          </div>
          {/* End Filter */}

          {/* Notes */}
          <section id="daftar-catatan" aria-label="Daftar Catatan">
            <TabPanel
              panel={panel}
              panelId={`panel-aktif`}
              panelName={`active`}
              panelLabel={`tab-catatan-aktif`}
              notes={activeNotes}
              moveNote={moveNote}
              deleteNote={deleteNote}
              openModal={openModal}
            />
            <TabPanel
              panel={panel}
              panelId={`panel-arsip`}
              panelName={`archive`}
              panelLabel={`tab-catatan-arsip`}
              notes={archiveNotes}
              moveNote={moveNote}
              deleteNote={deleteNote}
              openModal={openModal}
            />
          </section>
          {/* End Notes */}
        </div>
      </main>
      {/* End Main */}

      {/* Modal Dialog Form */}
      <ModalForm modalIsOpen={modalIsOpen} closeModal={closeModal} />
      {/* End Modal Dialong Form */}
    </>
  );
}

export default Home;
