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
                <button className='button_barra' onClick={() => onTabChange("proyects")}>C O N T R U C C I O N</button>
              </div>
              <div className="col-lg-4 col-md-4 col-sm-4">
                <button className='button_barra' onClick={() => onTabChange("inProgress")}>R E M O D E L A C I O N</button>
              </div>
              <div className="col-lg-4 col-md-4 col-sm-4">
                <button className='button_barra' onClick={() => onTabChange("proyectsVarios")}>I N S P E C C I O N</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProyectosNavegador;
