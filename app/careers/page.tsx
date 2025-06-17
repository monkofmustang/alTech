import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { ArrowRight, Briefcase, Users, Zap } from "lucide-react"

export default function Careers() {
  return (
    <main className="min-h-screen flex flex-col">
      <Navbar />

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 md:pt-40 md:pb-32 overflow-hidden">
        <div className="glow left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">Join Our Team</h1>
            <p className="text-xl text-foreground/80 mb-8 max-w-2xl mx-auto">
              Be part of a team that's shaping the future of AI-powered software development.
            </p>
          </div>
        </div>
      </section>

      {/* Why Join Us Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Why Join ALGENTECH?</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-background p-8 rounded-xl border border-border/20">
              <div className="w-12 h-12 bg-primary/20 rounded-full flex items-center justify-center mb-6">
                <Zap className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-xl font-bold mb-4">Innovation First</h3>
              <p className="text-foreground/80">
                Work on cutting-edge AI technologies and be at the forefront of software development innovation.
              </p>
            </div>
            <div className="bg-background p-8 rounded-xl border border-border/20">
              <div className="w-12 h-12 bg-primary/20 rounded-full flex items-center justify-center mb-6">
                <Users className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-xl font-bold mb-4">Great Culture</h3>
              <p className="text-foreground/80">
                Join a diverse team of passionate individuals in a collaborative and supportive environment.
              </p>
            </div>
            <div className="bg-background p-8 rounded-xl border border-border/20">
              <div className="w-12 h-12 bg-primary/20 rounded-full flex items-center justify-center mb-6">
                <Briefcase className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-xl font-bold mb-4">Growth Opportunities</h3>
              <p className="text-foreground/80">
                Continuous learning and career development opportunities to help you reach your full potential.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Open Positions Section */}
      <section className="py-20 bg-primary/5">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Open Positions</h2>
          <div className="max-w-3xl mx-auto space-y-6">
            <div className="bg-background p-6 rounded-xl border border-border/20">
              <h3 className="text-xl font-bold mb-2">Senior AI Engineer</h3>
              <p className="text-foreground/80 mb-4">
                Join our AI team to develop and implement cutting-edge machine learning solutions.
              </p>
              <div className="flex flex-wrap gap-2 mb-4">
                <span className="px-3 py-1 bg-primary/10 rounded-full text-sm">Full-time</span>
                <span className="px-3 py-1 bg-primary/10 rounded-full text-sm">Remote</span>
                <span className="px-3 py-1 bg-primary/10 rounded-full text-sm">Bangalore/Nepal</span>
              </div>
              <Button asChild>
                <Link href="/contact">
                  Apply Now <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </div>

            <div className="bg-background p-6 rounded-xl border border-border/20">
              <h3 className="text-xl font-bold mb-2">Full Stack Developer</h3>
              <p className="text-foreground/80 mb-4">
                Build scalable web applications using modern technologies and best practices.
              </p>
              <div className="flex flex-wrap gap-2 mb-4">
                <span className="px-3 py-1 bg-primary/10 rounded-full text-sm">Full-time</span>
                <span className="px-3 py-1 bg-primary/10 rounded-full text-sm">Remote</span>
                <span className="px-3 py-1 bg-primary/10 rounded-full text-sm">Bangalore/Nepal</span>
              </div>
              <Button asChild>
                <Link href="/contact">
                  Apply Now <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </div>

            <div className="bg-background p-6 rounded-xl border border-border/20">
              <h3 className="text-xl font-bold mb-2">AI Research Intern</h3>
              <p className="text-foreground/80 mb-4">
                Work on exciting AI research projects and contribute to our innovative solutions.
              </p>
              <div className="flex flex-wrap gap-2 mb-4">
                <span className="px-3 py-1 bg-primary/10 rounded-full text-sm">Internship</span>
                <span className="px-3 py-1 bg-primary/10 rounded-full text-sm">Remote</span>
                <span className="px-3 py-1 bg-primary/10 rounded-full text-sm">Bangalore/Nepal</span>
              </div>
              <Button asChild>
                <Link href="/contact">
                  Apply Now <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Don't see the right role?</h2>
            <p className="text-xl text-foreground/80 mb-8">
              We're always looking for talented individuals. Send us your resume and we'll keep you in mind for future opportunities.
            </p>
            <Button asChild size="lg" className="rounded-full px-8">
              <Link href="/contact">
                Send Your Resume <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
} 