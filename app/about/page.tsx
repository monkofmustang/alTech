import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { ArrowRight, Award, Building, Globe, Cpu, Users, Zap } from "lucide-react"

export default function About() {
  return (
    <main className="min-h-screen flex flex-col">
      <Navbar />

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 md:pt-40 md:pb-32 overflow-hidden">
        <div className="glow left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">About ALGENTECH</h1>
            <p className="text-xl text-foreground/80 mb-8 max-w-2xl mx-auto">
              Pioneering AI-driven software development from Nepal to the world.
            </p>
          </div>
        </div>
      </section>

      {/* Our Story Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">Our Story</h2>
              <p className="text-lg text-foreground/80 mb-6">
                Founded in 2021, ALGENTECH began with a simple yet ambitious vision: to harness the power of AI to
                revolutionize software development while putting Nepal on the global tech map.
              </p>
              <p className="text-lg text-foreground/80 mb-6">
                Our founders, a team of AI researchers and experienced developers, recognized that traditional software
                development was too slow, too expensive, and often failed to meet client expectations. They saw an
                opportunity to combine cutting-edge AI with human expertise to create a new approach to building
                software.
              </p>
              <p className="text-lg text-foreground/80">
                Today, ALGENTECH has grown into a team of over 30 professionals serving clients across the globe,
                delivering world-class software at unprecedented speed without compromising on quality.
              </p>
            </div>
            <div className="relative">
              <div className="aspect-video bg-primary/20 rounded-2xl overflow-hidden flex items-center justify-center">
                <Building className="h-32 w-32 text-primary/60" />
              </div>
              <div className="absolute -bottom-8 -left-8 bg-background p-6 rounded-xl border border-border/20 shadow-lg">
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-primary/20 rounded-full flex items-center justify-center">
                    <Award className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <p className="font-bold">Founded</p>
                    <p className="text-primary font-bold">2021</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision Section */}
      <section className="py-20 bg-secondary/10">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
            <div className="bg-background p-8 rounded-xl border border-border/20">
              <h3 className="text-2xl font-bold mb-4">Our Mission</h3>
              <p className="text-foreground/80">
                To democratize access to world-class software development by leveraging AI to make it faster, more
                affordable, and more reliable, while creating opportunities for tech talent in Nepal.
              </p>
            </div>
            <div className="bg-background p-8 rounded-xl border border-border/20">
              <h3 className="text-2xl font-bold mb-4">Our Vision</h3>
              <p className="text-foreground/80">
                To be the global leader in AI-powered software development, known for our ability to turn complex ideas
                into elegant, functional software in record time.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* AI-Driven Projects Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Our AI-Driven Projects</h2>
            <p className="text-xl text-foreground/80 max-w-2xl mx-auto">
              We're pioneering the future of software development with our innovative AI-powered approach.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-background p-8 rounded-xl border border-border/20">
              <div className="w-12 h-12 bg-primary/20 rounded-full flex items-center justify-center mb-6">
                <Cpu className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-xl font-bold mb-3">Intelligent Agents</h3>
              <p className="text-foreground/80">
                We build sophisticated AI agents that can automate complex tasks, analyze data, and make intelligent
                decisions, freeing humans to focus on creative and strategic work.
              </p>
            </div>

            <div className="bg-background p-8 rounded-xl border border-border/20">
              <div className="w-12 h-12 bg-primary/20 rounded-full flex items-center justify-center mb-6">
                <Zap className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-xl font-bold mb-3">Predictive Analytics</h3>
              <p className="text-foreground/80">
                Our AI-powered analytics platforms help businesses anticipate market trends, customer behavior, and
                operational challenges before they happen.
              </p>
            </div>

            <div className="bg-background p-8 rounded-xl border border-border/20">
              <div className="w-12 h-12 bg-primary/20 rounded-full flex items-center justify-center mb-6">
                <Globe className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-xl font-bold mb-3">Smart Automation</h3>
              <p className="text-foreground/80">
                We create custom automation solutions that learn and adapt over time, continuously improving efficiency
                and reducing the need for human intervention.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-8">
            <div className="bg-background p-8 rounded-xl border border-border/20">
              <div className="w-12 h-12 bg-primary/20 rounded-full flex items-center justify-center mb-6">
                <Users className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-xl font-bold mb-3">Conversational Interfaces</h3>
              <p className="text-foreground/80">
                Our natural language processing expertise enables us to build sophisticated chatbots and voice
                assistants that provide human-like interactions and support.
              </p>
            </div>

            <div className="bg-background p-8 rounded-xl border border-border/20">
              <div className="w-12 h-12 bg-primary/20 rounded-full flex items-center justify-center mb-6">
                <Cpu className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-xl font-bold mb-3">Custom AI Solutions</h3>
              <p className="text-foreground/80">
                We develop bespoke AI solutions tailored to specific business challenges, from computer vision systems
                to recommendation engines and beyond.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-secondary/10">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="bg-background p-8 rounded-xl border border-border/20 text-center">
              <div className="text-5xl font-bold text-primary mb-2">30+</div>
              <p className="text-xl">Team Members</p>
            </div>

            <div className="bg-background p-8 rounded-xl border border-border/20 text-center">
              <div className="text-5xl font-bold text-primary mb-2">50+</div>
              <p className="text-xl">Projects Completed</p>
            </div>

            <div className="bg-background p-8 rounded-xl border border-border/20 text-center">
              <div className="text-5xl font-bold text-primary mb-2">15+</div>
              <p className="text-xl">Countries Served</p>
            </div>

            <div className="bg-background p-8 rounded-xl border border-border/20 text-center">
              <div className="text-5xl font-bold text-primary mb-2">90</div>
              <p className="text-xl">Hours to Prototype</p>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Values</h2>
            <p className="text-xl text-foreground/80 max-w-2xl mx-auto">
              The principles that guide everything we do at ALGENTECH.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-background p-8 rounded-xl border border-border/20">
              <h3 className="text-xl font-bold mb-3">Innovation</h3>
              <p className="text-foreground/80">
                We constantly push the boundaries of what's possible with AI and software development.
              </p>
            </div>

            <div className="bg-background p-8 rounded-xl border border-border/20">
              <h3 className="text-xl font-bold mb-3">Excellence</h3>
              <p className="text-foreground/80">
                We're committed to delivering world-class quality in everything we create.
              </p>
            </div>

            <div className="bg-background p-8 rounded-xl border border-border/20">
              <h3 className="text-xl font-bold mb-3">Transparency</h3>
              <p className="text-foreground/80">
                We believe in open communication and keeping our clients informed at every step.
              </p>
            </div>

            <div className="bg-background p-8 rounded-xl border border-border/20">
              <h3 className="text-xl font-bold mb-3">Collaboration</h3>
              <p className="text-foreground/80">We work closely with our clients, treating their goals as our own.</p>
            </div>

            <div className="bg-background p-8 rounded-xl border border-border/20">
              <h3 className="text-xl font-bold mb-3">Responsibility</h3>
              <p className="text-foreground/80">We develop AI with ethical considerations at the forefront.</p>
            </div>

            <div className="bg-background p-8 rounded-xl border border-border/20">
              <h3 className="text-xl font-bold mb-3">Empowerment</h3>
              <p className="text-foreground/80">
                We're committed to developing tech talent in Nepal and creating opportunities.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-primary/10">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to work with us?</h2>
            <p className="text-xl text-foreground/80 mb-8">
              Let's discuss how our AI-powered development can bring your vision to life.
            </p>
            <Button asChild size="lg" className="rounded-full px-8">
              <Link href="/contact">
                Get in Touch <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
