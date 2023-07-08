import React, { useState } from "react";
import { motion } from "framer-motion";
import { Swiper, SwiperSlide } from 'swiper/react';
import './styles.scss';
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { EffectCoverflow, Pagination, Navigation } from 'swiper';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faHouse} from "@fortawesome/free-solid-svg-icons";
import Router from "../../router";

import slide_image_1 from '../../assets/FsGrupo.png';
import slide_image_2 from '../../assets/CasaGarita.jpg';
import slide_image_3 from '../../assets/CasaH.jpg';
import slide_image_4 from '../../assets/Oficinas1.jpg';
import slide_image_5 from '../../assets/Psicina.jpg';


const NuevoSlider = () => {
  const [isOpen, setIsOpen] = useState(true);

  const handleClose = () => {
    setIsOpen(false);
  };

  const buttonVariants = {
    hover: { scale: 1.1 },
    tap: { scale: 0.9 },
  };

  return (
    <>
      {isOpen ? (
        <div className="container-modal">
          <div className="swiper-controler">
    
            <div className="modal-button-container">
              <motion.button
                className="modal-enter-button-saltarin "
                onClick={handleClose}
                variants={buttonVariants}
                whileHover="hover"
                whileTap="tap"
              >
               <FontAwesomeIcon icon={faHouse} />
              </motion.button>
            </div>
          </div>
          <Swiper
            effect={'coverflow'}
            grabCursor={true}
            centeredSlides={true}
            loop={true}
            slidesPerView={'auto'}
            coverflowEffect={{
              rotate: 0,
              stretch: 0,
              depth: 100,
              modifier: 2.5,
            }}
            pagination={{ clickable: true }}
            navigation={{
              nextEl: '.swiper-button-next',
              prevEl: '.swiper-button-prev',
              clickable: true,
            }}
            modules={[EffectCoverflow, Pagination, Navigation]}
            className="swiper_container"
          >
            <SwiperSlide>
              <img src={slide_image_1} alt="slide_image" />
            </SwiperSlide>
            <SwiperSlide>
              <img src={slide_image_2} alt="slide_image" />
            </SwiperSlide>
            <SwiperSlide>
              <img src={slide_image_3} alt="slide_image" />
            </SwiperSlide>
            <SwiperSlide>
              <img src={slide_image_4} alt="slide_image" />
            </SwiperSlide>
            <SwiperSlide>
              <img src={slide_image_5} alt="slide_image" />
            </SwiperSlide>
          </Swiper>
        </div>
      ) : (
        <Router />
      )}
    </>
  );
}

export default NuevoSlider;
