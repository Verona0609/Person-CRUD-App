import Modal from "react-modal";
import "./Modal.css";

function DeletePersonModal({ isOpen, person, onClose, onConfirm }) {
  if (!person) return null;
  return (
    <Modal
      className="modal"
      overlayClassName="modal-overlay"
      isOpen={isOpen}
      onRequestClose={onClose}
      ariaHideApp={false}
      style={{ overlay: {}, content: {} }}
      shouldCloseOnOverlayClick={false}
    >
      <h3 className="modal-text">Confirm Deletion</h3>
      <p className="modal-quetion">
        {" "}
        Are you sure you want to delete{" "}
        <strong className="modal-name">
          {person.firstname} {person.lastname}
        </strong>
        ?
      </p>
      <div className="modal-buttons">
        <button
          type="button"
          className="btn-action cancel-btn"
          onClick={onClose}
        >
          Cancel
        </button>
        <button
          type="button"
          className="btn-action btn-delete"
          onClick={onConfirm}
        >
          Delete
        </button>
      </div>
    </Modal>
  );
}

export default DeletePersonModal;
