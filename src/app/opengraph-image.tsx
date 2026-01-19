import { ImageResponse } from 'next/og'
import { readFile } from 'fs/promises'
import { join } from 'path'

export const alt = 'L8 Capital - Sua imobiliária mais forte'
export const size = {
  width: 1200,
  height: 630,
}
export const contentType = 'image/png'

export default async function Image() {
  // Read logo file directly from filesystem
  const logoPath = join(process.cwd(), 'public', 'images', 'logos', 'l8-logo-v2.png')
  const logoBuffer = await readFile(logoPath)
  const logoBase64 = `data:image/png;base64,${logoBuffer.toString('base64')}`

  return new ImageResponse(
    (
      <div
        style={{
          height: '100%',
          width: '100%',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          background: 'linear-gradient(135deg, #0F4C81 0%, #1E3A5F 100%)',
          fontFamily: 'system-ui, sans-serif',
        }}
      >
        {/* Logo */}
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            marginBottom: 40,
          }}
        >
          <img
            src={logoBase64}
            alt="L8 Capital"
            width={120}
            height={120}
            style={{
              marginRight: 24,
            }}
          />
          <span
            style={{
              fontSize: 64,
              fontWeight: 700,
              color: 'white',
            }}
          >
            Capital
          </span>
        </div>

        {/* Tagline */}
        <p
          style={{
            fontSize: 36,
            color: 'rgba(255,255,255,0.9)',
            marginTop: 0,
            marginBottom: 60,
          }}
        >
          Sua imobiliária mais forte
        </p>

        {/* Stats */}
        <div
          style={{
            display: 'flex',
            gap: 60,
          }}
        >
          <div
            style={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
            }}
          >
            <span style={{ fontSize: 48, fontWeight: 700, color: '#2E8B57' }}>
              +400
            </span>
            <span style={{ fontSize: 18, color: 'rgba(255,255,255,0.7)' }}>
              Imobiliárias
            </span>
          </div>
          <div
            style={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
            }}
          >
            <span style={{ fontSize: 48, fontWeight: 700, color: '#2E8B57' }}>
              24 anos
            </span>
            <span style={{ fontSize: 18, color: 'rgba(255,255,255,0.7)' }}>
              Experiência
            </span>
          </div>
          <div
            style={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
            }}
          >
            <span style={{ fontSize: 48, fontWeight: 700, color: '#2E8B57' }}>
              R$ 2.050
            </span>
            <span style={{ fontSize: 18, color: 'rgba(255,255,255,0.7)' }}>
              Economia/mês
            </span>
          </div>
        </div>
      </div>
    ),
    {
      ...size,
    }
  )
}
