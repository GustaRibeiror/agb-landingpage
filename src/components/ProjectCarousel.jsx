import { useRef } from 'react'

export function ProjectCarousel({ projects }) {
  const trackRef = useRef(null)

  function move(direction) {
    const track = trackRef.current
    const card = track?.querySelector('.project-card')
    if (!track || !card) return

    const gap = Number.parseFloat(window.getComputedStyle(track).columnGap) || 16
    track.scrollBy({ left: direction * (card.getBoundingClientRect().width + gap), behavior: 'smooth' })
  }

  return (
    <div className="project-carousel reveal">
      <div className="carousel-toolbar">
        <p>Arraste para explorar</p>
        <div className="carousel-controls">
          <button type="button" onClick={() => move(-1)} aria-label="Ver projeto anterior">←</button>
          <button type="button" onClick={() => move(1)} aria-label="Ver próximo projeto">→</button>
        </div>
      </div>

      <div className="projects-track" ref={trackRef} tabIndex="0" aria-label="Projetos já desenvolvidos">
        {projects.map((project, index) => (
          <a className="project-card" href={project.url} target="_blank" rel="noreferrer" key={project.title}>
            <div
              className="project-image"
              style={{ backgroundImage: `linear-gradient(180deg, transparent 30%, rgba(2,12,24,.58)), url("${project.image}")` }}
            >
              <span>0{index + 1}</span>
            </div>
            <div className="project-info">
              <p>{project.category}</p>
              <h3>{project.title}</h3>
              <span>{project.description}</span>
            </div>
            <span className="project-arrow" aria-hidden="true">↗</span>
          </a>
        ))}
      </div>
    </div>
  )
}
