import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { ArrowRight, Mail, MapPin, Phone } from "lucide-react"

export default function Contact() {
  return (
    <main className="min-h-screen flex flex-col">
      <Navbar />

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 md:pt-40 md:pb-32 overflow-hidden">
        <div className="glow left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">Get In Touch</h1>
            <p className="text-xl text-foreground/80 mb-8 max-w-2xl mx-auto">
              Have a project in mind? Let's discuss how we can bring your ideas to life.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
            <div>
              <h2 className="text-3xl font-bold mb-6">Contact Us</h2>
              <p className="text-foreground/80 mb-8">
                Fill out the form and our team will get back to you within 24 hours.
              </p>

              <form className="space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="firstName" className="block text-sm font-medium mb-2">
                      First Name
                    </label>
                    <Input id="firstName" placeholder="John" required />
                  </div>
                  <div>
                    <label htmlFor="lastName" className="block text-sm font-medium mb-2">
                      Last Name
                    </label>
                    <Input id="lastName" placeholder="Doe" required />
                  </div>
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium mb-2">
                    Email
                  </label>
                  <Input id="email" type="email" placeholder="john@example.com" required />
                </div>

                <div>
                  <label htmlFor="company" className="block text-sm font-medium mb-2">
                    Company
                  </label>
                  <Input id="company" placeholder="Your Company" />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium mb-2">
                    Message
                  </label>
                  <Textarea id="message" placeholder="Tell us about your project..." rows={5} required />
                </div>

                <Button type="submit" size="lg" className="w-full">
                  Send Message <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </form>
            </div>

            <div>
              <div className="bg-background p-8 rounded-xl border border-border/20 h-full">
                <h3 className="text-2xl font-bold mb-6">Contact Information</h3>

                <div className="space-y-8">
                  <div className="flex items-start">
                    <div className="w-12 h-12 bg-primary/20 rounded-full flex items-center justify-center mr-4">
                      <MapPin className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <h4 className="font-semibold mb-1">Our Location</h4>
                      <p className="text-foreground/80">
                        Thamel, Kathmandu
                        <br />
                        Nepal
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <div className="w-12 h-12 bg-primary/20 rounded-full flex items-center justify-center mr-4">
                      <Mail className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <h4 className="font-semibold mb-1">Email Us</h4>
                      <p className="text-foreground/80">
                        <a href="mailto:info@altentech.com" className="hover:text-primary transition-colors">
                          info@altentech.com
                        </a>
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <div className="w-12 h-12 bg-primary/20 rounded-full flex items-center justify-center mr-4">
                      <Phone className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <h4 className="font-semibold mb-1">Call Us</h4>
                      <p className="text-foreground/80">
                        <a href="tel:+9779812345678" className="hover:text-primary transition-colors">
                          +977 9812345678
                        </a>
                      </p>
                    </div>
                  </div>
                </div>

                <div className="mt-12">
                  <h4 className="font-semibold mb-4">Working Hours</h4>
                  <p className="text-foreground/80">
                    Monday - Friday: 9:00 AM - 6:00 PM
                    <br />
                    Saturday: 10:00 AM - 2:00 PM
                    <br />
                    Sunday: Closed
                  </p>
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
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to start your project?</h2>
            <p className="text-xl text-foreground/80 mb-8">
              Book a discovery call and get your prototype ready in just 90 hours.
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
