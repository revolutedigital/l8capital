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
} from './service-templates'
import { brazil } from './location-data'

// Gerar posts nacionais (Sprint 2)
const nationalPosts: BlogPost[] = [
  rentabilizacaoFloatTemplate,
  fundoReservaTemplate,
  treinamentoComercialTemplate,
  treinamentoOperacionalTemplate,
  vistoriaTemplate,
].map((template) => toBlogPost(generatePost(template, brazil)))

export const generatedPosts: BlogPost[] = [
  ...nationalPosts,
  // Futuros posts de SP Capital virão aqui (Sprint 3)
  // Futuros posts de zonas virão aqui (Sprint 4-5)
  // Futuros posts de bairros virão aqui (Sprint 6+)
]

export default generatedPosts
