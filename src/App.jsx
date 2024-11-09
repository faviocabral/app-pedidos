import React , {useState, useRef } from 'react'
import {BrowserRouter, Routes, Route } from 'react-router-dom'
//import 'bootstrap/dist/css/bootstrap.min.css'
import 'admin-lte/dist/css/adminlte.min.css'
import 'admin-lte/dist/js/adminlte.min.js'
import '@fortawesome/fontawesome-free/css/fontawesome.min.css'
import 'react-toastify/dist/ReactToastify.css'

//import "primereact/resources/themes/lara-light-indigo/theme.css";     
//import "primereact/resources/primereact.min.css";  
import 'primeicons/primeicons.css';
import Dashboard from './components/Dashboard'

//AUTH
import Login from './components/Login'
//PAGES 
import Inicio from './pages/Inicio'
import Productos from './pages/Productos'
import Clientes from './pages/Clientes'
import Pedidos from './pages/Pedidos'
import Categorias from './pages/Categorias'
import Sucursales from './pages/Sucursales'
import TableroCliente from './pages/TableroCliente'
import TableroCocina  from './pages/TableroCocina'

//VARIABLE GLOBALES
import {useMainStore} from './store/mainStore'

function App() {
  const loginState = useMainStore((state) => state.login)

  console.log(loginState)
  return (
    <BrowserRouter>
      <Dashboard >
        <Routes>
          <Route index element={<Inicio />} />
          <Route path='/clientes' element={<Clientes />} />
          <Route path='/productos' element={<Productos />} />
          <Route path='/pedidos' element={<Pedidos />} />
          <Route path='/categorias' element={<Categorias />} />
          <Route path='/tablerocliente' element={<TableroCliente />} />
          <Route path='/tablerococina' element={<TableroCocina />} />
          <Route path='/Sucursales' element={<Sucursales />} />
        </Routes>
      </Dashboard>
    </BrowserRouter>    
  )
}

export default App