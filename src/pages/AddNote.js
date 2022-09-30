import { useContext, useEffect, useState, useRef } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

import { MaxNotes, NotesContext } from '../context/NotesContext';

import CharLeft from '../elements/CharLeft';
import InputLabel from '../elements/InputLabel';
import InvalidMessage from '../elements/InvalidMessage';
import ButtonLabel from '../elements/ButtonLabel';
import ButtonLinkIcon from '../elements/ButtonLinkIcon';

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
  const location = useLocation();

  const validForm = !form.title.error && !form.bodyText.error;
  const emptyForm = form.title.value === '' || form.bodyText.value === '';

  // Controlled Form on Change
  const updateForm = (currentElement, currentValue) => {
    const maxChar = form[currentElement].maxChar;
    const sliceValue = currentValue.slice(0, maxChar);

    setForm({
      ...form,
      [currentElement]: {
        ...form[currentElement],
        value: sliceValue,
        error: validateError(currentElement, sliceValue),
      },
    });
  };

  // Handle Input Text on Change
  const handleInputTextChange = (e) => {
    updateForm(e.target.id, e.target.value);
  };

  // Handle Div ContentEditable
  const handleDivTextInput = (e) => {
    const value = e.target.innerText;
    const element = e.target.id;
    const maxChar = form[element].maxChar;

    updateForm(element, value);

    if (value.length > maxChar) {
      textAreaRef.current.innerText = value.slice(0, maxChar);
      textAreaRef.current.blur();

      // ============ Set Caret Cursor on Last Char ---------------- //

      // Creates range object
      const setpos = document.createRange();

      // Creates object for selection
      const set = window.getSelection();

      // Set start position of range
      setpos.setStart(textAreaRef.current.childNodes[0], maxChar);

      // Collapse range within its boundary points
      // Returns boolean
      setpos.collapse(true);

      // Remove all ranges set
      set.removeAllRanges();

      // Add range with respect to range object.
      set.addRange(setpos);

      // Set cursor on focus
      textAreaRef.current.focus();
      // ============ Set Caret Cursor on Last Char ---------------- //
    }
  };

  // Validation Form
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

  // Add note when form is valid and not empty
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

  // Go Previous page when back button click
  const handleCancel = () => {
    if (location.state?.from !== undefined) navigate(-1);
    navigate('/');
  };

  // Title Document | Focus on Textare first render
  useEffect(() => {
    document.title = 'Buat Catatan';
    textAreaRef.current.focus();
  }, []);

  // Render Component
  return (
    <>
      <main>
        <section className={styles.note}>
          <div className={styles.note__wrapper}>
            <h1 className={styles.note__title}>Tambah Catatan</h1>

            <div className={styles.note__headBar}>
              <ButtonLinkIcon
                label="Batal"
                color="error"
                onClick={handleCancel}
              />
            </div>

            {availableNotes ? (
              <form onSubmit={handleSubmit} className={styles.note__form}>
                {/* Note Input Group */}
                <div className={styles.noteInputGroup}>
                  <div className={styles.headerNoteInputGroup}>
                    <InputLabel id="labelTextArea" text="Isi Catatan" />
                    <CharLeft
                      num={form.bodyText.maxChar - form.bodyText.value.length}
                    />
                  </div>
                  <div
                    role="textbox"
                    contentEditable={true}
                    suppressContentEditableWarning={true}
                    id="bodyText"
                    className={styles.inputNote}
                    onInput={handleDivTextInput}
                    data-placeholder="Tulis Catatanmu disini!"
                    aria-labelledby="labelTextArea"
                    ref={textAreaRef}
                  />

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
                    autoComplete="off"
                    value={form.title.value}
                    onChange={handleInputTextChange}
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
    </>
  );
}

export default AddNote;
