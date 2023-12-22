import React from 'react'
import anteojos from '../../asset/img/lentes.svg';
import bikini from '../../asset/img/bikini.svg';
import blazer from '../../asset/img/blazer.svg';
import blusa from '../../asset/img/blusa.svg';
import bolso from '../../asset/img/bolso.svg';
import botas from '../../asset/img/bolso.svg';
import botines from '../../asset/img/botines.svg';
import bufanda from '../../asset/img/bufanda.svg';
import camisa from '../../asset/img/camisa.svg';
import chaqueta from '../../asset/img/chaqueta.svg';
import cinturon from '../../asset/img/cinturon.svg';
import collar from '../../asset/img/collar.svg';
import falda from '../../asset/img/falda.svg';
import jeans from '../../asset/img/jeans.svg';
import jockey from '../../asset/img/jockey.svg';
import lentes from '../../asset/img/lentes.svg';
import pack from '../../asset/img/pack.svg';
import pantalon from '../../asset/img/pantalon.svg';
import panuelo from '../../asset/img/panuelo.svg';
import pendientes from '../../asset/img/pendientes.svg';
import polera from '../../asset/img/polera.svg';
import sandalias from '../../asset/img/sandalias.svg';
import top from '../../asset/img/top.svg';
import vestido from '../../asset/img/vestido.svg';
import zapatillas from '../../asset/img/zapatillas.svg';
import zapatos from '../../asset/img/zapatos.svg';
import '../../components/styles/styles.css'
import { NavLink } from 'react-router-dom'












export default function Productos() {








  return (
    <div>
         <div className="container-fluid project-tab">
          <div className="row">
            <div className="col-12">
              {/* <nav>
                <div className="nav nav-tabs nav-fill" id="nav-tab" role="tablist">
                  <a className="nav-item nav-link active " id="nav-home-tab" data-toggle="tab" href="#nav-home" role="tab" aria-controls="nav-home" aria-selected="true">Productos</a>
                  <NavLink className={({ isActive }) => (isActive ? 'active' : undefined)}  end to="/estilos" >Estilos</NavLink>
                  <a className="nav-item nav-link disabled" id="nav-contact-tab" data-toggle="tab" href="#nav-contact" role="tab" aria-controls="nav-contact" aria-selected="false">Colorimetría</a>
                  <a className="nav-item nav-link disabled" id="nav-cuerpo-tab" data-toggle="tab" href="#nav-cuerpo" role="tab" aria-controls="nav-cuerpo" aria-selected="false">Tipo de cuerpo</a>
                  <a className="nav-item nav-link disabled" id="nav-ocasion-tab" data-toggle="tab" href="#nav-ocasion" role="tab" aria-controls="nav-ocasion" aria-selected="false">Ocasión</a>
                  <a className="nav-item nav-link disabled" id="nav-actividad-tab" data-toggle="tab" href="#nav-actividad" role="tab" aria-controls="nav-actividad" aria-selected="false">Etapa</a>
    
                </div>
                
                </nav> */}
            
        <div className="tab-content" id="nav-tabContent">
    
  
    <div className="tab-pane active show fade" id="nav-home" role="tabpanel" aria-labelledby="nav-home-tab ">
      <div className="mt-5 mb-5">
        <h2 className="mb-3">Productos</h2>
        <p> Tenemos un amplio catálogo de productos. Por favor escoge uno del listado a continuación: </p>
      </div>


      <div>



        <div className="buscador__productos">
          <div className="button-buscador__container">
            <button className="button-buscador__productos--button">
            <NavLink className="button-buscador__productos--button" to="/anteojos">
              <a> <img className="button-buscador__productos--svg"  src={anteojos} alt="Logo de la página" /> </a>
              </NavLink>
            </button>
            
            <NavLink className={({ isActive }) => (isActive ? 'active' : undefined)}  end to="/anteojos" >Anteojos</NavLink>
          </div>

          <div className="button-buscador__container">
            <button className="button-buscador__productos--button">
            <NavLink className="button-buscador__productos--button" to="/bikini">
            <a> <img className="button-buscador__productos--svg"  src={bikini} alt="Logo de la página" /> </a>
            </NavLink>
            </button>
            <NavLink className={({ isActive }) => (isActive ? 'active' : undefined)}  end to="/bikini" >Bikini</NavLink>
          </div>


          <div className="button-buscador__container">
            <button className="button-buscador__productos--button">
            <NavLink className="button-buscador__productos--button" to="/blazer">
            <a> <img className="button-buscador__productos--svg"  src={blazer} alt="Logo de la página" /> </a>
            </NavLink>
            </button>
            <NavLink className={({ isActive }) => (isActive ? 'active' : undefined)}  end to="/blazer" >Blazer</NavLink>
          </div>

          <div className="button-buscador__container">
            <button className="button-buscador__productos--button">
            <NavLink className="button-buscador__productos--button" to="/blusa">
            <a> <img className="button-buscador__productos--svg"  src={blusa} alt="Logo de la página" /> </a>
            </NavLink>
            </button>
            <NavLink className={({ isActive }) => (isActive ? 'active' : undefined)}  end to="/blusa" >Blusa</NavLink>
          </div>

          <div className="button-buscador__container">
            <button className="button-buscador__productos--button">
            <NavLink className="button-buscador__productos--button" to="/bolso">
            <a> <img className="button-buscador__productos--svg"  src={bolso} alt="Logo de la página" /> </a>
            </NavLink>
            </button>
            <NavLink className={({ isActive }) => (isActive ? 'active' : undefined)}  end to="/bolso" >Bolso</NavLink>
          </div>

          <div className="button-buscador__container">
            <button className="button-buscador__productos--button">
            <NavLink className="button-buscador__productos--button" to="/botas">
            <a> <img className="button-buscador__productos--svg"  src={botas} alt="Logo de la página" /> </a>
            </NavLink>
            </button>
            <NavLink className={({ isActive }) => (isActive ? 'active' : undefined)}  end to="/botas" >Botas</NavLink>
          </div>

          <div className="button-buscador__container">
            <button className="button-buscador__productos--button">
            <NavLink className="button-buscador__productos--button" to="/botines">
            <a> <img className="button-buscador__productos--svg"  src={botines} alt="Logo de la página" /> </a>
            </NavLink>
            </button>
            <NavLink className={({ isActive }) => (isActive ? 'active' : undefined)}  end to="/botines" >Botines</NavLink>
          </div>

          <div className="button-buscador__container">
            <button className="button-buscador__productos--button">
            <NavLink className="button-buscador__productos--button" to="/bufanda">
            <a> <img className="button-buscador__productos--svg"  src={bufanda} alt="Logo de la página" /> </a>
            </NavLink>
            </button>
            <NavLink className={({ isActive }) => (isActive ? 'active' : undefined)}  end to="/bufanda" >Bufanda</NavLink>
          </div>

          <div className="button-buscador__container">
            <button className="button-buscador__productos--button">
            <NavLink className="button-buscador__productos--button" to="/camisa">
            <a> <img className="button-buscador__productos--svg"  src={camisa} alt="Logo de la página" /> </a>
            </NavLink>
            </button>
            <NavLink className={({ isActive }) => (isActive ? 'active' : undefined)}  end to="/camisa" >Camisa</NavLink>
          </div>

          

          <div className="button-buscador__container">
            <button  className="button-buscador__productos--button">
            <NavLink className="button-buscador__productos--button" to="/chaqueta">
              <a> <img className="button-buscador__productos--svg"  src={chaqueta} alt="Logo de la página" /> </a>
                </NavLink>
            </button>
            <NavLink className={({ isActive }) => (isActive ? 'active' : undefined)}  end to="/chaqueta" >Chaqueta</NavLink>
          </div>

          <div className="button-buscador__container">
            <button className="button-buscador__productos--button">
            <NavLink className="button-buscador__productos--button" to="/cinturon">
            <a> <img className="button-buscador__productos--svg"  src={cinturon} alt="Logo de la página" /> </a>
            </NavLink>
            </button>
            <NavLink className={({ isActive }) => (isActive ? 'active' : undefined)}  end to="/cinturon" >Cinturon</NavLink>
          </div>

          <div className="button-buscador__container">
            <button className="button-buscador__productos--button">
            <NavLink className="button-buscador__productos--button" to="/collar">
            <a> <img className="button-buscador__productos--svg"  src={collar} alt="Logo de la página" /> </a>
            </NavLink>
            </button>
            <NavLink className={({ isActive }) => (isActive ? 'active' : undefined)}  end to="/collar" >Collar</NavLink>
          </div>

          <div className="button-buscador__container">
            <button className="button-buscador__productos--button">
            <NavLink className="button-buscador__productos--button" to="/falda">
            <a> <img className="button-buscador__productos--svg"  src={falda} alt="Logo de la página" /> </a>
            </NavLink>
            </button>
            <NavLink className={({ isActive }) => (isActive ? 'active' : undefined)}  end to="/falda" >Falda</NavLink>
          </div>

          <div className="button-buscador__container">
            <button className="button-buscador__productos--button">
            <NavLink className="button-buscador__productos--button" to="/jeans">
            <a> <img className="button-buscador__productos--svg"  src={jeans} alt="Logo de la página" /> </a>
            </NavLink>
            </button>
            <NavLink className={({ isActive }) => (isActive ? 'active' : undefined)}  end to="/jeans" >Jeans</NavLink>
          </div>

          <div className="button-buscador__container">
            <button className="button-buscador__productos--button">
            <NavLink className="button-buscador__productos--button" to="/jockey">
            <a> <img className="button-buscador__productos--svg"  src={jockey} alt="Logo de la página" /> </a>
            </NavLink>
            </button>
            <NavLink className={({ isActive }) => (isActive ? 'active' : undefined)}  end to="/jockey" >Jockey</NavLink>
          </div>

          <div className="button-buscador__container">
            <button className="button-buscador__productos--button">
            <NavLink className="button-buscador__productos--button" to="/lentes">
            <a> <img className="button-buscador__productos--svg"  src={lentes} alt="Logo de la página" /> </a>
            </NavLink>
            </button>
            <NavLink className={({ isActive }) => (isActive ? 'active' : undefined)}  end to="/lentes" >Lentes</NavLink>
          </div>

          <div className="button-buscador__container">
            <button className="button-buscador__productos--button">
            <NavLink className="button-buscador__productos--button" to="/pack">
        <img className="button-buscador__productos--svg" src={pack} alt="Logo de la página" />
            </NavLink>
            </button>
            <NavLink className={({ isActive }) => (isActive ? 'active' : undefined)}  end to="/pack" >Pack</NavLink>
          </div>

          <div className="button-buscador__container">
            <button className="button-buscador__productos--button">
            <NavLink className="button-buscador__productos--button" to="/pantalon">
        <img className="button-buscador__productos--svg" src={pantalon} alt="Logo de la página" />
            </NavLink>
            </button>
            <NavLink className={({ isActive }) => (isActive ? 'active' : undefined)}  end to="/pantalon" >Pantalon</NavLink>
          </div>

          <div className="button-buscador__container">
            <button className="button-buscador__productos--button">
            <NavLink className="button-buscador__productos--button" to="/pañuelos">
            <a> <img className="button-buscador__productos--svg"  src={panuelo} alt="Logo de la página" /> </a>
            </NavLink>
            </button>
            <NavLink className={({ isActive }) => (isActive ? 'active' : undefined)}  end to="/pañuelos" >Pañuelos</NavLink>
          </div>

          <div className="button-buscador__container">
            <button className="button-buscador__productos--button">
            <NavLink className="button-buscador__productos--button" to="/pendientes">
            <a> <img className="button-buscador__productos--svg"  src={pendientes} alt="Logo de la página" /> </a>
            </NavLink>
            </button>
            <NavLink className={({ isActive }) => (isActive ? 'active' : undefined)}  end to="/pendientes" >Pendientes</NavLink>
          </div>

          <div className="button-buscador__container">
            <button className="button-buscador__productos--button">
            <NavLink className="button-buscador__productos--button" to="/polera">
            <a> <img className="button-buscador__productos--svg"  src={polera} alt="Logo de la página" /> </a>
            </NavLink>
            </button>
            <NavLink className={({ isActive }) => (isActive ? 'active' : undefined)}  end to="/polera" >Polera</NavLink>
          </div>

          <div className="button-buscador__container">
            <button className="button-buscador__productos--button">
            <NavLink className="button-buscador__productos--button" to="/sandalias">
            <a> <img className="button-buscador__productos--svg"  src={sandalias} alt="Logo de la página" /> </a>
            </NavLink>
            </button>
            <NavLink className={({ isActive }) => (isActive ? 'active' : undefined)}  end to="/sandalias" >Sandalias</NavLink>
          </div>

          <div className="button-buscador__container">
            <button className="button-buscador__productos--button">
            <NavLink className="button-buscador__productos--button" to="/top">
            <a> <img className="button-buscador__productos--svg"  src={top} alt="Logo de la página" /> </a>
            </NavLink>
            </button>
            <NavLink className={({ isActive }) => (isActive ? 'active' : undefined)}  end to="/top" >Top</NavLink>
          </div>

          <div className="button-buscador__container">
            <button className="button-buscador__productos--button">
            <NavLink className="button-buscador__productos--button" to="/vestido">
            <a> <img className="button-buscador__productos--svg"  src={vestido} alt="Logo de la página" /> </a>
            </NavLink>
            </button>
            <NavLink className={({ isActive }) => (isActive ? 'active' : undefined)}  end to="/vestido" >Vestido</NavLink>
          </div>

          <div className="button-buscador__container">
            <button className="button-buscador__productos--button">
            <NavLink className="button-buscador__productos--button" to="/zapatillas">
            <a> <img className="button-buscador__productos--svg"  src={zapatillas} alt="Logo de la página" /> </a>
            </NavLink>
            </button>
            <NavLink className={({ isActive }) => (isActive ? 'active' : undefined)}  end to="/zapatillas" >Zapatillas</NavLink>
          </div>

          <div className="button-buscador__container">
            <button className="button-buscador__productos--button">
            <NavLink className="button-buscador__productos--button" to="/zapatos">
            <a> <img className="button-buscador__productos--svg"  src={zapatos} alt="Logo de la página" /> </a>
            </NavLink>
            </button>
            <NavLink className={({ isActive }) => (isActive ? 'active' : undefined)}  end to="/zapatos" >Zapatos</NavLink>
          </div>




          {/* <!-- Botón siguiente pestaña --> */}

          
        </div>
      </div>

    </div>

    

   


    </div>


  </div>
  </div>
  </div>
  </div>


  )
}
