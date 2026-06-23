"use client"

import { useState } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ChevronLeft, ChevronRight, Star, Quote } from "lucide-react"

const testimonials = [
  {
    name: "Chantelle",
    role: "Regular Customer",
    content: "Fantastic seller, exceeded expectations.",
    rating: 5,
  },
  {
    name: "Kate",
    role: "Groom",
    content: "A wonderful experience, my expectations were exceeded.",
    rating: 5,
  },
  {
    name: "Jen",
    role: "Fashion Enthusiast",
    content:
      "Perfect seller, Friendly and shipped item quickly....And the item is absolutely perfect, I'm so happy <3 .",
    rating: 5,
  },
]

export function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0)

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length)
  }

  const prevTestimonial = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length)
  }

  return (
    <section className="py-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center space-y-4 mb-16">
          <h2 className="font-playfair text-3xl lg:text-4xl font-bold text-foreground">What Our Customers Say</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Don't just take our word for it - hear from our satisfied customers about their LILMISSLIMITED experience.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <Card className="border-0 bg-card">
            <CardContent className="p-8 lg:p-12">
              <div className="text-center space-y-6">
                <Quote className="h-12 w-12 text-primary mx-auto opacity-50" />

                <div className="space-y-4">
                  <p className="text-lg lg:text-xl text-foreground leading-relaxed italic">
                    "{testimonials[currentIndex].content}"
                  </p>

                  <div className="flex justify-center">
                    {[...Array(testimonials[currentIndex].rating)].map((_, i) => (
                      <Star key={i} className="h-5 w-5 fill-primary text-primary" />
                    ))}
                  </div>
                </div>

                <div className="flex items-center justify-center space-x-4">
                  {testimonials[currentIndex].image && (
                    <img
                      src={testimonials[currentIndex].image || "/placeholder.svg"}
                      alt={testimonials[currentIndex].name}
                      className="w-16 h-16 rounded-full object-cover"
                    />
                  )}
                  <div className="text-left">
                    <div className="font-semibold text-foreground">{testimonials[currentIndex].name}</div>
                    
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          <div className="flex items-center justify-center space-x-4 mt-8">
            <Button variant="outline" size="icon" onClick={prevTestimonial} className="rounded-full bg-transparent">
              <ChevronLeft className="h-4 w-4" />
            </Button>

            <div className="flex space-x-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentIndex(index)}
                  className={`w-2 h-2 rounded-full transition-colors ${
                    index === currentIndex ? "bg-primary" : "bg-muted"
                  }`}
                />
              ))}
            </div>

            <Button variant="outline" size="icon" onClick={nextTestimonial} className="rounded-full bg-transparent">
              <ChevronRight className="h-4 w-4" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
