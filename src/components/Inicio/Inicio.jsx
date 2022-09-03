import React from "react";
import Navegador from "../Navegador/Navegador";
import Estilos from "./Inicio.module.css";
import Pie from "../Pie/Pie";

const Inicio = () => {
  const color = "inicio";
  return (
    <div>
      <div className={Estilos.Contenedor}>
        <Navegador color={color} />
        <div className={Estilos.Textos}>
          <h1 className={Estilos.TextoAlquiler}>ALQUILES DE VAJILLAS</h1>
          <h2 className={Estilos.TextoSlogan}>
            5 años haciendo felíz a nuestros clientes.
          </h2>
        </div>
      </div>
      <Pie />
    </div>
  );
};

export default Inicio;
