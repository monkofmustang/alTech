import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { ArrowRight, CheckCircle, X, Zap, Shield, Users, DollarSign } from "lucide-react"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"

export default function Comparison() {
  return (
    <main className="min-h-screen flex flex-col">
      <Navbar />

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 md:pt-40 md:pb-32 overflow-hidden">
        <div className="glow left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">Why Choose ALGENTECH</h1>
            <p className="text-xl text-foreground/80 mb-8 max-w-2xl mx-auto">
              See how our AI-powered development approach compares to traditional methods.
            </p>
          </div>
        </div>
      </section>

      {/* Detailed Comparison Table */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Detailed Comparison</h2>
            <p className="text-xl text-foreground/80 max-w-2xl mx-auto">
              A comprehensive look at how ALTENTECH compares to traditional development agencies and freelancers.
            </p>
          </div>

          <div className="overflow-x-auto">
            <Table className="w-full">
              <TableHeader>
                <TableRow>
                  <TableHead className="w-1/4">Features</TableHead>
                  <TableHead className="w-1/4 text-center">ALGENTECH</TableHead>
                  <TableHead className="w-1/4 text-center">Traditional Agencies</TableHead>
                  <TableHead className="w-1/4 text-center">Freelancers</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                <TableRow>
                  <TableCell className="font-medium">Development Speed</TableCell>
                  <TableCell className="text-center">
                    <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-primary/20 text-primary">
                      3x Faster
                    </span>
                  </TableCell>
                  <TableCell className="text-center">Standard</TableCell>
                  <TableCell className="text-center">Varies</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell className="font-medium">Prototype Delivery</TableCell>
                  <TableCell className="text-center">
                    <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-primary/20 text-primary">
                      90 Hours
                    </span>
                  </TableCell>
                  <TableCell className="text-center">2-4 Weeks</TableCell>
                  <TableCell className="text-center">1-3 Weeks</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell className="font-medium">AI-Powered Development</TableCell>
                  <TableCell className="text-center">
                    <CheckCircle className="h-5 w-5 text-primary mx-auto" />
                  </TableCell>
                  <TableCell className="text-center">
                    <X className="h-5 w-5 text-muted-foreground mx-auto" />
                  </TableCell>
                  <TableCell className="text-center">
                    <X className="h-5 w-5 text-muted-foreground mx-auto" />
                  </TableCell>
                </TableRow>
                <TableRow>
                  <TableCell className="font-medium">Quality Assurance</TableCell>
                  <TableCell className="text-center">
                    <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-primary/20 text-primary">
                      AI + Human
                    </span>
                  </TableCell>
                  <TableCell className="text-center">Manual Testing</TableCell>
                  <TableCell className="text-center">Limited</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell className="font-medium">Bug Rate</TableCell>
                  <TableCell className="text-center">
                    <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-primary/20 text-primary">
                      60% Lower
                    </span>
                  </TableCell>
                  <TableCell className="text-center">Industry Average</TableCell>
                  <TableCell className="text-center">Varies</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell className="font-medium">Team Size</TableCell>
                  <TableCell className="text-center">Full Team</TableCell>
                  <TableCell className="text-center">Large Team</TableCell>
                  <TableCell className="text-center">Individual</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell className="font-medium">Cost Efficiency</TableCell>
                  <TableCell className="text-center">
                    <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-primary/20 text-primary">
                      High
                    </span>
                  </TableCell>
                  <TableCell className="text-center">Low</TableCell>
                  <TableCell className="text-center">Medium</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell className="font-medium">Scalability</TableCell>
                  <TableCell className="text-center">
                    <CheckCircle className="h-5 w-5 text-primary mx-auto" />
                  </TableCell>
                  <TableCell className="text-center">
                    <CheckCircle className="h-5 w-5 text-muted-foreground mx-auto" />
                  </TableCell>
                  <TableCell className="text-center">
                    <X className="h-5 w-5 text-muted-foreground mx-auto" />
                  </TableCell>
                </TableRow>
                <TableRow>
                  <TableCell className="font-medium">Maintenance Support</TableCell>
                  <TableCell className="text-center">Comprehensive</TableCell>
                  <TableCell className="text-center">Limited</TableCell>
                  <TableCell className="text-center">Minimal</TableCell>
                </TableRow>
              </TableBody>
            </Table>
          </div>
        </div>
      </section>

      {/* Key Advantages Section */}
      <section className="py-20 bg-secondary/10">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Key Advantages</h2>
            <p className="text-xl text-foreground/80 max-w-2xl mx-auto">
              What makes ALGENTECH the superior choice for your software development needs.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div className="flex items-start">
              <div className="w-16 h-16 bg-primary/20 rounded-full flex items-center justify-center mr-6 flex-shrink-0">
                <Zap className="h-8 w-8 text-primary" />
              </div>
              <div>
                <h3 className="text-2xl font-bold mb-3">Unmatched Speed</h3>
                <p className="text-foreground/80 mb-4">
                  Our AI-powered development process delivers projects 3x faster than traditional methods. This means
                  you can:
                </p>
                <ul className="space-y-2">
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-primary mr-2 flex-shrink-0 mt-0.5" />
                    <span>Get to market before your competitors</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-primary mr-2 flex-shrink-0 mt-0.5" />
                    <span>Start generating revenue sooner</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-primary mr-2 flex-shrink-0 mt-0.5" />
                    <span>Iterate quickly based on user feedback</span>
                  </li>
                </ul>
              </div>
            </div>

            <div className="flex items-start">
              <div className="w-16 h-16 bg-primary/20 rounded-full flex items-center justify-center mr-6 flex-shrink-0">
                <Shield className="h-8 w-8 text-primary" />
              </div>
              <div>
                <h3 className="text-2xl font-bold mb-3">Superior Quality</h3>
                <p className="text-foreground/80 mb-4">
                  Our AI-enhanced quality assurance processes result in software with 60% fewer bugs than the industry
                  average:
                </p>
                <ul className="space-y-2">
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-primary mr-2 flex-shrink-0 mt-0.5" />
                    <span>More reliable applications</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-primary mr-2 flex-shrink-0 mt-0.5" />
                    <span>Lower maintenance costs</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-primary mr-2 flex-shrink-0 mt-0.5" />
                    <span>Better user experience</span>
                  </li>
                </ul>
              </div>
            </div>

            <div className="flex items-start">
              <div className="w-16 h-16 bg-primary/20 rounded-full flex items-center justify-center mr-6 flex-shrink-0">
                <Users className="h-8 w-8 text-primary" />
              </div>
              <div>
                <h3 className="text-2xl font-bold mb-3">Expert Team</h3>
                <p className="text-foreground/80 mb-4">
                  Unlike freelancers, we provide a full team of experts across all disciplines:
                </p>
                <ul className="space-y-2">
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-primary mr-2 flex-shrink-0 mt-0.5" />
                    <span>AI specialists</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-primary mr-2 flex-shrink-0 mt-0.5" />
                    <span>Full-stack developers</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-primary mr-2 flex-shrink-0 mt-0.5" />
                    <span>UX/UI designers</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-primary mr-2 flex-shrink-0 mt-0.5" />
                    <span>QA engineers</span>
                  </li>
                </ul>
              </div>
            </div>

            <div className="flex items-start">
              <div className="w-16 h-16 bg-primary/20 rounded-full flex items-center justify-center mr-6 flex-shrink-0">
                <DollarSign className="h-8 w-8 text-primary" />
              </div>
              <div>
                <h3 className="text-2xl font-bold mb-3">Cost Efficiency</h3>
                <p className="text-foreground/80 mb-4">
                  Our unique approach delivers exceptional value compared to traditional agencies:
                </p>
                <ul className="space-y-2">
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-primary mr-2 flex-shrink-0 mt-0.5" />
                    <span>Lower development costs</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-primary mr-2 flex-shrink-0 mt-0.5" />
                    <span>Faster time-to-market</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-primary mr-2 flex-shrink-0 mt-0.5" />
                    <span>Reduced maintenance expenses</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Client Success Stories</h2>
            <p className="text-xl text-foreground/80 max-w-2xl mx-auto">
              Real experiences from clients who switched to our AI-powered development approach.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-background p-8 rounded-xl border border-border/20">
              <p className="text-foreground/80 mb-6 italic">
                "We previously worked with a traditional agency and spent 3 months developing our MVP. When we needed to
                build our next product, we tried ALTENTECH and had a working prototype in just 90 hours. The quality was
                better, and the cost was 40% lower."
              </p>
              <div className="flex items-center">
                <div className="w-12 h-12 bg-primary/20 rounded-full mr-4"></div>
                <div>
                  <p className="font-semibold">David Kim</p>
                  <p className="text-sm text-foreground/60">Founder, FinTech Startup</p>
                </div>
              </div>
            </div>

            <div className="bg-background p-8 rounded-xl border border-border/20">
              <p className="text-foreground/80 mb-6 italic">
                "I used to work with freelancers for my projects, but the quality was inconsistent and communication was
                challenging. ALTENTECH provided a full team that understood my vision and delivered a polished product
                in record time. Their AI-powered approach is truly revolutionary."
              </p>
              <div className="flex items-center">
                <div className="w-12 h-12 bg-primary/20 rounded-full mr-4"></div>
                <div>
                  <p className="font-semibold">Lisa Patel</p>
                  <p className="text-sm text-foreground/60">CEO, E-commerce Platform</p>
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
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to experience the difference?</h2>
            <p className="text-xl text-foreground/80 mb-8">
              Let's discuss how our AI-powered development approach can transform your project.
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
