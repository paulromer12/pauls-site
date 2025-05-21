import React from 'react';
import './Projects.css'; // Ensure CSS is imported

// Data for Digital Projects
const digitalProjectsData = [
  {
    id: 'dp1',
    slug: 'csd310-case-study', // Used for generating the link URL
    title: 'CSD310 Case Study',
    description: `This was the final group project for CSD310 Database Development. Given about a half page
                  case study about a business wanting to digitalize, we wrote business rules, created an ERD, wrote
                  SQL scripts to initialize and fill the database, and Python scripts to run reports on the data. These
                  were then put into a final presentation. Click on the link to a short write-up and for a link to the full
                  project.`,
  },
  {
    id: 'dp2',
    slug: 'digital-project-2', // Example slug
    title: 'Physical Project 1', // As per previous image content
    description: 'Description of physical project 1. This project explores tangible creations in a digital context.',
  },
  // To add a new digital project, add a new object here:
  // {
  //   id: 'dp3',
  //   slug: 'new-digital-project',
  //   title: 'New Awesome Digital Thing',
  //   description: 'A brief teaser about this new digital project that will surely impress.',
  // },
];

// Data for Physical Projects
const physicalProjectsData = [
  {
    id: 'pp1',
    slug: 'physical-project-1-main', // Example slug
    title: 'Physical Project 1',
    description: 'Detailed insights into the first physical project, focusing on its construction and purpose.',
  },
  // To add a new physical project, add a new object here:
  // {
  //   id: 'pp2',
  //   slug: 'another-physical-build',
  //   title: 'Another Physical Build',
  //   description: 'Exploring the challenges and triumphs of creating another tangible item from scratch.',
  // },
];

export default function Projects() {
  return (
    <div className="projects-container container">
      <h2 className="projects-main-title">Projects</h2>
      <div className="projects-layout">
        <section className="projects-column">
          <h3 className="projects-section-title">Digital Projects</h3>
          {digitalProjectsData.map((project) => (
            <a key={project.id} href={`#/projects/digital/${project.slug}`} className="project-card-link">
              <article className="project-card">
                <h4>{project.title}</h4>
                <p>{project.description}</p>
              </article>
            </a>
          ))}
        </section>

        <section className="projects-column">
          <h3 className="projects-section-title">Physical Projects</h3>
          {physicalProjectsData.map((project) => (
            <a key={project.id} href={`#/projects/physical/${project.slug}`} className="project-card-link">
              <article className="project-card">
                <h4>{project.title}</h4>
                <p>{project.description}</p>
              </article>
            </a>
          ))}
        </section>
      </div>
    </div>
  );
}