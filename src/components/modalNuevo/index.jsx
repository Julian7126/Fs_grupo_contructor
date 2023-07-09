import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHouse } from "@fortawesome/free-solid-svg-icons";
import Router from "../../router";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./styles.scss";

import slide_image_1 from "../../assets/FsGrupo.png";
import slide_image_2 from "../../assets/ArquitecturaEdit.jpg";
import slide_image_3 from "../../assets/DiseñoEdit.jpg";
import slide_image_4 from "../../assets/AdministracionEdit.jpg";
import slide_image_5 from "../../assets/ControlEdit.jpg";

const NuevoSlider = () => {
  const [isOpen, setIsOpen] = useState(true);

  const handleClose = () => {
    setIsOpen(false);
  };

  const settings = {
    dots: true,
    infinite: true,
    speed: 1000, // Cambia el valor a 1000 para que las imágenes cambien cada 1 segundo
    slidesToShow: 1,
    slidesToScroll: 1,
    className: "slider-container",
    autoplay: isOpen, // Inicia el autoplay solo si isOpen es true
    autoplaySpeed: 2000,
    responsive: [
      {
        breakpoint: 768, // Ajusta las configuraciones para pantallas de celular
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          dots: false,
          arrows: false,
        },
      },
    ],
  };

  return (
    <div className="home_container">
      {isOpen ? (
        <div className="container-modal">
          <div className="swiper-controler">
            <div className="modal-button-container">
              <button className="modal-enter-button-saltarin" onClick={handleClose}>
                <FontAwesomeIcon icon={faHouse} />
              </button>
            </div>
          </div>
          <Slider {...settings}>
            <div>
              <img src={slide_image_1} alt="slide_image" />
            </div>
            <div>
              <img src={slide_image_2} alt="slide_image" />
            </div>
            <div>
              <img src={slide_image_3} alt="slide_image" />
            </div>
            <div>
              <img src={slide_image_4} alt="slide_image" />
            </div>
            <div>
              <img src={slide_image_5} alt="slide_image" />
            </div>
          </Slider>
        </div>
      ) : (
        <Router />
      )}
    </div>
  );
};

export default NuevoSlider;
