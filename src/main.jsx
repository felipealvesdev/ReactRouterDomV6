import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'

import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Sobre from './components/Sobre.jsx'
import Salas from './components/Salas.jsx'
import Redirect from './components/Redirect.jsx'
import NotFound from './components/NotFound.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<App />} />
        <Route path='/sobre' element={<Sobre />} />
        <Route path='/salas' element={<Salas />} />
        <Route path='/salas' element={<Salas />} >
          <Route path=':id' element={<div>Olá</div>}/>

        </Route>
        {/*<Route path='/salas/:id' element={<Salas />} />*/}
        <Route path='/redirect' element={<Redirect />} />
        <Route path='/*' element={<NotFound />} />


      </Routes>
    </BrowserRouter>
  </React.StrictMode>,
)
