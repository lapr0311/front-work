import React from 'react'
import { NavLink } from 'react-router-dom'

import './Home.css';



export default function Home() {
  return (
   
    <div>

     
  


      <div className="allegory-hero__container">
      <div className="allegory-hero__content">
      <h1 className="allegory-hero__content--title">IFASHA soluciona el problema de 
      comprar en tu talla.</h1>
      <a>
      
         <NavLink className={({ isActive }) => (isActive ? 'active' : undefined)} end to="/buscador" >Buscador</NavLink>
      </a>

      </div>
    
   
      </div>

    
    
      

    </div>
    
  )
}
