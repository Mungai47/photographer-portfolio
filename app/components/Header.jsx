"use client"
import Link from "next/link";
import { useState } from "react";
import { ImCancelCircle } from 'react-icons/im';
import { TiThMenu } from 'react-icons/ti';
import { AnimatePresence, motion } from 'framer-motion';

const NavigationLink = ({href, children, onClick}) => (
  <Link href={href}>
    <li className="hover:text-link-active" onClick={onClick}>
      {children}
    </li>  
  </Link>
)

// Desktop screen menubar

const Navigation = ({isMobile = false, closeMenu}) => (
  <>
    <NavigationLink href="/" onClick={isMobile ? closeMenu : null}>Home</NavigationLink>
    <NavigationLink href="/gallery" onClick={isMobile ? closeMenu : null}>Gallery</NavigationLink>
    <NavigationLink href="/services" onClick={isMobile ? closeMenu : null}>Services</NavigationLink>
    <NavigationLink href="/about" onClick={isMobile ? closeMenu : null}>About</NavigationLink>
    <NavigationLink href="/contact" onClick={isMobile ? closeMenu : null}>Contact</NavigationLink>
  </>
)

// Mobile and Tablet screen menubar

const MobileNavigation = ({isMobile = false, closeMenu}) => (
  <div className="w-4/5 h-48  absolute text-start top-20 right-0  bg-[#253440] text-pale-text py-5 grid grid-cols-1 grid-rows-5 gap-3 divide-y z-30">
    <NavigationLink href="/" onClick={isMobile ? closeMenu : null} >Home</NavigationLink>
    <NavigationLink href="/gallery" onClick={isMobile ? closeMenu : null} >Gallery</NavigationLink>
    <NavigationLink href="/services" onClick={isMobile ? closeMenu : null} >Services</NavigationLink>
    <NavigationLink href="/about" onClick={isMobile ? closeMenu : null} >About</NavigationLink>
    <NavigationLink href="/contact" onClick={isMobile ? closeMenu : null} >Contact</NavigationLink>    
  </div>
)

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const closeMenu = () => setIsMenuOpen(false);

  return (
    <header className="text-pale-text">
      <div className="w-4/5 mx-auto flex justify-between items-center py-4">
        <nav className="text-center">
          <Link href="/">            
            <h1 className="">Andrew Gursky</h1>
            <p className="text-sm font-light">Photographer</p>            
          </Link>
        </nav>
        <div className="hidden lg:block">
          <ul className="flex gap-5 items-center">
            <Navigation />
          </ul>          
        </div>
        <div className="lg:hidden">
          <div onClick={() => setIsMenuOpen(!isMenuOpen)}>
            {isMenuOpen ? <ImCancelCircle className="text-3xl" /> : <TiThMenu className="text-3xl" />} 
            <AnimatePresence>
              {isMenuOpen && (
                <motion.ul initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
                  <MobileNavigation isMobile={true} closeMenu={closeMenu} />
                </motion.ul>
              )}
            </AnimatePresence>         
          </div>
        </div>
      </div>
    </header>
  )
}

export default Header
