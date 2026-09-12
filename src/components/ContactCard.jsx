import LinkedInIcon from './icons/LinkedInIcon'
import WhatsAppIcon from './icons/WhatsAppIcon'

const svgIcons = {
  linkedin: LinkedInIcon,
  whatsapp: WhatsAppIcon,
}

function ContactCard({ items }) {
  return (
    <div className="contact-card">
      <h2 className="contact-card-title">Mis datos de contacto</h2>

      <div className="contact-list">
        {items.map((item) => {
          const SvgIcon = svgIcons[item.icon]

          return (
            <div className="contact-row" key={item.label}>
              <span className="contact-icon">
                {SvgIcon ? <SvgIcon /> : item.icon}
              </span>
              <div className="contact-text">
                <span className="contact-label">{item.label}</span>
                {item.href ? (
                  <a
                    href={item.href}
                    className="contact-value"
                    target="_blank"
                    rel="noreferrer"
                  >
                    {item.value || '[Pendiente]'}
                  </a>
                ) : (
                  <span className="contact-value">
                    {item.value || '[Pendiente]'}
                  </span>
                )}
              </div>
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default ContactCard
