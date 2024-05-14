import React from "react";
import "./styles.scss";
import Footer from "../../components/Footer/index";
import "bootstrap/dist/css/bootstrap.min.css";

const SobreNosotros = () => {
  return (
    <div className="contenedor-main-sobre-nosotros">
      <div className="contenedor_de_splider">
        <img
          src="./FsGrupo.png"
          alt="Logo de la empresa"
          width={400}
          height={400}
          className="logo-fsgrupo"
        />
      </div>
      <div className="contenedor-mision">
        <p className="mision-titulo">MISIÓN</p>
        <p className="mision-texto">
          Ofrecer a los clientes servicios de alta calidad en obra civil,
          arquitectónica con ingeniería de valor y mantenimiento en construcción
          de proyectos.
        </p>
      </div>
      <div className="contenedor-vision">
        <p className="vision-titulo">VISIÓN</p>
        <p className="vision-texto">
          Ser una empresa líder a nivel nacional en el diseño y construcción de
          proyectos en las diferentes áreas de la ingeniería y arquitectura.
        </p>
      </div>
      <Footer />
    </div>
  );
};

export default SobreNosotros;
