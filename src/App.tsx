import React, { useState } from 'react';
import './App.css';
import { CharCard } from './CharCard/CharCard';

import { BrowserRouter as Router, Routes, Route, NavLink } from "react-router-dom";
import { Bilds } from './Bilds/Bilds';
import { link } from 'fs';
import { AddBild } from './AddBild/AddBild';

function App() {




  
  return (
    <div className="App">

      <Router>
        <header className="box">
          <nav id='nav'>
            <div className="btm"> <NavLink to="/" className={'link'}> Мои Билды </NavLink> </div>
            <div className="btm"> <NavLink to="/add" className={'link'} > Добавить Билд </NavLink> </div>
            <div className="btm"> <NavLink to="/dontknowyet" className={'link'} > Третья Кнопка </NavLink> </div>
          </nav>
        </header>
        
        <Routes>
          <Route path="/" element={<Bilds />} />
          <Route path="/add" element={<AddBild />} />
        </Routes>
      </Router>

    </div>
  );
}

export default App;
