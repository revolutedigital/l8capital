// Sistema de dados de localização para SEO programático
// Baseado nas melhores práticas de Local SEO 2026

export interface LocationMetadata {
  population?: number
  avgRentResidential?: number // Aluguel médio residencial em R$
  avgRentCommercial?: number // Aluguel médio comercial em R$
  realEstateAgencies?: number // Número estimado de imobiliárias
  keyInsights: string[] // Insights específicos da região
  economicProfile?: 'premium' | 'mid' | 'popular' // Perfil econômico
  propertyTypes?: string[] // Tipos predominantes de imóveis
}

export interface GeoCoordinates {
  latitude: number
  longitude: number
}

export interface Location {
  slug: string // URL-friendly slug
  name: string // Nome formal da localização
  type: 'country' | 'state' | 'city' | 'zone' | 'neighborhood'
  parent?: string // Slug do parent (ex: zona-sul tem parent sao-paulo)
  state: string
  geo?: GeoCoordinates
  metadata: LocationMetadata
}

// ============================================================================
// DADOS DE LOCALIZAÇÕES - SÃO PAULO
// ============================================================================

// País (Nacional)
export const brazil: Location = {
  slug: 'brasil',
  name: 'Brasil',
  type: 'country',
  state: 'Nacional',
  metadata: {
    population: 203000000,
    keyInsights: [
      'Mercado imobiliário de R$ 1,2 trilhão',
      'Lei do Inquilinato (Lei 8.245/91) regulamenta locações',
      'Crescimento de 15% ao ano em seguros fiança',
    ],
  },
}

// Estado de São Paulo
export const saoPauloState: Location = {
  slug: 'sao-paulo-estado',
  name: 'São Paulo',
  type: 'state',
  state: 'SP',
  metadata: {
    population: 46000000,
    keyInsights: [
      'Maior mercado imobiliário do Brasil',
      'Secovi-SP representa mais de 30 mil imobiliárias',
      'Aluguel médio estadual: R$ 2.100',
    ],
  },
}

// Cidade de São Paulo
export const saoPauloCity: Location = {
  slug: 'sao-paulo',
  name: 'São Paulo',
  type: 'city',
  parent: 'sao-paulo-estado',
  state: 'SP',
  geo: {
    latitude: -23.5505,
    longitude: -46.6333,
  },
  metadata: {
    population: 12300000,
    avgRentResidential: 2800,
    avgRentCommercial: 5500,
    realEstateAgencies: 8500,
    keyInsights: [
      'Maior mercado de locação residencial da América Latina',
      'Mais de 8.500 imobiliárias ativas na capital',
      'Crescimento de 12% em contratos de locação',
      'Seguro fiança utilizado em 45% dos contratos',
    ],
    economicProfile: 'premium',
    propertyTypes: ['apartamento', 'comercial', 'casa'],
  },
}

// ============================================================================
// ZONAS DE SÃO PAULO
// ============================================================================

export const zonaSul: Location = {
  slug: 'zona-sul',
  name: 'Zona Sul de São Paulo',
  type: 'zone',
  parent: 'sao-paulo',
  state: 'SP',
  geo: {
    latitude: -23.6181,
    longitude: -46.6695,
  },
  metadata: {
    population: 2800000,
    avgRentResidential: 3500,
    avgRentCommercial: 7000,
    realEstateAgencies: 2100,
    keyInsights: [
      'Região mais valorizada de São Paulo',
      'Concentração de imóveis de alto padrão',
      'Taxa de ocupação superior a 95%',
      'Bairros como Moema e Itaim Bibi com aluguéis acima de R$ 5.000',
    ],
    economicProfile: 'premium',
    propertyTypes: ['apartamento', 'comercial', 'cobertura'],
  },
}

export const zonaOeste: Location = {
  slug: 'zona-oeste',
  name: 'Zona Oeste de São Paulo',
  type: 'zone',
  parent: 'sao-paulo',
  state: 'SP',
  geo: {
    latitude: -23.5475,
    longitude: -46.7061,
  },
  metadata: {
    population: 1900000,
    avgRentResidential: 3200,
    avgRentCommercial: 6500,
    realEstateAgencies: 1500,
    keyInsights: [
      'Bairros tradicionais e bem estabelecidos',
      'Alto índice de imóveis residenciais',
      'Forte presença de universidades e comércio',
      'Pinheiros e Perdizes entre os bairros mais procurados',
    ],
    economicProfile: 'premium',
    propertyTypes: ['apartamento', 'casa', 'comercial'],
  },
}

export const zonaCentral: Location = {
  slug: 'zona-central',
  name: 'Centro de São Paulo',
  type: 'zone',
  parent: 'sao-paulo',
  state: 'SP',
  geo: {
    latitude: -23.5505,
    longitude: -46.6333,
  },
  metadata: {
    population: 850000,
    avgRentResidential: 2200,
    avgRentCommercial: 4500,
    realEstateAgencies: 950,
    keyInsights: [
      'Forte vocação comercial e corporativa',
      'Revitalização urbana com aumento de locações residenciais',
      'Aluguel comercial competitivo',
      'Crescimento de 20% em contratos residenciais (2023-2025)',
    ],
    economicProfile: 'mid',
    propertyTypes: ['comercial', 'apartamento', 'studio'],
  },
}

export const zonaLeste: Location = {
  slug: 'zona-leste',
  name: 'Zona Leste de São Paulo',
  type: 'zone',
  parent: 'sao-paulo',
  state: 'SP',
  geo: {
    latitude: -23.5629,
    longitude: -46.4653,
  },
  metadata: {
    population: 3900000,
    avgRentResidential: 1800,
    avgRentCommercial: 3200,
    realEstateAgencies: 1800,
    keyInsights: [
      'Maior volume de contratos de locação de SP',
      'Mercado em crescimento com valorização acelerada',
      'Tatuapé como hub comercial e residencial',
      'Excelente custo-benefício para inquilinos',
    ],
    economicProfile: 'mid',
    propertyTypes: ['apartamento', 'casa', 'comercial'],
  },
}

export const zonaNorte: Location = {
  slug: 'zona-norte',
  name: 'Zona Norte de São Paulo',
  type: 'zone',
  parent: 'sao-paulo',
  state: 'SP',
  geo: {
    latitude: -23.4753,
    longitude: -46.6297,
  },
  metadata: {
    population: 2500000,
    avgRentResidential: 1900,
    avgRentCommercial: 3500,
    realEstateAgencies: 1200,
    keyInsights: [
      'Grande volume de imóveis residenciais',
      'Infraestrutura em expansão com metrô',
      'Santana como polo comercial da região',
      'Mercado acessível para famílias',
    ],
    economicProfile: 'mid',
    propertyTypes: ['apartamento', 'casa', 'comercial'],
  },
}

// ============================================================================
// BAIRROS PREMIUM - ZONA SUL
// ============================================================================

export const pinheiros: Location = {
  slug: 'pinheiros',
  name: 'Pinheiros',
  type: 'neighborhood',
  parent: 'zona-oeste', // Pinheiros é tecnicamente Zona Oeste
  state: 'SP',
  geo: {
    latitude: -23.5629,
    longitude: -46.6992,
  },
  metadata: {
    population: 65000,
    avgRentResidential: 4200,
    avgRentCommercial: 8500,
    realEstateAgencies: 180,
    keyInsights: [
      'Um dos bairros mais desejados de São Paulo',
      'Excelente infraestrutura com metrô, comércio e serviços',
      'Alto giro de contratos (média 18 meses por locação)',
      'Valorização de 8% ao ano nos últimos 5 anos',
      'Forte demanda de jovens profissionais e empresas',
    ],
    economicProfile: 'premium',
    propertyTypes: ['apartamento', 'comercial', 'studio'],
  },
}

export const vilaMarianaNeighborhood: Location = {
  slug: 'vila-mariana',
  name: 'Vila Mariana',
  type: 'neighborhood',
  parent: 'zona-sul',
  state: 'SP',
  geo: {
    latitude: -23.5886,
    longitude: -46.6361,
  },
  metadata: {
    population: 130000,
    avgRentResidential: 3800,
    avgRentCommercial: 7200,
    realEstateAgencies: 150,
    keyInsights: [
      'Bairro tradicional e arborizado',
      'Proximidade com metrô e hospitais renomados',
      'Perfil familiar com alta taxa de ocupação',
      'Mercado estável com baixa inadimplência',
    ],
    economicProfile: 'premium',
    propertyTypes: ['apartamento', 'casa', 'comercial'],
  },
}

export const moema: Location = {
  slug: 'moema',
  name: 'Moema',
  type: 'neighborhood',
  parent: 'zona-sul',
  state: 'SP',
  geo: {
    latitude: -23.6059,
    longitude: -46.6633,
  },
  metadata: {
    population: 92000,
    avgRentResidential: 4500,
    avgRentCommercial: 9000,
    realEstateAgencies: 170,
    keyInsights: [
      'Alto padrão com apartamentos de 3-4 dormitórios',
      'Parque Ibirapuera nas proximidades',
      'Valorização constante acima da média de SP',
      'Inquilinos com alta renda e estabilidade',
    ],
    economicProfile: 'premium',
    propertyTypes: ['apartamento', 'cobertura', 'comercial'],
  },
}

export const itaimBibi: Location = {
  slug: 'itaim-bibi',
  name: 'Itaim Bibi',
  type: 'neighborhood',
  parent: 'zona-sul',
  state: 'SP',
  geo: {
    latitude: -23.5905,
    longitude: -46.6814,
  },
  metadata: {
    population: 82000,
    avgRentResidential: 5200,
    avgRentCommercial: 11000,
    realEstateAgencies: 160,
    keyInsights: [
      'Polo corporativo com alta concentração de empresas',
      'Aluguéis comerciais entre os mais altos de SP',
      'Demanda forte de executivos e expatriados',
      'Mercado premium com pouca vacância',
    ],
    economicProfile: 'premium',
    propertyTypes: ['apartamento', 'comercial', 'laje-corporativa'],
  },
}

// ============================================================================
// BAIRROS PREMIUM - ZONA OESTE
// ============================================================================

export const perdizes: Location = {
  slug: 'perdizes',
  name: 'Perdizes',
  type: 'neighborhood',
  parent: 'zona-oeste',
  state: 'SP',
  geo: {
    latitude: -23.5364,
    longitude: -46.6740,
  },
  metadata: {
    population: 110000,
    avgRentResidential: 3600,
    avgRentCommercial: 6800,
    realEstateAgencies: 140,
    keyInsights: [
      'Bairro residencial tradicional e arborizado',
      'Forte presença de universidades (PUC-SP)',
      'Mercado estável com perfil familiar',
      'Boa infraestrutura de comércio local',
    ],
    economicProfile: 'premium',
    propertyTypes: ['apartamento', 'casa', 'comercial'],
  },
}

export const jardins: Location = {
  slug: 'jardins',
  name: 'Jardins',
  type: 'neighborhood',
  parent: 'zona-oeste',
  state: 'SP',
  geo: {
    latitude: -23.5643,
    longitude: -46.6729,
  },
  metadata: {
    population: 65000,
    avgRentResidential: 6500,
    avgRentCommercial: 12000,
    realEstateAgencies: 200,
    keyInsights: [
      'Endereço mais nobre de São Paulo',
      'Aluguéis residenciais entre os mais altos do Brasil',
      'Concentração de lojas de luxo e restaurantes premium',
      'Baixíssima taxa de vacância',
    ],
    economicProfile: 'premium',
    propertyTypes: ['apartamento', 'casa', 'comercial-luxo'],
  },
}

export const vilaMadalena: Location = {
  slug: 'vila-madalena',
  name: 'Vila Madalena',
  type: 'neighborhood',
  parent: 'zona-oeste',
  state: 'SP',
  geo: {
    latitude: -23.5464,
    longitude: -46.6896,
  },
  metadata: {
    population: 42000,
    avgRentResidential: 3900,
    avgRentCommercial: 7500,
    realEstateAgencies: 120,
    keyInsights: [
      'Bairro boêmio com vida cultural intensa',
      'Alta demanda de jovens profissionais',
      'Mercado dinâmico com alto giro',
      'Casas e sobrados característicos da região',
    ],
    economicProfile: 'premium',
    propertyTypes: ['casa', 'apartamento', 'comercial'],
  },
}

// ============================================================================
// BAIRROS PREMIUM - ZONA LESTE
// ============================================================================

export const tatuape: Location = {
  slug: 'tatuape',
  name: 'Tatuapé',
  type: 'neighborhood',
  parent: 'zona-leste',
  state: 'SP',
  geo: {
    latitude: -23.5415,
    longitude: -46.5761,
  },
  metadata: {
    population: 95000,
    avgRentResidential: 2800,
    avgRentCommercial: 5500,
    realEstateAgencies: 160,
    keyInsights: [
      'Principal polo da Zona Leste',
      'Excelente infraestrutura com metrô e shopping centers',
      'Mercado em franca expansão',
      'Ótimo custo-benefício para locatários',
    ],
    economicProfile: 'mid',
    propertyTypes: ['apartamento', 'comercial', 'casa'],
  },
}

export const mooca: Location = {
  slug: 'mooca',
  name: 'Mooca',
  type: 'neighborhood',
  parent: 'zona-leste',
  state: 'SP',
  geo: {
    latitude: -23.5500,
    longitude: -46.5997,
  },
  metadata: {
    population: 75000,
    avgRentResidential: 2600,
    avgRentCommercial: 5000,
    realEstateAgencies: 110,
    keyInsights: [
      'Bairro tradicional em processo de revitalização',
      'Proximidade com o centro e metrô',
      'Crescimento de 15% em novos empreendimentos',
      'Perfil diversificado de inquilinos',
    ],
    economicProfile: 'mid',
    propertyTypes: ['apartamento', 'comercial', 'loft'],
  },
}

// ============================================================================
// BAIRROS PREMIUM - ZONA NORTE
// ============================================================================

export const santana: Location = {
  slug: 'santana',
  name: 'Santana',
  type: 'neighborhood',
  parent: 'zona-norte',
  state: 'SP',
  geo: {
    latitude: -23.5011,
    longitude: -46.6264,
  },
  metadata: {
    population: 125000,
    avgRentResidential: 2400,
    avgRentCommercial: 4500,
    realEstateAgencies: 130,
    keyInsights: [
      'Principal polo comercial da Zona Norte',
      'Infraestrutura consolidada com metrô',
      'Forte presença de serviços e comércio',
      'Mercado estável com boa liquidez',
    ],
    economicProfile: 'mid',
    propertyTypes: ['apartamento', 'comercial', 'casa'],
  },
}

// ============================================================================
// BAIRROS ADICIONAIS - ZONA SUL
// ============================================================================

export const brooklin: Location = {
  slug: 'brooklin',
  name: 'Brooklin',
  type: 'neighborhood',
  parent: 'zona-sul',
  state: 'SP',
  geo: {
    latitude: -23.6067,
    longitude: -46.6978,
  },
  metadata: {
    population: 71000,
    avgRentResidential: 4800,
    avgRentCommercial: 9500,
    realEstateAgencies: 145,
    keyInsights: [
      'Proximidade com Marginal Pinheiros e grandes empresas',
      'Alto padrão com forte demanda corporativa',
      'Valorização acelerada nos últimos anos',
      'Excelente conectividade viária',
    ],
    economicProfile: 'premium',
    propertyTypes: ['apartamento', 'comercial', 'laje-corporativa'],
  },
}

export const campoBeloNeighborhood: Location = {
  slug: 'campo-belo',
  name: 'Campo Belo',
  type: 'neighborhood',
  parent: 'zona-sul',
  state: 'SP',
  geo: {
    latitude: -23.6242,
    longitude: -46.6707,
  },
  metadata: {
    population: 65000,
    avgRentResidential: 3700,
    avgRentCommercial: 7000,
    realEstateAgencies: 115,
    keyInsights: [
      'Bairro residencial bem localizado',
      'Próximo ao aeroporto de Congonhas',
      'Perfil familiar com boa infraestrutura',
      'Mercado consolidado',
    ],
    economicProfile: 'premium',
    propertyTypes: ['apartamento', 'casa', 'comercial'],
  },
}

export const vilaOlimpia: Location = {
  slug: 'vila-olimpia',
  name: 'Vila Olímpia',
  type: 'neighborhood',
  parent: 'zona-sul',
  state: 'SP',
  geo: {
    latitude: -23.5953,
    longitude: -46.6876,
  },
  metadata: {
    population: 45000,
    avgRentResidential: 5500,
    avgRentCommercial: 13000,
    realEstateAgencies: 155,
    keyInsights: [
      'Polo de startups e empresas de tecnologia',
      'Vida noturna intensa com bares e restaurantes',
      'Aluguéis comerciais premium',
      'Alta demanda de jovens profissionais',
    ],
    economicProfile: 'premium',
    propertyTypes: ['apartamento', 'comercial', 'laje-corporativa'],
  },
}

// ============================================================================
// BAIRROS ADICIONAIS - ZONA CENTRAL
// ============================================================================

export const higienopolis: Location = {
  slug: 'higienopolis',
  name: 'Higienópolis',
  type: 'neighborhood',
  parent: 'zona-central',
  state: 'SP',
  geo: {
    latitude: -23.5450,
    longitude: -46.6533,
  },
  metadata: {
    population: 45000,
    avgRentResidential: 4200,
    avgRentCommercial: 7500,
    realEstateAgencies: 125,
    keyInsights: [
      'Bairro histórico e tradicional',
      'Alto padrão com perfil intelectual',
      'Proximidade com universidades',
      'Mercado estável com baixa vacância',
    ],
    economicProfile: 'premium',
    propertyTypes: ['apartamento', 'comercial', 'casa'],
  },
}

export const consolacao: Location = {
  slug: 'consolacao',
  name: 'Consolação',
  type: 'neighborhood',
  parent: 'zona-central',
  state: 'SP',
  geo: {
    latitude: -23.5566,
    longitude: -46.6597,
  },
  metadata: {
    population: 55000,
    avgRentResidential: 2900,
    avgRentCommercial: 5500,
    realEstateAgencies: 95,
    keyInsights: [
      'Localização central estratégica',
      'Mix de residencial e comercial',
      'Boa conectividade com transporte público',
      'Mercado em valorização',
    ],
    economicProfile: 'mid',
    propertyTypes: ['apartamento', 'comercial', 'studio'],
  },
}

// ============================================================================
// ARRAYS ORGANIZADOS
// ============================================================================

export const allZonesSP: Location[] = [
  zonaSul,
  zonaOeste,
  zonaCentral,
  zonaLeste,
  zonaNorte,
]

export const allNeighborhoodsSP: Location[] = [
  // Zona Sul
  vilaMarianaNeighborhood,
  moema,
  itaimBibi,
  brooklin,
  campoBeloNeighborhood,
  vilaOlimpia,
  // Zona Oeste
  pinheiros,
  perdizes,
  jardins,
  vilaMadalena,
  // Zona Leste
  tatuape,
  mooca,
  // Zona Norte
  santana,
  // Zona Central
  higienopolis,
  consolacao,
]

export const allLocationsSP: Location[] = [
  saoPauloCity,
  ...allZonesSP,
  ...allNeighborhoodsSP,
]

export const allLocations: Location[] = [
  brazil,
  saoPauloState,
  ...allLocationsSP,
]

// ============================================================================
// UTILITY FUNCTIONS
// ============================================================================

export function getLocationBySlug(slug: string): Location | undefined {
  return allLocations.find((loc) => loc.slug === slug)
}

export function getLocationsByType(type: Location['type']): Location[] {
  return allLocations.filter((loc) => loc.type === type)
}

export function getLocationsByParent(parentSlug: string): Location[] {
  return allLocations.filter((loc) => loc.parent === parentSlug)
}

export function getLocationFullPath(location: Location): string[] {
  const path: string[] = [location.name]
  let current = location

  while (current.parent) {
    const parent = getLocationBySlug(current.parent)
    if (!parent) break
    path.unshift(parent.name)
    current = parent
  }

  return path
}

export function getLocationBreadcrumb(location: Location): Array<{ name: string; slug: string }> {
  const breadcrumb: Array<{ name: string; slug: string }> = []
  let current = location

  while (current) {
    breadcrumb.unshift({ name: current.name, slug: current.slug })
    if (!current.parent) break
    const parent = getLocationBySlug(current.parent)
    if (!parent) break
    current = parent
  }

  return breadcrumb
}
