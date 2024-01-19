import Link from "next/link"

type Props = {}

export default function Hero({ }: Props) {
  const heroImages = [
    {
      src: '/hero/women.jpg',
      alt: 'hero2',
    },
    {
      src: '/hero/men.jpg',
      alt: 'hero1',
    },
  ]

  // const [index, setIndex] = useState(0)

  // useEffect(() => {
  //   const interval = setInterval(() => {
  //     setIndex((index) => (index + 1) % heroImages.length)
  //   }, 2000)

  //   return () => clearInterval(interval)
  // }, [])


  return (
    <div className='flex w-screen h-screen bg-background text-foreground'>
      {heroImages.map((image, i) => (
        <div key={i} className='relative flex w-1/2 h-auto'>
          <img
            src={image.src}
            alt={image.alt}
            className='inset-0 object-cover w-full h-auto' />
          <Link href='/' className="text-background font-semibold xl:text-xl tracking-[1px] px-2 py-1 border-background border-b-2 uppercase absolute bottom-1/4 left-[15%]">Shop the Look</Link>
        </div>
      ))}
    </div>
  )
}