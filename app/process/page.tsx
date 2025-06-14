import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { ArrowRight, Lightbulb, Cpu, Zap, CheckCircle } from "lucide-react"

export default function Process() {
  return (
    <main className="min-h-screen flex flex-col">
      <Navbar />

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 md:pt-40 md:pb-32 overflow-hidden">
        <div className="glow left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">Our AI-Powered Development Process</h1>
            <p className="text-xl text-foreground/80 mb-8 max-w-2xl mx-auto">
              How we deliver market-ready MVPs in days, not months, with our unique blend of AI and human expertise.
            </p>
          </div>
        </div>
      </section>

      {/* Process Timeline */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="space-y-24">
              {/* Step 1 */}
              <div className="relative">
                <div className="absolute left-0 top-0 bottom-0 w-px bg-border/40 ml-6 md:ml-8"></div>
                <div className="flex">
                  <div className="flex-shrink-0 relative z-10">
                    <div className="w-12 h-12 md:w-16 md:h-16 bg-primary/20 rounded-full flex items-center justify-center border-4 border-background">
                      <Lightbulb className="h-6 w-6 md:h-8 md:w-8 text-primary" />
                    </div>
                  </div>
                  <div className="ml-8 md:ml-12">
                    <h3 className="text-2xl md:text-3xl font-bold mb-4">Discovery & Planning</h3>
                    <p className="text-lg text-foreground/80 mb-6">
                      We start by understanding your vision and requirements. Our AI systems analyze similar projects
                      and help create an optimal architecture and development plan.
                    </p>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
                      <div className="bg-background p-6 rounded-xl border border-border/20">
                        <h4 className="font-semibold mb-2 flex items-center">
                          <CheckCircle className="h-5 w-5 text-primary mr-2" />
                          AI-Powered Requirements Analysis
                        </h4>
                        <p className="text-foreground/80">
                          Our AI analyzes your requirements and suggests optimal solutions based on successful patterns.
                        </p>
                      </div>
                      <div className="bg-background p-6 rounded-xl border border-border/20">
                        <h4 className="font-semibold mb-2 flex items-center">
                          <CheckCircle className="h-5 w-5 text-primary mr-2" />
                          Intelligent Resource Allocation
                        </h4>
                        <p className="text-foreground/80">
                          AI helps us assign the right team members to each task based on expertise and availability.
                        </p>
                      </div>
                    </div>
                    <p className="mt-6 text-primary font-medium">Timeline: 1-2 days</p>
                  </div>
                </div>
              </div>

              {/* Step 2 */}
              <div className="relative">
                <div className="absolute left-0 top-0 bottom-0 w-px bg-border/40 ml-6 md:ml-8"></div>
                <div className="flex">
                  <div className="flex-shrink-0 relative z-10">
                    <div className="w-12 h-12 md:w-16 md:h-16 bg-primary/20 rounded-full flex items-center justify-center border-4 border-background">
                      <Cpu className="h-6 w-6 md:h-8 md:w-8 text-primary" />
                    </div>
                  </div>
                  <div className="ml-8 md:ml-12">
                    <h3 className="text-2xl md:text-3xl font-bold mb-4">AI-Assisted Development</h3>
                    <p className="text-lg text-foreground/80 mb-6">
                      Our developers work alongside AI tools that accelerate coding, identify potential issues, and
                      suggest optimizations in real-time.
                    </p>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
                      <div className="bg-background p-6 rounded-xl border border-border/20">
                        <h4 className="font-semibold mb-2 flex items-center">
                          <CheckCircle className="h-5 w-5 text-primary mr-2" />
                          AI Code Generation & Assistance
                        </h4>
                        <p className="text-foreground/80">
                          Our AI tools help generate boilerplate code and suggest optimizations for complex logic.
                        </p>
                      </div>
                      <div className="bg-background p-6 rounded-xl border border-border/20">
                        <h4 className="font-semibold mb-2 flex items-center">
                          <CheckCircle className="h-5 w-5 text-primary mr-2" />
                          Automated Testing & QA
                        </h4>
                        <p className="text-foreground/80">
                          AI-powered testing identifies bugs and edge cases that might be missed in traditional testing.
                        </p>
                      </div>
                    </div>
                    <p className="mt-6 text-primary font-medium">Timeline: 3-4 days</p>
                  </div>
                </div>
              </div>

              {/* Step 3 */}
              <div className="relative">
                <div className="flex">
                  <div className="flex-shrink-0 relative z-10">
                    <div className="w-12 h-12 md:w-16 md:h-16 bg-primary/20 rounded-full flex items-center justify-center border-4 border-background">
                      <Zap className="h-6 w-6 md:h-8 md:w-8 text-primary" />
                    </div>
                  </div>
                  <div className="ml-8 md:ml-12">
                    <h3 className="text-2xl md:text-3xl font-bold mb-4">Rapid Prototyping</h3>
                    <p className="text-lg text-foreground/80 mb-6">
                      Within 90 hours, we deliver a functional prototype that demonstrates your core features and allows
                      for early feedback and iteration.
                    </p>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
                      <div className="bg-background p-6 rounded-xl border border-border/20">
                        <h4 className="font-semibold mb-2 flex items-center">
                          <CheckCircle className="h-5 w-5 text-primary mr-2" />
                          Functional Core Features
                        </h4>
                        <p className="text-foreground/80">
                          We focus on implementing the most critical features first to demonstrate value quickly.
                        </p>
                      </div>
                      <div className="bg-background p-6 rounded-xl border border-border/20">
                        <h4 className="font-semibold mb-2 flex items-center">
                          <CheckCircle className="h-5 w-5 text-primary mr-2" />
                          Early Feedback Loop
                        </h4>
                        <p className="text-foreground/80">
                          Get hands-on with your product early and provide feedback that shapes the final solution.
                        </p>
                      </div>
                    </div>
                    <p className="mt-6 text-primary font-medium">Timeline: 90 hours from project start</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-secondary/10">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Process By The Numbers</h2>
            <p className="text-xl text-foreground/80 max-w-2xl mx-auto">
              Our AI-powered approach delivers measurable advantages over traditional development methods.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-background p-8 rounded-xl border border-border/20 text-center">
              <div className="text-5xl font-bold text-primary mb-2">3x</div>
              <p className="text-xl">Faster Development</p>
            </div>

            <div className="bg-background p-8 rounded-xl border border-border/20 text-center">
              <div className="text-5xl font-bold text-primary mb-2">90</div>
              <p className="text-xl">Hours to Prototype</p>
            </div>

            <div className="bg-background p-8 rounded-xl border border-border/20 text-center">
              <div className="text-5xl font-bold text-primary mb-2">60%</div>
              <p className="text-xl">Fewer Bugs</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to experience our AI-powered development?</h2>
            <p className="text-xl text-foreground/80 mb-8">
              Let's discuss how we can bring your idea to life with our rapid, AI-driven approach.
            </p>
            <Button asChild size="lg" className="rounded-full px-8">
              <Link href="/contact">
                Book a Discovery Call <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
