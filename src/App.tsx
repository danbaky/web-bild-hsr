import React, { useState } from 'react';
import './App.css';
import {Routes, Route, NavLink } from "react-router-dom";
import { Bilds } from './Bilds/Bilds';
import { AddBild } from './AddBild/AddBild';
import { Bild } from './Data/data';

function App() {
  const [bildsList, setBildsList] = useState< Bild[] > (JSON.parse(localStorage.getItem("Bilds") || '[]' ))


  const removeBildByID = (ID:string) : void =>  {
      console.log("Удаляю с ID ", ID)
      setBildsList(current => current.filter(el => el.id !== ID))
  }
  React.useEffect(()=>{
    localStorage.setItem("Bilds", JSON.stringify(bildsList))
  },[bildsList])

  return (
    <div className="App">
        <header className="box">
          <nav id='nav'>
            <div className="btm" > <NavLink to="/" className={'link'} > Мои Билды </NavLink> </div>
            <div className="btm" > <NavLink to="/add" className={'link'} > Добавить Билд </NavLink> </div>
            {/* <div className="btm"> <NavLink to="/dontknowyet" className={'link'} > Третья Кнопка </NavLink> </div> */}
          </nav>
        </header>
        <Routes>
          <Route path="/" element={<Bilds bilds={bildsList} remover={removeBildByID} />} />
          <Route path="/add" element={<AddBild setBildsList={setBildsList}/>} />
        </Routes>
    </div>
  );
}
export default App;
