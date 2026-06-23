import { WandIcon, Instagram } from "lucide-react"

export function Footer() {
  return (
    <footer className="marble-effect text-foreground py-16">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <WandIcon className="h-8 w-8 text-indigo-700" />
              <span className="font-playfair text-2xl font-bold">LILMISSLIMITED</span>
            </div>
            <p className="text-foreground/80 leading-relaxed">
              Where fashion meets perfect fit. Expert alterations and curated clothing for the modern wardrobe.
            </p>
            <div className="flex space-x-4">
              <a
                href="http://www.instagram.com/lilmisslimited.official?igsh=bzJuYzE1emZjang0"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Follow us on Instagram"
              >
                <Instagram className="h-5 w-5 text-foreground/60 hover:text-primary cursor-pointer transition-colors" />
              </a>
            </div>
          </div>

          {/* Services */}
          <div>
            <h3 className="font-semibold text-lg mb-4">Services</h3>
            <ul className="space-y-2 text-foreground/80">
              <li>
                <a href="/book" className="hover:text-primary transition-colors">
                  Book Consultation
                </a>
              </li>
              <li>
                <a href="/alterations-policy" className="hover:text-primary transition-colors">
                  Alteration Services
                </a>
              </li>
            </ul>
          </div>

          {/* Shop */}
          <div>
            <h3 className="font-semibold text-lg mb-4">Shop</h3>
            <ul className="space-y-2 text-foreground/80">
              <li>
                <a href="/shop" className="hover:text-primary transition-colors">
                  New Arrivals
                </a>
              </li>
              <li>
                <a href="/vintage" className="hover:text-primary transition-colors">
                  Pre-loved & Vintage Collection
                </a>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-semibold text-lg mb-4">Contact</h3>
            <ul className="space-y-2 text-foreground/80">
              <li>
                <a href="tel:0414814838" className="hover:text-primary transition-colors">
                  0414 814 838
                </a>
              </li>
              <li>
                <a href="mailto:info@lilmisslimited.com" className="hover:text-primary transition-colors">
                  info@lilmisslimited.com
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-foreground/20 mt-12 pt-8 text-center text-foreground/60">
          <p className="mb-2">&copy; 2024 LILMISSLIMITED. All rights reserved. ABN: 46 745 385 527</p>
          <div className="flex flex-wrap justify-center gap-4 text-sm">
            <a href="/privacy" className="hover:text-primary transition-colors">Privacy Policy</a>
            <span>|</span>
            <a href="/terms" className="hover:text-primary transition-colors">Terms of Service</a>
            <span>|</span>
            <a href="/refunds" className="hover:text-primary transition-colors">Refund Policy</a>
            <span>|</span>
            <a href="/alterations-policy" className="hover:text-primary transition-colors">Alteration Policy</a>
          </div>
        </div>
      </div>
    </footer>
  )
}
