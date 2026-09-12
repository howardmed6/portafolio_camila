function SoftSkillsCard({ skills }) {
  return (
    <div className="skills-card">
      <h2 className="skills-card-title">Habilidades blandas</h2>

      <ul className="skills-list">
        {skills.map((skill) => (
          <li key={skill} className="skill-item">
            {skill}
          </li>
        ))}
      </ul>
    </div>
  )
}

export default SoftSkillsCard
