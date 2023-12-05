import Footer from '@/components/Footer/Footer'
import './globals.css'
import type { Metadata } from 'next'
import { Poppins } from 'next/font/google'
import Navbar from '@/components/Navbar/Navbar'

const poppins = Poppins({ subsets: ['latin'], weight: ['400', '700'] })

export const metadata: Metadata = {
  title: 'E-Commerce',
  description: 'E-Commerce Website',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang='en'>
      <body className={`${poppins.className} text-slate-700`}>
        <div className='flex flex-col min-h-screen'>
          <Navbar />
          <main className='flex-grow'>{children}</main>
          <Footer />
        </div>
      </body>
    </html>
  )
}
