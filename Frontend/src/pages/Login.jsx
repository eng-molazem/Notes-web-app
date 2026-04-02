import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { toast } from 'react-hot-toast';
import { useDispatch } from 'react-redux';
import { addUser } from '../Redux/AuthSlice';

export default function Login() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [value, setValue] = useState({
    email: "",
    password: ""
  });

  const handleChange = (e) => {
    setValue({
      ...value,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch('/auth/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        credentials: 'include',
        body: JSON.stringify(value),
      });

      if (!response.ok) throw new Error("Login request failed");

      const data = await response.json();

      if (data.success) {
        toast.success(data.message);
        dispatch(addUser(data.user));
        navigate('/');
      } else {
        toast.error(data.message || "Login failed");
      }

    } catch (error) {
      toast.error(error.message);
    }
  };

  return (
    <div className='container min-vh-100 d-flex justify-content-center align-items-center'>
      <div className='form-container border shadow p-5 rounded-4 bg-white'>
        <h2 className='text-center mb-4 fw-bold'>Login</h2>

        <form className='d-flex flex-column' onSubmit={handleSubmit}>
          
          <div className="form-group mb-3">
            <label className='form-label'>Email</label>
            <input
              type="email"
              value={value.email}
              onChange={handleChange}
              name='email'
              className="form-control"
              placeholder="Email"
            />
          </div>

          <div className='form-group mb-3'>
            <label className='form-label'>Password</label>
            <input
              type="password"
              value={value.password}
              onChange={handleChange}
              name='password'
              className='form-control'
              placeholder='Enter your password'
            />
          </div>

          <button type="submit" className='btn btn-success w-100 mb-3'>
            Login
          </button>

          <div className='text-center'>
            <p>
              Dont have an account? <Link to='/register'>Register</Link>
            </p>
          </div>
        </form>
      </div>
    </div>
  );
}