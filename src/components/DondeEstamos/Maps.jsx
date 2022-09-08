import React from "react";
import GoogleMapReact from "google-map-react";
import Estilos from "./DondeEstamos.module.css";

export default function SimpleMap() {
  return (
    <div className={Estilos.ContenedorMapa}>
      <GoogleMapReact
        bootstrapURLKeys={{ key: "AIzaSyBxkPUdGzTTZ7xbJH-doHXuPENlyRZxOJw" }}
        zoom={19}
        center={{
          lat: -34.81567812661789,
          lng: -58.30026918699596,
        }}
        markers={[
          {
            lat: -34.81567812661789,
            lng: -58.30026918699596,
          },
        ]}
      />
    </div>
  );
}
