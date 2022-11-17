import React from 'react';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import './App.css';


//import Navigator from './components/Navigator'
import CompRutavuelosCrear from './components/RutasvuelosCrear';
import RutasvuelosList from './components/RutasvuelosList'
import CompRutavuelosEditar from './components/RutavuelosEdit';

function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<RutasvuelosList/>}/>
        <Route path='/crear' element={<CompRutavuelosCrear/>}/>
        <Route path='/edit/:id' element={<CompRutavuelosEditar/>}/>
      </Routes>
    </Router>
  );
}

export default App;
