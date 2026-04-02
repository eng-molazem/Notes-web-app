import PropTypes from 'prop-types';

Modal.propTypes = {
  Modaltitle: PropTypes.string.isRequired,
  handleChange: PropTypes.func.isRequired,
  value: PropTypes.string.isRequired,
  handleNoteSubmit: PropTypes.func.isRequired,
};
export default function Modal({ Modaltitle, handleChange, value, handleNoteSubmit }) {
  return (
    <div
      className="modal fade"
      id="exampleModal"
      tabIndex="-1"
      aria-labelledby="exampleModalLabel"
      aria-hidden="true"
    >
      <div className="modal-dialog">
        <div className="modal-content border-0">

          <div className="modal-header">
            <h1 className="modal-title fs-5 fw-bold" id="exampleModalLabel">
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
                id="createTextarea"
                onChange={handleChange}
                value={value}
              ></textarea>
              <label htmlFor="createTextarea">Enter Notes</label>
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