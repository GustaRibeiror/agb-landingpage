export const WHATSAPP_NUMBER = '556294139425'

export function buildWhatsAppUrl(message) {
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`
}

export function buildServiceMessage(service) {
  const interestByService = {
    'Cardápio Digital': 'no cardápio digital',
    'Landing Page / Site': 'na criação de uma landing page / site',
    'Tráfego Pago': 'no tráfego pago',
    'Produção de Conteúdo': 'na produção de conteúdo',
    'Gestão de Redes Sociais': 'na gestão de redes sociais',
    'Pacote Completo': 'no pacote completo',
  }

  const interest = interestByService[service] || `em ${service.toLocaleLowerCase('pt-BR')}`
  return `Olá, tenho interesse ${interest}.`
}

export function buildLeadMessage({ name, company, segment, service, moment }) {
  return [
    'Olá, AGB! Quero fortalecer minha presença digital.',
    '',
    `Nome: ${name}`,
    `Negócio: ${company}`,
    `Área de atuação: ${segment}`,
    `Interesse: ${service}`,
    `Momento: ${moment}`,
    '',
    'Podemos conversar sobre o melhor caminho?',
  ].join('\n')
}

export const directMessage = 'Olá, vim pelo site da AGB e quero saber mais.'
