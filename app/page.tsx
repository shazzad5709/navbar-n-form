'use client'
import Register from '@/components/auth-forms/Register'
import Navbar from '@/components/navigation/Navbar'
import { useState, useEffect } from 'react'

export default function Home() {
  const [scrolled, setScrolled] = useState(false)
  const changeNavbar = () => {
    if (window.scrollY >= 1) {
      setScrolled(true)
      console.log('scrolled')
    } else {
      setScrolled(false)
    }
  }

  useEffect(() => {
    window.addEventListener("scroll", changeNavbar)
  }, [])
  return (
    <div className='bg-black h-[200vh]'>
      <Navbar scrolled={scrolled} />
    </div>
    // <main className="flex min-h-screen flex-col py-24 px-8 md:px-32">
    //   <p className='uppercase font-light text-sm min-[1920px]:text-lg'>Personal Details</p>
    //   <Register /> 
    // </main>
  )
}
