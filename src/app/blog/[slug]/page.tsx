import { PostPage } from '@/templates/blog/post-page'
import { allPosts } from 'contentlayer/generated'
import type { Metadata } from 'next'
import { notFound } from 'next/navigation'

export async function generateMetadata({
  params,
}: BlogPostPageProps): Promise<Metadata> {
  const { slug } = await params

  const post = allPosts.find(post => post.slug === slug)

  if (!post) {
    return {
      title: 'Post não encontrado',
      description: 'Post não encontrado',
    }
  }

  return {
    title: post.title,
    description: post.description,
    authors: [{ name: post.author.name }],
    openGraph: {
      title: post.title,
      description: post.description,
      images: [post.image],
    },
  }
}

type BlogPostPageProps = {
  params: Promise<{ slug: string }>
}

export default async function BlogPostPage({ params }: BlogPostPageProps) {
  const { slug } = await params

  const decodedSlug = decodeURIComponent(slug)

  const post = allPosts.find(post => post.slug === decodedSlug)

  if (!post) {
    notFound()
  }

  return <PostPage post={post} />
}
