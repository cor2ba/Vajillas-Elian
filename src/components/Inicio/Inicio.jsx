import React from "react";
import Navegador from "../Navegador/Navegador";
import WhatsApp from "@mui/icons-material/WhatsApp";
import Estilos from "./Inicio.module.css";

const Inicio = () => {
  const color = "inicio";
  return (
    <div>
      <div className={Estilos.Contenedor}>
        <Navegador color={color} />
        <div className={Estilos.Textos}>
          <h1 className={Estilos.TextoAlquiler}>ALQUILES DE VAJILLAS</h1>
          <h2 className={Estilos.TextoSlogan}>
            Tus eventos con la mejor calidad.
          </h2>
        </div>
        <a
          Target="_blank"
          href="https://api.whatsapp.com/send/?phone=5491138332820&text&type=phone_number&app_absent=0"
        >
          <WhatsApp
            className={Estilos.WhatsApp}
            style={{ color: "green", width: 100, height: 100 }}
          ></WhatsApp>
        </a>
      </div>
    </div>
  );
};

export default Inicio;
