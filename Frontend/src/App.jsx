import { BrowserRouter, Routes, Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import Home from './pages/Home';
import Login from './pages/Login';
import Register from './pages/Register';
import { Toaster } from 'react-hot-toast';
import ProtectedRoutes from './routes/ProtectedRoutes';
import PublicRoutes from './routes/PublicRoutes';

export default function App() {
  return (
    <BrowserRouter>

      <Toaster position="top-right" />

      <Routes>

        {}
        <Route path='/' element={<ProtectedRoutes />}>
          <Route index element={<Home />} />
        </Route>

        {}
        <Route element={<PublicRoutes />}>
          <Route path='/login' element={<Login />} />
          <Route path='/register' element={<Register />} />
        </Route>

      </Routes>

    </BrowserRouter>
  );
}