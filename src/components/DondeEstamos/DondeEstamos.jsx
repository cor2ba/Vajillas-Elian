import React from "react";
import Estilos from "./DondeEstamos.module.css"
import Navegador from "../Navegador/Navegador";

const DondeEstamos = () => {
    return(
        <div className={Estilos.Container}>
            <Navegador color="dondeestamos"></Navegador>
        </div>
    )
}

export default DondeEstamos