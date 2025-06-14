"use client"

import Link from "next/link"
import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Menu, X } from "lucide-react"

export function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        <Link href="/" className="flex items-center space-x-2">
          <span className="text-xl font-bold text-primary">ALGENTECH</span>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-8">
          <Link href="/process" className="text-foreground/80 hover:text-primary transition-colors">
            Process
          </Link>
          <Link href="/team" className="text-foreground/80 hover:text-primary transition-colors">
            Team
          </Link>
          <Link href="/contact" className="text-foreground/80 hover:text-primary transition-colors">
            Contact us
          </Link>
          <Button asChild>
            <Link href="/contact">Signup</Link>
          </Button>
        </div>

        {/* Mobile Menu Button */}
        <button className="md:hidden text-foreground" onClick={() => setIsMenuOpen(!isMenuOpen)}>
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="md:hidden bg-background/95 backdrop-blur-md">
          <div className="container mx-auto px-4 py-4 flex flex-col space-y-4">
            <Link
              href="/process"
              className="text-foreground/80 hover:text-primary transition-colors py-2"
              onClick={() => setIsMenuOpen(false)}
            >
              Process
            </Link>
            <Link
              href="/team"
              className="text-foreground/80 hover:text-primary transition-colors py-2"
              onClick={() => setIsMenuOpen(false)}
            >
              Team
            </Link>
            <Link
              href="/contact"
              className="text-foreground/80 hover:text-primary transition-colors py-2"
              onClick={() => setIsMenuOpen(false)}
            >
              Contact us
            </Link>
            <Button asChild className="w-full">
              <Link href="/contact" onClick={() => setIsMenuOpen(false)}>
                Signup
              </Link>
            </Button>
          </div>
        </div>
      )}
    </nav>
  )
}
