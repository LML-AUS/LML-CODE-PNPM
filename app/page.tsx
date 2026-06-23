import { Header } from "@/components/header"
import { Hero } from "@/components/hero"
import { Services } from "@/components/services"
import { FeaturedProducts } from "@/components/featured-products"
import { About } from "@/components/about"
import { Testimonials } from "@/components/testimonials"
import { Contact } from "@/components/contact"
import { Footer } from "@/components/footer"
import { ChatWidget } from "@/components/chat-widget"
import { CartDrawer } from "@/components/cart-drawer"

export default function HomePage() {
  return (
    <main className="min-h-screen">
      <Header />
      <Hero />
      <Services />
      <FeaturedProducts />
      <About />
      <Testimonials />
      <Contact />
      <Footer />
      <ChatWidget />
      <CartDrawer />
    </main>
  )
}
