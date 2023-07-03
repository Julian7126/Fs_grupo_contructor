import React, { useEffect, useState } from "react";
import { Container } from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.min.css';
import "./styles.scss";

const YouTubeVideo = () => {
  const [videoLoaded, setVideoLoaded] = useState(false);

  useEffect(() => {
    const handleVideoLoad = () => {
      setVideoLoaded(true);
    };

    window.addEventListener("load", handleVideoLoad);

    return () => {
      window.removeEventListener("load", handleVideoLoad);
    };
  }, []);

  return (
    <>
      <div className={`contenedor-video ${videoLoaded ? "loaded" : ""}`}>
        {!videoLoaded && (
          <div className="video-loader">
            <div className="loader-spinner">
            </div>
          </div>
        )}
        <Container>
          <div className="ratio ratio-16x9" style={{ flex: "1 50%", height: "700px", backgroundImage: "url('../Marmol3.jpg')" }}>
            <iframe
              width="100%"
              height="100%"
              src="https://www.youtube.com/embed/9LeaHG_tl4Y?autoplay=1"
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              onLoad={() => setVideoLoaded(true)}
            ></iframe>
          </div>
        </Container>
      </div>
    </>
  );
};

export default YouTubeVideo;
