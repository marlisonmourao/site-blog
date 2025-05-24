import { Layout } from '@/components/layout'
import type { Metadata } from 'next'
import '../styles/globals.css'

export const metadata: Metadata = {
  title: 'Site.Set',
  description: 'Venda seu produtos de afiliado em um único lugar',
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
