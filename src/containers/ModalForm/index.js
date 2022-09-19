import { useContext, useState } from 'react';

import { MaxNotes, NotesContext } from '../../context/NotesContext';

import {
  bodyTextValidation,
  titleValidation,
} from '../../utils/validationAddNote';

import styles from './index.module.css';

const initialState = {
  title: {
    value: '',
    maxChar: 50,
    error: null,
  },
  bodyText: {
    value: '',
    maxChar: 1000,
    error: null,
  },
};

function ModalForm() {
  const { addNote, availableNotes } = useContext(NotesContext);

  const [form, setForm] = useState(initialState);

  const validForm = !form.title.error && !form.bodyText.error;
  const emptyForm = form.title.value === '' || form.bodyText.value === '';

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

      // Clear form
      setForm(initialState);
    }
  };

  return (
    <div>
      <h2 className={styles.title}>Catatan Baru</h2>
      <hr className={styles.lineBreak} />

      {availableNotes ? (
        <form onSubmit={handleSubmit} className={styles.formNote}>
          {/* Input Group */}
          <div className={styles.textInputGroup}>
            <div className={styles.headInputGroup}>
              <label className={styles.label}>Judul :</label>
              <span className={styles.char}>
                <b>{form.title.maxChar - form.title.value.length}</b> sisa
                karakter
              </span>
            </div>
            <input
              type="text"
              placeholder="Apa judul yang ingin ditulis? ..."
              name="title"
              value={form.title.value}
              onChange={handleChange}
              className={styles.textInput}
            />
            {form.title.error && (
              <p role="alert" className={styles.alert}>
                *{form.title.error}
              </p>
            )}
          </div>

          {/* Input Group */}
          <div className={styles.textInputGroup}>
            <div className={styles.headInputGroup}>
              <label className={styles.label}>Isi Catatan :</label>
              <span className={styles.char}>
                <b>{form.bodyText.maxChar - form.bodyText.value.length}</b> sisa
                karakter
              </span>
            </div>
            <textarea
              placeholder="Tuliskan isi catatan disini ..."
              name="bodyText"
              value={form.bodyText.value}
              onChange={handleChange}
              className={styles.textAreaInput}
            ></textarea>
            {form.bodyText.error && (
              <p role="alert" className={styles.alert}>
                *{form.bodyText.error}
              </p>
            )}
          </div>

          {/* Submit button */}
          <input
            type="submit"
            value="Tambahkan"
            disabled={!validForm || emptyForm}
            className={styles.btnSubmit}
          />
        </form>
      ) : (
        <p className={styles.maximumNote}>
          Ups, anda telah mencapai <b>jumlah maksimal catatan {MaxNotes}</b>,
          silahkan hapus beberapa untuk menambah catatan yang baru!
        </p>
      )}
    </div>
  );
}

export default ModalForm;
