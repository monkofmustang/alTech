import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { ArrowRight } from "lucide-react"

export default function Privacy() {
  return (
    <main className="min-h-screen flex flex-col">
      <Navbar />

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 md:pt-40 md:pb-32 overflow-hidden">
        <div className="glow left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">Privacy Policy</h1>
            <p className="text-xl text-foreground/80 mb-8 max-w-2xl mx-auto">
              Last updated: {new Date().toLocaleDateString()}
            </p>
          </div>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="prose prose-lg dark:prose-invert max-w-none">
              <div className="bg-background p-8 rounded-xl border border-border/20 mb-12">
                <h2 className="text-2xl font-bold mb-4 text-primary">1. Introduction</h2>
                <p className="text-foreground/80">
                  At ALGENTECH, we take your privacy seriously. This Privacy Policy explains how we collect, use, disclose,
                  and safeguard your information when you visit our website or use our services.
                </p>
              </div>

              <div className="bg-background p-8 rounded-xl border border-border/20 mb-12">
                <h2 className="text-2xl font-bold mb-4 text-primary">2. Information We Collect</h2>
                <div className="space-y-6">
                  <div>
                    <h3 className="text-xl font-semibold mb-3">2.1 Personal Information</h3>
                    <p className="text-foreground/80 mb-4">We may collect personal information that you voluntarily provide to us when you:</p>
                    <ul className="list-disc pl-6 space-y-2 text-foreground/80">
                      <li>Fill out contact forms</li>
                      <li>Subscribe to our newsletter</li>
                      <li>Request a quote</li>
                      <li>Apply for a job</li>
                      <li>Engage with our services</li>
                    </ul>
                  </div>

                  <div>
                    <h3 className="text-xl font-semibold mb-3">2.2 Automatically Collected Information</h3>
                    <p className="text-foreground/80 mb-4">When you visit our website, we automatically collect certain information about your device, including:</p>
                    <ul className="list-disc pl-6 space-y-2 text-foreground/80">
                      <li>IP address</li>
                      <li>Browser type</li>
                      <li>Operating system</li>
                      <li>Pages visited</li>
                      <li>Time and date of visits</li>
                    </ul>
                  </div>
                </div>
              </div>

              <div className="bg-background p-8 rounded-xl border border-border/20 mb-12">
                <h2 className="text-2xl font-bold mb-4 text-primary">3. How We Use Your Information</h2>
                <p className="text-foreground/80 mb-4">We use the information we collect to:</p>
                <ul className="list-disc pl-6 space-y-2 text-foreground/80">
                  <li>Provide and maintain our services</li>
                  <li>Respond to your inquiries and requests</li>
                  <li>Send you marketing communications (with your consent)</li>
                  <li>Improve our website and services</li>
                  <li>Comply with legal obligations</li>
                </ul>
              </div>

              <div className="bg-background p-8 rounded-xl border border-border/20 mb-12">
                <h2 className="text-2xl font-bold mb-4 text-primary">4. Information Sharing and Disclosure</h2>
                <p className="text-foreground/80">
                  We do not sell, trade, or otherwise transfer your personal information to third parties without your
                  consent, except as described in this Privacy Policy.
                </p>
              </div>

              <div className="bg-background p-8 rounded-xl border border-border/20 mb-12">
                <h2 className="text-2xl font-bold mb-4 text-primary">5. Data Security</h2>
                <p className="text-foreground/80">
                  We implement appropriate technical and organizational measures to protect your personal information
                  against unauthorized access, alteration, disclosure, or destruction.
                </p>
              </div>

              <div className="bg-background p-8 rounded-xl border border-border/20 mb-12">
                <h2 className="text-2xl font-bold mb-4 text-primary">6. Your Rights</h2>
                <p className="text-foreground/80 mb-4">You have the right to:</p>
                <ul className="list-disc pl-6 space-y-2 text-foreground/80">
                  <li>Access your personal information</li>
                  <li>Correct inaccurate information</li>
                  <li>Request deletion of your information</li>
                  <li>Object to processing of your information</li>
                  <li>Withdraw consent</li>
                </ul>
              </div>

              <div className="bg-background p-8 rounded-xl border border-border/20 mb-12">
                <h2 className="text-2xl font-bold mb-4 text-primary">7. Cookies and Tracking Technologies</h2>
                <p className="text-foreground/80">
                  We use cookies and similar tracking technologies to track activity on our website and hold certain
                  information. You can instruct your browser to refuse all cookies or to indicate when a cookie is being
                  sent.
                </p>
              </div>

              <div className="bg-background p-8 rounded-xl border border-border/20 mb-12">
                <h2 className="text-2xl font-bold mb-4 text-primary">8. Changes to This Privacy Policy</h2>
                <p className="text-foreground/80">
                  We may update our Privacy Policy from time to time. We will notify you of any changes by posting the new
                  Privacy Policy on this page and updating the "Last updated" date.
                </p>
              </div>

              <div className="bg-background p-8 rounded-xl border border-border/20">
                <h2 className="text-2xl font-bold mb-4 text-primary">9. Contact Us</h2>
                <p className="text-foreground/80">
                  If you have any questions about this Privacy Policy, please contact us at{" "}
                  <a href="mailto:info@algentech.com.np" className="text-primary hover:underline">
                    info@algentech.com.np
                  </a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
} 