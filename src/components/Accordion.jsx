import { useState } from 'react'
import ImageModal from './ImageModal'

function Accordion({ items }) {
  const [openIndex, setOpenIndex] = useState(0)
  const [selectedImage, setSelectedImage] = useState(null)

  const toggle = (index) => {
    setOpenIndex((prev) => (prev === index ? -1 : index))
  }

  return (
    <div className="accordion">
      {items.map((item, index) => {
        const isOpen = index === openIndex

        return (
          <div
            key={item.title}
            className={`accordion-item ${isOpen ? 'open' : ''}`}
          >
            <button
              type="button"
              className="accordion-header"
              onClick={() => toggle(index)}
              aria-expanded={isOpen}
            >
              <span>{item.title}</span>
              <span className="accordion-icon">{isOpen ? '−' : '+'}</span>
            </button>

            {isOpen && (
              <div className="accordion-content">
                <p className="accordion-description">
                  {item.description || '[Descripción pendiente]'}
                </p>

                <div className="accordion-gallery">
                  {item.images.map((image, imgIndex) =>
                    image.url ? (
                      <button
                        key={imgIndex}
                        type="button"
                        className="gallery-image-button"
                        onClick={() =>
                          setSelectedImage({
                            url: image.url,
                            alt: `${item.title} ${imgIndex + 1}`,
                          })
                        }
                      >
                        <img
                          src={image.url}
                          alt={`${item.title} ${imgIndex + 1}`}
                          className="gallery-image"
                        />
                      </button>
                    ) : (
                      <div key={imgIndex} className="gallery-placeholder">
                        Imagen {imgIndex + 1}
                      </div>
                    ),
                  )}
                </div>
              </div>
            )}
          </div>
        )
      })}

      <ImageModal
        image={selectedImage}
        onClose={() => setSelectedImage(null)}
      />
    </div>
  )
}

export default Accordion
