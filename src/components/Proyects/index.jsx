import React from 'react';
import './styles.scss';
import projects from '../../projectData';

const Proyects = () => {
  const handleProjectClick = (projectId) => {
    // Aquí puedes implementar la lógica para navegar al detalle del proyecto con el ID especificado
    // Por ejemplo, puedes utilizar una biblioteca de enrutamiento como react-router-dom para manejar la navegación
    // Ejemplo de código:
    // history.push(`/project/${projectId}`);
  };

  return (
    <div className="container">
      <div className="row">
        {projects.map((project) => (
          <div key={project.id} className="col-md-6 col-lg-6 mb-4" onClick={() => handleProjectClick(project.id)}>
            <img src={project.image} alt='' className="img-fluid img-thumbnail" />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Proyects;
