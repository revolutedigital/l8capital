/**
 * L8 Capital - Gerador de Apresentação PowerPoint
 * Utiliza pptxgenjs para criar a apresentação institucional
 *
 * Executar:
 * 1. npm install pptxgenjs
 * 2. node scripts/create-presentation.js
 */

const PptxGenJS = require('pptxgenjs');

// ============================================
// CONFIGURAÇÕES DE CORES DA MARCA
// ============================================
const COLORS = {
  BLACK_PREMIUM: '0A0A0A',
  WHITE: 'FFFFFF',
  GOLD_PREMIUM: 'C9A227',
  GRAY_600: '5C5C56',
  GRAY_400: 'A8A8A0',
  GRAY_100: 'F5F5F3',
};

// ============================================
// CONFIGURAÇÕES DE FONTES
// ============================================
const FONTS = {
  DISPLAY: 'Segoe UI', // Fallback para Plus Jakarta Sans
  BODY: 'Segoe UI',    // Fallback para Inter
};

// ============================================
// FUNÇÕES AUXILIARES
// ============================================

function addHeader(slide, title, subtitle = null, isDark = false) {
  // Barra dourada no topo
  slide.addShape('rect', {
    x: 0, y: 0, w: '100%', h: 0.15,
    fill: { color: COLORS.GOLD_PREMIUM }
  });

  // Título
  slide.addText(title, {
    x: 0.8, y: 0.5, w: 8.5, h: 0.7,
    fontSize: 36,
    fontFace: FONTS.DISPLAY,
    bold: true,
    color: isDark ? COLORS.WHITE : COLORS.BLACK_PREMIUM
  });

  // Subtítulo (se existir)
  if (subtitle) {
    slide.addText(subtitle, {
      x: 0.8, y: 1.1, w: 8.5, h: 0.4,
      fontSize: 16,
      fontFace: FONTS.BODY,
      color: isDark ? COLORS.GRAY_400 : COLORS.GRAY_600
    });
  }
}

function addFooter(slide, slideNum, isDark = false) {
  slide.addText(`${slideNum}/17`, {
    x: 9.2, y: 5.2, w: 0.5, h: 0.3,
    fontSize: 10,
    fontFace: FONTS.BODY,
    color: isDark ? COLORS.GRAY_400 : COLORS.GRAY_600,
    align: 'right'
  });
}

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

// ============================================
// SLIDE 1: CAPA
// ============================================
let slide1 = pptx.addSlide();
slide1.background = { color: COLORS.BLACK_PREMIUM };

// Logo L8
slide1.addText('L8', {
  x: 0, y: 1.8, w: '100%', h: 1.2,
  fontSize: 96,
  fontFace: FONTS.DISPLAY,
  bold: true,
  color: COLORS.GOLD_PREMIUM,
  align: 'center'
});

// CAPITAL
slide1.addText('C A P I T A L', {
  x: 0, y: 2.9, w: '100%', h: 0.5,
  fontSize: 24,
  fontFace: FONTS.DISPLAY,
  color: COLORS.GOLD_PREMIUM,
  align: 'center',
  charSpacing: 8
});

// Linha decorativa
slide1.addShape('rect', {
  x: 3.5, y: 3.5, w: 3, h: 0.02,
  fill: { color: COLORS.GOLD_PREMIUM }
});

// Tagline
slide1.addText('Sua imobiliária mais forte.', {
  x: 0, y: 3.8, w: '100%', h: 0.4,
  fontSize: 18,
  fontFace: FONTS.BODY,
  italic: true,
  color: COLORS.WHITE,
  align: 'center'
});

// Rodapé
slide1.addText('Apresentação Institucional • Janeiro 2026', {
  x: 0, y: 5.1, w: '100%', h: 0.3,
  fontSize: 10,
  fontFace: FONTS.BODY,
  color: COLORS.GRAY_400,
  align: 'center'
});

// ============================================
// SLIDE 2: NOSSA HISTÓRIA
// ============================================
let slide2 = pptx.addSlide();
slide2.background = { color: COLORS.WHITE };
addHeader(slide2, 'Nossa História', 'Por que a L8 existe?');
addFooter(slide2, 2);

// Quote box
slide2.addShape('rect', {
  x: 0.8, y: 1.7, w: 8.4, h: 1.0,
  fill: { color: COLORS.GRAY_100 },
  line: { color: COLORS.GOLD_PREMIUM, width: 2, dashType: 'solid' }
});

slide2.addText('"Em 24 anos no mercado imobiliário, vimos imobiliárias fecharem não por falta de clientes, mas por falta de estrutura."', {
  x: 1.0, y: 1.85, w: 8.0, h: 0.7,
  fontSize: 14,
  fontFace: FONTS.BODY,
  italic: true,
  color: COLORS.GRAY_600,
  align: 'center'
});

// Timeline
const timelineY = 3.0;
const timelineData = [
  { year: '2000-2020', text: '24 anos de experiência\nno mercado imobiliário' },
  { year: '2021', text: 'Identificamos que\nimobiliárias precisavam\nde mais estrutura' },
  { year: '2022+', text: 'Nasce a L8 Capital:\nfortalecendo imobiliárias' }
];

timelineData.forEach((item, i) => {
  const x = 0.8 + (i * 3.1);

  // Box
  slide2.addShape('rect', {
    x: x, y: timelineY, w: 2.8, h: 1.6,
    fill: { color: i === 2 ? COLORS.GOLD_PREMIUM : COLORS.GRAY_100 },
    line: { color: i === 2 ? COLORS.GOLD_PREMIUM : COLORS.GRAY_400, width: 1 }
  });

  // Ano
  slide2.addText(item.year, {
    x: x, y: timelineY + 0.15, w: 2.8, h: 0.4,
    fontSize: 18,
    fontFace: FONTS.DISPLAY,
    bold: true,
    color: i === 2 ? COLORS.WHITE : COLORS.BLACK_PREMIUM,
    align: 'center'
  });

  // Texto
  slide2.addText(item.text, {
    x: x + 0.1, y: timelineY + 0.6, w: 2.6, h: 0.9,
    fontSize: 11,
    fontFace: FONTS.BODY,
    color: i === 2 ? COLORS.WHITE : COLORS.GRAY_600,
    align: 'center'
  });

  // Seta (exceto último)
  if (i < 2) {
    slide2.addText('→', {
      x: x + 2.7, y: timelineY + 0.5, w: 0.5, h: 0.5,
      fontSize: 24,
      color: COLORS.GOLD_PREMIUM
    });
  }
});

// ============================================
// SLIDE 3: NOSSO PROPÓSITO
// ============================================
let slide3 = pptx.addSlide();
slide3.background = { color: COLORS.WHITE };
addHeader(slide3, 'Nosso Propósito', 'O Golden Circle da L8 Capital');
addFooter(slide3, 3);

// Círculos do Golden Circle
const centerX = 3.0;
const centerY = 3.2;

// Círculo externo - O QUÊ
slide3.addShape('ellipse', {
  x: centerX - 1.5, y: centerY - 1.5, w: 3.0, h: 3.0,
  fill: { color: COLORS.GRAY_100 },
  line: { color: COLORS.GRAY_400, width: 1 }
});

// Círculo médio - COMO
slide3.addShape('ellipse', {
  x: centerX - 1.0, y: centerY - 1.0, w: 2.0, h: 2.0,
  fill: { color: COLORS.BLACK_PREMIUM },
  line: { color: COLORS.BLACK_PREMIUM, width: 1 }
});

// Círculo central - POR QUÊ
slide3.addShape('ellipse', {
  x: centerX - 0.5, y: centerY - 0.5, w: 1.0, h: 1.0,
  fill: { color: COLORS.GOLD_PREMIUM },
  line: { color: COLORS.GOLD_PREMIUM, width: 1 }
});

// Labels dos círculos
slide3.addText('POR QUÊ?', {
  x: centerX - 0.5, y: centerY - 0.15, w: 1.0, h: 0.3,
  fontSize: 8,
  fontFace: FONTS.DISPLAY,
  bold: true,
  color: COLORS.WHITE,
  align: 'center'
});

slide3.addText('COMO?', {
  x: centerX - 1.0, y: centerY + 0.6, w: 2.0, h: 0.3,
  fontSize: 9,
  fontFace: FONTS.DISPLAY,
  bold: true,
  color: COLORS.WHITE,
  align: 'center'
});

slide3.addText('O QUÊ?', {
  x: centerX - 1.5, y: centerY + 1.2, w: 3.0, h: 0.3,
  fontSize: 10,
  fontFace: FONTS.DISPLAY,
  bold: true,
  color: COLORS.BLACK_PREMIUM,
  align: 'center'
});

// Descrições ao lado
const descX = 5.5;
slide3.addText('POR QUÊ?\nAcreditamos que toda imobiliária\nmerece estrutura de grande empresa', {
  x: descX, y: 1.8, w: 4.0, h: 0.8,
  fontSize: 12,
  fontFace: FONTS.BODY,
  color: COLORS.GOLD_PREMIUM,
  lineSpacing: 18
});

slide3.addText('COMO?\n100% tecnologia proprietária\nSem custos ocultos\nParceria real, não fornecimento', {
  x: descX, y: 2.7, w: 4.0, h: 1.0,
  fontSize: 12,
  fontFace: FONTS.BODY,
  color: COLORS.BLACK_PREMIUM,
  lineSpacing: 18
});

slide3.addText('O QUÊ?\nSeguros, financeiro e capacitação\npara fortalecer sua imobiliária', {
  x: descX, y: 3.8, w: 4.0, h: 0.8,
  fontSize: 12,
  fontFace: FONTS.BODY,
  color: COLORS.GRAY_600,
  lineSpacing: 18
});

// ============================================
// SLIDE 4: QUEM SOMOS (Métricas)
// ============================================
let slide4 = pptx.addSlide();
slide4.background = { color: COLORS.BLACK_PREMIUM };
addHeader(slide4, 'Quem Somos', 'Números que comprovam nossa solidez', true);
addFooter(slide4, 4, true);

// Cards de métricas
const metricsData = [
  { number: '24', label: 'ANOS', desc: 'de experiência no\nmercado imobiliário' },
  { number: '100%', label: 'TECNOLOGIA', desc: 'proprietária desenvolvida\ninternamente' },
  { number: 'R$ 2.050', label: 'ECONOMIA', desc: 'média mensal por\nimobiliária parceira' }
];

metricsData.forEach((item, i) => {
  const x = 0.8 + (i * 3.1);

  // Card background
  slide4.addShape('rect', {
    x: x, y: 1.8, w: 2.9, h: 2.8,
    fill: { color: '1A1A1A' },
    line: { color: COLORS.GOLD_PREMIUM, width: 2 }
  });

  // Número
  slide4.addText(item.number, {
    x: x, y: 2.0, w: 2.9, h: 0.8,
    fontSize: 36,
    fontFace: FONTS.DISPLAY,
    bold: true,
    color: COLORS.GOLD_PREMIUM,
    align: 'center'
  });

  // Label
  slide4.addText(item.label, {
    x: x, y: 2.8, w: 2.9, h: 0.4,
    fontSize: 14,
    fontFace: FONTS.DISPLAY,
    bold: true,
    color: COLORS.WHITE,
    align: 'center'
  });

  // Descrição
  slide4.addText(item.desc, {
    x: x + 0.2, y: 3.3, w: 2.5, h: 0.8,
    fontSize: 11,
    fontFace: FONTS.BODY,
    color: COLORS.GRAY_400,
    align: 'center'
  });
});

// ============================================
// SLIDE 5: O PROBLEMA
// ============================================
let slide5 = pptx.addSlide();
slide5.background = { color: COLORS.WHITE };
addHeader(slide5, 'O Problema', 'As dores que imobiliárias enfrentam');
addFooter(slide5, 5);

// Quotes de dores
const painPoints = [
  '"Perco tempo demais com operacional"',
  '"Não consigo me diferenciar da concorrência"',
  '"Meus custos fixos são muito altos"',
  '"Faltam ferramentas profissionais"'
];

painPoints.forEach((quote, i) => {
  const row = Math.floor(i / 2);
  const col = i % 2;
  const x = 0.8 + (col * 4.5);
  const y = 1.8 + (row * 1.2);

  slide5.addShape('rect', {
    x: x, y: y, w: 4.2, h: 0.9,
    fill: { color: COLORS.GRAY_100 },
    line: { color: COLORS.GRAY_400, width: 1 }
  });

  slide5.addText(quote, {
    x: x + 0.2, y: y + 0.2, w: 3.8, h: 0.5,
    fontSize: 12,
    fontFace: FONTS.BODY,
    italic: true,
    color: COLORS.GRAY_600,
    align: 'center'
  });
});

// Tabela resumo
slide5.addTable([
  [
    { text: 'SINTOMA', options: { bold: true, fill: COLORS.BLACK_PREMIUM, color: COLORS.WHITE } },
    { text: 'CAUSA', options: { bold: true, fill: COLORS.BLACK_PREMIUM, color: COLORS.WHITE } },
    { text: 'IMPACTO', options: { bold: true, fill: COLORS.BLACK_PREMIUM, color: COLORS.WHITE } }
  ],
  [
    { text: 'Operacional excessivo', options: { fill: COLORS.GRAY_100 } },
    { text: 'Falta de automação', options: { fill: COLORS.GRAY_100 } },
    { text: 'Menos tempo para vender', options: { fill: COLORS.GRAY_100 } }
  ],
  [
    { text: 'Custos elevados', options: { fill: COLORS.WHITE } },
    { text: 'Fornecedores caros', options: { fill: COLORS.WHITE } },
    { text: 'Margem reduzida', options: { fill: COLORS.WHITE } }
  ],
  [
    { text: 'Sem diferenciação', options: { fill: COLORS.GRAY_100 } },
    { text: 'Ferramentas genéricas', options: { fill: COLORS.GRAY_100 } },
    { text: 'Perda para concorrência', options: { fill: COLORS.GRAY_100 } }
  ]
], {
  x: 0.8, y: 4.2, w: 8.4, h: 1.3,
  fontSize: 10,
  fontFace: FONTS.BODY,
  color: COLORS.BLACK_PREMIUM,
  border: { pt: 0.5, color: COLORS.GRAY_400 },
  align: 'center',
  valign: 'middle'
});

// ============================================
// SLIDE 6: PROPOSTA DE VALOR
// ============================================
let slide6 = pptx.addSlide();
slide6.background = { color: COLORS.WHITE };
addHeader(slide6, 'Proposta de Valor', 'Como fortalecemos sua imobiliária');
addFooter(slide6, 6);

// 3 pilares
const pillarsData = [
  { title: 'AUMENTAR\nRECEITA', color: COLORS.GOLD_PREMIUM, textColor: COLORS.WHITE, items: ['Novos produtos', 'Comissões maiores', 'Diversificação'] },
  { title: 'REDUZIR\nCUSTOS', color: COLORS.BLACK_PREMIUM, textColor: COLORS.WHITE, items: ['Boletos a R$ 1,90', 'Sem mensalidades', 'Economia real'] },
  { title: 'ELIMINAR\nOPERACIONAL', color: COLORS.GRAY_100, textColor: COLORS.BLACK_PREMIUM, items: ['100% digital', 'Automação total', 'Mais tempo livre'] }
];

pillarsData.forEach((pillar, i) => {
  const x = 0.8 + (i * 3.1);

  // Box do pilar
  slide6.addShape('rect', {
    x: x, y: 1.8, w: 2.9, h: 2.5,
    fill: { color: pillar.color },
    line: { color: pillar.color === COLORS.GRAY_100 ? COLORS.GRAY_400 : pillar.color, width: 1 }
  });

  // Título do pilar
  slide6.addText(pillar.title, {
    x: x, y: 1.95, w: 2.9, h: 0.7,
    fontSize: 14,
    fontFace: FONTS.DISPLAY,
    bold: true,
    color: pillar.textColor,
    align: 'center'
  });

  // Items
  pillar.items.forEach((item, j) => {
    slide6.addText('• ' + item, {
      x: x + 0.3, y: 2.7 + (j * 0.4), w: 2.4, h: 0.35,
      fontSize: 11,
      fontFace: FONTS.BODY,
      color: pillar.textColor,
      align: 'left'
    });
  });

  // Seta + entre pilares
  if (i < 2) {
    slide6.addText('+', {
      x: x + 2.85, y: 2.7, w: 0.4, h: 0.5,
      fontSize: 24,
      fontFace: FONTS.DISPLAY,
      bold: true,
      color: COLORS.GOLD_PREMIUM,
      align: 'center'
    });
  }
});

// Resultado
slide6.addText('=', {
  x: 4.5, y: 4.5, w: 1, h: 0.5,
  fontSize: 28,
  fontFace: FONTS.DISPLAY,
  bold: true,
  color: COLORS.GOLD_PREMIUM,
  align: 'center'
});

slide6.addShape('rect', {
  x: 2.5, y: 4.9, w: 5, h: 0.6,
  fill: { color: COLORS.GOLD_PREMIUM }
});

slide6.addText('IMOBILIÁRIA MAIS FORTE', {
  x: 2.5, y: 4.95, w: 5, h: 0.5,
  fontSize: 18,
  fontFace: FONTS.DISPLAY,
  bold: true,
  color: COLORS.WHITE,
  align: 'center'
});

// ============================================
// SLIDE 7: PORTFÓLIO
// ============================================
let slide7 = pptx.addSlide();
slide7.background = { color: COLORS.WHITE };
addHeader(slide7, 'Portfólio de Soluções', 'Três verticais para fortalecer seu negócio');
addFooter(slide7, 7);

const portfolioData = [
  {
    icon: '🛡️',
    title: 'SEGUROS',
    items: ['Incêndio', 'Fiança Locatícia', 'Condomínio', 'Vida', 'Residencial', 'Empresarial']
  },
  {
    icon: '💰',
    title: 'FINANCEIRO',
    items: ['Boletos a R$ 1,90', 'Antecipação', 'Cobrança automática', 'Relatórios completos']
  },
  {
    icon: '📚',
    title: 'CAPACITAÇÃO',
    items: ['Treinamento comercial', 'Gestão operacional', 'Metodologia de vistoria']
  }
];

portfolioData.forEach((cat, i) => {
  const x = 0.8 + (i * 3.1);

  // Card
  slide7.addShape('rect', {
    x: x, y: 1.7, w: 2.9, h: 3.3,
    fill: { color: COLORS.WHITE },
    line: { color: COLORS.GOLD_PREMIUM, width: 2 }
  });

  // Header do card
  slide7.addShape('rect', {
    x: x, y: 1.7, w: 2.9, h: 0.7,
    fill: { color: COLORS.BLACK_PREMIUM }
  });

  // Título da categoria
  slide7.addText(cat.title, {
    x: x, y: 1.8, w: 2.9, h: 0.5,
    fontSize: 14,
    fontFace: FONTS.DISPLAY,
    bold: true,
    color: COLORS.WHITE,
    align: 'center'
  });

  // Items
  cat.items.forEach((item, j) => {
    slide7.addText('• ' + item, {
      x: x + 0.2, y: 2.5 + (j * 0.38), w: 2.5, h: 0.35,
      fontSize: 11,
      fontFace: FONTS.BODY,
      color: COLORS.BLACK_PREMIUM
    });
  });
});

// ============================================
// SLIDE 8: SEGUROS - DETALHES
// ============================================
let slide8 = pptx.addSlide();
slide8.background = { color: COLORS.WHITE };
addHeader(slide8, 'Seguros', 'Proteção completa com comissões superiores');
addFooter(slide8, 8);

// Tabela de seguros
slide8.addTable([
  [
    { text: 'PRODUTO', options: { bold: true, fill: COLORS.BLACK_PREMIUM, color: COLORS.WHITE } },
    { text: 'BENEFÍCIO', options: { bold: true, fill: COLORS.BLACK_PREMIUM, color: COLORS.WHITE } },
    { text: 'COMISSÃO', options: { bold: true, fill: COLORS.BLACK_PREMIUM, color: COLORS.WHITE } }
  ],
  [
    { text: 'Seguro Incêndio', options: { fill: COLORS.GRAY_100 } },
    { text: 'Obrigatório por lei', options: { fill: COLORS.GRAY_100 } },
    { text: '40%', options: { fill: COLORS.GRAY_100, bold: true, color: COLORS.GOLD_PREMIUM } }
  ],
  [
    { text: 'Fiança Locatícia', options: { fill: COLORS.WHITE } },
    { text: 'Elimina fiador/caução', options: { fill: COLORS.WHITE } },
    { text: '25%', options: { fill: COLORS.WHITE, bold: true, color: COLORS.GOLD_PREMIUM } }
  ],
  [
    { text: 'Seguro Condomínio', options: { fill: COLORS.GRAY_100 } },
    { text: 'Protege áreas comuns', options: { fill: COLORS.GRAY_100 } },
    { text: '35%', options: { fill: COLORS.GRAY_100, bold: true, color: COLORS.GOLD_PREMIUM } }
  ],
  [
    { text: 'Seguro Residencial', options: { fill: COLORS.WHITE } },
    { text: 'Cobertura completa', options: { fill: COLORS.WHITE } },
    { text: '30%', options: { fill: COLORS.WHITE, bold: true, color: COLORS.GOLD_PREMIUM } }
  ]
], {
  x: 0.8, y: 1.7, w: 8.4, h: 2.0,
  fontSize: 11,
  fontFace: FONTS.BODY,
  color: COLORS.BLACK_PREMIUM,
  border: { pt: 0.5, color: COLORS.GRAY_400 },
  align: 'center',
  valign: 'middle'
});

// Comparativo
slide8.addText('COMPARATIVO DE GANHOS', {
  x: 0.8, y: 4.0, w: 8.4, h: 0.4,
  fontSize: 14,
  fontFace: FONTS.DISPLAY,
  bold: true,
  color: COLORS.BLACK_PREMIUM,
  align: 'center'
});

// Box tradicional
slide8.addShape('rect', {
  x: 1.5, y: 4.5, w: 3, h: 0.9,
  fill: { color: COLORS.GRAY_100 },
  line: { color: COLORS.GRAY_400, width: 1 }
});
slide8.addText('Tradicional\n15-20% comissão', {
  x: 1.5, y: 4.55, w: 3, h: 0.8,
  fontSize: 12,
  fontFace: FONTS.BODY,
  color: COLORS.GRAY_600,
  align: 'center'
});

// Seta
slide8.addText('→', {
  x: 4.5, y: 4.7, w: 1, h: 0.5,
  fontSize: 28,
  color: COLORS.GOLD_PREMIUM,
  align: 'center'
});

// Box L8
slide8.addShape('rect', {
  x: 5.5, y: 4.5, w: 3, h: 0.9,
  fill: { color: COLORS.GOLD_PREMIUM }
});
slide8.addText('L8 Capital\n25-40% comissão', {
  x: 5.5, y: 4.55, w: 3, h: 0.8,
  fontSize: 12,
  fontFace: FONTS.BODY,
  bold: true,
  color: COLORS.WHITE,
  align: 'center'
});

// ============================================
// SLIDE 9: FINANCEIRO
// ============================================
let slide9 = pptx.addSlide();
slide9.background = { color: COLORS.BLACK_PREMIUM };
addHeader(slide9, 'Financeiro', 'Boletos 68% mais baratos que o mercado', true);
addFooter(slide9, 9, true);

// 3 boxes de comparação
const financeData = [
  { label: 'MERCADO', value: 'R$ 6,00', subtext: 'preço médio' },
  { label: 'L8 CAPITAL', value: 'R$ 1,90', subtext: 'nosso preço', highlight: true },
  { label: 'ECONOMIA', value: 'R$ 4,10', subtext: 'por boleto' }
];

financeData.forEach((item, i) => {
  const x = 0.8 + (i * 3.1);

  slide9.addShape('rect', {
    x: x, y: 1.8, w: 2.9, h: 1.5,
    fill: { color: item.highlight ? COLORS.GOLD_PREMIUM : '1A1A1A' },
    line: { color: item.highlight ? COLORS.GOLD_PREMIUM : COLORS.GRAY_600, width: 1 }
  });

  slide9.addText(item.label, {
    x: x, y: 1.9, w: 2.9, h: 0.3,
    fontSize: 10,
    fontFace: FONTS.DISPLAY,
    bold: true,
    color: item.highlight ? COLORS.BLACK_PREMIUM : COLORS.GRAY_400,
    align: 'center'
  });

  slide9.addText(item.value, {
    x: x, y: 2.2, w: 2.9, h: 0.6,
    fontSize: 28,
    fontFace: FONTS.DISPLAY,
    bold: true,
    color: item.highlight ? COLORS.BLACK_PREMIUM : COLORS.WHITE,
    align: 'center'
  });

  slide9.addText(item.subtext, {
    x: x, y: 2.85, w: 2.9, h: 0.3,
    fontSize: 10,
    fontFace: FONTS.BODY,
    color: item.highlight ? COLORS.BLACK_PREMIUM : COLORS.GRAY_400,
    align: 'center'
  });
});

// Tabela de economia
slide9.addTable([
  [
    { text: 'BOLETOS/MÊS', options: { bold: true, fill: COLORS.GOLD_PREMIUM, color: COLORS.BLACK_PREMIUM } },
    { text: '100', options: { fill: '1A1A1A', color: COLORS.WHITE } },
    { text: '300', options: { fill: '1A1A1A', color: COLORS.WHITE } },
    { text: '500', options: { fill: '1A1A1A', color: COLORS.WHITE } },
    { text: '1000', options: { fill: '1A1A1A', color: COLORS.WHITE } }
  ],
  [
    { text: 'ECONOMIA/MÊS', options: { bold: true, fill: COLORS.GOLD_PREMIUM, color: COLORS.BLACK_PREMIUM } },
    { text: 'R$ 410', options: { fill: '1A1A1A', color: COLORS.GOLD_PREMIUM, bold: true } },
    { text: 'R$ 1.230', options: { fill: '1A1A1A', color: COLORS.GOLD_PREMIUM, bold: true } },
    { text: 'R$ 2.050', options: { fill: '1A1A1A', color: COLORS.GOLD_PREMIUM, bold: true } },
    { text: 'R$ 4.100', options: { fill: '1A1A1A', color: COLORS.GOLD_PREMIUM, bold: true } }
  ],
  [
    { text: 'ECONOMIA/ANO', options: { bold: true, fill: COLORS.GOLD_PREMIUM, color: COLORS.BLACK_PREMIUM } },
    { text: 'R$ 4.920', options: { fill: '1A1A1A', color: COLORS.WHITE } },
    { text: 'R$ 14.760', options: { fill: '1A1A1A', color: COLORS.WHITE } },
    { text: 'R$ 24.600', options: { fill: '1A1A1A', color: COLORS.WHITE } },
    { text: 'R$ 49.200', options: { fill: '1A1A1A', color: COLORS.WHITE } }
  ]
], {
  x: 0.8, y: 3.6, w: 8.4, h: 1.5,
  fontSize: 11,
  fontFace: FONTS.BODY,
  border: { pt: 0.5, color: COLORS.GRAY_600 },
  align: 'center',
  valign: 'middle'
});

// ============================================
// SLIDE 10: CAPACITAÇÃO
// ============================================
let slide10 = pptx.addSlide();
slide10.background = { color: COLORS.WHITE };
addHeader(slide10, 'Capacitação', 'Conhecimento que transforma resultados');
addFooter(slide10, 10);

const trainingData = [
  { title: 'Treinamento Comercial', desc: 'Técnicas de vendas para equipes imobiliárias', items: ['Abordagem consultiva', 'Fechamento de contratos', 'Gestão de objeções'] },
  { title: 'Gestão Operacional', desc: 'Processos otimizados para sua imobiliária', items: ['Fluxos automatizados', 'Indicadores de performance', 'Melhores práticas'] },
  { title: 'Metodologia de Vistoria', desc: 'Padronização profissional de vistorias', items: ['Checklist completo', 'Documentação fotográfica', 'Relatórios digitais'] }
];

trainingData.forEach((item, i) => {
  const x = 0.8 + (i * 3.1);

  // Card
  slide10.addShape('rect', {
    x: x, y: 1.7, w: 2.9, h: 3.3,
    fill: { color: COLORS.WHITE },
    line: { color: COLORS.GRAY_400, width: 1 }
  });

  // Header dourado
  slide10.addShape('rect', {
    x: x, y: 1.7, w: 2.9, h: 0.1,
    fill: { color: COLORS.GOLD_PREMIUM }
  });

  // Título
  slide10.addText(item.title, {
    x: x + 0.15, y: 1.95, w: 2.6, h: 0.4,
    fontSize: 13,
    fontFace: FONTS.DISPLAY,
    bold: true,
    color: COLORS.BLACK_PREMIUM
  });

  // Descrição
  slide10.addText(item.desc, {
    x: x + 0.15, y: 2.35, w: 2.6, h: 0.5,
    fontSize: 10,
    fontFace: FONTS.BODY,
    color: COLORS.GRAY_600
  });

  // Items
  item.items.forEach((it, j) => {
    slide10.addText('✓ ' + it, {
      x: x + 0.15, y: 3.0 + (j * 0.4), w: 2.6, h: 0.35,
      fontSize: 10,
      fontFace: FONTS.BODY,
      color: COLORS.BLACK_PREMIUM
    });
  });
});

// ============================================
// SLIDE 11: DIFERENCIAL
// ============================================
let slide11 = pptx.addSlide();
slide11.background = { color: COLORS.WHITE };
addHeader(slide11, 'Nosso Diferencial', 'Parceiro, não fornecedor');
addFooter(slide11, 11);

// Comparativo lado a lado
// Fornecedor
slide11.addShape('rect', {
  x: 0.8, y: 1.7, w: 4, h: 2.8,
  fill: { color: COLORS.GRAY_100 },
  line: { color: COLORS.GRAY_400, width: 1 }
});

slide11.addText('FORNECEDOR COMUM', {
  x: 0.8, y: 1.8, w: 4, h: 0.4,
  fontSize: 14,
  fontFace: FONTS.DISPLAY,
  bold: true,
  color: COLORS.GRAY_600,
  align: 'center'
});

const fornecedorItems = ['Vende e desaparece', 'Suporte robotizado', 'Foco em quantidade', 'Custos ocultos', 'Contratos amarrados'];
fornecedorItems.forEach((item, i) => {
  slide11.addText('✗ ' + item, {
    x: 1.0, y: 2.3 + (i * 0.4), w: 3.6, h: 0.35,
    fontSize: 11,
    fontFace: FONTS.BODY,
    color: COLORS.GRAY_600
  });
});

// Parceiro (L8)
slide11.addShape('rect', {
  x: 5.2, y: 1.7, w: 4, h: 2.8,
  fill: { color: COLORS.BLACK_PREMIUM },
  line: { color: COLORS.GOLD_PREMIUM, width: 2 }
});

slide11.addText('L8 CAPITAL', {
  x: 5.2, y: 1.8, w: 4, h: 0.4,
  fontSize: 14,
  fontFace: FONTS.DISPLAY,
  bold: true,
  color: COLORS.GOLD_PREMIUM,
  align: 'center'
});

const parceiroItems = ['Acompanha seu crescimento', 'Suporte humano dedicado', 'Foco em qualidade', 'Transparência total', 'Liberdade de escolha'];
parceiroItems.forEach((item, i) => {
  slide11.addText('✓ ' + item, {
    x: 5.4, y: 2.3 + (i * 0.4), w: 3.6, h: 0.35,
    fontSize: 11,
    fontFace: FONTS.BODY,
    color: COLORS.WHITE
  });
});

// Quote destacada
slide11.addShape('rect', {
  x: 1.5, y: 4.7, w: 7, h: 0.7,
  fill: { color: COLORS.GOLD_PREMIUM }
});

slide11.addText('"Não queremos clientes. Queremos parceiros que cresçam conosco."', {
  x: 1.5, y: 4.8, w: 7, h: 0.5,
  fontSize: 13,
  fontFace: FONTS.BODY,
  italic: true,
  bold: true,
  color: COLORS.BLACK_PREMIUM,
  align: 'center'
});

// ============================================
// SLIDE 12: COMO FUNCIONA
// ============================================
let slide12 = pptx.addSlide();
slide12.background = { color: COLORS.WHITE };
addHeader(slide12, 'Como Funciona', 'Processo simples em 3 etapas');
addFooter(slide12, 12);

const processData = [
  { step: '01', title: 'CONVERSA', desc: 'Agendamos uma call para\nentender suas necessidades' },
  { step: '02', title: 'DIAGNÓSTICO', desc: 'Analisamos sua operação e\nidentificamos oportunidades' },
  { step: '03', title: 'IMPLEMENTAÇÃO', desc: 'Ativamos as soluções e\nacompanhamos os resultados' }
];

processData.forEach((item, i) => {
  const x = 0.8 + (i * 3.1);

  // Círculo com número
  slide12.addShape('ellipse', {
    x: x + 1.0, y: 1.8, w: 0.8, h: 0.8,
    fill: { color: COLORS.GOLD_PREMIUM }
  });

  slide12.addText(item.step, {
    x: x + 1.0, y: 1.95, w: 0.8, h: 0.5,
    fontSize: 18,
    fontFace: FONTS.DISPLAY,
    bold: true,
    color: COLORS.WHITE,
    align: 'center'
  });

  // Título
  slide12.addText(item.title, {
    x: x, y: 2.7, w: 2.9, h: 0.4,
    fontSize: 14,
    fontFace: FONTS.DISPLAY,
    bold: true,
    color: COLORS.BLACK_PREMIUM,
    align: 'center'
  });

  // Descrição
  slide12.addText(item.desc, {
    x: x, y: 3.1, w: 2.9, h: 0.7,
    fontSize: 11,
    fontFace: FONTS.BODY,
    color: COLORS.GRAY_600,
    align: 'center'
  });

  // Linha conectora
  if (i < 2) {
    slide12.addShape('rect', {
      x: x + 2.7, y: 2.15, w: 0.6, h: 0.02,
      fill: { color: COLORS.GOLD_PREMIUM }
    });
  }
});

// Timeline de resultados
slide12.addText('LINHA DO TEMPO DE RESULTADOS', {
  x: 0.8, y: 4.0, w: 8.4, h: 0.4,
  fontSize: 12,
  fontFace: FONTS.DISPLAY,
  bold: true,
  color: COLORS.BLACK_PREMIUM,
  align: 'center'
});

const timelineResults = [
  { month: 'MÊS 1', result: 'Ativação das soluções' },
  { month: 'MÊS 2', result: 'Primeiras economias' },
  { month: 'MÊS 3', result: 'Resultados consolidados' }
];

timelineResults.forEach((item, i) => {
  const x = 1.5 + (i * 2.7);

  slide12.addShape('rect', {
    x: x, y: 4.5, w: 2.4, h: 0.9,
    fill: { color: i === 2 ? COLORS.GOLD_PREMIUM : COLORS.GRAY_100 },
    line: { color: i === 2 ? COLORS.GOLD_PREMIUM : COLORS.GRAY_400, width: 1 }
  });

  slide12.addText(item.month, {
    x: x, y: 4.55, w: 2.4, h: 0.3,
    fontSize: 10,
    fontFace: FONTS.DISPLAY,
    bold: true,
    color: i === 2 ? COLORS.WHITE : COLORS.BLACK_PREMIUM,
    align: 'center'
  });

  slide12.addText(item.result, {
    x: x, y: 4.9, w: 2.4, h: 0.4,
    fontSize: 10,
    fontFace: FONTS.BODY,
    color: i === 2 ? COLORS.WHITE : COLORS.GRAY_600,
    align: 'center'
  });
});

// ============================================
// SLIDE 13: IDENTIDADE VISUAL
// ============================================
let slide13 = pptx.addSlide();
slide13.background = { color: COLORS.BLACK_PREMIUM };
addHeader(slide13, 'Identidade Visual', 'Nossa marca em detalhes', true);
addFooter(slide13, 13, true);

// Cores
slide13.addText('CORES DA MARCA', {
  x: 0.8, y: 1.7, w: 4, h: 0.4,
  fontSize: 14,
  fontFace: FONTS.DISPLAY,
  bold: true,
  color: COLORS.WHITE
});

const colorsDisplay = [
  { name: 'Preto Premium', hex: '#0A0A0A', color: COLORS.BLACK_PREMIUM, textColor: COLORS.WHITE, border: true },
  { name: 'Branco', hex: '#FFFFFF', color: COLORS.WHITE, textColor: COLORS.BLACK_PREMIUM },
  { name: 'Dourado Premium', hex: '#C9A227', color: COLORS.GOLD_PREMIUM, textColor: COLORS.WHITE }
];

colorsDisplay.forEach((c, i) => {
  const y = 2.2 + (i * 0.9);

  // Swatch
  slide13.addShape('rect', {
    x: 0.8, y: y, w: 0.8, h: 0.7,
    fill: { color: c.color },
    line: { color: c.border ? COLORS.GRAY_600 : c.color, width: 1 }
  });

  // Nome e hex
  slide13.addText(c.name, {
    x: 1.8, y: y, w: 2.5, h: 0.35,
    fontSize: 12,
    fontFace: FONTS.DISPLAY,
    bold: true,
    color: COLORS.WHITE
  });

  slide13.addText(c.hex, {
    x: 1.8, y: y + 0.35, w: 2.5, h: 0.3,
    fontSize: 10,
    fontFace: FONTS.BODY,
    color: COLORS.GRAY_400
  });
});

// Tipografia
slide13.addText('TIPOGRAFIA', {
  x: 5.2, y: 1.7, w: 4, h: 0.4,
  fontSize: 14,
  fontFace: FONTS.DISPLAY,
  bold: true,
  color: COLORS.WHITE
});

slide13.addText('Plus Jakarta Sans', {
  x: 5.2, y: 2.2, w: 4, h: 0.4,
  fontSize: 20,
  fontFace: FONTS.DISPLAY,
  bold: true,
  color: COLORS.GOLD_PREMIUM
});

slide13.addText('Títulos e destaques', {
  x: 5.2, y: 2.6, w: 4, h: 0.3,
  fontSize: 10,
  fontFace: FONTS.BODY,
  color: COLORS.GRAY_400
});

slide13.addText('Inter', {
  x: 5.2, y: 3.1, w: 4, h: 0.4,
  fontSize: 18,
  fontFace: FONTS.BODY,
  color: COLORS.WHITE
});

slide13.addText('Corpo de texto e informações', {
  x: 5.2, y: 3.5, w: 4, h: 0.3,
  fontSize: 10,
  fontFace: FONTS.BODY,
  color: COLORS.GRAY_400
});

// Logo demo
slide13.addText('L8', {
  x: 5.2, y: 4.1, w: 1.5, h: 0.8,
  fontSize: 36,
  fontFace: FONTS.DISPLAY,
  bold: true,
  color: COLORS.GOLD_PREMIUM
});

slide13.addText('CAPITAL', {
  x: 6.7, y: 4.3, w: 2, h: 0.5,
  fontSize: 14,
  fontFace: FONTS.DISPLAY,
  color: COLORS.WHITE,
  charSpacing: 4
});

// ============================================
// SLIDE 14: TOM DE VOZ
// ============================================
let slide14 = pptx.addSlide();
slide14.background = { color: COLORS.WHITE };
addHeader(slide14, 'Tom de Voz', 'Como nos comunicamos');
addFooter(slide14, 14);

const voiceData = [
  { title: 'DIRETO', desc: 'Sem rodeios, vamos ao ponto', example: '"Economize R$ 2.050/mês"' },
  { title: 'CONCRETO', desc: 'Números reais, resultados mensuráveis', example: '"40% de comissão em seguros"' },
  { title: 'HONESTO', desc: 'Transparência total, sem letras miúdas', example: '"Sem taxas ocultas, nunca"' },
  { title: 'PARCEIRO', desc: 'Lado a lado, crescemos juntos', example: '"Seu sucesso é o nosso"' }
];

voiceData.forEach((item, i) => {
  const row = Math.floor(i / 2);
  const col = i % 2;
  const x = 0.8 + (col * 4.5);
  const y = 1.7 + (row * 1.8);

  // Card
  slide14.addShape('rect', {
    x: x, y: y, w: 4.2, h: 1.5,
    fill: { color: COLORS.WHITE },
    line: { color: COLORS.GRAY_400, width: 1 }
  });

  // Barra dourada
  slide14.addShape('rect', {
    x: x, y: y, w: 0.1, h: 1.5,
    fill: { color: COLORS.GOLD_PREMIUM }
  });

  // Título
  slide14.addText(item.title, {
    x: x + 0.3, y: y + 0.1, w: 3.7, h: 0.35,
    fontSize: 14,
    fontFace: FONTS.DISPLAY,
    bold: true,
    color: COLORS.BLACK_PREMIUM
  });

  // Descrição
  slide14.addText(item.desc, {
    x: x + 0.3, y: y + 0.45, w: 3.7, h: 0.35,
    fontSize: 11,
    fontFace: FONTS.BODY,
    color: COLORS.GRAY_600
  });

  // Exemplo
  slide14.addText(item.example, {
    x: x + 0.3, y: y + 0.9, w: 3.7, h: 0.4,
    fontSize: 11,
    fontFace: FONTS.BODY,
    italic: true,
    color: COLORS.GOLD_PREMIUM
  });
});

// ============================================
// SLIDE 15: COMPLIANCE
// ============================================
let slide15 = pptx.addSlide();
slide15.background = { color: COLORS.WHITE };
addHeader(slide15, 'Segurança e Compliance', 'Sua tranquilidade garantida');
addFooter(slide15, 15);

const complianceData = [
  { icon: '🔒', title: 'LGPD', desc: 'Totalmente adequados à Lei Geral de Proteção de Dados' },
  { icon: '🖥️', title: 'SERVIDORES', desc: 'Infraestrutura em nuvem com 99.9% de uptime' },
  { icon: '🔐', title: 'CRIPTOGRAFIA', desc: 'Dados protegidos com criptografia de ponta' },
  { icon: '📋', title: 'POLÍTICAS', desc: 'Termos claros e transparentes' }
];

complianceData.forEach((item, i) => {
  const row = Math.floor(i / 2);
  const col = i % 2;
  const x = 0.8 + (col * 4.5);
  const y = 1.7 + (row * 1.5);

  // Card
  slide15.addShape('rect', {
    x: x, y: y, w: 4.2, h: 1.2,
    fill: { color: COLORS.GRAY_100 },
    line: { color: COLORS.GRAY_400, width: 1 }
  });

  // Título
  slide15.addText(item.title, {
    x: x + 0.2, y: y + 0.15, w: 3.8, h: 0.35,
    fontSize: 13,
    fontFace: FONTS.DISPLAY,
    bold: true,
    color: COLORS.BLACK_PREMIUM
  });

  // Descrição
  slide15.addText(item.desc, {
    x: x + 0.2, y: y + 0.55, w: 3.8, h: 0.5,
    fontSize: 10,
    fontFace: FONTS.BODY,
    color: COLORS.GRAY_600
  });
});

// Garantias
slide15.addText('NOSSAS GARANTIAS', {
  x: 0.8, y: 4.5, w: 8.4, h: 0.35,
  fontSize: 12,
  fontFace: FONTS.DISPLAY,
  bold: true,
  color: COLORS.BLACK_PREMIUM
});

const garantias = ['✓ Sem fidelidade forçada', '✓ Cancelamento sem burocracia', '✓ Suporte humano sempre', '✓ Preços fixos, sem surpresas'];
garantias.forEach((g, i) => {
  slide15.addText(g, {
    x: 0.8 + (i * 2.3), y: 4.9, w: 2.2, h: 0.4,
    fontSize: 10,
    fontFace: FONTS.BODY,
    color: COLORS.GOLD_PREMIUM
  });
});

// ============================================
// SLIDE 16: PRÓXIMOS PASSOS
// ============================================
let slide16 = pptx.addSlide();
slide16.background = { color: COLORS.WHITE };
addHeader(slide16, 'Próximos Passos', 'Comece a fortalecer sua imobiliária');
addFooter(slide16, 16);

const stepsData = [
  { step: '1', title: 'AGENDAR', desc: 'Escolha o melhor\nhorário para conversar' },
  { step: '2', title: 'RECEBER', desc: 'Diagnóstico gratuito\nda sua operação' },
  { step: '3', title: 'DECIDIR', desc: 'Sem pressão, você\nescolhe o que faz sentido' }
];

stepsData.forEach((item, i) => {
  const x = 0.8 + (i * 3.1);

  // Círculo com número
  slide16.addShape('ellipse', {
    x: x + 1.0, y: 1.7, w: 0.9, h: 0.9,
    fill: { color: COLORS.GOLD_PREMIUM }
  });

  slide16.addText(item.step, {
    x: x + 1.0, y: 1.85, w: 0.9, h: 0.6,
    fontSize: 22,
    fontFace: FONTS.DISPLAY,
    bold: true,
    color: COLORS.WHITE,
    align: 'center'
  });

  // Título
  slide16.addText(item.title, {
    x: x, y: 2.7, w: 2.9, h: 0.4,
    fontSize: 16,
    fontFace: FONTS.DISPLAY,
    bold: true,
    color: COLORS.BLACK_PREMIUM,
    align: 'center'
  });

  // Descrição
  slide16.addText(item.desc, {
    x: x, y: 3.1, w: 2.9, h: 0.7,
    fontSize: 12,
    fontFace: FONTS.BODY,
    color: COLORS.GRAY_600,
    align: 'center'
  });

  // Seta
  if (i < 2) {
    slide16.addText('→', {
      x: x + 2.7, y: 2.0, w: 0.5, h: 0.5,
      fontSize: 24,
      color: COLORS.GOLD_PREMIUM
    });
  }
});

// Canais de contato
slide16.addShape('rect', {
  x: 0.8, y: 4.0, w: 8.4, h: 1.4,
  fill: { color: COLORS.GRAY_100 },
  line: { color: COLORS.GRAY_400, width: 1 }
});

slide16.addText('FALE CONOSCO', {
  x: 0.8, y: 4.1, w: 8.4, h: 0.35,
  fontSize: 12,
  fontFace: FONTS.DISPLAY,
  bold: true,
  color: COLORS.BLACK_PREMIUM,
  align: 'center'
});

slide16.addText('📱 WhatsApp: (XX) XXXXX-XXXX     |     📧 contato@l8capital.com.br     |     🌐 l8capital.com.br', {
  x: 0.8, y: 4.5, w: 8.4, h: 0.4,
  fontSize: 12,
  fontFace: FONTS.BODY,
  color: COLORS.GRAY_600,
  align: 'center'
});

slide16.addText('[QR Code para WhatsApp]', {
  x: 4.0, y: 4.9, w: 2, h: 0.4,
  fontSize: 10,
  fontFace: FONTS.BODY,
  color: COLORS.GRAY_400,
  align: 'center'
});

// ============================================
// SLIDE 17: ENCERRAMENTO
// ============================================
let slide17 = pptx.addSlide();
slide17.background = { color: COLORS.BLACK_PREMIUM };

// Logo
slide17.addText('L8', {
  x: 0, y: 1.6, w: '100%', h: 1.0,
  fontSize: 80,
  fontFace: FONTS.DISPLAY,
  bold: true,
  color: COLORS.GOLD_PREMIUM,
  align: 'center'
});

slide17.addText('C A P I T A L', {
  x: 0, y: 2.5, w: '100%', h: 0.5,
  fontSize: 20,
  fontFace: FONTS.DISPLAY,
  color: COLORS.GOLD_PREMIUM,
  align: 'center',
  charSpacing: 6
});

// Linha decorativa
slide17.addShape('rect', {
  x: 3.5, y: 3.1, w: 3, h: 0.02,
  fill: { color: COLORS.GOLD_PREMIUM }
});

// Tagline
slide17.addText('Sua imobiliária mais forte.', {
  x: 0, y: 3.3, w: '100%', h: 0.4,
  fontSize: 18,
  fontFace: FONTS.BODY,
  italic: true,
  color: COLORS.WHITE,
  align: 'center'
});

// Contatos
slide17.addText('contato@l8capital.com.br  |  l8capital.com.br', {
  x: 0, y: 4.2, w: '100%', h: 0.3,
  fontSize: 12,
  fontFace: FONTS.BODY,
  color: COLORS.GRAY_400,
  align: 'center'
});

// Copyright
slide17.addText('© 2026 L8 Capital. Todos os direitos reservados.', {
  x: 0, y: 5.1, w: '100%', h: 0.3,
  fontSize: 9,
  fontFace: FONTS.BODY,
  color: COLORS.GRAY_600,
  align: 'center'
});

// ============================================
// SALVAR APRESENTAÇÃO
// ============================================
const outputPath = 'L8_Capital_Apresentacao.pptx';
pptx.writeFile({ fileName: outputPath })
  .then(fileName => {
    console.log('✅ Apresentação criada com sucesso!');
    console.log(`📁 Arquivo: ${fileName}`);
    console.log('\n📌 A apresentação contém 17 slides:');
    console.log('   1. Capa');
    console.log('   2. Nossa História');
    console.log('   3. Nosso Propósito');
    console.log('   4. Quem Somos (Métricas)');
    console.log('   5. O Problema');
    console.log('   6. Proposta de Valor');
    console.log('   7. Portfólio de Soluções');
    console.log('   8. Seguros');
    console.log('   9. Financeiro');
    console.log('   10. Capacitação');
    console.log('   11. Diferencial');
    console.log('   12. Como Funciona');
    console.log('   13. Identidade Visual');
    console.log('   14. Tom de Voz');
    console.log('   15. Compliance');
    console.log('   16. Próximos Passos');
    console.log('   17. Encerramento');
  })
  .catch(err => {
    console.error('❌ Erro ao criar apresentação:', err);
  });
