import { FaEnvelope, FaLinkedin, FaGithub } from "react-icons/fa";
const socialLinks = {
  email: "mailto:turki5alfouzan@gmail.com",
  linkedin: "https://www.linkedin.com/in/turki-alfouzan-a50543358/",
  github: "https://github.com/TurkiCodes",
};
function Contact() {
  return (
    <section id="contact">
      <div className="container">
        <div className="contact-content">
        <h2 className="section-title">Contact</h2>
        <p>
          I'd love to hear from you. Whether you have an opportunity,
      a question, or just want to connect, feel free to reach out.
        </p>
        <div className="contact-links">
          <a href={socialLinks.email}>
            <FaEnvelope />
            Email
          </a>
          <a href={socialLinks.linkedin} target="_blank" rel="noopener noreferrer">
            <FaLinkedin />
            LinkedIn
          </a>
          <a href={socialLinks.github} target="_blank" rel="noopener noreferrer">
            <FaGithub />
            GitHub
          </a>
        </div>
        </div>
      </div>
    </section>
  );
}
export default Contact