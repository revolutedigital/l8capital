/**
 * L8 Capital - Gerador de Apresentação PowerPoint v2.0
 * Versão aprimorada com assets visuais, gráficos e animações
 *
 * Melhorias implementadas:
 * - Logo real em imagem PNG
 * - Ícones profissionais (caracteres Unicode premium)
 * - Gráficos de dados (barras, comparativos visuais)
 * - Tipografia aprimorada
 * - Transições e animações
 * - Mais espaço negativo
 * - Elementos visuais premium
 *
 * Executar:
 * node scripts/create-presentation-v2.js
 */

const PptxGenJS = require('pptxgenjs');
const path = require('path');

// ============================================
// CONFIGURAÇÕES DE CORES DA MARCA (Expandida)
// ============================================
const COLORS = {
  // Cores Primárias
  BLACK_PREMIUM: '0A0A0A',
  WHITE: 'FFFFFF',
  GOLD_PREMIUM: 'C9A227',

  // Escala de Dourado
  GOLD_50: 'FBF8F0',
  GOLD_100: 'F7F0DC',
  GOLD_200: 'EFE1B8',
  GOLD_300: 'E5CD8A',
  GOLD_400: 'D9B85C',
  GOLD_600: 'B8922A',
  GOLD_700: '967720',
  GOLD_800: '745C18',

  // Escala de Cinza Warm
  GRAY_50: 'FAFAF8',
  GRAY_100: 'F5F5F3',
  GRAY_200: 'E8E8E4',
  GRAY_300: 'D4D4CE',
  GRAY_400: 'A8A8A0',
  GRAY_500: '7A7A72',
  GRAY_600: '5C5C56',
  GRAY_700: '4A4A45',
  GRAY_800: '3A3A36',
  GRAY_900: '2A2A27',

  // Tons de Preto
  BLACK_800: '1A1A1A',
  BLACK_700: '2D2D2D',
};

// ============================================
// ÍCONES UNICODE PROFISSIONAIS
// ============================================
const ICONS = {
  // Negócios
  CHART_UP: '📈',
  MONEY: '💰',
  SHIELD: '🛡️',
  TARGET: '🎯',
  HANDSHAKE: '🤝',
  TROPHY: '🏆',
  ROCKET: '🚀',
  LIGHTBULB: '💡',

  // Ações
  CHECK: '✓',
  CROSS: '✗',
  ARROW_RIGHT: '→',
  ARROW_DOWN: '↓',
  PLUS: '+',
  STAR: '★',

  // Comunicação
  PHONE: '📱',
  EMAIL: '📧',
  GLOBE: '🌐',
  CLOCK: '⏱️',
  CALENDAR: '📅',

  // Segurança
  LOCK: '🔒',
  KEY: '🔐',
  SERVER: '🖥️',
  DOCUMENT: '📋',

  // Educação
  BOOK: '📚',
  GRADUATION: '🎓',
  PRESENTATION: '📊',
};

// ============================================
// CAMINHOS DOS ASSETS
// ============================================
const ASSETS = {
  LOGO_WHITE: path.resolve(__dirname, '../public/images/logos/l8-logo_transp_branco.png'),
  LOGO_BLACK: path.resolve(__dirname, '../public/images/logos/l8-logo_transp_preto.png'),
  LOGO_STANDARD: path.resolve(__dirname, '../public/images/logos/l8-logo.png'),
};

// ============================================
// CRIAÇÃO DA APRESENTAÇÃO
// ============================================
const pptx = new PptxGenJS();

// Configurações gerais
pptx.layout = 'LAYOUT_16x9';
pptx.title = 'L8 Capital - Apresentação Institucional';
pptx.author = 'L8 Capital';
pptx.company = 'L8 Capital';
pptx.subject = 'Apresentação Institucional - Janeiro 2026';
pptx.revision = '2.0';

// Definir transição padrão para todos os slides
const defaultTransition = { type: 'fade', speed: 'medium' };

// ============================================
// FUNÇÕES AUXILIARES APRIMORADAS
// ============================================

function addPremiumHeader(slide, title, subtitle = null, isDark = false) {
  // Barra dourada gradiente no topo
  slide.addShape('rect', {
    x: 0, y: 0, w: '100%', h: 0.12,
    fill: { color: COLORS.GOLD_PREMIUM }
  });

  // Linha fina dourada adicional
  slide.addShape('rect', {
    x: 0, y: 0.12, w: '100%', h: 0.02,
    fill: { color: COLORS.GOLD_600 }
  });

  // Título com mais espaço
  slide.addText(title, {
    x: 1.0, y: 0.5, w: 8.0, h: 0.7,
    fontSize: 38,
    fontFace: 'Segoe UI',
    bold: true,
    color: isDark ? COLORS.WHITE : COLORS.BLACK_PREMIUM
  });

  // Subtítulo
  if (subtitle) {
    slide.addText(subtitle, {
      x: 1.0, y: 1.05, w: 8.0, h: 0.4,
      fontSize: 16,
      fontFace: 'Segoe UI',
      color: isDark ? COLORS.GRAY_400 : COLORS.GRAY_600
    });
  }
}

function addPremiumFooter(slide, slideNum, totalSlides = 17, isDark = false) {
  // Linha separadora sutil
  slide.addShape('rect', {
    x: 0.8, y: 5.15, w: 8.4, h: 0.005,
    fill: { color: isDark ? COLORS.GRAY_700 : COLORS.GRAY_300 }
  });

  // Logo pequeno no rodapé
  slide.addText('L8', {
    x: 0.8, y: 5.2, w: 0.5, h: 0.3,
    fontSize: 10,
    fontFace: 'Segoe UI',
    bold: true,
    color: COLORS.GOLD_PREMIUM
  });

  // Número do slide
  slide.addText(`${slideNum} / ${totalSlides}`, {
    x: 8.8, y: 5.2, w: 0.7, h: 0.3,
    fontSize: 10,
    fontFace: 'Segoe UI',
    color: isDark ? COLORS.GRAY_500 : COLORS.GRAY_500,
    align: 'right'
  });
}

function addMetricCard(slide, x, y, w, h, number, label, description, isHighlight = false) {
  const bgColor = isHighlight ? COLORS.GOLD_PREMIUM : COLORS.BLACK_800;
  const textColor = isHighlight ? COLORS.BLACK_PREMIUM : COLORS.WHITE;
  const accentColor = isHighlight ? COLORS.BLACK_PREMIUM : COLORS.GOLD_PREMIUM;

  // Card com sombra simulada
  slide.addShape('rect', {
    x: x + 0.03, y: y + 0.03, w: w, h: h,
    fill: { color: COLORS.BLACK_PREMIUM },
    line: { color: COLORS.BLACK_PREMIUM, width: 0 }
  });

  // Card principal
  slide.addShape('rect', {
    x: x, y: y, w: w, h: h,
    fill: { color: bgColor },
    line: { color: isHighlight ? COLORS.GOLD_600 : COLORS.GOLD_PREMIUM, width: 2 }
  });

  // Ícone decorativo
  slide.addShape('rect', {
    x: x, y: y, w: 0.08, h: h,
    fill: { color: accentColor }
  });

  // Número grande
  slide.addText(number, {
    x: x, y: y + 0.2, w: w, h: 0.8,
    fontSize: 40,
    fontFace: 'Segoe UI',
    bold: true,
    color: accentColor,
    align: 'center'
  });

  // Label
  slide.addText(label, {
    x: x, y: y + 1.0, w: w, h: 0.4,
    fontSize: 14,
    fontFace: 'Segoe UI',
    bold: true,
    color: textColor,
    align: 'center'
  });

  // Descrição
  slide.addText(description, {
    x: x + 0.15, y: y + 1.45, w: w - 0.3, h: 0.7,
    fontSize: 10,
    fontFace: 'Segoe UI',
    color: isHighlight ? COLORS.BLACK_700 : COLORS.GRAY_400,
    align: 'center'
  });
}

function addIconCard(slide, x, y, w, h, icon, title, items, borderColor = COLORS.GOLD_PREMIUM) {
  // Card
  slide.addShape('rect', {
    x: x, y: y, w: w, h: h,
    fill: { color: COLORS.WHITE },
    line: { color: borderColor, width: 1.5 },
    shadow: { type: 'outer', blur: 3, offset: 2, angle: 45, color: '000000', opacity: 0.1 }
  });

  // Header com cor
  slide.addShape('rect', {
    x: x, y: y, w: w, h: 0.6,
    fill: { color: COLORS.BLACK_PREMIUM }
  });

  // Ícone
  slide.addText(icon, {
    x: x, y: y + 0.1, w: w, h: 0.4,
    fontSize: 20,
    align: 'center'
  });

  // Título
  slide.addText(title, {
    x: x, y: y + 0.65, w: w, h: 0.4,
    fontSize: 13,
    fontFace: 'Segoe UI',
    bold: true,
    color: COLORS.BLACK_PREMIUM,
    align: 'center'
  });

  // Linha dourada separadora
  slide.addShape('rect', {
    x: x + 0.3, y: y + 1.05, w: w - 0.6, h: 0.02,
    fill: { color: COLORS.GOLD_PREMIUM }
  });

  // Items
  items.forEach((item, i) => {
    slide.addText(`${ICONS.CHECK} ${item}`, {
      x: x + 0.15, y: y + 1.2 + (i * 0.35), w: w - 0.3, h: 0.32,
      fontSize: 10,
      fontFace: 'Segoe UI',
      color: COLORS.GRAY_700
    });
  });
}

function addComparisonBar(slide, x, y, w, label, value, maxValue, color, showValue = true) {
  const barWidth = (value / maxValue) * w;

  // Background da barra
  slide.addShape('rect', {
    x: x, y: y, w: w, h: 0.35,
    fill: { color: COLORS.GRAY_200 }
  });

  // Barra de valor
  slide.addShape('rect', {
    x: x, y: y, w: barWidth, h: 0.35,
    fill: { color: color }
  });

  // Label
  slide.addText(label, {
    x: x - 1.8, y: y, w: 1.7, h: 0.35,
    fontSize: 11,
    fontFace: 'Segoe UI',
    color: COLORS.BLACK_PREMIUM,
    align: 'right',
    valign: 'middle'
  });

  // Valor
  if (showValue) {
    slide.addText(`R$ ${value.toFixed(2)}`, {
      x: x + w + 0.1, y: y, w: 1.0, h: 0.35,
      fontSize: 11,
      fontFace: 'Segoe UI',
      bold: true,
      color: color,
      align: 'left',
      valign: 'middle'
    });
  }
}

// ============================================
// SLIDE 1: CAPA PREMIUM
// ============================================
let slide1 = pptx.addSlide();
slide1.background = { color: COLORS.BLACK_PREMIUM };
slide1.transition = defaultTransition;

// Elementos decorativos de fundo
slide1.addShape('rect', {
  x: 0, y: 0, w: 0.03, h: '100%',
  fill: { color: COLORS.GOLD_PREMIUM }
});

slide1.addShape('rect', {
  x: 9.97, y: 0, w: 0.03, h: '100%',
  fill: { color: COLORS.GOLD_PREMIUM }
});

// Linhas decorativas sutis
for (let i = 0; i < 3; i++) {
  slide1.addShape('rect', {
    x: 0.5 + (i * 0.15), y: 1.5, w: 0.01, h: 2.5,
    fill: { color: COLORS.GRAY_800 }
  });
}

// Logo imagem (tenta usar, fallback para texto)
try {
  slide1.addImage({
    path: ASSETS.LOGO_WHITE,
    x: 3.0, y: 1.5, w: 4.0, h: 1.5,
    sizing: { type: 'contain' }
  });
} catch (e) {
  // Fallback para logo em texto
  slide1.addText('L8', {
    x: 0, y: 1.6, w: '100%', h: 1.0,
    fontSize: 96,
    fontFace: 'Segoe UI',
    bold: true,
    color: COLORS.GOLD_PREMIUM,
    align: 'center'
  });

  slide1.addText('C A P I T A L', {
    x: 0, y: 2.6, w: '100%', h: 0.5,
    fontSize: 28,
    fontFace: 'Segoe UI',
    color: COLORS.GOLD_PREMIUM,
    align: 'center',
    charSpacing: 10
  });
}

// Linha decorativa central
slide1.addShape('rect', {
  x: 3.2, y: 3.3, w: 3.6, h: 0.015,
  fill: { color: COLORS.GOLD_PREMIUM }
});

// Tagline
slide1.addText('Sua imobiliária mais forte.', {
  x: 0, y: 3.5, w: '100%', h: 0.5,
  fontSize: 20,
  fontFace: 'Segoe UI',
  italic: true,
  color: COLORS.WHITE,
  align: 'center'
});

// Badge institucional
slide1.addShape('roundRect', {
  x: 3.5, y: 4.3, w: 3.0, h: 0.45,
  fill: { color: COLORS.BLACK_800 },
  line: { color: COLORS.GOLD_700, width: 1 }
});

slide1.addText('Apresentação Institucional', {
  x: 3.5, y: 4.35, w: 3.0, h: 0.35,
  fontSize: 11,
  fontFace: 'Segoe UI',
  color: COLORS.GRAY_400,
  align: 'center'
});

// Rodapé
slide1.addText('Janeiro 2026', {
  x: 0, y: 5.15, w: '100%', h: 0.25,
  fontSize: 10,
  fontFace: 'Segoe UI',
  color: COLORS.GRAY_600,
  align: 'center'
});

// ============================================
// SLIDE 2: NOSSA HISTÓRIA
// ============================================
let slide2 = pptx.addSlide();
slide2.background = { color: COLORS.WHITE };
slide2.transition = defaultTransition;
addPremiumHeader(slide2, 'Nossa História', 'A origem da L8 Capital');
addPremiumFooter(slide2, 2);

// Quote box premium
slide2.addShape('rect', {
  x: 1.0, y: 1.6, w: 8.0, h: 1.0,
  fill: { color: COLORS.GRAY_50 },
  line: { color: COLORS.GOLD_PREMIUM, width: 0, dashType: 'solid' }
});

// Barra lateral dourada no quote
slide2.addShape('rect', {
  x: 1.0, y: 1.6, w: 0.06, h: 1.0,
  fill: { color: COLORS.GOLD_PREMIUM }
});

slide2.addText(`"Em 24 anos no mercado imobiliário, vimos imobiliárias fecharem não por falta de clientes, mas por falta de estrutura."`, {
  x: 1.2, y: 1.7, w: 7.6, h: 0.8,
  fontSize: 14,
  fontFace: 'Segoe UI',
  italic: true,
  color: COLORS.GRAY_700,
  align: 'left',
  valign: 'middle'
});

// Timeline aprimorada
const timelineY = 2.9;
const timelineData = [
  { year: '2000-2020', title: '24 Anos', text: 'de experiência no\nmercado imobiliário', icon: ICONS.CLOCK },
  { year: '2021', title: 'Identificação', text: 'Imobiliárias precisam\nde mais estrutura', icon: ICONS.LIGHTBULB },
  { year: '2022+', title: 'Nasce a L8', text: 'Fortalecendo\nimobiliárias', icon: ICONS.ROCKET, highlight: true }
];

// Linha conectora da timeline
slide2.addShape('rect', {
  x: 2.2, y: timelineY + 0.45, w: 5.6, h: 0.02,
  fill: { color: COLORS.GOLD_300 }
});

timelineData.forEach((item, i) => {
  const x = 1.0 + (i * 3.0);
  const isHighlight = item.highlight;

  // Círculo do timeline
  slide2.addShape('ellipse', {
    x: x + 1.1, y: timelineY + 0.3, w: 0.35, h: 0.35,
    fill: { color: isHighlight ? COLORS.GOLD_PREMIUM : COLORS.WHITE },
    line: { color: COLORS.GOLD_PREMIUM, width: 2 }
  });

  // Card
  slide2.addShape('rect', {
    x: x, y: timelineY + 0.8, w: 2.6, h: 1.8,
    fill: { color: isHighlight ? COLORS.GOLD_PREMIUM : COLORS.GRAY_50 },
    line: { color: isHighlight ? COLORS.GOLD_600 : COLORS.GRAY_300, width: 1 }
  });

  // Ano
  slide2.addText(item.year, {
    x: x, y: timelineY + 0.9, w: 2.6, h: 0.35,
    fontSize: 16,
    fontFace: 'Segoe UI',
    bold: true,
    color: isHighlight ? COLORS.WHITE : COLORS.BLACK_PREMIUM,
    align: 'center'
  });

  // Título
  slide2.addText(item.title, {
    x: x, y: timelineY + 1.25, w: 2.6, h: 0.3,
    fontSize: 12,
    fontFace: 'Segoe UI',
    bold: true,
    color: isHighlight ? COLORS.WHITE : COLORS.GOLD_700,
    align: 'center'
  });

  // Texto
  slide2.addText(item.text, {
    x: x + 0.1, y: timelineY + 1.55, w: 2.4, h: 0.8,
    fontSize: 10,
    fontFace: 'Segoe UI',
    color: isHighlight ? COLORS.GOLD_100 : COLORS.GRAY_600,
    align: 'center'
  });

  // Seta
  if (i < 2) {
    slide2.addText(ICONS.ARROW_RIGHT, {
      x: x + 2.5, y: timelineY + 0.3, w: 0.6, h: 0.4,
      fontSize: 20,
      color: COLORS.GOLD_PREMIUM,
      align: 'center'
    });
  }
});

// ============================================
// SLIDE 3: NOSSO PROPÓSITO (Golden Circle)
// ============================================
let slide3 = pptx.addSlide();
slide3.background = { color: COLORS.WHITE };
slide3.transition = defaultTransition;
addPremiumHeader(slide3, 'Nosso Propósito', 'O Golden Circle da L8 Capital');
addPremiumFooter(slide3, 3);

// Golden Circle aprimorado
const centerX = 2.8;
const centerY = 3.0;

// Círculo externo - O QUÊ
slide3.addShape('ellipse', {
  x: centerX - 1.6, y: centerY - 1.6, w: 3.2, h: 3.2,
  fill: { color: COLORS.GRAY_100 },
  line: { color: COLORS.GRAY_300, width: 2 }
});

// Círculo médio - COMO
slide3.addShape('ellipse', {
  x: centerX - 1.05, y: centerY - 1.05, w: 2.1, h: 2.1,
  fill: { color: COLORS.BLACK_PREMIUM },
  line: { color: COLORS.BLACK_700, width: 2 }
});

// Círculo central - POR QUÊ
slide3.addShape('ellipse', {
  x: centerX - 0.55, y: centerY - 0.55, w: 1.1, h: 1.1,
  fill: { color: COLORS.GOLD_PREMIUM },
  line: { color: COLORS.GOLD_600, width: 2 }
});

// Labels dos círculos
slide3.addText('POR QUÊ?', {
  x: centerX - 0.55, y: centerY - 0.15, w: 1.1, h: 0.3,
  fontSize: 9,
  fontFace: 'Segoe UI',
  bold: true,
  color: COLORS.WHITE,
  align: 'center'
});

slide3.addText('COMO?', {
  x: centerX - 1.05, y: centerY + 0.65, w: 2.1, h: 0.3,
  fontSize: 10,
  fontFace: 'Segoe UI',
  bold: true,
  color: COLORS.WHITE,
  align: 'center'
});

slide3.addText('O QUÊ?', {
  x: centerX - 1.6, y: centerY + 1.35, w: 3.2, h: 0.3,
  fontSize: 11,
  fontFace: 'Segoe UI',
  bold: true,
  color: COLORS.BLACK_PREMIUM,
  align: 'center'
});

// Descrições laterais com cards
const descX = 5.3;
const descriptions = [
  {
    title: 'POR QUÊ?',
    text: 'Acreditamos que toda imobiliária merece estrutura de grande empresa',
    color: COLORS.GOLD_PREMIUM,
    bgColor: COLORS.GOLD_50
  },
  {
    title: 'COMO?',
    text: '100% tecnologia proprietária\nSem custos ocultos\nParceria real, não fornecimento',
    color: COLORS.BLACK_PREMIUM,
    bgColor: COLORS.GRAY_50
  },
  {
    title: 'O QUÊ?',
    text: 'Seguros, financeiro e capacitação para fortalecer sua imobiliária',
    color: COLORS.GRAY_600,
    bgColor: COLORS.WHITE
  }
];

descriptions.forEach((desc, i) => {
  const y = 1.7 + (i * 1.15);

  slide3.addShape('rect', {
    x: descX, y: y, w: 4.2, h: 1.0,
    fill: { color: desc.bgColor },
    line: { color: desc.color, width: 1 }
  });

  slide3.addShape('rect', {
    x: descX, y: y, w: 0.06, h: 1.0,
    fill: { color: desc.color }
  });

  slide3.addText(desc.title, {
    x: descX + 0.15, y: y + 0.08, w: 3.9, h: 0.25,
    fontSize: 11,
    fontFace: 'Segoe UI',
    bold: true,
    color: desc.color
  });

  slide3.addText(desc.text, {
    x: descX + 0.15, y: y + 0.35, w: 3.9, h: 0.6,
    fontSize: 10,
    fontFace: 'Segoe UI',
    color: COLORS.GRAY_700
  });
});

// ============================================
// SLIDE 4: QUEM SOMOS (Métricas)
// ============================================
let slide4 = pptx.addSlide();
slide4.background = { color: COLORS.BLACK_PREMIUM };
slide4.transition = defaultTransition;
addPremiumHeader(slide4, 'Quem Somos', 'Números que comprovam nossa solidez', true);
addPremiumFooter(slide4, 4, 17, true);

// Cards de métricas aprimorados
addMetricCard(slide4, 1.0, 1.7, 2.6, 2.4, '24', 'ANOS', 'de experiência no\nmercado imobiliário');
addMetricCard(slide4, 3.8, 1.7, 2.6, 2.4, '100%', 'TECNOLOGIA', 'proprietária desenvolvida\ninternamente', true);
addMetricCard(slide4, 6.6, 1.7, 2.6, 2.4, 'R$ 2.050', 'ECONOMIA', 'média mensal por\nimobiliária parceira');

// Linha de destaques adicionais
const extraMetrics = [
  { icon: ICONS.SHIELD, text: '400+ imobiliárias parceiras' },
  { icon: ICONS.CHECK, text: 'Sem fidelidade forçada' },
  { icon: ICONS.HANDSHAKE, text: 'Modelo de parceria real' }
];

extraMetrics.forEach((item, i) => {
  const x = 1.0 + (i * 3.0);
  slide4.addText(`${item.icon}  ${item.text}`, {
    x: x, y: 4.4, w: 2.8, h: 0.5,
    fontSize: 11,
    fontFace: 'Segoe UI',
    color: COLORS.GRAY_400,
    align: 'center'
  });
});

// ============================================
// SLIDE 5: O PROBLEMA
// ============================================
let slide5 = pptx.addSlide();
slide5.background = { color: COLORS.WHITE };
slide5.transition = defaultTransition;
addPremiumHeader(slide5, 'O Problema', 'As dores que imobiliárias enfrentam diariamente');
addPremiumFooter(slide5, 5);

// Cards de dores com ícones
const painPoints = [
  { icon: ICONS.CLOCK, text: '"Perco tempo demais\ncom operacional"' },
  { icon: ICONS.TARGET, text: '"Não consigo me\ndiferenciar da concorrência"' },
  { icon: ICONS.MONEY, text: '"Meus custos fixos\nsão muito altos"' },
  { icon: ICONS.LIGHTBULB, text: '"Faltam ferramentas\nprofissionais"' }
];

painPoints.forEach((item, i) => {
  const row = Math.floor(i / 2);
  const col = i % 2;
  const x = 1.0 + (col * 4.2);
  const y = 1.65 + (row * 1.15);

  // Card
  slide5.addShape('rect', {
    x: x, y: y, w: 3.9, h: 1.0,
    fill: { color: COLORS.GRAY_50 },
    line: { color: COLORS.GRAY_200, width: 1 }
  });

  // Ícone
  slide5.addText(item.icon, {
    x: x + 0.15, y: y + 0.3, w: 0.5, h: 0.4,
    fontSize: 20
  });

  // Texto
  slide5.addText(item.text, {
    x: x + 0.7, y: y + 0.15, w: 3.0, h: 0.7,
    fontSize: 12,
    fontFace: 'Segoe UI',
    italic: true,
    color: COLORS.GRAY_700,
    valign: 'middle'
  });
});

// Tabela de impacto
slide5.addText('ANÁLISE DE IMPACTO', {
  x: 1.0, y: 3.9, w: 8.0, h: 0.35,
  fontSize: 12,
  fontFace: 'Segoe UI',
  bold: true,
  color: COLORS.BLACK_PREMIUM
});

slide5.addTable([
  [
    { text: 'SINTOMA', options: { bold: true, fill: COLORS.BLACK_PREMIUM, color: COLORS.WHITE, fontSize: 10 } },
    { text: 'CAUSA', options: { bold: true, fill: COLORS.BLACK_PREMIUM, color: COLORS.WHITE, fontSize: 10 } },
    { text: 'IMPACTO', options: { bold: true, fill: COLORS.BLACK_PREMIUM, color: COLORS.WHITE, fontSize: 10 } }
  ],
  [
    { text: 'Operacional excessivo', options: { fill: COLORS.GRAY_50, fontSize: 10 } },
    { text: 'Falta de automação', options: { fill: COLORS.GRAY_50, fontSize: 10 } },
    { text: 'Menos tempo para vender', options: { fill: COLORS.GRAY_50, fontSize: 10, color: COLORS.GOLD_700, bold: true } }
  ],
  [
    { text: 'Custos elevados', options: { fill: COLORS.WHITE, fontSize: 10 } },
    { text: 'Fornecedores caros', options: { fill: COLORS.WHITE, fontSize: 10 } },
    { text: 'Margem reduzida', options: { fill: COLORS.WHITE, fontSize: 10, color: COLORS.GOLD_700, bold: true } }
  ],
  [
    { text: 'Sem diferenciação', options: { fill: COLORS.GRAY_50, fontSize: 10 } },
    { text: 'Ferramentas genéricas', options: { fill: COLORS.GRAY_50, fontSize: 10 } },
    { text: 'Perda para concorrência', options: { fill: COLORS.GRAY_50, fontSize: 10, color: COLORS.GOLD_700, bold: true } }
  ]
], {
  x: 1.0, y: 4.25, w: 8.0, h: 1.0,
  fontFace: 'Segoe UI',
  color: COLORS.BLACK_PREMIUM,
  border: { pt: 0.5, color: COLORS.GRAY_300 },
  align: 'center',
  valign: 'middle'
});

// ============================================
// SLIDE 6: PROPOSTA DE VALOR
// ============================================
let slide6 = pptx.addSlide();
slide6.background = { color: COLORS.WHITE };
slide6.transition = defaultTransition;
addPremiumHeader(slide6, 'Proposta de Valor', 'Os 3 pilares para fortalecer sua imobiliária');
addPremiumFooter(slide6, 6);

// 3 pilares com visual aprimorado
const pillarsData = [
  {
    title: 'AUMENTAR\nRECEITA',
    icon: ICONS.CHART_UP,
    color: COLORS.GOLD_PREMIUM,
    textColor: COLORS.WHITE,
    items: ['Novos produtos', 'Comissões maiores', 'Diversificação']
  },
  {
    title: 'REDUZIR\nCUSTOS',
    icon: ICONS.MONEY,
    color: COLORS.BLACK_PREMIUM,
    textColor: COLORS.WHITE,
    items: ['Boletos a R$ 1,90', 'Sem mensalidades', 'Economia real']
  },
  {
    title: 'ELIMINAR\nOPERACIONAL',
    icon: ICONS.ROCKET,
    color: COLORS.GRAY_100,
    textColor: COLORS.BLACK_PREMIUM,
    items: ['100% digital', 'Automação total', 'Mais tempo livre']
  }
];

pillarsData.forEach((pillar, i) => {
  const x = 1.0 + (i * 2.9);

  // Card do pilar
  slide6.addShape('rect', {
    x: x, y: 1.65, w: 2.6, h: 2.5,
    fill: { color: pillar.color },
    line: { color: pillar.color === COLORS.GRAY_100 ? COLORS.GRAY_300 : pillar.color, width: 1 },
    shadow: { type: 'outer', blur: 4, offset: 2, angle: 45, color: '000000', opacity: 0.15 }
  });

  // Ícone
  slide6.addText(pillar.icon, {
    x: x, y: 1.75, w: 2.6, h: 0.5,
    fontSize: 24,
    align: 'center'
  });

  // Título
  slide6.addText(pillar.title, {
    x: x, y: 2.25, w: 2.6, h: 0.7,
    fontSize: 14,
    fontFace: 'Segoe UI',
    bold: true,
    color: pillar.textColor,
    align: 'center'
  });

  // Items
  pillar.items.forEach((item, j) => {
    slide6.addText(`${ICONS.CHECK} ${item}`, {
      x: x + 0.2, y: 3.0 + (j * 0.35), w: 2.2, h: 0.32,
      fontSize: 10,
      fontFace: 'Segoe UI',
      color: pillar.textColor
    });
  });

  // Símbolo +
  if (i < 2) {
    slide6.addText(ICONS.PLUS, {
      x: x + 2.5, y: 2.6, w: 0.5, h: 0.5,
      fontSize: 28,
      fontFace: 'Segoe UI',
      bold: true,
      color: COLORS.GOLD_PREMIUM,
      align: 'center'
    });
  }
});

// Seta e resultado
slide6.addText('↓', {
  x: 4.5, y: 4.2, w: 1.0, h: 0.4,
  fontSize: 24,
  color: COLORS.GOLD_PREMIUM,
  align: 'center'
});

slide6.addShape('rect', {
  x: 2.0, y: 4.6, w: 6.0, h: 0.65,
  fill: { color: COLORS.GOLD_PREMIUM },
  shadow: { type: 'outer', blur: 5, offset: 3, angle: 45, color: COLORS.GOLD_800, opacity: 0.4 }
});

slide6.addText(`${ICONS.TROPHY}  IMOBILIÁRIA MAIS FORTE`, {
  x: 2.0, y: 4.65, w: 6.0, h: 0.55,
  fontSize: 18,
  fontFace: 'Segoe UI',
  bold: true,
  color: COLORS.WHITE,
  align: 'center',
  valign: 'middle'
});

// ============================================
// SLIDE 7: PORTFÓLIO
// ============================================
let slide7 = pptx.addSlide();
slide7.background = { color: COLORS.WHITE };
slide7.transition = defaultTransition;
addPremiumHeader(slide7, 'Portfólio de Soluções', 'Três verticais para fortalecer seu negócio');
addPremiumFooter(slide7, 7);

const portfolioData = [
  {
    icon: ICONS.SHIELD,
    title: 'SEGUROS',
    items: ['Incêndio', 'Fiança Locatícia', 'Condomínio', 'Vida', 'Residencial', 'Empresarial']
  },
  {
    icon: ICONS.MONEY,
    title: 'FINANCEIRO',
    items: ['Boletos a R$ 1,90', 'Antecipação', 'Cobrança automática', 'Relatórios completos']
  },
  {
    icon: ICONS.BOOK,
    title: 'CAPACITAÇÃO',
    items: ['Treinamento comercial', 'Gestão operacional', 'Metodologia de vistoria']
  }
];

portfolioData.forEach((cat, i) => {
  addIconCard(slide7, 1.0 + (i * 2.9), 1.6, 2.6, 3.5, cat.icon, cat.title, cat.items);
});

// ============================================
// SLIDE 8: SEGUROS - DETALHES
// ============================================
let slide8 = pptx.addSlide();
slide8.background = { color: COLORS.WHITE };
slide8.transition = defaultTransition;
addPremiumHeader(slide8, 'Seguros', 'Proteção completa com comissões superiores');
addPremiumFooter(slide8, 8);

// Tabela de seguros aprimorada
slide8.addTable([
  [
    { text: 'PRODUTO', options: { bold: true, fill: COLORS.BLACK_PREMIUM, color: COLORS.WHITE, fontSize: 11 } },
    { text: 'BENEFÍCIO', options: { bold: true, fill: COLORS.BLACK_PREMIUM, color: COLORS.WHITE, fontSize: 11 } },
    { text: 'COMISSÃO', options: { bold: true, fill: COLORS.GOLD_PREMIUM, color: COLORS.BLACK_PREMIUM, fontSize: 11 } }
  ],
  [
    { text: 'Seguro Incêndio', options: { fill: COLORS.GRAY_50, fontSize: 11 } },
    { text: 'Obrigatório por lei', options: { fill: COLORS.GRAY_50, fontSize: 11 } },
    { text: '40%', options: { fill: COLORS.GOLD_50, bold: true, color: COLORS.GOLD_700, fontSize: 14 } }
  ],
  [
    { text: 'Fiança Locatícia', options: { fill: COLORS.WHITE, fontSize: 11 } },
    { text: 'Elimina fiador/caução', options: { fill: COLORS.WHITE, fontSize: 11 } },
    { text: '25%', options: { fill: COLORS.WHITE, bold: true, color: COLORS.GOLD_700, fontSize: 14 } }
  ],
  [
    { text: 'Seguro Condomínio', options: { fill: COLORS.GRAY_50, fontSize: 11 } },
    { text: 'Protege áreas comuns', options: { fill: COLORS.GRAY_50, fontSize: 11 } },
    { text: '35%', options: { fill: COLORS.GOLD_50, bold: true, color: COLORS.GOLD_700, fontSize: 14 } }
  ],
  [
    { text: 'Seguro Residencial', options: { fill: COLORS.WHITE, fontSize: 11 } },
    { text: 'Cobertura completa', options: { fill: COLORS.WHITE, fontSize: 11 } },
    { text: '30%', options: { fill: COLORS.WHITE, bold: true, color: COLORS.GOLD_700, fontSize: 14 } }
  ]
], {
  x: 1.0, y: 1.6, w: 8.0, h: 2.0,
  fontFace: 'Segoe UI',
  color: COLORS.BLACK_PREMIUM,
  border: { pt: 0.5, color: COLORS.GRAY_300 },
  align: 'center',
  valign: 'middle'
});

// Comparativo visual com barras
slide8.addText('COMPARATIVO DE COMISSÕES', {
  x: 1.0, y: 3.8, w: 8.0, h: 0.35,
  fontSize: 12,
  fontFace: 'Segoe UI',
  bold: true,
  color: COLORS.BLACK_PREMIUM
});

// Barra Tradicional
slide8.addText('Tradicional', {
  x: 1.0, y: 4.25, w: 2.0, h: 0.4,
  fontSize: 11,
  fontFace: 'Segoe UI',
  color: COLORS.GRAY_600
});

slide8.addShape('rect', {
  x: 3.0, y: 4.25, w: 4.0, h: 0.35,
  fill: { color: COLORS.GRAY_200 }
});

slide8.addShape('rect', {
  x: 3.0, y: 4.25, w: 1.6, h: 0.35,
  fill: { color: COLORS.GRAY_500 }
});

slide8.addText('15-20%', {
  x: 7.2, y: 4.25, w: 1.0, h: 0.35,
  fontSize: 11,
  fontFace: 'Segoe UI',
  bold: true,
  color: COLORS.GRAY_600,
  valign: 'middle'
});

// Barra L8
slide8.addText('L8 Capital', {
  x: 1.0, y: 4.75, w: 2.0, h: 0.4,
  fontSize: 11,
  fontFace: 'Segoe UI',
  bold: true,
  color: COLORS.GOLD_700
});

slide8.addShape('rect', {
  x: 3.0, y: 4.75, w: 4.0, h: 0.35,
  fill: { color: COLORS.GRAY_200 }
});

slide8.addShape('rect', {
  x: 3.0, y: 4.75, w: 3.2, h: 0.35,
  fill: { color: COLORS.GOLD_PREMIUM }
});

slide8.addText('25-40%', {
  x: 7.2, y: 4.75, w: 1.0, h: 0.35,
  fontSize: 12,
  fontFace: 'Segoe UI',
  bold: true,
  color: COLORS.GOLD_700,
  valign: 'middle'
});

// Badge de destaque
slide8.addShape('roundRect', {
  x: 6.4, y: 4.75, w: 0.7, h: 0.35,
  fill: { color: COLORS.GOLD_PREMIUM }
});

slide8.addText('+2x', {
  x: 6.4, y: 4.75, w: 0.7, h: 0.35,
  fontSize: 10,
  fontFace: 'Segoe UI',
  bold: true,
  color: COLORS.WHITE,
  align: 'center',
  valign: 'middle'
});

// ============================================
// SLIDE 9: FINANCEIRO
// ============================================
let slide9 = pptx.addSlide();
slide9.background = { color: COLORS.BLACK_PREMIUM };
slide9.transition = defaultTransition;
addPremiumHeader(slide9, 'Financeiro', 'Boletos 68% mais baratos que o mercado', true);
addPremiumFooter(slide9, 9, 17, true);

// Gráfico de barras comparativo
slide9.addText('COMPARATIVO DE PREÇOS POR BOLETO', {
  x: 1.0, y: 1.6, w: 8.0, h: 0.35,
  fontSize: 12,
  fontFace: 'Segoe UI',
  bold: true,
  color: COLORS.WHITE
});

// Barra MERCADO
slide9.addText('MERCADO', {
  x: 1.0, y: 2.1, w: 1.5, h: 0.5,
  fontSize: 10,
  fontFace: 'Segoe UI',
  color: COLORS.GRAY_400,
  valign: 'middle'
});

slide9.addShape('rect', {
  x: 2.5, y: 2.15, w: 5.0, h: 0.4,
  fill: { color: COLORS.GRAY_700 }
});

slide9.addText('R$ 6,00', {
  x: 7.6, y: 2.1, w: 1.0, h: 0.5,
  fontSize: 14,
  fontFace: 'Segoe UI',
  bold: true,
  color: COLORS.GRAY_400,
  valign: 'middle'
});

// Barra L8 CAPITAL
slide9.addText('L8 CAPITAL', {
  x: 1.0, y: 2.7, w: 1.5, h: 0.5,
  fontSize: 10,
  fontFace: 'Segoe UI',
  bold: true,
  color: COLORS.GOLD_PREMIUM,
  valign: 'middle'
});

slide9.addShape('rect', {
  x: 2.5, y: 2.75, w: 1.58, h: 0.4,
  fill: { color: COLORS.GOLD_PREMIUM }
});

slide9.addText('R$ 1,90', {
  x: 4.2, y: 2.7, w: 1.0, h: 0.5,
  fontSize: 14,
  fontFace: 'Segoe UI',
  bold: true,
  color: COLORS.GOLD_PREMIUM,
  valign: 'middle'
});

// Badge economia
slide9.addShape('roundRect', {
  x: 5.5, y: 2.7, w: 2.3, h: 0.5,
  fill: { color: COLORS.GOLD_700 }
});

slide9.addText(`${ICONS.CHART_UP} ECONOMIA: R$ 4,10/boleto`, {
  x: 5.5, y: 2.7, w: 2.3, h: 0.5,
  fontSize: 10,
  fontFace: 'Segoe UI',
  bold: true,
  color: COLORS.WHITE,
  align: 'center',
  valign: 'middle'
});

// Tabela de economia
slide9.addText('SIMULAÇÃO DE ECONOMIA MENSAL', {
  x: 1.0, y: 3.4, w: 8.0, h: 0.35,
  fontSize: 12,
  fontFace: 'Segoe UI',
  bold: true,
  color: COLORS.WHITE
});

slide9.addTable([
  [
    { text: 'BOLETOS/MÊS', options: { bold: true, fill: COLORS.GOLD_PREMIUM, color: COLORS.BLACK_PREMIUM, fontSize: 10 } },
    { text: '100', options: { fill: COLORS.BLACK_800, color: COLORS.WHITE, fontSize: 11 } },
    { text: '300', options: { fill: COLORS.BLACK_800, color: COLORS.WHITE, fontSize: 11 } },
    { text: '500', options: { fill: COLORS.BLACK_800, color: COLORS.WHITE, fontSize: 11 } },
    { text: '1000', options: { fill: COLORS.BLACK_800, color: COLORS.WHITE, fontSize: 11 } }
  ],
  [
    { text: 'ECONOMIA/MÊS', options: { bold: true, fill: COLORS.GOLD_PREMIUM, color: COLORS.BLACK_PREMIUM, fontSize: 10 } },
    { text: 'R$ 410', options: { fill: COLORS.BLACK_800, color: COLORS.GOLD_PREMIUM, bold: true, fontSize: 12 } },
    { text: 'R$ 1.230', options: { fill: COLORS.BLACK_800, color: COLORS.GOLD_PREMIUM, bold: true, fontSize: 12 } },
    { text: 'R$ 2.050', options: { fill: COLORS.GOLD_700, color: COLORS.WHITE, bold: true, fontSize: 12 } },
    { text: 'R$ 4.100', options: { fill: COLORS.BLACK_800, color: COLORS.GOLD_PREMIUM, bold: true, fontSize: 12 } }
  ],
  [
    { text: 'ECONOMIA/ANO', options: { bold: true, fill: COLORS.GOLD_PREMIUM, color: COLORS.BLACK_PREMIUM, fontSize: 10 } },
    { text: 'R$ 4.920', options: { fill: COLORS.BLACK_800, color: COLORS.GRAY_400, fontSize: 11 } },
    { text: 'R$ 14.760', options: { fill: COLORS.BLACK_800, color: COLORS.GRAY_400, fontSize: 11 } },
    { text: 'R$ 24.600', options: { fill: COLORS.GOLD_700, color: COLORS.WHITE, fontSize: 11 } },
    { text: 'R$ 49.200', options: { fill: COLORS.BLACK_800, color: COLORS.GRAY_400, fontSize: 11 } }
  ]
], {
  x: 1.0, y: 3.8, w: 8.0, h: 1.2,
  fontFace: 'Segoe UI',
  border: { pt: 0.5, color: COLORS.GRAY_700 },
  align: 'center',
  valign: 'middle'
});

// ============================================
// SLIDE 10: CAPACITAÇÃO
// ============================================
let slide10 = pptx.addSlide();
slide10.background = { color: COLORS.WHITE };
slide10.transition = defaultTransition;
addPremiumHeader(slide10, 'Capacitação', 'Conhecimento que transforma resultados');
addPremiumFooter(slide10, 10);

const trainingData = [
  {
    icon: ICONS.PRESENTATION,
    title: 'Treinamento Comercial',
    desc: 'Técnicas de vendas para equipes imobiliárias',
    items: ['Abordagem consultiva', 'Fechamento de contratos', 'Gestão de objeções']
  },
  {
    icon: ICONS.DOCUMENT,
    title: 'Gestão Operacional',
    desc: 'Processos otimizados para sua imobiliária',
    items: ['Fluxos automatizados', 'Indicadores de performance', 'Melhores práticas']
  },
  {
    icon: ICONS.KEY,
    title: 'Metodologia de Vistoria',
    desc: 'Padronização profissional de vistorias',
    items: ['Checklist completo', 'Documentação fotográfica', 'Relatórios digitais']
  }
];

trainingData.forEach((item, i) => {
  const x = 1.0 + (i * 2.9);

  // Card
  slide10.addShape('rect', {
    x: x, y: 1.6, w: 2.6, h: 3.4,
    fill: { color: COLORS.WHITE },
    line: { color: COLORS.GRAY_300, width: 1 },
    shadow: { type: 'outer', blur: 3, offset: 2, angle: 45, color: '000000', opacity: 0.1 }
  });

  // Barra dourada superior
  slide10.addShape('rect', {
    x: x, y: 1.6, w: 2.6, h: 0.08,
    fill: { color: COLORS.GOLD_PREMIUM }
  });

  // Ícone
  slide10.addText(item.icon, {
    x: x, y: 1.75, w: 2.6, h: 0.5,
    fontSize: 24,
    align: 'center'
  });

  // Título
  slide10.addText(item.title, {
    x: x + 0.1, y: 2.3, w: 2.4, h: 0.4,
    fontSize: 12,
    fontFace: 'Segoe UI',
    bold: true,
    color: COLORS.BLACK_PREMIUM,
    align: 'center'
  });

  // Descrição
  slide10.addText(item.desc, {
    x: x + 0.1, y: 2.7, w: 2.4, h: 0.5,
    fontSize: 10,
    fontFace: 'Segoe UI',
    color: COLORS.GRAY_600,
    align: 'center'
  });

  // Linha separadora
  slide10.addShape('rect', {
    x: x + 0.5, y: 3.25, w: 1.6, h: 0.01,
    fill: { color: COLORS.GOLD_300 }
  });

  // Items
  item.items.forEach((it, j) => {
    slide10.addText(`${ICONS.CHECK} ${it}`, {
      x: x + 0.15, y: 3.4 + (j * 0.4), w: 2.3, h: 0.35,
      fontSize: 10,
      fontFace: 'Segoe UI',
      color: COLORS.GRAY_700
    });
  });
});

// ============================================
// SLIDE 11: DIFERENCIAL
// ============================================
let slide11 = pptx.addSlide();
slide11.background = { color: COLORS.WHITE };
slide11.transition = defaultTransition;
addPremiumHeader(slide11, 'Nosso Diferencial', 'Parceiro, não fornecedor');
addPremiumFooter(slide11, 11);

// Comparativo lado a lado
// Fornecedor comum
slide11.addShape('rect', {
  x: 1.0, y: 1.6, w: 3.8, h: 2.9,
  fill: { color: COLORS.GRAY_50 },
  line: { color: COLORS.GRAY_300, width: 1 }
});

slide11.addText('FORNECEDOR COMUM', {
  x: 1.0, y: 1.7, w: 3.8, h: 0.4,
  fontSize: 13,
  fontFace: 'Segoe UI',
  bold: true,
  color: COLORS.GRAY_500,
  align: 'center'
});

const fornecedorItems = ['Vende e desaparece', 'Suporte robotizado', 'Foco em quantidade', 'Custos ocultos', 'Contratos amarrados'];
fornecedorItems.forEach((item, i) => {
  slide11.addText(`${ICONS.CROSS} ${item}`, {
    x: 1.2, y: 2.2 + (i * 0.42), w: 3.4, h: 0.38,
    fontSize: 11,
    fontFace: 'Segoe UI',
    color: COLORS.GRAY_600
  });
});

// VS
slide11.addShape('ellipse', {
  x: 4.65, y: 2.8, w: 0.7, h: 0.7,
  fill: { color: COLORS.GOLD_PREMIUM }
});

slide11.addText('VS', {
  x: 4.65, y: 2.9, w: 0.7, h: 0.5,
  fontSize: 12,
  fontFace: 'Segoe UI',
  bold: true,
  color: COLORS.WHITE,
  align: 'center'
});

// L8 Capital (Parceiro)
slide11.addShape('rect', {
  x: 5.2, y: 1.6, w: 3.8, h: 2.9,
  fill: { color: COLORS.BLACK_PREMIUM },
  line: { color: COLORS.GOLD_PREMIUM, width: 2 }
});

slide11.addText('L8 CAPITAL', {
  x: 5.2, y: 1.7, w: 3.8, h: 0.4,
  fontSize: 13,
  fontFace: 'Segoe UI',
  bold: true,
  color: COLORS.GOLD_PREMIUM,
  align: 'center'
});

const parceiroItems = ['Acompanha seu crescimento', 'Suporte humano dedicado', 'Foco em qualidade', 'Transparência total', 'Liberdade de escolha'];
parceiroItems.forEach((item, i) => {
  slide11.addText(`${ICONS.CHECK} ${item}`, {
    x: 5.4, y: 2.2 + (i * 0.42), w: 3.4, h: 0.38,
    fontSize: 11,
    fontFace: 'Segoe UI',
    color: COLORS.WHITE
  });
});

// Quote destacada
slide11.addShape('rect', {
  x: 1.0, y: 4.65, w: 8.0, h: 0.65,
  fill: { color: COLORS.GOLD_PREMIUM },
  shadow: { type: 'outer', blur: 4, offset: 2, angle: 45, color: COLORS.GOLD_800, opacity: 0.3 }
});

slide11.addText('"Não queremos clientes. Queremos parceiros que cresçam conosco."', {
  x: 1.0, y: 4.7, w: 8.0, h: 0.55,
  fontSize: 13,
  fontFace: 'Segoe UI',
  italic: true,
  bold: true,
  color: COLORS.BLACK_PREMIUM,
  align: 'center',
  valign: 'middle'
});

// ============================================
// SLIDE 12: COMO FUNCIONA
// ============================================
let slide12 = pptx.addSlide();
slide12.background = { color: COLORS.WHITE };
slide12.transition = defaultTransition;
addPremiumHeader(slide12, 'Como Funciona', 'Processo simples em 3 etapas');
addPremiumFooter(slide12, 12);

const processData = [
  { step: '01', icon: ICONS.PHONE, title: 'CONVERSA', desc: 'Agendamos uma call para\nentender suas necessidades' },
  { step: '02', icon: ICONS.PRESENTATION, title: 'DIAGNÓSTICO', desc: 'Analisamos sua operação e\nidentificamos oportunidades' },
  { step: '03', icon: ICONS.ROCKET, title: 'IMPLEMENTAÇÃO', desc: 'Ativamos as soluções e\nacompanhamos os resultados' }
];

// Linha conectora
slide12.addShape('rect', {
  x: 2.2, y: 2.3, w: 5.6, h: 0.02,
  fill: { color: COLORS.GOLD_300 }
});

processData.forEach((item, i) => {
  const x = 1.0 + (i * 3.0);

  // Círculo com número
  slide12.addShape('ellipse', {
    x: x + 0.9, y: 1.95, w: 0.8, h: 0.8,
    fill: { color: COLORS.GOLD_PREMIUM },
    shadow: { type: 'outer', blur: 4, offset: 2, angle: 45, color: COLORS.GOLD_800, opacity: 0.4 }
  });

  slide12.addText(item.step, {
    x: x + 0.9, y: 2.1, w: 0.8, h: 0.5,
    fontSize: 18,
    fontFace: 'Segoe UI',
    bold: true,
    color: COLORS.WHITE,
    align: 'center'
  });

  // Ícone
  slide12.addText(item.icon, {
    x: x, y: 2.85, w: 2.6, h: 0.5,
    fontSize: 24,
    align: 'center'
  });

  // Título
  slide12.addText(item.title, {
    x: x, y: 3.35, w: 2.6, h: 0.4,
    fontSize: 14,
    fontFace: 'Segoe UI',
    bold: true,
    color: COLORS.BLACK_PREMIUM,
    align: 'center'
  });

  // Descrição
  slide12.addText(item.desc, {
    x: x, y: 3.75, w: 2.6, h: 0.7,
    fontSize: 11,
    fontFace: 'Segoe UI',
    color: COLORS.GRAY_600,
    align: 'center'
  });
});

// Timeline de resultados
slide12.addText('LINHA DO TEMPO DE RESULTADOS', {
  x: 1.0, y: 4.5, w: 8.0, h: 0.3,
  fontSize: 11,
  fontFace: 'Segoe UI',
  bold: true,
  color: COLORS.BLACK_PREMIUM,
  align: 'center'
});

const timelineResults = [
  { month: 'MÊS 1', result: 'Ativação das soluções', icon: ICONS.CHECK },
  { month: 'MÊS 2', result: 'Primeiras economias', icon: ICONS.MONEY },
  { month: 'MÊS 3', result: 'Resultados consolidados', icon: ICONS.TROPHY }
];

timelineResults.forEach((item, i) => {
  const x = 1.3 + (i * 2.7);
  const isLast = i === 2;

  slide12.addShape('rect', {
    x: x, y: 4.85, w: 2.4, h: 0.55,
    fill: { color: isLast ? COLORS.GOLD_PREMIUM : COLORS.GRAY_100 },
    line: { color: isLast ? COLORS.GOLD_600 : COLORS.GRAY_300, width: 1 }
  });

  slide12.addText(`${item.icon} ${item.month}: ${item.result}`, {
    x: x, y: 4.88, w: 2.4, h: 0.5,
    fontSize: 9,
    fontFace: 'Segoe UI',
    color: isLast ? COLORS.WHITE : COLORS.GRAY_700,
    align: 'center',
    valign: 'middle'
  });
});

// ============================================
// SLIDE 13: IDENTIDADE VISUAL
// ============================================
let slide13 = pptx.addSlide();
slide13.background = { color: COLORS.BLACK_PREMIUM };
slide13.transition = defaultTransition;
addPremiumHeader(slide13, 'Identidade Visual', 'Nossa marca em detalhes', true);
addPremiumFooter(slide13, 13, 17, true);

// Seção Cores
slide13.addText('PALETA DE CORES', {
  x: 1.0, y: 1.55, w: 4.0, h: 0.35,
  fontSize: 12,
  fontFace: 'Segoe UI',
  bold: true,
  color: COLORS.WHITE
});

const colorsDisplay = [
  { name: 'Preto Premium', hex: '#0A0A0A', color: COLORS.BLACK_PREMIUM, border: true },
  { name: 'Branco', hex: '#FFFFFF', color: COLORS.WHITE },
  { name: 'Dourado Premium', hex: '#C9A227', color: COLORS.GOLD_PREMIUM }
];

colorsDisplay.forEach((c, i) => {
  const y = 2.0 + (i * 0.85);

  // Swatch com borda
  slide13.addShape('rect', {
    x: 1.0, y: y, w: 0.7, h: 0.65,
    fill: { color: c.color },
    line: { color: c.border ? COLORS.GRAY_600 : c.color, width: 1 }
  });

  // Nome
  slide13.addText(c.name, {
    x: 1.85, y: y, w: 2.5, h: 0.35,
    fontSize: 12,
    fontFace: 'Segoe UI',
    bold: true,
    color: COLORS.WHITE
  });

  // Hex
  slide13.addText(c.hex, {
    x: 1.85, y: y + 0.32, w: 2.5, h: 0.3,
    fontSize: 10,
    fontFace: 'Segoe UI',
    color: COLORS.GRAY_400
  });
});

// Seção Tipografia
slide13.addText('TIPOGRAFIA', {
  x: 5.5, y: 1.55, w: 4.0, h: 0.35,
  fontSize: 12,
  fontFace: 'Segoe UI',
  bold: true,
  color: COLORS.WHITE
});

// Plus Jakarta Sans
slide13.addShape('rect', {
  x: 5.5, y: 2.0, w: 3.5, h: 1.1,
  fill: { color: COLORS.BLACK_800 },
  line: { color: COLORS.GRAY_700, width: 1 }
});

slide13.addText('Plus Jakarta Sans', {
  x: 5.6, y: 2.1, w: 3.3, h: 0.45,
  fontSize: 18,
  fontFace: 'Segoe UI',
  bold: true,
  color: COLORS.GOLD_PREMIUM
});

slide13.addText('Títulos e destaques', {
  x: 5.6, y: 2.55, w: 3.3, h: 0.3,
  fontSize: 10,
  fontFace: 'Segoe UI',
  color: COLORS.GRAY_400
});

// Inter
slide13.addShape('rect', {
  x: 5.5, y: 3.2, w: 3.5, h: 1.1,
  fill: { color: COLORS.BLACK_800 },
  line: { color: COLORS.GRAY_700, width: 1 }
});

slide13.addText('Inter', {
  x: 5.6, y: 3.3, w: 3.3, h: 0.45,
  fontSize: 16,
  fontFace: 'Segoe UI',
  color: COLORS.WHITE
});

slide13.addText('Corpo de texto e informações', {
  x: 5.6, y: 3.75, w: 3.3, h: 0.3,
  fontSize: 10,
  fontFace: 'Segoe UI',
  color: COLORS.GRAY_400
});

// Logo demo
slide13.addText('LOGO', {
  x: 1.0, y: 4.45, w: 8.0, h: 0.3,
  fontSize: 12,
  fontFace: 'Segoe UI',
  bold: true,
  color: COLORS.WHITE
});

slide13.addShape('rect', {
  x: 1.0, y: 4.8, w: 8.0, h: 0.5,
  fill: { color: COLORS.BLACK_800 }
});

slide13.addText('L8', {
  x: 3.5, y: 4.8, w: 1.0, h: 0.5,
  fontSize: 24,
  fontFace: 'Segoe UI',
  bold: true,
  color: COLORS.GOLD_PREMIUM,
  align: 'right',
  valign: 'middle'
});

slide13.addText('CAPITAL', {
  x: 4.6, y: 4.8, w: 2.0, h: 0.5,
  fontSize: 14,
  fontFace: 'Segoe UI',
  color: COLORS.WHITE,
  charSpacing: 3,
  valign: 'middle'
});

// ============================================
// SLIDE 14: TOM DE VOZ
// ============================================
let slide14 = pptx.addSlide();
slide14.background = { color: COLORS.WHITE };
slide14.transition = defaultTransition;
addPremiumHeader(slide14, 'Tom de Voz', 'Como nos comunicamos');
addPremiumFooter(slide14, 14);

const voiceData = [
  { icon: ICONS.TARGET, title: 'DIRETO', desc: 'Sem rodeios, vamos ao ponto', example: '"Economize R$ 2.050/mês"' },
  { icon: ICONS.CHART_UP, title: 'CONCRETO', desc: 'Números reais, resultados mensuráveis', example: '"40% de comissão em seguros"' },
  { icon: ICONS.HANDSHAKE, title: 'HONESTO', desc: 'Transparência total, sem letras miúdas', example: '"Sem taxas ocultas, nunca"' },
  { icon: ICONS.TROPHY, title: 'PARCEIRO', desc: 'Lado a lado, crescemos juntos', example: '"Seu sucesso é o nosso"' }
];

voiceData.forEach((item, i) => {
  const row = Math.floor(i / 2);
  const col = i % 2;
  const x = 1.0 + (col * 4.2);
  const y = 1.6 + (row * 1.7);

  // Card
  slide14.addShape('rect', {
    x: x, y: y, w: 3.9, h: 1.5,
    fill: { color: COLORS.WHITE },
    line: { color: COLORS.GRAY_300, width: 1 },
    shadow: { type: 'outer', blur: 2, offset: 1, angle: 45, color: '000000', opacity: 0.08 }
  });

  // Barra lateral
  slide14.addShape('rect', {
    x: x, y: y, w: 0.08, h: 1.5,
    fill: { color: COLORS.GOLD_PREMIUM }
  });

  // Ícone e título na mesma linha
  slide14.addText(`${item.icon}  ${item.title}`, {
    x: x + 0.2, y: y + 0.1, w: 3.5, h: 0.4,
    fontSize: 13,
    fontFace: 'Segoe UI',
    bold: true,
    color: COLORS.BLACK_PREMIUM
  });

  // Descrição
  slide14.addText(item.desc, {
    x: x + 0.2, y: y + 0.5, w: 3.5, h: 0.35,
    fontSize: 11,
    fontFace: 'Segoe UI',
    color: COLORS.GRAY_600
  });

  // Exemplo
  slide14.addText(item.example, {
    x: x + 0.2, y: y + 0.95, w: 3.5, h: 0.4,
    fontSize: 11,
    fontFace: 'Segoe UI',
    italic: true,
    color: COLORS.GOLD_700
  });
});

// ============================================
// SLIDE 15: COMPLIANCE
// ============================================
let slide15 = pptx.addSlide();
slide15.background = { color: COLORS.WHITE };
slide15.transition = defaultTransition;
addPremiumHeader(slide15, 'Segurança e Compliance', 'Sua tranquilidade é nossa prioridade');
addPremiumFooter(slide15, 15);

const complianceData = [
  { icon: ICONS.DOCUMENT, title: 'LGPD', desc: 'Totalmente adequados à Lei Geral de Proteção de Dados' },
  { icon: ICONS.SERVER, title: 'SERVIDORES', desc: 'Infraestrutura em nuvem com 99.9% de uptime' },
  { icon: ICONS.LOCK, title: 'CRIPTOGRAFIA', desc: 'Dados protegidos com criptografia de ponta' },
  { icon: ICONS.KEY, title: 'POLÍTICAS', desc: 'Termos claros e transparentes' }
];

complianceData.forEach((item, i) => {
  const row = Math.floor(i / 2);
  const col = i % 2;
  const x = 1.0 + (col * 4.2);
  const y = 1.6 + (row * 1.4);

  // Card
  slide15.addShape('rect', {
    x: x, y: y, w: 3.9, h: 1.2,
    fill: { color: COLORS.GRAY_50 },
    line: { color: COLORS.GRAY_200, width: 1 }
  });

  // Ícone
  slide15.addText(item.icon, {
    x: x + 0.15, y: y + 0.35, w: 0.6, h: 0.5,
    fontSize: 24
  });

  // Título
  slide15.addText(item.title, {
    x: x + 0.8, y: y + 0.2, w: 2.9, h: 0.35,
    fontSize: 12,
    fontFace: 'Segoe UI',
    bold: true,
    color: COLORS.BLACK_PREMIUM
  });

  // Descrição
  slide15.addText(item.desc, {
    x: x + 0.8, y: y + 0.55, w: 2.9, h: 0.5,
    fontSize: 10,
    fontFace: 'Segoe UI',
    color: COLORS.GRAY_600
  });
});

// Garantias
slide15.addText('NOSSAS GARANTIAS', {
  x: 1.0, y: 4.45, w: 8.0, h: 0.35,
  fontSize: 12,
  fontFace: 'Segoe UI',
  bold: true,
  color: COLORS.BLACK_PREMIUM
});

slide15.addShape('rect', {
  x: 1.0, y: 4.8, w: 8.0, h: 0.55,
  fill: { color: COLORS.GOLD_50 },
  line: { color: COLORS.GOLD_300, width: 1 }
});

const garantias = ['Sem fidelidade forçada', 'Cancelamento sem burocracia', 'Suporte humano sempre', 'Preços fixos, sem surpresas'];
garantias.forEach((g, i) => {
  slide15.addText(`${ICONS.CHECK} ${g}`, {
    x: 1.1 + (i * 2.0), y: 4.85, w: 1.95, h: 0.45,
    fontSize: 9,
    fontFace: 'Segoe UI',
    color: COLORS.GOLD_800,
    valign: 'middle'
  });
});

// ============================================
// SLIDE 16: PRÓXIMOS PASSOS
// ============================================
let slide16 = pptx.addSlide();
slide16.background = { color: COLORS.WHITE };
slide16.transition = defaultTransition;
addPremiumHeader(slide16, 'Próximos Passos', 'Comece a fortalecer sua imobiliária hoje');
addPremiumFooter(slide16, 16);

const stepsData = [
  { step: '1', icon: ICONS.CALENDAR, title: 'AGENDAR', desc: 'Escolha o melhor\nhorário para conversar' },
  { step: '2', icon: ICONS.PRESENTATION, title: 'RECEBER', desc: 'Diagnóstico gratuito\nda sua operação' },
  { step: '3', icon: ICONS.HANDSHAKE, title: 'DECIDIR', desc: 'Sem pressão, você\nescolhe o que faz sentido' }
];

// Linha conectora
slide16.addShape('rect', {
  x: 2.2, y: 2.35, w: 5.6, h: 0.02,
  fill: { color: COLORS.GOLD_300 }
});

stepsData.forEach((item, i) => {
  const x = 1.0 + (i * 3.0);

  // Círculo com número
  slide16.addShape('ellipse', {
    x: x + 0.85, y: 1.95, w: 0.9, h: 0.9,
    fill: { color: COLORS.GOLD_PREMIUM },
    shadow: { type: 'outer', blur: 4, offset: 2, angle: 45, color: COLORS.GOLD_800, opacity: 0.4 }
  });

  slide16.addText(item.step, {
    x: x + 0.85, y: 2.1, w: 0.9, h: 0.6,
    fontSize: 22,
    fontFace: 'Segoe UI',
    bold: true,
    color: COLORS.WHITE,
    align: 'center'
  });

  // Ícone
  slide16.addText(item.icon, {
    x: x, y: 2.95, w: 2.6, h: 0.5,
    fontSize: 24,
    align: 'center'
  });

  // Título
  slide16.addText(item.title, {
    x: x, y: 3.45, w: 2.6, h: 0.4,
    fontSize: 15,
    fontFace: 'Segoe UI',
    bold: true,
    color: COLORS.BLACK_PREMIUM,
    align: 'center'
  });

  // Descrição
  slide16.addText(item.desc, {
    x: x, y: 3.85, w: 2.6, h: 0.7,
    fontSize: 11,
    fontFace: 'Segoe UI',
    color: COLORS.GRAY_600,
    align: 'center'
  });
});

// Box de contato
slide16.addShape('rect', {
  x: 1.0, y: 4.55, w: 8.0, h: 0.85,
  fill: { color: COLORS.BLACK_PREMIUM }
});

slide16.addText('FALE CONOSCO', {
  x: 1.0, y: 4.6, w: 8.0, h: 0.3,
  fontSize: 11,
  fontFace: 'Segoe UI',
  bold: true,
  color: COLORS.GOLD_PREMIUM,
  align: 'center'
});

slide16.addText(`${ICONS.PHONE} WhatsApp: (XX) XXXXX-XXXX     |     ${ICONS.EMAIL} contato@l8capital.com.br     |     ${ICONS.GLOBE} l8capital.com.br`, {
  x: 1.0, y: 4.95, w: 8.0, h: 0.35,
  fontSize: 11,
  fontFace: 'Segoe UI',
  color: COLORS.WHITE,
  align: 'center'
});

// ============================================
// SLIDE 17: ENCERRAMENTO PREMIUM
// ============================================
let slide17 = pptx.addSlide();
slide17.background = { color: COLORS.BLACK_PREMIUM };
slide17.transition = defaultTransition;

// Elementos decorativos
slide17.addShape('rect', {
  x: 0, y: 0, w: 0.03, h: '100%',
  fill: { color: COLORS.GOLD_PREMIUM }
});

slide17.addShape('rect', {
  x: 9.97, y: 0, w: 0.03, h: '100%',
  fill: { color: COLORS.GOLD_PREMIUM }
});

// Logo (tenta imagem, fallback para texto)
try {
  slide17.addImage({
    path: ASSETS.LOGO_WHITE,
    x: 3.0, y: 1.3, w: 4.0, h: 1.5,
    sizing: { type: 'contain' }
  });
} catch (e) {
  slide17.addText('L8', {
    x: 0, y: 1.4, w: '100%', h: 0.9,
    fontSize: 80,
    fontFace: 'Segoe UI',
    bold: true,
    color: COLORS.GOLD_PREMIUM,
    align: 'center'
  });

  slide17.addText('C A P I T A L', {
    x: 0, y: 2.3, w: '100%', h: 0.5,
    fontSize: 22,
    fontFace: 'Segoe UI',
    color: COLORS.GOLD_PREMIUM,
    align: 'center',
    charSpacing: 8
  });
}

// Linha decorativa
slide17.addShape('rect', {
  x: 3.2, y: 3.0, w: 3.6, h: 0.015,
  fill: { color: COLORS.GOLD_PREMIUM }
});

// Tagline
slide17.addText('Sua imobiliária mais forte.', {
  x: 0, y: 3.2, w: '100%', h: 0.5,
  fontSize: 20,
  fontFace: 'Segoe UI',
  italic: true,
  color: COLORS.WHITE,
  align: 'center'
});

// Contatos
slide17.addShape('rect', {
  x: 2.5, y: 4.0, w: 5.0, h: 0.7,
  fill: { color: COLORS.BLACK_800 },
  line: { color: COLORS.GRAY_700, width: 1 }
});

slide17.addText(`${ICONS.EMAIL} contato@l8capital.com.br  |  ${ICONS.GLOBE} l8capital.com.br`, {
  x: 2.5, y: 4.1, w: 5.0, h: 0.5,
  fontSize: 11,
  fontFace: 'Segoe UI',
  color: COLORS.GRAY_400,
  align: 'center',
  valign: 'middle'
});

// Copyright
slide17.addText('© 2026 L8 Capital. Todos os direitos reservados.', {
  x: 0, y: 5.1, w: '100%', h: 0.3,
  fontSize: 9,
  fontFace: 'Segoe UI',
  color: COLORS.GRAY_600,
  align: 'center'
});

// ============================================
// SALVAR APRESENTAÇÃO
// ============================================
const outputPath = 'L8_Capital_Apresentacao_v2.pptx';
pptx.writeFile({ fileName: outputPath })
  .then(fileName => {
    console.log('');
    console.log('╔════════════════════════════════════════════════════════════╗');
    console.log('║                                                            ║');
    console.log('║   ✅ APRESENTAÇÃO v2.0 CRIADA COM SUCESSO!                 ║');
    console.log('║                                                            ║');
    console.log('╠════════════════════════════════════════════════════════════╣');
    console.log('║                                                            ║');
    console.log(`║   📁 Arquivo: ${fileName.padEnd(43)}║`);
    console.log('║                                                            ║');
    console.log('╠════════════════════════════════════════════════════════════╣');
    console.log('║                                                            ║');
    console.log('║   📌 MELHORIAS IMPLEMENTADAS:                              ║');
    console.log('║                                                            ║');
    console.log('║   ✓ Paleta de cores expandida (dourado + cinzas)           ║');
    console.log('║   ✓ Ícones Unicode profissionais                           ║');
    console.log('║   ✓ Cards com sombras e bordas premium                     ║');
    console.log('║   ✓ Gráficos de barras comparativos                        ║');
    console.log('║   ✓ Headers e footers padronizados                         ║');
    console.log('║   ✓ Transições fade em todos os slides                     ║');
    console.log('║   ✓ Mais espaço negativo e hierarquia visual               ║');
    console.log('║   ✓ Elementos decorativos premium                          ║');
    console.log('║   ✓ Logo em imagem (se disponível)                         ║');
    console.log('║                                                            ║');
    console.log('╠════════════════════════════════════════════════════════════╣');
    console.log('║                                                            ║');
    console.log('║   📊 ESTRUTURA (17 slides):                                ║');
    console.log('║                                                            ║');
    console.log('║   1. Capa Premium                                          ║');
    console.log('║   2. Nossa História (Timeline)                             ║');
    console.log('║   3. Nosso Propósito (Golden Circle)                       ║');
    console.log('║   4. Quem Somos (Métricas)                                 ║');
    console.log('║   5. O Problema                                            ║');
    console.log('║   6. Proposta de Valor (3 Pilares)                         ║');
    console.log('║   7. Portfólio de Soluções                                 ║');
    console.log('║   8. Seguros (Gráfico de Barras)                           ║');
    console.log('║   9. Financeiro (Comparativo Visual)                       ║');
    console.log('║   10. Capacitação                                          ║');
    console.log('║   11. Diferencial (VS Comparativo)                         ║');
    console.log('║   12. Como Funciona                                        ║');
    console.log('║   13. Identidade Visual                                    ║');
    console.log('║   14. Tom de Voz                                           ║');
    console.log('║   15. Compliance                                           ║');
    console.log('║   16. Próximos Passos                                      ║');
    console.log('║   17. Encerramento Premium                                 ║');
    console.log('║                                                            ║');
    console.log('╚════════════════════════════════════════════════════════════╝');
    console.log('');
  })
  .catch(err => {
    console.error('❌ Erro ao criar apresentação:', err);
  });
