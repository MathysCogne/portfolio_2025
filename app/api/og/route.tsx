import { ImageResponse } from 'next/og'
import { texts } from '@/lib/constants'

export const runtime = 'nodejs'
export const dynamic = 'force-static'
export const revalidate = false

export async function GET(request: Request) {
  try {
    const { searchParams } = new URL(request.url)
    
    // Récupérer les paramètres de l'URL
    const title = searchParams.get('title') || texts.metadata.siteTitle
    const subtitle = searchParams.get('subtitle') || 'Développeur Web3 & IA'
    const type = searchParams.get('type') || 'default'

    // Charger les polices une seule fois
    const [interBold, interRegular] = await Promise.all([
      fetch(new URL('https://fonts.googleapis.com/css2?family=Inter:wght@700&display=swap'))
        .then((res) => res.arrayBuffer()),
      fetch(new URL('https://fonts.googleapis.com/css2?family=Inter:wght@400&display=swap'))
        .then((res) => res.arrayBuffer()),
    ])

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
            backgroundColor: '#0f172a',
            padding: '40px',
            position: 'relative',
          }}
        >
          {/* Fond avec motif de points */}
          <div
            style={{
              position: 'absolute',
              top: 0,
              left: 0,
              right: 0,
              bottom: 0,
              backgroundImage: 'radial-gradient(circle at center, #3b82f620 1px, transparent 1px)',
              backgroundSize: '24px 24px',
              opacity: 0.3,
            }}
          />

          {/* Bordure décorative */}
          <div
            style={{
              position: 'absolute',
              top: '20px',
              left: '20px',
              right: '20px',
              bottom: '20px',
              border: '1px solid #3b82f630',
              borderRadius: '12px',
            }}
          />

          {/* Contenu principal */}
          <div
            style={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              justifyContent: 'center',
              padding: '60px',
              maxWidth: '900px',
              textAlign: 'center',
              zIndex: 10,
            }}
          >
            {/* Badge */}
            <div
              style={{
                backgroundColor: '#3b82f6',
                color: 'white',
                fontSize: '18px',
                fontWeight: 'bold',
                padding: '8px 16px',
                borderRadius: '20px',
                marginBottom: '30px',
                boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
              }}
            >
              {type === 'blog' ? 'ARTICLE DE BLOG' : 'PORTFOLIO'}
            </div>
            
            {/* Titre */}
            <div
              style={{
                color: '#ffffff',
                fontSize: type === 'blog' ? '60px' : '72px',
                fontWeight: 'bold',
                lineHeight: 1.2,
                letterSpacing: '-0.05em',
                marginBottom: '24px',
                padding: '0 20px',
                maxWidth: '1000px',
              }}
            >
              {title}
            </div>

            {/* Sous-titre */}
            <div
              style={{
                color: '#e2e8f0',
                fontSize: '32px',
                marginTop: '16px',
                opacity: 0.9,
                maxWidth: '800px',
              }}
            >
              {subtitle}
            </div>

            {/* Ligne décorative */}
            <div
              style={{
                width: '120px',
                height: '4px',
                marginTop: '32px',
                backgroundColor: '#3b82f6',
                borderRadius: '2px',
              }}
            />

            {/* Icônes technologiques */}
            <div
              style={{
                display: 'flex',
                gap: '16px',
                marginTop: '40px',
              }}
            >
              {['#', '{...}', '</>'].map((icon, index) => (
                <div
                  key={index}
                  style={{
                    width: '40px',
                    height: '40px',
                    borderRadius: '50%',
                    backgroundColor: '#3b82f6',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: 'white',
                    fontSize: '18px',
                    fontWeight: 'bold',
                  }}
                >
                  {icon}
                </div>
              ))}
            </div>

            {/* Signature */}
            <div
              style={{
                position: 'absolute',
                bottom: '20px',
                display: 'flex',
                alignItems: 'center',
                color: '#e2e8f0',
                fontSize: '20px',
                padding: '8px 24px',
                backgroundColor: '#1e293b',
                borderRadius: '4px',
              }}
            >
              <div
                style={{
                  width: '24px',
                  height: '24px',
                  borderRadius: '50%',
                  backgroundColor: '#3b82f6',
                  marginRight: '12px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontSize: '14px',
                  color: 'white',
                  fontWeight: 'bold',
                }}
              >
                M
              </div>
              mathys-cognefoucault.fr
            </div>
          </div>
        </div>
      ),
      {
        width: 1200,
        height: 630,
        fonts: [
          {
            name: 'Inter',
            data: interBold,
            style: 'normal',
            weight: 700,
          },
          {
            name: 'Inter',
            data: interRegular,
            style: 'normal',
            weight: 400,
          },
        ],
      }
    )
  } catch (error) {
    console.error('Error generating OG image:', error)
    return new Response('Error generating image', { status: 500 })
  }
}
