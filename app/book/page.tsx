"use client"

import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { CartDrawer } from "@/components/cart-drawer"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Calendar, Clock, Video, Phone, Mail } from "lucide-react"

export default function BookPage() {
  const openGoogleCalendar = () => {
    // Opens Google Calendar to create an event and send invite to lilmisslimited@gmail.com
    const calendarUrl = `https://calendar.google.com/calendar/render?action=TEMPLATE&text=LILMISSLIMITED%20Consultation&details=Online%20consultation%20for%20clothing%20alterations%20or%20styling%20advice.%20Please%20describe%20what%20you%20need%20help%20with.&add=lilmisslimited@gmail.com`
    window.open(calendarUrl, "_blank")
  }

  return (
    <main className="min-h-screen">
      <Header />
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="text-center space-y-4 mb-16">
          <h1 className="font-playfair text-4xl lg:text-5xl font-bold text-foreground">
            Book a Consultation
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Schedule an online consultation for alterations advice, styling guidance, or to discuss 
            your fashion needs. We are here to help!
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <Card className="border-2 border-primary/20 hover:border-primary/40 transition-colors">
              <CardHeader>
                <CardTitle className="flex items-center gap-3 font-playfair text-xl">
                  <Video className="h-6 w-6 text-primary" />
                  Online Consultation
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-muted-foreground">
                  Book a video call to discuss your alteration needs, get styling advice, or ask 
                  questions about our products.
                </p>
                <ul className="space-y-2 text-sm text-foreground/80">
                  <li className="flex items-center gap-2">
                    <Clock className="h-4 w-4 text-primary" />
                    15-30 minute sessions
                  </li>
                  <li className="flex items-center gap-2">
                    <Calendar className="h-4 w-4 text-primary" />
                    Flexible scheduling
                  </li>
                </ul>
                <Button onClick={openGoogleCalendar} className="w-full mt-4">
                  <Calendar className="h-4 w-4 mr-2" />
                  Schedule with Google Calendar
                </Button>
              </CardContent>
            </Card>

            <Card className="border-2 border-secondary/20 hover:border-secondary/40 transition-colors">
              <CardHeader>
                <CardTitle className="flex items-center gap-3 font-playfair text-xl">
                  <Phone className="h-6 w-6 text-secondary" />
                  Quick Phone Chat
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-muted-foreground">
                  Prefer a quick phone call? Get in touch directly for immediate assistance with 
                  your enquiries.
                </p>
                <ul className="space-y-2 text-sm text-foreground/80">
                  <li className="flex items-center gap-2">
                    <Clock className="h-4 w-4 text-secondary" />
                    Available during business hours
                  </li>
                  <li className="flex items-center gap-2">
                    <Phone className="h-4 w-4 text-secondary" />
                    0414 814 838
                  </li>
                </ul>
                <Button asChild variant="secondary" className="w-full mt-4">
                  <a href="tel:0414814838">
                    <Phone className="h-4 w-4 mr-2" />
                    Call Now
                  </a>
                </Button>
              </CardContent>
            </Card>
          </div>

          <Card className="bg-card/50">
            <CardHeader>
              <CardTitle className="font-playfair text-xl text-center">How It Works</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid sm:grid-cols-3 gap-6 text-center">
                <div className="space-y-3">
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mx-auto">
                    <span className="text-xl font-bold text-primary">1</span>
                  </div>
                  <h3 className="font-semibold">Book Your Slot</h3>
                  <p className="text-sm text-muted-foreground">
                    Click the schedule button to open Google Calendar and select a time that works for you.
                  </p>
                </div>
                <div className="space-y-3">
                  <div className="w-12 h-12 rounded-full bg-secondary/10 flex items-center justify-center mx-auto">
                    <span className="text-xl font-bold text-secondary">2</span>
                  </div>
                  <h3 className="font-semibold">Receive Confirmation</h3>
                  <p className="text-sm text-muted-foreground">
                    We will receive your booking request and confirm the appointment via email.
                  </p>
                </div>
                <div className="space-y-3">
                  <div className="w-12 h-12 rounded-full bg-accent/10 flex items-center justify-center mx-auto">
                    <span className="text-xl font-bold text-accent">3</span>
                  </div>
                  <h3 className="font-semibold">Join the Call</h3>
                  <p className="text-sm text-muted-foreground">
                    At your scheduled time, join via Google Meet or the method we arrange.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>

          <div className="mt-12 text-center">
            <p className="text-muted-foreground mb-4">
              Prefer email? Send us your enquiry directly:
            </p>
            <Button asChild variant="outline" className="bg-transparent">
              <a href="mailto:lilmisslimited@gmail.com">
                <Mail className="h-4 w-4 mr-2" />
                lilmisslimited@gmail.com
              </a>
            </Button>
          </div>
        </div>
      </div>
      <Footer />
      <CartDrawer />
    </main>
  )
}
