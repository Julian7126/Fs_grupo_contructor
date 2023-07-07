import React from 'react';
import { useNavigate } from 'react-router-dom';
import './styles.scss';

const NavBar = () => {
  const navigate = useNavigate();

  return (
    <div className="container_global">
      <div className="left_items">
        {/* <button className="button" onClick={() => navigate('/')}>Home</button> */}
      </div>
      <div className="right_items">
        <button className="button" onClick={() => navigate('/proyects')}>
          P R O Y E C T O S
        </button>
        <button className="button" onClick={() => navigate('/colaboradores')}>
         C O L A B O R A D O R E S
        </button>
        <button className="button" onClick={() => navigate('/contacto')}>
          C O N T A C T O
        </button>
        <button className="button" onClick={() => navigate('/sobreNosotros')}>
        S O B R E - N O S O T R O S
        </button>
      </div>
    </div>
  );
};

export default NavBar;
