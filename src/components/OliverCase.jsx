import { useRef, useState } from 'react'

const videos = [
  { id: 1, title: 'Moda em movimento', duration: '0:53' },
  { id: 2, title: 'Aniversário OLIVER', duration: '1:00' },
  { id: 3, title: 'Produto e posicionamento', duration: '1:18' },
]

function VideoCard({ item, onPlay }) {
  const ref = useRef(null)
  const [started, setStarted] = useState(false)
  const [error, setError] = useState(false)
  function start() {
    const video = ref.current
    if (!video.getAttribute('src')) video.src = `/assets/oliver/video-${item.id}.mp4`
    setStarted(true)
    setError(false)
    video.play().catch(() => setError(true))
  }
  return <figure className="oliver-video">
    <div className="oliver-player">
      <video ref={ref} poster={`/assets/oliver/poster-${item.id}.webp`} preload="none" playsInline controls={started} aria-hidden={!started} onPlay={(event) => { setError(false); onPlay(event.currentTarget) }} onError={() => setError(true)} aria-label={item.title} />
      {!started && <button className="video-start" type="button" onClick={start} aria-label={`Reproduzir ${item.title}`}><span aria-hidden="true">▶</span><span>Assistir ao vídeo</span></button>}
    </div>
    <figcaption><span>{item.title}</span><time>{item.duration}</time></figcaption>
    {error && <p className="video-error" role="status">Não foi possível iniciar. <button type="button" onClick={start}>Tentar novamente</button></p>}
  </figure>
}

export function OliverCase() {
  const caseRef = useRef(null)
  function playOnly(current) {
    caseRef.current.querySelectorAll('video').forEach((video) => { if (video !== current) video.pause() })
  }
  return <article className="oliver-case" ref={caseRef} aria-labelledby="oliver-title">
    <div className="oliver-heading">
      <div><p className="eyebrow">Conteúdo & presença social</p><h3 id="oliver-title">OLIVER <span>Conteúdo que ganhou alcance.</span></h3><p>Trabalho de Augusto Morais, sócio da AGB, para a marca de moda OLIVER.</p></div>
      <div className="oliver-metrics"><div><strong>1.402.016</strong><span>visualizações em 60 dias</span></div><div><strong>770.948</strong><span>visualizações em 30 dias</span></div><p>Visualizações totais do perfil em cada período.</p></div>
    </div>
    <div className="oliver-videos">{videos.map((item) => <VideoCard key={item.id} item={item} onPlay={playOnly} />)}</div>
  </article>
}
