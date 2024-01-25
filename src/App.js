
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './Pages/Home/Home/Home';
import Appointment from './Pages/Appointment/Appointment/Appointment';
import Login from './Pages/Login/Login/Login';
import Register from './Pages/Login/Register/Register';
import AuthProvider from './contexts/AuthProvider/AuthProvider';
import ProtectRoutes from './Pages/Login/ProtectRoutes/ProtectRoutes';
import Dashboard from './Pages/Dashboard/Dashboard/Dashboard';
import MakeAdmin from './Pages/Dashboard/MakeAdmin/MakeAdmin';
import DashboardHome from './Pages/Dashboard/DashboardHome/DashboardHome';
import AddDoctor from './Pages/Dashboard/AddDoctor/AddDoctor';
import AdminRoutes from './Pages/Login/AdminRoutes/AdminRoutes';

function App() {
  return (
    <div className="App">

      <AuthProvider>
        <BrowserRouter>
          <Routes>
            <Route path='/' element={<Home />} exact />
            <Route path='/home' element={<Home />} exact />
            <Route path='/login' element={<Login />} exact />
            <Route path='/register' element={<Register />} exact />
            <Route element={<ProtectRoutes />}>
              <Route path='/appointment' element={<Appointment />} exact />
              <Route path='/dashboard' element={<Dashboard />} exact >
                <Route path='' element={<DashboardHome />} exact />
                <Route path='home' element={<DashboardHome />} exact />
                <Route element={<AdminRoutes></AdminRoutes>}>
                  <Route path='make-admin' element={<MakeAdmin />} exact />
                  <Route path='add-doctor' element={<AddDoctor />} exact />
                </Route>
              </Route>

            </Route>
          </Routes>
        </BrowserRouter>
      </AuthProvider>

    </div>
  );
}

export default App;
