import { Search } from '@/components/search'
import { useRouter } from 'next/router'
import { PostCard } from './components/post-card'

export function BlogList() {
  const router = useRouter()
  const query = router.query.q as string

  const pageTitle = query
    ? `Resultados de busca para "${query}"`
    : 'Dicas e estratégias para impulsionar seu negócio'

  return (
    <div className="flex flex-col py-24 flex-grow h-full">
      <header className="">
        <div className="container space-y-6 flex flex-col items-start justify-between md:flex-row md:items-end lg:items-end">
          <div className="flex flex-col gap-4 md:px-0">
            <span className="text-body-tag text-cyan-100 w-fit rounded-md text-center md:text-left py-2 px-4 bg-cyan-300">
              Blog
            </span>

            <h1 className="text-balance text-start md:text-left text-heading-lg md:text-heading-xl max-w-2xl text-gray-100">
              {pageTitle}
            </h1>
          </div>
          <Search />
        </div>
      </header>

      <PostCard
        slug="transformando-seu-negocio-com-o-site-set"
        title="Transformando seu negócio com o site.set"
        description="Se você está buscando uma maneira simples e eficaz de vender seus produtos online, o Site ...
        "
        image="/assets/post.png"
        date="20/12/2024"
        author={{ name: 'Marlison Mourão', avatar: '/assets/avatar.png' }}
      />
    </div>
  )
}
