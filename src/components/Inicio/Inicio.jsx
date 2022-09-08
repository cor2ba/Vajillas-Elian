import React from "react";
import Navegador from "../Navegador/Navegador";
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
      </div>
    </div>
  );
};

export default Inicio;
