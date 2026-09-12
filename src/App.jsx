import { Routes, Route } from 'react-router-dom'
import Header from './components/Header'
import Footer from './components/Footer'
import Inicio from './pages/Inicio'
import SobreMi from './pages/SobreMi'
import Contacto from './pages/Contacto'
import Politicas from './pages/Politicas'
import Cookies from './pages/Cookies'

function App() {
  return (
    <>
      <Header />
      <main>
        <Routes>
          <Route path="/" element={<Inicio />} />
          <Route path="/sobre-mi" element={<SobreMi />} />
          <Route path="/contacto" element={<Contacto />} />
          <Route path="/politicas" element={<Politicas />} />
          <Route path="/cookies" element={<Cookies />} />
        </Routes>
      </main>
      <Footer />
    </>
  )
}

export default App
