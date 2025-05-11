import { PT_Sans_Caption } from 'next/font/google'
import Image from 'next/image'

const ptSansCaption = PT_Sans_Caption({
  subsets: ['latin'],
  weight: ['700'],
  variable: '--font-pt-sans-caption',
})

const customerStores = [
  {
    content:
      'Transformar minha ideia em uma loja online foi fácil e rápido. Adorei as opções de personalização e a simplicidade para gerenciar os pedidos. Já vejo meus produtos alcançando mais pessoas!',
    author: {
      name: 'Jacob Jones',
      role: 'CEO na JJ Org',
      avatar: 'https://i.pravatar.cc/150?img=2',
    },
  },
  {
    content:
      'Criar minha loja com o site.set foi a melhor decisão para o meu negócio. A plataforma é super intuitiva, e consegui colocar meus produtos à venda em poucos minutos.',
    author: {
      name: 'Annette Bones',
      role: 'CEO na Anne Corp',
      avatar: 'https://i.pravatar.cc/150?img=1',
    },
  },
]

export function CustomerStoreSection() {
  return (
    <section className="container py-8 px-10">
      <div className="flex flex-col items-center gap-12">
        <h2
          className={`${ptSansCaption.className} text-balance text-center text-heading-xl text-gray-100`}
        >
          Quem utiliza, aprova!
        </h2>

        <div className="grid gap-8 md:grid-cols-2">
          {customerStores.map(customer => (
            <div
              key={customer.author.name}
              className="flex flex-col gap-6 rounded-lg bg-gray-500 p-6 md:p-12"
            >
              <p className="text-balance text-gray-200">{customer.content}</p>

              <div className="flex items-center gap-2">
                <div className="relative h-10 w-10 overflow-hidden rounded-full">
                  <Image
                    src={customer.author.avatar}
                    alt={customer.author.name}
                    className="object-cover"
                    fill
                  />
                </div>
                <div className="flex flex-col">
                  <strong className="text-gray-200 text-sm">
                    {customer.author.name}
                  </strong>
                  <span className="text-gray-300 text-xs">
                    {customer.author.role}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
