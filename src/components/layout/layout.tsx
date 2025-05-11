import { Inter, PT_Sans_Caption } from 'next/font/google'
import { Footer } from './footer'
import { Header } from './header'

const inter = Inter({
  subsets: ['latin'],
  weight: ['400', '500'],
  variable: '--font-inter',
})

const ptSansCaption = PT_Sans_Caption({
  subsets: ['latin'],
  weight: ['700'],
  variable: '--font-sans',
})

export function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div
      className={`${inter.className} ${ptSansCaption.variable} relative bg-gray-700 flex min-h-screen flex-col dark font-inter`}
    >
      <Header />

      <main className="flex-1 flex flex-col mt-10 mb-12">{children}</main>

      <Footer />
    </div>
  )
}
