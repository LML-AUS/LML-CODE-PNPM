"use client"

import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { CartDrawer } from "@/components/cart-drawer"

export default function AlterationsPolicyPage() {
  return (
    <main className="min-h-screen">
      <Header />
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="max-w-4xl mx-auto prose prose-lg">
          <h1 className="font-playfair text-4xl font-bold text-foreground mb-8">Alteration Service Policy</h1>
          <p className="text-muted-foreground mb-4">Last updated: April 2026</p>
          
          <section className="mb-8">
            <h2 className="font-playfair text-2xl font-semibold text-foreground mb-4">1. About Our Alteration Services</h2>
            <p className="text-foreground/80 leading-relaxed">
              LILMISSLIMITED (ABN: 46 745 385 527) provides professional clothing alteration services 
              for a wide range of garments. Our skilled team is dedicated to achieving the perfect fit 
              for your clothing needs.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="font-playfair text-2xl font-semibold text-foreground mb-4">2. Services We Offer</h2>
            <p className="text-foreground/80 leading-relaxed mb-4">Our alteration services include but are not limited to:</p>
            <ul className="list-disc pl-6 text-foreground/80 space-y-2">
              <li>Hemming (pants, skirts, dresses)</li>
              <li>Taking in or letting out seams</li>
              <li>Shortening or lengthening sleeves</li>
              <li>Waist adjustments</li>
              <li>Zipper repairs and replacements</li>
              <li>Button replacements</li>
              <li>Minor repairs (small tears, loose seams)</li>
              <li>Custom fitting for special occasions</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="font-playfair text-2xl font-semibold text-foreground mb-4">3. Consultation Process</h2>
            <p className="text-foreground/80 leading-relaxed mb-4">
              For alteration services, we recommend booking an online consultation where we will:
            </p>
            <ol className="list-decimal pl-6 text-foreground/80 space-y-2">
              <li>Discuss your alteration requirements</li>
              <li>Review photos of the garment and fitting issues</li>
              <li>Provide a detailed quote</li>
              <li>Arrange for garment shipment to us</li>
              <li>Confirm turnaround time</li>
            </ol>
          </section>

          <section className="mb-8">
            <h2 className="font-playfair text-2xl font-semibold text-foreground mb-4">4. Pricing</h2>
            <p className="text-foreground/80 leading-relaxed mb-4">
              Alteration prices vary depending on the complexity of the work required. A quote will be 
              provided during your consultation. Common alteration price ranges:
            </p>
            <ul className="list-disc pl-6 text-foreground/80 space-y-2">
              <li>Basic hemming: From $15</li>
              <li>Waist adjustments: From $25</li>
              <li>Zipper replacement: From $30</li>
              <li>Complex alterations: Quote on consultation</li>
            </ul>
            <p className="text-foreground/80 leading-relaxed mt-4">
              All prices are in AUD and include GST where applicable. Shipping costs for sending 
              garments to us and return delivery are additional.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="font-playfair text-2xl font-semibold text-foreground mb-4">5. Payment Terms</h2>
            <p className="text-foreground/80 leading-relaxed">
              A 50% deposit is required to commence alteration work. The remaining balance is due 
              before the garment is returned to you. Payment can be made via PayPal, Stripe, or 
              direct bank transfer.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="font-playfair text-2xl font-semibold text-foreground mb-4">6. Turnaround Time</h2>
            <p className="text-foreground/80 leading-relaxed mb-4">Standard turnaround times:</p>
            <ul className="list-disc pl-6 text-foreground/80 space-y-2">
              <li>Simple alterations: 3-5 business days</li>
              <li>Standard alterations: 5-7 business days</li>
              <li>Complex alterations: 7-14 business days</li>
              <li>Express service (where available): 24-48 hours (additional fee applies)</li>
            </ul>
            <p className="text-foreground/80 leading-relaxed mt-4">
              Turnaround times begin once we receive your garment and payment. Times do not include 
              shipping to and from our location.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="font-playfair text-2xl font-semibold text-foreground mb-4">7. Customer Satisfaction</h2>
            <p className="text-foreground/80 leading-relaxed mb-4">
              We strive for complete customer satisfaction. If you are not satisfied with the 
              completed alteration work, we handle concerns on a <strong>case-by-case basis</strong>:
            </p>
            <ul className="list-disc pl-6 text-foreground/80 space-y-2">
              <li>Please contact us within 7 days of receiving your altered garment</li>
              <li>Provide photos and a description of your concerns</li>
              <li>We will review the work against your original requirements</li>
              <li>Where appropriate, we may offer to re-do the alteration at no extra cost</li>
              <li>For complex disputes, partial refunds may be considered</li>
            </ul>
            <p className="text-foreground/80 leading-relaxed mt-4">
              Please note that alterations cannot be undone once completed. We cannot be held 
              responsible if you change your mind about the style or fit after providing approval.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="font-playfair text-2xl font-semibold text-foreground mb-4">8. Garment Care and Liability</h2>
            <p className="text-foreground/80 leading-relaxed mb-4">
              While we take the utmost care with your garments, please note:
            </p>
            <ul className="list-disc pl-6 text-foreground/80 space-y-2">
              <li>Some fabrics may not respond well to alterations (e.g., heavily beaded, leather, very delicate fabrics)</li>
              <li>We will advise you of any risks before proceeding</li>
              <li>Our liability is limited to the quoted alteration cost</li>
              <li>We are not responsible for pre-existing damage or fabric wear</li>
              <li>For high-value items, we recommend discussing insurance options</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="font-playfair text-2xl font-semibold text-foreground mb-4">9. Shipping Your Garment</h2>
            <p className="text-foreground/80 leading-relaxed mb-4">
              When sending your garment to us for alterations:
            </p>
            <ul className="list-disc pl-6 text-foreground/80 space-y-2">
              <li>Use tracked and insured shipping</li>
              <li>Package garments carefully to avoid damage</li>
              <li>Include your name, order number, and alteration instructions</li>
              <li>We are not responsible for items lost in transit to us</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="font-playfair text-2xl font-semibold text-foreground mb-4">10. Cancellation</h2>
            <p className="text-foreground/80 leading-relaxed">
              You may cancel an alteration order before work has commenced for a full refund of your deposit. 
              Once work has begun, cancellation may result in forfeiture of part or all of your deposit 
              depending on the progress made.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="font-playfair text-2xl font-semibold text-foreground mb-4">11. Contact Us</h2>
            <p className="text-foreground/80 leading-relaxed">
              For alteration enquiries or to book a consultation:
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
