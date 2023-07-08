import React from 'react';
import "./styles.scss";
import images from "../../assets/img"

const ProyectosNavegador = ({ onTabChange }) => {
  return (
    <div className='main-bar'>
      <div className="container">
        <div className='row align-items-center'>
          <div className='col-lg-3 col-md-2 col-sm-6'>
            <div className='img_logo_container'>
              <img className='img_logo' src={images.imgLogo} alt="logo" />
            </div>
          </div>
          <div className="col-lg-5 col-md-2 col-sm-6">
            <button className='button_barra' onClick={() => onTabChange("proyects")}>F I N A L I Z A D O S</button>
          </div>
          <div className="col-lg-2 col-md-2 col-sm-6">
            <button className='button_barra' onClick={() => onTabChange("inProgress")}>E N - P R O G R E S O</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProyectosNavegador;
