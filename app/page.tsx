import Register from '@/components/auth-forms/Register'

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col py-24 px-8 md:px-32">
      <p className='uppercase font-light text-sm min-[1920px]:text-lg'>Personal Details</p>
      <Register /> 
    </main>
  )
}
