
import { useState, useContext } from "react";
import { AuthContext } from "../../context/AuthContex";


import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import axios from "axios";

export default function RegistroForm() {
  const { setUsuario } = useContext(AuthContext);
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);

  const [usuario, setUsuarioLocal] = useState({
    correo: "",
    password: "",
  });

  const handleSetUsuario = ({ target: { value, name } }) => {
    const field = {};
    field[name] = value;
    setUsuarioLocal({ ...usuario, ...field });
  };

  const iniciarSesion = async () => {
    const urlServer =  import.meta.env.VITE_SERVER_URL + "/api/user";
    const endpoint = "/login";

    const { email, password } = usuario;
    try {
      if (!email || !password) {
        return alert("Correo y contraseña son obligatorios");
      }

      setLoading(true);

      
        const {data} = await axios.post(urlServer + endpoint, usuario);

        toast.success("Usuario identificado con éxito 😀", { autoClose: 3000 });
        localStorage.setItem("token", data.token); // Guardar el token en el localStorage
        localStorage.setItem("usuario", JSON.stringify(data.usuario)); // Guardar el token en el localStorage
        // setUsuario(); // Debes proporcionar el usuario correcto aquí si es necesario
        setLoading(false);
        navigate("/buscador");
      
    } catch (error) {
      alert("Error al iniciar sesión");
      console.error(error);
    }
  };

  return (
    <div className="col-10 col-sm-6 col-md-3 m-auto mt-5">
      <h1>Iniciar Sesión</h1>
      <hr />
      <div className="form-group mt-1">
        <label>Correo Electrónico</label>
        <input
          value={usuario.email}
          onChange={handleSetUsuario}
          type="email" // Cambiado de "correo" a "email"
          name="email"
          className="form-control"
          placeholder="Ingrese su correo"
        />
      </div>
      <div className="form-group mt-1">
        <label>Contraseña</label>
        <input
          value={usuario.password}
          onChange={handleSetUsuario}
          type="password"
          name="password"
          className="form-control"
          placeholder="Contraseña"
        />
      </div>

      <button onClick={iniciarSesion} className="btn btn-light mt-3">
        {loading ? "Cargando..." : "Iniciar Sesión"}
      </button>
    </div>
  );
}
