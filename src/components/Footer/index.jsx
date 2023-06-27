import React, { useState } from "react";
import "./styles.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faEnvelope,
  faLocationDot,
  faMobileButton,
  faCircleXmark,
} from "@fortawesome/free-solid-svg-icons";
import Modal from "react-modal";
import { motion } from "framer-motion";



const Footer = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalText, setModalText] = useState("");

  const openModal = (text) => {
    setIsModalOpen(true);
    setModalText(text);
    console.log("Modal abierto");
  };

  const closeModal = () => {
    setIsModalOpen(false);
    console.log("modal Cerrado")
    
  };

  
  const modalVariants = {
    hidden: { opacity: 0, y: "-100%" },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <footer className="main-footer">
      <div className="container">
        <div className="row align-items-center">
          {/* columna 1 */}
          <div className="col-lg-4 col-4 d-flex justify-content-start">
            <div className="icon d-flex justify-content-center align-items-center">
              <FontAwesomeIcon
                icon={faEnvelope}
                className="footer-icon"
                onClick={() => openModal("fsalas@fsgrupoconstructor.com")}
              />
            </div>
          </div>
          {/* columna 2 */}
          <div className="col-lg-4 col-4 d-flex justify-content-center">
            <div className="icon d-flex justify-content-center align-items-center">
              <FontAwesomeIcon
                icon={faMobileButton}
                className="footer-icon"
                onClick={() => openModal("+506 8924-9056")}
              />
            </div>
          </div>
          {/* columna 3 */}
          <div className="col-lg-4 col-4 d-flex justify-content-end">
            <div className="icon d-flex justify-content-center align-items-center">
              <FontAwesomeIcon
                icon={faLocationDot}
                className="footer-icon"
                onClick={() => openModal("Heredia Y Lidora")}
              />
            </div>
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
        <motion.h1
          className="modal-container"
          initial="hidden"
          animate="visible"
          variants={modalVariants}
        >
          {modalText}
        </motion.h1>
        <FontAwesomeIcon icon={faCircleXmark} onClick={closeModal} cursor="pointer" />
      </Modal>
    </footer>
  );
};

export default Footer;
