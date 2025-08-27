"use client"

import { useEffect, useRef } from "react"
import Link from "next/link"
import { useRouter } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { ArrowRight, Clock, Globe, Cpu, Zap, Code, CheckCircle, Shield } from "lucide-react"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { BadgeCheck, Star, Trophy, Users2 } from "lucide-react"
import { TypingEffect } from "@/components/typing-effect"

export default function Home() {
  const router = useRouter()

  // Refs for animation elements
  const heroRef = useRef(null)
  const uspRef = useRef(null)
  const featuresRef = useRef(null)
  const comparisonRef = useRef(null)

  // Animation on scroll
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("animate-in")
          }
        })
      },
      { threshold: 0.1 },
    )

    const elements = document.querySelectorAll(".animate-on-scroll")
    elements.forEach((el) => observer.observe(el))

    return () => {
      elements.forEach((el) => observer.unobserve(el))
    }
  }, [])

  // Handle USP card click
  const handleUspClick = (path: string) => {
    router.push(path)
  }

  return (
    <main className="min-h-screen flex flex-col">
      <Navbar />

      {/* Hero Section */}
      <section className="relative pt-24 pb-16 sm:pt-32 sm:pb-20 md:pt-40 md:pb-32 overflow-hidden">
        <div className="glow left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 animate-pulse-slow"></div>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-4xl mx-auto text-center animate-on-scroll px-2" ref={heroRef}>
            <h1 className="text-xl xs:text-2xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 sm:mb-6 animate-fade-in leading-tight break-words">
              <TypingEffect text="Simplify Tech. Amplifying Business." speed={60} />
            </h1>
            <p className="text-lg sm:text-xl text-foreground/80 mb-6 sm:mb-8 max-w-2xl mx-auto animate-fade-in animation-delay-300 px-4 sm:px-0">
              Supercharge your business with AI-powered consulting and software solutions.
            </p>
            <Button
              asChild
              size="lg"
              className="rounded-full px-6 sm:px-8 py-3 sm:py-4 text-base sm:text-lg animate-fade-in animation-delay-500 hover:scale-105 transition-transform w-full sm:w-auto max-w-xs sm:max-w-none mx-auto"
            >
              <Link href="/contact" className="flex items-center justify-center">
                Book a Discovery Call <ArrowRight className="ml-2 h-4 w-4 sm:h-5 sm:w-5" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* USP Highlights Section */}
      <section className="py-12 sm:py-16 bg-secondary/10">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 animate-on-scroll" ref={uspRef}>
            {/* 90-Hour Prototype USP - Now Clickable without Neuron Animations */}
            <div
              onClick={() => handleUspClick("/services/rapid-prototyping")}
              className="bg-background border-2 border-primary rounded-2xl p-4 sm:p-6 shadow-lg hover:shadow-xl transition-all hover:-translate-y-1 cursor-pointer relative group overflow-hidden usp-card-clickable touch-manipulation"
            >
              <div className="absolute inset-0 bg-primary/10 transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left"></div>
              <div className="flex items-center mb-3 sm:mb-4 relative z-10">
                <div className="w-10 h-10 sm:w-12 sm:h-12 bg-primary/20 rounded-full flex items-center justify-center mr-3 sm:mr-4 group-hover:animate-bounce flex-shrink-0">
                  <Clock className="h-5 w-5 sm:h-6 sm:w-6 text-primary" />
                </div>
                <h3 className="text-xl sm:text-2xl font-bold">90 Hours</h3>
              </div>
              <p className="text-sm sm:text-base text-foreground/80 relative z-10">Functional prototype ready in just 90 hours</p>
              <div className="absolute bottom-3 sm:bottom-4 right-3 sm:right-4 opacity-0 group-hover:opacity-100 transition-opacity">
                <ArrowRight className="h-4 w-4 sm:h-5 sm:w-5 text-primary" />
              </div>
            </div>

            {/* 3x Faster Development USP */}
            <div className="bg-background border-2 border-primary/80 rounded-2xl p-4 sm:p-6 shadow-lg hover:shadow-xl transition-all hover:-translate-y-1 cursor-pointer touch-manipulation">
              <div className="flex items-center mb-3 sm:mb-4">
                <div className="w-10 h-10 sm:w-12 sm:h-12 bg-primary/20 rounded-full flex items-center justify-center mr-3 sm:mr-4 flex-shrink-0">
                  <Zap className="h-5 w-5 sm:h-6 sm:w-6 text-primary" />
                </div>
                <h3 className="text-xl sm:text-2xl font-bold">3x Faster</h3>
              </div>
              <p className="text-sm sm:text-base text-foreground/80">Development speed compared to traditional methods</p>
            </div>

            {/* 60% Fewer Bugs USP */}
            <div className="bg-background border-2 border-primary/60 rounded-2xl p-4 sm:p-6 shadow-lg hover:shadow-xl transition-all hover:-translate-y-1 cursor-pointer touch-manipulation">
              <div className="flex items-center mb-3 sm:mb-4">
                <div className="w-10 h-10 sm:w-12 sm:h-12 bg-primary/20 rounded-full flex items-center justify-center mr-3 sm:mr-4 flex-shrink-0">
                  <Shield className="h-5 w-5 sm:h-6 sm:w-6 text-primary" />
                </div>
                <h3 className="text-xl sm:text-2xl font-bold">60% Fewer</h3>
              </div>
              <p className="text-sm sm:text-base text-foreground/80">Bugs than traditional development methods</p>
            </div>

            {/* 40% Cost Savings USP */}
            <div className="bg-background border-2 border-primary/40 rounded-2xl p-4 sm:p-6 shadow-lg hover:shadow-xl transition-all hover:-translate-y-1 cursor-pointer touch-manipulation">
              <div className="flex items-center mb-3 sm:mb-4">
                <div className="w-10 h-10 sm:w-12 sm:h-12 bg-primary/20 rounded-full flex items-center justify-center mr-3 sm:mr-4 flex-shrink-0">
                  <Star className="h-5 w-5 sm:h-6 sm:w-6 text-primary" />
                </div>
                <h3 className="text-xl sm:text-2xl font-bold">40% Savings</h3>
              </div>
              <p className="text-sm sm:text-base text-foreground/80">Lower development and maintenance costs</p>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 sm:py-20 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 sm:mb-16 animate-on-scroll">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-3 sm:mb-4">Why Choose ALGENTECH</h2>
            <p className="text-lg sm:text-xl text-foreground/80 max-w-2xl mx-auto px-4 sm:px-0">
              Our unique approach combines AI infrastructure with human expertise to deliver exceptional results.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8 animate-on-scroll" ref={featuresRef}>
            <div className="bg-background p-6 sm:p-8 rounded-xl border border-border/20 hover:border-primary/50 transition-colors hover:shadow-lg">
              <div className="w-10 h-10 sm:w-12 sm:h-12 bg-primary/20 rounded-full flex items-center justify-center mb-4 sm:mb-6 animate-bounce-slow">
                <Clock className="h-5 w-5 sm:h-6 sm:w-6 text-primary" />
              </div>
              <h3 className="text-lg sm:text-xl font-bold mb-2 sm:mb-3">Rapid Prototyping</h3>
              <p className="text-sm sm:text-base text-foreground/80">
                Get your prototype ready in just 90 hours. We move at startup speed to bring your ideas to life quickly.
              </p>
            </div>

            <div className="bg-background p-6 sm:p-8 rounded-xl border border-border/20 hover:border-primary/50 transition-colors hover:shadow-lg">
              <div className="w-10 h-10 sm:w-12 sm:h-12 bg-primary/20 rounded-full flex items-center justify-center mb-4 sm:mb-6 animate-bounce-slow animation-delay-300">
                <Cpu className="h-5 w-5 sm:h-6 sm:w-6 text-primary" />
              </div>
              <h3 className="text-lg sm:text-xl font-bold mb-2 sm:mb-3">AI Infrastructure</h3>
              <p className="text-sm sm:text-base text-foreground/80">
                Our AI-powered development process accelerates delivery while maintaining world-class quality standards.
              </p>
            </div>

            <div className="bg-background p-6 sm:p-8 rounded-xl border border-border/20 hover:border-primary/50 transition-colors hover:shadow-lg">
              <div className="w-10 h-10 sm:w-12 sm:h-12 bg-primary/20 rounded-full flex items-center justify-center mb-4 sm:mb-6 animate-bounce-slow animation-delay-600">
                <Globe className="h-5 w-5 sm:h-6 sm:w-6 text-primary" />
              </div>
              <h3 className="text-lg sm:text-xl font-bold mb-2 sm:mb-3">Global Reach</h3>
              <p className="text-sm sm:text-base text-foreground/80">
                Based in Nepal, we serve clients worldwide with the perfect blend of technical excellence and cost
                efficiency.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Comparison Section */}
      <section className="py-16 sm:py-20 bg-secondary/5">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 sm:mb-16 animate-on-scroll">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-3 sm:mb-4">How We Compare</h2>
            <p className="text-lg sm:text-xl text-foreground/80 max-w-2xl mx-auto px-4 sm:px-0">
              See why ALGENTECH outperforms traditional development agencies and freelancers.
            </p>
          </div>

          <div className="overflow-x-auto animate-on-scroll" ref={comparisonRef}>
            <div className="min-w-[600px] sm:min-w-0">
            <Table className="w-full">
              <TableHeader>
                <TableRow>
                  <TableHead className="w-1/4 text-sm sm:text-base">Features</TableHead>
                  <TableHead className="w-1/4 text-center">
                    <div className="flex flex-col items-center">
                      <Trophy className="h-5 w-5 sm:h-6 sm:w-6 text-primary mb-1 sm:mb-2 animate-pulse-slow" />
                      <span className="font-bold text-xs sm:text-sm">ALGENTECH</span>
                    </div>
                  </TableHead>
                  <TableHead className="w-1/4 text-center text-xs sm:text-sm">Traditional Agencies</TableHead>
                  <TableHead className="w-1/4 text-center text-xs sm:text-sm">Freelancers</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                <TableRow>
                  <TableCell className="font-medium text-sm sm:text-base">Development Speed</TableCell>
                  <TableCell className="text-center">
                    <span className="inline-flex items-center px-2 sm:px-3 py-1 rounded-full text-2xs sm:text-xs font-medium bg-primary/20 text-primary">
                      3x Faster
                    </span>
                  </TableCell>
                  <TableCell className="text-center text-sm sm:text-base">Standard</TableCell>
                  <TableCell className="text-center text-sm sm:text-base">Varies</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell className="font-medium text-sm sm:text-base">Prototype Delivery</TableCell>
                  <TableCell className="text-center text-sm sm:text-base">90 Hours</TableCell>
                  <TableCell className="text-center text-sm sm:text-base">2-4 Weeks</TableCell>
                  <TableCell className="text-center text-sm sm:text-base">1-3 Weeks</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell className="font-medium text-sm sm:text-base">AI-Powered Development</TableCell>
                  <TableCell className="text-center">
                    <CheckCircle className="h-4 w-4 sm:h-5 sm:w-5 text-primary mx-auto" />
                  </TableCell>
                  <TableCell className="text-center text-sm sm:text-base">Rarely</TableCell>
                  <TableCell className="text-center text-sm sm:text-base">No</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell className="font-medium text-sm sm:text-base">Quality Assurance</TableCell>
                  <TableCell className="text-center">
                    <span className="inline-flex items-center px-2 sm:px-3 py-1 rounded-full text-2xs sm:text-xs font-medium bg-primary/20 text-primary">
                      AI + Human
                    </span>
                  </TableCell>
                  <TableCell className="text-center text-sm sm:text-base">Manual Testing</TableCell>
                  <TableCell className="text-center text-sm sm:text-base">Limited</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell className="font-medium text-sm sm:text-base">Cost Efficiency</TableCell>
                  <TableCell className="text-center text-sm sm:text-base">High</TableCell>
                  <TableCell className="text-center text-sm sm:text-base">Low</TableCell>
                  <TableCell className="text-center text-sm sm:text-base">Medium</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell className="font-medium text-sm sm:text-base">Team Size</TableCell>
                  <TableCell className="text-center text-sm sm:text-base">Full Team</TableCell>
                  <TableCell className="text-center text-sm sm:text-base">Large Team</TableCell>
                  <TableCell className="text-center text-sm sm:text-base">Individual</TableCell>
                </TableRow>
              </TableBody>
            </Table>
            </div>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 bg-secondary/10">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
            <div className="animate-on-scroll">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">Our AI-Driven Development Process</h2>
              <p className="text-xl text-foreground/80 mb-8">
                We've reimagined software development by integrating AI at every step, making it faster, more efficient,
                and more reliable.
              </p>

              <div className="space-y-6">
                <div className="flex items-start hover:translate-x-2 transition-transform">
                  <div className="mr-4 mt-1">
                    <CheckCircle className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2">AI-Powered Planning</h3>
                    <p className="text-foreground/80">
                      Our AI analyzes your requirements and helps create optimal project architectures.
                    </p>
                  </div>
                </div>

                <div className="flex items-start hover:translate-x-2 transition-transform">
                  <div className="mr-4 mt-1">
                    <CheckCircle className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2">Accelerated Development</h3>
                    <p className="text-foreground/80">
                      AI-assisted coding and automation tools help us build features 3x faster.
                    </p>
                  </div>
                </div>

                <div className="flex items-start hover:translate-x-2 transition-transform">
                  <div className="mr-4 mt-1">
                    <CheckCircle className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2">Quality Assurance</h3>
                    <p className="text-foreground/80">
                      AI-powered testing and code review ensure high-quality, bug-free software.
                    </p>
                  </div>
                </div>
              </div>

              <div className="mt-10">
                <Button asChild variant="outline" size="lg" className="hover:bg-primary/10 transition-colors">
                  <Link href="/process">
                    Learn More About Our Process <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </div>
            </div>

            <div className="relative">
              <div className="aspect-[4/3] bg-primary/20 rounded-2xl overflow-hidden flex items-center justify-center animate-float">
                <video
                  autoPlay
                  loop
                  muted
                  playsInline
                  className="w-full h-full object-cover rounded-2xl"
                >
                  <source src="/Website_Animation_Video_Generated.mp4" type="video/mp4" />
                </video>
              </div>
              <div className="absolute -bottom-8 -right-8 bg-background p-6 rounded-xl border border-border/20 shadow-lg animate-float animation-delay-500">
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-primary/20 rounded-full flex items-center justify-center">
                    <Zap className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <p className="font-bold">Prototype Ready</p>
                    <p className="text-primary font-bold">In Just 90 Hours</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Partners & Projects Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16 animate-on-scroll">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Partners & Projects</h2>
            <p className="text-xl text-foreground/80 max-w-2xl mx-auto">
              Discover our innovative solutions and successful partnerships that are shaping the future of AI.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 animate-on-scroll">
            <div className="bg-background p-8 rounded-xl border border-border/20 hover:border-primary/50 transition-all hover:shadow-lg group">
              <div className="flex items-start mb-6">
                <div className="w-12 h-12 bg-primary/20 rounded-full flex items-center justify-center mr-4 flex-shrink-0 group-hover:animate-pulse">
                  <Globe className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h3 className="text-2xl font-display font-bold gradient-text mb-2">Algen.ai</h3>
                  <p className="text-foreground/80 mb-4">
                    Our flagship AI platform that's revolutionizing how businesses leverage artificial intelligence.
                  </p>
                  <Button asChild variant="outline" size="sm" className="hover:bg-primary/10 transition-colors">
                    <a href="https://algen.ai/" target="_blank" rel="noopener noreferrer">
                      Visit Platform <ArrowRight className="ml-2 h-4 w-4" />
                    </a>
                  </Button>
                </div>
              </div>
            </div>

            <div className="bg-background p-8 rounded-xl border border-border/20 hover:border-primary/50 transition-all hover:shadow-lg group">
              <div className="flex items-start mb-6">
                <div className="w-12 h-12 bg-primary/20 rounded-full flex items-center justify-center mr-4 flex-shrink-0 group-hover:animate-pulse">
                  <Cpu className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-white mb-2"><span className="text-brand-teal">Marv</span>AI</h3>
                  <p className="text-foreground/80 mb-4">
                    An advanced AI solution that's transforming how organizations interact with artificial intelligence.
                  </p>
                  <Button asChild variant="outline" size="sm" className="hover:bg-primary/10 transition-colors">
                    <a href="https://marvai.algen.ai/" target="_blank" rel="noopener noreferrer">
                      Visit Platform <ArrowRight className="ml-2 h-4 w-4" />
                    </a>
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16 animate-on-scroll">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">The ALGENTECH Advantage</h2>
            <p className="text-xl text-foreground/80 max-w-2xl mx-auto">
              Discover the unique benefits that set us apart from other development companies.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 animate-on-scroll">
            <div className="bg-background p-8 rounded-xl border border-border/20 hover:border-primary/50 transition-all hover:shadow-lg">
              <div className="flex items-start mb-6">
                <div className="w-12 h-12 bg-primary/20 rounded-full flex items-center justify-center mr-4 flex-shrink-0 animate-pulse-slow">
                  <Zap className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2">Accelerated Time-to-Market</h3>
                  <p className="text-foreground/80">
                    Our AI-powered development process delivers projects 3x faster than traditional methods, giving you
                    a competitive edge in your market. Launch sooner, iterate faster, and stay ahead of the competition.
                  </p>
                </div>
              </div>
              <ul className="space-y-2 pl-16">
                <li className="flex items-start">
                  <BadgeCheck className="h-5 w-5 text-primary mr-2 flex-shrink-0" />
                  <span>90-hour prototype delivery</span>
                </li>
                <li className="flex items-start">
                  <BadgeCheck className="h-5 w-5 text-primary mr-2 flex-shrink-0" />
                  <span>Parallel development workflows</span>
                </li>
                <li className="flex items-start">
                  <BadgeCheck className="h-5 w-5 text-primary mr-2 flex-shrink-0" />
                  <span>Automated code generation</span>
                </li>
              </ul>
            </div>

            <div className="bg-background p-8 rounded-xl border border-border/20 hover:border-primary/50 transition-all hover:shadow-lg">
              <div className="flex items-start mb-6">
                <div className="w-12 h-12 bg-primary/20 rounded-full flex items-center justify-center mr-4 flex-shrink-0 animate-pulse-slow animation-delay-300">
                  <Shield className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2">Superior Quality Assurance</h3>
                  <p className="text-foreground/80">
                    Our AI-powered testing and quality assurance processes identify and fix issues that traditional
                    methods might miss, resulting in more stable, reliable software with 60% fewer bugs.
                  </p>
                </div>
              </div>
              <ul className="space-y-2 pl-16">
                <li className="flex items-start">
                  <BadgeCheck className="h-5 w-5 text-primary mr-2 flex-shrink-0" />
                  <span>AI-powered testing</span>
                </li>
                <li className="flex items-start">
                  <BadgeCheck className="h-5 w-5 text-primary mr-2 flex-shrink-0" />
                  <span>Automated edge case detection</span>
                </li>
                <li className="flex items-start">
                  <BadgeCheck className="h-5 w-5 text-primary mr-2 flex-shrink-0" />
                  <span>Continuous integration</span>
                </li>
              </ul>
            </div>

            <div className="bg-background p-8 rounded-xl border border-border/20 hover:border-primary/50 transition-all hover:shadow-lg">
              <div className="flex items-start mb-6">
                <div className="w-12 h-12 bg-primary/20 rounded-full flex items-center justify-center mr-4 flex-shrink-0 animate-pulse-slow animation-delay-600">
                  <Users2 className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2">Expert Team Collaboration</h3>
                  <p className="text-foreground/80">
                    Our team combines AI expertise with deep technical knowledge, ensuring you get the best of both
                    worlds. We work closely with you throughout the process, treating your goals as our own.
                  </p>
                </div>
              </div>
              <ul className="space-y-2 pl-16">
                <li className="flex items-start">
                  <BadgeCheck className="h-5 w-5 text-primary mr-2 flex-shrink-0" />
                  <span>Dedicated project manager</span>
                </li>
                <li className="flex items-start">
                  <BadgeCheck className="h-5 w-5 text-primary mr-2 flex-shrink-0" />
                  <span>Cross-functional expertise</span>
                </li>
                <li className="flex items-start">
                  <BadgeCheck className="h-5 w-5 text-primary mr-2 flex-shrink-0" />
                  <span>Transparent communication</span>
                </li>
              </ul>
            </div>

            <div className="bg-background p-8 rounded-xl border border-border/20 hover:border-primary/50 transition-all hover:shadow-lg">
              <div className="flex items-start mb-6">
                <div className="w-12 h-12 bg-primary/20 rounded-full flex items-center justify-center mr-4 flex-shrink-0 animate-pulse-slow animation-delay-900">
                  <Star className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2">Cost-Effective Excellence</h3>
                  <p className="text-foreground/80">
                    Our Nepal-based team and AI-assisted development allow us to offer world-class quality at
                    competitive prices, giving you exceptional value without compromising on quality or timeline.
                  </p>
                </div>
              </div>
              <ul className="space-y-2 pl-16">
                <li className="flex items-start">
                  <BadgeCheck className="h-5 w-5 text-primary mr-2 flex-shrink-0" />
                  <span>Competitive global rates</span>
                </li>
                <li className="flex items-start">
                  <BadgeCheck className="h-5 w-5 text-primary mr-2 flex-shrink-0" />
                  <span>Reduced development time</span>
                </li>
                <li className="flex items-start">
                  <BadgeCheck className="h-5 w-5 text-primary mr-2 flex-shrink-0" />
                  <span>Lower maintenance costs</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-primary/10">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center animate-on-scroll">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to transform your idea into reality?</h2>
            <p className="text-xl text-foreground/80 mb-8">
              Let's discuss how our AI-powered development can bring your vision to life in record time.
            </p>
            <Button
              asChild
              size="lg"
              className="rounded-full px-8 hover:scale-105 transition-transform animate-pulse-slow"
            >
              <Link href="/contact">
                Start Your Project <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
