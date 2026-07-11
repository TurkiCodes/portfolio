import { FaGithub, FaUser, FaUsers } from "react-icons/fa";

const projects = [
  {
    title: "Student Tutoring App Requirements",

    team: true,

    description:
      "Gathered, analyzed, and documented software requirements for a student tutoring application, producing structured functional and non-functional requirements, UML artifacts, and prioritized documentation.",

    technologies: [
      "Requirements Engineering",
      "UML",
      "Jira",
      "Functional Requirements",
      "Non-Functional Requirements",
      "Use Case Diagrams",
    ],

    highlights: [
      "Gathered and analyzed stakeholder requirements.",
      "Documented functional and non-functional requirements.",
      "Created use case diagrams and use case descriptions.",
      "Organized and prioritized requirements using Jira.",
    ],

    github: "",
  },
];

function Projects() {
  return (
    <section id="projects">
      <div className="container">
        <h2 className="section-title">Projects</h2>

        <div className="projects-grid">
          {projects.map((project) => (
            <article key={project.title} className="project-card">

              <div className="project-header">
                <h3>{project.title}</h3>

                <div className="project-meta">
                  <span className="project-team">
                    {project.team ? <FaUsers /> : <FaUser />}
                    {project.team ? " Team" : " Solo"}
                  </span>

                  {project.github && (
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="github-link"
                    >
                      <FaGithub />
                      GitHub
                    </a>
                  )}
                </div>
              </div>

              <p className="project-description">
                {project.description}
              </p>

              <div className="skills-list">
                {project.technologies.map((tech) => (
                  <span key={tech} className="skill-item">
                    {tech}
                  </span>
                ))}
              </div>

              <div className="project-highlights">
                <h4>Highlights</h4>

                <ul>
                  {project.highlights.map((highlight) => (
                    <li key={highlight}>{highlight}</li>
                  ))}
                </ul>
              </div>

            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Projects;