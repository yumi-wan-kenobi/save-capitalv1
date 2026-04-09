import type { Metadata, Viewport } from 'next'
import { Inter, Playfair_Display } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'

const inter = Inter({ 
  subsets: ["latin"],
  variable: '--font-inter',
})

const playfair = Playfair_Display({ 
  subsets: ["latin"],
  variable: '--font-playfair',
})

export const metadata: Metadata = {
  title: 'Carolina Zamora | Agente de Seguros Certificado CNSF en Tijuana',
  description: 'Asesoria profesional en seguros de vida, gastos medicos y planes de ahorro. Mas de 15 anos de experiencia en Tijuana. Protegemos lo que mas te importa.',
  keywords: ['seguros', 'agente de seguros', 'Tijuana', 'CNSF', 'seguro de vida', 'gastos medicos', 'ahorro'],
  authors: [{ name: 'Carolina Zamora' }],
  openGraph: {
    title: 'Carolina Zamora | Agente de Seguros en Tijuana',
    description: 'Asesoria profesional en seguros de vida, gastos medicos y planes de ahorro.',
    type: 'website',
  },
}

export const viewport: Viewport = {
  themeColor: 'hsl(215,72%,20%)',
  width: 'device-width',
  initialScale: 1,
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="es">
      <body className={`${inter.variable} ${playfair.variable} font-sans antialiased`}>
        {children}
        <Analytics />
      </body>
    </html>
  )
}
