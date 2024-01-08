// /src/components/Skills.js
import React from 'react';
import { SkillsContainer } from '../css/SkillsStyles';

const Skills = () => {
  const skillsList = [
    'React.js',
    'Vue.js',
    'Bootstrap',
    'Naive UI',
    'HTML',
    'CSS',
    'Node.js',
    'Express.js',
    'MongoDB',
    'SQL',
    'Microservices',
    'RabbitMQ',
    'Docker',
  ];

  return (
    <SkillsContainer>
      <h2>Skills</h2>
      <ul>
        {skillsList.map((skill, index) => (
          <li key={index}>{skill}</li>
        ))}
      </ul>
    </SkillsContainer>
  );
};

export default Skills;
