import React from 'react';
import { motion } from 'framer-motion';
import { Image } from 'react-bootstrap';
import { faTimes } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./styles.scss"


const LargeImageOverlay = ({ handleCloseImage, largeImageUrl, imageIdentifier }) => {
  return (
    
   
    
    
    <motion.div
      className="modal-overlay"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      >
      <div className="modal-content_detail">
      <FontAwesomeIcon
            icon={faTimes}
            className="close-icon"
            onClick={handleCloseImage}
            />
        <div className="large-image_detail_container">
          <Image className='large_image' src={largeImageUrl} alt={imageIdentifier} fluid />
        </div>
      
      </div>
    </motion.div>
   
  );
};

export default LargeImageOverlay;
