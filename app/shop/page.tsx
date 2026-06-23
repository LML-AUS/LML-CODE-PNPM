"use client"

import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { FeaturedProducts } from "@/components/featured-products"
import { CartDrawer } from "@/components/cart-drawer"

export default function ShopPage() {
  return (
    <main className="min-h-screen">
      <Header />
      <div className="pt-20">
        <FeaturedProducts />
      </div>
      <Footer />
      <CartDrawer />
    </main>
  )
}
