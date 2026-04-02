import PropTypes from 'prop-types';

DeleteModal.propTypes = {
  handleNotesDelete: PropTypes.func.isRequired,
};
export default function DeleteModal({ handleNotesDelete }) {
  return (
    <div id="deleteEmployeeModal" className="modal fade" tabIndex="-1">
      <div className="modal-dialog">
        <div className="modal-content">

          <div className="modal-header">
            <h4 className="modal-title">Delete Notes</h4>
            <button
              type="button"
              className="btn-close"
              data-bs-dismiss="modal"
            ></button>
          </div>

          <div className="modal-body">
            <p>Are you sure you want to delete this note?</p>
            <p className="text-warning">
              <small>This action cannot be undone.</small>
            </p>
          </div>

          <div className="modal-footer">
            <button
              type="button"
              className="btn btn-secondary"
              data-bs-dismiss="modal"
            >
              Cancel
            </button>

            <button
              type="button"
              className="btn btn-danger"
              data-bs-dismiss="modal"
              onClick={handleNotesDelete}
            >
              Delete
            </button>
          </div>

        </div>
      </div>
    </div>
  );
}
