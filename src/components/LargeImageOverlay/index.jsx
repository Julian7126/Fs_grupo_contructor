import React from 'react';
import { motion } from 'framer-motion';
import { Image } from 'react-bootstrap';

const LargeImageOverlay = ({ handleCloseImage, largeImageUrl, imageIdentifier }) => {
  return (
    <motion.div
      className="modal-overlay"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <div className="modal-content">
        <button className="close-button" onClick={handleCloseImage}>
          Cerrar
        </button>
      
        <div className="large-image">
          <Image src={largeImageUrl} alt={imageIdentifier} fluid />
        </div>
      
      </div>
    </motion.div>
  );
};

export default LargeImageOverlay;
