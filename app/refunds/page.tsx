"use client"

import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { CartDrawer } from "@/components/cart-drawer"

export default function RefundPolicyPage() {
  return (
    <main className="min-h-screen">
      <Header />
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="max-w-4xl mx-auto prose prose-lg">
          <h1 className="font-playfair text-4xl font-bold text-foreground mb-8">Refund Policy</h1>
          <p className="text-muted-foreground mb-4">Last updated: April 2026</p>
          
          <section className="mb-8 p-6 bg-accent/20 rounded-lg border border-accent">
            <h2 className="font-playfair text-2xl font-semibold text-foreground mb-4">Important Notice</h2>
            <p className="text-foreground/80 leading-relaxed font-semibold">
              All sales are final. We do not offer refunds, returns, or exchanges on clothing purchases 
              unless the item is significantly not as described or is faulty.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="font-playfair text-2xl font-semibold text-foreground mb-4">1. Final Sale Policy</h2>
            <p className="text-foreground/80 leading-relaxed mb-4">
              Due to the nature of our business selling pre-loved, vintage, and new clothing items, 
              all sales are considered final. We encourage customers to:
            </p>
            <ul className="list-disc pl-6 text-foreground/80 space-y-2">
              <li>Carefully review all product photos and descriptions before purchasing</li>
              <li>Check measurements provided in listings against your own measurements</li>
              <li>Contact us with any questions before completing your purchase</li>
              <li>Review condition notes for pre-loved items</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="font-playfair text-2xl font-semibold text-foreground mb-4">2. Exceptions - Faulty or Misdescribed Items</h2>
            <p className="text-foreground/80 leading-relaxed mb-4">
              Under Australian Consumer Law, you are entitled to a remedy if an item:
            </p>
            <ul className="list-disc pl-6 text-foreground/80 space-y-2">
              <li>Has a major fault that was not disclosed</li>
              <li>Is significantly different from the description or photos</li>
              <li>Does not match the sample or model shown</li>
              <li>Is not fit for its intended purpose</li>
            </ul>
            <p className="text-foreground/80 leading-relaxed mt-4">
              In these cases, please contact us within 7 days of receiving your item with photos 
              and a description of the issue. We will assess each case individually and may offer 
              a replacement, store credit, or refund at our discretion.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="font-playfair text-2xl font-semibold text-foreground mb-4">3. What We Cannot Accept</h2>
            <p className="text-foreground/80 leading-relaxed mb-4">We cannot accept returns or offer refunds for:</p>
            <ul className="list-disc pl-6 text-foreground/80 space-y-2">
              <li>Change of mind</li>
              <li>Items that do not fit (please check measurements carefully)</li>
              <li>Items that have been worn, washed, or altered after purchase</li>
              <li>Items returned after 7 days without prior approval</li>
              <li>Minor variations in colour due to screen display differences</li>
              <li>Wear consistent with the described condition of pre-loved items</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="font-playfair text-2xl font-semibold text-foreground mb-4">4. Alteration Services</h2>
            <p className="text-foreground/80 leading-relaxed">
              For alteration services, please refer to our separate{" "}
              <a href="/alterations-policy" className="text-primary hover:underline">Alteration Service Policy</a>. 
              Refunds for alteration work are handled on a case-by-case basis and depend on the nature 
              of any issues raised.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="font-playfair text-2xl font-semibold text-foreground mb-4">5. Damaged in Transit</h2>
            <p className="text-foreground/80 leading-relaxed">
              If your item arrives damaged due to shipping, please contact us within 48 hours of delivery 
              with photos of the damage and packaging. We will work with you to resolve the issue, which 
              may include filing a claim with the postal carrier and arranging a replacement where possible.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="font-playfair text-2xl font-semibold text-foreground mb-4">6. Lost Packages</h2>
            <p className="text-foreground/80 leading-relaxed">
              If your package does not arrive within the expected timeframe, please contact us. We will 
              investigate with the postal carrier. Refunds or replacements for lost packages will be 
              considered once the carrier investigation is complete.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="font-playfair text-2xl font-semibold text-foreground mb-4">7. How to Request a Review</h2>
            <p className="text-foreground/80 leading-relaxed mb-4">
              If you believe you have a valid claim for a refund or replacement, please:
            </p>
            <ol className="list-decimal pl-6 text-foreground/80 space-y-2">
              <li>Email us at info@lilmisslimited.com within 7 days of receiving your item</li>
              <li>Include your order number and a description of the issue</li>
              <li>Attach clear photos showing the problem</li>
              <li>We will respond within 2-3 business days with our assessment</li>
            </ol>
          </section>

          <section className="mb-8">
            <h2 className="font-playfair text-2xl font-semibold text-foreground mb-4">8. Refund Processing</h2>
            <p className="text-foreground/80 leading-relaxed">
              If a refund is approved, it will be processed to your original payment method within 
              5-10 business days. PayPal refunds are typically faster than card refunds. You will 
              receive email confirmation when your refund has been processed.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="font-playfair text-2xl font-semibold text-foreground mb-4">9. Contact Us</h2>
            <p className="text-foreground/80 leading-relaxed">
              For refund enquiries, please contact us:
            </p>
            <ul className="list-none text-foreground/80 mt-4 space-y-2">
              <li><strong>Email:</strong> info@lilmisslimited.com</li>
              <li><strong>Phone:</strong> 0414 814 838</li>
              <li><strong>ABN:</strong> 46 745 385 527</li>
            </ul>
          </section>
        </div>
      </div>
      <Footer />
      <CartDrawer />
    </main>
  )
}
