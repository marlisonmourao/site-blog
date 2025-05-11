import { Logo } from '@/components/logo'
import Link from 'next/link'

export function Footer() {
  return (
    <footer className="bg-gray-500">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-5">
        <div className="flex justify-between md:flex-row gap-8 py-8">
          <Logo />

          <nav className="flex flex-col md:flex-row items-center gap-4 text-sm text-blue-100">
            <Link href="/" className="hover:text-blue-200">
              Termos de uso
            </Link>
            <Link
              href="/politica-de-privacidade"
              className="hover:text-blue-200y"
            >
              Política de privacidade
            </Link>
            <Link href="/feedback" className="hover:text-blue-200">
              Enviar feedback
            </Link>
          </nav>
        </div>
      </div>
    </footer>
  )
}
