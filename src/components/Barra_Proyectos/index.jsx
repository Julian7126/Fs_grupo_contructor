import React from 'react';
import "./styles.scss";

const ProyectosNavegador = ({ onTabChange }) => {
  return (
    <div className='main-bar'>
      <div className="container">
        <div className="row justify-content-end">
          <div className="col-lg-2 col-md-2 col-sm-6">
            <button className='button' onClick={() => onTabChange("proyects")}>Finalizados</button>
          </div>
          <div className="col-lg-2 col-md-2 col-sm-6">
            <button className='button' onClick={() => onTabChange("inProgress")}>En Progreso</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProyectosNavegador;
