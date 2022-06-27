import Modal from 'react-modal';

const customStyles = {
  overlay: {
    backgroundColor: 'rgba(0,0,0,0.7)',
  },
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
  },
};

Modal.setAppElement('#modal-portal');

function ModalForm({ modalIsOpen, closeModal }) {
  return (
    <Modal
      isOpen={modalIsOpen}
      onRequestClose={closeModal}
      style={customStyles}
      contentLabel="Example Modal"
    >
      <h2>Catatan Baru</h2>
      <hr />
      <form onSubmit={closeModal}>
        <div className="text-input-group">
          <div className="head-input-group">
            <label>Judul :</label>
            <span>
              <b>60</b> sisa karakter
            </span>
          </div>
          <input type="text" placeholder="Apa judul yang ingin ditulis? ..." />
          <p role="alert">Judul harus disini!</p>
        </div>
        <div className="text-input-group">
          <div className="head-input-group">
            <label>Isi Catatan :</label>
            <span>
              <b>1000</b> sisa karakter
            </span>
          </div>
          <textarea placeholder="Tuliskan isi catatan disini ..."></textarea>
          <p role="alert">Catatan tidak boleh kosong!</p>
        </div>

        <input type="submit" value="Tambahkan" />
      </form>
    </Modal>
  );
}

export default ModalForm;
