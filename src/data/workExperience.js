import enfermeriaProcedimiento from '../assets/enfermeria-procedimiento.jpg'
import enfermeriaEquipo from '../assets/enfermeria-equipo.jpg'
import operacionesContenedores from '../assets/operaciones-contenedores.jpg'
import operacionesBodega from '../assets/operaciones-bodega.jpg'
import operacionesEquipo from '../assets/operaciones-equipo.jpg'
import operacionesPresentacion from '../assets/operaciones-presentacion.jpg'

// Pon aquí la descripción general de cada trabajo y las URLs de sus imágenes (mínimo 2 por sección).
const workExperience = [
  {
    title: 'Auxiliar de Enfermería',
    description: 'Imágenes desarrollando mis funciones.',
    images: [{ url: enfermeriaProcedimiento }, { url: enfermeriaEquipo }],
  },
  {
    title: 'Auxiliar de Operaciones Portuarias',
    description: 'Imágenes desarrollando mis funciones.',
    images: [
      { url: operacionesContenedores },
      { url: operacionesBodega },
      { url: operacionesEquipo },
      { url: operacionesPresentacion },
    ],
  },
]

export default workExperience
