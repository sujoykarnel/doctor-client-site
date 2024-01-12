
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './Pages/Home/Home/Home';
import Appointment from './Pages/Appointment/Appointment/Appointment';
import Login from './Pages/Login/Login/Login';
import Register from './Pages/Login/Register/Register';

function App() {
  return (
    <div className="App">

      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home />} exact />
          <Route path='/home' element={<Home />} exact />
          <Route path='/appointment' element={<Appointment />} exact />
          <Route path='/login' element={<Login />} exact />
          <Route path='/register' element={<Register />} exact />
        </Routes>
      </BrowserRouter>

    </div>
  );
}

export default App;
