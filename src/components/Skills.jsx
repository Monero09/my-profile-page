function Skills({ skills }) {
  return (
    <section id="skills" className="section">
      <div className="section-header">
        <span className="section-tag">02 / TECH STACK</span>
        <h2 className="section-title">Skills & Proficiency</h2>
      </div>

      <div className="skills-list">
        {skills.map((skill) => (
          <div key={skill.name} className="skill">
            <div className="skill-header">
              <span>{skill.name}</span>
              <span className="skill-pct">{skill.level}%</span>
            </div>
            <div className="skill-bar">
              <div
                className="skill-fill"
                style={{ width: `${skill.level}%` }}
              ></div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Skills;