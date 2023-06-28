import React, { useState } from "react";
import { motion } from "framer-motion";
import { Swiper, SwiperSlide } from 'swiper/react';
import './styles.scss';
import images from '../../assets/img';
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { EffectCoverflow, Pagination, Navigation } from 'swiper';
import Router from "../../router";

import slide_image_1 from '../../assets/ApartamentosLara1.jpg';
import slide_image_2 from '../../assets/CasaGarita.jpg';
import slide_image_3 from '../../assets/CasaH.jpg';
import slide_image_4 from '../../assets/Oficinas1.jpg';
import slide_image_5 from '../../assets/Psicina.jpg';
import slide_image_6 from '../../assets/Terraza.jpg';
import slide_image_7 from '../../assets/ResidenciaH10.jpg';

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
          <img className="modal-logo" src={images.imgLogo} alt="Logo" />
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
            <SwiperSlide>
              <img src={slide_image_6} alt="slide_image" />
            </SwiperSlide>
            <SwiperSlide>
              <img src={slide_image_7} alt="slide_image" />
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
