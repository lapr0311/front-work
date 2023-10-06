import React from 'react'
// import logo2 from '/asset/img/Logo_footer-01.svg'
// import logo2 from '../asset/img/Logo_footer-01.svg'


import './Footer.css'
import { FaSquareFacebook ,  FaSquareInstagram } from "react-icons/fa6";

export default function Footer() {
  return (
    <footer className="allegory-footer__container">
    <div className="allegory-nav__links--right allegory-footer__link ">
      <a href=""><FaSquareFacebook /></a>
      <a href=""><FaSquareInstagram /></a>
     
    </div>
    <a className="allegory-footer__link" target="_blank" href="./terminos-condiciones.html">
      Términos y condiciones
   </a>
    <div>
    {/* <a> <img className="allegory-footer__logo" src={logo2} alt="Logo de la página" /> </a> */}
      
    </div>
  </footer>
  )
}
