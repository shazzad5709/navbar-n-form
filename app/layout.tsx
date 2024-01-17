import type { Metadata } from 'next'
import './globals.css'
import localFont from 'next/font/local';

const futura = localFont({
  src: './FuturaLTProBook.otf',
  display: 'swap',
  variable: '--font-futura',
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
      <body className={`${futura.variable} font-sans`}>{children}</body>
    </html>
  )
}
