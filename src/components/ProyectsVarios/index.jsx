import React from 'react';
import './styles.scss';
import projectsVarios from '../../projectsVarios.js';
import { useNavigate } from 'react-router-dom';

const ProyectsVarios = () => {
  const navigate = useNavigate();

  const handleProjectClick = (projectVariosId) => {
    navigate(`/detail/${projectVariosId}`);
  };

  return (
    <div className="container">
      <div className="row">
        {projectsVarios.map((projectVarios) => (
          <div
            key={projectVarios.id}
            className="col-md-6 col-lg-6 mb-2"
            onClick={() => handleProjectClick(projectVarios.id)}
          >
            <img src={projectVarios.image} alt="" className="img-fluid img-thumbnail" />
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProyectsVarios;

