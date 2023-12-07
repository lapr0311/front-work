import React from 'react'
import logo from '../../asset/img/logo_new_2.jpg'
import './Nav.css'
import { NavLink } from 'react-router-dom'


export default function Nav() {

 

  


  return (

    <nav className="navbar navbar-expand-lg navbar-light allegory-nav__container">
    <button
      className="navbar-toggler"
      type="button"
      data-toggle="collapse"
      data-target="#navbarNav"
      aria-controls="navbarNav"
      aria-expanded="false"
      aria-label="Toggle navigation"
    >
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse allegory-nav__links col-3" id="navbarNav">
      <div className="allegory-nav__links--left">
        <NavLink activeClassName="active" exact to="/Home">
          Inicio
        </NavLink>
        <NavLink activeClassName="active" exact to="/buscador">
          Buscador
        </NavLink>
        <NavLink activeClassName="active" exact to="/nosotras">
          Nosotras
        </NavLink>
        <NavLink activeClassName="active" exact to="/blog">
          Blog
        </NavLink>
      </div>
    </div>
    <div className="col-6 allegory-nav__logo">
      <a>
        <img src={logo} alt="Logo de la página" />
      </a>
    </div>
    <div className="col-2">
      <div type="button" className="text-right btn btn-calipso">
        <NavLink activeClassName="active" exact to="/register">
          Suscríbete
        </NavLink>
      </div>
    </div>
    <div className="col-1">
      <div type="button" className="text-right btn btn-calipso">
        <NavLink activeClassName="active" exact to="/login">
          Iniciar sesión
        </NavLink>
      </div>
    </div>
  </nav>
);
}
//     <nav className="navbar navbar-expand-lg navbar-light allegory-nav__container">
//     <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
//         <span className="navbar-toggler-icon"></span>
//     </button>
//     <div className="collapse navbar-collapse allegory-nav__links col-3" id="navbarNav">

//         <div className="allegory-nav__links--left">
//         <NavLink className={({ isActive }) => (isActive ? 'active' : undefined)} end to="/Home" >Inicio</NavLink>
//         <NavLink className={({ isActive }) => (isActive ? 'active' : undefined)} end to="/buscador" >Buscador</NavLink>
            
//             <NavLink className={({ isActive }) => (isActive ? 'active' : undefined)} end to="/nosotras" >Nosotras</NavLink>
//             <NavLink className={({ isActive }) => (isActive ? 'active' : undefined)} end to="/blog" >Blog</NavLink>
            

//         </div>
//         </div>
       
//     <div className="col-6 allegory-nav__logo">
//     <a> <img src={logo} alt="Logo de la página" /> </a>
        
//     </div>
//     <div className="col-2">
//         <div type="button" className="text-right btn btn-calipso ">
//         <NavLink className={({ isActive }) => (isActive ? 'active' : undefined)}  end to="/register" >Suscríbete</NavLink>
//         </div>
    
//    </div>
//    <div className="col-1">
//     <div type="button" className="text-right btn btn-calipso ">
//         <NavLink className={({ isActive }) => (isActive ? 'active' : undefined)}  end to="/login" >Iniciar sesion</NavLink>
//         </div>
//         </div>
        {/* <div className="col-1">
    <div type="button" className="text-right btn btn-calipso ">
          <button onClick={handleLogout}>Cerrar sesión</button>
        </div>
        </div> */}
        
    
// </nav>
//   )
//   }
