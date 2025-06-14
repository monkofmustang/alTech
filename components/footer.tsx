import Link from "next/link"

export function Footer() {
  return (
    <footer className="bg-background border-t border-border/20 py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-xl font-bold text-primary mb-4">ALGENTECH</h3>
            <p className="text-muted-foreground">
              Transforming ideas into world-class software with AI-powered development from Nepal to the world.
            </p>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Company</h4>
            <ul className="space-y-2">
              <li>
                <Link href="/about" className="text-muted-foreground hover:text-primary transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/team" className="text-muted-foreground hover:text-primary transition-colors">
                  Our Team
                </Link>
              </li>
              <li>
                <Link href="/careers" className="text-muted-foreground hover:text-primary transition-colors">
                  Careers
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Services</h4>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/services/ai-development"
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  AI Development
                </Link>
              </li>
              <li>
                <Link
                  href="/services/ai-consulting"
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  AI Consulting
                </Link>
              </li>
              <li>
                <Link
                  href="/services/rapid-prototyping"
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  Rapid Prototyping
                </Link>
              </li>
              <li>
                <Link
                  href="/services/custom-software"
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  Custom Software
                </Link>
              </li>
              <li>
                <Link href="/comparison" className="text-muted-foreground hover:text-primary transition-colors">
                  Why Choose Us
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Contact</h4>
            <address className="not-italic text-muted-foreground">
              <p>Kathmandu, Nepal</p>
              <p className="mt-2">
                <a href="mailto:info@algentech.com" className="hover:text-primary transition-colors">
                  info@algentech.com
                </a>
              </p>
            </address>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-border/20 flex flex-col md:flex-row justify-between items-center">
          <p className="text-muted-foreground text-sm">
            &copy; {new Date().getFullYear()} ALGENTECH. All rights reserved.
          </p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <Link href="/privacy" className="text-sm text-muted-foreground hover:text-primary transition-colors">
              Privacy Policy
            </Link>
            <Link href="/terms" className="text-sm text-muted-foreground hover:text-primary transition-colors">
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
