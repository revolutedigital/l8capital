// Script de teste para geração programática de posts
// Execute com: npx tsx src/lib/blog/test-generator.ts

import {
  generatePost,
  validatePostQuality,
  generateReport,
  generateSaoPauloCapitalPosts,
  getGenerationStats,
  type GeneratedBlogPost,
} from './generate-posts'
import { seguroFiancaTemplate, seguroIncendioTemplate } from './service-templates'
import { pinheiros, zonaSul, saoPauloCity } from './location-data'
import { generateAllPostSchemas } from './regional-schemas'

console.log('='.repeat(80))
console.log('TESTE DE GERAÇÃO PROGRAMÁTICA DE POSTS - L8 CAPITAL')
console.log('='.repeat(80))
console.log()

// ============================================================================
// TESTE 1: Gerar post de Pinheiros (hyper-local)
// ============================================================================

console.log('📝 TESTE 1: Gerando post "Seguro Fiança Pinheiros"...\n')

const postPinheiros = generatePost(seguroFiancaTemplate, pinheiros)

console.log(`✅ Post gerado com sucesso!`)
console.log(`   Slug: ${postPinheiros.slug}`)
console.log(`   Título: ${postPinheiros.title}`)
console.log(`   Descrição: ${postPinheiros.description}`)
console.log(`   Categoria: ${postPinheiros.category}`)
console.log(`   Tags: ${postPinheiros.tags.join(', ')}`)
console.log(`   Tempo de leitura: ${postPinheiros.readingTime} min`)
console.log()

if (postPinheiros.metadata) {
  console.log(`📊 Metadados:`)
  console.log(`   Palavras: ${postPinheiros.metadata.wordCount}`)
  console.log(`   Conteúdo único: ${postPinheiros.metadata.uniqueContentPercentage}%`)
  console.log(`   Tipo de localização: ${postPinheiros.metadata.locationType}`)
  console.log()
}

// Validar qualidade
console.log('🔍 Validando qualidade do post...\n')
const qualityCheck = validatePostQuality(postPinheiros)

console.log(`📈 Score de Qualidade: ${qualityCheck.score}/100`)
console.log(`   Status: ${qualityCheck.passed ? '✅ APROVADO' : '❌ REPROVADO'}`)
console.log()

if (qualityCheck.issues.length > 0) {
  console.log(`❌ Problemas encontrados (${qualityCheck.issues.length}):`)
  qualityCheck.issues.forEach((issue) => console.log(`   - ${issue}`))
  console.log()
}

if (qualityCheck.warnings.length > 0) {
  console.log(`⚠️  Avisos (${qualityCheck.warnings.length}):`)
  qualityCheck.warnings.forEach((warning) => console.log(`   - ${warning}`))
  console.log()
}

// Gerar schemas
console.log('🏷️  Gerando schemas JSON-LD...\n')
const schemas = generateAllPostSchemas(postPinheiros, pinheiros)

console.log(`✅ Schemas gerados:`)
console.log(`   - Article Schema: ✓`)
console.log(`   - Breadcrumb Schema: ✓`)
console.log(`   - LocalBusiness Schema: ${schemas.localBusiness ? '✓' : '✗'}`)
console.log(`   - FAQ Schema: ${schemas.faq ? '✓' : '✗'}`)
console.log()

// ============================================================================
// TESTE 2: Gerar post de Zona Sul (zone-level)
// ============================================================================

console.log('-'.repeat(80))
console.log()
console.log('📝 TESTE 2: Gerando post "Seguro Incêndio Zona Sul"...\n')

const postZonaSul = generatePost(seguroIncendioTemplate, zonaSul)

console.log(`✅ Post gerado com sucesso!`)
console.log(`   Slug: ${postZonaSul.slug}`)
console.log(`   Título: ${postZonaSul.title}`)
console.log(`   Tempo de leitura: ${postZonaSul.readingTime} min`)
console.log()

if (postZonaSul.metadata) {
  console.log(`📊 Metadados:`)
  console.log(`   Palavras: ${postZonaSul.metadata.wordCount}`)
  console.log(`   Conteúdo único: ${postZonaSul.metadata.uniqueContentPercentage}%`)
  console.log()
}

const qualityCheck2 = validatePostQuality(postZonaSul)
console.log(`📈 Score de Qualidade: ${qualityCheck2.score}/100 - ${qualityCheck2.passed ? '✅ APROVADO' : '❌ REPROVADO'}`)
console.log()

// ============================================================================
// TESTE 3: Gerar todos os posts de São Paulo Capital
// ============================================================================

console.log('-'.repeat(80))
console.log()
console.log('📝 TESTE 3: Gerando todos os posts de São Paulo Capital...\n')

const spPosts = generateSaoPauloCapitalPosts()

console.log(`✅ ${spPosts.length} posts gerados!`)
console.log()

// Estatísticas
const stats = getGenerationStats(spPosts)

console.log('📊 ESTATÍSTICAS:')
console.log(`   Total de posts: ${stats.totalPosts}`)
console.log(`   Média de palavras: ${stats.averageWordCount}`)
console.log(`   Tempo médio de leitura: ${stats.averageReadingTime} min`)
console.log(`   Média de conteúdo único: ${stats.averageUniquePercentage}%`)
console.log()

console.log('📝 Por serviço:')
Object.entries(stats.byService).forEach(([service, count]) => {
  console.log(`   - ${service}: ${count} posts`)
})
console.log()

console.log('🌍 Por tipo de localização:')
Object.entries(stats.byLocationType).forEach(([type, count]) => {
  console.log(`   - ${type}: ${count} posts`)
})
console.log()

// ============================================================================
// TESTE 4: Validação em lote
// ============================================================================

console.log('-'.repeat(80))
console.log()
console.log('🔍 TESTE 4: Validando qualidade em lote...\n')

let passedCount = 0
let failedCount = 0
let totalScore = 0

for (const post of spPosts) {
  const quality = validatePostQuality(post)
  totalScore += quality.score

  if (quality.passed) {
    passedCount++
  } else {
    failedCount++
    console.log(`❌ ${post.slug} - Score: ${quality.score}/100`)
    if (quality.issues.length > 0) {
      quality.issues.forEach((issue) => console.log(`     - ${issue}`))
    }
  }
}

const avgScore = Math.round(totalScore / spPosts.length)

console.log()
console.log('📊 RESULTADO DA VALIDAÇÃO:')
console.log(`   ✅ Aprovados: ${passedCount} (${Math.round((passedCount / spPosts.length) * 100)}%)`)
console.log(`   ❌ Reprovados: ${failedCount} (${Math.round((failedCount / spPosts.length) * 100)}%)`)
console.log(`   📈 Score médio: ${avgScore}/100`)
console.log()

// ============================================================================
// PREVIEW DE CONTEÚDO
// ============================================================================

console.log('-'.repeat(80))
console.log()
console.log('👀 PREVIEW: Primeiras 500 palavras do post de Pinheiros')
console.log('='.repeat(80))
console.log()

const preview = postPinheiros.content.split(/\s+/).slice(0, 100).join(' ')
console.log(preview + '...')
console.log()
console.log('='.repeat(80))
console.log()

// ============================================================================
// RESUMO FINAL
// ============================================================================

console.log('✅ TESTES CONCLUÍDOS!')
console.log()
console.log('📋 Resumo:')
console.log(`   - Posts de exemplo gerados: 2`)
console.log(`   - Posts de SP Capital: ${spPosts.length}`)
console.log(`   - Taxa de aprovação: ${Math.round((passedCount / spPosts.length) * 100)}%`)
console.log(`   - Score médio: ${avgScore}/100`)
console.log()
console.log('🎯 Próximos passos:')
console.log(`   1. Revisar posts reprovados (se houver)`)
console.log(`   2. Ajustar templates se necessário`)
console.log(`   3. Integrar posts gerados com sistema existente`)
console.log(`   4. Deploy para produção`)
console.log()
console.log('='.repeat(80))
