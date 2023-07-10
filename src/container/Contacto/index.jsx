import React from 'react';
// import { motion } from 'framer-motion';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faPhone, faEnvelope, faMapMarker, faPerson , faShop, faClock} from '@fortawesome/free-solid-svg-icons';
import "./styles.scss";
import { lazy, Suspense } from 'react';

const Contacto = () => {



  const Spline = lazy(() => import('@splinetool/react-spline'));
  return (
    <div className='contacto_container'>
    
  <Suspense fallback={<div>Cargando...</div>}>
          <Spline className="splider_contacto" scene="https://prod.spline.design/bI0EuXb1UyMYwzo2/scene.splinecode" />
        </Suspense>



    </div>
  );
}

export default Contacto;
