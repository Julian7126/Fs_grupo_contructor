import React from "react";
import "./App.css";
import NuevoSlider from "./components/modalNuevo";

const App = () => {
  return (
    <div className="app-container">
      {/* <Modal imagenes={imagenesModal} /> */}
     <NuevoSlider/>
    </div>
  );
};

export default App;
