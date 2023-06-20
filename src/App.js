import React from 'react';
import NavBar from './components/Navbar';
import Footer from './components/Footer';
import './App.css';

const App = () => {
  return (
    <div className="app-container">
      <NavBar />
      <div className="container">
        {/* Contenido de tu aplicación */}
      </div>
      <Footer />
    </div>
  );
};

export default App;
