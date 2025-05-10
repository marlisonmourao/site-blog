import { Inter } from 'next/font/google'
import { Footer } from '../footer/footer'
import { Header } from '../header'

const inter = Inter({
  subsets: ['latin'],
})

export function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div
      className={`${inter.className} relative bg-gray-700 flex min-h-screen flex-col dark`}
    >
      <Header />

      <main className="flex-1 flex flex-col mb-12">{children}</main>

      <Footer />
    </div>
  )
}
