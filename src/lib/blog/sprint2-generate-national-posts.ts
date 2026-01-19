// Sprint 2: Geração dos 5 posts nacionais faltantes
// Execute: npx tsx src/lib/blog/sprint2-generate-national-posts.ts

import { generatePost, toBlogPost } from './generate-posts'
import type { BlogPost } from './posts'
import {
  rentabilizacaoFloatTemplate,
  fundoReservaTemplate,
  treinamentoComercialTemplate,
  treinamentoOperacionalTemplate,
  vistoriaTemplate,
} from './service-templates'
import { brazil } from './location-data'

console.log('='.repeat(80))
console.log('SPRINT 2: GERAÇÃO DE POSTS NACIONAIS')
console.log('='.repeat(80))
console.log()

// Gerar os 5 posts nacionais
const templates = [
  rentabilizacaoFloatTemplate,
  fundoReservaTemplate,
  treinamentoComercialTemplate,
  treinamentoOperacionalTemplate,
  vistoriaTemplate,
]

const posts: BlogPost[] = []

console.log('📝 Gerando 5 posts nacionais...\n')

for (const template of templates) {
  console.log(`Gerando: ${template.title}...`)

  const generatedPost = generatePost(template, brazil)
  const blogPost = toBlogPost(generatedPost)

  posts.push(blogPost)

  console.log(`✅ ${blogPost.slug}`)
  console.log(`   Palavras: ${generatedPost.metadata?.wordCount}`)
  console.log(`   Tempo leitura: ${blogPost.readingTime} min`)
  console.log()
}

console.log('='.repeat(80))
console.log('✅ POSTS GERADOS COM SUCESSO!')
console.log('='.repeat(80))
console.log()
console.log(`Total de posts: ${posts.length}`)
console.log()
console.log('Posts criados:')
posts.forEach((post, idx) => {
  console.log(`${idx + 1}. ${post.title}`)
  console.log(`   Slug: ${post.slug}`)
  console.log(`   Categoria: ${post.category}`)
  console.log()
})

console.log('='.repeat(80))
console.log('📋 PRÓXIMO PASSO:')
console.log('Adicionar estes posts ao arquivo src/lib/blog/posts.ts')
console.log('='.repeat(80))
console.log()

// Export posts para uso posterior
export const sprint2NationalPosts = posts
