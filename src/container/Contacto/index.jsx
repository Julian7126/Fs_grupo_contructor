import React from 'react';
import { lazy, Suspense } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faMapMarker, faClock } from '@fortawesome/free-solid-svg-icons';
import { faPhone, faUser, faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import "./styles.scss";
import Footer from "../../components/Footer"

const Contacto = () => {
  const Spline = lazy(() => import('@splinetool/react-spline'));

  return (


    <>
    
    <div className="contacto_container">
      {/* Contenedor del Spline */}
      <div className="spline_container">
        <Suspense fallback={<div>Cargando...</div>}>
          <Spline scene="https://prod.spline.design/kqQrUhfnyhg7Zcnj/scene.splinecode" />
        </Suspense>
      </div>

      {/* Contenedor de la información de contacto */}
      <div className="contact_info_container">
        {/* Primer punto de contacto */}
        <div className="contact_point">
          <FontAwesomeIcon icon={faUser} className="contact_icon" />
          <div>
            <p className="contact_title">INGENIERO FABIAN SALAS JIMENEZ</p>
            <p className="contact_description">CORREO: info@fsgrupoconstructor.com</p>
            <p className="contact_description">+506 8924-9056</p>
          </div>
        </div>

        {/* Segundo punto de contacto */}
        <div className="contact_point">
          <FontAwesomeIcon icon={faShoppingCart} className="contact_icon" />
          <div>
            <p className="contact_title">PROVEEDURÍA</p>
            <p className="contact_description">MARIA JOSE</p>
          </div>
        </div>

        {/* Tercer punto de contacto */}
        <div className="contact_point">
          <FontAwesomeIcon icon={faMapMarker} className="contact_icon" />
          <div>
            <p className="contact_title">DIRECCIÓN DE OFICINA</p>
            <p className="contact_description">HEREIDA Y LITORA</p>
          </div>
        </div>

        {/* Cuarto punto de contacto */}
        <div className="contact_point">
          <FontAwesomeIcon icon={faMapMarker} className="contact_icon" />
          <div>
            <p className="contact_title">DIRECCIÓN DE BODEGA</p>
            <p className="contact_description">--------------</p>
          </div>
        </div>

        {/* Quinto punto de contacto */}
        <div className="contact_point">
          <FontAwesomeIcon icon={faClock} className="contact_icon" />
          <div>
            <p className="contact_title">HORARIO DE TRABAJO</p>
            <p className="contact_description">9:00 am - 17:00 pm</p>
          </div>
        </div>
      </div>
    </div>

    <Footer/>
    </>
  );
}

export default Contacto;
