// Script para gerar cronograma de publicação progressiva
// Execute: npx tsx src/lib/blog/generate-publishing-schedule.ts

import { getAllPostsIncludingUnpublished } from './posts'
import { generatePublishingSchedule, getPublishingStats, PUBLISHING_CONFIG } from './publishing-schedule'

console.log('=' .repeat(80))
console.log('CRONOGRAMA DE PUBLICAÇÃO PROGRESSIVA - L8 CAPITAL BLOG SEO/LMO')
console.log('='.repeat(80))
console.log()

const allPosts = getAllPostsIncludingUnpublished()
const stats = getPublishingStats(allPosts)

console.log('📊 ESTATÍSTICAS GERAIS')
console.log('-'.repeat(80))
console.log(`Total de posts: ${stats.total}`)
console.log(`Posts publicados: ${stats.published}`)
console.log(`Posts agendados: ${stats.scheduled}`)
console.log(`Próxima publicação: ${stats.nextPublishDate ? stats.nextPublishDate.toISOString().split('T')[0] : 'N/A'}`)
console.log()

console.log('⚙️  CONFIGURAÇÃO')
console.log('-'.repeat(80))
console.log(`Progressive Publishing: ${PUBLISHING_CONFIG.enabled ? 'ATIVADO ✅' : 'DESATIVADO ❌'}`)
console.log(`Data de início: ${PUBLISHING_CONFIG.startDate}`)
console.log(`Posts por semana: ${PUBLISHING_CONFIG.postsPerWeek}`)
console.log()

const schedule = generatePublishingSchedule(allPosts)

console.log('📅 CRONOGRAMA COMPLETO (50 Semanas)')
console.log('-'.repeat(80))
console.log()

let totalWeeks = 0
for (const week of schedule) {
  totalWeeks++
  const tierLabel =
    week.week <= 2 ? '🔴 TIER 1' :
    week.week <= 4 ? '🟠 TIER 2' :
    week.week <= 18 ? '🟡 TIER 3' :
    week.week <= 28 ? '🟢 TIER 4' :
    '🔵 TIER 5'

  console.log(`Semana ${week.week} (${week.date}) ${tierLabel}`)
  console.log(`  Posts: ${week.posts.length}`)

  // Agrupar por tipo
  const byType: Record<string, number> = {}
  for (const post of week.posts) {
    byType[post.type] = (byType[post.type] || 0) + 1
  }

  for (const [type, count] of Object.entries(byType)) {
    const typeLabel =
      type === 'country' ? '🌎 Nacional' :
      type === 'city' ? '🏙️  SP Capital' :
      type === 'zone' ? '📍 Zona' :
      '🏘️  Bairro'
    console.log(`  - ${typeLabel}: ${count} posts`)
  }

  // Mostrar alguns exemplos
  if (week.posts.length <= 4) {
    week.posts.forEach((post, idx) => {
      console.log(`    ${idx + 1}. ${post.title.substring(0, 50)}...`)
    })
  }
  console.log()
}

console.log('='.repeat(80))
console.log(`✅ CRONOGRAMA COMPLETO: ${totalWeeks} semanas (~${Math.ceil(totalWeeks / 4)} meses)`)
console.log('='.repeat(80))
console.log()

console.log('📋 PRÓXIMOS PASSOS')
console.log('-'.repeat(80))
console.log('1. Revisar cronograma acima')
console.log('2. Configurar PUBLISHING_CONFIG.enabled = true em production')
console.log('3. Configurar PUBLISHING_CONFIG.enabled = false em development (ver todos os posts)')
console.log('4. Monitorar Google Search Console para indexação')
console.log('5. Ajustar velocidade baseado em métricas (pode diminuir para 3 posts/semana)')
console.log()

console.log('⚠️  AVISOS IMPORTANTES')
console.log('-'.repeat(80))
console.log('❌ NÃO publicar todos os posts de uma vez (Google penalty)')
console.log('❌ NÃO acelerar para mais de 5 posts/semana (arriscado)')
console.log('✅ Monitorar indexação antes de acelerar')
console.log('✅ Progressive publishing é CRÍTICO para SEO programático 2026')
console.log()
