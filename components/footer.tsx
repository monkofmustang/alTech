import Link from "next/link"

export function Footer() {
  return (
    <footer className="bg-background border-t border-border/20 py-8 sm:py-12">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
          <div className="sm:col-span-2 lg:col-span-1">
            <h3 className="text-lg sm:text-xl font-bold text-primary mb-3 sm:mb-4">ALGENTECH</h3>
            <p className="text-sm sm:text-base text-muted-foreground">
              Transforming ideas into world-class software with AI-powered development from Nepal to the world.
            </p>
          </div>

          <div>
            <h4 className="text-sm sm:text-base font-semibold mb-3 sm:mb-4">Company</h4>
            <ul className="space-y-2">
              <li>
                <Link href="/about" className="text-sm sm:text-base text-muted-foreground hover:text-primary transition-colors touch-manipulation">
                  About Us
                </Link>
              </li>
              {/* Team section temporarily hidden
              <li>
                <Link href="/team" className="text-muted-foreground hover:text-primary transition-colors">
                  Our Team
                </Link>
              </li>
              */}
              {/* Careers section temporarily hidden
              <li>
                <Link href="/careers" className="text-muted-foreground hover:text-primary transition-colors">
                  Careers
                </Link>
              </li>
              */}
            </ul>
          </div>

          <div>
            <h4 className="text-sm sm:text-base font-semibold mb-3 sm:mb-4">Services</h4>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/services/ai-development"
                  className="text-sm sm:text-base text-muted-foreground hover:text-primary transition-colors touch-manipulation"
                >
                  Managed Services
                </Link>
              </li>
              <li>
                <Link
                  href="/services/ai-consulting"
                  className="text-sm sm:text-base text-muted-foreground hover:text-primary transition-colors touch-manipulation"
                >
                  IT Consulting & Advisory
                </Link>
              </li>
              <li>
                <Link
                  href="/services/rapid-prototyping"
                  className="text-sm sm:text-base text-muted-foreground hover:text-primary transition-colors touch-manipulation"
                >
                  AI & Cloud Transformation
                </Link>
              </li>
              <li>
                <Link
                  href="/services/custom-software"
                  className="text-sm sm:text-base text-muted-foreground hover:text-primary transition-colors touch-manipulation"
                >
                  Resource Augmentation
                </Link>
              </li>
              <li>
                <Link href="/comparison" className="text-sm sm:text-base text-muted-foreground hover:text-primary transition-colors touch-manipulation">
                  Why Choose Us
                </Link>
              </li>
            </ul>
          </div>

          <div className="sm:col-span-2 lg:col-span-1">
            <h4 className="text-sm sm:text-base font-semibold mb-3 sm:mb-4">Contact</h4>
            <div className="space-y-3 sm:space-y-4">
              <div>
                <h5 className="text-sm sm:text-base font-medium mb-2">India Office</h5>
                <address className="not-italic text-sm sm:text-base text-muted-foreground">
                  <p>KR Pura, Bangalore</p>
                  <p className="mt-1">
                    <a href="tel:+916360758182" className="hover:text-primary transition-colors touch-manipulation">
                      +91 6360758182
                    </a>
                  </p>
                  <p>
                    <a href="tel:+918217308815" className="hover:text-primary transition-colors touch-manipulation">
                      +91 8217308815
                    </a>
                  </p>
                </address>
              </div>
              <div>
                <h5 className="text-sm sm:text-base font-medium mb-2">Nepal Office</h5>
                <address className="not-italic text-sm sm:text-base text-muted-foreground">
                  <p>Shantichowk, Biratnagar</p>
                  <p className="mt-1">
                    <a href="tel:+9779749916682" className="hover:text-primary transition-colors touch-manipulation">
                      +977 9749916682
                    </a>
                  </p>
                </address>
              </div>
              <p className="mt-2">
                <a href="mailto:info@algentech.com.np" className="text-sm sm:text-base hover:text-primary transition-colors touch-manipulation">
                  info@algentech.com.np
                </a>
              </p>
            </div>
          </div>
        </div>

        <div className="mt-8 sm:mt-12 pt-6 sm:pt-8 border-t border-border/20 flex flex-col sm:flex-row justify-between items-center gap-4 sm:gap-0">
          <p className="text-muted-foreground text-xs sm:text-sm text-center sm:text-left">
            &copy; {new Date().getFullYear()} ALGENTECH. All rights reserved.
          </p>
          <div className="flex space-x-4 sm:space-x-6">
            <Link href="/privacy" className="text-xs sm:text-sm text-muted-foreground hover:text-primary transition-colors touch-manipulation">
              Privacy Policy
            </Link>
            <Link href="/terms" className="text-xs sm:text-sm text-muted-foreground hover:text-primary transition-colors touch-manipulation">
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
