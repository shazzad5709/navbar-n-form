import Image from 'next/image'
import Link from 'next/link'
type Props = {}

export default function Footer({ }: Props) {
  return (
    <div className='relative bg-black'>
      <div className='flex flex-col items-center pt-6 text-background border-t border-zinc-600 px-8'>
        <Image
          src='/Richie_Rich_White_Logo.png'
          alt='Riche Rich'
          width={150}
          height={150}
          priority={true} />
        <div className='flex w-full justify-between pt-4'>
          <div className='flex flex-col text-xs w-1/4'>
            <p className='uppercase tracking-[1px]'>Store Locator</p>
            <p className='pt-2'>Enter a location to find the nearest RR Stores</p>
            <div className='pt-8 flex pb-2 border-b border-background justify-between'>
              <p className='text-muted-foreground text-[11px]'>Search by city or postcode</p>
              <button>Search</button>
            </div>
          </div>
          <div className='flex flex-col text-xs w-1/4'>
            <p className='uppercase tracking-[1px]'>Subscribe to Newsletter</p>
            <div className='pt-8 flex pb-2 border-b border-background justify-between'>
              <p className='text-muted-foreground text-[11px]'>Search by city or postcode</p>
              <button>Subscribe</button>
            </div>
          </div>
        </div>
      </div>
      <div className='flex flex-col sm:flex-row items-center justify-center border-y border-zinc-600 mt-8 text-background uppercase gap-4 px-8 py-4 text-xs'>
        <Link href='/'>Services</Link>
        <Link href='/'>Order Tracking</Link>
        <Link href='/'>Returns</Link>
        <Link href='/'>Customer Care</Link>
        <Link href='/'>Legal Area</Link>
        <Link href='/'>Corporate</Link>
        <Link href='/'>Follow us</Link>
      </div>
    </div>
  )
}