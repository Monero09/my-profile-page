function About({ profile }) {
  return (
    <section id="about" className="section">
      <div className="section-header">
        <span className="section-tag">01 / BIO</span>
        <h2 className="section-title">About Me</h2>
      </div>

      <div className="about-card">
        <p className="about-text">{profile.about}</p>

        <ul className="about-info">
          <li className="info-box">
            <span className="info-label">Location</span>
            <strong>{profile.location}</strong>
          </li>
          <li className="info-box">
            <span className="info-label">Email</span>
            <strong>{profile.email}</strong>
          </li>
          <li className="info-box">
            <span className="info-label">Phone</span>
            <strong>{profile.phone}</strong>
          </li>
        </ul>
      </div>
    </section>
  );
}

export default About;