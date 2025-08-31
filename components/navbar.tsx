"use client"

import Link from "next/link"
import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Menu, X } from "lucide-react"
import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuItem
} from "@/components/ui/dropdown-menu"

export function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border/20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-3 sm:py-4 flex items-center justify-between">
        <Link href="/" className="flex items-center space-x-2 touch-manipulation">
          <span className="text-lg sm:text-xl font-bold text-primary">ALGENTECH</span>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-6 lg:space-x-8">
          <Link href="/process" className="text-sm lg:text-base text-foreground/80 hover:text-primary transition-colors touch-manipulation">
            Process
          </Link>
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <span className="text-sm lg:text-base text-foreground/80 hover:text-primary transition-colors cursor-pointer select-none touch-manipulation">Services</span>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="start">
            <DropdownMenuItem asChild>
                <Link href="/services/ai-consulting">IT Consulting & Advisory</Link>
              </DropdownMenuItem>
              <DropdownMenuItem asChild>
                <Link href="/services/ai-development">Managed Services</Link>
              </DropdownMenuItem>
              <DropdownMenuItem asChild>
                <Link href="/services/rapid-prototyping">AI & Cloud Transformation</Link>
              </DropdownMenuItem>
              <DropdownMenuItem asChild>
                <Link href="/services/custom-software">Resource Augmentation</Link>
              </DropdownMenuItem>
              <DropdownMenuItem asChild>
                <Link href="/comparison">Why Choose Us</Link>
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
          {/* Careers section temporarily hidden
          <Link href="/careers" className="text-foreground/80 hover:text-primary transition-colors">
            Careers
          </Link>
          */}
          {/* Team section temporarily hidden
          <Link href="/team" className="text-foreground/80 hover:text-primary transition-colors">
            Team
          </Link>
          */}
          <Button asChild size="sm" className="touch-manipulation">
            <Link href="/contact" className="text-sm lg:text-base">Contact Us</Link>
          </Button>
        </div>

        {/* Mobile Menu Button */}
        <button 
          className="md:hidden text-foreground p-2 -mr-2 touch-manipulation" 
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
        >
          {isMenuOpen ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="md:hidden bg-background/95 backdrop-blur-md border-t border-border/20">
          <div className="container mx-auto px-4 sm:px-6 py-4 flex flex-col space-y-3">
            <Link
              href="/process"
              className="text-foreground/80 hover:text-primary transition-colors py-3 text-base touch-manipulation"
              onClick={() => setIsMenuOpen(false)}
            >
              Process
            </Link>
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <span className="text-foreground/80 hover:text-primary transition-colors cursor-pointer select-none py-3 text-base touch-manipulation" onClick={() => setIsMenuOpen(false)}>Services</span>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="start">
                <DropdownMenuItem asChild>
                  <Link href="/services/ai-development" onClick={() => setIsMenuOpen(false)}>Managed Services</Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <Link href="/services/ai-consulting" onClick={() => setIsMenuOpen(false)}>IT Consulting & Advisory</Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <Link href="/services/rapid-prototyping" onClick={() => setIsMenuOpen(false)}>AI & Cloud Transformation</Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <Link href="/services/custom-software" onClick={() => setIsMenuOpen(false)}>Resource Augmentation</Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <Link href="/comparison" onClick={() => setIsMenuOpen(false)}>Why Choose Us</Link>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
            {/* Careers section temporarily hidden
            <Link
              href="/careers"
              className="text-foreground/80 hover:text-primary transition-colors py-2"
              onClick={() => setIsMenuOpen(false)}
            >
              Careers
            </Link>
            */}
            {/* Team section temporarily hidden
            <Link
              href="/team"
              className="text-foreground/80 hover:text-primary transition-colors py-2"
              onClick={() => setIsMenuOpen(false)}
            >
              Team
            </Link>
            */}
            <Button asChild className="w-full mt-2 touch-manipulation">
              <Link href="/contact" onClick={() => setIsMenuOpen(false)} className="text-base py-3">
                Contact Us
              </Link>
            </Button>
          </div>
        </div>
      )}
    </nav>
  )
}
