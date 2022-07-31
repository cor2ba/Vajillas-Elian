import React from "react";
import Estilos from "./Navegador.module.css";
import { Link } from "react-router-dom";

const Navegador = ({color}) => {
  return (
    <div className={Estilos.Contenedor}>
      <div className={Estilos.ContenedorDeMarca}>
        <h1 className={Estilos.Logo}>V.E</h1>
        <h1 className={Estilos.TextoElian}>Elian</h1>
      </div>
      <div className={Estilos.ContenedorDeLinks}>
        <Link className={Estilos.Link} to="/">{color === "inicio" ? <h1 className={Estilos.LinkColor}>INICIO</h1> : <h1 className={Estilos.Link}>INICIO</h1>}</Link>
        <Link className={Estilos.Link} to="/productos">{color === "productos" ? <h1 className={Estilos.LinkColor}>PRODUCTOS</h1> : <h1 className={Estilos.Link}>PRODUCTOS</h1>}</Link>
        <Link className={Estilos.Link} to="/contacto">{color === "contacto" ? <h1 className={Estilos.LinkColor}>CONTACTO</h1> : <h1 className={Estilos.Link}>CONTACTO</h1>}</Link>
        <Link className={Estilos.Link} to="/dondeestamos">{color === "dondeestamos" ? <h1 className={Estilos.LinkColor}>¿DONDE ESTAMOS?</h1> : <h1 className={Estilos.Link}>¿DONDE ESTAMOS?</h1>}</Link>
      </div>
    </div>
  );
};

export default Navegador;
