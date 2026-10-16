function Hero({ profile }) {
  return (
    <section id="home" className="hero">
      <div className="hero-content">
       
        <h1>
          Hi, I'm <span className="gradient-text">{profile.name}</span>
        </h1>

        <h2 className="hero-role">&gt; {profile.title}</h2>
        <p className="hero-tagline">{profile.tagline}</p>

        <div className="hero-buttons">
          <a href="#projects" className="btn">View My Work →</a>
          <a href="#contact" className="btn btn-outline">Contact Me</a>
        </div>
      </div>

      <div className="hero-visual">
        <div className="photo-card">
          <img src={profile.photo} alt={profile.name} className="hero-photo" />
          <div className="photo-card-footer">
            <span className="code-tag">&lt;Developer /&gt;</span>
            <span className="location-pill">📍 {profile.location}</span>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;