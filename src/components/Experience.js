// /src/components/Experience.js
import React from 'react';
import { ExperienceContainer } from '../css/ExperienceStyles';

const Experience = () => {
  const experienceList = [
    {
      title: 'Backend Developer',
      company: 'AdSells',
      date: 'January 2024 - Current',
      description: 'I am currently in the position of a backend developer at AdSells...',
    },
    {
      title: 'Web Developer',
      company: 'Clicky',
      date: 'Jul 2023 - Nov 2023',
      description: 'I am currently working on the Weship project, an eCommerce platform that makes...',
    },
    // Add more experiences as needed
  ];

  return (
    <ExperienceContainer>
      <h2>Experience</h2>
      {experienceList.map((experience, index) => (
        <div key={index}>
          <h3>{experience.title}</h3>
          <p>
            {experience.company} - {experience.date}
          </p>
          <p>{experience.description}</p>
        </div>
      ))}
    </ExperienceContainer>
  );
};

export default Experience;
 