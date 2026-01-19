# Sistema de Blog SEO/LMO Programático - L8 Capital

Sistema de geração programática de conteúdo para SEO regional baseado nas melhores práticas de 2026.

## 📋 Documentação Completa

Ver [PLANO-SEO-LMO-2026.md](./PLANO-SEO-LMO-2026.md) para estratégia completa, cronograma e detalhes técnicos.

---

## 🚀 Quick Start

### Como Testar o Gerador

```bash
# Rodar teste completo
npx tsx src/lib/blog/test-generator.ts
```

Isso irá:
- Gerar posts de exemplo (Pinheiros, Zona Sul, SP Capital)
- Validar qualidade (score, word count, unique content)
- Mostrar estatísticas e preview

---

## 📦 Arquivos Principais

### Dados de Localização
**`src/lib/blog/location-data.ts`**
- 15+ localizações (SP + zonas + bairros)
- Metadados: população, aluguel médio, nº imobiliárias
- Coordenadas geográficas
- Funções utilitárias

### Templates de Serviço
**`src/lib/blog/service-templates.ts`**
- 3 templates: Seguro Fiança, Seguro Incêndio, Capitalização
- Conteúdo dinâmico por localização
- 800-900 palavras por post

### Gerador Programático
**`src/lib/blog/generate-posts.ts`**
- Combina templates + locations = posts únicos
- Validação de qualidade
- Batch generation
- Funções helper para cada sprint

### Schemas Regionais
**`src/lib/blog/regional-schemas.ts`**
- LocalBusiness schema com geo-coordinates
- Article schema com location context
- Breadcrumb schema hierárquico
- FAQ schema auto-extraído

---

## 🎯 Como Gerar Posts

### Gerar Posts de Teste

```typescript
import {
  generatePost,
  generateSaoPauloCapitalPosts,
  generateZonesPosts
} from '@/lib/blog/generate-posts'
import { pinheiros } from '@/lib/blog/location-data'
import { seguroFiancaTemplate } from '@/lib/blog/service-templates'

// Gerar 1 post específico
const post = generatePost(seguroFiancaTemplate, pinheiros)

// Gerar posts de SP Capital (9 posts)
const spPosts = generateSaoPauloCapitalPosts()

// Gerar posts de zonas (45 posts)
const zonePosts = generateZonesPosts()
```

### Validar Qualidade

```typescript
import { validatePostQuality } from '@/lib/blog/generate-posts'

const qualityCheck = validatePostQuality(post)

console.log(qualityCheck.score) // 0-100
console.log(qualityCheck.passed) // true/false
console.log(qualityCheck.issues) // Array de problemas
console.log(qualityCheck.warnings) // Array de avisos
```

### Gerar Schemas

```typescript
import { generateAllPostSchemas } from '@/lib/blog/regional-schemas'

const schemas = generateAllPostSchemas(post, pinheiros)

// schemas.localBusiness - LocalBusiness schema
// schemas.article - Article schema
// schemas.breadcrumb - BreadcrumbList schema
// schemas.faq - FAQPage schema (se houver)
```

---

## 📊 Capacidade do Sistema

**Posts que podem ser gerados:**

| Tipo | Quantidade | Exemplo |
|------|------------|---------|
| Nacional | 9 | seguro-fianca-brasil |
| SP Capital | 9 | seguro-fianca-sao-paulo |
| Zonas | 45 | seguro-fianca-zona-sul |
| Bairros | 135 | seguro-fianca-pinheiros |
| **Total** | **198** | |

**Serviços disponíveis (3):**
1. Seguro Fiança
2. Seguro Incêndio
3. Capitalização

**Localizações SP (19):**
- 1 cidade (São Paulo)
- 5 zonas (Sul, Oeste, Central, Leste, Norte)
- 15 bairros premium

---

## ✅ Checklist de Qualidade

Para cada post gerado:

- [ ] Mínimo 800 palavras
- [ ] 20%+ conteúdo único (vs template base)
- [ ] Dados regionais específicos (preços, insights)
- [ ] Title tag < 60 caracteres
- [ ] Meta description 150-160 caracteres
- [ ] 3-5 internal links
- [ ] 1-2 external links autoritários
- [ ] Schema markup validado
- [ ] Mobile-friendly

---

## 🎓 SEO Compliance 2026

✅ **E-E-A-T:** Dados locais reais, expertise demonstrável
✅ **Hyper-Local:** Conteúdo específico por bairro
✅ **AI-Optimized:** Estruturado para Google AI Overviews
✅ **Schema Markup:** LocalBusiness + Article + Breadcrumb + FAQ
✅ **Progressive Publishing:** 3-4 posts/semana max

---

## 📅 Sprints Planejados

### ✅ Sprint 1 (Concluído)
- [x] Sistema de location data
- [x] Templates de serviço
- [x] Gerador programático
- [x] Schemas regionais
- [x] Sitemap dinâmico

### Sprint 2 (Próximo)
- [ ] Gerar 5 posts nacionais (serviços faltantes)
- [ ] Atualizar 4 posts existentes
- [ ] Configurar Google Analytics events

### Sprint 3
- [ ] Gerar 9 posts de SP Capital

### Sprint 4-5
- [ ] Gerar 45 posts de zonas

### Sprint 6+
- [ ] Gerar 135 posts de bairros

---

## 🔧 Integração com Blog Existente

Os posts gerados são compatíveis com o sistema atual (`src/lib/blog/posts.ts`):

```typescript
import { toBlogPost, toBlogPosts } from '@/lib/blog/generate-posts'

// Converter para BlogPost (remove metadata)
const blogPost = toBlogPost(generatedPost)

// Integrar com sistema existente
const allPosts = [...manualPosts, ...toBlogPosts(generatedPosts)]
```

---

## 📈 Estatísticas e Relatórios

```typescript
import { getGenerationStats, generateReport } from '@/lib/blog/generate-posts'

const stats = getGenerationStats(posts)

console.log(stats.totalPosts)
console.log(stats.averageWordCount)
console.log(stats.averageUniquePercentage)
console.log(stats.byService)
console.log(stats.byLocation)

// Relatório em texto
const report = generateReport(posts)
console.log(report)
```

---

## 🚨 Avisos Importantes

### Anti-Spam (Google Penalties)

❌ **NÃO FAZER:**
- Publicar 100 posts no mesmo dia
- Posts com < 300 palavras
- Conteúdo 100% duplicado
- Keyword stuffing (densidade > 3%)

✅ **FAZER:**
- Progressive publishing (3-4 posts/semana)
- Mínimo 800 palavras
- 20%+ conteúdo único
- Dados regionais reais

### Qualidade > Quantidade

- Revisar cada post gerado manualmente
- Adicionar insights únicos
- Validar dados regionais
- Verificar factualidade

---

## 🔗 Links Úteis

- **Plano Completo:** [PLANO-SEO-LMO-2026.md](./PLANO-SEO-LMO-2026.md)
- **Produção:** https://l8capital-production.up.railway.app
- **GitHub:** https://github.com/revolutedigital/l8capital

---

## 📞 Suporte

Para dúvidas ou problemas:
1. Revisar [PLANO-SEO-LMO-2026.md](./PLANO-SEO-LMO-2026.md)
2. Rodar `npx tsx src/lib/blog/test-generator.ts`
3. Verificar logs de build: `npm run build`

---

**Última atualização:** Janeiro 2026
**Status:** ✅ Sprint 1 Concluído - Sistema Pronto para Produção
