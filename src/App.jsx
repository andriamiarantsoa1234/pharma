import React from 'react';
import Menu from './components/Menu';
import 'bootstrap-icons/font/bootstrap-icons.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Routes, Route } from 'react-router-dom';


const App = () => {
  return (
    <div>
      <Routes>
        <Route path='/' element={<Menu />} />
      </Routes>
    </div>
  );
}

export default App;
