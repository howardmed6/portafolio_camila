import { useEffect, useState } from 'react'

const AUTO_ROTATE_MS = 4000

function Carousel({ slides }) {
  const [current, setCurrent] = useState(0)

  useEffect(() => {
    if (slides.length <= 1) return

    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length)
    }, AUTO_ROTATE_MS)

    return () => clearInterval(timer)
  }, [slides.length])

  const slide = slides[current]

  return (
    <div className="carousel">
      <div className="carousel-image-wrapper">
        {slide.url ? (
          <img
            src={slide.url}
            alt={slide.description || `Imagen ${current + 1}`}
            className="carousel-image"
          />
        ) : (
          <div className="carousel-placeholder">Imagen {current + 1}</div>
        )}
      </div>

      <p className="carousel-description">
        {slide.description || '[Descripción pendiente]'}
      </p>

      <div className="carousel-dots">
        {slides.map((_, index) => (
          <span
            key={index}
            className={`carousel-dot ${index === current ? 'active' : ''}`}
          />
        ))}
      </div>
    </div>
  )
}

export default Carousel
