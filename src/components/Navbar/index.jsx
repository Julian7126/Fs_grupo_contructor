import React from 'react';
// import { useNavigate } from 'react-router-dom';
import './styles.scss';


const NavBar = () => {
  // const navigate = useNavigate();

  return (
    <div className="container_global">
      <div className="left_items">
        <button className="button" >Home</button>
      </div>
      <div className="right_items">
        <button className="button" >Proyectos</button>
        <button className="button" >Colaboradores</button>
        <button className="button" >Contacto</button>
        <button className="button" >Sobre Nosotros</button>
      </div>
    
    </div>
  );
};

export default NavBar;
