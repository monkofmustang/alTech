import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { ContactForm } from "@/components/contact-form"
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

              <ContactForm />
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
                      <h4 className="font-semibold mb-1">Our Locations</h4>
                      <div className="space-y-4">
                        <div>
                          <p className="font-medium">India Office</p>
                          <p className="text-foreground/80">
                            KR Pura, Bangalore
                            <br />
                            Karnataka, India
                          </p>
                        </div>
                        <div>
                          <p className="font-medium">Nepal Office</p>
                          <p className="text-foreground/80">
                            Shantichowk, Biratnagar
                            <br />
                            Nepal
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <div className="w-12 h-12 bg-primary/20 rounded-full flex items-center justify-center mr-4">
                      <Mail className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <h4 className="font-semibold mb-1">Email Us</h4>
                      <p className="text-foreground/80">
                        <a href="mailto:bytebrewery128@gmail.com" className="hover:text-primary transition-colors">
                          bytebrewery128@gmail.com
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
                      <div className="space-y-2">
                        <div>
                          <p className="font-medium">India</p>
                          <p className="text-foreground/80">
                            <a href="tel:+916360758182" className="hover:text-primary transition-colors">
                              +91 6360758182
                            </a>
                            <br />
                            <a href="tel:+918217308815" className="hover:text-primary transition-colors">
                              +91 8217308815
                            </a>
                          </p>
                        </div>
                        <div>
                          <p className="font-medium">Nepal</p>
                          <p className="text-foreground/80">
                            <a href="tel:+9779804397120" className="hover:text-primary transition-colors">
                              +977 9804397120
                            </a>
                          </p>
                        </div>
                      </div>
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
