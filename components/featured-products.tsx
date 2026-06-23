"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Heart, ShoppingCart, Check } from "lucide-react"
import { useCart } from "@/components/cart-context"
import { useState } from "react"

const products = [
  {
    id: 1,
    name: "Pre-loved Vintage Silk Blouse",
    price: 89,
    originalPrice: 120,
    category: "Pre-loved",
    image: "/vintage-silk-blouse.png",
    condition: "Excellent",
    size: "M",
  },
  {
    id: 2,
    name: "Designer Wool Coat",
    price: 245,
    category: "New",
    image: "/elegant-wool-coat.png",
    condition: "New",
    size: "L",
  },
  {
    id: 3,
    name: "Classic Denim Jacket",
    price: 65,
    originalPrice: 85,
    category: "Pre-loved",
    image: "/placeholder-p7o36.png",
    condition: "Very Good",
    size: "S",
  },
  {
    id: 4,
    name: "Formal Evening Dress",
    price: 180,
    category: "New",
    image: "/elegant-evening-dress.png",
    condition: "New",
    size: "M",
  },
]

export function FeaturedProducts() {
  const { addItem } = useCart()
  const [addedIds, setAddedIds] = useState<number[]>([])

  const handleAddToCart = (product: (typeof products)[0]) => {
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
    <section id="products" className="py-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center space-y-4 mb-16">
          <h2 className="font-playfair text-3xl lg:text-4xl font-bold text-foreground">Curated Fashion Collection</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Discover unique pieces from our carefully selected collection of new, pre-loved and vintage clothing.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {products.map((product) => (
            <Card
              key={product.id}
              className="group overflow-hidden border-0 bg-card hover:shadow-lg transition-all duration-300"
            >
              <div className="relative aspect-[3/4] overflow-hidden">
                <img
                  src={product.image || "/placeholder.svg"}
                  alt={product.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute top-3 left-3">
                  <Badge variant={product.category === "New" ? "default" : "secondary"}>{product.category}</Badge>
                </div>
                <div className="absolute top-3 right-3 opacity-0 group-hover:opacity-100 transition-opacity">
                  <Button size="icon" variant="secondary" className="h-8 w-8">
                    <Heart className="h-4 w-4" />
                  </Button>
                </div>
                {product.originalPrice && (
                  <div className="absolute bottom-3 left-3">
                    <Badge variant="destructive" className="text-xs">
                      Sale
                    </Badge>
                  </div>
                )}
              </div>
              <CardContent className="p-4 space-y-3">
                <div>
                  <h3 className="font-semibold text-foreground group-hover:text-primary transition-colors">
                    {product.name}
                  </h3>
                  <div className="flex items-center justify-between text-sm text-muted-foreground">
                    <span>Size {product.size}</span>
                    <span>{product.condition}</span>
                  </div>
                </div>
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-2">
                    <span className="font-bold text-xl" style={{ color: "var(--color-price)" }}>
                      ${product.price}
                    </span>
                    {product.originalPrice && (
                      <span className="text-sm text-muted-foreground line-through">${product.originalPrice}</span>
                    )}
                  </div>
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
          <Button variant="outline" size="lg">
            View Full Collection
          </Button>
        </div>
      </div>
    </section>
  )
}
