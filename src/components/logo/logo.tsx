import Image from 'next/image'
import Link from 'next/link'

export function Logo() {
  return (
    <Link href="/" title="Pagina inicial">
      <Image src="/logo.png" alt="logo" width={116} height={32} />
    </Link>
  )
}
