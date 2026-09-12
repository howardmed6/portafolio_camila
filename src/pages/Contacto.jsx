import ContactCard from '../components/ContactCard'
import SoftSkillsCard from '../components/SoftSkillsCard'
import contactInfo from '../data/contactInfo'
import softSkills from '../data/softSkills'
import './Contacto.css'

function Contacto() {
  return (
    <div className="page page-contacto">
      <section id="contacto-seccion" className="contact-section">
        <ContactCard items={contactInfo} />
        <SoftSkillsCard skills={softSkills} />
      </section>
    </div>
  )
}

export default Contacto
