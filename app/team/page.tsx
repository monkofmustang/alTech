import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { ArrowRight, Github, Linkedin, Twitter } from "lucide-react"

export default function Team() {
  return (
    <main className="min-h-screen flex flex-col">
      <Navbar />

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 md:pt-40 md:pb-32 overflow-hidden">
        <div className="glow left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">Meet Our Team</h1>
            <p className="text-xl text-foreground/80 mb-8 max-w-2xl mx-auto">
              A diverse group of experts combining AI knowledge with deep technical expertise.
            </p>
          </div>
        </div>
      </section>

      {/* Team Members */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Team Member 1 */}
            <div className="bg-background p-8 rounded-xl border border-border/20">
              <div className="aspect-square bg-secondary/30 rounded-full w-40 h-40 mx-auto mb-6 overflow-hidden">
                <img
                  src="/placeholder.svg?height=160&width=160"
                  alt="Team member"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="text-center">
                <h3 className="text-xl font-bold mb-1">Aarav Sharma</h3>
                <p className="text-primary mb-4">Founder & CEO</p>
                <p className="text-foreground/80 mb-6">
                  AI researcher with 10+ years of experience building innovative software solutions.
                </p>
                <div className="flex justify-center space-x-4">
                  <a href="#" className="text-foreground/60 hover:text-primary transition-colors">
                    <Linkedin className="h-5 w-5" />
                  </a>
                  <a href="#" className="text-foreground/60 hover:text-primary transition-colors">
                    <Twitter className="h-5 w-5" />
                  </a>
                  <a href="#" className="text-foreground/60 hover:text-primary transition-colors">
                    <Github className="h-5 w-5" />
                  </a>
                </div>
              </div>
            </div>

            {/* Team Member 2 */}
            <div className="bg-background p-8 rounded-xl border border-border/20">
              <div className="aspect-square bg-secondary/30 rounded-full w-40 h-40 mx-auto mb-6 overflow-hidden">
                <img
                  src="/placeholder.svg?height=160&width=160"
                  alt="Team member"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="text-center">
                <h3 className="text-xl font-bold mb-1">Priya Patel</h3>
                <p className="text-primary mb-4">CTO</p>
                <p className="text-foreground/80 mb-6">
                  Machine learning expert specializing in AI infrastructure and scalable systems.
                </p>
                <div className="flex justify-center space-x-4">
                  <a href="#" className="text-foreground/60 hover:text-primary transition-colors">
                    <Linkedin className="h-5 w-5" />
                  </a>
                  <a href="#" className="text-foreground/60 hover:text-primary transition-colors">
                    <Twitter className="h-5 w-5" />
                  </a>
                  <a href="#" className="text-foreground/60 hover:text-primary transition-colors">
                    <Github className="h-5 w-5" />
                  </a>
                </div>
              </div>
            </div>

            {/* Team Member 3 */}
            <div className="bg-background p-8 rounded-xl border border-border/20">
              <div className="aspect-square bg-secondary/30 rounded-full w-40 h-40 mx-auto mb-6 overflow-hidden">
                <img
                  src="/placeholder.svg?height=160&width=160"
                  alt="Team member"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="text-center">
                <h3 className="text-xl font-bold mb-1">Rohan Thapa</h3>
                <p className="text-primary mb-4">Lead Developer</p>
                <p className="text-foreground/80 mb-6">
                  Full-stack developer with expertise in building complex, scalable applications.
                </p>
                <div className="flex justify-center space-x-4">
                  <a href="#" className="text-foreground/60 hover:text-primary transition-colors">
                    <Linkedin className="h-5 w-5" />
                  </a>
                  <a href="#" className="text-foreground/60 hover:text-primary transition-colors">
                    <Twitter className="h-5 w-5" />
                  </a>
                  <a href="#" className="text-foreground/60 hover:text-primary transition-colors">
                    <Github className="h-5 w-5" />
                  </a>
                </div>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-8">
            {/* Team Member 4 */}
            <div className="bg-background p-8 rounded-xl border border-border/20">
              <div className="aspect-square bg-secondary/30 rounded-full w-40 h-40 mx-auto mb-6 overflow-hidden">
                <img
                  src="/placeholder.svg?height=160&width=160"
                  alt="Team member"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="text-center">
                <h3 className="text-xl font-bold mb-1">Maya Gurung</h3>
                <p className="text-primary mb-4">UX/UI Designer</p>
                <p className="text-foreground/80 mb-6">
                  Designer with a passion for creating intuitive, beautiful user experiences.
                </p>
                <div className="flex justify-center space-x-4">
                  <a href="#" className="text-foreground/60 hover:text-primary transition-colors">
                    <Linkedin className="h-5 w-5" />
                  </a>
                  <a href="#" className="text-foreground/60 hover:text-primary transition-colors">
                    <Twitter className="h-5 w-5" />
                  </a>
                </div>
              </div>
            </div>

            {/* Team Member 5 */}
            <div className="bg-background p-8 rounded-xl border border-border/20">
              <div className="aspect-square bg-secondary/30 rounded-full w-40 h-40 mx-auto mb-6 overflow-hidden">
                <img
                  src="/placeholder.svg?height=160&width=160"
                  alt="Team member"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="text-center">
                <h3 className="text-xl font-bold mb-1">Anish KC</h3>
                <p className="text-primary mb-4">AI Engineer</p>
                <p className="text-foreground/80 mb-6">
                  Specialist in natural language processing and machine learning algorithms.
                </p>
                <div className="flex justify-center space-x-4">
                  <a href="#" className="text-foreground/60 hover:text-primary transition-colors">
                    <Linkedin className="h-5 w-5" />
                  </a>
                  <a href="#" className="text-foreground/60 hover:text-primary transition-colors">
                    <Github className="h-5 w-5" />
                  </a>
                </div>
              </div>
            </div>

            {/* Team Member 6 */}
            <div className="bg-background p-8 rounded-xl border border-border/20">
              <div className="aspect-square bg-secondary/30 rounded-full w-40 h-40 mx-auto mb-6 overflow-hidden">
                <img
                  src="/placeholder.svg?height=160&width=160"
                  alt="Team member"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="text-center">
                <h3 className="text-xl font-bold mb-1">Sita Rai</h3>
                <p className="text-primary mb-4">Project Manager</p>
                <p className="text-foreground/80 mb-6">
                  Experienced in managing complex software projects with agile methodologies.
                </p>
                <div className="flex justify-center space-x-4">
                  <a href="#" className="text-foreground/60 hover:text-primary transition-colors">
                    <Linkedin className="h-5 w-5" />
                  </a>
                  <a href="#" className="text-foreground/60 hover:text-primary transition-colors">
                    <Twitter className="h-5 w-5" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Join Us Section */}
      <section className="py-20 bg-secondary/10">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Join Our Team</h2>
            <p className="text-xl text-foreground/80 mb-8">
              We're always looking for talented individuals who are passionate about AI and software development.
            </p>
            <Button asChild size="lg" className="rounded-full px-8">
              <Link href="/careers">
                View Open Positions <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
