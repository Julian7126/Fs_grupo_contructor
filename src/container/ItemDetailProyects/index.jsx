import React, { useState } from "react";
import "./styles.scss";
import "bootstrap/dist/css/bootstrap.min.css";
import projects from "../../projectData";
import { useParams } from "react-router-dom";
import { Container, Image, Col, Row } from "react-bootstrap";
import { useSpring, animated, config } from "react-spring";
import { motion } from "framer-motion";
import LargeImageOverlay from "../../components/LargeImageOverlay";

const ProyectsDetail = () => {
  const { id } = useParams();
  const project = projects.find((project) => project.id === parseInt(id));
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
        <div className="name">
          <h1 className="project-name">{project.name}</h1>
        </div>

        <animated.div className="project-info" style={infoAnimation}>
          {/* Agrega aquí los detalles adicionales del proyecto */}
          <h2>Información del proyecto</h2>
          <p>Detalles adicionales...</p>
        </animated.div>

        <motion.button
          whileTap={{ scale: 0.95 }}
          onClick={handleToggleProjectInfo}
        >
          {showProjectInfo ? "Ocultar" : "Más información"}
        </motion.button>
      </div>
      <Container fluid>
        <Row className="contenedor_secundario">
          <Col>
            <Image
              src={project.image2}
              alt={project.name}
              fluid
              onClick={() => handleImageClick(project.image2, "image2")}
              style={{ cursor: "pointer" }}
            />
          </Col>
          <Col>
            <Image
              src={project.image3}
              alt={project.name}
              fluid
              onClick={() => handleImageClick(project.image3, "image3")}
              style={{ cursor: "pointer" }}
            />
          </Col>
          <Col>
            <Image
              src={project.image4}
              alt={project.name}
              fluid
              onClick={() => handleImageClick(project.image4, "image4")}
              style={{ cursor: "pointer" }}
            />
          </Col>
          <Col>
            <Image
              src={project.image5}
              alt={project.name}
              fluid
              onClick={() => handleImageClick(project.image5, "image5")}
              style={{ cursor: "pointer" }}
            />
          </Col>
          <Col>
            <Image
              src={project.image6}
              alt={project.name}
              fluid
              onClick={() => handleImageClick(project.image6, "image6")}
              style={{ cursor: "pointer" }}
            />
          </Col>
        </Row>
      </Container>
      {showLargeImage && <LargeImageOverlay 
       handleCloseImage={handleCloseImage}
       largeImageUrl={largeImageUrl}
       imageIdentifier={imageIdentifier} />}
    </>
  );
};

export default ProyectsDetail;
