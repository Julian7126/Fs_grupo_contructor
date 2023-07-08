import React, { useState } from "react";
import "./styles.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faEnvelope,
  faLocationDot,
  faMobileButton,
} from "@fortawesome/free-solid-svg-icons";
import Modal from "react-modal";
import EnviarMail from '../EnviarMail/index';

const Footer = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <footer className="main-footer">
      <div className="container">
        <div className="row align-items-center">
          {/* columna 1 */}
          <div className="col-lg-4 col-4 d-flex justify-content-start">
            
              <FontAwesomeIcon
                icon={faEnvelope}
                className="footer-icon"
                onClick={openModal}
              />
          
          </div>
          {/* columna 2 */}
          <div className="col-lg-4 col-4 d-flex justify-content-center">
            
              <FontAwesomeIcon
                icon={faMobileButton}
                className="footer-icon"
                onClick={() => {
                  window.open("https://api.whatsapp.com/send?phone=50689249056", "_blank");
                }}
              />
            
          </div>
          {/* columna 3 */}
          <div className="col-lg-4 col-4 d-flex justify-content-end">
           
              <FontAwesomeIcon
                icon={faLocationDot}
                className="footer-icon"
                onClick={() =>
                window.open("https://www.google.com/maps?q=9.9298787,-84.1504029&hl=en-US&gl=cr&entry=gps&lucs=,47071704&g_ep=CAISBjYuNzMuMhgAINeCAyoJLDQ3MDcxNzA0QgJDUg%3D%3D&g_st=iw")}
              />
            
          </div>
        </div>
      </div>

      <Modal
        isOpen={isModalOpen}
        onRequestClose={closeModal}
        contentLabel="Modal"
        className="custom-modal"
        overlayClassName="custom-modal-overlay"
      >
       
         
            <EnviarMail closeModal={closeModal} />
          
    
      </Modal>
    </footer>
  );
};

export default Footer;