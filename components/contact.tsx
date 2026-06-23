"use client"

import type React from "react"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Phone, Mail, Clock } from "lucide-react"

export function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    service: "",
    message: "",
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log("Form submitted:", formData)
    // Redirect to payment page or show payment options
    window.open("https://www.paypal.me/lilmisslimited", "_blank")
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }))
  }

  return (
    <section id="contact" className="py-20 bg-card/50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center space-y-4 mb-16">
          <h2 className="font-playfair text-3xl lg:text-4xl font-bold text-foreground">Get In Touch</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Ready to transform your wardrobe? Contact us online for a consultation or browse our curated collection.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div className="space-y-8">
            <Card className="border-0 bg-background">
              <CardContent className="p-6">
                <div className="flex items-start space-x-4">
                  <Phone className="h-6 w-6 text-primary mt-1" />
                  <div>
                    <h3 className="font-semibold text-foreground mb-2">Call Us</h3>
                    <p className="text-muted-foreground">0414814838</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="border-0 bg-background">
              <CardContent className="p-6">
                <div className="flex items-start space-x-4">
                  <Mail className="h-6 w-6 text-primary mt-1" />
                  <div>
                    <h3 className="font-semibold text-foreground mb-2">Email Us</h3>
                    <p className="text-muted-foreground">info@lilmisslimited.com</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="border-0 bg-background">
              <CardContent className="p-6">
                <div className="flex items-start space-x-4">
                  <Clock className="h-6 w-6 text-primary mt-1" />
                  <div>
                    <h3 className="font-semibold text-foreground mb-2">Online Support Hours</h3>
                    <div className="text-muted-foreground space-y-1">
                      <p>Monday - Friday: 9:00 AM - 7:00 PM</p>
                      <p>Saturday: 10:00 AM - 6:00 PM</p>
                      <p>Sunday: 12:00 PM - 5:00 PM</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Contact Form */}
          <Card className="border-0 bg-background">
            <CardHeader>
              <CardTitle className="font-playfair text-2xl">Book an Online Consultation</CardTitle>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-foreground mb-2">
                      Full Name
                    </label>
                    <Input id="name" name="name" value={formData.name} onChange={handleChange} required />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-foreground mb-2">
                      Email
                    </label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                    />
                  </div>
                </div>

                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-foreground mb-2">
                      Phone Number
                    </label>
                    <Input id="phone" name="phone" type="tel" value={formData.phone} onChange={handleChange} />
                  </div>
                  <div>
                    <label htmlFor="service" className="block text-sm font-medium text-foreground mb-2">
                      Service Needed
                    </label>
                    <Input
                      id="service"
                      name="service"
                      placeholder="e.g., Hemming, Tailoring, etc."
                      value={formData.service}
                      onChange={handleChange}
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-foreground mb-2">
                    Message
                  </label>
                  <Textarea
                    id="message"
                    name="message"
                    rows={4}
                    placeholder="Tell us about your alteration needs or any questions you have..."
                    value={formData.message}
                    onChange={handleChange}
                  />
                </div>

                <Button type="submit" size="lg" className="w-full">
                  Send Message & Proceed to Payment
                </Button>
              </form>

              <div className="mt-6 pt-6 border-t border-border">
                <h3 className="font-semibold text-foreground mb-4">Payment Options</h3>
                <div className="space-y-3">
                  <Button
                    variant="outline"
                    className="w-full justify-start bg-transparent"
                    onClick={() => window.open("https://www.paypal.me/lilmisslimited", "_blank")}
                  >
                    Pay with PayPal
                  </Button>
                  <Button
                    variant="outline"
                    className="w-full justify-start bg-transparent"
                    onClick={() => window.open("https://buy.stripe.com/your-stripe-link", "_blank")}
                  >
                    Pay with Card (Stripe)
                  </Button>
                  <div className="text-sm text-muted-foreground">
                    <p>
                      <strong>Bank Transfer (Westpac Business One):</strong>
                    </p>
                    <p>BSB: 032260</p>
                    <p>Account No: 578753</p>
                    <p className="mt-1">Reference: Your name + service</p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}
