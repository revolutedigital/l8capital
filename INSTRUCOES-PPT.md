# Instruções para Criar a Apresentação PowerPoint

## Opção 1: Usar Node.js (Recomendado)

Como seu projeto já usa Node.js, esta é a forma mais fácil.

### Executar o Script

Abra o **Prompt de Comando (CMD)** ou **Terminal do VS Code** e execute:

```bash
cd "c:\Users\David Sansilva\Documents\Servidor Sites\l8capital"
npm install pptxgenjs
node scripts/create-presentation.js
```

O arquivo `L8_Capital_Apresentacao.pptx` será gerado na pasta raiz do projeto.

---

## Opção 2: Usar o Script Python

### Pré-requisitos
1. Instale o Python: https://www.python.org/downloads/
2. **IMPORTANTE:** Durante a instalação, marque a opção "Add Python to PATH"
3. Reinicie o computador após a instalação

### Executar o Script
```bash
cd "c:\Users\David Sansilva\Documents\Servidor Sites\l8capital"
pip install python-pptx
python scripts/create_presentation.py
```

---

## Opção 3: Criar Manualmente no PowerPoint

### Configurações do Documento
- **Formato:** Widescreen 16:9
- **Resolução:** 1920x1080px

### Cores da Marca (usar em todo o documento)

| Nome | Código Hex | RGB | Uso |
|------|------------|-----|-----|
| **Preto Premium** | #0A0A0A | 10, 10, 10 | Fundos escuros, textos principais |
| **Branco** | #FFFFFF | 255, 255, 255 | Fundos claros, textos em fundo escuro |
| **Dourado Premium** | #C9A227 | 201, 162, 39 | CTAs, destaques, elementos premium |
| **Cinza 600** | #5C5C56 | 92, 92, 86 | Textos secundários |
| **Cinza 400** | #A8A8A0 | 168, 168, 160 | Textos terciários, números de slide |
| **Cinza 100** | #F5F5F3 | 245, 245, 243 | Backgrounds de cards |

### Fontes

| Elemento | Fonte | Peso | Tamanho |
|----------|-------|------|---------|
| Títulos principais | Plus Jakarta Sans | Bold (700) | 44pt |
| Subtítulos | Inter | Regular | 20pt |
| Corpo | Inter | Regular | 14-16pt |
| Destaques | Plus Jakarta Sans | ExtraBold (800) | Variável |

**Nota:** Se Plus Jakarta Sans não estiver disponível, use Segoe UI ou Arial.

---

## Estrutura dos 17 Slides

### Slide 1: CAPA
- Fundo: Preto Premium (#0A0A0A)
- Logo "L8" centralizado em Dourado (#C9A227), 120pt
- "C A P I T A L" abaixo em Dourado, 32pt
- Linha decorativa dourada (2px)
- Tagline "Sua imobiliária mais forte." em Branco, itálico, 24pt
- Rodapé: "Apresentação Institucional • Janeiro 2026" em Cinza 400

### Slide 2: NOSSA HISTÓRIA
- Fundo: Branco
- Header: Barra dourada no topo (0.15")
- Título: "Nossa História" em Preto Premium, 44pt
- Subtítulo: "Por que a L8 existe?" em Cinza 600, 20pt
- Quote box com fundo Cinza 100
- Timeline com 3 boxes: 2000-2020 → 2021 → 2022+

### Slide 3: NOSSO PROPÓSITO
- Fundo: Branco
- Diagrama Golden Circle (3 círculos concêntricos)
- Centro: "POR QUÊ?" em fundo Dourado
- Quote de crença em fundo Preto Premium

### Slide 4: QUEM SOMOS
- Fundo: Preto Premium
- 3 cards com métricas: "24 ANOS", "100% TECNOLOGIA", "R$ 2.050 ECONOMIA"
- Cards com borda dourada, números em dourado

### Slide 5: O PROBLEMA
- Fundo: Branco
- 4 quotes de dores das imobiliárias
- Tabela com sintomas/causas/impactos

### Slide 6: PROPOSTA DE VALOR
- Fundo: Branco
- 3 pilares: AUMENTAR RECEITA (dourado), REDUZIR CUSTOS (preto), ELIMINAR OPERACIONAL (preto)
- Setas de + entre eles
- Resultado final: "IMOBILIÁRIA MAIS FORTE" em fundo dourado

### Slide 7: PORTFÓLIO
- Fundo: Branco
- 3 categorias: SEGUROS, FINANCEIRO, CAPACITAÇÃO
- Cards com lista de produtos

### Slide 8: SEGUROS
- Fundo: Branco
- Tabela de produtos
- Comparativo de ganhos: Tradicional vs L8

### Slide 9: FINANCEIRO
- Fundo: Preto Premium
- 3 boxes: MERCADO (R$ 6,00) → L8 (R$ 1,90) → ECONOMIA (R$ 4,10)
- Tabela de economia por quantidade de boletos

### Slide 10: CAPACITAÇÃO
- Fundo: Branco
- 3 cards horizontais: Treinamento Comercial, Operacional, Vistoria

### Slide 11: DIFERENCIAL
- Fundo: Branco
- Comparativo lado a lado: FORNECEDOR vs PARCEIRO
- Quote destacada em fundo dourado

### Slide 12: COMO FUNCIONA
- Fundo: Branco
- 3 etapas: CONVERSA → DIAGNÓSTICO → IMPLEMENTAÇÃO
- Timeline de resultados (Mês 1, 2, 3)

### Slide 13: IDENTIDADE VISUAL
- Fundo: Preto Premium
- Swatches de cores (3 principais)
- Exemplos de tipografia

### Slide 14: TOM DE VOZ
- Fundo: Branco
- 4 princípios: DIRETO, CONCRETO, HONESTO, PARCEIRO
- Frases de marca

### Slide 15: COMPLIANCE
- Fundo: Branco
- 4 cards: LGPD, SERVIDORES, CRIPTOGRAFIA, POLÍTICA
- Lista de garantias

### Slide 16: PRÓXIMOS PASSOS
- Fundo: Branco
- 3 passos: AGENDAR → RECEBER → DECIDIR
- Canais de contato
- Placeholder para QR Code

### Slide 17: ENCERRAMENTO
- Fundo: Preto Premium
- Logo "L8 CAPITAL" centralizado em Dourado
- Tagline em Branco
- Contatos
- Copyright

---

## Assets Necessários

1. **Logo L8 Capital** (disponível em `/public/images/logos/`)
   - l8-logo_transp_preto.webp (fundos claros)
   - l8-logo_transp_branco.webp (fundos escuros)

2. **QR Code para WhatsApp** (gerar em qr-code-generator.com)

3. **Fontes** (baixar se necessário)
   - Plus Jakarta Sans: https://fonts.google.com/specimen/Plus+Jakarta+Sans
   - Inter: https://fonts.google.com/specimen/Inter

---

## Dicas de Design

1. **Consistência:** Use sempre as mesmas cores e fontes
2. **Espaçamento:** Mínimo 0.8" de margem nas laterais
3. **Hierarquia:** Títulos sempre maiores que subtítulos
4. **Contraste:** Texto claro em fundo escuro e vice-versa
5. **Animações:** Use apenas fade in sutil (0.5s)

---

## Checklist Final

- [ ] Todas as cores estão corretas
- [ ] Fontes aplicadas consistentemente
- [ ] Logo em alta resolução
- [ ] QR Code funcional
- [ ] Números de slide no rodapé
- [ ] Exportar também em PDF
