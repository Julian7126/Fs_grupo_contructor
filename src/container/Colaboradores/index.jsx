import React, { useEffect } from "react";
import "./styles.scss";
import Footer from "../../components/Footer";
import images from "../../assets/img";
import Image from "react-bootstrap/Image";
import AOS from "aos";
import "aos/dist/aos.css";

const Colaboradores = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000, // Duración de la animación en milisegundos
      once: true, // La animación se activa solo una vez al desplazarse a la sección
    });
  }, []);

  // Lista de colaboradores con sus nombres e imágenes
  const colaboradores = [
    { nombre: "Colaborador 1", imagen: images.multira },
    { nombre: "Colaborador 2", imagen: images.multira },
    { nombre: "Colaborador 3", imagen: images.multira },
    { nombre: "Colaborador 4", imagen: images.multira },
    { nombre: "Colaborador 5", imagen: images.multira },
  ];

  return (
    <div className="colaboradores-container">
      <div className="colaboradores-text">
        <h1>Muchas gracias!</h1>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed auctor urna nec felis scelerisque hendrerit.
          Nullam viverra lacus vel nisl eleifend, at suscipit ligula malesuada. Integer at dolor vel erat vestibulum
          tempus in id lorem.
        </p>
      </div>
      <div className="colaboradores-images-container">
        {colaboradores.map((colaborador, index) => (
          <div className="container-images" key={index} data-aos="zoom-in-down">
            <Image src={colaborador.imagen} roundedCircle className="small-image" />
            <p>{colaborador.nombre}</p>
          </div>
        ))}
      </div>
      <Footer />
    </div>
  );
};

export default Colaboradores;
