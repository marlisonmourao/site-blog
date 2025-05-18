'use client'

import { cn } from '@/lib/utils'
import Link from 'next/link'

import { LinkProps } from 'next/link'
import { usePathname } from 'next/navigation'

type ActiveLinkProps = LinkProps & {
  children: React.ReactNode
}

export function ActiveLink({ children, href, ...props }: ActiveLinkProps) {
  const linkPath = typeof href === 'string' ? href : href.pathname
  const pathName = usePathname()
  const isActive = pathName === linkPath || pathName?.startsWith(`${linkPath}/`)

  return (
    <Link
      href={href}
      className={cn(
        'text-action-sm transition-colors hover:text-blue-200',
        isActive ? 'text-blue-200' : 'text-gray-100'
      )}
      {...props}
    >
      {children}
    </Link>
  )
}
