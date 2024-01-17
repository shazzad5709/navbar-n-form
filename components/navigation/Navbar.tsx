'use client';

import Link from 'next/link';
import { BsBag, BsSearch } from "react-icons/bs";
import { RiUserLine } from "react-icons/ri";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";
import { IoChevronForward } from "react-icons/io5";

type Props = {
  scrolled: boolean;
  isMenuOpen: boolean;
  toggleMenu: () => void;
};

export default function Navbar({ scrolled, isMenuOpen, toggleMenu }: Props) {
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
    { name: 'Gifts', href: '/' },
  ];

  const active = 'border-b-2 group-hover:border-black pb-1';
  const scroll = 'bg-background text-black ease-in-out duration-75';
  const unscroll = 'bg-transparent text-background ease-in-out';

  return (
    <>
      {!isMenuOpen ?
        <>
          <div className={`group sticky flex-col top-0 w-full text-xs hidden lg:flex justify-center pb-4 hover:bg-background hover:text-black ${scrolled ? scroll : unscroll}`}>
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
                  <p className='hover:border-black hover:border-b-2 pb-1'>Search</p>
                </Link>
                {rightNavItems.map((item, index) => (
                  <Link href={item.href} key={index} className='hover:border-black hover:border-b-2 pb-1'>
                    {item.name}
                  </Link>
                ))}
                <Link href='/' className='pb-1'><BsBag className='text-lg pb-1' /></Link>
              </div>
            </div>
            <div className='flex flex-col w-full items-center space-y-4'>
              {scrolled ?
                <div className='text-4xl space-x-3'>
                  <span className='absolute'>D</span>
                  <span>G</span>
                </div>
                :
                <div className='text-8xl uppercase font-bold'>DOLCE<span className='text-5xl font-bold px-4'>&</span>GABBANA</div>}
              <div className='flex space-x-6'>
                {centerNavItems.map((item, index) => (
                  <Link href={item.href} key={index} className='uppercase hover:border-black hover:border-b-2 pb-1'>
                    {item.name}
                  </Link>
                ))}
              </div>
            </div>
          </div><div className={`sticky flex top-0 px-4 justify-between w-full pt-6 pb-2 lg:hidden ${scrolled ? scroll : unscroll}`}>
            <div className='text-2xl uppercase font-bold'>DOLCE<span className='text-sm font-bold px-1'>&</span>GABBANA</div>
            <div className='flex gap-x-2'>
              <Link href='/'><RiUserLine className='text-2xl' /></Link>
              <Link href='/'><BsBag className='text-2xl' /></Link>
              <AiOutlineMenu className='text-2xl hover:cursor-pointer' onClick={toggleMenu} />
            </div>
          </div>
        </>
        :
        <div className='bg-background h-screen flex-col items-center px-4 pt-6'>
          <div className='flex justify-between w-full'>
            <div className='text-2xl uppercase font-bold'>DOLCE<span className='text-sm font-bold px-1'>&</span>GABBANA</div>
            <AiOutlineClose onClick={toggleMenu} className='text-2xl hover:cursor-pointer' />
          </div>
          <div className='w-full flex justify-center pt-8 pl-8'>
            <BsSearch className='text-lg' />
            <div className='w-full flex justify-center'>
              <p className='text-sm tracking-[0.5px] pr-8'>Product search...</p>
            </div>
          </div>
          <div className='w-full border-b border-foreground pt-2'></div>
          <div className='mt-12 flex flex-col gap-4'>
            {centerNavItems.map((item, index) => (
              <Link href={item.href} key={index} className='uppercase text-foreground tracking-[0.5px]'>
                <div className='flex justify-between'>
                  <p>{item.name}</p>
                  <IoChevronForward className='text-2xl' />
                </div>
              </Link>
            ))}
          </div>
        </div>
      }
    </>
  );
}
