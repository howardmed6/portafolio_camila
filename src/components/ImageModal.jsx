function ImageModal({ image, onClose }) {
  if (!image) return null

  return (
    <div className="image-modal-overlay" onClick={onClose}>
      <button
        type="button"
        className="image-modal-close"
        onClick={onClose}
        aria-label="Cerrar"
      >
        ×
      </button>
      <img
        src={image.url}
        alt={image.alt || ''}
        className="image-modal-content"
        onClick={(event) => event.stopPropagation()}
      />
    </div>
  )
}

export default ImageModal
