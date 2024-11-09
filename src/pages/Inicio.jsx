import React from 'react'

//VARIABLE GLOBALES
import {useMainStore} from '../store/mainStore'


export default function Inicio() {

  return (
    <>
      <div className='container-fluid pt-4'>
        <div className="row">

        <div className="col-lg-3 col-6">
            <div className="small-box bg-info">
              <div className="inner">
                <h3 className='text-bold' style={{marginBottom:'0px'}}>150</h3>
                <h5 className='text-bold' style={{marginBottom:'0px'}}>NUEVOS PEDIDOS</h5>
              </div>
              <div className="icon">
                <i className="pi pi-shopping-cart" />
              </div>
              <a href="#" className="small-box-footer">Ver <i className="pi pi-arrow-circle-right" /></a>
            </div>
          </div>

          <div className="col-lg-3 col-6">
            <div className="small-box bg-success">
              <div className="inner">
                <h3 className='text-bold' style={{marginBottom:'0px'}}>20/50</h3>
                <h5 className='text-bold' style={{marginBottom:'0px'}}>MESAS LIBRES</h5>
              </div>
              <div className="icon">
                <i className="pi pi-chart-bar" />
              </div>
              <a href="#" className="small-box-footer">Ver <i className="pi pi-arrow-circle-right" /></a>
            </div>
          </div>

          <div className="col-lg-3 col-6">
            <div className="small-box bg-warning">
              <div className="inner">
                <h3 className='text-bold' style={{marginBottom:'0px'}}>40/150</h3>
                <h5 className='text-bold' style={{marginBottom:'0px'}}>PENDIENTES</h5>
              </div>
              <div className="icon">
                <i className="pi pi-hourglass" />
              </div>
              <a href="#" className="small-box-footer">Ver <i className="pi pi-arrow-circle-right" /></a>
            </div>
          </div>

          <div className="col-lg-3 col-6">
            <div className="small-box bg-danger">
              <div className="inner">
                <h3 className='text-bold' style={{marginBottom:'0px'}}>100/150</h3>
                <h5 className='text-bold' style={{marginBottom:'0px'}}>FACTURADAS</h5>

              </div>
              <div className="icon">
                <i className="pi pi-shopping-bag" />
              </div>
              <a href="#" className="small-box-footer">Ver <i className="pi pi-arrow-circle-right" /></a>
            </div>
          </div>

        </div>

        <h3 className='text-bold' style={{marginBottom:'0px', position:'sticky', top:'50px', zIndex:'1', background:'#F5F5F5', height:'35px'}}> <i className='pi pi-file-import' style={{fontSize:'20px'}} ></i> PEDIDOS</h3>
        <hr style={{marginTop:'0px'}} />

        <div className="row">
            <div className="col-lg-3 col-6">
              <div className="card card-danger elevation-1">
                <div className="card-header">
                  <h3 className="card-title text-bold ticket-title"> MESA 1 </h3>
                  <div className="card-tools">
                    <button type="button" className="btn btn-tool" data-card-widget="maximize"><i className="pi pi-code" />
                    </button>
                  </div>
                </div>
                <div className="card-body">
                    <span className='text-bold nro-ticket rounded' style={{backgroundColor:'#2a2438', color:'white'}}>ORDEN: #000015</span> 
                    <hr className='linea-ticket'/>
                  <h5>1 Pizza Muzarella</h5> 
                  <h5>1 Coca Cola 500ml</h5>
                </div>
                <div className="card-footer bg-danger">
                  <span className='text-bold'> <i className='pi pi-sun'></i>COCINA</span>
                  <span className='text-bold time-ticket'><i className='pi pi-stopwatch'></i> 03:15</span>
                </div>
              </div>
            </div>

            <div className="col-lg-3 col-6">
              <div className="card card-danger elevation-1">
                <div className="card-header ">
                  <h3 className="card-title text-bold ticket-title"> MESA 2 </h3>
                  <div className="card-tools">
                    <button type="button" className="btn btn-tool" data-card-widget="maximize"><i className="pi pi-code" />
                    </button>
                  </div>
                </div>
                <div className="card-body">
                  <span className='text-bold nro-ticket rounded' style={{backgroundColor:'#2a2438', color:'white'}}>ORDEN: #000020</span> 
                  <hr className='linea-ticket'/>                     
                  <h5>2 Pizza Pepperoni</h5> 
                  <h5>1 LomiPizza</h5> 
                  <h5>1 Coca Cola 2lts</h5>
                </div>
                <div className="card-footer bg-danger ">
                  <span className='text-bold'> <i className='pi pi-thumbs-up-fill'></i> ENTREGADO</span>
                  <span className='text-bold time-ticket'><i className='pi pi-stopwatch'></i> 00:00</span>
                </div>

              </div>
            </div>

            <div className="col-lg-3 col-6">
              <div className="card card-warning elevation-1">
                <div className="card-header">
                <h3 className="card-title text-bold ticket-title"> DELIVERY 1 </h3>
                  <div className="card-tools">
                    <button type="button" className="btn btn-tool" data-card-widget="maximize"><i className="pi pi-code" />
                    </button>
                  </div>
                </div>
                <div className="card-body">
                  <span className='text-bold nro-ticket rounded' style={{backgroundColor:'#2a2438', color:'white'}}>ORDEN: #000021</span> 
                  <hr className='linea-ticket'/>                     
                  <h5>1 Pizza Pepperoni</h5> 
                  <h5>1 Hamburguesa</h5> 
                  <h5>1 Coca Cola 1lts</h5>
                </div>
                <div className="card-footer bg-warning ">
                  <span className='text-bold'> <i className='pi pi-sun'></i>COCINA</span>
                  <span className='text-bold time-ticket'><i className='pi pi-stopwatch'></i> 05:45</span>
                </div>

              </div>
            </div>

            <div className="col-lg-3 col-6">
              <div className="card card-info elevation-1">
                <div className="card-header">
                <h3 className="card-title text-bold ticket-title"> LLEVAR 1 </h3>
                  <div className="card-tools">
                    <button type="button" className="btn btn-tool" data-card-widget="maximize"><i className="pi pi-code" />
                    </button>
                  </div>
                </div>
                <div className="card-body">
                  <span className='text-bold nro-ticket rounded' style={{backgroundColor:'#2a2438', color:'white'}}>ORDEN: #000022</span> 
                  <hr className='linea-ticket'/>                     
                  <h5>1 Pizza Pepperoni</h5> 
                  <h5>1 Hamburguesa</h5> 
                  <h5>1 Coca Cola 1lts</h5>
                </div>
                <div className="card-footer bg-info ">
                  <span className='text-bold'> <i className='pi pi-thumbs-up-fill'></i> ENTREGADO</span>
                  <span className='text-bold time-ticket'><i className='pi pi-stopwatch'></i> 00:00</span>
                </div>

              </div>
            </div>

            <div className="col-lg-3 col-6">
              <div className="card card-warning elevation-1">
                <div className="card-header">
                  <h3 className="card-title text-bold ticket-title"> DELIVERY 2 </h3>
                  <div className="card-tools">
                    <button type="button" className="btn btn-tool" data-card-widget="maximize"><i className="pi pi-code" />
                    </button>
                  </div>
                </div>
                <div className="card-body">
                  <span className='text-bold nro-ticket rounded' style={{backgroundColor:'#2a2438', color:'white'}}>ORDEN: #000023</span> 
                  <hr className='linea-ticket'/>  
                  <h5>1 Pizza Muzzarella</h5> 
                  <h5>1 Coca Cola 1lts</h5>
                </div>
                <div className="card-footer bg-warning">
                  <span className='text-bold'> <i className='pi pi-truck'></i> TRANSITO</span>
                  <span className='text-bold time-ticket'><i className='pi pi-stopwatch'></i> 06:15</span>
                </div>

              </div>
            </div>

            <div className="col-lg-3 col-6">
              <div className="card card-info elevation-1">
                <div className="card-header">
                  <h3 className="card-title text-bold ticket-title"> LLEVAR 2 </h3>
                  <div className="card-tools">
                    <button type="button" className="btn btn-tool" data-card-widget="maximize"><i className="pi pi-code" />
                    </button>
                  </div>
                </div>
                <div className="card-body">
                  <span className='text-bold nro-ticket rounded' style={{backgroundColor:'#2a2438', color:'white'}}>ORDEN: #000024</span> 
                  <hr className='linea-ticket'/>  
                  <h5>1 Pizza Pepperoni</h5> 
                  <h5>1 Hamburguesa</h5> 
                  <h5>1 Coca Cola 1lts</h5>
                </div>
                <div className="card-footer bg-info ">
                  <span className='text-bold'><i className='pi pi-sun'></i> COCINA</span>
                  <span className='text-bold time-ticket'><i className='pi pi-stopwatch'></i> 4:20</span>
                </div>
              </div>
            </div>


            <div className="col-lg-3 col-6">
              <div className="card card-danger elevation-1">
                <div className="card-header">
                  <h3 className="card-title text-bold ticket-title"> MESA 1 </h3>
                  <div className="card-tools">
                    <button type="button" className="btn btn-tool" data-card-widget="maximize"><i className="pi pi-code" />
                    </button>
                  </div>
                </div>
                <div className="card-body">
                    <span className='text-bold nro-ticket rounded' style={{backgroundColor:'#2a2438', color:'white'}}>ORDEN: #000015</span> 
                    <hr className='linea-ticket'/>                     
                    <h5>1 Pizza Muzarella</h5> 
                    <h5>1 Pizza Napolitana</h5> 
                    <h5>1 Pizza Mexicana</h5> 
                    <h5>1 Pizza Pollo Catypyry</h5> 
                    <h5>1 Coca Cola 500ml</h5>
                </div>
                <div className="card-footer bg-danger ">
                  <span className='text-bold'> <i className='pi pi-hourglass'></i> ESPERA</span>
                  <span className='text-bold time-ticket'><i className='pi pi-stopwatch'></i> 02:00</span>
                </div>
              </div>
            </div>




        </div>
     </div>
    </>
  )
}
