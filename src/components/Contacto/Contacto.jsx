import React from "react";
import Estilo from "./Contacto.module.css"
import Navegador from "../Navegador/Navegador";

const Contactos = () => {
    return(
        <div className={Estilo.Container}>
            <Navegador color="contacto"></Navegador>
        </div>
    )
}

export default Contactos