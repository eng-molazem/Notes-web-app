import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import toast from 'react-hot-toast';

export default function Register() {
  const navigate = useNavigate();

  const [value, setValue] = useState({
    userName: "",
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


    if (!value.userName || !value.email || !value.password) {
      return toast.error("All fields are required");
    }

    try {
      const response = await fetch('/auth/register', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        credentials: 'include',
        body: JSON.stringify(value),
      });

      if (!response.ok) {
        throw new Error("Register request failed");
      }

      const data = await response.json();

      if (data.success) {
        toast.success(data.message);
        navigate('/login');
      } else {
        toast.error(data.message || "Registration failed");
      }

    } catch (error) {
      toast.error(error.message || "Something went wrong");
    }
  };

  return (
    <div className='container min-vh-100 d-flex justify-content-center align-items-center'>
      <div className='form-container border shadow p-5 rounded-4 bg-white w-50'>
        
        <h2 className='text-center mb-4 fw-bold'>Register</h2>

        <form className='d-flex flex-column' onSubmit={handleSubmit}>

          <div className="form-group mb-3">
            <label className='form-label'>Name</label>
            <input
              type="text"
              className="form-control"
              name='userName'
              onChange={handleChange}
              value={value.userName}
              placeholder="Enter your name"
            />
          </div>

          <div className="form-group mb-3">
            <label className='form-label'>Email</label>
            <input
              type="email"
              className="form-control"
              name='email'
              onChange={handleChange}
              value={value.email}
              placeholder="Enter your email"
            />
          </div>

          <div className='form-group mb-3'>
            <label className='form-label'>Password</label>
            <input
              type="password"
              className='form-control'
              name='password'
              onChange={handleChange}
              value={value.password}
              placeholder='Enter your password'
            />
          </div>

          <button type="submit" className='btn btn-success w-100 mb-3'>
            Register
          </button>

          <div className='text-center'>
            <p>
              Already have an account? <Link to='/login'>Login</Link>
            </p>
          </div>

        </form>
      </div>
    </div>
  );
}