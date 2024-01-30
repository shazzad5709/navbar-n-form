'use client'
import Register from '@/components/auth-forms/Register'
import Footer from '@/components/sections/Footer'
import Navbar from '@/components/navigation/Navbar'
import { useState, useEffect, useRef } from 'react'
import Hero from '@/components/sections/Hero'
import Collections from '@/components/sections/Collections'

export default function Home() {
  const [scrolled, setScrolled] = useState(false)
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const prevWidth = useRef(0)

  const changeNavbar = () => {
    if (window.scrollY >= 1) {
      setScrolled(true)
      console.log('scrolled')
    } else {
      setScrolled(false)
    }
  }


  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  useEffect(() => {

    const handleWidthChange = () => {
      const currWidth = window.innerWidth

      if (prevWidth.current < 1024 && currWidth >= 1024) {
        setIsMenuOpen(false)
      }

      prevWidth.current = currWidth
    }

    window.addEventListener("scroll", changeNavbar)
    window.addEventListener("resize", handleWidthChange)

    return () => {
      window.removeEventListener("scroll", changeNavbar)
      window.removeEventListener("resize", handleWidthChange)
    }
  }, [])

  return (
    <main className={`bg-background overflow-x-hidden ${isMenuOpen && 'overflow-y-hidden max-h-screen'}`}>
      <div className='flex flex-col'>
        <Navbar scrolled={scrolled} isMenuOpen={isMenuOpen} toggleMenu={toggleMenu} />
        <Hero />
        <Collections />
        <Footer />
      </div>
    </main>
  )
}
