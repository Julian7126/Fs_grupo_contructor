import React, { lazy, Suspense } from 'react';
import './styles.scss';
import YouTubeVideo from '../../assets/Youtube';


const Spline = lazy(() => import('@splinetool/react-spline'));

const SobreNosotros = () => {
  return (
    <div className="contenedor-main-sobre-nosotros">
      <div className="contenedor_de_splider">
        <Suspense fallback={<div>Cargando...</div>}>
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
      <div className="contenedor-filas">
        <div className="fila bg-gradual-1">
          <p className="fila-texto">
            Satisfacer las necesidades que posean los clientes, respecto de la construcción de proyectos, siempre con la mayor calidad.
          </p>
        </div>
        <div className="fila bg-gradual-2">
          <p className="fila-texto">
            Ser amigable con el ambiente, al utilizar poca energía y no malgastar los recursos naturales, demostrando nuestra responsabilidad social empresarial (RSE).
          </p>
        </div>
        <div className="fila bg-gradual-3">
          <p className="fila-texto">
            Demostrar los valores que nos caracterizan, los cuales son integridad, responsabilidad, compromiso, dedicación y solidaridad.
          </p>
        </div>
        <div className="fila bg-gradual-4">
          <p className="fila-texto">
            Ofrecer siempre más allá de lo previsto, lo que el cliente desee se lo diseñará y construirá.
          </p>
        </div>
      </div>
      
    </div>
  );
};

export default SobreNosotros;
