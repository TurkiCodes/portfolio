import { FaBuilding, FaCalendarAlt } from "react-icons/fa";

const experiences = [
  {
    company: "King Fahd University of Petroleum and Minerals",

    role: "Software Engineering Summer Trainee",

    period: "Jun 2024 – Aug 2024",

    description:
      "Contributed to the analysis and design of the MaintIQ facilities management system by documenting software requirements, creating UML models, designing interface mockups, and collaborating with stakeholders.",

    technologies: [
      "Requirements Engineering",
      "UML",
      "Lucidchart",
      "Balsamiq",
      "Technical Documentation",
      "API Analysis",
    ],

    highlights: [
      "Documented functional and non-functional requirements for an interactive campus map.",
      "Created use case and activity diagrams.",
      "Designed interactive mockups using Balsamiq.",
      "Collaborated with stakeholders to refine workflows and system features.",
      "Prepared and presented the MaintIQ system to supervisors and stakeholders.",
    ],
  },
];

function Experience() {
  return (
    <section id="experience">
      <div className="container">
        <h2 className="section-title">Experience</h2>

        <div className="experience-grid">
          {experiences.map((experience) => (
            <article key={experience.role} className="experience-card">
              <div className="experience-header">
                <h3>{experience.role}</h3>

                <div className="experience-meta">
                  <span className="experience-company">
                    <FaBuilding />
                    {experience.company}
                  </span>

                  <span className="experience-period">
                    <FaCalendarAlt />
                    {experience.period}
                  </span>
                </div>
              </div>

              <p className="experience-description">
                {experience.description}
              </p>

              <div className="skills-list">
                {experience.technologies.map((tech) => (
                  <span key={tech} className="skill-item">
                    {tech}
                  </span>
                ))}
              </div>

              <div className="experience-highlights">
                <h4>Highlights</h4>

                <ul>
                  {experience.highlights.map((highlight) => (
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

export default Experience;