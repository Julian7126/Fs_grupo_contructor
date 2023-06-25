import React from "react";
import "./styles.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faEnvelope,
  faLocationDot,
  faMobileButton,
} from "@fortawesome/free-solid-svg-icons";
import images from "../../assets/img";

const Footer = () => {
  return (
    <div className="main-footer">
      <div className="container">
        <div className="row align-items-center">
          {/* columna 1 */}
          <div className="col-lg-3 col-md-4 col-sm-12">
            <div className="icon-text">
              <FontAwesomeIcon icon={faEnvelope} className="footer-icon" />
              <p className="footer-text">fsalas@fsgrupocontructor.com</p>
            </div>
          </div>
          {/* columna 2 */}
          <div className="col-lg-2 col-md-4 col-sm-12">
            <div className="icon-text">
              <FontAwesomeIcon icon={faMobileButton} className="footer-icon" />
              <p className="footer-text">+506 8924 9056</p>
            </div>
          </div>
          {/* columna 3 */}
          <div className="col-lg-2 col-md-4 col-sm-12">
            <div className="icon-text">
              <FontAwesomeIcon icon={faLocationDot} className="footer-icon" />
              <p className="footer-text">Heredia y Lindora</p>
            </div>
          </div>
          {/* columna 4 */}
          <div className="col-lg-5 col-md-6 col-sm-12 d-flex justify-content-end">
            <div className="logo">
              <img src={images.imgLogo} alt="logo_de_fs_contrucciones" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
