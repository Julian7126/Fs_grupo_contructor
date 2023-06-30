import React from 'react';
import "./styles.scss"

const YouTubeVideo = () => {
  return (
    <div className="contenedor-video">
      <iframe
        width="75%"
        height="75%"
        src="https://www.youtube.com/watch?v=QmfVLaBan5I"
        title="Proyectos"
        frameBorder="0"
        allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      ></iframe>
    </div>
  );
};

export default YouTubeVideo;
