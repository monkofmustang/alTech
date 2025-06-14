import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { ArrowRight, Cpu, Code, Zap, BarChart, Globe, Layers, MessageSquare, Shield, LightbulbIcon } from "lucide-react"

export default function Services() {
  return (
    <main className="min-h-screen flex flex-col">
      <Navbar />

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 md:pt-40 md:pb-32 overflow-hidden">
        <div className="glow left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">Our Services</h1>
            <p className="text-xl text-foreground/80 mb-8 max-w-2xl mx-auto">
              Fast, reliable, and affordable AI-powered software development services.
            </p>
          </div>
        </div>
      </section>

      {/* Main Services Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Core Services</h2>
            <p className="text-xl text-foreground/80 max-w-2xl mx-auto">
              Our flagship services combine AI and human expertise to deliver exceptional results.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {/* Rapid Prototyping */}
            <div className="bg-background p-8 rounded-xl border border-border/20">
              <div className="w-12 h-12 bg-primary/20 rounded-full flex items-center justify-center mb-6">
                <Zap className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-2xl font-bold mb-3">Rapid Prototyping</h3>
              <p className="text-foreground/80 mb-6">
                Turn your ideas into functional prototypes in just 90 hours. Our AI-accelerated development process
                allows us to quickly build and iterate on your concept.
              </p>
              <ul className="space-y-2 mb-8">
                <li className="flex items-start">
                  <ArrowRight className="h-5 w-5 text-primary mr-2 flex-shrink-0 mt-0.5" />
                  <span>Functional MVP in 90 hours</span>
                </li>
                <li className="flex items-start">
                  <ArrowRight className="h-5 w-5 text-primary mr-2 flex-shrink-0 mt-0.5" />
                  <span>AI-assisted design and development</span>
                </li>
              </ul>
              <Button asChild variant="outline">
                <Link href="/services/rapid-prototyping">
                  Learn More <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </div>

            {/* Custom Software */}
            <div className="bg-background p-8 rounded-xl border border-border/20">
              <div className="w-12 h-12 bg-primary/20 rounded-full flex items-center justify-center mb-6">
                <Code className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-2xl font-bold mb-3">Custom Software</h3>
              <p className="text-foreground/80 mb-6">
                We build tailored software solutions that perfectly match your business needs. Our AI-powered
                development process ensures faster delivery and higher quality.
              </p>
              <ul className="space-y-2 mb-8">
                <li className="flex items-start">
                  <ArrowRight className="h-5 w-5 text-primary mr-2 flex-shrink-0 mt-0.5" />
                  <span>Web and mobile applications</span>
                </li>
                <li className="flex items-start">
                  <ArrowRight className="h-5 w-5 text-primary mr-2 flex-shrink-0 mt-0.5" />
                  <span>3x faster development cycles</span>
                </li>
              </ul>
              <Button asChild variant="outline">
                <Link href="/services/custom-software">
                  Learn More <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </div>

            {/* AI Consulting - NEW */}
            <div className="bg-background p-8 rounded-xl border border-border/20">
              <div className="w-12 h-12 bg-primary/20 rounded-full flex items-center justify-center mb-6">
                <LightbulbIcon className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-2xl font-bold mb-3">AI Consulting</h3>
              <p className="text-foreground/80 mb-6">
                Strategic guidance to help your business leverage the power of artificial intelligence. We help you
                develop and implement effective AI strategies.
              </p>
              <ul className="space-y-2 mb-8">
                <li className="flex items-start">
                  <ArrowRight className="h-5 w-5 text-primary mr-2 flex-shrink-0 mt-0.5" />
                  <span>AI strategy development</span>
                </li>
                <li className="flex items-start">
                  <ArrowRight className="h-5 w-5 text-primary mr-2 flex-shrink-0 mt-0.5" />
                  <span>Implementation roadmaps</span>
                </li>
              </ul>
              <Button asChild variant="outline">
                <Link href="/services/ai-consulting">
                  Learn More <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* AI Services Section */}
      <section className="py-20 bg-secondary/10">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">AI Services</h2>
            <p className="text-xl text-foreground/80 max-w-2xl mx-auto">
              Cutting-edge AI solutions to transform your business.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-background p-8 rounded-xl border border-border/20">
              <div className="w-12 h-12 bg-primary/20 rounded-full flex items-center justify-center mb-6">
                <Cpu className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-xl font-bold mb-3">AI Integration</h3>
              <p className="text-foreground/80">
                We integrate advanced AI capabilities into your existing systems and applications, enhancing their
                functionality and intelligence without requiring a complete rebuild.
              </p>
            </div>

            <div className="bg-background p-8 rounded-xl border border-border/20">
              <div className="w-12 h-12 bg-primary/20 rounded-full flex items-center justify-center mb-6">
                <BarChart className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-xl font-bold mb-3">Predictive Analytics</h3>
              <p className="text-foreground/80">
                Our AI-powered analytics solutions help you anticipate market trends, customer behavior, and business
                opportunities, giving you a competitive edge.
              </p>
            </div>

            <div className="bg-background p-8 rounded-xl border border-border/20">
              <div className="w-12 h-12 bg-primary/20 rounded-full flex items-center justify-center mb-6">
                <MessageSquare className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-xl font-bold mb-3">Conversational AI</h3>
              <p className="text-foreground/80">
                We build sophisticated chatbots and virtual assistants that can understand natural language, learn from
                interactions, and provide human-like support to your customers.
              </p>
            </div>

            <div className="bg-background p-8 rounded-xl border border-border/20">
              <div className="w-12 h-12 bg-primary/20 rounded-full flex items-center justify-center mb-6">
                <Layers className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-xl font-bold mb-3">Machine Learning Models</h3>
              <p className="text-foreground/80">
                We develop custom machine learning models trained on your specific data to solve unique business
                challenges and uncover valuable insights.
              </p>
            </div>

            <div className="bg-background p-8 rounded-xl border border-border/20">
              <div className="w-12 h-12 bg-primary/20 rounded-full flex items-center justify-center mb-6">
                <Globe className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-xl font-bold mb-3">AI Agents</h3>
              <p className="text-foreground/80">
                We create intelligent agents that can automate complex tasks, make decisions, and continuously learn and
                improve over time.
              </p>
            </div>

            <div className="bg-background p-8 rounded-xl border border-border/20">
              <div className="w-12 h-12 bg-primary/20 rounded-full flex items-center justify-center mb-6">
                <Shield className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-xl font-bold mb-3">AI Ethics & Governance</h3>
              <p className="text-foreground/80">
                We help you develop ethical AI practices and governance frameworks to ensure responsible and compliant
                use of artificial intelligence.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">Why Choose Our AI Services</h2>
              <p className="text-lg text-foreground/80 mb-8">
                Our unique approach combines cutting-edge AI with human expertise to deliver exceptional results.
              </p>

              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="w-12 h-12 bg-primary/20 rounded-full flex items-center justify-center mr-4 flex-shrink-0">
                    <Zap className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2">Fast</h3>
                    <p className="text-foreground/80">
                      Our AI-powered development process is 3x faster than traditional methods, getting your product to
                      market quicker.
                    </p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="w-12 h-12 bg-primary/20 rounded-full flex items-center justify-center mr-4 flex-shrink-0">
                    <Shield className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2">Reliable</h3>
                    <p className="text-foreground/80">
                      Our AI testing and quality assurance processes result in 60% fewer bugs and more stable software.
                    </p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="w-12 h-12 bg-primary/20 rounded-full flex items-center justify-center mr-4 flex-shrink-0">
                    <Layers className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2">Affordable</h3>
                    <p className="text-foreground/80">
                      Our Nepal-based team and AI-assisted development allow us to offer world-class quality at
                      competitive prices.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="relative">
              <div className="aspect-square bg-primary/20 rounded-2xl overflow-hidden flex items-center justify-center">
                <Cpu className="h-32 w-32 text-primary/60" />
              </div>
              <div className="absolute -bottom-8 -right-8 bg-background p-6 rounded-xl border border-border/20 shadow-lg">
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-primary/20 rounded-full flex items-center justify-center">
                    <Zap className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <p className="font-bold">AI-Powered</p>
                    <p className="text-primary font-bold">Development</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-primary/10">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to transform your business with AI?</h2>
            <p className="text-xl text-foreground/80 mb-8">
              Let's discuss how our AI-powered services can help you achieve your goals.
            </p>
            <Button asChild size="lg" className="rounded-full px-8">
              <Link href="/contact">
                Get Started <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
