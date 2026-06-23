import { Card, CardContent } from "@/components/ui/card"
import { Award, Users, Clock, Sparkles } from "lucide-react"

const stats = [
  {
    icon: Award,
    value: "15+",
    label: "Years of Excellence",
    description: "Serving the community with expert craftsmanship",
  },
  {
    icon: Users,
    value: "500+",
    label: "Happy Customers",
    description: "Building lasting relationships through quality service",
  },
  {
    icon: Clock,
    value: "24hr",
    label: "Express Service",
    description: "Quick turnaround for urgent alterations",
  },
  {
    icon: Sparkles,
    value: "100%",
    label: "Satisfaction",
    description: "Guaranteed perfect fit or we make it right",
  },
]

export function About() {
  return (
    <section id="about" className="py-20 bg-card/50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center space-y-12">
          {/* Content */}
          <div className="space-y-8">
            <div className="space-y-4">
              <h2 className="font-playfair text-3xl lg:text-4xl font-bold text-foreground">
                Crafting Perfect Fits Since 2009
              </h2>
              <p className="text-lg text-muted-foreground leading-relaxed max-w-3xl mx-auto">
                At LILMISSLIMITED, we believe that great clothing should fit perfectly and reflect your unique style.
                Our master tailor combines traditional techniques with modern precision to deliver exceptional results.
              </p>
              <p className="text-muted-foreground leading-relaxed max-w-3xl mx-auto">
                From simple hemming to complex reconstructions, we handle every garment with care and attention to
                detail. Our curated collection of new, pre-loved and vintage pieces ensures you'll find something special that
                speaks to your style.
              </p>
            </div>

            <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 max-w-4xl mx-auto">
              {stats.map((stat, index) => (
                <Card key={index} className="border-0 bg-background">
                  <CardContent className="p-6 text-center space-y-2">
                    <div className="mx-auto w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mb-3">
                      <stat.icon className="h-6 w-6 text-primary" />
                    </div>
                    <div className="font-playfair text-2xl font-bold text-primary">{stat.value}</div>
                    <div className="font-semibold text-foreground">{stat.label}</div>
                    <div className="text-xs text-muted-foreground">{stat.description}</div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
