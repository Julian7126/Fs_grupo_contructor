import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './styles.scss';

const NavBar = () => {
  const navigate = useNavigate();
  const [showMobileNavbar, setShowMobileNavbar] = useState(false);

  const toggleMobileNavbar = () => {
    setShowMobileNavbar(!showMobileNavbar);
  };

  return (
    <>    
    <div className="container_global">
      <div className="left_items">
       
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
   
   
    <div className='container_button_app'>
        {showMobileNavbar && (
          <div className="mobile_navbar">
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
        )}
        <button className="button_app" onClick={toggleMobileNavbar}>
          {showMobileNavbar ? '✕' : '☰'}
        </button>
    </div>
          </>
  );
};

export default NavBar;
