import Link from "next/link"

type Props = {}

export default function Collections({ }: Props) {
  const collections = [
    {
      src: '/collections/hero1.jpg',
      alt: 'collection1',
      name: 'Modern',
    },
    {
      src: '/collections/hero2.jpg',
      alt: 'collection2',
      name: 'Classic',
    },
    {
      src: '/collections/hero3.jpg',
      alt: 'collection2',
      name: 'Casual',
    },
  ]

  return (
    <div className='p-16 flex flex-col gap-16'>
      {collections.map((_, i) => (
        <div className='relative w-full h-auto rounded-md'>
          <img
            key={i}
            src={_.src}
            alt={_.alt}
            className="rounded-md"
          />
          <Link href='/' className="uppercase font-semibold text-background xl:text-xl tracking-[1px] px-2 py-1 border-background border-b-2 absolute bottom-1/4 left-[15%]">{_.name}</Link>
        </div>
      ))}
    </div>
  )
}