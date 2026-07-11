const academicEducation = [
  {
    degree: "Bachelor of Software Engineering",
    institution: "King Fahd University of Petroleum and Minerals (KFUPM)",
    year: "Graduated 2026",
  },
];

const professionalDevelopment = [
  {
    title: "Marketing for Engineers",
    provider: "10-hour Professional Course by Dr. Saleh Alshebil",
    year: "2023",
  },
];

function Education() {
  return (
    <section id="education">
      <div className="container">
        <h2 className="section-title">Education</h2>
        <div className="education-group">
          <h3>Academic Education</h3>
          <p>My formal academic background in software engineering.</p>
          {academicEducation.map((education) => (
            <div className="education-item">
              <h4>{education.degree}</h4>
              <p>{education.institution}</p>
              <span>{education.year}</span>
            </div>
          ))}
        </div>
        <div className="education-group">
          <h3>Professional Development</h3>
          <p>Additional courses and training to enhance professional skills.</p>
          {professionalDevelopment.map((development) => (
            <div className="education-item">
              <h4>{development.title}</h4>
              <p>{development.provider}</p>
              <span>{development.year}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Education;