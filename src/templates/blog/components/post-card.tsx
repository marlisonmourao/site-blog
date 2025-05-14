import Image from 'next/image'
import Link from 'next/link'

export function PostCard() {
  return (
    <Link
      href={'/blog/'}
      className="w-full max-w-2xl rounded-3xl border-[1px] border-gray-400 bg-gray-600 overflow-hidden transition-all duration-300 hover:border-[1px] hover:border-blue-300"
    >
      <div className="p-2 overflow-hidden rounded-md">
        <div className="relative">
          <div className="absolute top-0 right-0 px-3 py-1">
            <span className="text-gray-200 text-body-xs">20/12/2024</span>
          </div>
          <Image
            src="/assets/post.png"
            alt=""
            width={288}
            height={144}
            className="w-full h-40 object-cover object-center "
          />
        </div>

        <div className="px-2 mt-4 space-y-4">
          <h2 className="text-heading-sm text-gray-100 line-clamp-3 ">
            Transformando seu negócio com o site.set
          </h2>

          <p className="line-clamp-3 text-gray-300 text-body-sm">
            Se você está buscando uma maneira simples e eficaz de vender seus
            produtos online, o Site ...
          </p>

          <div className="flex items-center gap-3 border-t border-gray-400 py-4">
            <div className="relative h-5 w-5 md:h-6 md:w-6 rounded-full overflow-hidden border-blue-200 border-[1px]">
              <Image src="" alt="" fill className="object-cover rounded-md" />
            </div>

            <span className="text-gray-300 text-body-sm">Marlison Mourão</span>
          </div>
        </div>
      </div>
    </Link>
  )
}
