import React, {useState} from 'react'
import '../App.css'
export default function MenuItem({menuName, icono }) {
    const [isOpen, setIsOpen] = useState(false)
    const toggleMenu = () => {
        setIsOpen(!isOpen)
    } 
    const menuLista = ['Menu 1', 'Menu 2', 'Menu 3']
    /**
     * para listar los menu de un modulo 
     * @returns  {JSX.Element} 
     */
    const Item = ()=>{
        return menuLista.map((item, index) => {
            return <li className="nav-item" key={index}>
                <a href="#" className="nav-link">
                    <i className= "pi pi-circle-fill nav-icon" />
                    <p>{item}</p>
                </a>
            </li>
        })
    } 

    return (
    <>
              <li 
                className= {isOpen? 'nav-item menu-is-opening menu-open':'nav-item'} 
                style={{marginLeft:'0px'}}
                onClick={toggleMenu}
              >
                <a href="#" className="nav-link active">
                  <i className= {`nav-icon pi ${icono}`}  />
                  <p>
                    <strong> {menuName} </strong>
                    <i className="right pi pi-chevron-left" />
                  </p>
                </a>
                <ul className="nav nav-treeview " >

                    <Item />

                </ul>
              </li>

    </>
  )
}
