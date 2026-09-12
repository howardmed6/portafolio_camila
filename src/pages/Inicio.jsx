import Accordion from '../components/Accordion'
import Carousel from '../components/Carousel'
import ContactCard from '../components/ContactCard'
import PhotoCard from '../components/PhotoCard'
import SoftSkillsCard from '../components/SoftSkillsCard'
import carouselSlides from '../data/carouselSlides'
import contactInfo from '../data/contactInfo'
import softSkills from '../data/softSkills'
import workExperience from '../data/workExperience'
import './Inicio.css'

function Inicio() {
  return (
    <div className="page page-inicio">
      <section id="inicio-seccion-1" className="hero-section">
        <Carousel slides={carouselSlides} />
        <PhotoCard />
      </section>
      <section id="inicio-seccion-2" className="work-section">
        <Accordion items={workExperience} />
      </section>
      <section id="inicio-seccion-3" className="contact-section">
        <ContactCard items={contactInfo} />
        <SoftSkillsCard skills={softSkills} />
      </section>
    </div>
  )
}

export default Inicio
