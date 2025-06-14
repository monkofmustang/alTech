import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { ArrowRight, Clock, Zap, CheckCircle, Lightbulb, Code, Repeat } from "lucide-react"

export default function RapidPrototyping() {
  return (
    <main className="min-h-screen flex flex-col">
      <Navbar />

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 md:pt-40 md:pb-32 overflow-hidden">
        <div className="glow left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              MVP Development in <span className="text-primary">90 Hours</span>
            </h1>
            <p className="text-xl text-foreground/80 mb-8 max-w-2xl mx-auto">
              Launch faster, iterate sooner, and beat your competition to market with our AI-accelerated development
              process.
            </p>
            <Button asChild size="lg" className="rounded-full px-8">
              <Link href="/contact">
                Start Your Prototype <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Overview Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">Why Rapid Prototyping?</h2>
              <p className="text-lg text-foreground/80 mb-6">
                In today's fast-paced business environment, speed to market can make the difference between success and
                failure. Our rapid prototyping service allows you to:
              </p>

              <div className="space-y-4">
                <div className="flex items-start">
                  <CheckCircle className="h-6 w-6 text-primary mr-3 mt-0.5 flex-shrink-0" />
                  <p className="text-foreground/80">Validate your ideas quickly with real users</p>
                </div>
                <div className="flex items-start">
                  <CheckCircle className="h-6 w-6 text-primary mr-3 mt-0.5 flex-shrink-0" />
                  <p className="text-foreground/80">
                    Secure funding with a tangible product to demonstrate to investors
                  </p>
                </div>
                <div className="flex items-start">
                  <CheckCircle className="h-6 w-6 text-primary mr-3 mt-0.5 flex-shrink-0" />
                  <p className="text-foreground/80">Iterate quickly based on real feedback</p>
                </div>
                <div className="flex items-start">
                  <CheckCircle className="h-6 w-6 text-primary mr-3 mt-0.5 flex-shrink-0" />
                  <p className="text-foreground/80">Minimize risk by testing assumptions before full development</p>
                </div>
              </div>
            </div>

            <div className="relative">
              <div className="aspect-square bg-primary/20 rounded-2xl overflow-hidden flex items-center justify-center">
                <Zap className="h-32 w-32 text-primary/60" />
              </div>
              <div className="absolute -bottom-8 -left-8 bg-background p-6 rounded-xl border-2 border-primary shadow-lg">
                <div className="flex items-center space-x-4">
                  <div className="w-16 h-16 bg-primary/20 rounded-full flex items-center justify-center">
                    <Clock className="h-8 w-8 text-primary" />
                  </div>
                  <div>
                    <p className="font-bold text-lg">Prototype Ready</p>
                    <p className="text-primary font-bold text-2xl">In Just 90 Hours</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 bg-secondary/10">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Rapid Prototyping Process</h2>
            <p className="text-xl text-foreground/80 max-w-2xl mx-auto">
              How we deliver a functional prototype in just 90 hours.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-background p-8 rounded-xl border border-border/20">
              <div className="w-12 h-12 bg-primary/20 rounded-full flex items-center justify-center mb-6">
                <Lightbulb className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-xl font-bold mb-3">1. Discovery (24 hours)</h3>
              <p className="text-foreground/80">
                We start with a deep dive into your idea, understanding your goals, target users, and key features. Our
                AI systems analyze similar products and help identify the optimal approach.
              </p>
            </div>

            <div className="bg-background p-8 rounded-xl border border-border/20">
              <div className="w-12 h-12 bg-primary/20 rounded-full flex items-center justify-center mb-6">
                <Code className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-xl font-bold mb-3">2. Development (48 hours)</h3>
              <p className="text-foreground/80">
                Our developers work alongside AI tools to rapidly build your prototype, focusing on core functionality
                and user experience. We use AI-assisted coding to accelerate development without sacrificing quality.
              </p>
            </div>

            <div className="bg-background p-8 rounded-xl border border-border/20">
              <div className="w-12 h-12 bg-primary/20 rounded-full flex items-center justify-center mb-6">
                <Repeat className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-xl font-bold mb-3">3. Refinement (18 hours)</h3>
              <p className="text-foreground/80">
                We test the prototype, fix issues, and make refinements to ensure it meets your requirements and
                provides a smooth user experience. Our AI testing tools help identify and resolve potential problems
                quickly.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
            <div className="order-2 md:order-1">
              <div className="aspect-video bg-primary/20 rounded-2xl overflow-hidden flex items-center justify-center">
                <Code className="h-32 w-32 text-primary/60" />
              </div>
            </div>

            <div className="order-1 md:order-2">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">What's Included</h2>
              <p className="text-lg text-foreground/80 mb-6">
                Our rapid prototyping service delivers everything you need to validate your idea and move forward with
                confidence.
              </p>

              <div className="space-y-4">
                <div className="flex items-start">
                  <CheckCircle className="h-6 w-6 text-primary mr-3 mt-0.5 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold">Functional Core Features</h3>
                    <p className="text-foreground/80">
                      We implement the most important features that demonstrate your product's value proposition.
                    </p>
                  </div>
                </div>

                <div className="flex items-start">
                  <CheckCircle className="h-6 w-6 text-primary mr-3 mt-0.5 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold">User Interface</h3>
                    <p className="text-foreground/80">
                      A clean, intuitive interface that allows users to interact with your product effectively.
                    </p>
                  </div>
                </div>

                <div className="flex items-start">
                  <CheckCircle className="h-6 w-6 text-primary mr-3 mt-0.5 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold">Basic Backend Infrastructure</h3>
                    <p className="text-foreground/80">
                      Essential server-side components to support your prototype's functionality.
                    </p>
                  </div>
                </div>

                <div className="flex items-start">
                  <CheckCircle className="h-6 w-6 text-primary mr-3 mt-0.5 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold">Development Documentation</h3>
                    <p className="text-foreground/80">
                      Clear documentation of the prototype's architecture and components for future development.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Use Cases Section */}
      <section className="py-20 bg-secondary/10">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Ideal Use Cases</h2>
            <p className="text-xl text-foreground/80 max-w-2xl mx-auto">
              Our rapid prototyping service is perfect for:
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-background p-8 rounded-xl border border-border/20">
              <h3 className="text-xl font-bold mb-3">Startups</h3>
              <p className="text-foreground/80">
                Validate your business idea quickly and attract investors with a working prototype.
              </p>
            </div>

            <div className="bg-background p-8 rounded-xl border border-border/20">
              <h3 className="text-xl font-bold mb-3">New Product Features</h3>
              <p className="text-foreground/80">
                Test new features with real users before committing to full development.
              </p>
            </div>

            <div className="bg-background p-8 rounded-xl border border-border/20">
              <h3 className="text-xl font-bold mb-3">Innovation Projects</h3>
              <p className="text-foreground/80">
                Quickly explore new ideas and concepts within established organizations.
              </p>
            </div>

            <div className="bg-background p-8 rounded-xl border border-border/20">
              <h3 className="text-xl font-bold mb-3">Proof of Concepts</h3>
              <p className="text-foreground/80">
                Demonstrate technical feasibility and potential value of innovative solutions.
              </p>
            </div>

            <div className="bg-background p-8 rounded-xl border border-border/20">
              <h3 className="text-xl font-bold mb-3">MVP Development</h3>
              <p className="text-foreground/80">
                Create a minimum viable product to launch and start gathering real user feedback.
              </p>
            </div>

            <div className="bg-background p-8 rounded-xl border border-border/20">
              <h3 className="text-xl font-bold mb-3">Design Validation</h3>
              <p className="text-foreground/80">
                Test user experience and interface designs with a functional implementation.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to bring your idea to life?</h2>
            <p className="text-xl text-foreground/80 mb-8">
              Let's build your prototype in just 90 hours and start your journey to success.
            </p>
            <Button asChild size="lg" className="rounded-full px-8">
              <Link href="/contact">
                Start Your Prototype <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
