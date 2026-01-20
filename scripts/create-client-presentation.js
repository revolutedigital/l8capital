/**
 * L8 Capital - Apresentação para Clientes
 *
 * Apresentação equilibrada para possíveis clientes
 * 12 slides - Institucional + Proposta de Valor + CTA (~8 minutos)
 *
 * Diferente do Sales Deck (agressivo) e do Institucional (completo)
 * Esta é a versão ideal para primeira reunião com cliente potencial.
 *
 * Critérios de design para nota 95+:
 * - Conexão com o cliente (começar com o problema dele)
 * - Benefícios antes de features
 * - Tom profissional (nem vendedor, nem frio)
 * - 1 ideia por slide
 * - Próximo passo claro
 *
 * Executar: node scripts/create-client-presentation.js
 */

const PptxGenJS = require('pptxgenjs');

// ============================================
// PALETA DE CORES (Premium L8)
// ============================================
const C = {
  // Primárias
  BLACK: '0A0A0A',
  WHITE: 'FFFFFF',
  GOLD: 'C9A227',

  // Dourado (escala)
  GOLD_50: 'FBF8F0',
  GOLD_100: 'F7F0DC',
  GOLD_200: 'EFE1B8',
  GOLD_300: 'E5CD8A',
  GOLD_400: 'D9B85C',
  GOLD_600: 'B8922A',
  GOLD_700: '967720',
  GOLD_800: '745C18',

  // Cinza (escala warm)
  GRAY_50: 'FAFAF8',
  GRAY_100: 'F5F5F3',
  GRAY_200: 'E8E8E4',
  GRAY_300: 'D4D4CE',
  GRAY_400: 'A8A8A0',
  GRAY_500: '7A7A72',
  GRAY_600: '5C5C56',
  GRAY_700: '4A4A45',
  GRAY_800: '1A1A1A',
};

// ============================================
// ÍCONES
// ============================================
const I = {
  MONEY: '💰',
  CHART_UP: '📈',
  SHIELD: '🛡️',
  ROCKET: '🚀',
  CHECK: '✓',
  ARROW: '→',
  PHONE: '📱',
  CALENDAR: '📅',
  HANDSHAKE: '🤝',
  TROPHY: '🏆',
  STAR: '★',
  LIGHTNING: '⚡',
  LOCK: '🔒',
  USERS: '👥',
  BUILDING: '🏢',
  CLOCK: '⏱️',
  TARGET: '🎯',
  BOOK: '📚',
  EMAIL: '📧',
  GLOBE: '🌐',
};

// ============================================
// CRIAÇÃO DA APRESENTAÇÃO
// ============================================
const pptx = new PptxGenJS();

pptx.layout = 'LAYOUT_16x9';
pptx.title = 'L8 Capital - Apresentação para Clientes';
pptx.author = 'L8 Capital';
pptx.company = 'L8 Capital';
pptx.subject = 'Apresentação Comercial - Janeiro 2026';

const TRANSITION = { type: 'fade', speed: 'medium' };
const TOTAL_SLIDES = 12;

// ============================================
// FUNÇÕES AUXILIARES
// ============================================

function addSlideNumber(slide, num, isDark = false) {
  slide.addText(`${num}`, {
    x: 9.3, y: 5.25, w: 0.5, h: 0.25,
    fontSize: 9,
    fontFace: 'Segoe UI',
    color: isDark ? C.GRAY_600 : C.GRAY_400,
    align: 'right'
  });
}

function addGoldBar(slide) {
  slide.addShape('rect', { x: 0, y: 0, w: '100%', h: 0.06, fill: { color: C.GOLD } });
}

function addLogoFooter(slide, isDark = false) {
  slide.addText('L8', {
    x: 0.5, y: 5.2, w: 0.4, h: 0.3,
    fontSize: 10,
    fontFace: 'Segoe UI',
    bold: true,
    color: C.GOLD
  });

  slide.addShape('rect', {
    x: 0.5, y: 5.15, w: 9.0, h: 0.005,
    fill: { color: isDark ? C.GRAY_700 : C.GRAY_200 }
  });
}

// ============================================
// SLIDE 1: CAPA
// ============================================
let slide1 = pptx.addSlide();
slide1.background = { color: C.BLACK };
slide1.transition = TRANSITION;

// Linhas laterais decorativas
slide1.addShape('rect', { x: 0, y: 0, w: 0.025, h: '100%', fill: { color: C.GOLD } });
slide1.addShape('rect', { x: 9.975, y: 0, w: 0.025, h: '100%', fill: { color: C.GOLD } });

// Logo
slide1.addText('L8', {
  x: 0, y: 1.7, w: '100%', h: 0.9,
  fontSize: 80,
  fontFace: 'Segoe UI',
  bold: true,
  color: C.GOLD,
  align: 'center'
});

slide1.addText('C A P I T A L', {
  x: 0, y: 2.55, w: '100%', h: 0.4,
  fontSize: 20,
  fontFace: 'Segoe UI',
  color: C.GOLD,
  align: 'center',
  charSpacing: 8
});

// Linha decorativa
slide1.addShape('rect', { x: 3.7, y: 3.05, w: 2.6, h: 0.01, fill: { color: C.GOLD } });

// Tagline
slide1.addText('Sua imobiliária mais forte.', {
  x: 0, y: 3.2, w: '100%', h: 0.45,
  fontSize: 18,
  fontFace: 'Segoe UI',
  italic: true,
  color: C.WHITE,
  align: 'center'
});

// Subtítulo
slide1.addShape('roundRect', {
  x: 2.8, y: 4.0, w: 4.4, h: 0.5,
  fill: { color: C.GRAY_800 },
  line: { color: C.GOLD_700, width: 1 }
});

slide1.addText('Soluções financeiras para imobiliárias', {
  x: 2.8, y: 4.05, w: 4.4, h: 0.4,
  fontSize: 12,
  fontFace: 'Segoe UI',
  color: C.GRAY_400,
  align: 'center',
  valign: 'middle'
});

// Rodapé
slide1.addText('l8capital.com.br', {
  x: 0, y: 5.2, w: '100%', h: 0.25,
  fontSize: 10,
  fontFace: 'Segoe UI',
  color: C.GRAY_600,
  align: 'center'
});

// ============================================
// SLIDE 2: VOCÊ CONHECE ESSE CENÁRIO?
// ============================================
let slide2 = pptx.addSlide();
slide2.background = { color: C.WHITE };
slide2.transition = TRANSITION;
addGoldBar(slide2);
addLogoFooter(slide2);
addSlideNumber(slide2, 2);

// Título que conecta
slide2.addText('Você conhece esse cenário?', {
  x: 1.0, y: 0.5, w: 8.0, h: 0.65,
  fontSize: 34,
  fontFace: 'Segoe UI',
  bold: true,
  color: C.BLACK
});

// 3 situações comuns (cards)
const scenarios = [
  {
    icon: I.MONEY,
    title: 'Custos que só aumentam',
    desc: 'Taxa de boleto, sistema, seguros com comissão baixa. A margem aperta todo mês.'
  },
  {
    icon: I.CLOCK,
    title: 'Tempo gasto com operacional',
    desc: 'Sua equipe poderia estar fechando negócios, mas está gerenciando processos.'
  },
  {
    icon: I.TARGET,
    title: 'Difícil se diferenciar',
    desc: 'Portais, franquias, novos players. Todo mundo parece oferecer a mesma coisa.'
  }
];

scenarios.forEach((s, i) => {
  const x = 1.0 + (i * 2.8);

  // Card
  slide2.addShape('rect', {
    x: x, y: 1.4, w: 2.5, h: 2.9,
    fill: { color: C.GRAY_50 },
    line: { color: C.GRAY_200, width: 1 },
    shadow: { type: 'outer', blur: 2, offset: 1, angle: 45, color: '000000', opacity: 0.06 }
  });

  // Barra lateral dourada
  slide2.addShape('rect', {
    x: x, y: 1.4, w: 0.05, h: 2.9,
    fill: { color: C.GOLD }
  });

  // Ícone
  slide2.addText(s.icon, {
    x: x, y: 1.55, w: 2.5, h: 0.5,
    fontSize: 28,
    align: 'center'
  });

  // Título
  slide2.addText(s.title, {
    x: x + 0.15, y: 2.1, w: 2.2, h: 0.5,
    fontSize: 13,
    fontFace: 'Segoe UI',
    bold: true,
    color: C.BLACK,
    align: 'center'
  });

  // Descrição
  slide2.addText(s.desc, {
    x: x + 0.15, y: 2.6, w: 2.2, h: 1.2,
    fontSize: 10,
    fontFace: 'Segoe UI',
    color: C.GRAY_600,
    align: 'center'
  });
});

// Frase de conexão
slide2.addShape('rect', {
  x: 1.0, y: 4.5, w: 8.0, h: 0.6,
  fill: { color: C.BLACK }
});

slide2.addText('Se você se identificou com pelo menos um desses cenários, continue conosco.', {
  x: 1.0, y: 4.55, w: 8.0, h: 0.5,
  fontSize: 13,
  fontFace: 'Segoe UI',
  color: C.WHITE,
  align: 'center',
  valign: 'middle'
});

// ============================================
// SLIDE 3: E SE EXISTISSE UMA SOLUÇÃO?
// ============================================
let slide3 = pptx.addSlide();
slide3.background = { color: C.GRAY_50 };
slide3.transition = TRANSITION;
addGoldBar(slide3);
addLogoFooter(slide3);
addSlideNumber(slide3, 3);

// Título
slide3.addText('E se existisse uma forma de...', {
  x: 1.0, y: 0.6, w: 8.0, h: 0.6,
  fontSize: 32,
  fontFace: 'Segoe UI',
  bold: true,
  color: C.BLACK
});

// 3 benefícios em destaque
const benefits = [
  { icon: I.CHART_UP, text: 'Aumentar sua receita', highlight: 'sem vender mais imóveis?' },
  { icon: I.MONEY, text: 'Reduzir seus custos', highlight: 'sem cortar qualidade?' },
  { icon: I.ROCKET, text: 'Liberar sua equipe', highlight: 'do operacional que não gera negócio?' }
];

benefits.forEach((b, i) => {
  const y = 1.5 + (i * 1.0);

  // Fundo do item
  slide3.addShape('rect', {
    x: 2.0, y: y, w: 6.0, h: 0.8,
    fill: { color: C.WHITE },
    line: { color: C.GOLD, width: 1 }
  });

  // Ícone
  slide3.addText(b.icon, {
    x: 2.1, y: y + 0.15, w: 0.6, h: 0.5,
    fontSize: 22
  });

  // Texto
  slide3.addText(b.text, {
    x: 2.8, y: y + 0.1, w: 5.0, h: 0.35,
    fontSize: 14,
    fontFace: 'Segoe UI',
    bold: true,
    color: C.BLACK
  });

  // Highlight
  slide3.addText(b.highlight, {
    x: 2.8, y: y + 0.42, w: 5.0, h: 0.3,
    fontSize: 12,
    fontFace: 'Segoe UI',
    color: C.GOLD_700
  });
});

// Transição
slide3.addShape('rect', {
  x: 2.5, y: 4.7, w: 5.0, h: 0.55,
  fill: { color: C.GOLD }
});

slide3.addText('Essa solução existe. E se chama L8 Capital.', {
  x: 2.5, y: 4.75, w: 5.0, h: 0.45,
  fontSize: 14,
  fontFace: 'Segoe UI',
  bold: true,
  color: C.BLACK,
  align: 'center',
  valign: 'middle'
});

// ============================================
// SLIDE 4: CONHEÇA A L8 CAPITAL
// ============================================
let slide4 = pptx.addSlide();
slide4.background = { color: C.WHITE };
slide4.transition = TRANSITION;
addGoldBar(slide4);
addLogoFooter(slide4);
addSlideNumber(slide4, 4);

// Título
slide4.addText('Conheça a L8 Capital', {
  x: 1.0, y: 0.45, w: 8.0, h: 0.6,
  fontSize: 34,
  fontFace: 'Segoe UI',
  bold: true,
  color: C.BLACK
});

// Descrição da empresa
slide4.addText('Somos uma plataforma de soluções financeiras criada especificamente para imobiliárias. Nossa missão é fortalecer seu negócio através de tecnologia própria e modelo de parceria real.', {
  x: 1.0, y: 1.15, w: 8.0, h: 0.7,
  fontSize: 13,
  fontFace: 'Segoe UI',
  color: C.GRAY_600
});

// 4 métricas de credibilidade
const metrics = [
  { value: '24', label: 'anos de experiência', icon: I.STAR },
  { value: '400+', label: 'imobiliárias parceiras', icon: I.BUILDING },
  { value: '100%', label: 'tecnologia própria', icon: I.LIGHTNING },
  { value: 'R$ 2.050', label: 'economia média/mês', icon: I.MONEY }
];

metrics.forEach((m, i) => {
  const x = 1.0 + (i * 2.15);

  // Card
  slide4.addShape('rect', {
    x: x, y: 2.0, w: 1.95, h: 1.8,
    fill: { color: C.GRAY_50 },
    line: { color: C.GOLD, width: 1 }
  });

  // Ícone pequeno
  slide4.addText(m.icon, {
    x: x, y: 2.1, w: 1.95, h: 0.35,
    fontSize: 16,
    align: 'center'
  });

  // Valor
  slide4.addText(m.value, {
    x: x, y: 2.4, w: 1.95, h: 0.55,
    fontSize: 24,
    fontFace: 'Segoe UI',
    bold: true,
    color: C.GOLD,
    align: 'center'
  });

  // Label
  slide4.addText(m.label, {
    x: x + 0.1, y: 3.0, w: 1.75, h: 0.6,
    fontSize: 10,
    fontFace: 'Segoe UI',
    color: C.GRAY_600,
    align: 'center'
  });
});

// Diferencial em destaque
slide4.addShape('rect', {
  x: 1.0, y: 4.05, w: 8.0, h: 1.0,
  fill: { color: C.BLACK }
});

slide4.addText(`${I.HANDSHAKE}  Nosso modelo`, {
  x: 1.2, y: 4.15, w: 7.6, h: 0.3,
  fontSize: 12,
  fontFace: 'Segoe UI',
  bold: true,
  color: C.GOLD
});

slide4.addText('Não somos fornecedores. Somos parceiros. Você só tem custo se tiver ganho primeiro.', {
  x: 1.2, y: 4.5, w: 7.6, h: 0.4,
  fontSize: 12,
  fontFace: 'Segoe UI',
  color: C.WHITE
});

// ============================================
// SLIDE 5: O QUE FAZEMOS (3 Pilares)
// ============================================
let slide5 = pptx.addSlide();
slide5.background = { color: C.WHITE };
slide5.transition = TRANSITION;
addGoldBar(slide5);
addLogoFooter(slide5);
addSlideNumber(slide5, 5);

// Título
slide5.addText('O que fazemos pela sua imobiliária', {
  x: 1.0, y: 0.45, w: 8.0, h: 0.6,
  fontSize: 34,
  fontFace: 'Segoe UI',
  bold: true,
  color: C.BLACK
});

// 3 verticais
const verticals = [
  {
    icon: I.SHIELD,
    title: 'SEGUROS',
    desc: 'Incêndio, Fiança, Condomínio, Vida',
    benefit: 'Comissões de até 40%',
    color: C.GOLD
  },
  {
    icon: I.MONEY,
    title: 'FINANCEIRO',
    desc: 'Redução de boletagem, float, fundo de reserva',
    benefit: 'Boleto a R$ 1,90 (vs. R$ 6 do mercado)',
    color: C.BLACK
  },
  {
    icon: I.BOOK,
    title: 'CAPACITAÇÃO',
    desc: 'Treinamento comercial, operacional, vistoria',
    benefit: 'Conhecimento de 400+ imobiliárias',
    color: C.GRAY_600
  }
];

verticals.forEach((v, i) => {
  const x = 1.0 + (i * 2.8);

  // Card
  slide5.addShape('rect', {
    x: x, y: 1.25, w: 2.5, h: 3.5,
    fill: { color: C.WHITE },
    line: { color: v.color, width: 2 },
    shadow: { type: 'outer', blur: 3, offset: 2, angle: 45, color: '000000', opacity: 0.08 }
  });

  // Header colorido
  slide5.addShape('rect', {
    x: x, y: 1.25, w: 2.5, h: 0.7,
    fill: { color: v.color }
  });

  // Ícone
  slide5.addText(v.icon, {
    x: x, y: 1.3, w: 2.5, h: 0.55,
    fontSize: 24,
    align: 'center'
  });

  // Título
  slide5.addText(v.title, {
    x: x, y: 2.05, w: 2.5, h: 0.4,
    fontSize: 14,
    fontFace: 'Segoe UI',
    bold: true,
    color: C.BLACK,
    align: 'center'
  });

  // Descrição
  slide5.addText(v.desc, {
    x: x + 0.15, y: 2.5, w: 2.2, h: 0.8,
    fontSize: 10,
    fontFace: 'Segoe UI',
    color: C.GRAY_600,
    align: 'center'
  });

  // Linha separadora
  slide5.addShape('rect', {
    x: x + 0.5, y: 3.4, w: 1.5, h: 0.01,
    fill: { color: C.GOLD_200 }
  });

  // Benefício em destaque
  slide5.addText(v.benefit, {
    x: x + 0.1, y: 3.55, w: 2.3, h: 0.8,
    fontSize: 11,
    fontFace: 'Segoe UI',
    bold: true,
    color: C.GOLD_700,
    align: 'center'
  });
});

// ============================================
// SLIDE 6: SEGUROS (Detalhe)
// ============================================
let slide6 = pptx.addSlide();
slide6.background = { color: C.WHITE };
slide6.transition = TRANSITION;
addGoldBar(slide6);
addLogoFooter(slide6);
addSlideNumber(slide6, 6);

// Título
slide6.addText(`${I.SHIELD}  Seguros`, {
  x: 1.0, y: 0.45, w: 8.0, h: 0.6,
  fontSize: 34,
  fontFace: 'Segoe UI',
  bold: true,
  color: C.BLACK
});

slide6.addText('Proteção completa para seus clientes, receita recorrente para você.', {
  x: 1.0, y: 1.05, w: 8.0, h: 0.4,
  fontSize: 14,
  fontFace: 'Segoe UI',
  color: C.GRAY_600
});

// Tabela de produtos
slide6.addTable([
  [
    { text: 'Produto', options: { bold: true, fill: C.BLACK, color: C.WHITE, fontSize: 11 } },
    { text: 'Benefício para o cliente', options: { bold: true, fill: C.BLACK, color: C.WHITE, fontSize: 11 } },
    { text: 'Sua comissão', options: { bold: true, fill: C.GOLD, color: C.BLACK, fontSize: 11 } }
  ],
  [
    { text: 'Seguro Incêndio', options: { fill: C.GRAY_50, fontSize: 11 } },
    { text: 'Obrigatório por lei - proteção essencial', options: { fill: C.GRAY_50, fontSize: 11 } },
    { text: '40%', options: { fill: C.GOLD_50, bold: true, color: C.GOLD_700, fontSize: 13 } }
  ],
  [
    { text: 'Seguro Fiança', options: { fill: C.WHITE, fontSize: 11 } },
    { text: 'Elimina fiador, aprovação em 72h', options: { fill: C.WHITE, fontSize: 11 } },
    { text: '25%', options: { fill: C.WHITE, bold: true, color: C.GOLD_700, fontSize: 13 } }
  ],
  [
    { text: 'Seguro Condomínio', options: { fill: C.GRAY_50, fontSize: 11 } },
    { text: 'Proteção completa para áreas comuns', options: { fill: C.GRAY_50, fontSize: 11 } },
    { text: '35%', options: { fill: C.GOLD_50, bold: true, color: C.GOLD_700, fontSize: 13 } }
  ],
  [
    { text: 'Seguro Residencial', options: { fill: C.WHITE, fontSize: 11 } },
    { text: 'Cobertura ampla + assistência 24h', options: { fill: C.WHITE, fontSize: 11 } },
    { text: '30%', options: { fill: C.WHITE, bold: true, color: C.GOLD_700, fontSize: 13 } }
  ]
], {
  x: 1.0, y: 1.55, w: 8.0, h: 2.0,
  fontFace: 'Segoe UI',
  color: C.BLACK,
  border: { pt: 0.5, color: C.GRAY_300 },
  align: 'center',
  valign: 'middle'
});

// Destaque: receita recorrente
slide6.addShape('rect', {
  x: 1.0, y: 3.8, w: 8.0, h: 1.0,
  fill: { color: C.GOLD_50 },
  line: { color: C.GOLD, width: 1 }
});

slide6.addText(`${I.CHART_UP}  Diferencial L8`, {
  x: 1.2, y: 3.9, w: 7.6, h: 0.3,
  fontSize: 12,
  fontFace: 'Segoe UI',
  bold: true,
  color: C.GOLD_700
});

slide6.addText('Enquanto o mercado paga 15-20% de comissão única, nós oferecemos até 40% de comissão recorrente. Você ganha todo mês enquanto a apólice estiver ativa.', {
  x: 1.2, y: 4.25, w: 7.6, h: 0.5,
  fontSize: 11,
  fontFace: 'Segoe UI',
  color: C.GRAY_700
});

// ============================================
// SLIDE 7: FINANCEIRO (Detalhe)
// ============================================
let slide7 = pptx.addSlide();
slide7.background = { color: C.BLACK };
slide7.transition = TRANSITION;
addSlideNumber(slide7, 7, true);

// Título
slide7.addText(`${I.MONEY}  Financeiro`, {
  x: 1.0, y: 0.4, w: 8.0, h: 0.6,
  fontSize: 34,
  fontFace: 'Segoe UI',
  bold: true,
  color: C.WHITE
});

slide7.addText('Redução real de custos operacionais.', {
  x: 1.0, y: 0.95, w: 8.0, h: 0.35,
  fontSize: 14,
  fontFace: 'Segoe UI',
  color: C.GRAY_400
});

// Comparativo de boletos
slide7.addText('CUSTO POR BOLETO', {
  x: 1.0, y: 1.5, w: 8.0, h: 0.3,
  fontSize: 11,
  fontFace: 'Segoe UI',
  bold: true,
  color: C.GOLD
});

// Barra mercado
slide7.addText('Mercado', {
  x: 1.0, y: 1.9, w: 1.5, h: 0.4,
  fontSize: 11,
  fontFace: 'Segoe UI',
  color: C.GRAY_400
});

slide7.addShape('rect', { x: 2.5, y: 1.95, w: 5.5, h: 0.3, fill: { color: C.GRAY_700 } });

slide7.addText('R$ 6,00', {
  x: 8.1, y: 1.9, w: 1.0, h: 0.4,
  fontSize: 13,
  fontFace: 'Segoe UI',
  bold: true,
  color: C.GRAY_400
});

// Barra L8
slide7.addText('L8 Capital', {
  x: 1.0, y: 2.4, w: 1.5, h: 0.4,
  fontSize: 11,
  fontFace: 'Segoe UI',
  bold: true,
  color: C.GOLD
});

slide7.addShape('rect', { x: 2.5, y: 2.45, w: 1.74, h: 0.3, fill: { color: C.GOLD } });

slide7.addText('R$ 1,90', {
  x: 4.35, y: 2.4, w: 1.0, h: 0.4,
  fontSize: 13,
  fontFace: 'Segoe UI',
  bold: true,
  color: C.GOLD
});

// Badge economia
slide7.addShape('roundRect', {
  x: 5.5, y: 2.4, w: 1.3, h: 0.35,
  fill: { color: C.GOLD }
});

slide7.addText('-68%', {
  x: 5.5, y: 2.42, w: 1.3, h: 0.3,
  fontSize: 12,
  fontFace: 'Segoe UI',
  bold: true,
  color: C.BLACK,
  align: 'center'
});

// Tabela de economia
slide7.addText('SIMULAÇÃO DE ECONOMIA', {
  x: 1.0, y: 3.0, w: 8.0, h: 0.3,
  fontSize: 11,
  fontFace: 'Segoe UI',
  bold: true,
  color: C.GOLD
});

slide7.addTable([
  [
    { text: 'Boletos/mês', options: { bold: true, fill: C.GOLD, color: C.BLACK, fontSize: 10 } },
    { text: '100', options: { fill: C.GRAY_800, color: C.WHITE, fontSize: 11 } },
    { text: '300', options: { fill: C.GRAY_800, color: C.WHITE, fontSize: 11 } },
    { text: '500', options: { fill: C.GOLD_700, color: C.WHITE, fontSize: 11, bold: true } },
    { text: '1.000', options: { fill: C.GRAY_800, color: C.WHITE, fontSize: 11 } }
  ],
  [
    { text: 'Economia/mês', options: { bold: true, fill: C.GOLD, color: C.BLACK, fontSize: 10 } },
    { text: 'R$ 410', options: { fill: C.GRAY_800, color: C.GOLD, fontSize: 12, bold: true } },
    { text: 'R$ 1.230', options: { fill: C.GRAY_800, color: C.GOLD, fontSize: 12, bold: true } },
    { text: 'R$ 2.050', options: { fill: C.GOLD_700, color: C.WHITE, fontSize: 14, bold: true } },
    { text: 'R$ 4.100', options: { fill: C.GRAY_800, color: C.GOLD, fontSize: 12, bold: true } }
  ],
  [
    { text: 'Economia/ano', options: { bold: true, fill: C.GOLD, color: C.BLACK, fontSize: 10 } },
    { text: 'R$ 4.920', options: { fill: C.GRAY_800, color: C.GRAY_400, fontSize: 11 } },
    { text: 'R$ 14.760', options: { fill: C.GRAY_800, color: C.GRAY_400, fontSize: 11 } },
    { text: 'R$ 24.600', options: { fill: C.GOLD_700, color: C.WHITE, fontSize: 12, bold: true } },
    { text: 'R$ 49.200', options: { fill: C.GRAY_800, color: C.GRAY_400, fontSize: 11 } }
  ]
], {
  x: 1.0, y: 3.35, w: 8.0, h: 1.2,
  fontFace: 'Segoe UI',
  border: { pt: 0.5, color: C.GRAY_700 },
  align: 'center',
  valign: 'middle'
});

// Nota sobre outros serviços
slide7.addText(`${I.CHART_UP} Também oferecemos: Rentabilização de Float e Gestão de Fundo de Reserva (para administradoras)`, {
  x: 1.0, y: 4.75, w: 8.0, h: 0.4,
  fontSize: 10,
  fontFace: 'Segoe UI',
  color: C.GRAY_500,
  align: 'center'
});

// ============================================
// SLIDE 8: NA PRÁTICA (Resumo de Ganhos)
// ============================================
let slide8 = pptx.addSlide();
slide8.background = { color: C.WHITE };
slide8.transition = TRANSITION;
addGoldBar(slide8);
addLogoFooter(slide8);
addSlideNumber(slide8, 8);

// Título
slide8.addText('Na prática, quanto você pode ganhar?', {
  x: 1.0, y: 0.45, w: 8.0, h: 0.6,
  fontSize: 34,
  fontFace: 'Segoe UI',
  bold: true,
  color: C.BLACK
});

slide8.addText('Simulação para uma imobiliária com 500 imóveis administrados:', {
  x: 1.0, y: 1.05, w: 8.0, h: 0.35,
  fontSize: 13,
  fontFace: 'Segoe UI',
  color: C.GRAY_600
});

// Cards de ganho
const gains = [
  { source: 'Economia em boletos', monthly: 'R$ 2.050', yearly: 'R$ 24.600', icon: I.MONEY },
  { source: 'Comissão de seguros', monthly: 'R$ 1.500+', yearly: 'R$ 18.000+', icon: I.SHIELD },
  { source: 'TOTAL ESTIMADO', monthly: 'R$ 3.550+', yearly: 'R$ 42.600+', icon: I.TROPHY, highlight: true }
];

gains.forEach((g, i) => {
  const y = 1.6 + (i * 1.0);
  const isHighlight = g.highlight;

  // Card
  slide8.addShape('rect', {
    x: 1.0, y: y, w: 8.0, h: 0.85,
    fill: { color: isHighlight ? C.GOLD : C.GRAY_50 },
    line: { color: isHighlight ? C.GOLD_600 : C.GRAY_200, width: isHighlight ? 2 : 1 }
  });

  // Ícone
  slide8.addText(g.icon, {
    x: 1.2, y: y + 0.2, w: 0.6, h: 0.45,
    fontSize: 20
  });

  // Fonte
  slide8.addText(g.source, {
    x: 1.9, y: y + 0.2, w: 3.0, h: 0.45,
    fontSize: 13,
    fontFace: 'Segoe UI',
    bold: isHighlight,
    color: isHighlight ? C.BLACK : C.BLACK,
    valign: 'middle'
  });

  // Mensal
  slide8.addText(g.monthly + '/mês', {
    x: 5.0, y: y + 0.2, w: 2.0, h: 0.45,
    fontSize: isHighlight ? 16 : 14,
    fontFace: 'Segoe UI',
    bold: true,
    color: isHighlight ? C.BLACK : C.GOLD_700,
    align: 'center',
    valign: 'middle'
  });

  // Anual
  slide8.addText(g.yearly + '/ano', {
    x: 7.0, y: y + 0.2, w: 2.0, h: 0.45,
    fontSize: 12,
    fontFace: 'Segoe UI',
    color: isHighlight ? C.GRAY_800 : C.GRAY_600,
    align: 'center',
    valign: 'middle'
  });
});

// Nota de rodapé
slide8.addText('* Valores estimados baseados em médias de mercado. Resultado real depende da sua operação.', {
  x: 1.0, y: 4.65, w: 8.0, h: 0.3,
  fontSize: 9,
  fontFace: 'Segoe UI',
  italic: true,
  color: C.GRAY_500
});

// ============================================
// SLIDE 9: POR QUE A L8?
// ============================================
let slide9 = pptx.addSlide();
slide9.background = { color: C.WHITE };
slide9.transition = TRANSITION;
addGoldBar(slide9);
addLogoFooter(slide9);
addSlideNumber(slide9, 9);

// Título
slide9.addText('Por que escolher a L8?', {
  x: 1.0, y: 0.45, w: 8.0, h: 0.6,
  fontSize: 34,
  fontFace: 'Segoe UI',
  bold: true,
  color: C.BLACK
});

// Diferenciais em lista
const reasons = [
  { icon: I.HANDSHAKE, title: 'Modelo de parceria real', desc: 'Você só paga se ganhar. Nosso sucesso depende do seu.' },
  { icon: I.LIGHTNING, title: 'Tecnologia 100% própria', desc: 'Não dependemos de terceiros. Agilidade para resolver qualquer questão.' },
  { icon: I.BUILDING, title: 'Validado em 400+ imobiliárias', desc: 'Não estamos testando. Estamos trazendo algo que já funciona.' },
  { icon: I.LOCK, title: 'Sem fidelidade', desc: 'Confiamos no nosso trabalho. Você pode sair quando quiser.' },
  { icon: I.USERS, title: 'Suporte humano', desc: 'Nada de robôs. Pessoas reais resolvendo seus problemas.' }
];

reasons.forEach((r, i) => {
  const y = 1.2 + (i * 0.7);

  // Ícone
  slide9.addText(r.icon, {
    x: 1.0, y: y, w: 0.6, h: 0.55,
    fontSize: 18
  });

  // Título
  slide9.addText(r.title, {
    x: 1.7, y: y, w: 3.5, h: 0.3,
    fontSize: 13,
    fontFace: 'Segoe UI',
    bold: true,
    color: C.BLACK
  });

  // Descrição
  slide9.addText(r.desc, {
    x: 1.7, y: y + 0.3, w: 7.0, h: 0.3,
    fontSize: 11,
    fontFace: 'Segoe UI',
    color: C.GRAY_600
  });
});

// Quote
slide9.addShape('rect', {
  x: 1.0, y: 4.75, w: 8.0, h: 0.5,
  fill: { color: C.BLACK }
});

slide9.addText('"Não queremos clientes. Queremos parceiros que cresçam conosco."', {
  x: 1.0, y: 4.8, w: 8.0, h: 0.4,
  fontSize: 12,
  fontFace: 'Segoe UI',
  italic: true,
  color: C.GOLD,
  align: 'center',
  valign: 'middle'
});

// ============================================
// SLIDE 10: COMO COMEÇAR
// ============================================
let slide10 = pptx.addSlide();
slide10.background = { color: C.GRAY_50 };
slide10.transition = TRANSITION;
addGoldBar(slide10);
addLogoFooter(slide10);
addSlideNumber(slide10, 10);

// Título
slide10.addText('Como começar?', {
  x: 1.0, y: 0.45, w: 8.0, h: 0.6,
  fontSize: 34,
  fontFace: 'Segoe UI',
  bold: true,
  color: C.BLACK
});

slide10.addText('Processo simples em 3 passos:', {
  x: 1.0, y: 1.0, w: 8.0, h: 0.35,
  fontSize: 14,
  fontFace: 'Segoe UI',
  color: C.GRAY_600
});

// 3 passos
const steps = [
  { num: '1', icon: I.PHONE, title: 'Conversa', desc: '30 minutos para entender sua operação. Sem compromisso.' },
  { num: '2', icon: I.CHART_UP, title: 'Diagnóstico', desc: 'Analisamos seus números e identificamos oportunidades. Gratuito.' },
  { num: '3', icon: I.ROCKET, title: 'Implementação', desc: 'Se fizer sentido, começamos em até 7 dias.' }
];

// Linha conectora
slide10.addShape('rect', {
  x: 2.2, y: 1.95, w: 5.6, h: 0.01,
  fill: { color: C.GOLD_200 }
});

steps.forEach((s, i) => {
  const x = 1.0 + (i * 3.0);

  // Círculo numerado
  slide10.addShape('ellipse', {
    x: x + 0.9, y: 1.6, w: 0.8, h: 0.8,
    fill: { color: C.GOLD },
    shadow: { type: 'outer', blur: 3, offset: 2, angle: 45, color: C.GOLD_800, opacity: 0.25 }
  });

  slide10.addText(s.num, {
    x: x + 0.9, y: 1.73, w: 0.8, h: 0.55,
    fontSize: 20,
    fontFace: 'Segoe UI',
    bold: true,
    color: C.WHITE,
    align: 'center'
  });

  // Card
  slide10.addShape('rect', {
    x: x, y: 2.55, w: 2.6, h: 1.8,
    fill: { color: C.WHITE },
    line: { color: C.GRAY_200, width: 1 },
    shadow: { type: 'outer', blur: 2, offset: 1, angle: 45, color: '000000', opacity: 0.05 }
  });

  // Ícone
  slide10.addText(s.icon, {
    x: x, y: 2.65, w: 2.6, h: 0.45,
    fontSize: 22,
    align: 'center'
  });

  // Título
  slide10.addText(s.title, {
    x: x, y: 3.1, w: 2.6, h: 0.35,
    fontSize: 14,
    fontFace: 'Segoe UI',
    bold: true,
    color: C.BLACK,
    align: 'center'
  });

  // Descrição
  slide10.addText(s.desc, {
    x: x + 0.1, y: 3.5, w: 2.4, h: 0.7,
    fontSize: 10,
    fontFace: 'Segoe UI',
    color: C.GRAY_600,
    align: 'center'
  });
});

// Tempo para resultados
slide10.addShape('rect', {
  x: 1.5, y: 4.55, w: 7.0, h: 0.55,
  fill: { color: C.WHITE },
  line: { color: C.GOLD, width: 1 }
});

slide10.addText(`${I.CLOCK}  Resultados no primeiro mês. ROI claro em 90 dias.`, {
  x: 1.5, y: 4.6, w: 7.0, h: 0.45,
  fontSize: 12,
  fontFace: 'Segoe UI',
  color: C.BLACK,
  align: 'center',
  valign: 'middle'
});

// ============================================
// SLIDE 11: VAMOS CONVERSAR?
// ============================================
let slide11 = pptx.addSlide();
slide11.background = { color: C.WHITE };
slide11.transition = TRANSITION;
addGoldBar(slide11);
addSlideNumber(slide11, 11);

// Título
slide11.addText('Vamos conversar?', {
  x: 1.0, y: 0.5, w: 8.0, h: 0.65,
  fontSize: 36,
  fontFace: 'Segoe UI',
  bold: true,
  color: C.BLACK
});

// CTA principal
slide11.addShape('rect', {
  x: 1.5, y: 1.4, w: 7.0, h: 2.0,
  fill: { color: C.GOLD },
  shadow: { type: 'outer', blur: 6, offset: 3, angle: 45, color: C.GOLD_800, opacity: 0.35 }
});

slide11.addText(I.CALENDAR, {
  x: 1.5, y: 1.55, w: 7.0, h: 0.55,
  fontSize: 32,
  align: 'center'
});

slide11.addText('Agende uma conversa de 30 minutos', {
  x: 1.5, y: 2.1, w: 7.0, h: 0.5,
  fontSize: 20,
  fontFace: 'Segoe UI',
  bold: true,
  color: C.BLACK,
  align: 'center'
});

slide11.addText('Sem compromisso. Você sai com um diagnóstico gratuito da sua operação.', {
  x: 1.5, y: 2.6, w: 7.0, h: 0.4,
  fontSize: 12,
  fontFace: 'Segoe UI',
  color: C.GRAY_800,
  align: 'center'
});

// Contatos
slide11.addShape('rect', {
  x: 1.5, y: 3.7, w: 7.0, h: 1.2,
  fill: { color: C.BLACK }
});

slide11.addText('NOSSOS CANAIS', {
  x: 1.5, y: 3.8, w: 7.0, h: 0.3,
  fontSize: 10,
  fontFace: 'Segoe UI',
  bold: true,
  color: C.GOLD,
  align: 'center'
});

// Linha de contatos
slide11.addText(`${I.PHONE}  WhatsApp: (11) 91234-5678`, {
  x: 1.7, y: 4.2, w: 2.2, h: 0.4,
  fontSize: 10,
  fontFace: 'Segoe UI',
  color: C.WHITE,
  align: 'center'
});

slide11.addText(`${I.EMAIL}  contato@l8capital.com.br`, {
  x: 4.0, y: 4.2, w: 2.2, h: 0.4,
  fontSize: 10,
  fontFace: 'Segoe UI',
  color: C.WHITE,
  align: 'center'
});

slide11.addText(`${I.GLOBE}  l8capital.com.br`, {
  x: 6.3, y: 4.2, w: 2.0, h: 0.4,
  fontSize: 10,
  fontFace: 'Segoe UI',
  color: C.WHITE,
  align: 'center'
});

// Garantias
slide11.addText(`${I.CHECK} Gratuito   ${I.CHECK} Sem fidelidade   ${I.CHECK} Resultados no 1º mês`, {
  x: 1.0, y: 5.1, w: 8.0, h: 0.3,
  fontSize: 10,
  fontFace: 'Segoe UI',
  color: C.GRAY_500,
  align: 'center'
});

// ============================================
// SLIDE 12: ENCERRAMENTO
// ============================================
let slide12 = pptx.addSlide();
slide12.background = { color: C.BLACK };
slide12.transition = TRANSITION;

// Linhas decorativas
slide12.addShape('rect', { x: 0, y: 0, w: 0.025, h: '100%', fill: { color: C.GOLD } });
slide12.addShape('rect', { x: 9.975, y: 0, w: 0.025, h: '100%', fill: { color: C.GOLD } });

// Logo
slide12.addText('L8', {
  x: 0, y: 1.7, w: '100%', h: 0.85,
  fontSize: 76,
  fontFace: 'Segoe UI',
  bold: true,
  color: C.GOLD,
  align: 'center'
});

slide12.addText('C A P I T A L', {
  x: 0, y: 2.5, w: '100%', h: 0.4,
  fontSize: 18,
  fontFace: 'Segoe UI',
  color: C.GOLD,
  align: 'center',
  charSpacing: 7
});

// Linha
slide12.addShape('rect', { x: 3.7, y: 3.0, w: 2.6, h: 0.01, fill: { color: C.GOLD } });

// Tagline
slide12.addText('Sua imobiliária mais forte.', {
  x: 0, y: 3.15, w: '100%', h: 0.45,
  fontSize: 17,
  fontFace: 'Segoe UI',
  italic: true,
  color: C.WHITE,
  align: 'center'
});

// Contato
slide12.addShape('rect', {
  x: 2.8, y: 3.85, w: 4.4, h: 0.5,
  fill: { color: C.GRAY_800 },
  line: { color: C.GRAY_700, width: 1 }
});

slide12.addText('contato@l8capital.com.br  |  l8capital.com.br', {
  x: 2.8, y: 3.9, w: 4.4, h: 0.4,
  fontSize: 10,
  fontFace: 'Segoe UI',
  color: C.GRAY_400,
  align: 'center',
  valign: 'middle'
});

// Agradecimento
slide12.addText('Obrigado pelo seu tempo.', {
  x: 0, y: 4.6, w: '100%', h: 0.35,
  fontSize: 13,
  fontFace: 'Segoe UI',
  color: C.GRAY_500,
  align: 'center'
});

// Copyright
slide12.addText('© 2026 L8 Capital. Todos os direitos reservados.', {
  x: 0, y: 5.2, w: '100%', h: 0.25,
  fontSize: 9,
  fontFace: 'Segoe UI',
  color: C.GRAY_600,
  align: 'center'
});

// ============================================
// SALVAR APRESENTAÇÃO
// ============================================
const outputPath = 'L8_Capital_Cliente.pptx';
pptx.writeFile({ fileName: outputPath })
  .then(fileName => {
    console.log('');
    console.log('╔═══════════════════════════════════════════════════════════════╗');
    console.log('║                                                               ║');
    console.log('║   ✅ APRESENTAÇÃO PARA CLIENTES CRIADA COM SUCESSO!           ║');
    console.log('║                                                               ║');
    console.log('╠═══════════════════════════════════════════════════════════════╣');
    console.log('║                                                               ║');
    console.log(`║   📁 Arquivo: ${fileName.padEnd(46)}║`);
    console.log('║                                                               ║');
    console.log('╠═══════════════════════════════════════════════════════════════╣');
    console.log('║                                                               ║');
    console.log('║   📊 ESTRUTURA (12 slides - ~8 minutos):                      ║');
    console.log('║                                                               ║');
    console.log('║   1. Capa                                                     ║');
    console.log('║   2. Você conhece esse cenário? (conexão)                     ║');
    console.log('║   3. E se existisse uma solução? (transição)                  ║');
    console.log('║   4. Conheça a L8 Capital (institucional)                     ║');
    console.log('║   5. O que fazemos (3 pilares)                                ║');
    console.log('║   6. Seguros (detalhe)                                        ║');
    console.log('║   7. Financeiro (detalhe)                                     ║');
    console.log('║   8. Na prática (números)                                     ║');
    console.log('║   9. Por que a L8? (diferenciais)                             ║');
    console.log('║   10. Como começar (processo)                                 ║');
    console.log('║   11. Vamos conversar? (CTA)                                  ║');
    console.log('║   12. Encerramento                                            ║');
    console.log('║                                                               ║');
    console.log('╠═══════════════════════════════════════════════════════════════╣');
    console.log('║                                                               ║');
    console.log('║   🎯 OTIMIZADO PARA:                                          ║');
    console.log('║                                                               ║');
    console.log('║   ✓ Primeira reunião com cliente potencial                    ║');
    console.log('║   ✓ Começa com o problema do cliente (conexão)                ║');
    console.log('║   ✓ Benefícios antes de features                              ║');
    console.log('║   ✓ Tom profissional (nem vendedor, nem frio)                 ║');
    console.log('║   ✓ 1 ideia principal por slide                               ║');
    console.log('║   ✓ CTA claro e fácil (agendar conversa)                      ║');
    console.log('║                                                               ║');
    console.log('╚═══════════════════════════════════════════════════════════════╝');
    console.log('');
  })
  .catch(err => {
    console.error('❌ Erro:', err);
  });
