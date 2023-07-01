// ProyectsDetail.js
import React from 'react';
import "./styles.scss";
import 'bootstrap/dist/css/bootstrap.min.css';
import projects from "../../projectData";
import { useParams } from 'react-router-dom';
import { Container, Image } from 'react-bootstrap';
import { useSpring, animated } from 'react-spring';

const ProyectsDetail = () => {
  const { id } = useParams();
  const project = projects.find((project) => project.id === parseInt(id));
  const [isImageLoaded, setIsImageLoaded] = React.useState(false);

  const handleImageLoad = () => {
    setIsImageLoaded(true);
  };

  const imageAnimation = useSpring({
    opacity: isImageLoaded ? 1 : 0,
    transform: isImageLoaded ? 'scale(1)' : 'scale(0.1)',
    config: { duration: 200 },
  });

  return (
    <div className='contenedor-principal'>
      <Container className='contenedor-imagen'>
        <animated.div style={imageAnimation}>
          <Image
            src={project.image}
            alt={project.name}
            fluid
            onLoad={handleImageLoad}
          />
        </animated.div>
      </Container>
      {/* Aquí puedes mostrar el resto de la información del proyecto */}
    </div>
  );
};

export default ProyectsDetail;
