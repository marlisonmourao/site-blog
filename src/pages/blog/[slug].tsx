import { Avatar } from '@/components/avatar'
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbSeparator,
} from '@/components/ui/breadcrumb'
import { allPosts } from 'contentlayer/generated'
import Image from 'next/image'
import Link from 'next/link'
import { useRouter } from 'next/router'

export default function Post() {
  const router = useRouter()
  const { slug } = router.query

  const post = allPosts.find(
    post => post.slug.toLowerCase() === slug?.toString().toLowerCase()
  )

  const publishedDate = new Date(post?.date ?? '').toLocaleDateString('pt-BR', {
    day: '2-digit',
    month: 'long',
    year: 'numeric',
  })

  return (
    <main className="mt-32  text-gray-100">
      <Breadcrumb>
        <BreadcrumbList>
          <BreadcrumbLink asChild className="text-action-sm">
            <Link href="/blog">Blog</Link>
          </BreadcrumbLink>

          <BreadcrumbSeparator />

          <BreadcrumbItem>
            <span className="text-blue-200 text-action-sm">{post?.title}</span>
          </BreadcrumbItem>
        </BreadcrumbList>
      </Breadcrumb>

      <div className="grid grid-cols-1 lg:grid-cols-[1fr_300px] gap-6 lg:gap-12">
        <article className="bg-gray-600 rounded-lg overflow-hidden border-gray-400 border-[1px]">
          <figure className="relative aspect-[16/10] w-full overflow-hidden rounded-lg">
            <Image
              src={post?.image ?? ''}
              alt={post?.title ?? ''}
              fill
              className="object-cover"
            />
          </figure>

          <header className="p-4 md:p-6 lg:p-12 pb-8">
            <h1 className="mb-6 text-balance text-heading-lg md:text-heading-xl lg:text-heading-xl">
              {post?.title}
            </h1>

            <Avatar.Container>
              <Avatar.Image
                src={post?.author.avatar ?? ''}
                alt={post?.author.name ?? ''}
                width={40}
                height={40}
              />
              <Avatar.Content>
                <Avatar.Title>{post?.author.name}</Avatar.Title>
                <Avatar.Description>
                  Publicado em{' '}
                  <time dateTime={publishedDate}>{publishedDate}</time>
                </Avatar.Description>
              </Avatar.Content>
            </Avatar.Container>
          </header>
        </article>
      </div>
    </main>
  )
}
