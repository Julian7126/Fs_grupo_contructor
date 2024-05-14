// Contacto.js
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMapMarker, faClock } from '@fortawesome/free-solid-svg-icons';
import { faUser, faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import "./styles.scss";
import Footer from "../../components/Footer";
import YoutubeMarcela from '../../assets/YoutubeMarcela';
import images from '../../assets/img';

const Contacto = () => {
  return (
    <>
      <div className="contacto_container">
        {/* Contenedor del Spline */}
        <div className="video_container">
          <div className="ratio-16x9">
            <YoutubeMarcela />
          </div>
        </div>

        {/* Contenedor de la información de contacto */}
        <div className="contact_info_container">
          {/* Primer punto de contacto */}
          <div className="contact_point">
            <FontAwesomeIcon icon={faUser} className="contact_icon" />
            <div>
              <p className="contact_title">INGENIERO FABIAN SALAS JIMENEZ</p>
              <hr />
              <p className="contact_description">CORREO: info@fsgccr.com</p>
              <hr />
              <p className="contact_description">+506 8924-9056</p>
            </div>
          </div>

          {/* Segundo punto de contacto */}
          <div className="contact_point">
            <FontAwesomeIcon icon={faShoppingCart} className="contact_icon" />
            <div>
              <p className="contact_title">PROVEEDURÍA</p>
              <hr />
              <p className="contact_description">MARIA JOSE</p>
              <hr />
              <p className="contact_description">mjmontero@fsgccr.com</p>
            </div>
          </div>

          {/* Tercer punto de contacto */}
          <div className="contact_point">
            <FontAwesomeIcon icon={faMapMarker} className="contact_icon" />
            <div>
              <p className="contact_title">DIRECCIÓN DE OFICINA</p>
              <p className="contact_description">Tropical Studios, La Paco , Escasu - San jose </p>
            </div>
          </div>

          {/* Cuarto punto de contacto */}
          <div className="contact_point">
            <FontAwesomeIcon icon={faMapMarker} className="contact_icon" />
            <div>
              <p className="contact_title">DIRECCIÓN DE BODEGA</p>
              <p className="contact_description">Aqui kabe - La Valencia Heredia </p>
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
      <div className="imagen_logo_detail">
        <img className="imagen_logo" src={images.imgLogo}alt="Logo" />
      </div>
      <Footer />
    </>
  );
}

export default Contacto;
