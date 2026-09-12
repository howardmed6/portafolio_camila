import { Link } from 'react-router-dom'
import './Politicas.css'

function Politicas() {
  return (
    <div className="page page-politicas">
      <h1 className="info-title">Política de Privacidad</h1>

      <div className="info-card">
        <h2 className="info-card-heading">
          Información sobre el tratamiento de tus datos en este sitio
        </h2>
        <p className="info-card-subtitle">
          Transparencia y privacidad en camilamed.site
        </p>
      </div>

      <div className="info-card">
        <div className="policy-section">
          <h3>1. Responsable</h3>
          <p>Camila Medina (camilamed.site)</p>
          <p>
            Contacto:{' '}
            <a href="mailto:camila11223488@gmail.com">
              camila11223488@gmail.com
            </a>
          </p>
        </div>

        <div className="policy-section">
          <h3>2. Datos recopilados</h3>
          <p>
            A través de los medios de contacto indicados en este sitio
            (correo, WhatsApp, teléfono, LinkedIn) podrías compartir:
          </p>
          <ul>
            <li>Nombre</li>
            <li>Correo electrónico</li>
            <li>Mensaje (opcional)</li>
          </ul>
        </div>

        <div className="policy-section">
          <h3>3. Finalidad del tratamiento</h3>
          <p>Los datos proporcionados se utilizarán exclusivamente para:</p>
          <ul>
            <li>Responder a consultas laborales o profesionales</li>
            <li>
              Mantener comunicación relacionada con oportunidades de trabajo
            </li>
          </ul>
        </div>

        <div className="policy-section">
          <h3>4. Protección de datos</h3>
          <p>Garantizo que:</p>
          <ul>
            <li>No compartiré tus datos con terceros</li>
            <li>No utilizaré tu información para marketing o fines no autorizados</li>
            <li>Los datos se conservarán solo durante el tiempo necesario</li>
          </ul>
        </div>

        <div className="policy-section">
          <h3>5. Cookies</h3>
          <p>Este portafolio utiliza únicamente:</p>
          <ul>
            <li>
              <Link to="/cookies">Cookies</Link> técnicas esenciales para el
              funcionamiento del sitio
            </li>
            <li>
              No se emplean{' '}
              <Link to="/cookies">cookies</Link> de análisis, publicidad o
              seguimiento
            </li>
          </ul>
        </div>

        <div className="policy-section">
          <h3>6. Tus derechos</h3>
          <p>Puedes:</p>
          <ul>
            <li>Solicitar acceso, rectificación o eliminación de tus datos</li>
            <li>Retirar tu consentimiento en cualquier momento</li>
          </ul>
          <p>
            Para ejercer estos derechos, contáctame a{' '}
            <a href="mailto:camila11223488@gmail.com">
              camila11223488@gmail.com
            </a>
          </p>
        </div>

        <p className="policy-updated">Última actualización: 12-09-2026</p>
      </div>
    </div>
  )
}

export default Politicas
