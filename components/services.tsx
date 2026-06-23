import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Scissors, Shirt, Zap, Crown, ArrowRight } from "lucide-react"

const services = [
  {
    icon: Scissors,
    title: "Expert Alterations",
    description: "Professional hemming, taking in, letting out, and complex alterations for all garments.",
    features: ["Same-day service available", "All fabric types", "Precision fitting"],
    price: "From $15",
  },
  {
    icon: Shirt,
    title: "Custom Tailoring",
    description: "Bespoke tailoring services for suits, dresses, and formal wear.",
    features: ["Personal consultation", "Premium fabrics", "Perfect measurements"],
    price: "From $200",
  },
  {
    icon: Zap,
    title: "Express Service",
    description: "Rush alterations for urgent needs - perfect for special events.",
    features: ["24-hour turnaround", "Emergency repairs", "Event preparation"],
    price: "From $25",
  },
  {
    icon: Crown,
    title: "Bridal & Formal",
    description: "Specialized alterations for wedding dresses, suits, and formal attire.",
    features: ["Multiple fittings", "Delicate fabrics", "Special occasion expertise"],
    price: "From $75",
  },
]

export function Services() {
  return (
    <section id="services" className="py-20 bg-card/50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center space-y-4 mb-16">
          <h2 className="font-playfair text-3xl lg:text-4xl font-bold text-foreground">
            Professional Alteration Services
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            From simple hems to complex reconstructions, our skilled tailors ensure every piece fits you perfectly.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => (
            <Card key={index} className="group hover:shadow-lg transition-all duration-300 border-0 bg-background">
              <CardHeader className="text-center pb-4">
                <div className="mx-auto w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                  <service.icon className="h-8 w-8 text-primary" />
                </div>
                <CardTitle className="font-playfair text-xl">{service.title}</CardTitle>
                <CardDescription className="text-sm leading-relaxed">{service.description}</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <ul className="space-y-2">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="text-sm text-muted-foreground flex items-center">
                      <div className="w-1.5 h-1.5 bg-primary rounded-full mr-3 flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>
                <div className="pt-4 border-t">
                  <div className="flex items-center justify-between">
                    <span className="font-bold text-lg" style={{ color: "var(--color-price)" }}>
                      {service.price}
                    </span>
                    <Button variant="ghost" size="sm" className="group/btn">
                      Learn More
                      <ArrowRight className="ml-1 h-4 w-4 group-hover/btn:translate-x-1 transition-transform" />
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <Button size="lg">
            Book Your Consultation
            <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
        </div>
      </div>
    </section>
  )
}
