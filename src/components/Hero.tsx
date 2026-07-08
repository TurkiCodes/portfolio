import profileImage from "../assets/profile.jpg";

function Hero() {
  return (
    <section id="hero">
      <div className="container hero-content">
        <div className="hero-text">
          <p className="hero-intro">Hi, I'm</p>

          <h1>Turki Alfouzan</h1>

          <h2>Software Engineer</h2>

          <p className="hero-description">
            Recent Software Engineering graduate passionate about
            building clean, user-focused applications and
            continuously improving through hands-on projects.
          </p>

          <div className="hero-buttons">
            <a href="#projects" className="primary-btn">
              View Projects
            </a>

            <a
              href="/Turki-Alfouzan-CV.pdf"
              className="secondary-btn"
              download
            >
              Download CV
            </a>
          </div>
        </div>

        <div className="hero-image">
          <img src={profileImage} alt="Turki Alfouzan" />
        </div>
      </div>
    </section>
  );
}

export default Hero;