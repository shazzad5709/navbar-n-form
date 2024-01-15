import Register from '@/components/Register'
import Image from 'next/image'

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col py-24 px-8">
      <p className='uppercase font-light text-sm'>Personal Details</p>
      <Register /> 
    </main>
  )
}
