function Projects({ projects }) {
  return (
    <section id="projects" className="section">
      <div className="section-header">
        <span className="section-tag">03 / PORTFOLIO</span>
        <h2 className="section-title">Featured Projects</h2>
      </div>

      <div className="projects-grid">
        {projects.map((project, index) => (
          <article key={project.title} className="card">
            <div className="card-top">
              <span className="project-number">0{index + 1}</span>
              <a
                href={project.link}
                target="_blank"
                rel="noreferrer"
                className="card-arrow"
              >
                ↗
              </a>
            </div>
            <h3>{project.title}</h3>
            <p>{project.description}</p>
            <div className="tags">
              {project.tech.map((t) => (
                <span key={t} className="tag">{t}</span>
              ))}
            </div>
            <a href={project.link} target="_blank" rel="noreferrer" className="project-link">
              Explore Repository →
            </a>
          </article>
        ))}
      </div>
    </section>
  );
}

export default Projects;