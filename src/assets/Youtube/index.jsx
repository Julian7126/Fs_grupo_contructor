import React from "react";
import { Container } from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.min.css';
import "./styles.scss"

const YouTubeVideo = () => {
  return (
    <>
      <div className="contenedor-video">
        <Container>
          <div className="ratio ratio-21x9">
            <iframe
              width="560"
              height="315"
              src="https://www.youtube.com/embed/9LeaHG_tl4Y?autoplay=1"
              title="YouTube video player"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowfullscreen
            ></iframe>
          </div>
        </Container>
      </div>
    </>
  );
};

export default YouTubeVideo;
