"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Menu, X, WandIcon, ShoppingBag, ShoppingCart, Phone } from "lucide-react"
import { useCart } from "@/components/cart-context"

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const { totalItems, setIsCartOpen } = useCart()

  return (
    <header className="sticky top-0 z-50 marble-effect backdrop-blur supports-[backdrop-filter]:marble-effect/60 border-b">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center space-x-2">
            <WandIcon className="h-8 w-8 text-violet-800" />
            <span className="font-playfair text-2xl font-bold text-foreground">LILMISSLIMITED</span>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <a href="/shop" className="text-foreground hover:text-primary transition-colors">
              New Arrivals
            </a>
            <a href="/vintage" className="text-foreground hover:text-primary transition-colors">
              Pre-loved & Vintage Finds
            </a>
            <a href="/about" className="text-foreground hover:text-primary transition-colors">
              About Us
            </a>
            <a href="/contact" className="text-foreground hover:text-primary transition-colors">
              Contact
            </a>
          </nav>

          {/* CTA Buttons */}
          <div className="hidden md:flex items-center space-x-4">
            <button
              type="button"
              onClick={() => setIsCartOpen(true)}
              className="relative p-2 text-foreground hover:text-primary transition-colors"
              aria-label="Open cart"
            >
              <ShoppingCart className="h-5 w-5" />
              {totalItems > 0 && (
                <span className="absolute -top-1 -right-1 h-5 w-5 rounded-full bg-primary text-primary-foreground text-xs flex items-center justify-center font-bold">
                  {totalItems}
                </span>
              )}
            </button>
            <Button asChild variant="outline" size="sm" className="bg-transparent">
              <a href="/shop">
                <ShoppingBag className="h-4 w-4 mr-2" />
                Shop
              </a>
            </Button>
            <Button asChild size="sm">
              <a href="/book">
                <Phone className="h-4 w-4 mr-2" />
                Book Consultation
              </a>
            </Button>
          </div>

          <div className="flex items-center gap-2 md:hidden">
            <button
              type="button"
              onClick={() => setIsCartOpen(true)}
              className="relative p-2 text-foreground hover:text-primary transition-colors"
              aria-label="Open cart"
            >
              <ShoppingCart className="h-5 w-5" />
              {totalItems > 0 && (
                <span className="absolute -top-1 -right-1 h-5 w-5 rounded-full bg-primary text-primary-foreground text-xs flex items-center justify-center font-bold">
                  {totalItems}
                </span>
              )}
            </button>
            {/* Mobile Menu Button */}
            <button className="md:hidden" onClick={() => setIsMenuOpen(!isMenuOpen)}>
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t">
            <nav className="flex flex-col space-y-4">
              <a href="/shop" className="text-foreground hover:text-primary transition-colors">
                New Arrivals
              </a>
              <a href="/vintage" className="text-foreground hover:text-primary transition-colors">
                Pre-loved & Vintage Finds
              </a>
              <a href="/about" className="text-foreground hover:text-primary transition-colors">
                About Us
              </a>
              <a href="/contact" className="text-foreground hover:text-primary transition-colors">
                Contact
              </a>
              <div className="flex flex-col space-y-2 pt-4">
                <Button asChild variant="outline" size="sm">
                  <a href="/shop">
                    <ShoppingBag className="h-4 w-4 mr-2" />
                    Shop
                  </a>
                </Button>
                <Button asChild size="sm">
                  <a href="/book">
                    <Phone className="h-4 w-4 mr-2" />
                    Book Consultation
                  </a>
                </Button>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  )
}
