import { BlogList } from '@/templates/blog/blog-list'
import { allPosts } from 'contentlayer/generated'

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
