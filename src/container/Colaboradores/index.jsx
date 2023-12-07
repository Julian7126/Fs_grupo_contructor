// Colaboradores.jsx

import React from "react";
import { motion } from "framer-motion";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./styles.scss";
import Footer from "../../components/Footer";
import images from "../../assets/img";
import Image from "react-bootstrap/Image";

const Colaboradores = () => {
  const colaboradores = [
    {
      nombre: "Fabian Salas Jiménez",
      imagen: images.multira,
      detail: "Director de Proyecto",
    },
    {
      nombre: "Roy Pérez",
      imagen: images.multira,
      detail: "Ing. Electromecánico",
    },
    { nombre: "Carolina Mora", imagen: images.multira, detail: "Arquitecta" },
    {
      nombre: "Leiner Rivera",
      imagen: images.multira,
      detail: "Ing. Estructural",
    },
    {
      nombre: "Gerardo Zamora",
      imagen: images.multira,
      detail: "Maestro de Obras",
    },
  ];

  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 4000,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 800,
  };

  const textVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1 },
  };

  return (
    <>
    <motion.div className="colaboradores-container">
      <motion.div
        className="colaboradores-text"
        initial="hidden"
        animate="visible"
        variants={textVariants}
        transition={{ duration: 1 }}
      >
        <h1>Mi Gente</h1>
        <span className="underline"></span>
        <p>
          Quiero expresar mi profundo agradecimiento por su dedicación y
          excelencia en cada proyecto. Vuestra maestría técnica y enfoque
          innovador han sido fundamentales para elevar la reputación de FS GRUPO
          CONSTRUCTOR.
        </p>

        <p>
          La habilidad para gestionar proyectos con eficiencia y atención
          meticulosa a los detalles ha marcado la diferencia. Aprecio
          sinceramente su compromiso con la calidad y la integridad.
        </p>
        <p>
          Confío en que, con un equipo tan talentoso, continuaremos alcanzando
          estándares sobresalientes en la creación de viviendas de alto diseño.
          Gracias por su contribución excepcional.
        </p>

      
      </motion.div>
      <motion.div className="colaboradores-images-container">
        <Slider {...sliderSettings}>
          {colaboradores.map((colaborador, index) => (
            <div key={index} className="container-images">
              <Image
                src={colaborador.imagen}
                roundedCircle
                className="small-image"
              />
              <p>{colaborador.nombre}</p>
              <div className="detail-container">
                <p className="colaborador_detail">{colaborador.detail}</p>
              </div>
            </div>
          ))}
        </Slider>
      </motion.div>
      
    </motion.div>
      <Footer />
      </>
  );
};

export default Colaboradores;
