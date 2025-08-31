import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import Image from "next/image"
import { ArrowRight, Cpu, CheckCircle, Brain, Bot, BarChart, MessageSquare, Layers } from "lucide-react"

export default function AIDevelopment() {
  return (
    <main className="min-h-screen flex flex-col">
      <Navbar />

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 md:pt-40 md:pb-32 overflow-hidden">
        <div className="glow left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">Managed Services</h1>
            <p className="text-xl text-foreground/80 mb-8 max-w-2xl mx-auto">
              Cutting-edge artificial intelligence solutions to transform your business and drive innovation.
            </p>
            <Button asChild size="lg" className="rounded-full px-8">
              <Link href="/contact">
                Discuss Your AI Project <ArrowRight className="ml-2 h-4 w-4" />
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
              <h2 className="text-3xl md:text-4xl font-bold mb-6">AI Solutions That Drive Results</h2>
              <p className="text-lg text-foreground/80 mb-6">
                At ALGENTECH, we specialize in developing custom AI solutions that solve complex business challenges and
                create competitive advantages. Our AI expertise includes:
              </p>

              <div className="space-y-4">
                <div className="flex items-start">
                  <CheckCircle className="h-6 w-6 text-primary mr-3 mt-0.5 flex-shrink-0" />
                  <p className="text-foreground/80">Machine learning models tailored to your specific data and needs</p>
                </div>
                <div className="flex items-start">
                  <CheckCircle className="h-6 w-6 text-primary mr-3 mt-0.5 flex-shrink-0" />
                  <p className="text-foreground/80">Natural language processing for advanced text understanding</p>
                </div>
                <div className="flex items-start">
                  <CheckCircle className="h-6 w-6 text-primary mr-3 mt-0.5 flex-shrink-0" />
                  <p className="text-foreground/80">Computer vision systems for image and video analysis</p>
                </div>
                <div className="flex items-start">
                  <CheckCircle className="h-6 w-6 text-primary mr-3 mt-0.5 flex-shrink-0" />
                  <p className="text-foreground/80">Predictive analytics to forecast trends and behaviors</p>
                </div>
              </div>
            </div>

            <div className="relative">
              <div className="aspect-square bg-primary/20 rounded-2xl overflow-hidden relative animate-float">
                <Image src="/resourceManagement.png" alt="Managed Services" fill className="object-cover" priority />
              </div>
              <div className="absolute -bottom-8 -right-8 bg-background p-6 rounded-xl border border-border/20 shadow-lg">
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-primary/20 rounded-full flex items-center justify-center">
                    <Cpu className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <p className="font-bold">AI-Powered</p>
                    <p className="text-primary font-bold">Innovation</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* AI Services Section */}
      <section className="py-20 bg-secondary/10">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Managed Services</h2>
            <p className="text-xl text-foreground/80 max-w-2xl mx-auto">
              Comprehensive AI solutions designed to transform your business operations and customer experiences.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-background p-8 rounded-xl border border-border/20">
              <div className="w-12 h-12 bg-primary/20 rounded-full flex items-center justify-center mb-6">
                <Bot className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-xl font-bold mb-3">Intelligent Agents</h3>
              <p className="text-foreground/80">
                We build sophisticated AI agents that can automate complex tasks, analyze data, and make intelligent
                decisions, freeing humans to focus on creative and strategic work.
              </p>
            </div>

            <div className="bg-background p-8 rounded-xl border border-border/20">
              <div className="w-12 h-12 bg-primary/20 rounded-full flex items-center justify-center mb-6">
                <BarChart className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-xl font-bold mb-3">Predictive Analytics</h3>
              <p className="text-foreground/80">
                Our AI-powered analytics platforms help businesses anticipate market trends, customer behavior, and
                operational challenges before they happen.
              </p>
            </div>

            <div className="bg-background p-8 rounded-xl border border-border/20">
              <div className="w-12 h-12 bg-primary/20 rounded-full flex items-center justify-center mb-6">
                <MessageSquare className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-xl font-bold mb-3">Conversational AI</h3>
              <p className="text-foreground/80">
                We develop sophisticated chatbots and virtual assistants that provide human-like interactions and
                support, enhancing customer service and engagement.
              </p>
            </div>

            <div className="bg-background p-8 rounded-xl border border-border/20">
              <div className="w-12 h-12 bg-primary/20 rounded-full flex items-center justify-center mb-6">
                <Layers className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-xl font-bold mb-3">Custom ML Models</h3>
              <p className="text-foreground/80">
                We create bespoke machine learning models trained on your specific data to solve unique business
                challenges and uncover valuable insights.
              </p>
            </div>

            <div className="bg-background p-8 rounded-xl border border-border/20">
              <div className="w-12 h-12 bg-primary/20 rounded-full flex items-center justify-center mb-6">
                <Cpu className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-xl font-bold mb-3">AI Integration</h3>
              <p className="text-foreground/80">
                We seamlessly integrate AI capabilities into your existing systems and applications, enhancing their
                functionality without requiring a complete rebuild.
              </p>
            </div>

            <div className="bg-background p-8 rounded-xl border border-border/20">
              <div className="w-12 h-12 bg-primary/20 rounded-full flex items-center justify-center mb-6">
                <Brain className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-xl font-bold mb-3">AI Consulting</h3>
              <p className="text-foreground/80">
                Our AI experts provide strategic guidance on how to leverage artificial intelligence to solve your
                business challenges and create competitive advantages.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Managed Services Process</h2>
            <p className="text-xl text-foreground/80 max-w-2xl mx-auto">
              A systematic approach to creating effective AI solutions that deliver real business value.
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
                <h3 className="text-xl font-bold mb-2">Discovery & Analysis</h3>
              </div>
              <div className="md:col-span-8">
                <p className="text-foreground/80">
                  We begin by understanding your business challenges, goals, and data. Our AI experts analyze your
                  requirements to determine the most effective AI approach for your specific needs.
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
                <h3 className="text-xl font-bold mb-2">Data Preparation</h3>
              </div>
              <div className="md:col-span-8">
                <p className="text-foreground/80">
                  We collect, clean, and structure your data to ensure it's ready for AI processing. This critical step
                  lays the foundation for accurate and effective AI models.
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
                <h3 className="text-xl font-bold mb-2">Model Development</h3>
              </div>
              <div className="md:col-span-8">
                <p className="text-foreground/80">
                  Our AI engineers develop and train custom models using your data, selecting the most appropriate
                  algorithms and techniques for your specific use case.
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
                <h3 className="text-xl font-bold mb-2">Testing & Refinement</h3>
              </div>
              <div className="md:col-span-8">
                <p className="text-foreground/80">
                  We rigorously test the AI models to ensure accuracy, reliability, and performance. Based on the
                  results, we refine and optimize the models to improve their effectiveness.
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
                <h3 className="text-xl font-bold mb-2">Integration & Deployment</h3>
              </div>
              <div className="md:col-span-8">
                <p className="text-foreground/80">
                  We seamlessly integrate the AI solution into your existing systems and workflows, ensuring smooth
                  operation and minimal disruption to your business.
                </p>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
              <div className="md:col-span-1 flex justify-center">
                <div className="w-12 h-12 bg-primary/20 rounded-full flex items-center justify-center text-primary font-bold">
                  6
                </div>
              </div>
              <div className="md:col-span-3">
                <h3 className="text-xl font-bold mb-2">Monitoring & Improvement</h3>
              </div>
              <div className="md:col-span-8">
                <p className="text-foreground/80">
                  We continuously monitor the performance of your AI solution, making adjustments and improvements as
                  needed to ensure it continues to deliver value as your business evolves.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Use Cases Section */}
      <section className="py-20 bg-secondary/10">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Managed Services Use Cases</h2>
            <p className="text-xl text-foreground/80 max-w-2xl mx-auto">
              Discover how our AI solutions are transforming businesses across various industries.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-background p-8 rounded-xl border border-border/20">
              <h3 className="text-xl font-bold mb-3">Customer Service Automation</h3>
              <p className="text-foreground/80 mb-4">
                AI-powered chatbots and virtual assistants that handle customer inquiries 24/7, reducing response times
                and improving customer satisfaction.
              </p>
              <p className="text-primary font-medium">Results: 70% reduction in response time, 35% cost savings</p>
            </div>

            <div className="bg-background p-8 rounded-xl border border-border/20">
              <h3 className="text-xl font-bold mb-3">Predictive Maintenance</h3>
              <p className="text-foreground/80 mb-4">
                AI systems that analyze equipment data to predict failures before they occur, reducing downtime and
                maintenance costs.
              </p>
              <p className="text-primary font-medium">
                Results: 45% reduction in downtime, 30% maintenance cost savings
              </p>
            </div>

            <div className="bg-background p-8 rounded-xl border border-border/20">
              <h3 className="text-xl font-bold mb-3">Fraud Detection</h3>
              <p className="text-foreground/80 mb-4">
                Machine learning models that identify suspicious patterns and anomalies in financial transactions,
                preventing fraud in real-time.
              </p>
              <p className="text-primary font-medium">
                Results: 60% increase in fraud detection, 40% reduction in false positives
              </p>
            </div>

            <div className="bg-background p-8 rounded-xl border border-border/20">
              <h3 className="text-xl font-bold mb-3">Personalized Recommendations</h3>
              <p className="text-foreground/80 mb-4">
                AI algorithms that analyze customer behavior to provide personalized product recommendations, increasing
                engagement and sales.
              </p>
              <p className="text-primary font-medium">
                Results: 25% increase in conversion rates, 30% higher average order value
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to harness the power of AI?</h2>
            <p className="text-xl text-foreground/80 mb-8">
              Let's discuss how our AI solutions can transform your business and drive innovation.
            </p>
            <Button asChild size="lg" className="rounded-full px-8">
              <Link href="/contact">
                Start Your AI Journey <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
