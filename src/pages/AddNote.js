import { useEffect } from 'react';

import Header from '../blocks/Header';
import Footer from '../blocks/Footer';

import styles from '../styles/pages/AddNote.module.css';

function AddNote() {
  // Title Document
  useEffect(() => {
    document.title = 'Buat Catatan';
  });

  // Render Component
  return (
    <>
      <Header />
      <main className={styles.main}>
        <h1>Tambah Catatan</h1>
      </main>
      <Footer />
    </>
  );
}

export default AddNote;
