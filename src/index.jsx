import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import CaracteresLista from './pages/CaracteresLista';
import Caracteres from './pages/Caracteres';
import "./recursos/Styles.css"
import Header from './componentes/Header'


const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(

  <React.StrictMode>
<Header></Header>
    <BrowserRouter>
      <Routes>
        <Route
          path=''
          element={<CaracteresLista></CaracteresLista>}
        />
        <Route path='/caracteres/:id' element={<Caracteres />} />
        <Route path='*' element={<p>404</p>} />
      </Routes>
      
    </BrowserRouter>

  </React.StrictMode>

);


