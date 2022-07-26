import React from "react";
import Estilos from "./Navegador.module.css";
import { Link } from "react-router-dom";
import menuimg from "../../imagenes/hamburgermenu.png";

const Navegador = ({ color }) => {
  return (
    <div>
      <div className={Estilos.ContainerResponsive}>
        <label for="menu" className={Estilos.MenuImg}>
          <img className={Estilos.Img} src={menuimg} alt="Menu" />
        </label>
        <input type="checkbox" id="menu" className={Estilos.NavInput} />
        <div className={Estilos.Menu}>
          <Link className={Estilos.No} to="/">
            {color === "inicio" ? (
              <h1 className={Estilos.LinkColor}>INICIO</h1>
            ) : (
              <h1 className={Estilos.Link}>INICIO</h1>
            )}
          </Link>
          <Link className={Estilos.No} to="/productos">
            {color === "productos" ? (
              <h1 className={Estilos.LinkColor}>PRODUCTO</h1>
            ) : (
              <h1 className={Estilos.Link}>CONTACTO</h1>
            )}
          </Link>
          <Link className={Estilos.No} to="/contacto">
            {color === "contacto" ? (
              <h1 className={Estilos.LinkColor}>CONTACTO</h1>
            ) : (
              <h1 className={Estilos.Link}>CONTACTO</h1>
            )}
          </Link>
          <Link className={Estilos.No} to="/dondeestamos">
            {color === "dondeestamos" ? (
              <h1 className={Estilos.LinkColor}>DONDE ESTAMOS</h1>
            ) : (
              <h1 className={Estilos.Link}>DONDE ESTAMOS</h1>
            )}
          </Link>
        </div>
      </div>
      <div className={Estilos.Contenedor}>
        <div className={Estilos.ContenedorDeMarca}>
          <h1 className={Estilos.Logo}>V.E</h1>
          <h1 className={Estilos.TextoElian}>Elian</h1>
        </div>
        <div className={Estilos.ContenedorDeLinks}>
          <Link className={Estilos.No} to="/">
            {color === "inicio" ? (
              <h1 className={Estilos.LinkColor}>INICIO</h1>
            ) : (
              <h1 className={Estilos.Link}>INICIO</h1>
            )}
          </Link>
          <Link className={Estilos.No} to="/productos">
            {color === "productos" ? (
              <h1 className={Estilos.LinkColor}>PRODUCTOS</h1>
            ) : (
              <h1 className={Estilos.Link}>PRODUCTOS</h1>
            )}
          </Link>
          <Link className={Estilos.No} to="/contacto">
            {color === "contacto" ? (
              <h1 className={Estilos.LinkColor}>CONTACTO</h1>
            ) : (
              <h1 className={Estilos.Link}>CONTACTO</h1>
            )}
          </Link>
          <Link className={Estilos.No} to="/dondeestamos">
            {color === "dondeestamos" ? (
              <h1 className={Estilos.LinkColor}>¿DONDE ESTAMOS?</h1>
            ) : (
              <h1 className={Estilos.Link}>¿DONDE ESTAMOS?</h1>
            )}
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Navegador;
