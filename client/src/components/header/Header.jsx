import React from 'react'
import { motion } from 'framer-motion'
import { LogOut, User } from 'lucide-react'
import { Button } from "../ui/button"

const navItems = [
  { name: 'Home', href: '/' },
  { name: 'About', href: '/AboutUs' },
  { name: 'Services', href: '/Services' },
  { name: 'Contact', href: '/ContactUs' }
]

export function Header() {
  return (
    <motion.header 
      className="sticky top-0 z-50 w-full border-b bg-gradient-to-r from-gray-900 to-blue-900 text-white"
    //   initial={{ y: -100 }}
    //   animate={{ y: 0 }}
      transition={{ type: "spring", stiffness: 100 }}
    >
      <div className="container mx-auto px-4 py-10">
        <div className="flex h-16 items-center justify-between">
          <motion.div 
            className="text-2xl font-bold"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <a href="/" className="flex items-center gap-2">
              e-PMSSS
            </a>
          </motion.div>

          <nav className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <motion.a
                key={item.name}
                href={item.href}
                className="text-[1.6rem] font-medium transition-colors hover:text-blue-300"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
              >
                {item.name}
              </motion.a>
            ))}
          </nav>

          <div className="flex items-center gap-4">
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Button variant="ghost" size="icon" className="text-white hover:bg-white/20">
                <User className="h-7 w-7" />
                <span className="sr-only">Profile</span>
              </Button>
            </motion.div>
            
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Button variant="ghost" size="icon" className="text-white hover:bg-white/20">
                <LogOut className="h-7 w-7" />
                <span className="sr-only">Logout</span>
              </Button>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Mobile Menu - Appears below header on small screens */}
      <div className="md:hidden border-t border-white/10">
        <nav className="flex flex-col">
          {navItems.map((item) => (
            <a
              key={item.name}
              href={item.href}
              className="px-4 py-2 text-sm hover:bg-white/10 transition-colors"
            >
              {item.name}
            </a>
          ))}
        </nav>
      </div>
    </motion.header>
  )
}

