import { buildServiceMessage, buildWhatsAppUrl } from '../lib/whatsapp'

export function ServiceCard({ service }) {
  const whatsappUrl = buildWhatsAppUrl(buildServiceMessage(service.title))

  return (
    <article className="service-card visual-service reveal">
      {service.visual?.type === 'showcase' ? (
        <div className="service-visual site-showcase" role="img" aria-label="Sites Castro Bezerra, Sistema FGD e JR Papelaria">
          {['fgd', 'jr', 'castro'].map((site) => <div className={`browser-preview preview-${site}`} key={site}><div className="browser-dots" aria-hidden="true">● ● ●</div><img src={`/assets/optimized/${site}.webp`} alt="" loading="lazy" decoding="async" width="1280" height="720" /></div>)}
        </div>
      ) : service.visual?.type === 'menu-showcase' ? (
        <div className="service-visual menu-showcase" role="img" aria-label={service.visual.alt}>
          {service.visual.screens.map((src, index) => (
            <div className={`menu-device menu-device-${index + 1}`} key={src}>
              <img src={src} alt="" loading="lazy" decoding="async" />
              {index === 0 && <><span className="menu-redaction menu-redaction-brand" /><span className="menu-redaction menu-redaction-location" /></>}
            </div>
          ))}
        </div>
      ) : service.visual?.src ? (
        <div
          className="service-visual"
          style={service.visual.background ? { background: service.visual.background } : undefined}
        >
          <img src={service.visual.src} alt={service.visual.alt} loading="lazy" decoding="async" />
        </div>
      ) : null}
      <div className="service-panel">
      <div className="service-card-main">
        <span className="service-number">{service.number}</span>
        <div className="service-title">
          <h3>{service.title}</h3>
          <p className="service-tagline">{service.tagline}</p>
        </div>
        <div className="service-price">
          <span>{service.price}</span>
          <small>{service.cadence}</small>
        </div>
      </div>
      <details>
        <summary>Ver detalhes e entregas <span aria-hidden="true">+</span></summary>
        <div className="service-details">
          <p className="service-description">{service.description}</p>
          <ul>
            {service.includes.map((item) => <li key={item}>{item}</li>)}
          </ul>
          {service.note && <p className="service-note">{service.note}</p>}
          <p><strong>Ideal para:</strong> {service.ideal}</p>
        </div>
      </details>
      <a className="service-action" href={whatsappUrl} target="_blank" rel="noreferrer">Tenho interesse <span aria-hidden="true">↗</span></a>
      </div>
    </article>
  )
}
