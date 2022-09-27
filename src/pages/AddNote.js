import { useEffect } from 'react';

import Header from '../blocks/Header';
import Footer from '../blocks/Footer';

import CharLeft from '../elements/CharLeft';
import InputLabel from '../elements/InputLabel';
import InvalidMessage from '../elements/InvalidMessage';
import ButtonLabel from '../elements/ButtonLabel';

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
        <section className={styles.note}>
          <div className={styles.note__wrapper}>
            <h1 className={styles.note__title}>Tambah Catatan</h1>
            <form className={styles.note__form}>
              {/* Note Input Group */}
              <div className={styles.noteInputGroup}>
                <div className={styles.headerNoteInputGroup}>
                  <InputLabel idfor="bodyText" text="Isi Catatan" />
                  <CharLeft num={1000} />
                </div>
                <textarea
                  id="bodyText"
                  className={styles.inputNote}
                  placeholder="Tulis Catatanmu disini!"
                  name="bodyText"
                  style={{
                    background:
                      'repeating-linear-gradient(white, white 25px,#9198e5 26px, #9198e5 27px)',
                    overflow: 'scroll-y',
                    minHeight: '80px',
                    width: '100%',
                    resize: 'none',
                  }}
                ></textarea>
                <InvalidMessage errorText={`Pesan Error disini!`} />
              </div>

              {/* Title Input Group */}
              <div className={styles.titleInputGroup}>
                <div className={styles.headerTitleInputGroup}>
                  <InputLabel idfor="title" text="Judul" />
                  <CharLeft num={50} />
                </div>
                <input
                  type="text"
                  placeholder="Apa judul yang ingin ditulis?"
                  id="title"
                  name="title"
                  className={styles.titleTextInput}
                  autoComplete="off"
                />
                <InvalidMessage errorText={`Pesan Error disini!`} />
              </div>

              {/* Action Button */}
              <div className={styles.buttonWrapper}>
                <ButtonLabel
                  label="Tambahkan"
                  fullWidth={true}
                  disabled={true}
                />
              </div>
            </form>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}

export default AddNote;
