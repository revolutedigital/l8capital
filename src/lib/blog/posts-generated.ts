// Posts gerados programaticamente - Sprint 2
// Este arquivo contém posts criados pelo sistema de geração programática

import type { BlogPost } from './posts'
import { generatePost, toBlogPost } from './generate-posts'
import {
  rentabilizacaoFloatTemplate,
  fundoReservaTemplate,
  treinamentoComercialTemplate,
  treinamentoOperacionalTemplate,
  vistoriaTemplate,
  seguroFiancaTemplate,
  seguroIncendioTemplate,
  capitalizacaoTemplate,
  allServiceTemplates,
} from './service-templates'
import { brazil, saoPauloCity, allZonesSP, allNeighborhoodsSP } from './location-data'

// Gerar posts nacionais (Sprint 2)
const nationalPosts: BlogPost[] = [
  rentabilizacaoFloatTemplate,
  fundoReservaTemplate,
  treinamentoComercialTemplate,
  treinamentoOperacionalTemplate,
  vistoriaTemplate,
].map((template) => toBlogPost(generatePost(template, brazil)))

// Gerar posts de São Paulo Capital (Sprint 3)
const spCapitalPosts: BlogPost[] = [
  seguroFiancaTemplate,
  seguroIncendioTemplate,
  capitalizacaoTemplate,
  rentabilizacaoFloatTemplate,
  fundoReservaTemplate,
  treinamentoComercialTemplate,
  treinamentoOperacionalTemplate,
  vistoriaTemplate,
].map((template) => toBlogPost(generatePost(template, saoPauloCity)))

// Gerar posts de Zonas de SP (Sprint 4-5)
// 8 serviços × 5 zonas = 40 posts
const zonesPosts: BlogPost[] = []
for (const zone of allZonesSP) {
  for (const template of allServiceTemplates) {
    zonesPosts.push(toBlogPost(generatePost(template, zone)))
  }
}

// Gerar posts de Bairros de SP (Sprint 6+)
// 8 serviços × 15 bairros = 120 posts
const neighborhoodsPosts: BlogPost[] = []
for (const neighborhood of allNeighborhoodsSP) {
  for (const template of allServiceTemplates) {
    neighborhoodsPosts.push(toBlogPost(generatePost(template, neighborhood)))
  }
}

export const generatedPosts: BlogPost[] = [
  ...nationalPosts, // 5 posts nacionais (Sprint 2)
  ...spCapitalPosts, // 8 posts de SP Capital (Sprint 3)
  ...zonesPosts, // 40 posts de zonas (Sprint 4-5): 8 templates × 5 zonas
  ...neighborhoodsPosts, // 120 posts de bairros (Sprint 6+): 8 templates × 15 bairros
]

export default generatedPosts
