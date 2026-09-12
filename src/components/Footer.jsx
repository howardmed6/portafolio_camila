import { Link } from 'react-router-dom'

function Footer() {
  return (
    <footer className="footer">
      <Link to="/cookies">Cookies</Link>
      <Link to="/politicas">Políticas</Link>
      <p>&copy; Camila Medina 2027</p>
    </footer>
  )
}

export default Footer
