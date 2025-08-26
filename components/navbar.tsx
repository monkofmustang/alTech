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
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <span className="text-foreground/80 hover:text-primary transition-colors cursor-pointer select-none">Services</span>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="start">
            <DropdownMenuItem asChild>
                <Link href="/services/ai-consulting"> Software Consulting</Link>
              </DropdownMenuItem>
              <DropdownMenuItem asChild>
                <Link href="/services/ai-development">AI Development</Link>
              </DropdownMenuItem>
              <DropdownMenuItem asChild>
                <Link href="/services/rapid-prototyping">Rapid Prototyping</Link>
              </DropdownMenuItem>
              <DropdownMenuItem asChild>
                <Link href="/services/custom-software">Custom Software</Link>
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
          <Button asChild>
            <Link href="/contact">Contact Us</Link>
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
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <span className="text-foreground/80 hover:text-primary transition-colors cursor-pointer select-none py-2" onClick={() => setIsMenuOpen(false)}>Services</span>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="start">
                <DropdownMenuItem asChild>
                  <Link href="/services/ai-development" onClick={() => setIsMenuOpen(false)}>AI Development</Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <Link href="/services/ai-consulting" onClick={() => setIsMenuOpen(false)}>AI Consulting</Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <Link href="/services/rapid-prototyping" onClick={() => setIsMenuOpen(false)}>Rapid Prototyping</Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <Link href="/services/custom-software" onClick={() => setIsMenuOpen(false)}>Custom Software</Link>
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
            <Button asChild className="w-full">
              <Link href="/contact" onClick={() => setIsMenuOpen(false)}>
                Contact Us
              </Link>
            </Button>
          </div>
        </div>
      )}
    </nav>
  )
}
