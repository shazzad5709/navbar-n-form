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
    { name: 'Fashion', href: '/fashion', active: true },
    { name: 'Beauty', href: '/beauty', active: false },
    { name: 'Lifestyle', href: '/lifestyle', active: false },
    { name: 'Blogs', href: '/blogs', active: false },
    { name: 'New & Fresh', href: '/new-fresh', active: false },
    { name: 'My Style', href: '/my-style', active: false },
  ];

  const rightNavItems = [
    { name: 'Store Locator', href: '/store-locator' },
    { name: 'Login', href: '/login' },
  ];

  const centerNavItems = [
    { name: 'Bags', href: '/shop' },
    { name: 'Women', href: '/shop' },
    { name: 'Men', href: '/shop' },
    { name: 'Trending', href: '/shop' },
    { name: 'Children', href: '/shop' },
    { name: 'Gifts', href: '/shop' },
  ];

  const active = 'border-b-2 group-hover:border-black pb-1';
  const scroll = 'bg-background text-black ease-in-out duration-75';
  const unscroll = 'bg-transparent text-background ease-in-out';
  const activeScroll = 'border-b-2 group-hover:border-black pb-1 border-black';

  return (
    <>
      {!isMenuOpen ?
        <>
          <div className={`group z-10 fixed flex-col top-0 w-full text-xs hidden lg:flex justify-center pb-4 hover:bg-background hover:text-black ${scrolled ? scroll : unscroll}`}>
            <div className='flex w-full px-8 py-6 justify-between'>
              <div className='space-x-6'>
                {leftNavItems.map((item, index) => (
                  <Link href={item.href} key={index} className={`hover:border-black hover:border-b-2 pb-1 ${item.active ? (scrolled ? activeScroll : active) : ''}`}>
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
            <div className='flex flex-col w-full items-center gap-4'>
              {scrolled ?
                <div>
                  <img
                    src='/Just_R_Black.png'
                    alt='Riche Rich'
                    width={25}
                    height={25}
                  />
                </div>
                :
                <div>
                  <img
                    src='/Richie_Rich_White_Logo.png'
                    alt='Riche Rich'
                    width={150}
                    height={150}

                    className='group-hover:hidden' />
                  <img
                    src='/Richie_Rich_Black_Logo.png'
                    alt='Riche Rich'
                    width={150}
                    height={150}
                    className='hidden group-hover:block' />
                </div>
              }
              <div className='flex space-x-6'>
                {centerNavItems.map((item, index) => (
                  <Link href={item.href} key={index} className='uppercase border-b-2 border-transparent hover:border-black pb-1'>
                    {item.name}
                  </Link>
                ))}
              </div>
            </div>
          </div>
          <div className={`fixed z-10 flex top-0 px-6 justify-between w-full pt-6 pb-2 lg:hidden ${scrolled ? scroll : unscroll}`}>
            {scrolled ?
              <div>
                <img
                  src='/Richie_Rich_Black_Logo.png'
                  alt='Riche Rich'
                  width={150}
                  height={150}
                />
              </div>
              :
              <div>
                <img
                  src='/Richie_Rich_White_Logo.png'
                  alt='Riche Rich'
                  width={150}
                  height={150}

                  className='group-hover:hidden' />
                <img
                  src='/Richie_Rich_Black_Logo.png'
                  alt='Riche Rich'
                  width={150}
                  height={150}

                  className='hidden group-hover:block' />
              </div>
            }
            <div className='flex gap-x-2'>
              <Link href='/login'><RiUserLine className='text-2xl' /></Link>
              <Link href='/'><BsBag className='text-2xl' /></Link>
              <AiOutlineMenu className='text-2xl hover:cursor-pointer' onClick={toggleMenu} />
            </div>
          </div>
        </>
        :
        <div className='bg-background h-screen flex-col items-center px-8 pt-6'>
          <div className='flex justify-between w-full'>
            <img
              src='/Richie_Rich_Black_Logo.png'
              alt='Riche Rich'
              width={150}
              height={150}
            />
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
