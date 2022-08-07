import React from 'react';
import Menu from './components/Menu';
import Navbar from './components/Navbar';
import Medicament from './components/Medicament';
import Pharmacie from './components/Pharmacie';
import 'bootstrap-icons/font/bootstrap-icons.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Routes, Route } from 'react-router-dom';


const App = () => {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path='/' element={<Menu />} />
        <Route path='/medicament' element={<Medicament />} />
        <Route path='/pharmacie' element={<Pharmacie />} />
      </Routes>
    </div>
  );
}

export default App;
