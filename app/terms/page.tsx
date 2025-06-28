import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { ArrowRight } from "lucide-react"

export default function Terms() {
  return (
    <main className="min-h-screen flex flex-col">
      <Navbar />

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 md:pt-40 md:pb-32 overflow-hidden">
        <div className="glow left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">Terms of Service</h1>
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
                <h2 className="text-2xl font-bold mb-4 text-primary">1. Agreement to Terms</h2>
                <p className="text-foreground/80">
                  By accessing or using ALGENTECH's services, you agree to be bound by these Terms of Service and all
                  applicable laws and regulations. If you do not agree with any of these terms, you are prohibited from
                  using or accessing our services.
                </p>
              </div>

              <div className="bg-background p-8 rounded-xl border border-border/20 mb-12">
                <h2 className="text-2xl font-bold mb-4 text-primary">2. Use License</h2>
                <p className="text-foreground/80 mb-4">
                  Permission is granted to temporarily access our services for personal, non-commercial transitory viewing
                  only. This is the grant of a license, not a transfer of title, and under this license you may not:
                </p>
                <ul className="list-disc pl-6 space-y-2 text-foreground/80">
                  <li>Modify or copy the materials</li>
                  <li>Use the materials for any commercial purpose</li>
                  <li>Attempt to decompile or reverse engineer any software contained in our services</li>
                  <li>Remove any copyright or other proprietary notations from the materials</li>
                  <li>Transfer the materials to another person or "mirror" the materials on any other server</li>
                </ul>
              </div>

              <div className="bg-background p-8 rounded-xl border border-border/20 mb-12">
                <h2 className="text-2xl font-bold mb-4 text-primary">3. Service Description</h2>
                <p className="text-foreground/80 mb-4">
                  ALGENTECH provides AI-powered software development services, including but not limited to:
                </p>
                <ul className="list-disc pl-6 space-y-2 text-foreground/80">
                  <li>Custom software development</li>
                  <li>AI solution development</li>
                  <li>Rapid prototyping</li>
                  <li>Technical consulting</li>
                  <li>Software maintenance and support</li>
                </ul>
              </div>

              <div className="bg-background p-8 rounded-xl border border-border/20 mb-12">
                <h2 className="text-2xl font-bold mb-4 text-primary">4. Intellectual Property</h2>
                <p className="text-foreground/80">
                  The Service and its original content, features, and functionality are owned by ALGENTECH and are
                  protected by international copyright, trademark, patent, trade secret, and other intellectual property
                  laws.
                </p>
              </div>

              <div className="bg-background p-8 rounded-xl border border-border/20 mb-12">
                <h2 className="text-2xl font-bold mb-4 text-primary">5. User Responsibilities</h2>
                <p className="text-foreground/80 mb-4">As a user of our services, you agree to:</p>
                <ul className="list-disc pl-6 space-y-2 text-foreground/80">
                  <li>Provide accurate and complete information</li>
                  <li>Maintain the security of your account</li>
                  <li>Not use our services for any illegal purposes</li>
                  <li>Not interfere with the proper working of our services</li>
                  <li>Not attempt to gain unauthorized access to our systems</li>
                </ul>
              </div>

              <div className="bg-background p-8 rounded-xl border border-border/20 mb-12">
                <h2 className="text-2xl font-bold mb-4 text-primary">6. Limitation of Liability</h2>
                <p className="text-foreground/80">
                  In no event shall ALGENTECH be liable for any damages (including, without limitation, damages for loss
                  of data or profit, or due to business interruption) arising out of the use or inability to use our
                  services.
                </p>
              </div>

              <div className="bg-background p-8 rounded-xl border border-border/20 mb-12">
                <h2 className="text-2xl font-bold mb-4 text-primary">7. Disclaimer</h2>
                <p className="text-foreground/80">
                  The materials on our services are provided on an 'as is' basis. ALGENTECH makes no warranties, expressed
                  or implied, and hereby disclaims and negates all other warranties including, without limitation,
                  implied warranties or conditions of merchantability, fitness for a particular purpose, or
                  non-infringement of intellectual property or other violation of rights.
                </p>
              </div>

              <div className="bg-background p-8 rounded-xl border border-border/20 mb-12">
                <h2 className="text-2xl font-bold mb-4 text-primary">8. Revisions and Errata</h2>
                <p className="text-foreground/80">
                  The materials appearing on our services could include technical, typographical, or photographic errors.
                  ALGENTECH does not warrant that any of the materials on its services are accurate, complete, or current.
                  We may make changes to the materials contained on our services at any time without notice.
                </p>
              </div>

              <div className="bg-background p-8 rounded-xl border border-border/20 mb-12">
                <h2 className="text-2xl font-bold mb-4 text-primary">9. Links</h2>
                <p className="text-foreground/80">
                  ALGENTECH has not reviewed all of the sites linked to its services and is not responsible for the
                  contents of any such linked site. The inclusion of any link does not imply endorsement by ALGENTECH of
                  the site.
                </p>
              </div>

              <div className="bg-background p-8 rounded-xl border border-border/20 mb-12">
                <h2 className="text-2xl font-bold mb-4 text-primary">10. Modifications to Terms</h2>
                <p className="text-foreground/80">
                  ALGENTECH may revise these terms of service at any time without notice. By using our services, you are
                  agreeing to be bound by the then current version of these terms of service.
                </p>
              </div>

              <div className="bg-background p-8 rounded-xl border border-border/20 mb-12">
                <h2 className="text-2xl font-bold mb-4 text-primary">11. Governing Law</h2>
                <p className="text-foreground/80">
                  These terms and conditions are governed by and construed in accordance with the laws of Nepal and you
                  irrevocably submit to the exclusive jurisdiction of the courts in that location.
                </p>
              </div>

              <div className="bg-background p-8 rounded-xl border border-border/20">
                <h2 className="text-2xl font-bold mb-4 text-primary">12. Contact Information</h2>
                <p className="text-foreground/80">
                  If you have any questions about these Terms of Service, please contact us at{" "}
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