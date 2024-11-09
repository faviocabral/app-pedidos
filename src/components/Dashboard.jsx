import React, {useState} from 'react'

//COMPONENT
import Header from './Header'
import Sidebar from './Sidebar'
import Footer from './Footer'

//AUTH COMPONENT 
import Login from './Login'
//VARIABLE GLOBALES
import {useMainStore} from '../store/mainStore'

export default function Dashboard({children}) {
  const [isLogin, setIsLogin] = useState(false )
  const loginState = useMainStore((state) => state.login) 
  console.log('desde el dashboard', loginState)
  return (
    <>
    {!loginState
    ?
      <Login /> 
    :
      <div className='wrapper'>
        <Header login={loginState}  />
        <Sidebar login={loginState} />
          <div className="">
            <div className="content-wrapper" >
              <div className="content">
                <div className="container-fluid pt-2 pl-3">
                  <div className="row">
                      {children}
                  </div>
                </div>
              </div>
            </div>
          </div>
      </div>  
    }
    </>
  )
}