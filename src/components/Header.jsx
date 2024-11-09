import React from 'react'
import '../App.css'
//VARIABLE GLOBALES
import {useMainStore} from '../store/mainStore'

export default function Header({login}) {
  const {setLogin} = useMainStore()
  return (
    <>
      <nav className="main-header navbar navbar-expand navbar-light navbar-light mb-0 text-white elevation-1">
        <ul className="navbar-nav" >
        <a className="nav-link" href='#' data-widget="pushmenu"> <li className="nav-item"> <i className="pi pi-bars" style={{fontSize:'2rem'}} ></i> </li></a> 
        <a className="nav-link" href='#'> <li className="nav-item"> INICIO {login} </li></a> 
        </ul>
        <ul className="navbar-nav ml-auto">
          <a href="#" className="nav-link" onClick={()=> setLogin(false)}> <li className="nav-item"> <i className="pi pi-sign-out" style={{fontSize:'2rem', marginRight:'10px'}}/></li> </a>
        </ul>        
      </nav>

    </>
  )
}
