import camilaPerfil from '../assets/camila-perfil.jpeg'

const BIRTH_DATE = '2005-11-16'
const PHOTO_URL = camilaPerfil

function calculateAge(birthDateString) {
  const today = new Date()
  const birthDate = new Date(birthDateString)

  let age = today.getFullYear() - birthDate.getFullYear()
  const alreadyHadBirthdayThisYear =
    today.getMonth() > birthDate.getMonth() ||
    (today.getMonth() === birthDate.getMonth() &&
      today.getDate() >= birthDate.getDate())

  if (!alreadyHadBirthdayThisYear) {
    age -= 1
  }

  return age
}

function PhotoCard() {
  const age = calculateAge(BIRTH_DATE)

  return (
    <div className="photo-card">
      <div className="photo-frame">
        {PHOTO_URL ? (
          <img src={PHOTO_URL} alt="Camila Medina" />
        ) : (
          <span className="photo-placeholder">Foto</span>
        )}
      </div>

      <h2 className="photo-card-name">Camila Medina</h2>

      <div className="photo-card-info">
        <div className="info-row">
          <span className="info-label">Edad:</span>
          <span className="info-value">{age}</span>
        </div>

        <div className="info-row">
          <span className="info-label">Nacionalidad:</span>
          <span className="info-value">Colombia</span>
        </div>

        <div className="info-row info-row-column">
          <span className="info-label">Profesión:</span>
          <div className="badges">
            <span className="badge">Auxiliar de Enfermería</span>
            <span className="badge">Auxiliar de Operaciones Portuarias</span>
          </div>
        </div>

        <div className="info-row">
          <span className="info-label">Nivel de inglés:</span>
          <span className="info-value">A1</span>
        </div>
      </div>
    </div>
  )
}

export default PhotoCard
