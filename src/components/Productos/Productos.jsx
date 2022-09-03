import React from "react";
import Estilo from "./Productos.module.css"
import Navegador from "../Navegador/Navegador";
import Vajillas from "../Vajillas.jsx/Vajillas";

const Productos = () => {
    return(
        <div className={Estilo.Contenedor}>
            <Navegador color="productos"></Navegador>
            <Vajillas></Vajillas>
        </div>
    )
}

export default Productos