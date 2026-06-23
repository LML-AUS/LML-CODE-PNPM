"use client"

import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { CartDrawer } from "@/components/cart-drawer"

export default function TermsOfServicePage() {
  return (
    <main className="min-h-screen">
      <Header />
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="max-w-4xl mx-auto prose prose-lg">
          <h1 className="font-playfair text-4xl font-bold text-foreground mb-8">Terms of Service</h1>
          <p className="text-muted-foreground mb-4">Last updated: April 2026</p>
          
          <section className="mb-8">
            <h2 className="font-playfair text-2xl font-semibold text-foreground mb-4">1. About These Terms</h2>
            <p className="text-foreground/80 leading-relaxed">
              These Terms of Service govern your use of the LILMISSLIMITED website and services. 
              LILMISSLIMITED (ABN: 46 745 385 527) is a sole trader business operating in New South Wales, Australia. 
              By using our website or purchasing our products and services, you agree to these terms.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="font-playfair text-2xl font-semibold text-foreground mb-4">2. Products and Services</h2>
            <p className="text-foreground/80 leading-relaxed mb-4">We offer:</p>
            <ul className="list-disc pl-6 text-foreground/80 space-y-2">
              <li>New clothing items</li>
              <li>Pre-loved and vintage clothing</li>
              <li>Professional clothing alteration services</li>
              <li>Online fashion consultations</li>
            </ul>
            <p className="text-foreground/80 leading-relaxed mt-4">
              All products are described as accurately as possible. Pre-loved items may show minor signs of wear 
              as described in individual listings. Images are representative and colours may vary slightly due to screen settings.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="font-playfair text-2xl font-semibold text-foreground mb-4">3. Pricing and Payment</h2>
            <p className="text-foreground/80 leading-relaxed mb-4">
              All prices are displayed in Australian Dollars (AUD) and include GST where applicable. 
              We accept payment via:
            </p>
            <ul className="list-disc pl-6 text-foreground/80 space-y-2">
              <li>PayPal</li>
              <li>Stripe (credit/debit cards)</li>
              <li>Direct bank transfer (Westpac Business One - BSB: 032260, Account: 578753)</li>
            </ul>
            <p className="text-foreground/80 leading-relaxed mt-4">
              Payment must be received in full before orders are dispatched or alteration work commences.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="font-playfair text-2xl font-semibold text-foreground mb-4">4. Order Processing</h2>
            <p className="text-foreground/80 leading-relaxed">
              Orders are processed within 1-3 business days. You will receive email confirmation when your order 
              is placed and when it is dispatched. We reserve the right to cancel orders if items are unavailable 
              or if we suspect fraudulent activity.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="font-playfair text-2xl font-semibold text-foreground mb-4">5. Shipping</h2>
            <p className="text-foreground/80 leading-relaxed mb-4">
              We ship within Australia and internationally. Shipping costs are calculated at checkout based on 
              destination and package weight. Estimated delivery times are:
            </p>
            <ul className="list-disc pl-6 text-foreground/80 space-y-2">
              <li>NSW Metro: 2-4 business days</li>
              <li>Australia-wide: 5-10 business days</li>
              <li>International: 10-21 business days</li>
            </ul>
            <p className="text-foreground/80 leading-relaxed mt-4">
              Delivery times are estimates and not guaranteed. We are not responsible for delays caused by 
              postal services or customs processing.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="font-playfair text-2xl font-semibold text-foreground mb-4">6. Australian Consumer Law</h2>
            <p className="text-foreground/80 leading-relaxed">
              Our goods and services come with guarantees that cannot be excluded under the Australian Consumer Law. 
              You are entitled to a replacement or refund for a major failure and compensation for any other reasonably 
              foreseeable loss or damage. You are also entitled to have goods repaired or replaced if the goods fail 
              to be of acceptable quality and the failure does not amount to a major failure.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="font-playfair text-2xl font-semibold text-foreground mb-4">7. Intellectual Property</h2>
            <p className="text-foreground/80 leading-relaxed">
              All content on this website, including images, text, logos, and designs, is the property of 
              LILMISSLIMITED or our licensors and is protected by copyright and trademark laws. 
              You may not reproduce, distribute, or use our content without written permission.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="font-playfair text-2xl font-semibold text-foreground mb-4">8. Limitation of Liability</h2>
            <p className="text-foreground/80 leading-relaxed">
              To the extent permitted by law, LILMISSLIMITED is not liable for any indirect, incidental, special, 
              or consequential damages arising from your use of our website or services. Our liability is limited 
              to the amount you paid for the specific product or service in question.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="font-playfair text-2xl font-semibold text-foreground mb-4">9. Governing Law</h2>
            <p className="text-foreground/80 leading-relaxed">
              These terms are governed by the laws of New South Wales, Australia. Any disputes will be resolved 
              in the courts of New South Wales. For international customers, we will attempt to resolve disputes 
              amicably before legal proceedings.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="font-playfair text-2xl font-semibold text-foreground mb-4">10. Changes to Terms</h2>
            <p className="text-foreground/80 leading-relaxed">
              We may update these terms from time to time. Continued use of our website after changes constitutes 
              acceptance of the updated terms. We recommend checking this page periodically.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="font-playfair text-2xl font-semibold text-foreground mb-4">11. Contact Us</h2>
            <p className="text-foreground/80 leading-relaxed">
              For questions about these terms, please contact us:
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
