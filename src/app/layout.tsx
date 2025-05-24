import { Layout } from '@/components/layout'
import type { Metadata } from 'next'
import '../styles/globals.css'

export const metadata: Metadata = {
  title: 'Site.Set',
  description: 'Venda seu produtos de afiliado em um único lugar',
  openGraph: {
    title: 'Site.Set',
    description: 'Venda seu produtos de afiliado em um único lugar',
    url: 'https://site-blog-weld.vercel.app/og-image.jpg',
    siteName: 'Site.Set',
    locale: 'pt-BR',
    type: 'website',
    images: [
      {
        url: 'https://site-blog-weld.vercel.app/og-image.jpg',
        width: 800,
        height: 600,
        alt: 'Site.Set',
      },
    ],
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <Layout>
      <html lang="en">
        <body>{children}</body>
      </html>
    </Layout>
  )
}
