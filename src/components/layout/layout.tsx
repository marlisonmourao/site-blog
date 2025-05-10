import { Footer } from '../footer/footer'
import { Header } from '../header'

export function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="relative flex  min-h-screen flex-col dark">
      <Header />

      <main className="flex-1 flex flex-col mb-12">{children}</main>

      <Footer />
    </div>
  )
}
