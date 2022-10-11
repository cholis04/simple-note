import { useContext, useEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

import { MaxNotes, NotesContext } from '../context/NotesContext';

import MemberLayout from '../layouts/MemberLayout';

import ButtonLinkIcon from '../elements/ButtonLinkIcon';
import InputLabel from '../elements/InputLabel';
import CharLeft from '../elements/CharLeft';
import InputText from '../elements/InputText';
import InputTextArea from '../elements/InputTextArea';
import InvalidMessage from '../elements/InvalidMessage';
import ButtonLabel from '../elements/ButtonLabel';

import {
  bodyTextValidation,
  titleValidation,
} from '../utils/validationAddNote';

import styles from '../styles/pages/AddNote.module.css';

import { locale } from '../locale/AddNote.locale';

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
  const lang = 'en';
  const [form, setForm] = useState(initialState);
  const { addNote, availableNotes } = useContext(NotesContext);

  const navigate = useNavigate();
  const location = useLocation();

  const validForm = !form.title.error && !form.bodyText.error;
  const emptyForm = form.title.value === '' || form.bodyText.value === '';

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

  // Controlled Form on Change
  const updateForm = (currentElement, currentValue) => {
    const maxChar = form[currentElement].maxChar;
    const sliceValue = currentValue.slice(0, maxChar);

    setForm((prevForm) => {
      return {
        ...prevForm,
        [currentElement]: {
          ...prevForm[currentElement],
          value: sliceValue,
          error: validateError(currentElement, sliceValue),
        },
      };
    });
  };

  // Handle Input Text on Change
  const handleInputChange = (e) => {
    updateForm(e.target.id, e.target.value);
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
    document.title = locale[lang].pageTitle;
  }, []);

  // Render Component
  return (
    <MemberLayout>
      <section className={styles.note}>
        <div className={styles.note__wrapper}>
          <h1 className={styles.note__title}>{locale[lang].headingText}</h1>

          <div className={styles.note__headBar}>
            <ButtonLinkIcon
              label={locale[lang].links.cancel}
              color="error"
              onClick={handleCancel}
            />
          </div>

          {availableNotes ? (
            <form onSubmit={handleSubmit} className={styles.note__form}>
              {/* TextArea Input Group */}
              <div
                className={`${styles.input__group} ${styles.textarea__group}`}
              >
                <div className={styles.input__header}>
                  <InputLabel
                    idfor="bodyText"
                    text={locale[lang].bodyField.label}
                  />
                  <CharLeft
                    num={form.bodyText.maxChar - form.bodyText.value.length}
                  />
                </div>
                <InputTextArea
                  id="bodyText"
                  placeholder={locale[lang].bodyField.placeholder}
                  value={form.bodyText.value}
                  onChange={handleInputChange}
                  autoFocus={true}
                />

                {form.bodyText.error && (
                  <InvalidMessage errorText={form.bodyText.error} />
                )}
              </div>

              {/* Title Input Group */}
              <div className={`${styles.input__group} ${styles.text__group}`}>
                <div className={styles.input__header}>
                  <InputLabel
                    idfor="title"
                    text={locale[lang].titleField.label}
                  />
                  <CharLeft
                    num={form.title.maxChar - form.title.value.length}
                  />
                </div>
                <InputText
                  id="title"
                  placeholder={locale[lang].titleField.placeholder}
                  value={form.title.value}
                  onChange={handleInputChange}
                />

                {form.title.error && (
                  <InvalidMessage errorText={form.title.error} />
                )}
              </div>

              {/* Submit Button */}
              <ButtonLabel
                label={locale[lang].submitButton}
                fullWidth={true}
                disabled={!validForm || emptyForm}
              />
            </form>
          ) : (
            <p className={styles.note__formLimit}>
              Maaf ✋, anda telah mencapai{' '}
              <b>Jumlah Maksimal {MaxNotes} Catatan</b>. <br />
              Silahkan hapus beberapa untuk menambah catatan yang baru!
            </p>
          )}
        </div>
      </section>
    </MemberLayout>
  );
}

export default AddNote;
