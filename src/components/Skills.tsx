const technicalSkills = [
  {
    category: "Programming Languages",
    skills: ["Python", "Java", "C#", "TypeScript", "SQL"],
  },
  {
    category: "Frontend",
    skills: ["HTML5", "CSS3", "React", "Vite"],
  },
  {
    category: "Development Tools",
    skills: [
      "Git",
      "GitHub",
      "VS Code",
      "Visual Studio",
      "IntelliJ IDEA",
      "Oracle VM VirtualBox",
      "Balsamiq",
    ],
  },
  {
    category: "Productivity Tools",
    skills: [
      "Microsoft Word",
      "Microsoft Excel",
      "Microsoft PowerPoint",
      "Google Docs",
    ],
  },
];

const professionalSkills = [
  "Teamwork",
  "Communication",
  "Collaboration",
  "Problem Solving",
  "Adaptability",
];

const languages = [
  "Arabic (Native)",
  "English (Fluent)",
  "French (Beginner)",
];

function Skills() {
  return (
    <section id="skills">
      <div className="container">
        <h2 className="section-title">Skills</h2>

        <div className="skills-group">
          <h3>Technical Skills</h3>

          {technicalSkills.map((group) => (
            <div key={group.category}>
              <h4>{group.category}</h4>

              <div className="skills-list">
                {group.skills.map((skill) => (
                  <span key={skill} className="skill-item">
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="skills-group">
          <h3>Professional Skills</h3>

          <div className="skills-list">
            {professionalSkills.map((profSkill) => (
              <span key={profSkill} className="skill-item">
                {profSkill}
              </span>
            ))}
          </div>
        </div>

        <div className="skills-group">
          <h3>Languages</h3>

          <div className="skills-list">
            {languages.map((language) => (
              <span key={language} className="skill-item">
                {language}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Skills;