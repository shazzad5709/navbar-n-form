'use client'
import Register from '@/components/auth-forms/Register'
import Footer from '@/components/navigation/Footer'
import Navbar from '@/components/navigation/Navbar'
import { useState, useEffect, useRef } from 'react'

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
    <div className={`bg-black h-screen ${isMenuOpen && 'overflow-y-hidden max-h-screen'}`}>
      <Navbar scrolled={scrolled} isMenuOpen={isMenuOpen} toggleMenu={toggleMenu} />
      <Footer />
    </div>
    // <main className="flex min-h-screen flex-col py-24 px-8 md:px-32">
    //   <p className='uppercase font-light text-sm min-[1920px]:text-lg'>Personal Details</p>
    //   <Register /> 
    // </main>
  )
}
