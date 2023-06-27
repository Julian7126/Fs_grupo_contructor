import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import Router from "../../router";
import images from "../../assets/img.js"

import "./styles.scss";

const Modal = ({ imagenes }) => {
  const [isOpen, setIsOpen] = useState(true);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) =>
        prevIndex === images.length - 1 ? 0 : prevIndex + 1
      );
    }, 2000);

    return () => clearInterval(interval);
  }, [imagenes]);

  const handleClose = () => {
    setIsOpen(false);
  };

  const buttonVariants = {
    hover: { scale: 1.1 },
    tap: { scale: 0.9 },
  };

  return (
    <>
      {isOpen && (
        <div className="modal-container">
          <img className="modal-logo" src={images.imgLogo} alt="Logo" />

          <div className="modal-image-container">
            <Carousel
              className="modal-carousel"
              showArrows={false}
              showThumbs={false}
              showStatus={false}
              showIndicators={false}
              infiniteLoop
              autoPlay
              interval={2000}
              transitionTime={500}
              stopOnHover={false}
              selectedItem={currentImageIndex}
              onChange={(index) => setCurrentImageIndex(index)}
            >
              {Object.values(images).map((imagenes, index) => (
                <div key={index}>
                  <img
                    className="modal-image"
                    src={imagenes}
                    alt="Imagenes-proyectos"
                  />
                </div>
              ))}
            </Carousel>
            <div className="modal-button-container">
              <motion.button
                className="modal-enter-button"
                onClick={handleClose}
                variants={buttonVariants}
                whileHover="hover"
                whileTap="tap"
              >
                Entrar
              </motion.button>
            </div>
          </div>

          <div className="modal-footer"></div>
        </div>
      )}

      {!isOpen && <Router />}
    </>
  );
};

export default Modal;
