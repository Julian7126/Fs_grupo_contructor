import React from 'react';
import './styles.scss';
import projectsVarios from '../../projectsVarios';
import { useNavigate } from 'react-router-dom';

const ProyectsVarios = () => {
  const navigate = useNavigate();

  const handleProjectClick = (projectId) => {
    navigate(`/detail/${projectId}`);
  };

  return (
    <div className="container">
      <div className="row">
        {projectsVarios.map((project) => (
          <div
            key={project.id}
            className="col-md-6 col-lg-6 mb-2"
            onClick={() => handleProjectClick(project.id)}
          >
            <img src={project.image} alt="" className="img-fluid img-thumbnail" />
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProyectsVarios;
