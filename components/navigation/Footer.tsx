
type Props = {}

export default function Footer({ }: Props) {
  return (
    <>
      <div className='flex flex-col items-center pt-6 text-background border-t border-zinc-600 px-8'>
        <div className='text-2xl uppercase'>
          DOLCE<span className='text-xs px-1'>&</span>GABBANA
        </div>
        <div className='flex w-full justify-between pt-4'>
          <div className='flex flex-col text-xs w-1/4'>
            <p className='uppercase tracking-[1px]'>Store Locator</p>
            <p className='pt-2'>Enter a location to find the nearest DG Stores</p>
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
      <div className='flex justify-between pt-2 text-background border-y border-zinc-600 mt-8'>

      </div>
    </>
  )
}