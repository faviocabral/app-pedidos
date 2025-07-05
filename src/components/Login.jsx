import React from 'react'
import '../App.css'
//VARIABLE GLOBALES
import {useMainStore} from '../store/mainStore'
import background from "../assets/login-pizza.jpg";
export default function Login() {

  //variable glogal 
  const {setLogin} = useMainStore()

  return (
    <>
    {/* <div className="login-container d-flex justify-content-center  align-items-center h-100" style={{ backgroundImage: `url(${background})`, backgroundSize: 'cover' }} > */}
    <div className="login-container d-flex justify-content-center  align-items-center" style={{ minHeight: '100vh' }} >
    <div className="login-box" style={{opacity:"0.8"}} >
            <h1 className="text-center text-dark text-bold">SISTEMA PEDIDOS</h1>
            <div className="card" id="myLogin">
                <div className="card-body login-card-body">
                <h3 className="login-box-msg">LOGIN</h3>
                <form className="was-validated">
                    <div className="input-group mb-3">
                    <input type="text" formcontrolname="username" id="usuario" className="form-control input1" placeholder="Usuario" required />
                    </div>
                    <div className="input-group mb-3">
                    <input type="password" formcontrolname="password" id="pass" className="form-control input1" placeholder="Password" required  />
                    </div>
                    <div className="row">
                    <div className="col-12">
                        <button type="button" onClick={()=>setLogin(true)} className="btn btn-primary btn-block " >Ingresar</button>
                    </div>
                    </div>
                </form>
                </div>
            </div>
        </div>
    </div>
    </>
  )
}
