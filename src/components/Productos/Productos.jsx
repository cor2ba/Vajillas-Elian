import React from "react";
import Estilo from "./Productos.module.css"
import Navegador from "../Navegador/Navegador";

const Productos = () => {
    return(
        <div className={Estilo.Container}>
            <Navegador color="productos"></Navegador>
        </div>
    )
}

export default Productos