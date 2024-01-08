import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import ecommerce from '../assets/OIP.jpg'
import { ProjectsContainer } from '../css/ProjectsStyles';
const Projects = () =>  {
    const projectsList = [
    {
      title: 'E-Commerce Store',
      image:ecommerce ,
      description: 'The Ecommerce store created in which i have made admin and user panel and performing background tasks and developing api using complex queries.',
      githubLink: 'https://github.com/MustafaQaiser/E-Commerce-Brand-with-User-and-Admin-portal-Backend-Node-Js-Adonis-Js',
       },
       {
        title: 'E-Commerce Store',
        image:ecommerce ,
        description: 'The Ecommerce store created in which i have made admin and user panel and performing background tasks and developing api using complex queries.',
        githubLink: 'https://github.com/MustafaQaiser/E-Commerce-Brand-with-User-and-Admin-portal-Backend-Node-Js-Adonis-Js',
         },
         {
          title: 'E-Commerce Store',
          image:ecommerce ,
          description: 'The Ecommerce store created in which i have made admin and user panel and performing background tasks and developing api using complex queries.',
          githubLink: 'https://github.com/MustafaQaiser/E-Commerce-Brand-with-User-and-Admin-portal-Backend-Node-Js-Adonis-Js',
           },

  ];
  return (
    <>
    <h2 style={{ 
    'font-size': '28px',
    'padding':'20px 40px',

  }}>Projects</h2>
        <ProjectsContainer>
     
     { projectsList.map((project, index) => (
       <div key={index}>
    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={project.image} />
      <Card.Body>
        <Card.Title>{project.title}</Card.Title>
        <Card.Text>
          {project.description}
        </Card.Text>
        <Button variant="primary" onClick={()=>{window.open(project.githubLink, '_blank');}}>Go To Github</Button>
      </Card.Body>
    </Card>
    </div>
))}
    </ProjectsContainer>
    </>
  );
}

export default Projects;