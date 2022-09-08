import React from "react";
import Estilo from "./Contacto.module.css";
import Navegador from "../Navegador/Navegador";
import WhatsApp from "@mui/icons-material/WhatsApp";
import Instagram from "@mui/icons-material/Instagram";

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
          <a
            Target="_blank"
            href="https://api.whatsapp.com/send/?phone=5491138332820&text&type=phone_number&app_absent=0"
            className={Estilo.Boton}
          >
            ¡ENVIAR MENSAJE!
          </a>
        </div>
        <div className={Estilo.Sección}>
          <WhatsApp
            style={{ color: "green", width: 200, height: 200 }}
          ></WhatsApp>
          <div className={Estilo.Contactar}>
            <h1 className={Estilo.Titulo}>SEGUNDA OPCIÓN:</h1>
            <h2 className={Estilo.Subtitulo}>+54 9 1166669410</h2>
          </div>
          <a
            Target="_blank"
            href="https://api.whatsapp.com/send/?phone=5491166669410&text&type=phone_number&app_absent=0"
            className={Estilo.Boton}
          >
            ¡ENVIAR MENSAJE!
          </a>
        </div>
        {/* <div className={Estilo.Sección}>
          <Instagram
            style={{ color: "orange", width: 200, height: 200 }}
          ></Instagram>
          <div className={Estilo.Contactar}>
            <h1 className={Estilo.Titulo}>CUENTA DE INSTAGRAM:</h1>
            <h2 className={Estilo.Subtitulo}>+54 9 1138332820</h2>
          </div>
          <a
            Target="_blank"
            href="https://api.whatsapp.com/send/?phone=5491138332820&text&type=phone_number&app_absent=0"
            className={Estilo.Boton}
          >
            ENVIAR MENSAJE
          </a>
        </div> */}
      </div>
    </div>
  );
};

export default Contactos;
