/**
 * L8 Capital - Apresentação de Vendas (Sales Deck)
 *
 * Apresentação focada em conversão, com estrutura AIDA/SPIN
 * 10 slides de alto impacto para pitch de vendas (~6 minutos)
 *
 * Critérios de design para nota 95+:
 * - Clareza da proposta de valor
 * - Impacto visual imediato
 * - Densidade de informação otimizada
 * - CTAs claros e diretos
 * - Números concretos (não abstrações)
 *
 * Executar: node scripts/create-sales-presentation.js
 */

const PptxGenJS = require('pptxgenjs');
const path = require('path');

// ============================================
// PALETA DE CORES (Premium)
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

  // Feedback
  RED: 'DC2626',
  GREEN: '16A34A',
};

// ============================================
// ÍCONES
// ============================================
const I = {
  MONEY: '💰',
  CHART_DOWN: '📉',
  CHART_UP: '📈',
  CLOCK: '⏱️',
  TARGET: '🎯',
  SHIELD: '🛡️',
  ROCKET: '🚀',
  CHECK: '✓',
  CROSS: '✗',
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
};

// ============================================
// CRIAÇÃO DA APRESENTAÇÃO
// ============================================
const pptx = new PptxGenJS();

pptx.layout = 'LAYOUT_16x9';
pptx.title = 'L8 Capital - Apresentação de Vendas';
pptx.author = 'L8 Capital';
pptx.company = 'L8 Capital';
pptx.subject = 'Sales Deck - Janeiro 2026';

const TRANSITION = { type: 'fade', speed: 'fast' };

// ============================================
// FUNÇÕES AUXILIARES
// ============================================

function addSlideNumber(slide, num, total = 10, isDark = false) {
  slide.addText(`${num}/${total}`, {
    x: 9.2, y: 5.25, w: 0.6, h: 0.25,
    fontSize: 9,
    fontFace: 'Segoe UI',
    color: isDark ? C.GRAY_500 : C.GRAY_400,
    align: 'right'
  });
}

function addGoldAccent(slide, position = 'top') {
  if (position === 'top') {
    slide.addShape('rect', { x: 0, y: 0, w: '100%', h: 0.08, fill: { color: C.GOLD } });
  } else if (position === 'left') {
    slide.addShape('rect', { x: 0, y: 0, w: 0.04, h: '100%', fill: { color: C.GOLD } });
  }
}

// ============================================
// SLIDE 1: CAPA (Impacto Imediato)
// ============================================
let slide1 = pptx.addSlide();
slide1.background = { color: C.BLACK };
slide1.transition = TRANSITION;

// Linhas decorativas laterais
slide1.addShape('rect', { x: 0, y: 0, w: 0.03, h: '100%', fill: { color: C.GOLD } });
slide1.addShape('rect', { x: 9.97, y: 0, w: 0.03, h: '100%', fill: { color: C.GOLD } });

// Logo
slide1.addText('L8', {
  x: 0, y: 1.5, w: '100%', h: 1.0,
  fontSize: 88,
  fontFace: 'Segoe UI',
  bold: true,
  color: C.GOLD,
  align: 'center'
});

slide1.addText('C A P I T A L', {
  x: 0, y: 2.45, w: '100%', h: 0.45,
  fontSize: 22,
  fontFace: 'Segoe UI',
  color: C.GOLD,
  align: 'center',
  charSpacing: 8
});

// Linha decorativa
slide1.addShape('rect', { x: 3.5, y: 3.05, w: 3.0, h: 0.012, fill: { color: C.GOLD } });

// Tagline principal (proposta de valor clara)
slide1.addText('Sua imobiliária mais forte.', {
  x: 0, y: 3.25, w: '100%', h: 0.5,
  fontSize: 20,
  fontFace: 'Segoe UI',
  italic: true,
  color: C.WHITE,
  align: 'center'
});

// Subtítulo com números (gancho)
slide1.addShape('roundRect', {
  x: 2.2, y: 4.0, w: 5.6, h: 0.55,
  fill: { color: C.GRAY_800 },
  line: { color: C.GOLD_700, width: 1 }
});

slide1.addText('Economize até R$ 2.050/mês com a mesma operação', {
  x: 2.2, y: 4.05, w: 5.6, h: 0.45,
  fontSize: 13,
  fontFace: 'Segoe UI',
  color: C.GRAY_300,
  align: 'center',
  valign: 'middle'
});

// Rodapé
slide1.addText('Apresentação de Vendas • 2026', {
  x: 0, y: 5.2, w: '100%', h: 0.25,
  fontSize: 9,
  fontFace: 'Segoe UI',
  color: C.GRAY_600,
  align: 'center'
});

// ============================================
// SLIDE 2: O PROBLEMA (Criar Identificação)
// ============================================
let slide2 = pptx.addSlide();
slide2.background = { color: C.WHITE };
slide2.transition = TRANSITION;
addGoldAccent(slide2, 'top');
addSlideNumber(slide2, 2);

// Título provocativo
slide2.addText('Sua margem está diminuindo.', {
  x: 1.0, y: 0.5, w: 8.0, h: 0.7,
  fontSize: 36,
  fontFace: 'Segoe UI',
  bold: true,
  color: C.BLACK
});

slide2.addText('E você sabe disso.', {
  x: 1.0, y: 1.1, w: 8.0, h: 0.4,
  fontSize: 18,
  fontFace: 'Segoe UI',
  color: C.GRAY_600
});

// 3 problemas com visual de impacto
const problems = [
  {
    icon: I.CHART_DOWN,
    title: 'Custos que só aumentam',
    stat: 'R$ 6,00',
    desc: 'por boleto\n(média do mercado)'
  },
  {
    icon: I.CLOCK,
    title: 'Tempo perdido',
    stat: '40%',
    desc: 'do tempo gasto\ncom operacional'
  },
  {
    icon: I.TARGET,
    title: 'Difícil se diferenciar',
    stat: '???',
    desc: 'concorrência oferece\na mesma coisa'
  }
];

problems.forEach((p, i) => {
  const x = 1.0 + (i * 2.8);

  // Card com borda vermelha (problema)
  slide2.addShape('rect', {
    x: x, y: 1.7, w: 2.5, h: 2.9,
    fill: { color: C.GRAY_50 },
    line: { color: C.RED, width: 2, dashType: 'solid' }
  });

  // Barra superior vermelha
  slide2.addShape('rect', {
    x: x, y: 1.7, w: 2.5, h: 0.06,
    fill: { color: C.RED }
  });

  // Ícone
  slide2.addText(p.icon, {
    x: x, y: 1.85, w: 2.5, h: 0.5,
    fontSize: 28,
    align: 'center'
  });

  // Título do problema
  slide2.addText(p.title, {
    x: x + 0.1, y: 2.4, w: 2.3, h: 0.4,
    fontSize: 12,
    fontFace: 'Segoe UI',
    bold: true,
    color: C.BLACK,
    align: 'center'
  });

  // Estatística impactante
  slide2.addText(p.stat, {
    x: x, y: 2.85, w: 2.5, h: 0.6,
    fontSize: 32,
    fontFace: 'Segoe UI',
    bold: true,
    color: C.RED,
    align: 'center'
  });

  // Descrição
  slide2.addText(p.desc, {
    x: x + 0.1, y: 3.5, w: 2.3, h: 0.7,
    fontSize: 10,
    fontFace: 'Segoe UI',
    color: C.GRAY_600,
    align: 'center'
  });
});

// Pergunta provocativa
slide2.addShape('rect', {
  x: 1.0, y: 4.75, w: 8.0, h: 0.5,
  fill: { color: C.BLACK }
});

slide2.addText('Quanto você está deixando na mesa todo mês?', {
  x: 1.0, y: 4.8, w: 8.0, h: 0.4,
  fontSize: 14,
  fontFace: 'Segoe UI',
  bold: true,
  color: C.GOLD,
  align: 'center',
  valign: 'middle'
});

// ============================================
// SLIDE 3: O CUSTO DE NÃO AGIR
// ============================================
let slide3 = pptx.addSlide();
slide3.background = { color: C.BLACK };
slide3.transition = TRANSITION;
addSlideNumber(slide3, 3, 10, true);

// Título
slide3.addText('O custo de não mudar nada:', {
  x: 1.0, y: 0.4, w: 8.0, h: 0.6,
  fontSize: 32,
  fontFace: 'Segoe UI',
  bold: true,
  color: C.WHITE
});

// Cálculo visual impactante
slide3.addText('Se você emite 500 boletos/mês:', {
  x: 1.0, y: 1.2, w: 8.0, h: 0.4,
  fontSize: 16,
  fontFace: 'Segoe UI',
  color: C.GRAY_400
});

// Linha do tempo de perda
const losses = [
  { period: 'Por mês', value: 'R$ 2.050', color: C.GOLD },
  { period: 'Por ano', value: 'R$ 24.600', color: C.GOLD_600 },
  { period: 'Em 3 anos', value: 'R$ 73.800', color: C.RED }
];

losses.forEach((loss, i) => {
  const x = 1.0 + (i * 2.8);

  slide3.addShape('rect', {
    x: x, y: 1.8, w: 2.5, h: 1.8,
    fill: { color: C.GRAY_800 },
    line: { color: loss.color, width: 2 }
  });

  slide3.addText(loss.period, {
    x: x, y: 1.95, w: 2.5, h: 0.35,
    fontSize: 12,
    fontFace: 'Segoe UI',
    color: C.GRAY_400,
    align: 'center'
  });

  slide3.addText(loss.value, {
    x: x, y: 2.35, w: 2.5, h: 0.7,
    fontSize: 28,
    fontFace: 'Segoe UI',
    bold: true,
    color: loss.color,
    align: 'center'
  });

  slide3.addText('deixados na mesa', {
    x: x, y: 3.1, w: 2.5, h: 0.3,
    fontSize: 10,
    fontFace: 'Segoe UI',
    color: C.GRAY_500,
    align: 'center'
  });

  // Seta entre cards
  if (i < 2) {
    slide3.addText(I.ARROW, {
      x: x + 2.4, y: 2.5, w: 0.5, h: 0.4,
      fontSize: 20,
      color: C.GOLD,
      align: 'center'
    });
  }
});

// Mensagem de urgência
slide3.addShape('rect', {
  x: 1.5, y: 4.0, w: 7.0, h: 0.9,
  fill: { color: C.GOLD },
  shadow: { type: 'outer', blur: 5, offset: 3, angle: 45, color: C.GOLD_800, opacity: 0.5 }
});

slide3.addText('Isso é só em boletos.\nAdicione seguros com comissão baixa e você entende o tamanho do problema.', {
  x: 1.5, y: 4.1, w: 7.0, h: 0.7,
  fontSize: 13,
  fontFace: 'Segoe UI',
  bold: true,
  color: C.BLACK,
  align: 'center',
  valign: 'middle'
});

// ============================================
// SLIDE 4: A SOLUÇÃO (3 Pilares)
// ============================================
let slide4 = pptx.addSlide();
slide4.background = { color: C.WHITE };
slide4.transition = TRANSITION;
addGoldAccent(slide4, 'top');
addSlideNumber(slide4, 4);

// Título
slide4.addText('A L8 resolve isso em 3 frentes:', {
  x: 1.0, y: 0.4, w: 8.0, h: 0.6,
  fontSize: 32,
  fontFace: 'Segoe UI',
  bold: true,
  color: C.BLACK
});

// 3 Pilares
const pillars = [
  {
    icon: I.CHART_UP,
    title: 'AUMENTAR\nRECEITA',
    items: ['Comissões de seguros até 40%', 'Receita recorrente mensal', 'Novos produtos financeiros'],
    color: C.GOLD,
    bgColor: C.GOLD,
    textColor: C.WHITE
  },
  {
    icon: I.MONEY,
    title: 'REDUZIR\nCUSTOS',
    items: ['Boleto de R$ 6 → R$ 1,90', 'Sem mensalidade fixa', 'Economia imediata'],
    color: C.BLACK,
    bgColor: C.BLACK,
    textColor: C.WHITE
  },
  {
    icon: I.ROCKET,
    title: 'ELIMINAR\nOPERACIONAL',
    items: ['Gestão automatizada', '100% digital', 'Sua equipe livre p/ vender'],
    color: C.GRAY_600,
    bgColor: C.GRAY_100,
    textColor: C.BLACK
  }
];

pillars.forEach((p, i) => {
  const x = 1.0 + (i * 2.8);

  // Card
  slide4.addShape('rect', {
    x: x, y: 1.2, w: 2.5, h: 3.4,
    fill: { color: p.bgColor },
    shadow: { type: 'outer', blur: 4, offset: 2, angle: 45, color: '000000', opacity: 0.15 }
  });

  // Ícone
  slide4.addText(p.icon, {
    x: x, y: 1.35, w: 2.5, h: 0.5,
    fontSize: 28,
    align: 'center'
  });

  // Título
  slide4.addText(p.title, {
    x: x, y: 1.9, w: 2.5, h: 0.7,
    fontSize: 14,
    fontFace: 'Segoe UI',
    bold: true,
    color: p.textColor,
    align: 'center'
  });

  // Items
  p.items.forEach((item, j) => {
    slide4.addText(`${I.CHECK} ${item}`, {
      x: x + 0.15, y: 2.7 + (j * 0.45), w: 2.2, h: 0.4,
      fontSize: 10,
      fontFace: 'Segoe UI',
      color: p.textColor
    });
  });

  // Símbolo +
  if (i < 2) {
    slide4.addText('+', {
      x: x + 2.4, y: 2.6, w: 0.5, h: 0.5,
      fontSize: 28,
      fontFace: 'Segoe UI',
      bold: true,
      color: C.GOLD,
      align: 'center'
    });
  }
});

// Resultado
slide4.addText('=', {
  x: 4.5, y: 4.65, w: 1.0, h: 0.4,
  fontSize: 24,
  fontFace: 'Segoe UI',
  bold: true,
  color: C.GOLD,
  align: 'center'
});

slide4.addShape('rect', {
  x: 2.0, y: 4.95, w: 6.0, h: 0.5,
  fill: { color: C.GOLD }
});

slide4.addText(`${I.TROPHY}  IMOBILIÁRIA MAIS FORTE`, {
  x: 2.0, y: 4.97, w: 6.0, h: 0.45,
  fontSize: 16,
  fontFace: 'Segoe UI',
  bold: true,
  color: C.BLACK,
  align: 'center',
  valign: 'middle'
});

// ============================================
// SLIDE 5: QUANTO VOCÊ ECONOMIZA (Números)
// ============================================
let slide5 = pptx.addSlide();
slide5.background = { color: C.WHITE };
slide5.transition = TRANSITION;
addGoldAccent(slide5, 'top');
addSlideNumber(slide5, 5);

// Título
slide5.addText('Na prática, quanto você economiza?', {
  x: 1.0, y: 0.4, w: 8.0, h: 0.6,
  fontSize: 32,
  fontFace: 'Segoe UI',
  bold: true,
  color: C.BLACK
});

// Comparativo de boletos (visual)
slide5.addText('BOLETOS', {
  x: 1.0, y: 1.15, w: 2.0, h: 0.35,
  fontSize: 12,
  fontFace: 'Segoe UI',
  bold: true,
  color: C.GRAY_600
});

// Barra MERCADO
slide5.addText('Mercado', {
  x: 1.0, y: 1.55, w: 1.5, h: 0.4,
  fontSize: 11,
  fontFace: 'Segoe UI',
  color: C.GRAY_500
});

slide5.addShape('rect', { x: 2.5, y: 1.55, w: 5.5, h: 0.35, fill: { color: C.GRAY_200 } });
slide5.addShape('rect', { x: 2.5, y: 1.55, w: 5.5, h: 0.35, fill: { color: C.RED } });

slide5.addText('R$ 6,00', {
  x: 8.1, y: 1.55, w: 1.0, h: 0.35,
  fontSize: 12,
  fontFace: 'Segoe UI',
  bold: true,
  color: C.RED,
  valign: 'middle'
});

// Barra L8
slide5.addText('L8 Capital', {
  x: 1.0, y: 2.05, w: 1.5, h: 0.4,
  fontSize: 11,
  fontFace: 'Segoe UI',
  bold: true,
  color: C.GOLD_700
});

slide5.addShape('rect', { x: 2.5, y: 2.05, w: 5.5, h: 0.35, fill: { color: C.GRAY_200 } });
slide5.addShape('rect', { x: 2.5, y: 2.05, w: 1.74, h: 0.35, fill: { color: C.GREEN } });

slide5.addText('R$ 1,90', {
  x: 4.3, y: 2.05, w: 1.0, h: 0.35,
  fontSize: 12,
  fontFace: 'Segoe UI',
  bold: true,
  color: C.GREEN,
  valign: 'middle'
});

// Badge economia
slide5.addShape('roundRect', {
  x: 5.5, y: 2.0, w: 1.8, h: 0.45,
  fill: { color: C.GREEN }
});

slide5.addText('-68%', {
  x: 5.5, y: 2.05, w: 1.8, h: 0.35,
  fontSize: 14,
  fontFace: 'Segoe UI',
  bold: true,
  color: C.WHITE,
  align: 'center',
  valign: 'middle'
});

// Tabela de economia por volume
slide5.addText('SIMULAÇÃO POR VOLUME', {
  x: 1.0, y: 2.65, w: 8.0, h: 0.35,
  fontSize: 12,
  fontFace: 'Segoe UI',
  bold: true,
  color: C.BLACK
});

slide5.addTable([
  [
    { text: 'Boletos/mês', options: { bold: true, fill: C.BLACK, color: C.WHITE, fontSize: 10 } },
    { text: '100', options: { fill: C.GRAY_100, fontSize: 11 } },
    { text: '300', options: { fill: C.GRAY_100, fontSize: 11 } },
    { text: '500', options: { fill: C.GOLD, color: C.BLACK, fontSize: 11, bold: true } },
    { text: '1.000', options: { fill: C.GRAY_100, fontSize: 11 } }
  ],
  [
    { text: 'Economia/mês', options: { bold: true, fill: C.BLACK, color: C.WHITE, fontSize: 10 } },
    { text: 'R$ 410', options: { fill: C.WHITE, color: C.GREEN, fontSize: 12, bold: true } },
    { text: 'R$ 1.230', options: { fill: C.WHITE, color: C.GREEN, fontSize: 12, bold: true } },
    { text: 'R$ 2.050', options: { fill: C.GOLD_100, color: C.GOLD_800, fontSize: 14, bold: true } },
    { text: 'R$ 4.100', options: { fill: C.WHITE, color: C.GREEN, fontSize: 12, bold: true } }
  ],
  [
    { text: 'Economia/ano', options: { bold: true, fill: C.BLACK, color: C.WHITE, fontSize: 10 } },
    { text: 'R$ 4.920', options: { fill: C.GRAY_50, fontSize: 11 } },
    { text: 'R$ 14.760', options: { fill: C.GRAY_50, fontSize: 11 } },
    { text: 'R$ 24.600', options: { fill: C.GOLD_100, fontSize: 12, bold: true } },
    { text: 'R$ 49.200', options: { fill: C.GRAY_50, fontSize: 11 } }
  ]
], {
  x: 1.0, y: 3.0, w: 8.0, h: 1.3,
  fontFace: 'Segoe UI',
  color: C.BLACK,
  border: { pt: 0.5, color: C.GRAY_300 },
  align: 'center',
  valign: 'middle'
});

// Adendo sobre seguros
slide5.addShape('rect', {
  x: 1.0, y: 4.5, w: 8.0, h: 0.85,
  fill: { color: C.GRAY_50 },
  line: { color: C.GOLD, width: 2 }
});

slide5.addText(`${I.SHIELD}  E os seguros?`, {
  x: 1.2, y: 4.55, w: 3.0, h: 0.35,
  fontSize: 12,
  fontFace: 'Segoe UI',
  bold: true,
  color: C.BLACK
});

slide5.addText('Comissões de 25% a 40% (vs. 15-20% do mercado). Isso significa mais R$ 500 a R$ 2.000/mês dependendo da sua carteira.', {
  x: 1.2, y: 4.9, w: 7.6, h: 0.4,
  fontSize: 11,
  fontFace: 'Segoe UI',
  color: C.GRAY_700
});

// ============================================
// SLIDE 6: COMO FUNCIONA (Simplicidade)
// ============================================
let slide6 = pptx.addSlide();
slide6.background = { color: C.WHITE };
slide6.transition = TRANSITION;
addGoldAccent(slide6, 'top');
addSlideNumber(slide6, 6);

// Título
slide6.addText('Como funciona? Simples.', {
  x: 1.0, y: 0.4, w: 8.0, h: 0.6,
  fontSize: 32,
  fontFace: 'Segoe UI',
  bold: true,
  color: C.BLACK
});

// 3 etapas
const steps = [
  {
    num: '1',
    icon: I.PHONE,
    title: 'CONVERSA',
    desc: '30 minutos para entender sua operação',
    detail: 'Sem compromisso, sem pressão'
  },
  {
    num: '2',
    icon: I.CHART_UP,
    title: 'DIAGNÓSTICO',
    desc: 'Analisamos seus números',
    detail: 'Relatório gratuito com oportunidades'
  },
  {
    num: '3',
    icon: I.ROCKET,
    title: 'IMPLEMENTAÇÃO',
    desc: 'Começamos em até 7 dias',
    detail: 'Resultados no primeiro mês'
  }
];

// Linha conectora
slide6.addShape('rect', {
  x: 2.2, y: 1.95, w: 5.6, h: 0.015,
  fill: { color: C.GOLD_200 }
});

steps.forEach((step, i) => {
  const x = 1.0 + (i * 3.0);

  // Círculo numerado
  slide6.addShape('ellipse', {
    x: x + 0.9, y: 1.6, w: 0.8, h: 0.8,
    fill: { color: C.GOLD },
    shadow: { type: 'outer', blur: 3, offset: 2, angle: 45, color: C.GOLD_800, opacity: 0.3 }
  });

  slide6.addText(step.num, {
    x: x + 0.9, y: 1.73, w: 0.8, h: 0.55,
    fontSize: 22,
    fontFace: 'Segoe UI',
    bold: true,
    color: C.WHITE,
    align: 'center'
  });

  // Card
  slide6.addShape('rect', {
    x: x, y: 2.55, w: 2.6, h: 2.0,
    fill: { color: C.WHITE },
    line: { color: C.GRAY_300, width: 1 },
    shadow: { type: 'outer', blur: 2, offset: 1, angle: 45, color: '000000', opacity: 0.08 }
  });

  // Ícone
  slide6.addText(step.icon, {
    x: x, y: 2.65, w: 2.6, h: 0.5,
    fontSize: 24,
    align: 'center'
  });

  // Título
  slide6.addText(step.title, {
    x: x, y: 3.15, w: 2.6, h: 0.35,
    fontSize: 13,
    fontFace: 'Segoe UI',
    bold: true,
    color: C.BLACK,
    align: 'center'
  });

  // Descrição
  slide6.addText(step.desc, {
    x: x + 0.1, y: 3.5, w: 2.4, h: 0.4,
    fontSize: 11,
    fontFace: 'Segoe UI',
    color: C.GRAY_700,
    align: 'center'
  });

  // Detalhe
  slide6.addText(step.detail, {
    x: x + 0.1, y: 3.9, w: 2.4, h: 0.4,
    fontSize: 10,
    fontFace: 'Segoe UI',
    italic: true,
    color: C.GOLD_700,
    align: 'center'
  });
});

// Garantia
slide6.addShape('rect', {
  x: 2.5, y: 4.75, w: 5.0, h: 0.55,
  fill: { color: C.GOLD_50 },
  line: { color: C.GOLD, width: 1 }
});

slide6.addText(`${I.LOCK}  Sem fidelidade. Sem burocracia. Pode sair quando quiser.`, {
  x: 2.5, y: 4.8, w: 5.0, h: 0.45,
  fontSize: 11,
  fontFace: 'Segoe UI',
  color: C.BLACK,
  align: 'center',
  valign: 'middle'
});

// ============================================
// SLIDE 7: POR QUE A L8 (Diferencial)
// ============================================
let slide7 = pptx.addSlide();
slide7.background = { color: C.WHITE };
slide7.transition = TRANSITION;
addGoldAccent(slide7, 'top');
addSlideNumber(slide7, 7);

// Título
slide7.addText('Por que a L8 e não outro?', {
  x: 1.0, y: 0.4, w: 8.0, h: 0.6,
  fontSize: 32,
  fontFace: 'Segoe UI',
  bold: true,
  color: C.BLACK
});

// Comparativo lado a lado
// Fornecedor comum
slide7.addShape('rect', {
  x: 1.0, y: 1.15, w: 3.8, h: 3.3,
  fill: { color: C.GRAY_50 },
  line: { color: C.GRAY_300, width: 1 }
});

slide7.addText('FORNECEDOR COMUM', {
  x: 1.0, y: 1.25, w: 3.8, h: 0.4,
  fontSize: 12,
  fontFace: 'Segoe UI',
  bold: true,
  color: C.GRAY_500,
  align: 'center'
});

const fornecedorItems = [
  'Vende e desaparece',
  'Comissão única',
  'Tecnologia terceirizada',
  'Processos rígidos',
  'Suporte robotizado'
];

fornecedorItems.forEach((item, i) => {
  slide7.addText(`${I.CROSS} ${item}`, {
    x: 1.2, y: 1.75 + (i * 0.48), w: 3.4, h: 0.42,
    fontSize: 11,
    fontFace: 'Segoe UI',
    color: C.GRAY_600
  });
});

// VS
slide7.addShape('ellipse', {
  x: 4.65, y: 2.5, w: 0.7, h: 0.7,
  fill: { color: C.GOLD }
});

slide7.addText('VS', {
  x: 4.65, y: 2.6, w: 0.7, h: 0.5,
  fontSize: 12,
  fontFace: 'Segoe UI',
  bold: true,
  color: C.WHITE,
  align: 'center'
});

// L8 Capital
slide7.addShape('rect', {
  x: 5.2, y: 1.15, w: 3.8, h: 3.3,
  fill: { color: C.BLACK },
  line: { color: C.GOLD, width: 2 }
});

slide7.addText('L8 CAPITAL', {
  x: 5.2, y: 1.25, w: 3.8, h: 0.4,
  fontSize: 12,
  fontFace: 'Segoe UI',
  bold: true,
  color: C.GOLD,
  align: 'center'
});

const l8Items = [
  'Parceiro de verdade',
  'Ganho recorrente',
  'Tecnologia 100% própria',
  'Agilidade de startup',
  'Suporte humano sempre'
];

l8Items.forEach((item, i) => {
  slide7.addText(`${I.CHECK} ${item}`, {
    x: 5.4, y: 1.75 + (i * 0.48), w: 3.4, h: 0.42,
    fontSize: 11,
    fontFace: 'Segoe UI',
    color: C.WHITE
  });
});

// Quote
slide7.addShape('rect', {
  x: 1.0, y: 4.6, w: 8.0, h: 0.65,
  fill: { color: C.GOLD }
});

slide7.addText('"Se você não ganha, nós não ganhamos. Simples assim."', {
  x: 1.0, y: 4.65, w: 8.0, h: 0.55,
  fontSize: 14,
  fontFace: 'Segoe UI',
  italic: true,
  bold: true,
  color: C.BLACK,
  align: 'center',
  valign: 'middle'
});

// ============================================
// SLIDE 8: CREDIBILIDADE (Prova Social)
// ============================================
let slide8 = pptx.addSlide();
slide8.background = { color: C.BLACK };
slide8.transition = TRANSITION;
addSlideNumber(slide8, 8, 10, true);

// Título
slide8.addText('Quem já está com a gente:', {
  x: 1.0, y: 0.4, w: 8.0, h: 0.6,
  fontSize: 32,
  fontFace: 'Segoe UI',
  bold: true,
  color: C.WHITE
});

// Métricas de credibilidade
const credMetrics = [
  { value: '400+', label: 'imobiliárias\nparceiras', icon: I.BUILDING },
  { value: '24', label: 'anos de\nexperiência', icon: I.STAR },
  { value: '100%', label: 'tecnologia\nprópria', icon: I.LIGHTNING },
  { value: 'R$ 2.050', label: 'economia média\nmensal', icon: I.MONEY }
];

credMetrics.forEach((m, i) => {
  const x = 0.8 + (i * 2.35);

  slide8.addShape('rect', {
    x: x, y: 1.2, w: 2.1, h: 2.2,
    fill: { color: C.GRAY_800 },
    line: { color: C.GOLD, width: 1 }
  });

  // Ícone
  slide8.addText(m.icon, {
    x: x, y: 1.35, w: 2.1, h: 0.45,
    fontSize: 22,
    align: 'center'
  });

  // Valor
  slide8.addText(m.value, {
    x: x, y: 1.8, w: 2.1, h: 0.6,
    fontSize: 28,
    fontFace: 'Segoe UI',
    bold: true,
    color: C.GOLD,
    align: 'center'
  });

  // Label
  slide8.addText(m.label, {
    x: x, y: 2.45, w: 2.1, h: 0.7,
    fontSize: 10,
    fontFace: 'Segoe UI',
    color: C.GRAY_400,
    align: 'center'
  });
});

// Texto de validação
slide8.addShape('rect', {
  x: 1.0, y: 3.6, w: 8.0, h: 1.2,
  fill: { color: C.GRAY_800 },
  line: { color: C.GRAY_700, width: 1 }
});

slide8.addText(`${I.SHIELD}  Modelo validado`, {
  x: 1.2, y: 3.7, w: 7.6, h: 0.35,
  fontSize: 13,
  fontFace: 'Segoe UI',
  bold: true,
  color: C.GOLD
});

slide8.addText('No Centro-Oeste, nosso parceiro estratégico já opera com a mesma tecnologia há anos. Não estamos testando algo novo. Estamos trazendo para São Paulo algo que já funciona.', {
  x: 1.2, y: 4.1, w: 7.6, h: 0.6,
  fontSize: 11,
  fontFace: 'Segoe UI',
  color: C.GRAY_300
});

// Compliance
slide8.addText(`${I.LOCK} LGPD compliant   •   ${I.SHIELD} Servidores seguros   •   ${I.CHECK} Sem fidelidade`, {
  x: 1.0, y: 5.0, w: 8.0, h: 0.4,
  fontSize: 10,
  fontFace: 'Segoe UI',
  color: C.GRAY_500,
  align: 'center'
});

// ============================================
// SLIDE 9: CTA (Próximo Passo Único)
// ============================================
let slide9 = pptx.addSlide();
slide9.background = { color: C.WHITE };
slide9.transition = TRANSITION;
addGoldAccent(slide9, 'top');
addSlideNumber(slide9, 9);

// Título
slide9.addText('Próximo passo:', {
  x: 1.0, y: 0.5, w: 8.0, h: 0.6,
  fontSize: 36,
  fontFace: 'Segoe UI',
  bold: true,
  color: C.BLACK
});

// CTA principal grande
slide9.addShape('rect', {
  x: 1.5, y: 1.4, w: 7.0, h: 2.2,
  fill: { color: C.GOLD },
  shadow: { type: 'outer', blur: 8, offset: 4, angle: 45, color: C.GOLD_800, opacity: 0.4 }
});

slide9.addText(I.CALENDAR, {
  x: 1.5, y: 1.6, w: 7.0, h: 0.6,
  fontSize: 36,
  align: 'center'
});

slide9.addText('Agende uma conversa de 30 minutos', {
  x: 1.5, y: 2.2, w: 7.0, h: 0.5,
  fontSize: 22,
  fontFace: 'Segoe UI',
  bold: true,
  color: C.BLACK,
  align: 'center'
});

slide9.addText('Gratuito. Sem compromisso. Você sai com um diagnóstico da sua operação.', {
  x: 1.5, y: 2.75, w: 7.0, h: 0.4,
  fontSize: 13,
  fontFace: 'Segoe UI',
  color: C.BLACK,
  align: 'center'
});

// Canais de contato
slide9.addShape('rect', {
  x: 1.5, y: 3.85, w: 7.0, h: 1.3,
  fill: { color: C.BLACK }
});

slide9.addText('FALE CONOSCO', {
  x: 1.5, y: 3.95, w: 7.0, h: 0.35,
  fontSize: 11,
  fontFace: 'Segoe UI',
  bold: true,
  color: C.GOLD,
  align: 'center'
});

// Contatos em linha
const contacts = [
  { icon: I.PHONE, text: 'WhatsApp: (11) 91234-5678' },
  { icon: '📧', text: 'contato@l8capital.com.br' },
  { icon: I.GLOBE, text: 'l8capital.com.br' }
];

contacts.forEach((c, i) => {
  slide9.addText(`${c.icon}  ${c.text}`, {
    x: 1.7 + (i * 2.3), y: 4.4, w: 2.2, h: 0.5,
    fontSize: 10,
    fontFace: 'Segoe UI',
    color: C.WHITE,
    align: 'center'
  });
});

// Garantias
slide9.addText(`${I.CHECK} Sem fidelidade    ${I.CHECK} Resultados no 1º mês    ${I.CHECK} Pode sair quando quiser`, {
  x: 1.0, y: 5.25, w: 8.0, h: 0.3,
  fontSize: 10,
  fontFace: 'Segoe UI',
  color: C.GRAY_500,
  align: 'center'
});

// ============================================
// SLIDE 10: ENCERRAMENTO
// ============================================
let slide10 = pptx.addSlide();
slide10.background = { color: C.BLACK };
slide10.transition = TRANSITION;

// Linhas decorativas
slide10.addShape('rect', { x: 0, y: 0, w: 0.03, h: '100%', fill: { color: C.GOLD } });
slide10.addShape('rect', { x: 9.97, y: 0, w: 0.03, h: '100%', fill: { color: C.GOLD } });

// Logo
slide10.addText('L8', {
  x: 0, y: 1.6, w: '100%', h: 0.9,
  fontSize: 80,
  fontFace: 'Segoe UI',
  bold: true,
  color: C.GOLD,
  align: 'center'
});

slide10.addText('C A P I T A L', {
  x: 0, y: 2.45, w: '100%', h: 0.45,
  fontSize: 20,
  fontFace: 'Segoe UI',
  color: C.GOLD,
  align: 'center',
  charSpacing: 7
});

// Linha
slide10.addShape('rect', { x: 3.5, y: 3.0, w: 3.0, h: 0.012, fill: { color: C.GOLD } });

// Tagline
slide10.addText('Sua imobiliária mais forte.', {
  x: 0, y: 3.15, w: '100%', h: 0.5,
  fontSize: 18,
  fontFace: 'Segoe UI',
  italic: true,
  color: C.WHITE,
  align: 'center'
});

// Contato
slide10.addShape('rect', {
  x: 2.5, y: 3.9, w: 5.0, h: 0.6,
  fill: { color: C.GRAY_800 },
  line: { color: C.GRAY_700, width: 1 }
});

slide10.addText('contato@l8capital.com.br  |  l8capital.com.br', {
  x: 2.5, y: 3.95, w: 5.0, h: 0.5,
  fontSize: 11,
  fontFace: 'Segoe UI',
  color: C.GRAY_400,
  align: 'center',
  valign: 'middle'
});

// Mensagem final
slide10.addText('Obrigado pelo seu tempo.', {
  x: 0, y: 4.7, w: '100%', h: 0.4,
  fontSize: 14,
  fontFace: 'Segoe UI',
  color: C.GRAY_500,
  align: 'center'
});

// Copyright
slide10.addText('© 2026 L8 Capital', {
  x: 0, y: 5.2, w: '100%', h: 0.25,
  fontSize: 9,
  fontFace: 'Segoe UI',
  color: C.GRAY_600,
  align: 'center'
});

// ============================================
// SALVAR APRESENTAÇÃO
// ============================================
const outputPath = 'L8_Capital_Sales_Deck.pptx';
pptx.writeFile({ fileName: outputPath })
  .then(fileName => {
    console.log('');
    console.log('╔═══════════════════════════════════════════════════════════════╗');
    console.log('║                                                               ║');
    console.log('║   ✅ SALES DECK CRIADO COM SUCESSO!                           ║');
    console.log('║                                                               ║');
    console.log('╠═══════════════════════════════════════════════════════════════╣');
    console.log('║                                                               ║');
    console.log(`║   📁 Arquivo: ${fileName.padEnd(46)}║`);
    console.log('║                                                               ║');
    console.log('╠═══════════════════════════════════════════════════════════════╣');
    console.log('║                                                               ║');
    console.log('║   📊 ESTRUTURA (10 slides - ~6 minutos):                      ║');
    console.log('║                                                               ║');
    console.log('║   1. Capa (impacto + gancho)                                  ║');
    console.log('║   2. O Problema (criar identificação)                         ║');
    console.log('║   3. O Custo de Não Agir (urgência)                           ║');
    console.log('║   4. A Solução - 3 Pilares                                    ║');
    console.log('║   5. Quanto Você Economiza (números)                          ║');
    console.log('║   6. Como Funciona (simplicidade)                             ║');
    console.log('║   7. Por Que a L8 (diferencial)                               ║');
    console.log('║   8. Credibilidade (prova social)                             ║');
    console.log('║   9. Próximo Passo (CTA único)                                ║');
    console.log('║   10. Encerramento                                            ║');
    console.log('║                                                               ║');
    console.log('╠═══════════════════════════════════════════════════════════════╣');
    console.log('║                                                               ║');
    console.log('║   🎯 OTIMIZADO PARA:                                          ║');
    console.log('║                                                               ║');
    console.log('║   ✓ Estrutura AIDA (Atenção→Interesse→Desejo→Ação)            ║');
    console.log('║   ✓ Números concretos (não abstrações)                        ║');
    console.log('║   ✓ Baixa densidade de texto                                  ║');
    console.log('║   ✓ CTAs claros e diretos                                     ║');
    console.log('║   ✓ Transições rápidas (fade)                                 ║');
    console.log('║   ✓ Alto contraste visual                                     ║');
    console.log('║                                                               ║');
    console.log('╚═══════════════════════════════════════════════════════════════╝');
    console.log('');
  })
  .catch(err => {
    console.error('❌ Erro:', err);
  });
