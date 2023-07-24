import React from "react";
import "./styles.scss";

const YoutubeMarcela = () => {
  return (
    <>
      <div className="video-container">

        <h3>Marcela Carranza - Arquitecta </h3>
        <div className="video-1">
          <div className="ratio ratio-16x9">
            <iframe
              width="100%"
              height="100%"
              src="https://www.youtube.com/embed/UkwHCohbgS4" // Modifica la URL aquí
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
              modestbranding="1"
            ></iframe>
          </div>
        </div>

        <div className="video-2">
          <div className="ratio ratio-16x9">
            <iframe
              width="100%"
              height="100%"
              src="https://www.youtube-nocookie.com/embed/bP6iDopIYmQ" // Modifica la URL aquí
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
              modestbranding="1"
            ></iframe>
          </div>
        </div>
      </div>
    </>
  );
};

export default YoutubeMarcela;
