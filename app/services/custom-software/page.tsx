import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { ArrowRight, Code, CheckCircle, Layers, Shield, Zap, Globe, Cpu } from "lucide-react"

export default function CustomSoftware() {
  return (
    <main className="min-h-screen flex flex-col">
      <Navbar />

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 md:pt-40 md:pb-32 overflow-hidden">
        <div className="glow left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">Custom Software Development</h1>
            <p className="text-xl text-foreground/80 mb-8 max-w-2xl mx-auto">
              Tailored software solutions built with AI-powered development for exceptional quality and speed.
            </p>
            <Button asChild size="lg" className="rounded-full px-8">
              <Link href="/contact">
                Discuss Your Project <ArrowRight className="ml-2 h-4 w-4" />
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
              <h2 className="text-3xl md:text-4xl font-bold mb-6">Custom Software That Drives Results</h2>
              <p className="text-lg text-foreground/80 mb-6">
                At ALTENTECH, we build software that's perfectly aligned with your business goals and processes. Our
                AI-powered development approach delivers solutions that are:
              </p>

              <div className="space-y-4">
                <div className="flex items-start">
                  <CheckCircle className="h-6 w-6 text-primary mr-3 mt-0.5 flex-shrink-0" />
                  <p className="text-foreground/80">Tailored to your specific business needs and workflows</p>
                </div>
                <div className="flex items-start">
                  <CheckCircle className="h-6 w-6 text-primary mr-3 mt-0.5 flex-shrink-0" />
                  <p className="text-foreground/80">Built 3x faster than traditional development methods</p>
                </div>
                <div className="flex items-start">
                  <CheckCircle className="h-6 w-6 text-primary mr-3 mt-0.5 flex-shrink-0" />
                  <p className="text-foreground/80">More reliable with 60% fewer bugs than industry average</p>
                </div>
                <div className="flex items-start">
                  <CheckCircle className="h-6 w-6 text-primary mr-3 mt-0.5 flex-shrink-0" />
                  <p className="text-foreground/80">Designed for scalability and future growth</p>
                </div>
              </div>
            </div>

            <div className="relative">
              <div className="aspect-square bg-primary/20 rounded-2xl overflow-hidden flex items-center justify-center">
                <Code className="h-32 w-32 text-primary/60" />
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

      {/* Services Section */}
      <section className="py-20 bg-secondary/10">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Custom Software Services</h2>
            <p className="text-xl text-foreground/80 max-w-2xl mx-auto">
              Comprehensive software development services for all your business needs.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-background p-8 rounded-xl border border-border/20">
              <div className="w-12 h-12 bg-primary/20 rounded-full flex items-center justify-center mb-6">
                <Globe className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-xl font-bold mb-3">Web Applications</h3>
              <p className="text-foreground/80">
                Responsive, feature-rich web applications that work seamlessly across all devices and browsers.
              </p>
            </div>

            <div className="bg-background p-8 rounded-xl border border-border/20">
              <div className="w-12 h-12 bg-primary/20 rounded-full flex items-center justify-center mb-6">
                <Layers className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-xl font-bold mb-3">Mobile Applications</h3>
              <p className="text-foreground/80">
                Native and cross-platform mobile apps that deliver exceptional user experiences on iOS and Android.
              </p>
            </div>

            <div className="bg-background p-8 rounded-xl border border-border/20">
              <div className="w-12 h-12 bg-primary/20 rounded-full flex items-center justify-center mb-6">
                <Shield className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-xl font-bold mb-3">Enterprise Software</h3>
              <p className="text-foreground/80">
                Robust, secure, and scalable enterprise solutions that streamline operations and boost productivity.
              </p>
            </div>

            <div className="bg-background p-8 rounded-xl border border-border/20">
              <div className="w-12 h-12 bg-primary/20 rounded-full flex items-center justify-center mb-6">
                <Cpu className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-xl font-bold mb-3">AI-Powered Systems</h3>
              <p className="text-foreground/80">
                Intelligent applications that leverage machine learning and AI to automate tasks and provide insights.
              </p>
            </div>

            <div className="bg-background p-8 rounded-xl border border-border/20">
              <div className="w-12 h-12 bg-primary/20 rounded-full flex items-center justify-center mb-6">
                <Code className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-xl font-bold mb-3">API Development</h3>
              <p className="text-foreground/80">
                Secure, well-documented APIs that enable seamless integration with other systems and services.
              </p>
            </div>

            <div className="bg-background p-8 rounded-xl border border-border/20">
              <div className="w-12 h-12 bg-primary/20 rounded-full flex items-center justify-center mb-6">
                <Zap className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-xl font-bold mb-3">Legacy System Modernization</h3>
              <p className="text-foreground/80">
                Transform outdated systems into modern, efficient applications without disrupting your business.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Development Process</h2>
            <p className="text-xl text-foreground/80 max-w-2xl mx-auto">
              A streamlined, AI-enhanced approach to delivering exceptional software.
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
                <h3 className="text-xl font-bold mb-2">Discovery & Planning</h3>
              </div>
              <div className="md:col-span-8">
                <p className="text-foreground/80">
                  We start by deeply understanding your business goals, requirements, and challenges. Our AI systems
                  analyze similar projects to help create an optimal architecture and development plan.
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
                <h3 className="text-xl font-bold mb-2">Design & Architecture</h3>
              </div>
              <div className="md:col-span-8">
                <p className="text-foreground/80">
                  We create detailed designs and technical architecture that align with your requirements. Our AI tools
                  help identify potential issues and optimize the architecture for performance and scalability.
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
                <h3 className="text-xl font-bold mb-2">AI-Assisted Development</h3>
              </div>
              <div className="md:col-span-8">
                <p className="text-foreground/80">
                  Our developers work alongside AI tools that accelerate coding, identify potential issues, and suggest
                  optimizations in real-time, resulting in faster development and higher quality code.
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
                <h3 className="text-xl font-bold mb-2">Testing & QA</h3>
              </div>
              <div className="md:col-span-8">
                <p className="text-foreground/80">
                  Our AI-powered testing identifies bugs and edge cases that might be missed in traditional testing,
                  ensuring your software is reliable and performs as expected.
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
                <h3 className="text-xl font-bold mb-2">Deployment & Support</h3>
              </div>
              <div className="md:col-span-8">
                <p className="text-foreground/80">
                  We handle the deployment of your software and provide ongoing support and maintenance to ensure it
                  continues to perform optimally and evolve with your business needs.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 bg-secondary/10">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
            <div className="order-2 md:order-1">
              <div className="aspect-video bg-primary/20 rounded-2xl overflow-hidden flex items-center justify-center">
                <Zap className="h-32 w-32 text-primary/60" />
              </div>
            </div>

            <div className="order-1 md:order-2">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">The ALGENTECH Advantage</h2>
              <p className="text-lg text-foreground/80 mb-6">
                What sets our custom software development apart from traditional approaches.
              </p>

              <div className="space-y-4">
                <div className="flex items-start">
                  <CheckCircle className="h-6 w-6 text-primary mr-3 mt-0.5 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold">3x Faster Development</h3>
                    <p className="text-foreground/80">
                      Our AI-powered approach dramatically accelerates the development process without compromising
                      quality.
                    </p>
                  </div>
                </div>

                <div className="flex items-start">
                  <CheckCircle className="h-6 w-6 text-primary mr-3 mt-0.5 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold">Higher Quality Code</h3>
                    <p className="text-foreground/80">
                      AI-assisted development and testing results in more reliable, maintainable code with fewer bugs.
                    </p>
                  </div>
                </div>

                <div className="flex items-start">
                  <CheckCircle className="h-6 w-6 text-primary mr-3 mt-0.5 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold">Cost-Effective Solutions</h3>
                    <p className="text-foreground/80">
                      Our Nepal-based team and AI-assisted development allow us to offer competitive pricing without
                      compromising on quality.
                    </p>
                  </div>
                </div>

                <div className="flex items-start">
                  <CheckCircle className="h-6 w-6 text-primary mr-3 mt-0.5 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold">Future-Proof Architecture</h3>
                    <p className="text-foreground/80">
                      We build software with scalability and adaptability in mind, ensuring it can grow with your
                      business.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to build your custom software solution?</h2>
            <p className="text-xl text-foreground/80 mb-8">
              Let's discuss how our AI-powered development can transform your business.
            </p>
            <Button asChild size="lg" className="rounded-full px-8">
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
