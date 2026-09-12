import { useState } from 'react'

function Timeline({ items }) {
  const [openIndex, setOpenIndex] = useState(-1)

  const toggle = (index) => {
    setOpenIndex((prev) => (prev === index ? -1 : index))
  }

  return (
    <div className="timeline">
      {items.map((item, index) => {
        const isOpen = index === openIndex

        return (
          <div
            className={`timeline-item ${isOpen ? 'open' : ''}`}
            key={item.title}
          >
            <div className="timeline-marker">
              <span className="timeline-dot"></span>
            </div>

            <div className="timeline-card">
              <button
                type="button"
                className="timeline-header"
                onClick={() => toggle(index)}
                aria-expanded={isOpen}
              >
                <div className="timeline-header-text">
                  <span className="timeline-period">
                    {item.period || '[Años pendientes]'}
                  </span>
                  <span className="timeline-title">{item.title}</span>
                </div>
                <span className="timeline-arrow">▶</span>
              </button>

              {isOpen && (
                <div className="timeline-content">
                  <p>{item.description || '[Descripción pendiente]'}</p>
                </div>
              )}
            </div>
          </div>
        )
      })}
    </div>
  )
}

export default Timeline
