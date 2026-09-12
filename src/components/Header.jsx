import { NavLink } from 'react-router-dom'

function Header() {
  const linkClass = ({ isActive }) => (isActive ? 'active' : '')

  return (
    <header className="header">
      <nav className="header-nav">
        <NavLink to="/" end className={linkClass}>
          Inicio
        </NavLink>
        <NavLink to="/sobre-mi" className={linkClass}>
          Sobre mí
        </NavLink>
        <NavLink to="/contacto" className={linkClass}>
          Contacto
        </NavLink>
      </nav>
    </header>
  )
}

export default Header
