import { Button } from "@/components/ui/button"
import { ArrowRight, Star } from "lucide-react"

export function Hero() {
  return (
    <section className="relative py-20 lg:py-32 overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="space-y-8">
            <div className="space-y-4">
              <div className="flex items-center space-x-2 text-sm text-muted-foreground">
                <div className="flex items-center">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-4 w-4 fill-primary text-primary" />
                  ))}
                </div>
                <span>Trusted by 500+ customers</span>
              </div>
              <h1 className="font-playfair text-4xl lg:text-6xl font-bold text-foreground leading-tight">
                Where Fashion Meets
                <span className="text-primary"> Perfect Fit</span>
              </h1>
              <p className="text-lg text-muted-foreground leading-relaxed max-w-lg">
                Expert clothing alterations and curated fashion pieces. From pre-loved and vintage treasures to modern essentials, we
                help you look and feel your absolute best.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" className="text-base">
                Book Alteration
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button variant="outline" size="lg" className="text-base bg-transparent">
                Browse Collection
              </Button>
            </div>

            <div className="grid grid-cols-3 gap-8 pt-8">
              <div className="text-center">
                <div className="font-playfair text-2xl font-bold text-primary">15+</div>
                <div className="text-sm text-muted-foreground">Years Experience</div>
              </div>
              <div className="text-center">
                <div className="font-playfair text-2xl font-bold text-primary">{""}</div>
                <div className="text-sm text-muted-foreground">{""}</div>
              </div>
              <div className="text-center">
                <div className="font-playfair text-2xl font-bold text-primary">24hr</div>
                <div className="text-sm text-muted-foreground">Quick Turnaround</div>
              </div>
            </div>
          </div>

          {/* Image */}
          <div className="relative">
            <div className="aspect-[4/5] rounded-2xl overflow-hidden bg-card">
              <img
                src="/elegant-boutique-interior.png"
                alt="LILMISSLIMITED boutique interior"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="absolute -bottom-6 -left-6 bg-primary text-primary-foreground p-6 rounded-xl shadow-lg">
              <div className="font-playfair text-lg font-bold">Same Day</div>
              <div className="text-sm opacity-90">Alterations Available</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
