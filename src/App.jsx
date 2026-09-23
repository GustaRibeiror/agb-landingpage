import { useEffect } from 'react'
import { Header } from './components/Header'
import { ServiceCard } from './components/ServiceCard'
import { LeadForm } from './components/LeadForm'
import { ProjectCarousel } from './components/ProjectCarousel'
import { OliverCase } from './components/OliverCase'
import { TrafficProof } from './components/TrafficProof'
import { buildServiceMessage, directMessage, buildWhatsAppUrl } from './lib/whatsapp'
import { faqs, founders, processSteps, projects, services } from './content/siteContent'

function App() {
  useEffect(() => {
    const elements = document.querySelectorAll('.reveal')
    const observer = new IntersectionObserver(
      (entries) => entries.forEach((entry) => entry.isIntersecting && entry.target.classList.add('is-visible')),
      { threshold: 0.12 },
    )
    elements.forEach((element) => observer.observe(element))
    return () => observer.disconnect()
  }, [])

  const directWhatsAppUrl = buildWhatsAppUrl(directMessage)
  const bundleWhatsAppUrl = buildWhatsAppUrl(buildServiceMessage('Pacote Completo'))

  return (
    <>
      <a className="skip-link" href="#conteudo">Ir para o conteúdo principal</a>
      <div className="grain" aria-hidden="true" />
      <Header />

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
                Tecnologia, marketing e estratégia para sua marca aparecer, converter e crescer.
              </p>
              <div className="hero-actions hero-enter hero-delay-3">
                <a className="button button-gold" href={directWhatsAppUrl} target="_blank" rel="noreferrer">Quero fortalecer meu negócio <span aria-hidden="true">↗</span></a>
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
                <img src="/assets/optimized/agb-mark.webp" alt="Marca AGB em branco e dourado sobre fundo azul-marinho" width="512" height="512" fetchPriority="high" decoding="async" />
              </div>
              <div className="hero-orbit" aria-hidden="true">
                <span>Estratégia</span><span>Tecnologia</span><span>Marca</span>
              </div>
              <p className="hero-index">AGB / 2026</p>
            </div>
          </div>
          <a className="scroll-cue" href="#sobre" aria-label="Ir para a próxima seção">
            <span>Explorar</span><i aria-hidden="true" />
          </a>
        </section>

        <div className="ticker" aria-hidden="true">
          <div>
            <span>Tecnologia</span><b>✦</b><span>Marketing</span><b>✦</b><span>Branding</span><b>✦</b>
            <span>Presença</span><b>✦</b><span>Performance</span><b>✦</b><span>Estratégia</span><b>✦</b>
          </div>
        </div>

        <section className="manifesto section" id="sobre">
          <div className="container">
            <div className="manifesto-grid">
              <div className="section-label reveal"><span>01</span><p>Quem somos</p></div>
              <div className="manifesto-copy reveal">
                <p className="eyebrow">A proposta AGB</p>
                <h2>Tecnologia, estratégia e marca no mesmo time.</h2>
                <div className="manifesto-body">
                  <p>Ajudamos negócios a aparecer, ser encontrados e transformar atenção em oportunidades reais.</p>
                  <p>Três especialidades trabalhando juntas para criar soluções digitais claras, úteis e orientadas a resultado.</p>
                </div>
              </div>
            </div>
            <div className="founders-intro reveal"><span>Os fundadores</span><p>Competências complementares. Uma direção.</p></div>
            <div className="founders-grid">
              {founders.map((founder) => (
                <article className="founder-card reveal" key={founder.name}>
                  <div className="founder-art"><img src={founder.image} alt={`Retrato em preto e branco de ${founder.name}`} loading="lazy" decoding="async" width="720" height="900" /></div>
                  <div className="founder-copy">
                    <p className="founder-role">{founder.role}</p>
                    <h3>{founder.name}</h3>
                    <p className="founder-summary">{founder.bio}</p>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="services section" id="solucoes">
          <div className="container">
            <div className="section-heading services-heading reveal">
              <div className="section-label"><span>02</span><p>Soluções</p></div>
              <div>
                <p className="eyebrow">Nossos serviços</p>
                <h2>Soluções para vender melhor.</h2>
              </div>
            </div>
            <div className="services-grid">
              {services.map((service) => <ServiceCard key={service.number} service={service} />)}
            </div>
            {/* <TrafficProof /> */}
            
          </div>
        </section>

        <section className="bundle-section section">
          <div className="container">
            <article className="bundle reveal">
              <div className="bundle-badge">Pacote fechado · condição especial</div>
              <div className="bundle-copy">
                <p className="eyebrow">Pacote completo de presença digital</p>
                <h2>Presença digital completa.</h2>
                <p>As cinco frentes conectadas em uma única estratégia, com uma condição muito mais vantajosa do que contratar tudo separadamente.</p>
                <div className="bundle-flow" aria-label="Fluxo do pacote completo">
                  <span>Conteúdo</span><i>→</i><span>Redes</span><i>→</i><span>Tráfego</span><i>→</i><span>Conversão</span>
                </div>
              </div>
              <div className="bundle-offer">
                <p className="old-price">Valor avulso <s>R$ 1.785</s></p>
                <p className="bundle-price"><small>por</small><span>R$ 997</span></p>
                <p className="saving">Economia de quase 44% no pacote fechado</p>
                <div className="maintenance"><span>Manutenção mensal</span><strong>a partir de R$ 297/mês</strong></div>
                <p className="payment-note">Formas de pagamento e parcelamento podem ser combinados conforme o escopo.</p>
                <a className="button button-light" href={bundleWhatsAppUrl} target="_blank" rel="noreferrer">Quero o pacote completo <span aria-hidden="true">↗</span></a>
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
                <h2>Projetos e resultados.</h2>
              </div>
              <p>Uma seleção dos projetos que construímos para transformar serviços e produtos em experiências digitais claras.</p>
            </div>
            <OliverCase />
            <h3 className="sites-heading">Alguns sites que já saíram do papel.</h3>
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

        <section className="contact section" id="contato">
          <div className="container contact-grid">
            <div className="contact-copy reveal">
              <p className="eyebrow">Vamos construir presença?</p>
              <h2>Seu próximo cliente<br />pode estar a um<br /><em>clique de distância.</em></h2>
              <p>Conte um pouco sobre o seu negócio. Organizamos as informações e abrimos uma conversa no WhatsApp com tudo pronto.</p>
              <div className="contact-stamp"><span>AGB</span><p>Presença<br />Estratégia<br />Crescimento</p></div>
            </div>
            <div className="reveal"><LeadForm /></div>
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
          <a className="button button-gold" href={directWhatsAppUrl} target="_blank" rel="noreferrer">Falar no WhatsApp <span aria-hidden="true">↗</span></a>
        </div>
        <div className="container footer-bottom"><span>© 2026 AGB. Todos os direitos reservados.</span><span>Valores sujeitos a ajuste conforme o escopo.</span></div>
      </footer>

    </>
  )
}

export default App
