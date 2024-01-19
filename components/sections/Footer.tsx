import Image from 'next/image'
import { AiOutlinePlus } from 'react-icons/ai'
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
              <p>Search</p>
            </div>
          </div>
          <div className='flex flex-col text-xs w-1/4'>
            <p className='uppercase tracking-[1px]'>Subscribe to Newsletter</p>
            <div className='pt-8 flex pb-2 border-b border-background justify-between'>
              <p className='text-muted-foreground text-[11px]'>Search by city or postcode</p>
              <p>Search</p>
            </div>
          </div>
        </div>
      </div>
      <div className='flex justify-center border-y border-zinc-600 mt-8 text-background uppercase gap-4 px-8 py-4 text-xs'>
        <div>Services</div>
        <div>Order Tracking</div>
        <div>Returns</div>
        <div className='flex gap-2'>
          <p>Customer Care</p>
          <AiOutlinePlus className='text-sm text-muted-foreground pt-0.5' />
        </div>
        <div className='flex gap-2'>
          <p>Legal Area</p>
          <AiOutlinePlus className='text-sm text-muted-foreground pt-0.5' />
        </div>
        <div className='flex gap-2'>
          <p>Corporate</p>
          <AiOutlinePlus className='text-sm text-muted-foreground pt-0.5' />
        </div>
        <div className='flex gap-2'>
          <p>Follow us</p>
          <AiOutlinePlus className='text-sm text-muted-foreground pt-0.5' />
        </div>
      </div>
    </div>
  )
}