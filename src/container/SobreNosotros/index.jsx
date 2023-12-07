import React, { lazy, Suspense } from 'react';
import './styles.scss';
import YouTubeVideo from '../../assets/YoutubeSobreNosotros';
import Footer from "../../components/Footer/index"
import 'bootstrap/dist/css/bootstrap.min.css';

const Spline = lazy(() => import('@splinetool/react-spline'));

const Loader = () => (
  <div className="loader-container">
  <div className="loader"></div>
  <p>Cargando...</p>
</div>
);

const SobreNosotros = () => {
  return (
    <div className="contenedor-main-sobre-nosotros">
      <div className="contenedor_de_splider">
        <Suspense fallback={<Loader />}>
          <Spline className="splider" scene="https://prod.spline.design/0ktatEhVFk4sNSKw/scene.splinecode" />
        </Suspense>
      </div>
      <div className="contenedor-mision">
        <p className="mision-titulo">MISIÓN</p>
        <p className="mision-texto">
          Ofrecer a los clientes servicios de alta calidad en obra civil, arquitectónica con ingeniería de valor y mantenimiento en construcción de proyectos.
        </p>
      </div>
      <div className="contenedor-vision">
        <p className="vision-titulo">VISIÓN</p>
        <p className="vision-texto">
          Ser una empresa líder a nivel nacional en el diseño y construcción de proyectos en las diferentes áreas de la ingeniería y arquitectura.
        </p>
      </div>
      <YouTubeVideo />
      <Footer/>
    </div>
  );
};

export default SobreNosotros;
