import Image from 'next/image'
import { useEffect, useState } from 'react'
type Props = {}

export default function Hero({ }: Props) {
  const heroImages = [
    {
      src: '/hero/hero2.jpg',
      alt: 'hero2',
    },
    {
      src: '/hero/hero1.jpg',
      alt: 'hero1',
    },
    {
      src: '/hero/hero3.jpg',
      alt: 'hero3',
    }
  ]

  const [index, setIndex] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((index) => (index + 1) % heroImages.length)
    }, 2000)
    
    return () => clearInterval(interval)
  }, [])


  return (
    <div className='flex h-screen bg-background text-foreground'>
      <div key={index} className='absolute w-full h-screen'>
        <img
          src={heroImages[index].src}
          alt={heroImages[index].alt}
        />
      </div>
    </div>
  )
}