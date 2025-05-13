import { cn } from '@/lib/utils'
import Link from 'next/link'

import { LinkProps } from 'next/link'
import { useRouter } from 'next/router'

type ActiveLinkProps = LinkProps & {
  children: React.ReactNode
}

export function ActiveLink({ children, href, ...props }: ActiveLinkProps) {
  const router = useRouter()

  const isCurrentPath = router.asPath === href || router.asPath === props.as

  return (
    <Link
      href={href}
      className={cn(
        'text-action-sm transition-colors hover:text-blue-200',
        isCurrentPath ? 'text-blue-200' : 'text-gray-100'
      )}
    >
      {children}
    </Link>
  )
}
