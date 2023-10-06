import './Register.css'
import axios from "axios"
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function RegistroForm() {
  const navigate = useNavigate();
  const [usuario, setUsuario] = useState({});

  const handleSetUsuario = ({ target: { value, name } }) => {
    const field = {};
    field[name] = value;
    setUsuario({ ...usuario, ...field });
  };

  const validarCamposLlenos =  ()=>{
    const camposRequeridos = [
        "nombre",
        "apellido",
        "email",
        "password",
        "altura",
        "cintura",
        "busto",
        "peso",
        "state"
    ];
    return camposRequeridos.every((campo)=> usuario[campo]?.trim() !== ""); 
  };

  const registrarUsuario = async () => {

    console.log(usuario)

    if (!(validarCamposLlenos())) {
      toast.error("Todos los campos son obligatorios", {
        position: "top-center",
        autoClose: 5000,
        hideProgressBar: true,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: false,
      });
      return;
    }


    try {

        console.log(usuario)
        const urlServer =  import.meta.env.VITE_SERVER_URL + "/api/user";
        const endpoint = "/register"

        await axios.post(urlServer + endpoint, usuario)
        toast.success("Usuario registrado con éxito 😀", { autoClose: 2000 });
       

      navigate("/login");
    } catch (error) {
          if(usuario.email == usuario.email){

          toast.error("Algo salió mal...", {
            position: "top-center",
            autoClose: 5000,
            hideProgressBar: true,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: false,
          });
          console.log(error);
          }
    }
  };


  return (
    <div className='container mt-4 mb-4'>
      <form className="row g-3">
        <div className="col-md-6">
          <label
            htmlFor="inputPassword4"
            className="form-label"
          >Nombre</label>
          <input
            value={usuario.nombre}
            onChange={handleSetUsuario}
            type="text"
            name="nombre"
            className="form-control"
            placeholder="First name"
            aria-label="First name"
            title='Nombre Obligatorio'
            required />
        </div>
        <div className="col">
          <label
            htmlFor="inputPassword4"
            className="form-label"
          >Apellido</label>
          <input
            value={usuario.apellido}
            onChange={handleSetUsuario}
            type="text"
            name="apellido"
            className="form-control"
            placeholder="Last name"
            aria-label="Last name"
            required />
        </div>

        <div className="row g-3">
          <div className="col">
            <label
              htmlFor="inputEmail4"
              className="form-label">
              Email
            </label>
            <input
              value={usuario.email}
              onChange={handleSetUsuario}
              type="email"
              name="email"
              className="form-control"
              id="inputEmail4"
              placeholder="Example@email.com"
              required
            />
          </div>

          <div className="col-md-6">
            <label
              htmlFor="inputPassword4"
              className="form-label"
            >Password
            </label>
            <input
              value={usuario.password}
              onChange={handleSetUsuario}
              type="password"
              name='password'
              className="form-control"
              id="inputPassword4"
              required
            />
          </div>
        </div>
        <div className="col-md-2">
          <label
            htmlFor="cintura"
            className="form-label">Cadera</label>
          <input
            value={usuario.cintura}
            onChange={handleSetUsuario}
            type="text"
            name='cintura'
            className="form-control"
            id="cintura"
            pattern='[0-9]{1,3}'
            title='solo numero positivos'
            required
          />
        </div>
        <div className="col-md-2">
          <label
            htmlFor="busto"
            className="form-label">Busto</label>
          <input
          value={usuario.busto}
          onChange={handleSetUsuario}
            type="text"
            name='busto'
            className="form-control"
            id="busto"
            pattern='[0-9]{1,3}'
            title='solo numero positivos'
            required
          />
        </div>
        <div className="col-md-2">
          <label
            htmlFor="altura"
            className="form-label">Altura</label>
          <input
          value={usuario.altura}
          onChange={handleSetUsuario}
            type="text"
            name='altura'
            className="form-control"
            id="altura"
            pattern='[0-9]{1,3}'
            title='solo numero positivos'
            required />
        </div>
        <div className="col-md-2">
          <label
            htmlFor="peso"
            className="form-label">Peso</label>
          <input
          value={usuario.peso}
          onChange={handleSetUsuario}
            type="text"
            name='peso'
            className="form-control"
            id="peso"
            pattern='[0-9]{1,3}'
            title='solo numeros positivos'
            required
          />
        </div>
        <div className="col-md-2">
          <label
            htmlFor="peso"
            className="form-label">Cintura</label>
          <input
          value={usuario.cadera}
          onChange={handleSetUsuario}
            type="text"
            name='cadera'
            className="form-control"
            id="cadera"
            pattern='[0-9]{1,3}'
            title='solo numeros positivos'
            required
          />
        </div>
        <div className="col-md-2">
          <label
            htmlFor="peso"
            
            className="form-label">Muslo</label>
          <input
          value={usuario.muslo}
          onChange={handleSetUsuario}
            type="text"
            name='muslo'
            className="form-control"
            id="muslo"
            pattern='[0-9]{1,3}'
            title='solo numeros positivos'
            required
          />
        </div>
        <div className="col-md-2">
          <label
            htmlFor="peso"
            className="form-label">Largo Tiro</label>
          <input
          value={usuario.largoT}
          onChange={handleSetUsuario}
            type="text"
            name='largo_tiro'
            className="form-control"
            id="largoT"
            pattern='[0-9]{1,3}'
            title='solo numeros positivos'
            required
          />
        </div>
        <div className="col-md-2">
          <label
            htmlFor="peso"
            className="form-label">Largo Pierna</label>
          <input
          value={usuario.largoP}
          onChange={handleSetUsuario}
            type="text"
            name='largo_pierna'
            className="form-control"
            id="largoP"
            pattern='[0-9]{1,3}'
            title='solo numeros positivos'
            required
          />
        </div>
        <div className="col-md-2">
          <label
            htmlFor="peso"
            className="form-label">Hombro</label>
          <input
          value={usuario.hombro}
          onChange={handleSetUsuario}
            type="text"
            name='hombro'
            className="form-control"
            id="hombro"
            pattern='[0-9]{1,3}'
            title='solo numeros positivos'
            required
          />
        </div>
        <div className="col-md-2">
          <label
            htmlFor="peso"
            className="form-label">Largo Manga</label>
          <input
          value={usuario.largoM}
          onChange={handleSetUsuario}
            type="text"
            name='largo_manga'
            className="form-control"
            id="largoM"
            pattern='[0-9]{1,3}'
            title='solo numeros positivos'
            required
          />
        </div>
        <div className="col-md-2">
          <label
            htmlFor="peso"
            className="form-label">Largo Pie</label>
          <input
          value={usuario.largoPie}
          onChange={handleSetUsuario}
            type="text"
            name='largo_pie'
            className="form-control"
            id="largoPie"
            pattern='[0-9]{1,3}'
            title='solo numeros positivos'
            required
          />
        </div>
        <div className="col-md-2">
          <label
            htmlFor="peso"
            className="form-label">Empeine</label>
          <input
          value={usuario.empeine}
          onChange={handleSetUsuario}
            type="text"
            name='empeine'
            className="form-control"
            id="empeine"
            pattern='[0-9]{1,3}'
            title='solo numeros positivos'
            required
          />
        </div>
        


        <div className="col-md-2">
          <label htmlFor="inputState" className="form-label">State</label>
          <select 
            value={usuario.state}
            onChange={handleSetUsuario}
            name='state'
            id="inputState"
            className="form-select"
          >
            <option value="">selecciona una categoria</option>
            <option value="trianguloInvertido">Triangulo Invertido</option>
            <option value="relojDeArena">Reloj de arena</option>
            <option value="triangulo">Triangulo</option>
            <option value="rectangular">Rectangular</option>
            <option value="ovalado">Ovalado</option>
          </select>
        </div>

        <div className="col-12">
          <div className="form-check text-start">
            <input 
            className="form-check-input"
              type="checkbox" 
              id="gridCheck" 
              title="debes aceptar terminos y condiciones" 
              required />
            <label 
              className="form-check-label " 
              htmlFor="flexCheckDefault">
              Aceptar terminos y condiciones
            </label>
          </div>
        </div>
        <div className="col-12">
       
          {/* <button 
          onClick={(e) => { e.preventDefault();registrarUsuario;console.log(usuario)} }
          type="submit" 
          
          className="btn btn-primary">Registrar
          </button> */}
         
        </div>
      </form>
      <button 
          onClick={registrarUsuario}          
          className="btn btn-primary">Registrar
          </button>
    </div>
  )
  }
