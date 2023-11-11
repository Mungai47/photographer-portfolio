import { Unbounded } from 'next/font/google'
import Header from './components/Header'
import Footer from './components/Footer'
import './globals.css'


const unbounded = Unbounded({ subsets: ['latin'] });


export const metadata = {
  title: 'Andrew Gursky photography',
  description: 'Professional photography by Andrew Gurski. Specializing in landscape, portrait, and event photography.',
  keywords: 'Photography, Landscape, Portrait, Event, Professional',
  author: 'Andrew Gursky'
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={unbounded.className}>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );

}
