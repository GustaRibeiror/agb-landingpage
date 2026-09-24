export const services = [
  {
    number: '01',
    title: 'Cardápio Digital',
    visual: {
      type: 'menu-showcase',
      screens: [
        '/assets/services/cardapio-inicio.webp',
        '/assets/services/cardapio-itens.webp',
        '/assets/services/cardapio-categorias.webp',
      ],
      alt: 'Três telas de celular com capturas do cardápio digital: página inicial, lista de pratos e categorias',
    },
    price: 'R$ 297',
    cadence: '+ R$ 39,90/mês',
    tagline: 'O cardápio que se atualiza sozinho, sem gráfica e sem gastar papel.',
    description:
      'Seu menu sempre atualizado, acessível por QR Code e pronto para acompanhar a rotina do negócio.',
    includes: [
      'Design organizado por categorias',
      'QR Code personalizado para mesas, balcão ou embalagens',
      'Painel administrativo para editar produtos',
      'Alteração de preços, fotos e descrições',
      'Ativação de itens conforme disponibilidade',
      'Hospedagem e manutenção da plataforma',
    ],
    ideal: 'Restaurantes, lanchonetes, bares, cafeterias e food trucks.',
  },
  {
    number: '02',
    title: 'Landing Page / Site',
    visual: { type: 'showcase' },
    price: 'R$ 497',
    cadence: 'por projeto',
    tagline: 'Uma página feita para vender, não só para existir.',
    description:
      'Uma experiência rápida e mobile-first que conduz o visitante até a ação certa: chamar, agendar ou comprar.',
    includes: [
      'Página única com estrutura estratégica',
      'Apresentação, serviços, prova social e contato',
      'Botão de WhatsApp sempre visível',
      'Otimização para carregamento em celular',
      'Configuração de domínio próprio',
    ],
    note: 'Domínio contratado à parte, caso o negócio ainda não possua um.',
    ideal: 'Negócios sem presença profissional ou com um site lento e sem função clara de venda.',
  },
  {
    number: '03',
    title: 'Tráfego Pago',
    visual: {
      src: '/assets/optimized/trafego-pago-bg-162430.png',
      alt: 'Notebook com interface conceitual da Meta e gráfico ilustrativo em tendência de alta, sem métricas reais',
      background: '#162430',
    },
    price: 'R$ 497',
    cadence: 'gestão de campanha',
    tagline: 'Anúncio que traz cliente, não só curtida.',
    description:
      'Campanhas no Google e Meta orientadas a contato, agendamento e venda — as métricas que importam para o caixa.',
    includes: [
      'Configuração no Meta Ads e/ou Google Ads',
      'Definição do público-alvo ideal',
      '2 a 3 variações de anúncio por campanha',
      'Acompanhamento e ajustes semanais',
      'Relatório mensal simplificado',
    ],
    note: 'A verba de mídia paga diretamente ao Google ou à Meta não está inclusa.',
    ideal: 'Negócios que querem acelerar resultados além do alcance orgânico.',
  },
  {
    number: '04',
    title: 'Produção de Conteúdo',
    visual: { src: '/assets/optimized/producao-conteudo-3d.webp', alt: 'Estúdio criativo 3D com câmera, celular, microfone, iluminação, roteiro e edição de vídeo' },
    price: 'R$ 397',
    cadence: 'valor inicial',
    tagline: 'Conteúdo para reter atenção e virar cliente.',
    description:
      'Roteiro, gravação e edição com uma direção clara: prender a atenção e criar um motivo para entrar em contato.',
    includes: [
      'Roteiros alinhados ao momento do negócio',
      'Gravação presencial ou com material existente',
      'Edição com cortes, legendas e trilha',
      'Direção de arte para posts estáticos',
    ],
    note: 'O valor final varia conforme volume mensal e necessidade de gravação presencial.',
    ideal: 'Marcas que querem conteúdo com intenção, consistência e linguagem própria.',
  },
  {
    number: '05',
    title: 'Gestão de Redes Sociais',
    visual: {
      src: '/assets/services/redes-social-bg-162430.png',
      alt: 'Composição de três celulares com interfaces de criação, métricas e planejamento de redes sociais',
      background: '#162430',
    },
    price: 'R$ 297',
    cadence: 'valor inicial',
    tagline: 'Perfil ativo, sem tomar o seu tempo.',
    description:
      'Planejamento, publicação e relacionamento para manter a marca presente e responder no ritmo do cliente.',
    includes: [
      'Calendário mensal de postagens',
      'Publicação nas redes combinadas',
      'Monitoramento de comentários e mensagens',
      'Atendimento em horário comercial',
      'Relatório mensal de desempenho',
    ],
    note: 'O preço final depende da frequência de postagem e do nível de atendimento.',
    ideal: 'Negócios que precisam de consistência sem aumentar a carga operacional.',
  },
]

export const projects = [
  {
    title: 'Castro Bezerra',
    category: 'Advocacia · Site institucional',
    description: 'Presença sóbria e estratégica para comunicar confiança, especialidade e proximidade.',
    url: 'https://castrobezerraadv.com/',
    image: '/assets/optimized/castro.webp',
  },
  {
    title: 'Sistema FGD',
    category: 'Tecnologia fiscal · Landing page',
    description: 'Uma apresentação direta para simplificar um produto técnico e destacar velocidade e praticidade.',
    url: 'https://fergaadsistemas.com.br/',
    image: '/assets/optimized/fgd.webp',
  },
  {
    title: 'JR Papelaria Criativa',
    category: 'Varejo · E-commerce',
    description: 'Uma vitrine digital leve e visual para transformar descoberta em experiência de compra.',
    url: 'https://jrpapelariacriativa.lojavirtualnuvem.com.br/',
    image: '/assets/optimized/jr.webp',
  },
  {
    title: 'Elo Sistemas',
    category: 'Tecnologia institucional · Landing page',
    description: 'Uma apresentação direta para soluções de gestão, com foco em clareza, confiança e crescimento.',
    url: 'https://elo.zelosistema.com.br/',
    image: '/assets/projects/elo-sistemas-preview.svg',
  },
]

export const founders = [
  {
    name: 'Bruno Silveira',
    role: 'Comercial, QA & validação',
    bio: 'Garante qualidade e conecta cada solução às necessidades reais do cliente.',
    image: '/assets/optimized/bruno-silveira-portrait.webp',
  },
  {
    name: 'Gustavo Ribeiro',
    role: 'Tecnologia & desenvolvimento',
    bio: 'Transforma desafios de negócio em software, automações e produtos digitais.',
    image: '/assets/optimized/gustavo-ribeiro-portrait.webp',
  },
  {
    name: 'Augusto Morais',
    role: 'Branding, conteúdo & performance',
    bio: 'Cuida do posicionamento, conteúdo e performance para fortalecer a presença da marca.',
    image: '/assets/optimized/augusto-morais-portrait-v2.webp',
    imageClass: 'founder-portrait-close',
  },
]

export const processSteps = [
  ['01', 'Diagnóstico', 'Entendemos o momento, o público e a oportunidade mais valiosa para o negócio.'],
  ['02', 'Direção', 'Conectamos tecnologia, conteúdo e mídia em uma estratégia clara e mensurável.'],
  ['03', 'Execução', 'Criamos, publicamos e colocamos a solução em movimento com agilidade.'],
  ['04', 'Evolução', 'Acompanhamos a resposta do público e refinamos o que pode performar melhor.'],
]

export const faqs = [
  ['Os valores são fechados?', 'São valores-base. O investimento pode variar conforme escopo, volume e necessidades específicas do negócio. Tudo é alinhado antes do início.'],
  ['A verba dos anúncios está inclusa?', 'Não. O valor de Tráfego Pago cobre configuração, gestão e otimização. O investimento em mídia é pago diretamente ao Google ou à Meta.'],
  ['Posso contratar apenas um serviço?', 'Sim. Cada frente pode ser contratada separadamente ou integrada ao Pacote Completo de Presença Digital.'],
  ['Quanto tempo leva para começar?', 'Após o diagnóstico e a aprovação do escopo, apresentamos um cronograma adequado à solução contratada.'],
]
