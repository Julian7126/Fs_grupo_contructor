import React from 'react';
import "./styles.scss";
import images from "../../assets/img"

const ProyectosNavegador = ({ onTabChange }) => {
  return (
    <div className='main-bar'>
      <div className="container">
        <div className='row align-items-center'>
          <div className='col-lg-4 col-md-4 col-sm-12'>
            <div className='img_logo_container'>
              <img className='img_logo' src={images.imgLogo} alt="logo" />
            </div>
          </div>

          <div className="col-lg-8 col-md-8 col-sm-12">
            <div className="row justify-content-end">
              <div className="col-lg-4 col-md-4 col-sm-4">
                <button className='button_barra' onClick={() => onTabChange("proyects")}>F I N A L I Z A D O S</button>
              </div>
              <div className="col-lg-4 col-md-4 col-sm-4">
                <button className='button_barra' onClick={() => onTabChange("inProgress")}>E N - P R O G R E S O</button>
              </div>
              <div className="col-lg-4 col-md-4 col-sm-4">
                <button className='button_barra' onClick={() => onTabChange("proyectsVarios")}>V A R I O S</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProyectosNavegador;
