import { ImageResponse } from 'next/og'
import { getPostBySlug } from '@/lib/blog/posts'
import { readFile } from 'fs/promises'
import { join } from 'path'

export const alt = 'L8 Capital Blog'
export const size = {
  width: 1200,
  height: 630,
}
export const contentType = 'image/png'

export default async function Image({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const post = getPostBySlug(slug)

  // Read logo file directly from filesystem
  const logoPath = join(process.cwd(), 'public', 'images', 'logos', 'l8-logo-v2.png')
  const logoBuffer = await readFile(logoPath)
  const logoBase64 = `data:image/png;base64,${logoBuffer.toString('base64')}`

  if (!post) {
    return new ImageResponse(
      (
        <div
          style={{
            height: '100%',
            width: '100%',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            background: 'linear-gradient(135deg, #0F4C81 0%, #1E3A5F 100%)',
            fontFamily: 'system-ui, sans-serif',
          }}
        >
          <span style={{ fontSize: 48, color: 'white' }}>Artigo não encontrado</span>
        </div>
      ),
      { ...size }
    )
  }

  return new ImageResponse(
    (
      <div
        style={{
          height: '100%',
          width: '100%',
          display: 'flex',
          flexDirection: 'column',
          background: 'linear-gradient(135deg, #0F4C81 0%, #1E3A5F 100%)',
          fontFamily: 'system-ui, sans-serif',
          padding: 60,
        }}
      >
        {/* Header */}
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            marginBottom: 40,
          }}
        >
          <img
            src={logoBase64}
            alt="L8 Capital"
            width={60}
            height={60}
            style={{
              marginRight: 16,
            }}
          />
          <span style={{ fontSize: 24, color: 'rgba(255,255,255,0.8)' }}>Blog</span>
        </div>

        {/* Category Badge */}
        <div
          style={{
            display: 'flex',
            marginBottom: 24,
          }}
        >
          <span
            style={{
              background: '#2E8B57',
              color: 'white',
              padding: '8px 20px',
              borderRadius: 20,
              fontSize: 18,
              fontWeight: 600,
            }}
          >
            {post.category}
          </span>
        </div>

        {/* Title */}
        <h1
          style={{
            fontSize: 56,
            fontWeight: 700,
            color: 'white',
            lineHeight: 1.2,
            marginBottom: 24,
            maxWidth: '90%',
          }}
        >
          {post.title.length > 60 ? post.title.substring(0, 60) + '...' : post.title}
        </h1>

        {/* Description */}
        <p
          style={{
            fontSize: 24,
            color: 'rgba(255,255,255,0.8)',
            lineHeight: 1.4,
            maxWidth: '85%',
          }}
        >
          {post.description.length > 120
            ? post.description.substring(0, 120) + '...'
            : post.description}
        </p>

        {/* Footer */}
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            marginTop: 'auto',
            gap: 24,
          }}
        >
          <span style={{ fontSize: 18, color: 'rgba(255,255,255,0.6)' }}>
            {post.author.name}
          </span>
          <span style={{ fontSize: 18, color: 'rgba(255,255,255,0.4)' }}>•</span>
          <span style={{ fontSize: 18, color: 'rgba(255,255,255,0.6)' }}>
            {post.readingTime} min de leitura
          </span>
        </div>
      </div>
    ),
    { ...size }
  )
}
