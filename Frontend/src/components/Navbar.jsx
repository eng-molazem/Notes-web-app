import { useNavigate } from 'react-router-dom';
import toast from 'react-hot-toast';
import { useDispatch } from 'react-redux';
import { logout } from '../Redux/AuthSlice';
import { post } from '../services/ApiEndPoint';

export default function Navbar() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleLogout = async () => {
    try {
      const request = await post('/auth/logout');
      const response = request.data;

      if (response.success) {
        toast.success(response.message);
        dispatch(logout());
        navigate('/login');
      }

    } catch (error) {
      if (error.response) {
        toast.error(error.response.data.message);
      } else {
        toast.error("Logout failed");
      }
      console.log(error);
    }
  };

  return (
    <nav className="navbar">
      <div className="container-fluid p-2">
        
        <input
          className="mx-3 SerachInput"
          type="search"
          placeholder="Search"
        />

        <button
          type="button"
          className="btn bg-dark text-white mx-3"
          onClick={handleLogout}
        >
          Logout
        </button>

      </div>
    </nav>
  );
}