import React from "react";
import Estilos from "./DondeEstamos.module.css";
import Navegador from "../Navegador/Navegador";
import SimpleMap from "./Maps";

const DondeEstamos = () => {
  return (
    <div className={Estilos.Contenedor}>
      <Navegador color="dondeestamos"></Navegador>
      <div className={Estilos.ContenedorDeUbicación}>
        <SimpleMap />
        <div className={Estilos.Info}>
          <h1 className={Estilos.Titulo}>FLORENCIO VARELA</h1>
          <hr />
          <h1 className={Estilos.Titulo2}>GOBERNADOR COSTA</h1>
          <hr />
          <h1 className={Estilos.Titulo3}>CALLE 519 NÚMERO 2447</h1>
        </div>
      </div>
    </div>
  );
};

export default DondeEstamos;
