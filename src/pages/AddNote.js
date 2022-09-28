import { useContext, useEffect, useState, useRef, useCallback } from 'react';
import { useNavigate } from 'react-router-dom';

import { MaxNotes, NotesContext } from '../context/NotesContext';

import Header from '../blocks/Header';
import Footer from '../blocks/Footer';

import CharLeft from '../elements/CharLeft';
import InputLabel from '../elements/InputLabel';
import InvalidMessage from '../elements/InvalidMessage';
import ButtonLabel from '../elements/ButtonLabel';

import {
  bodyTextValidation,
  titleValidation,
} from '../utils/validationAddNote';

import styles from '../styles/pages/AddNote.module.css';

// Initial Form State
const initialState = {
  title: {
    value: '',
    maxChar: 50,
    error: null,
  },
  bodyText: {
    value: '',
    maxChar: 1500,
    error: null,
  },
};

function AddNote() {
  const [form, setForm] = useState(initialState);
  const { addNote, availableNotes } = useContext(NotesContext);
  const textAreaRef = useRef(null);

  const navigate = useNavigate();

  const validForm = !form.title.error && !form.bodyText.error;
  const emptyForm = form.title.value === '' || form.bodyText.value === '';

  const handleInputTextArea = useCallback((e) => {
    textAreaRef.current.style.height = `auto`;
    console.log(e.target.scrollHeight);
    textAreaRef.current.style.height = `${e.target.scrollHeight}px`;
  }, []);

  const handleChange = (e) => {
    let currentElement = e.target.name;
    let value = e.target.value;

    setForm({
      ...form,
      [currentElement]: {
        ...form[currentElement],
        value: value.slice(0, form[currentElement].maxChar),
        error: validateError(
          currentElement,
          value.slice(0, form[currentElement].maxChar),
        ),
      },
    });
  };

  const validateError = (field, value) => {
    switch (field) {
      case 'title':
        return titleValidation(value);
      case 'bodyText':
        return bodyTextValidation(value);
      default:
        break;
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Check Validation
    if (validForm && !emptyForm) {
      // Add Note
      addNote(form.title.value, form.bodyText.value);

      // Clear form and Redirect to Home
      setForm(initialState);
      navigate('/');
    }
  };

  // Title Document | Focus on Textare first render
  useEffect(() => {
    document.title = 'Buat Catatan';
    textAreaRef.current.focus();
  }, []);

  // Render Component
  return (
    <>
      <Header />
      <main className={styles.main}>
        <section className={styles.note}>
          <div className={styles.note__wrapper}>
            <h1 className={styles.note__title}>Tambah Catatan</h1>

            {availableNotes ? (
              <form onSubmit={handleSubmit} className={styles.note__form}>
                {/* Note Input Group */}
                <div className={styles.noteInputGroup}>
                  <div className={styles.headerNoteInputGroup}>
                    <InputLabel idfor="bodyText" text="Isi Catatan" />
                    <CharLeft
                      num={form.bodyText.maxChar - form.bodyText.value.length}
                    />
                  </div>
                  <textarea
                    id="bodyText"
                    className={styles.inputNote}
                    placeholder="Tulis Catatanmu disini!"
                    name="bodyText"
                    value={form.bodyText.value}
                    onChange={handleChange}
                    onInput={handleInputTextArea}
                    ref={textAreaRef}
                  ></textarea>

                  {form.bodyText.error && (
                    <InvalidMessage errorText={form.bodyText.error} />
                  )}
                </div>

                {/* Title Input Group */}
                <div className={styles.titleInputGroup}>
                  <div className={styles.headerTitleInputGroup}>
                    <InputLabel idfor="title" text="Judul" />
                    <CharLeft
                      num={form.title.maxChar - form.title.value.length}
                    />
                  </div>
                  <input
                    type="text"
                    id="title"
                    className={styles.titleTextInput}
                    placeholder="Apa judul yang ingin ditulis?"
                    name="title"
                    autoComplete="off"
                    value={form.title.value}
                    onChange={handleChange}
                  />
                  {form.title.error && (
                    <InvalidMessage errorText={form.title.error} />
                  )}
                </div>

                {/* Action Button */}
                <div className={styles.buttonWrapper}>
                  <ButtonLabel
                    label="Tambahkan"
                    fullWidth={true}
                    disabled={!validForm || emptyForm}
                  />
                </div>
              </form>
            ) : (
              <p className={styles.maximumNote}>
                Maaf ✋, anda telah mencapai{' '}
                <b>Jumlah Maksimal {MaxNotes} Catatan</b>. <br />
                Silahkan hapus beberapa untuk menambah catatan yang baru!
              </p>
            )}
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}

export default AddNote;
