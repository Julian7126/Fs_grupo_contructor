import React from 'react';
import './styles.scss';
import projects from '../../projectData';
import { useNavigate } from 'react-router-dom';

const Proyects = () => {
  const navigate = useNavigate();

  const handleProjectClick = (projectId) => {
    navigate(`/detail/${projectId}`);
  };

  return (
    <div className="container">
      <div className="row">
        {projects.map((project) => (
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

export default Proyects;
