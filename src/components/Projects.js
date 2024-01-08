import React from 'react';
import { ProjectsContainer } from '../css/ProjectsStyles';
import ecommerce from '../assets/OIP.jpg'
const Projects = () => {
  const projectsList = [
    {
      title: 'E-Commerce Store',
      image:ecommerce ,
      description: 'The Ecommerce store created in which i have made admin and user panel and performing background tasks and developing api using complex queries.',
      githubLink: 'https://github.com/MustafaQaiser/E-Commerce-Brand-with-User-and-Admin-portal-Backend-Node-Js-Adonis-Js',
       },

  ];

  return (
    <ProjectsContainer>
      <h2>Projects</h2>
      
      {projectsList.map((project, index) => (
        <div key={index}>
          <img src={project.image} alt={project.title} />
          <h3>{project.title}</h3>
          <p>{project.description}</p>
          <a href={project.githubLink} target="_blank" rel="noopener noreferrer">
           Go To GitHub 
          </a>
        </div>
      ))}
    </ProjectsContainer>
  );
};

export default Projects;
