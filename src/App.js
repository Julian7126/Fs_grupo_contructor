import React from "react";
import "./App.css";
import Modal from "./components/Modal";
import imagenesModal from "./assets/imgModal";

const App = () => {
  return (
    <div className="app-container">
      <Modal imagenes={imagenesModal} />
    </div>
  );
};

export default App;
