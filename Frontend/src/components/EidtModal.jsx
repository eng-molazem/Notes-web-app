import PropTypes from 'prop-types';

EditModal.propTypes = {
  Modaltitle: PropTypes.string.isRequired,
  handleChange: PropTypes.func.isRequired,
  value: PropTypes.string.isRequired,
  handleNoteSubmit: PropTypes.func.isRequired,
};
export default function EditModal({ Modaltitle, handleChange, value, handleNoteSubmit }) {
  return (
    <div
      className="modal fade"
      id="editModal"
      tabIndex="-1"
      aria-labelledby="editModalLabel"
      aria-hidden="true"
    >
      <div className="modal-dialog">
        <div className="modal-content border-0">

          <div className="modal-header">
            <h1 className="modal-title fs-5 fw-bold" id="editModalLabel">
              {Modaltitle}
            </h1>
            <button
              type="button"
              className="btn-close"
              data-bs-dismiss="modal"
            ></button>
          </div>

          <div className="modal-body">
            <div className="form-floating">
              <textarea
                className="form-control h-100"
                id="editTextarea"
                onChange={handleChange}
                value={value}
              ></textarea>
              <label htmlFor="editTextarea">Enter Notes</label>
            </div>
          </div>

          <div className="modal-footer">
            <button
              type="button"
              className="btn btn-secondary"
              data-bs-dismiss="modal"
            >
              Close
            </button>

            <button
              type="button"
              className="btn bg-black text-white"
              onClick={handleNoteSubmit}
              data-bs-dismiss="modal"
            >
              Save changes
            </button>
          </div>

        </div>
      </div>
    </div>
  );
}