import React from "react";
import { motion } from "framer-motion";
import "./styles.scss";
import Footer from "../../components/Footer";
import images from "../../assets/img";
import Image from "react-bootstrap/Image";

const Colaboradores = () => {
  const colaboradores = [
    { nombre: "Fabian Salas Jiménez", imagen: images.multira, detail: "Director de Proyecto" },
    { nombre: "Roy Pérez", imagen: images.multira, detail: "Ingeniero Electromecánico" },
    { nombre: "Carolina Mora", imagen: images.multira, detail: "Arquitecta" },
    { nombre: "Leiner Rivera", imagen: images.multira, detail: "Ingeniero Estructural" },
    { nombre: "Gerardo Zamora", imagen: images.multira, detail: "Maestro de Obras" },
  ];

  return (
    <motion.div className="colaboradores-container">
      <motion.div
        className="colaboradores-text"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 2 }}
      >
        <h1>Muchas gracias!</h1>
        <span className="underline"></span>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed auctor urna nec felis scelerisque hendrerit.
          Nullam viverra lacus vel nisl eleifend, at suscipit ligula malesuada. Integer at dolor vel erat vestibulum
          tempus in id lorem.
        </p>
      </motion.div>
      <motion.div className="colaboradores-images-container">
        {colaboradores.map((colaborador, index) => (
          <motion.div
            className="container-images"
            key={index}
            initial={{ opacity: 0, y: 300 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: index * 0.2 }}
          >
            <Image src={colaborador.imagen} roundedCircle className="small-image" />
            <p>{colaborador.nombre}</p>
            <div className="detail-container">
              <p className="colaborador_detail">{colaborador.detail}</p>
            </div>
          </motion.div>
        ))}
      </motion.div>
      <Footer />
    </motion.div>
  );
};

export default Colaboradores;
