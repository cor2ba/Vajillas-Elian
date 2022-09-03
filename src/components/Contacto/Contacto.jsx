import React from "react";
import Estilo from "./Contacto.module.css";
import Navegador from "../Navegador/Navegador";
import WhatsApp from "@mui/icons-material/WhatsApp";

const Contactos = () => {
  return (
    <div className={Estilo.Contenedor}>
      <Navegador color="contacto"></Navegador>
      <div className={Estilo.ContenedorDeSecciones}>
        <div className={Estilo.Sección}>
          <WhatsApp
            style={{ color: "green", width: 200, height: 200 }}
          ></WhatsApp>
          <div className={Estilo.Contactar}>
            <h1 className={Estilo.Titulo}>PRIMERA OPCIÓN:</h1>
            <h2 className={Estilo.Subtitulo}>+54 9 1138332820</h2>
          </div>
          <button className={Estilo.Boton}>ENVIAR MENSAJE</button>
        </div>
        <div className={Estilo.Sección}>
          <WhatsApp
            style={{ color: "green", width: 200, height: 200 }}
          ></WhatsApp>
          <div className={Estilo.Contactar}>
            <h1 className={Estilo.Titulo}>PRIMERA OPCIÓN:</h1>
            <h2 className={Estilo.Subtitulo}>+54 9 1138332820</h2>
          </div>
          <button className={Estilo.Boton}>ENVIAR MENSAJE</button>
        </div>
        <div className={Estilo.Sección}>
          <WhatsApp
            style={{ color: "green", width: 200, height: 200 }}
          ></WhatsApp>
          <div className={Estilo.Contactar}>
            <h1 className={Estilo.Titulo}>PRIMERA OPCIÓN:</h1>
            <h2 className={Estilo.Subtitulo}>+54 9 1138332820</h2>
          </div>
          <button className={Estilo.Boton}>ENVIAR MENSAJE</button>
        </div>
      </div>
    </div>
  );
};

export default Contactos;
