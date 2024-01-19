import type { Metadata } from 'next'
import './globals.css'
import { Poppins } from 'next/font/google';
import Footer from '@/components/sections/Footer';

const poppins = Poppins({
  weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'],
  variable: '--font-poppins',
  subsets: ['latin-ext'],
})

export const metadata: Metadata = {
  title: '',
  description: '',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`${poppins.variable} font-sans`}>
        {children}
      </body>
    </html>
  )
}
