"use client"

import { useState } from "react"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { CartDrawer } from "@/components/cart-drawer"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { ShoppingCart, Check } from "lucide-react"
import { useCart } from "@/components/cart-context"

const vintageProducts = [
  {
    id: 101,
    name: "Pre-loved Vintage Silk Blouse",
    price: 45,
    category: "Pre-loved",
    image: "/vintage-silk-blouse.png",
    condition: "Excellent",
    era: "1990s",
  },
  {
    id: 102,
    name: "Classic Denim Jacket",
    price: 65,
    category: "Pre-loved",
    image: "/placeholder-p7o36.png",
    condition: "Good",
    era: "1980s",
  },
  {
    id: 103,
    name: "Retro Floral Dress",
    price: 55,
    category: "Vintage",
    image: "/elegant-evening-dress.png",
    condition: "Very Good",
    era: "1970s",
  },
  {
    id: 104,
    name: "Elegant Wool Coat",
    price: 120,
    category: "Pre-loved",
    image: "/elegant-wool-coat.png",
    condition: "Excellent",
    era: "2000s",
  },
]

export default function VintagePage() {
  const { addItem } = useCart()
  const [addedIds, setAddedIds] = useState<number[]>([])

  const handleAddToCart = (product: (typeof vintageProducts)[0]) => {
    addItem({
      id: product.id,
      name: product.name,
      price: product.price,
      category: product.category,
      image: product.image,
    })
    setAddedIds((prev) => [...prev, product.id])
    setTimeout(() => {
      setAddedIds((prev) => prev.filter((id) => id !== product.id))
    }, 1500)
  }

  return (
    <main className="min-h-screen">
      <Header />
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="text-center space-y-4 mb-16">
          <h1 className="font-playfair text-4xl lg:text-5xl font-bold text-foreground">
            Pre-loved & Vintage Finds
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Discover unique treasures from our carefully curated collection of pre-loved and vintage clothing.
            Each piece has been hand-selected for quality and style.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {vintageProducts.map((product) => (
            <Card key={product.id} className="group overflow-hidden border-0 shadow-lg hover:shadow-xl transition-all duration-300">
              <div className="aspect-[3/4] overflow-hidden relative">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <Badge className="absolute top-3 left-3 bg-secondary text-secondary-foreground">
                  {product.category}
                </Badge>
                <Badge className="absolute top-3 right-3 bg-accent text-accent-foreground">
                  {product.era}
                </Badge>
              </div>
              <CardContent className="p-4 space-y-3">
                <h3 className="font-semibold text-foreground group-hover:text-primary transition-colors line-clamp-2">
                  {product.name}
                </h3>
                <p className="text-sm text-muted-foreground">Condition: {product.condition}</p>
                <div className="flex items-center justify-between">
                  <span className="text-lg font-bold text-primary">${product.price}</span>
                  <Button
                    size="sm"
                    variant={addedIds.includes(product.id) ? "default" : "outline"}
                    onClick={() => handleAddToCart(product)}
                    className={addedIds.includes(product.id) ? "" : "bg-transparent"}
                  >
                    {addedIds.includes(product.id) ? (
                      <>
                        <Check className="h-4 w-4 mr-1" />
                        Added
                      </>
                    ) : (
                      <>
                        <ShoppingCart className="h-4 w-4 mr-1" />
                        Add
                      </>
                    )}
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <p className="text-muted-foreground">
            More vintage pieces coming soon! Follow us on{" "}
            <a
              href="http://www.instagram.com/lilmisslimited.official?igsh=bzJuYzE1emZjang0"
              target="_blank"
              rel="noopener noreferrer"
              className="text-primary hover:underline"
            >
              Instagram
            </a>{" "}
            for new arrivals.
          </p>
        </div>
      </div>
      <Footer />
      <CartDrawer />
    </main>
  )
}
