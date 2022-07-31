import React from "react";
import Estilos from "./Vajillas.module.css";
import Mesas from "../../imagenes/Mesas.jpg";
import Mesitas from "../../imagenes/Mesitas.jpg";
import Accesorios from "../../imagenes/Accesorios.jpg";
import Manteleria from "../../imagenes/Manteleria.jpg";
import Cristaleria from "../../imagenes/Cristaleria.jpg";
import Cubiertos from "../../imagenes/Cubiertos.jpg";

const Vajillas = () => {
  return (
    <div className={Estilos.Container}>
      <div className={Estilos.Vajilla}>
        <img className={Estilos.Imagen} src={Mesas} alt="Mesas"></img>
        <div className={Estilos.ContenedorInvisible}>
          <h1>Mesas y sillas</h1>
          <p>Mesas de madera y sillas de plastico reforzadas.</p>
        </div>
      </div>
      <div className={Estilos.Vajilla}>
        <img className={Estilos.Imagen} src={Mesitas} alt="Mesitas"></img>
        <div className={Estilos.ContenedorInvisible}>
          <h1>Decoraciones</h1>
          <p>Juego de mesitas, cortinas y esqueleto para globos o luces.</p>
        </div>
      </div>
      <div className={Estilos.Vajilla}>
        <img className={Estilos.Imagen} src={Accesorios} alt="Accesorios"></img>
        <div className={Estilos.ContenedorInvisible}>
          <h1>Accesorios</h1>
          <p>Souveniles y cortinas.</p>
        </div>
      </div>
      <div className={Estilos.Vajilla}>
        <img className={Estilos.Imagen} src={Manteleria} alt="Manteleria"></img>
        <div className={Estilos.ContenedorInvisible}>
          <h1>Manteleria</h1>
          <p>Manteles rectangulares de todo tipo de colores.</p>
        </div>
      </div>
      <div className={Estilos.Vajilla}>
        <img className={Estilos.Imagen} src={Cubiertos} alt="Cubiertos"></img>
        <div className={Estilos.ContenedorInvisible}>
          <h1>Cubiertos, hieleras y canastas</h1>
          <p>
            Tenedor, cuchillo, cuchara, hielera grande o chica y canastas de
            pan.
          </p>
        </div>
      </div>
      <div className={Estilos.Vajilla}>
        <img
          className={Estilos.Imagen}
          src={Cristaleria}
          alt="Cristaleria"
        ></img>
        <div className={Estilos.ContenedorInvisible}>
          <h1>Cristaleria</h1>
          <p>Copas de vino, copas de brindis, copas de agua y vasos</p>
        </div>
      </div>
    </div>
  );
};

export default Vajillas;
