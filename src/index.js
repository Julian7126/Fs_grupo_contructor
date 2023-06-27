import React from 'react';
import ReactDOM from 'react-dom/client';
import 'bootstrap/dist/css/bootstrap.min.css';
import App from './App';
import Modal from 'react-modal';

Modal.setAppElement('#root'); // Agrega esta línea

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);
