const WHATSAPP_NUMBER = (import.meta.env.VITE_WHATSAPP_NUMBER || '').replace(/\D/g, '')

export function buildWhatsAppUrl(message) {
  if (!WHATSAPP_NUMBER) return null
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`
}

export function buildLeadMessage({ name, company, segment, service, moment }) {
  return [
    'Olá, AGB! Quero fortalecer minha presença digital.',
    '',
    `Nome: ${name}`,
    `Negócio: ${company}`,
    `Segmento: ${segment}`,
    `Interesse: ${service}`,
    `Momento: ${moment}`,
    '',
    'Podemos conversar sobre o melhor caminho?',
  ].join('\n')
}

export const directMessage =
  'Olá, AGB! Conheci a proposta de Presença Digital e quero entender qual solução faz mais sentido para o meu negócio.'
