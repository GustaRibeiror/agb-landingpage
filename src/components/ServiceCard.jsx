export function ServiceCard({ service, onSelect }) {
  return (
    <article className="service-card reveal">
      <div className="service-card-top">
        <span className="service-number">{service.number}</span>
        <span className="service-line" aria-hidden="true" />
      </div>
      <div>
        <h3>{service.title}</h3>
        <p className="service-tagline">{service.tagline}</p>
        <p className="service-description">{service.description}</p>
      </div>
      <div className="service-price">
        <span>{service.price}</span>
        <small>{service.cadence}</small>
      </div>
      <details>
        <summary>O que está incluso <span aria-hidden="true">+</span></summary>
        <div className="service-details">
          <ul>
            {service.includes.map((item) => <li key={item}>{item}</li>)}
          </ul>
          {service.note && <p className="service-note">{service.note}</p>}
          <p><strong>Ideal para:</strong> {service.ideal}</p>
        </div>
      </details>
      <button className="text-link" type="button" onClick={() => onSelect(service.title)}>
        Quero esta solução <span aria-hidden="true">↗</span>
      </button>
    </article>
  )
}
