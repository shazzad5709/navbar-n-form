'use client';

import Link from 'next/link';
import { BsBag, BsSearch } from "react-icons/bs";

type Props = {
  scrolled: boolean;
};

export default function Navbar({ scrolled }: Props) {
  const leftNavItems = [
    { name: 'Fashion', href: '/', active: true },
    { name: 'Beauty', href: '/', active: false },
    { name: 'Casa', href: '/', active: false },
    { name: 'Food&Beverage', href: '/', active: false },
    { name: 'World', href: '/', active: false },
    { name: 'Alta Moda', href: '/', active: false },
  ];

  const rightNavItems = [
    { name: 'Store Locator', href: '/' },
    { name: 'Login', href: '/' },
  ];

  const centerNavItems = [
    { name: 'Runway', href: '/' },
    { name: 'Women', href: '/' },
    { name: 'Men', href: '/' },
    { name: 'DGVIB3', href: '/' },
    { name: 'Children', href: '/' },
    { name: 'Gift', href: '/' },
  ];

  const active = 'border-b-2 group-hover:border-black pb-1';
  const scroll = 'bg-background text-black ease-in-out duration-75';
  const unscroll = 'bg-transparent text-background ease-in-out';
  
  return (
    <>
      <div className={`group sticky flex-col top-0 w-full text-xs flex justify-center pb-4 hover:bg-background hover:text-black ${scrolled? scroll: unscroll}`}>
        <div className='flex w-full px-8 py-6 justify-between'>
          <div className='space-x-6'>
            {leftNavItems.map((item, index) => (
              <Link href={item.href} key={index} className={`hover:border-black hover:border-b-2 pb-1 ${item.active ? active : ''}`}>
                {item.name}
              </Link>
            ))}
          </div>
          <div className='flex space-x-6'>
            <Link href='/' className='flex gap-2'>
              <BsSearch className='text-lg' />
              Search
            </Link>
            {rightNavItems.map((item, index) => (
              <Link href={item.href} key={index} className='hover:border-black hover:border-b-2 pb-1'>
                {item.name}
              </Link>
            ))}
            <BsBag className='text-lg' />
          </div>
        </div>
        <div className='flex flex-col w-full items-center space-y-4'>
          {scrolled ?
            <div className='text-4xl space-x-3'>
              <span className='absolute'>D</span>
              <span>G</span>
            </div>
            :
            <div className='text-8xl uppercase font-bold'>DOLCE<span className='text-5xl font-bold px-4'>&</span>GABBANA</div>
          }
          <div className='flex space-x-6'>
            {centerNavItems.map((item, index) => (
              <Link href={item.href} key={index} className='uppercase hover:border-black hover:border-b-2 pb-1'>
                {item.name}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
