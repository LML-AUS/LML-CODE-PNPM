import type React from "react"
import type { Metadata } from "next"
import { Playfair_Display, Source_Sans_3 } from "next/font/google"
import { Analytics } from "@vercel/analytics/react";
import "./globals.css"

const playfair = Playfair_Display({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-playfair",
})

const sourceSans = Source_Sans_3({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-source-sans",
})

export const metadata: Metadata = {
  title: "LILMISSLIMITED | Clothing Alterations & Pre-loved Vintage Fashion",
  description: "Expert clothing alterations and curated pre-loved vintage fashion in NSW, Australia. Same-day tailoring and unique pieces at LILMISSLIMITED. Shop online or book a consultation.",
  keywords: ["clothing alterations", "vintage fashion", "pre-loved clothing", "tailoring", "NSW", "Australia", "fashion alterations", "LILMISSLIMITED"],
  authors: [{ name: "LILMISSLIMITED" }],
  creator: "LILMISSLIMITED",
  publisher: "LILMISSLIMITED",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
    },
  },
  openGraph: {
    title: "LILMISSLIMITED | Clothing Alterations & Pre-loved Vintage Fashion",
    description: "Expert clothing alterations and curated pre-loved vintage fashion. Same-day tailoring and unique pieces.",
    url: "https://lilmisslimited.com",
    siteName: "LILMISSLIMITED",
    locale: "en_AU",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "LILMISSLIMITED | Clothing Alterations & Pre-loved Vintage Fashion",
    description: "Expert clothing alterations and curated pre-loved vintage fashion. Same-day tailoring and unique pieces.",
  },
  generator: "v0.app",
}

import { CartProvider } from "@/components/cart-context"

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={`${playfair.variable} ${sourceSans.variable} antialiased`}>
      <body className="font-sans">
        <CartProvider>{children}</CartProvider>
        <Analytics />
      </body>
    </html>
  )
}
