import Timeline from '../components/Timeline'
import lifeTimeline from '../data/lifeTimeline'
import './SobreMi.css'

function SobreMi() {
  return (
    <div className="page page-sobre-mi">
      <section id="sobre-mi-seccion" className="timeline-section">
        <Timeline items={lifeTimeline} />
      </section>
    </div>
  )
}

export default SobreMi
