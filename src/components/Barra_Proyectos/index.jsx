import React from 'react';
import "./styles.scss";
import images from "../../assets/img"

const ProyectosNavegador = ({ onTabChange }) => {
  return (
    <div className='main-bar'>
      <div className="container">
        <div className='row align-items-center'>
          <div className='col-lg-2 col-md-4 col-sm-12'>
            <div className='img_logo_container'>
              <img className='img_logo' src={images.imgLogo} alt="logo" />
            </div>
          </div>

          <div className="col-lg-10 col-md-8 col-sm-12"> {/* Cambiamos el ancho de la columna para que ocupe el espacio restante */}
            <div className="row justify-content-end">
              <div className="col-lg-3 col-md-3 col-sm-6"> {/* Cada botón ocupa 3 columnas en pantallas grandes y medianas, y 6 columnas en pantallas pequeñas */}
                <button className='button_barra' onClick={() => onTabChange("proyects")}>CONSTRUCCION</button>
              </div>
              <div className="col-lg-3 col-md-3 col-sm-6"> {/* Cada botón ocupa 3 columnas en pantallas grandes y medianas, y 6 columnas en pantallas pequeñas */}
                <button className='button_barra' onClick={() => onTabChange("inProgress")}>REMODELACION</button>
              </div>
              <div className="col-lg-3 col-md-3 col-sm-6"> {/* Cada botón ocupa 3 columnas en pantallas grandes y medianas, y 6 columnas en pantallas pequeñas */}
                <button className='button_barra' onClick={() => onTabChange("proyectsVarios")}>DISEÑO E INSOPECCION</button>
              </div>
              <div className="col-lg-3 col-md-3 col-sm-6"> {/* Cada botón ocupa 3 columnas en pantallas grandes y medianas, y 6 columnas en pantallas pequeñas */}
                <button className='button_barra' onClick={() => onTabChange("proyectsTransporte")}>TRASPORTES ESPECIALES</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProyectosNavegador;
