import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import Image from "next/image"
import { ArrowRight, CheckCircle, LightbulbIcon, TrendingUp, BarChart, Brain, Shield, Users } from "lucide-react"

export default function AIConsulting() {
  return (
    <main className="min-h-screen flex flex-col">
      <Navbar />

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 md:pt-40 md:pb-32 overflow-hidden">
        <div className="glow left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">IT Consulting & Advisory</h1>
            <p className="text-xl text-foreground/80 mb-8 max-w-2xl mx-auto">
              Strategic guidance to help your business leverage technology and artificial intelligence effectively.
            </p>
            <Button asChild size="lg" className="rounded-full px-8">
              <Link href="/contact">
                Book a Consultation <ArrowRight className="ml-2 h-4 w-4" />
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
              <h2 className="text-3xl md:text-4xl font-bold mb-6">Transform Your Business with IT Consulting & Advisory</h2>
              <p className="text-lg text-foreground/80 mb-6">
                Our IT consulting and advisory services help businesses identify opportunities, develop strategies, and implement technology and AI solutions that drive growth, efficiency, and innovation.
              </p>

              <div className="space-y-4">
                <div className="flex items-start">
                  <CheckCircle className="h-6 w-6 text-primary mr-3 mt-0.5 flex-shrink-0" />
                  <p className="text-foreground/80">Expert guidance from IT specialists with industry experience</p>
                </div>
                <div className="flex items-start">
                  <CheckCircle className="h-6 w-6 text-primary mr-3 mt-0.5 flex-shrink-0" />
                  <p className="text-foreground/80">Customized IT roadmaps aligned with your business goals</p>
                </div>
                <div className="flex items-start">
                  <CheckCircle className="h-6 w-6 text-primary mr-3 mt-0.5 flex-shrink-0" />
                  <p className="text-foreground/80">Practical implementation strategies with measurable outcomes</p>
                </div>
                <div className="flex items-start">
                  <CheckCircle className="h-6 w-6 text-primary mr-3 mt-0.5 flex-shrink-0" />
                  <p className="text-foreground/80">Ongoing support to ensure successful IT adoption</p>
                </div>
              </div>
            </div>

            <div className="relative">
              <div className="aspect-square bg-primary/20 rounded-2xl overflow-hidden relative animate-float">
                <Image src="/consulting.png" alt="IT Consulting & Advisory" fill className="object-cover" priority />
              </div>
              <div className="absolute -bottom-8 -right-8 bg-background p-6 rounded-xl border border-border/20 shadow-lg">
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-primary/20 rounded-full flex items-center justify-center">
                    <LightbulbIcon className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <p className="font-bold">Strategic</p>
                    <p className="text-primary font-bold">IT Guidance</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-secondary/10">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Our IT Consulting & Advisory Services</h2>
            <p className="text-xl text-foreground/80 max-w-2xl mx-auto">
              Comprehensive consulting and advisory services to guide your technology and AI journey from strategy to implementation.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-background p-8 rounded-xl border border-border/20">
              <div className="w-12 h-12 bg-primary/20 rounded-full flex items-center justify-center mb-6">
                <LightbulbIcon className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-xl font-bold mb-3">IT Strategy Development</h3>
              <p className="text-foreground/80">
                We help you create a comprehensive IT strategy aligned with your business objectives, identifying the most valuable opportunities for technology and AI implementation.
              </p>
            </div>

            <div className="bg-background p-8 rounded-xl border border-border/20">
              <div className="w-12 h-12 bg-primary/20 rounded-full flex items-center justify-center mb-6">
                <TrendingUp className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-xl font-bold mb-3">IT Readiness Assessment</h3>
              <p className="text-foreground/80">
                We evaluate your organization's data, infrastructure, and processes to determine your readiness for technology and AI adoption and identify areas for improvement.
              </p>
            </div>

            <div className="bg-background p-8 rounded-xl border border-border/20">
              <div className="w-12 h-12 bg-primary/20 rounded-full flex items-center justify-center mb-6">
                <BarChart className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-xl font-bold mb-3">Data Strategy & Management</h3>
              <p className="text-foreground/80">
                We help you develop a robust data strategy, ensuring you have the right data infrastructure and governance to support successful technology and AI initiatives.
              </p>
            </div>

            <div className="bg-background p-8 rounded-xl border border-border/20">
              <div className="w-12 h-12 bg-primary/20 rounded-full flex items-center justify-center mb-6">
                <Brain className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-xl font-bold mb-3">Technology Solution Selection</h3>
              <p className="text-foreground/80">
                We guide you through the complex landscape of technology and vendors, helping you select the right solutions for your specific needs.
              </p>
            </div>

            <div className="bg-background p-8 rounded-xl border border-border/20">
              <div className="w-12 h-12 bg-primary/20 rounded-full flex items-center justify-center mb-6">
                <Users className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-xl font-bold mb-3">Change Management</h3>
              <p className="text-foreground/80">
                We help your organization navigate the cultural and operational changes required for successful technology and AI adoption, ensuring buy-in at all levels.
              </p>
            </div>

            <div className="bg-background p-8 rounded-xl border border-border/20">
              <div className="w-12 h-12 bg-primary/20 rounded-full flex items-center justify-center mb-6">
                <Shield className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-xl font-bold mb-3">IT Ethics & Governance</h3>
              <p className="text-foreground/80">
                We help you develop ethical IT practices and governance frameworks to ensure responsible and compliant use of technology and artificial intelligence.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Consulting Process</h2>
            <p className="text-xl text-foreground/80 max-w-2xl mx-auto">
              A structured approach to help you successfully integrate technology and AI into your business.
            </p>
          </div>

          <div className="space-y-12">
            <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
              <div className="md:col-span-1 flex justify-center">
                <div className="w-12 h-12 bg-primary/20 rounded-full flex items-center justify-center text-primary font-bold">
                  1
                </div>
              </div>
              <div className="md:col-span-3">
                <h3 className="text-xl font-bold mb-2">Discovery</h3>
              </div>
              <div className="md:col-span-8">
                <p className="text-foreground/80">
                  We begin by understanding your business, challenges, goals, and current capabilities through in-depth discussions and analysis of your operations.
                </p>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
              <div className="md:col-span-1 flex justify-center">
                <div className="w-12 h-12 bg-primary/20 rounded-full flex items-center justify-center text-primary font-bold">
                  2
                </div>
              </div>
              <div className="md:col-span-3">
                <h3 className="text-xl font-bold mb-2">Assessment</h3>
              </div>
              <div className="md:col-span-8">
                <p className="text-foreground/80">
                  We evaluate your organization's technology and AI readiness, including data infrastructure, technical capabilities, and organizational culture.
                </p>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
              <div className="md:col-span-1 flex justify-center">
                <div className="w-12 h-12 bg-primary/20 rounded-full flex items-center justify-center text-primary font-bold">
                  3
                </div>
              </div>
              <div className="md:col-span-3">
                <h3 className="text-xl font-bold mb-2">Strategy Development</h3>
              </div>
              <div className="md:col-span-8">
                <p className="text-foreground/80">
                  We create a customized IT roadmap that outlines specific initiatives, technologies, and implementation timelines aligned with your business objectives.
                </p>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
              <div className="md:col-span-1 flex justify-center">
                <div className="w-12 h-12 bg-primary/20 rounded-full flex items-center justify-center text-primary font-bold">
                  4
                </div>
              </div>
              <div className="md:col-span-3">
                <h3 className="text-xl font-bold mb-2">Implementation Planning</h3>
              </div>
              <div className="md:col-span-8">
                <p className="text-foreground/80">
                  We develop detailed plans for implementing technology and AI solutions, including resource requirements, technology selection, and change management strategies.
                </p>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
              <div className="md:col-span-1 flex justify-center">
                <div className="w-12 h-12 bg-primary/20 rounded-full flex items-center justify-center text-primary font-bold">
                  5
                </div>
              </div>
              <div className="md:col-span-3">
                <h3 className="text-xl font-bold mb-2">Guidance & Support</h3>
              </div>
              <div className="md:col-span-8">
                <p className="text-foreground/80">
                  We provide ongoing guidance and support throughout your technology and AI journey, helping you navigate challenges, measure results, and adapt your strategy as needed.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 bg-secondary/10">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Benefits of IT Consulting & Advisory</h2>
            <p className="text-xl text-foreground/80 max-w-2xl mx-auto">
              How our IT consulting and advisory services can transform your business.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-background p-8 rounded-xl border border-border/20">
              <h3 className="text-xl font-bold mb-3">Strategic Direction</h3>
              <p className="text-foreground/80">
                Get expert guidance on how to leverage AI to achieve your business goals, ensuring your AI investments
                deliver maximum value.
              </p>
            </div>

            <div className="bg-background p-8 rounded-xl border border-border/20">
              <h3 className="text-xl font-bold mb-3">Risk Mitigation</h3>
              <p className="text-foreground/80">
                Avoid costly mistakes and failed AI initiatives with a well-planned strategy and implementation approach
                guided by experts.
              </p>
            </div>

            <div className="bg-background p-8 rounded-xl border border-border/20">
              <h3 className="text-xl font-bold mb-3">Accelerated Adoption</h3>
              <p className="text-foreground/80">
                Fast-track your AI journey with proven methodologies and best practices, reducing the time to value for
                your AI investments.
              </p>
            </div>

            <div className="bg-background p-8 rounded-xl border border-border/20">
              <h3 className="text-xl font-bold mb-3">Competitive Advantage</h3>
              <p className="text-foreground/80">
                Gain a competitive edge by implementing AI solutions that enhance your products, services, and
                operations ahead of your competitors.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to start your AI journey?</h2>
            <p className="text-xl text-foreground/80 mb-8">
              Let's discuss how our AI consulting services can help you achieve your business goals.
            </p>
            <Button asChild size="lg" className="rounded-full px-8">
              <Link href="/contact">
                Book a Consultation <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
