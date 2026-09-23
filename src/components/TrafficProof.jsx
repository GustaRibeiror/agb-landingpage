import { useRef, useState } from 'react'

export function TrafficProof() {
  const videoRef = useRef(null)
  const [started, setStarted] = useState(false)

  function playProof() {
    const video = videoRef.current
    if (!video) return
    if (!video.getAttribute('src')) video.src = '/assets/traffic/conversations-anonymized.mp4'
    setStarted(true)
    video.play().catch(() => setStarted(false))
  }

  return (
    <article className="traffic-proof reveal" aria-labelledby="traffic-proof-title">
      <div className="traffic-proof-copy">
        <p className="eyebrow">Prova real de campanha</p>
        <h3 id="traffic-proof-title">Quando o anúncio vira conversa.</h3>
        <p>
          Registros reais da caixa de entrada durante campanhas da OLIVER mostram pessoas perguntando sobre
          preço, tamanho e disponibilidade — sinais concretos de intenção de compra.
        </p>
        <div className="traffic-proof-signals" aria-label="Sinais observados nos registros">
          <span>Respostas a anúncios</span>
          <span>Mensagens no Direct</span>
          <span>Intenção de compra</span>
        </div>
        <small>Identidades preservadas. Os registros representam conversas recebidas, não vendas fechadas.</small>
      </div>

      <div className="traffic-proof-media">
        <figure>
          <img
            src="/assets/traffic/inbox-anonymized.webp"
            alt="Caixa de entrada anonimizada mostrando conversas e respostas originadas por anúncios"
            loading="lazy"
            decoding="async"
            width="460"
            height="998"
          />
          <figcaption>Registro da caixa de entrada</figcaption>
        </figure>
        <figure>
          <div className="traffic-proof-player">
            <video
              ref={videoRef}
              poster="/assets/traffic/conversations-poster.webp"
              preload="none"
              muted
              playsInline
              controls={started}
              aria-label="Vídeo anonimizado percorrendo conversas recebidas durante a campanha"
            />
            {!started && (
              <button type="button" onClick={playProof} aria-label="Reproduzir prova em vídeo">
                <span aria-hidden="true">▶</span>
                Ver registro
              </button>
            )}
          </div>
          <figcaption>13 segundos · carregado após o clique</figcaption>
        </figure>
      </div>
    </article>
  )
}
