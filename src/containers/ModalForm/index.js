import { useContext, useState } from 'react';
import Modal from 'react-modal';

import { ModalContext } from '../../context/ModalContext';
import { NotesContext } from '../../context/NotesContext';
import { PanelContext } from '../../context/PanelContext';

import {
  bodyTextValidation,
  titleValidation,
} from '../../utils/validationAddNote';

const customStyles = {
  overlay: {
    backgroundColor: 'var(--overlay-color)',
  },
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
    backgroundColor: 'var(--surface-color)',
    border: 'none',
    borderRadius: '25px',
  },
};

Modal.setAppElement('#modal-portal');

const initialState = {
  title: {
    value: '',
    maxChar: 60,
    error: null,
  },
  bodyText: {
    value: '',
    maxChar: 1000,
    error: null,
  },
};

function ModalForm() {
  const { modalIsOpen, closeModal } = useContext(ModalContext);
  const { addNote, availableNotes } = useContext(NotesContext);
  const { setPanel } = useContext(PanelContext);

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

      // Switch to active panel
      setPanel('active');
    }

    closeModal();
  };

  return (
    <Modal
      isOpen={modalIsOpen}
      onRequestClose={closeModal}
      style={customStyles}
      contentLabel="Example Modal"
    >
      <h2>Catatan Baru</h2>
      <hr />

      {availableNotes ? (
        <form onSubmit={handleSubmit}>
          {/* Input Group */}
          <div className="text-input-group">
            <div className="head-input-group">
              <label>Judul :</label>
              <span>
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
            />
            {form.title.error && <p role="alert">{form.title.error}</p>}
          </div>

          {/* Input Group */}
          <div className="text-input-group">
            <div className="head-input-group">
              <label>Isi Catatan :</label>
              <span>
                <b>{form.bodyText.maxChar - form.bodyText.value.length}</b> sisa
                karakter
              </span>
            </div>
            <textarea
              placeholder="Tuliskan isi catatan disini ..."
              name="bodyText"
              value={form.bodyText.value}
              onChange={handleChange}
            ></textarea>
            {form.bodyText.error && <p role="alert">{form.bodyText.error}</p>}
          </div>

          {/* Submit button */}
          <input
            type="submit"
            value="Tambahkan"
            disabled={!validForm || emptyForm}
          />
        </form>
      ) : (
        <p>
          Ups, anda telah mencapai <b>jumlah maksimal catatan 30</b>, silahkan
          hapus beberapa untuk menambah catatan yang baru!
        </p>
      )}
    </Modal>
  );
}

export default ModalForm;
