import { PostPage } from '@/templates/blog/post-page'
import { allPosts } from 'contentlayer/generated'
import { notFound } from 'next/navigation'

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
