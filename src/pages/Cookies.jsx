import './Cookies.css'

function Cookies() {
  return (
    <div className="page page-cookies">
      <h1 className="info-title">Política de Cookies</h1>

      <div className="info-card">
        <h2 className="info-card-heading">
          Información sobre el uso de cookies en este sitio
        </h2>
        <p className="info-card-subtitle">
          Transparencia y privacidad en camilamed.site
        </p>
      </div>

      <div className="info-card info-content">
        <p>
          Este portafolio no utiliza cookies de seguimiento ni de análisis.
          Las únicas cookies presentes son técnicas, necesarias para el
          funcionamiento básico del sitio.
        </p>
        <p>
          Si me contactas a través de los medios indicados en la sección de{' '}
          <strong>Contacto</strong>, la información que compartas se usará
          únicamente para responderte. No se comparte con terceros.
        </p>
        <p>No hay cuentas de usuario ni inicio de sesión en este sitio.</p>
      </div>
    </div>
  )
}

export default Cookies
