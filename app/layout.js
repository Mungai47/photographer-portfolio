import { Unbounded } from 'next/font/google'
import './globals.css'

const unbounded = Unbounded({ subsets: ['latin'] })

export const metadata = {
  title: 'Create Next Ap',
  description: 'Generated by create next app',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={unbounded.className}>{children}</body>
    </html>
  )
}
