
import React, { useState, useEffect, useRef } from "react";
import Router from "../../router";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./styles.scss";
import slide_image_1 from "../../assets/FsGrupo.png";
import slide_image_2 from "../../assets/ArquitecturaEdit.jpg";
import slide_image_3 from "../../assets/DisenoEdit.jpg";
import slide_image_4 from "../../assets/AdministracionEdit.jpg";
import slide_image_5 from "../../assets/ControlEdit.jpg";

const NuevoSlider = () => {
  const [isOpen, setIsOpen] = useState(true);
  const [sliderInitialized, setSliderInitialized] = useState(false);
  const sliderRef = useRef(null);

  useEffect(() => {
    setIsOpen(true);
    setSliderInitialized(true);
    const slider = sliderRef.current;
    if (slider) {
      slider.slickPlay();
    }
  }, []);

  const handleImageClick = () => {
    setIsOpen(!isOpen);
  };

  const settings = {
    dots: false,
    infinite: true,
    speed: 1000,
    slidesToShow: 1,
    slidesToScroll: 1,
    className: "slider-container",
    autoplay: true,
    autoplaySpeed: 1500,
    pauseOnHover: false,
    responsive: [
      {
        breakpoint: 768,
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
    <>
      {isOpen ? (
        <div className="container-modal">
          <Slider ref={sliderRef} {...settings}>
          
<div>
<img src={slide_image_1} alt="slide_image" onClick={handleImageClick} />
</div>
<div>
<img src={slide_image_2} alt="slide_image" onClick={handleImageClick} />
</div>
<div>
<img src={slide_image_3} alt="slide_image" onClick={handleImageClick} />
</div>
<div>
<img src={slide_image_4} alt="slide_image" onClick={handleImageClick} />
</div>
<div>
<img src={slide_image_5} alt="slide_image" onClick={handleImageClick} />
</div>
          </Slider>
          {window.innerWidth > 767 ? (
            <div className="slider-legend top-legend">Enter</div>
          ) : (
            <div onClick={handleImageClick} className="slider-legend top-legend">Show</div>
          )}
          <hr />
          <div className="texto">
            <h4 className="texto-modal">CONOCE NUESTRA CONSTRUCCION DE ALTA CALIDAD </h4>
            <hr />
          </div>
        </div>
      ) : (
        <Router />
      )}
    </>
  );
};

export default NuevoSlider;

