import React, { useState } from 'react';
import './App.css';
import { CharCard } from './CharCard/CharCard';

import { BrowserRouter as Router, Routes, Route, NavLink } from "react-router-dom";
import { Bilds } from './Bilds/Bilds';
import { link } from 'fs';
import { AddBild } from './AddBild/AddBild';
import { Bild } from './Data/data';

function App() {



  const [bildsList, setBildsList] = useState<Bild[]> (JSON.parse(localStorage.getItem("Bilds") || '{}' ))


  // Как айди лучше использовать дату
  const removeBildByName = (name:string) :void =>  {
      setBildsList(current => current.filter(el => el.name != name))
  }
  React.useEffect(()=>{
    localStorage.setItem("Bilds", JSON.stringify(bildsList))
  },[bildsList])

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
          <Route path="/" element={<Bilds bilds={bildsList} remover={removeBildByName} />} />
          <Route path="/add" element={<AddBild bildList={bildsList} setBildsList={setBildsList}/>} />
        </Routes>
      </Router>

    </div>
  );
}
export default App;
