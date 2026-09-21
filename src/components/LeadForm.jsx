import { useState } from 'react'
import { buildLeadMessage, buildWhatsAppUrl } from '../lib/whatsapp'

const initialForm = {
  name: '',
  company: '',
  segment: '',
  service: '',
  moment: '',
}

export function LeadForm({ selectedService = '' }) {
  const [form, setForm] = useState(initialForm)
  const [status, setStatus] = useState('')
  const shownService = form.service || selectedService

  function updateField(event) {
    const { name, value } = event.target
    setForm((current) => ({ ...current, [name]: value }))
    setStatus('')
  }

  function handleSubmit(event) {
    event.preventDefault()
    const payload = { ...form, service: shownService }

    if (!Object.values(payload).every(Boolean)) {
      setStatus('Preencha todos os campos para continuar.')
      return
    }

    const url = buildWhatsAppUrl(buildLeadMessage(payload))
    if (!url) {
      setStatus('O número do WhatsApp ainda não foi configurado. Adicione VITE_WHATSAPP_NUMBER no arquivo .env.')
      return
    }

    window.open(url, '_blank', 'noopener,noreferrer')
    setStatus('Tudo certo. Abrimos o WhatsApp com sua mensagem pronta.')
  }

  return (
    <form className="lead-form" onSubmit={handleSubmit} noValidate>
      <div className="field-row">
        <label>
          <span>Seu nome</span>
          <input name="name" value={form.name} onChange={updateField} placeholder="Como podemos te chamar?" autoComplete="name" required />
        </label>
        <label>
          <span>Seu negócio</span>
          <input name="company" value={form.company} onChange={updateField} placeholder="Nome da empresa" autoComplete="organization" required />
        </label>
      </div>

      <div className="field-row">
        <label>
          <span>Segmento</span>
          <select name="segment" value={form.segment} onChange={updateField} required>
            <option value="">Selecione</option>
            <option>Restaurante / Alimentação</option>
            <option>Advocacia</option>
            <option>Imobiliária</option>
            <option>Comércio / Varejo</option>
            <option>Serviços</option>
            <option>Outro</option>
          </select>
        </label>
        <label>
          <span>Solução de interesse</span>
          <select name="service" value={shownService} onChange={updateField} required>
            <option value="">Selecione</option>
            <option>Cardápio Digital</option>
            <option>Landing Page / Site</option>
            <option>Tráfego Pago</option>
            <option>Produção de Conteúdo</option>
            <option>Gestão de Redes Sociais</option>
            <option>Pacote Completo</option>
            <option>Não sei ainda</option>
          </select>
        </label>
      </div>

      <label>
        <span>Em que momento você está?</span>
        <select name="moment" value={form.moment} onChange={updateField} required>
          <option value="">Selecione</option>
          <option>Quero começar minha presença digital</option>
          <option>Já estou online, mas preciso melhorar</option>
          <option>Quero gerar mais contatos e vendas</option>
          <option>Preciso integrar várias frentes</option>
        </select>
      </label>

      <button className="button button-gold form-submit" type="submit">
        Montar conversa no WhatsApp <span aria-hidden="true">↗</span>
      </button>
      <p className="form-helper">Seus dados não ficam armazenados. Eles apenas compõem a mensagem enviada ao WhatsApp.</p>
      <p className="form-status" aria-live="polite">{status}</p>
    </form>
  )
}
