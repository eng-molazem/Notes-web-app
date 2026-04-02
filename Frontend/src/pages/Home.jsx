import { useEffect, useState } from 'react';
import SideBar from '../components/SideBar';
import Notes from '../components/Notes';
import Navbar from '../components/Navbar';
import Modal from '../components/Modal';
import toast from 'react-hot-toast';
import EditModal from '../components/EidtModal';
import DeleteModal from '../components/DeleteModal';
import { useNavigate } from 'react-router-dom';

export default function Home() {
  const navigate = useNavigate();

  const [notes, setNotes] = useState([]);
  const [title, setTitle] = useState('');
  const [updateTitle, setUpdateTitle] = useState('');
  const [modalId, setModalId] = useState('');
  const [openDropdownId, setOpenDropdownId] = useState(null);
  const [refresh, setRefresh] = useState(false);
  const [closeModal, setCloseModal] = useState(false);


  useEffect(() => {
    const checkAuth = async () => {
      try {
        const res = await fetch('/auth/islogin', {
          credentials: 'include'
        });

        const data = await res.json();

        if (!data.success) {
          navigate('/login');
        }
      } catch (error) {
        navigate('/login');
      }
    };

    checkAuth();
  }, [navigate]);

  
  const formatDate = (dateString) => {
    return new Date(dateString).toLocaleDateString();
  };

  
  const handleNoteSubmit = async () => {
    try {
      const response = await fetch('/notes/create', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        credentials: 'include',
        body: JSON.stringify({ title }),
      });

      if (!response.ok) throw new Error("Failed request");

      const data = await response.json();

      if (data.success) {
        toast.success(data.message);
        setRefresh(!refresh);
        setCloseModal(true);
        setTimeout(() => setCloseModal(false), 300);
        setTitle('');
      }
    } catch (error) {
      toast.error(error.message);
    }
  };

 
  const handleUpdate = async () => {
    try {
      const response = await fetch(`/notes/update/${modalId}`, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        credentials: 'include',
        body: JSON.stringify({ title: updateTitle }),
      });

      if (!response.ok) throw new Error("Failed request");

      const data = await response.json();

      if (data.success) {
        toast.success(data.message);
        setRefresh(!refresh);
        setCloseModal(true);
        setTimeout(() => setCloseModal(false), 300);
        setUpdateTitle('');
      }
    } catch (error) {
      toast.error(error.message);
    }
  };


  const handleNotesDelete = async () => {
    try {
      const response = await fetch(`/notes/delete/${modalId}`, {
        method: 'DELETE',
        credentials: 'include',
      });

      if (!response.ok) throw new Error("Failed request");

      const data = await response.json();

      if (data.success) {
        toast.success(data.message);
        setRefresh(!refresh);
        setCloseModal(true);
        setTimeout(() => setCloseModal(false), 300);
      }
    } catch (error) {
      toast.error(error.message);
    }
  };


  useEffect(() => {
    const getNotes = async () => {
      try {
        const response = await fetch('/notes/getnotes', {
          credentials: 'include'
        });

        if (!response.ok) throw new Error("Failed request");

        const data = await response.json();

        if (!data.success) {
          navigate('/login');
          return;
        }

        setNotes(data.Notes);
      } catch (error) {
        console.log(error);
      }
    };

    getNotes();
  }, [refresh, navigate]);

  return (
    <>
      <Modal
        Modaltitle="Write Notes"
        value={title}
        handleChange={(e) => setTitle(e.target.value)}
        handleNoteSubmit={handleNoteSubmit}
        HandleClose={closeModal}
      />

      <EditModal
        Modaltitle="Update Notes"
        handleChange={(e) => setUpdateTitle(e.target.value)}
        handleNoteSubmit={handleUpdate}
        value={updateTitle}
      />

      <DeleteModal handleNotesDelete={handleNotesDelete} />

      <div className='row'>
        <div className='col-lg-2 shadow d-flex min-vh-100'>
          <SideBar />
        </div>

        <div className='col-lg-10'>
          <Navbar />

          {notes.length > 0 ? (
            <div className='mt-3 mx-5'>
              <h1 className='fs-2 fw-bold'>NOTES</h1>
            </div>
          ) : (
            <div className='mt-5 d-flex justify-content-center'>
              <h1>No Notes Found</h1>
            </div>
          )}

          <div className='mt-4 mx-5 row'>
            {notes.map((elem) => (
              <div className='col-lg-4 mb-5' key={elem._id}>
                <Notes
                  title={elem.title}
                  date={formatDate(elem.updatedAt)}
                  handleUpdate={() => setModalId(elem._id)}
                  handleDelete={() => setModalId(elem._id)}
                  openDropdownId={openDropdownId}
                  setOpenDropdownId={setOpenDropdownId}
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}