"use client"

import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { About } from "@/components/about"
import { CartDrawer } from "@/components/cart-drawer"

export default function AboutPage() {
  return (
    <main className="min-h-screen">
      <Header />
      <div className="pt-20">
        <About />
      </div>
      <Footer />
      <CartDrawer />
    </main>
  )
}
