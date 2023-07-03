import React from "react";
import "./styles.scss";
import "bootstrap/dist/css/bootstrap.min.css";
import projects from "../../projectData";
import { useParams } from "react-router-dom";
import { Container, Image, Col ,Row } from "react-bootstrap";
import { useSpring, animated } from "react-spring";

const ProyectsDetail = () => {
  const { id } = useParams();
  const project = projects.find((project) => project.id === parseInt(id));
  const [isImageLoaded, setIsImageLoaded] = React.useState(false);

  const handleImageLoad = () => {
    setIsImageLoaded(true);
  };

  const imageAnimation = useSpring({
    opacity: isImageLoaded ? 1 : 0,
    transform: isImageLoaded ? "scale(1)" : "scale(0.1)",
    config: { duration: 200 },
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
            />
          </animated.div>
        </div>
        <div className="name">
          <h1 className="project-name">{project.name}</h1>
        </div>
      </div>
      <Container fluid>
  <Row className="contenedor_secundario">
    <Col>
      <Image src={project.image2} alt={project.name} fluid />
    </Col>
    <Col>
      <Image src={project.image3} alt={project.name} fluid />
    </Col>
    <Col>
      <Image src={project.image4} alt={project.name} fluid />
    </Col>
    <Col>
      <Image src={project.image5} alt={project.name} fluid />
    </Col>
    <Col>
      <Image src={project.image6} alt={project.name} fluid />
    </Col>
  </Row>
</Container>


    </>
  );
};

export default ProyectsDetail;
