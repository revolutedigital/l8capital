import { SITE_CONFIG, FAQ_ITEMS } from '@/lib/constants'

export function JsonLd() {
  const organizationSchema = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: SITE_CONFIG.name,
    alternateName: 'L8',
    description: SITE_CONFIG.description,
    url: SITE_CONFIG.url,
    logo: `${SITE_CONFIG.url}/logo.png`,
    foundingDate: '2025',
    areaServed: {
      '@type': 'Country',
      name: 'Brazil',
    },
    knowsAbout: [
      'Seguros para imobiliárias',
      'Seguro fiança locatícia',
      'Redução de custos para imobiliárias',
      'Gestão financeira imobiliária',
    ],
    slogan: SITE_CONFIG.tagline,
    numberOfEmployees: {
      '@type': 'QuantitativeValue',
      value: '7',
    },
  }

  const localBusinessSchema = {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    name: SITE_CONFIG.name,
    description: 'Plataforma digital de soluções financeiras para imobiliárias',
    url: SITE_CONFIG.url,
    telephone: `+55${SITE_CONFIG.whatsapp}`,
    address: {
      '@type': 'PostalAddress',
      addressLocality: 'São Paulo',
      addressRegion: 'SP',
      addressCountry: 'BR',
    },
    priceRange: '$$',
  }

  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: FAQ_ITEMS.map((item) => ({
      '@type': 'Question',
      name: item.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: item.answer,
      },
    })),
  }

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
    </>
  )
}
