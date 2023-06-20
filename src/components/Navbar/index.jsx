import React from 'react';
import { useNavigate } from 'react-router-dom';
import './styles.scss';


const NavBar = () => {
  const navigate = useNavigate();

  return (
    <div className="container_global">
      <div className="left_items">
        <button className="button" onClick={() => navigate('/')} >Home</button>
      </div>
      <div className="right_items">
        <button className="button"onClick={() => navigate('/category/:categoryId')} >Proyectos</button>
        <button className="button"onClick={() => navigate('/colaboradores')} >Colaboradores</button>
        <button className="button" onClick={() => navigate('/contacto')}>Contacto</button>
        <button className="button" onClick={() => navigate('/sobreNosotros')}>Sobre Nosotros</button>
      </div>
    
    </div>
  );
};

export default NavBar;
