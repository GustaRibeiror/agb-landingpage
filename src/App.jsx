import { useEffect, useState } from 'react'
import { Header } from './components/Header'
import { ServiceCard } from './components/ServiceCard'
import { LeadForm } from './components/LeadForm'
import { ProjectCarousel } from './components/ProjectCarousel'
import { directMessage, buildWhatsAppUrl } from './lib/whatsapp'
import { faqs, founders, processSteps, projects, services } from './content/siteContent'

function App() {
  const [selectedService, setSelectedService] = useState('')
  const [notice, setNotice] = useState('')

  useEffect(() => {
    const elements = document.querySelectorAll('.reveal')
    const observer = new IntersectionObserver(
      (entries) => entries.forEach((entry) => entry.isIntersecting && entry.target.classList.add('is-visible')),
      { threshold: 0.12 },
    )
    elements.forEach((element) => observer.observe(element))
    return () => observer.disconnect()
  }, [])

  function openDirectWhatsapp() {
    const url = buildWhatsAppUrl(directMessage)
    if (!url) {
      setNotice('Configure VITE_WHATSAPP_NUMBER no arquivo .env para ativar o WhatsApp.')
      window.setTimeout(() => setNotice(''), 5000)
      return
    }
    window.open(url, '_blank', 'noopener,noreferrer')
  }

  function chooseService(service) {
    setSelectedService(service)
    document.getElementById('contato')?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <>
      <a className="skip-link" href="#conteudo">Ir para o conteúdo principal</a>
      <div className="grain" aria-hidden="true" />
      <Header onWhatsapp={openDirectWhatsapp} />

      <main id="conteudo">
        <section className="hero" id="inicio">
          <div className="hero-glow" aria-hidden="true" />
          <div className="container hero-grid">
            <div className="hero-copy">
              <p className="eyebrow hero-enter">Autenticidade · Gestão · Branding</p>
              <h1 className="hero-enter hero-delay-1">
                Presença digital que <em>não passa</em> despercebida.
              </h1>
              <p className="hero-intro hero-enter hero-delay-2">
                Unimos tecnologia, marketing e estratégia para transformar necessidades de negócio em presença, eficiência e crescimento.
              </p>
              <div className="hero-actions hero-enter hero-delay-3">
                <a className="button button-gold" href="#contato">Quero fortalecer meu negócio <span aria-hidden="true">↗</span></a>
                <a className="button button-ghost" href="#portfolio">Ver projetos <span aria-hidden="true">↓</span></a>
              </div>
              <div className="hero-audiences hero-enter hero-delay-3" aria-label="Principais segmentos atendidos">
                <span>Restaurantes</span>
                <span>Advocacia</span>
                <span>Imobiliárias</span>
              </div>
            </div>
            <div className="hero-visual hero-enter hero-delay-2">
              <div className="hero-frame">
                <img src="/assets/agb-mark.png" alt="Marca AGB em branco e dourado sobre fundo azul-marinho" />
              </div>
              <div className="hero-orbit" aria-hidden="true">
                <span>Estratégia</span><span>Tecnologia</span><span>Marca</span>
              </div>
              <p className="hero-index">AGB / 2026</p>
            </div>
          </div>
          <a className="scroll-cue" href="#manifesto" aria-label="Ir para a próxima seção">
            <span>Explorar</span><i aria-hidden="true" />
          </a>
        </section>

        <div className="ticker" aria-hidden="true">
          <div>
            <span>Tecnologia</span><b>✦</b><span>Marketing</span><b>✦</b><span>Branding</span><b>✦</b>
            <span>Presença</span><b>✦</b><span>Performance</span><b>✦</b><span>Estratégia</span><b>✦</b>
          </div>
        </div>

        <section className="manifesto section" id="manifesto">
          <div className="container manifesto-grid">
            <div className="section-label reveal"><span>01</span><p>Nossa proposta</p></div>
            <div className="manifesto-copy reveal">
              <h2>Não é só estar online.<br /><em>É ser escolhido.</em></h2>
              <div className="manifesto-body">
                <p>Uma presença digital forte faz sua marca aparecer, ser encontrada e converter clientes todos os dias.</p>
                <p>Por isso, a AGB não entrega ações soltas. Conectamos cada ponto da jornada — da primeira impressão até a conversa comercial.</p>
              </div>
            </div>
          </div>
        </section>

        <section className="services section" id="solucoes">
          <div className="container">
            <div className="section-heading services-heading reveal">
              <div className="section-label"><span>02</span><p>Soluções</p></div>
              <div>
                <p className="eyebrow">Nossos serviços</p>
                <h2>Escolha o que seu negócio precisa agora.</h2>
              </div>
              <p className="section-support">Cinco soluções objetivas para sua marca aparecer, ser encontrada e converter — separadas ou trabalhando juntas.</p>
            </div>
            <div className="services-grid">
              {services.map((service) => <ServiceCard key={service.number} service={service} onSelect={chooseService} />)}
            </div>
          </div>
        </section>

        <section className="bundle-section section">
          <div className="container">
            <article className="bundle reveal">
              <div className="bundle-badge">Condição especial</div>
              <div className="bundle-copy">
                <p className="eyebrow">Pacote completo de presença digital</p>
                <h2>As cinco frentes.<br /><em>Funcionando juntas.</em></h2>
                <p>Conteúdo alimenta as redes, as redes alimentam o tráfego e o tráfego leva para a landing page ou cardápio. Tudo puxando na mesma direção.</p>
                <div className="bundle-flow" aria-label="Fluxo do pacote completo">
                  <span>Conteúdo</span><i>→</i><span>Redes</span><i>→</i><span>Tráfego</span><i>→</i><span>Conversão</span>
                </div>
              </div>
              <div className="bundle-offer">
                <p className="old-price">Valor avulso <s>R$ 1.785</s></p>
                <p className="bundle-price"><small>por</small><span>R$ 997</span></p>
                <p className="saving">Economia de quase 44%</p>
                <div className="maintenance"><span>Manutenção mensal</span><strong>a partir de R$ 297/mês</strong></div>
                <button className="button button-light" type="button" onClick={() => chooseService('Pacote Completo')}>Quero o pacote completo <span aria-hidden="true">↗</span></button>
              </div>
            </article>
          </div>
        </section>

        <section className="portfolio section" id="portfolio">
          <div className="container">
            <div className="portfolio-heading reveal">
              <div>
                <div className="section-label"><span>03</span><p>Projetos</p></div>
                <p className="eyebrow">Ideias colocadas em movimento</p>
                <h2>Sites que já saíram do papel.</h2>
              </div>
              <p>Uma seleção dos projetos que construímos para transformar serviços e produtos em experiências digitais claras.</p>
            </div>
            <ProjectCarousel projects={projects} />
          </div>
        </section>

        <section className="process section">
          <div className="container process-grid">
            <div className="process-title reveal">
              <div className="section-label"><span>04</span><p>Como fazemos</p></div>
              <h2>Estratégia antes<br /><em>da estética.</em></h2>
              <p>Uma execução bonita só vale quando resolve o problema certo.</p>
            </div>
            <ol className="process-list">
              {processSteps.map(([number, title, description]) => (
                <li className="reveal" key={number}>
                  <span>{number}</span>
                  <h3>{title}</h3>
                  <p>{description}</p>
                </li>
              ))}
            </ol>
          </div>
        </section>

        <section className="about section" id="sobre">
          <div className="container">
            <div className="section-heading reveal">
              <div className="section-label"><span>05</span><p>Quem faz</p></div>
              <div>
                <p className="eyebrow">Competências complementares</p>
                <h2>Três olhares.<br />Uma visão de negócio.</h2>
              </div>
              <p className="section-support">Tecnologia, qualidade e comunicação trabalhando lado a lado para construir soluções mais completas.</p>
            </div>
            <div className="founders-grid">
              {founders.map((founder) => (
                <article className="founder-card reveal" key={founder.name}>
                  <div className="founder-art"><img src={founder.image} alt={`Retrato em preto e branco de ${founder.name}`} loading="lazy" /></div>
                  <div className="founder-copy">
                    <p className="founder-role">{founder.role}</p>
                    <h3>{founder.name}</h3>
                    <div className="founder-description">
                      <p>{founder.bio}</p>
                      <p>{founder.detail}</p>
                    </div>
                    <ul className="founder-specialties" aria-label={`Especialidades de ${founder.name}`}>
                      {founder.specialties.map((specialty) => <li key={specialty}>{specialty}</li>)}
                    </ul>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="brand-break">
          <img src="/assets/agb-signature.png" alt="AGB — Autenticidade, Gestão e Branding" loading="lazy" />
        </section>

        <section className="contact section" id="contato">
          <div className="container contact-grid">
            <div className="contact-copy reveal">
              <p className="eyebrow">Vamos construir presença?</p>
              <h2>Seu próximo cliente<br />pode estar a um<br /><em>clique de distância.</em></h2>
              <p>Conte um pouco sobre o seu negócio. Organizamos as informações e abrimos uma conversa no WhatsApp com tudo pronto.</p>
              <div className="contact-stamp"><span>AGB</span><p>Presença<br />Estratégia<br />Crescimento</p></div>
            </div>
            <div className="reveal"><LeadForm selectedService={selectedService} /></div>
          </div>
        </section>

        <section className="faq section">
          <div className="container faq-grid">
            <div className="faq-title reveal"><p className="eyebrow">Antes de conversar</p><h2>Perguntas<br />frequentes.</h2></div>
            <div className="faq-list reveal">
              {faqs.map(([question, answer]) => (
                <details key={question}>
                  <summary>{question}<span aria-hidden="true">+</span></summary>
                  <p>{answer}</p>
                </details>
              ))}
            </div>
          </div>
        </section>
      </main>

      <footer className="footer">
        <div className="container footer-main">
          <div><a className="brand footer-brand" href="#inicio"><span className="brand-word">AGB</span><span className="brand-pip" /></a><p>Autenticidade, Gestão e Branding.</p></div>
          <div className="footer-nav"><a href="#solucoes">Soluções</a><a href="#portfolio">Projetos</a><a href="#sobre">Sobre</a><a href="#contato">Contato</a></div>
          <button className="button button-gold" type="button" onClick={openDirectWhatsapp}>Falar no WhatsApp <span aria-hidden="true">↗</span></button>
        </div>
        <div className="container footer-bottom"><span>© 2026 AGB. Todos os direitos reservados.</span><span>Valores sujeitos a ajuste conforme o escopo.</span></div>
      </footer>

      <button className="floating-whatsapp" type="button" onClick={openDirectWhatsapp} aria-label="Falar com a AGB pelo WhatsApp">
        <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M20.5 3.5A11.8 11.8 0 0 0 12.1 0C5.6 0 .3 5.3.3 11.8c0 2.1.5 4.1 1.6 5.9L0 24l6.4-1.7c1.7.9 3.7 1.4 5.7 1.4 6.5 0 11.8-5.3 11.8-11.8 0-3.2-1.2-6.2-3.4-8.4Zm-8.4 18.2c-1.8 0-3.5-.5-5-1.4l-.4-.2-3.8 1 1-3.7-.2-.4a9.7 9.7 0 0 1-1.5-5.2c0-5.4 4.4-9.7 9.8-9.7a9.7 9.7 0 0 1 9.7 9.8c.1 5.4-4.3 9.8-9.6 9.8Zm5.4-7.3c-.3-.1-1.8-.9-2-1-.3-.1-.5-.1-.7.1-.2.3-.8 1-.9 1.2-.2.2-.3.2-.6.1-1.7-.8-2.8-1.5-3.9-3.4-.3-.5.3-.5.8-1.6.1-.2 0-.4 0-.6L9.3 7c-.2-.6-.6-.5-.8-.5h-.7c-.2 0-.6.1-.9.4-.3.3-1.2 1.2-1.2 2.9s1.2 3.3 1.4 3.6c.2.2 2.4 3.7 5.9 5.1 2.2.9 3.1 1 4.2.8.7-.1 1.8-.7 2-1.4.3-.7.3-1.3.2-1.4-.2-.2-.6-.3-.9-.4Z" /></svg>
      </button>
      <div className="mobile-cta"><button type="button" onClick={openDirectWhatsapp}>Falar com a AGB no WhatsApp <span>↗</span></button></div>
      {notice && <div className="toast" role="status">{notice}</div>}
    </>
  )
}

export default App
