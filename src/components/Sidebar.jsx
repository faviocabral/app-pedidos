import React, {useState} from 'react'
import { Calendar } from 'primereact/calendar'
import MenuItem from './MenuItem'
import '../App.css'

export default function Sidebar({login}) {

  const [date, setDate] = useState(null)

  return (
    <>
      <aside className="main-sidebar sidebar-light-info elevation-1" >
          <a data-widget="pushmenu" href="#" role="button" className="brand-link d-flex justify-content-between align-items-center pl-3 pr-3 bg-light elevation-1" >
          <i className="pi pi-home" />
            <span className="brand-text font-weight w-100  text-gray"> <strong style={{fontSize:'16px', textAlign:'center'}}>SISTEMA PEDIDOS </strong></span>
          </a>

        <div className="sidebar">
        <div className="user-panel mt-4 pb-1 mb-2 d-flex">
            <div className="info">
              <strong>  <a href="#" className="d-block text-gray"> <i className="pi pi-user" /> USUARIO {login} </a> </strong>
            </div>
          </div>

          <div className="input-group" data-widget="sidebar-search" >
            <input className="form-control form-control-sidebar text-lg" type="search" placeholder="Search" aria-label="Search"  style={{height:"40px"}}/>
            <div className="input-group-append">
              <button className="btn btn-sidebar">
                <i className="pi pi-filter" />
              </button>
            </div>
          </div>

          <nav className="mt-2">
            <ul className="nav nav-pills nav-sidebar flex-column nav-child-indent" data-widget="treeview" role="menu" data-accordion="false">

            {/* listado de modulos del menu  */}
            <MenuItem menuName={'PEDIDOS'} icono={'pi-tag'} />
            <MenuItem menuName={'FACTURACION'} icono={'pi-shopping-cart'} />
            <MenuItem menuName={'PRODUCTOS'} icono={'pi-box'} />
            <MenuItem menuName={'CLIENTES'} icono={'pi-wrench'} />
            <MenuItem menuName={'CONFIGURACION'} icono={'pi-cog'} />

            </ul>
          </nav>
        </div>
      </aside>

    </>
  )
}
