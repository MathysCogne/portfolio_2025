import { ImageResponse } from 'next/og'

// Force le rendu statique de cette route API
export const dynamic = 'force-static'
export const revalidate = false

// Définir les paramètres statiques pour cette route
export function generateStaticParams() {
  return [{ title: 'Mathys Cogne-Foucault - Portfolio' }]
}

export function GET() {
  const title = 'Mathys Cogne-Foucault - Portfolio'

  return new ImageResponse(
    (
      <div tw="flex flex-col w-full h-full items-center justify-center bg-white">
        <div tw="flex flex-col md:flex-row w-full py-12 px-4 md:items-center justify-between p-8">
          <h2 tw="flex flex-col text-4xl font-bold tracking-tight text-left">
            {title}
          </h2>
        </div>
      </div>
    ),
    {
      width: 1200,
      height: 630,
    }
  )
}
