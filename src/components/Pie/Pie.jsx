import React from "react";
import Estilos from "./Pie.module.css";
import InstagramIcon from "@mui/icons-material/Instagram";
import FacebookIcon from "@mui/icons-material/Facebook";

const Pie = () => {
  return (
    <div className={Estilos.ContainerPrincipal}>
      <div className={Estilos.Container}>
        <div className={Estilos.Sección}>
            <h1 className={Estilos.Titulo}>REDES SOCIALES</h1>
          <div style={{display: "flex", justifyContent: "center"}}>
            <InstagramIcon
              style={{ color: "#fff", width: 50, height: 100 }}
            ></InstagramIcon>
            <FacebookIcon
              style={{ color: "#fff", width: 50, height: 100 }}
            ></FacebookIcon>
          </div>
        </div>
        <div className={Estilos.Sección}>
          <div>
            <h1 className={Estilos.Titulo}>¿DÓNDE ESTAMOS?</h1>
          </div>
          <div className={Estilos.Alinear}>
            <h1 className={Estilos.Subtitulos}>Calle 519 N°2447</h1>
            <h1 className={Estilos.Subtitulos}>
              Gobernador Costa, Florencio Varela.
            </h1>
          </div>
        </div>
        <div className={Estilos.Sección}>
          <div>
            <h1 className={Estilos.Titulo}>WHATSAPP</h1>
          </div>
          <div>
            <h1 className={Estilos.Subtitulos}>+54 9 11 3833-2820</h1>
            <h1 className={Estilos.Subtitulos}>+54 9 11 6666-9410</h1>
          </div>
        </div>
        <div className={Estilos.Sección}>
          <div>
            <h1 className={Estilos.Titulo}>HORARIO DE ATENCIÓN</h1>
          </div>
          <div className={Estilos.Alinear}>
            <h1 className={Estilos.Subtitulos}>
              Lunes a Viernes 15:00hs a 20:00hs
            </h1>
            <h1 className={Estilos.Subtitulos}>Sábados 17:00hs a 20:00hs</h1>
          </div>
        </div>
      </div>
      <div className={Estilos.Container2}> 
        <h1 className={Estilos.Subtitulos2}>
          © 2022. Vajillas Elian, Todos los derechos reservados.
        </h1>
      </div>
    </div>
  );
};

export default Pie;
