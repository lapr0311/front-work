
import React from 'react';
import logo from '../../asset/img/logo_new_2.jpg';
import './Nav.css';
import { NavLink } from 'react-router-dom';

export default function Nav() {
  return (
    <nav className="navbar navbar-expand-lg navbar-light allegory-nav__container">
       <div className="container-fluid">
    <a className="navbar-brand" href="#">Navbar</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarNav">
      <ul className="navbar-nav">
        <li className="nav-item">
          <a className="nav-link active" aria-current="page" href="#">Home</a>
        </li>
        <li className="nav-item">
          <a NavLink activeClassName="active" exact to="/buscador" className="nav-link">Buscador</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">Pricing</a>
        </li>
        <li className="nav-item">
          <a className="nav-link disabled">Disabled</a>
        </li>
      </ul>
    </div>
  </div>
        {/* <div className="container-fluid">
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
      <div className="collapse navbar-collapse" id="navbarNav">
        <div className="allegory-nav__links--left navbar-nav">
          <NavLink activeClassName="active" exact to="/Home" className="nav-link">
            Inicio
          </NavLink>
          <NavLink activeClassName="active" exact to="/buscador" className="nav-link">
            Buscador
          </NavLink>
          <NavLink activeClassName="active" exact to="/nosotras" className="nav-link">
            Nosotras
          </NavLink>
          <NavLink activeClassName="active" exact to="/blog" className="nav-link">
            Blog
          </NavLink>
          <NavLink activeClassName="active" exact to="/register" className="nav-link">
          Suscríbete
          </NavLink>
          <NavLink activeClassName="active" exact to="/login" className="nav-link">
          Iniciar sesión
          </NavLink>
        </div>
        <div className="col-6 allegory-nav__logo">
          <a>
            <img src={logo} alt="Logo de la página" />
          </a>
        
        </div>
      </div>
      </div> */}
    </nav>
  );
}















// import React from 'react'
// import logo from '../../asset/img/logo_new_2.jpg'
// import './Nav.css'
// import { NavLink } from 'react-router-dom'


// export default function Nav() {

 

  


//   return (
    

//     <nav className="navbar navbar-expand-lg navbar-light allegory-nav__container">
//     <button
//       className="navbar-toggler"
//       type="button"
//       data-toggle="collapse"
//       data-target="#navbarNav"
//       aria-controls="navbarNav"
//       aria-expanded="false"
//       aria-label="Toggle navigation"
//     >
//       <span className="navbar-toggler-icon"></span>
//     </button>
//     <div className="collapse navbar-collapse allegory-nav__links col-3" id="navbarNav">
//       <div className="allegory-nav__links--left">
//         <NavLink activeClassName="active" exact to="/Home">
//           Inicio
//         </NavLink>
//         <NavLink activeClassName="active" exact to="/buscador">
//           Buscador
//         </NavLink>
//         <NavLink activeClassName="active" exact to="/nosotras">
//           Nosotras
//         </NavLink>
//         <NavLink activeClassName="active" exact to="/blog">
//           Blog
//         </NavLink>
//       </div>
//     </div>
//     <div className="col-6 allegory-nav__logo">
//       <a>
//         <img src={logo} alt="Logo de la página" />
//       </a>
//     </div>
//     <div className="col-2">
//       <div type="button" className="text-right btn btn-calipso">
//         <NavLink activeClassName="active" exact to="/register">
//           Suscríbete
//         </NavLink>
//       </div>
//     </div>
//     <div className="col-1">
//       <div type="button" className="text-right btn btn-calipso">
//         <NavLink activeClassName="active" exact to="/login">
//           Iniciar sesión
//         </NavLink>
//       </div>
//     </div>
//   </nav>
// );
// }
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
