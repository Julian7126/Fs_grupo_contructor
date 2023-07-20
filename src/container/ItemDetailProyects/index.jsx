import React, { useState } from "react";
import "./styles.scss";
import "bootstrap/dist/css/bootstrap.min.css";
import projects from "../../projectData";
import projectsRemodelacion from "../../projectsInProgress";
import projectsVarios from "../../projectsVarios";
import { useParams } from "react-router-dom";
import { Container, Image, Col, Row } from "react-bootstrap";
import { useSpring, animated, config } from "react-spring";
import { motion } from "framer-motion";
import LargeImageOverlay from "../../components/LargeImageOverlay";
import Footer from "../../components/Footer";
import images from "../../assets/img";

const ProyectsDetail = () => {
  const { id } = useParams();

  // Combina los proyectos de todas las secciones en un solo array
  const allProjects = [...projects, ...projectsRemodelacion, ...projectsVarios];

  // Busca el proyecto con el id correspondiente en el array combinado
  const project = allProjects.find((project) => project.id === parseInt(id));

  const [isImageLoaded, setIsImageLoaded] = useState(false);
  const [showProjectInfo, setShowProjectInfo] = useState(false);
  const [showLargeImage, setShowLargeImage] = useState(false);
  const [largeImageUrl, setLargeImageUrl] = useState("");
  const [imageIdentifier, setImageIdentifier] = useState("");

  const handleImageLoad = () => {
    setIsImageLoaded(true);
  };
  const handleToggleProjectInfo = () => {
    setShowProjectInfo(!showProjectInfo);
  };

  const handleImageClick = (imageSrc, identifier) => {
    setLargeImageUrl(imageSrc);
    setImageIdentifier(identifier);
    setShowLargeImage(true);
  };

  const handleCloseImage = () => {
    setShowLargeImage(false);
  };

  const imageAnimation = useSpring({
    opacity: isImageLoaded ? 1 : 0,
    transform: isImageLoaded ? "scale(1)" : "scale(0.1)",
    config: { duration: 200 },
  });

  const infoAnimation = useSpring({
    opacity: showProjectInfo ? 1 : 0,
    height: showProjectInfo ? "auto" : 0,
    config: config.stiff,
  });

  return (
    <>
      <div className="contenedor-principal">
        <div className="contenedor-imagen">
          <animated.div style={imageAnimation}>
            <Image
              src={project.image}
              alt={project.name}
              fluid
              onLoad={handleImageLoad}
              onClick={() => handleImageClick(project.image, "smallImage")}
              style={{ cursor: "pointer" }}
            />
          </animated.div>
        </div>
        <div className="name_project">
          <h1 className="project-name">{project.name}</h1>
        </div>

        <animated.div className="project-info" style={infoAnimation}>
          <motion.ul>
            <motion.li>
              <strong>Ubicación:</strong> {project.location}
            </motion.li>
            <motion.li>
              <strong>Dirección:</strong> {project.address}
            </motion.li>
            <motion.li>
              <strong>M2 Construidos:</strong> {project.m2}
            </motion.li>
            <motion.li>
              <strong>Mano de obras:</strong> {project.manpower}
            </motion.li>
            <motion.li>
              <strong>Cliente:</strong> {project.client}
            </motion.li>
            <motion.li>
              <strong>Profesionales:</strong> {project.professionals}
            </motion.li>
          </motion.ul>
        </animated.div>

        <motion.button
          whileTap={{ scale: 0.95 }}
          onClick={handleToggleProjectInfo}
        >
          {showProjectInfo ? "Ocultar" : "Más información"}
        </motion.button>
      </div>

      <div className="container_secundario text-center">
        <Container fluid>
          <h1 className="titulos">R E N D E R</h1>
          <Row className="contenedor_row justify-content-center">
            {project.render1 && (
              <Col md={5} sm={12} className="mb-4">
                <Image
                  src={project.render1}
                  alt={project.name}
                  fluid
                  onClick={() => handleImageClick(project.render1, "image2")}
                  style={{ cursor: "pointer" }}
                />
              </Col>
            )}
            {project.render2 && (
              <Col md={5} sm={12} className="mb-4">
                <Image
                  src={project.render2}
                  alt={project.name}
                  fluid
                  onClick={() => handleImageClick(project.render2, "image3")}
                  style={{ cursor: "pointer" }}
                />
              </Col>
            )}
            {project.render3 && (
              <Col md={5} sm={12} className="mb-4">
                <Image
                  src={project.render3}
                  alt={project.name}
                  fluid
                  onClick={() => handleImageClick(project.render3, "image4")}
                  style={{ cursor: "pointer" }}
                />
              </Col>
            )}
            {project.render4 && (
              <Col md={5} sm={12} className="mb-4">
                <Image
                  src={project.render4}
                  alt={project.name}
                  fluid
                  onClick={() => handleImageClick(project.render4, "image5")}
                  style={{ cursor: "pointer" }}
                />
              </Col>
            )}
            {project.render5 && (
              <Col md={5} sm={12} className="mb-4">
                <Image
                  src={project.render5}
                  alt={project.name}
                  fluid
                  onClick={() => handleImageClick(project.render5, "image6")}
                  style={{ cursor: "pointer" }}
                />
              </Col>
            )}
          </Row>

          <h1 className="titulos">C O N S T R U C C I O N</h1>

          <h1 className="titulos">F I N A L I Z A D O</h1>
        </Container>
      </div>
      {showLargeImage && (
        <LargeImageOverlay
          handleCloseImage={handleCloseImage}
          largeImageUrl={largeImageUrl}
          imageIdentifier={imageIdentifier}
        />
      )}

      <div className="imagen_logo_detail">
        <img className="imagen_logo" src={images.imgLogo}alt="Logo" />
      </div>

      <Footer />
    </>
  );
};

export default ProyectsDetail;
