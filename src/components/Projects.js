// /src/components/Projects.js
import React from 'react';
import { ProjectsContainer } from '../css/ProjectsStyles';

const Projects = () => {
  // Add your projects with image URLs and descriptions
  const projectsList = [
    {
      title: 'Project 1',
      image: '/images/project1.jpg',
      description: 'Project 1 description...',
      githubLink: 'https://github.com/yourusername/project1',
    },
    {
      title: 'Project 2',
      image: '/images/project2.jpg',
      description: 'Project 2 description...',
      githubLink: 'https://github.com/yourusername/project2',
    },
    // Add more projects as needed
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
            GitHub Link
          </a>
        </div>
      ))}
    </ProjectsContainer>
  );
};

export default Projects;
