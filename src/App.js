
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './Pages/Home/Home/Home';
import Appointment from './Pages/Appointment/Appointment/Appointment';

function App() {
  return (
    <div className="App">

      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home />} exact />
          <Route path='/home' element={<Home />} exact />
          <Route path='/appointment' element={<Appointment />} exact />
        </Routes>
      </BrowserRouter>

    </div>
  );
}

export default App;
