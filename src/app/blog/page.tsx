import { BlogList } from '@/templates/blog/blog-list'
import { allPosts } from 'contentlayer/generated'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Blog',
  description: 'Dicas e estratégias para o seu negócio',
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

export async function generateStaticParams() {
  return allPosts.map(post => ({
    slug: post.slug,
  }))
}

export default async function BlogPage() {
  const sortedPosts = await allPosts.sort(
    (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
  )

  return <BlogList posts={sortedPosts} />
}
