import { useState } from 'react';
import PropTypes from 'prop-types';
import { HiDotsVertical } from "react-icons/hi";
import { FaPen } from "react-icons/fa";
import { MdDelete } from "react-icons/md";

export default function Notes({ title, date, handleUpdate, handleDelete }) {
  const [show, setShow] = useState(false);

  const handleShow = () => {
    setShow(prev => !prev);
  };

  return (
    <div
      className="card position-relative rounded-4 border-0"
      style={{ width: "18rem", backgroundColor: "#FEC971" }}
    >
      <div className="card-body position-relative">

        <h5 className="card-title">{title}</h5>

        <div className="bottomContent">
          <div className="Date d-flex justify-content-between align-items-center">

            <h5 className="fs-6">{date}</h5>

            <div className="d-flex justify-content-center flex-column align-items-center position-relative">

              {show && (
                <div
                  className="Dropdown position-absolute bg-white shadow rounded p-2 d-flex gap-2"
                  style={{ zIndex: 1000 }}
                >
                  <FaPen
                    size={18}
                    style={{ cursor: "pointer" }}
                    onClick={() => {
                      handleUpdate();
                      setShow(false);
                    }}
                    data-bs-toggle="modal"
                    data-bs-target="#editModal"
                  />

                  <MdDelete
                    size={22}
                    color="red"
                    style={{ cursor: "pointer" }}
                    onClick={() => {
                      handleDelete();
                      setShow(false);
                    }}
                    data-bs-toggle="modal"
                    data-bs-target="#deleteEmployeeModal"
                  />
                </div>
              )}

              <HiDotsVertical
                size={25}
                style={{ cursor: 'pointer' }}
                onClick={handleShow}
              />

            </div>
          </div>
        </div>

      </div>
    </div>
  );
}

// ✅ هنا الحل
Notes.propTypes = {
  title: PropTypes.string.isRequired,
  date: PropTypes.string.isRequired,
  handleUpdate: PropTypes.func.isRequired,
  handleDelete: PropTypes.func.isRequired,
};