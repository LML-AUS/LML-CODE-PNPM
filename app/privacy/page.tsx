"use client"

import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { CartDrawer } from "@/components/cart-drawer"

export default function PrivacyPolicyPage() {
  return (
    <main className="min-h-screen">
      <Header />
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="max-w-4xl mx-auto prose prose-lg">
          <h1 className="font-playfair text-4xl font-bold text-foreground mb-8">Privacy Policy</h1>
          <p className="text-muted-foreground mb-4">Last updated: April 2026</p>
          
          <section className="mb-8">
            <h2 className="font-playfair text-2xl font-semibold text-foreground mb-4">1. About Us</h2>
            <p className="text-foreground/80 leading-relaxed">
              LILMISSLIMITED (ABN: 46 745 385 527) is a sole trader business operating in New South Wales, Australia. 
              We are committed to protecting your privacy and handling your personal information in accordance with the 
              Privacy Act 1988 (Cth) and the Australian Privacy Principles (APPs).
            </p>
          </section>

          <section className="mb-8">
            <h2 className="font-playfair text-2xl font-semibold text-foreground mb-4">2. Information We Collect</h2>
            <p className="text-foreground/80 leading-relaxed mb-4">We may collect the following personal information:</p>
            <ul className="list-disc pl-6 text-foreground/80 space-y-2">
              <li>Name and contact details (email address, phone number, postal address)</li>
              <li>Payment information (processed securely through PayPal and Stripe)</li>
              <li>Order history and preferences</li>
              <li>Body measurements for alteration services</li>
              <li>Communication records with our business</li>
              <li>Website usage data and cookies</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="font-playfair text-2xl font-semibold text-foreground mb-4">3. How We Use Your Information</h2>
            <p className="text-foreground/80 leading-relaxed mb-4">We use your personal information to:</p>
            <ul className="list-disc pl-6 text-foreground/80 space-y-2">
              <li>Process and fulfil your orders</li>
              <li>Provide alteration and consultation services</li>
              <li>Communicate with you about your orders and appointments</li>
              <li>Send marketing communications (with your consent)</li>
              <li>Improve our products and services</li>
              <li>Comply with legal obligations</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="font-playfair text-2xl font-semibold text-foreground mb-4">4. Payment Processing</h2>
            <p className="text-foreground/80 leading-relaxed">
              We use trusted third-party payment processors (PayPal and Stripe) to handle transactions. 
              We do not store your complete credit card details on our servers. Payment processing is 
              subject to the privacy policies of PayPal and Stripe respectively.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="font-playfair text-2xl font-semibold text-foreground mb-4">5. Disclosure of Information</h2>
            <p className="text-foreground/80 leading-relaxed mb-4">We may disclose your information to:</p>
            <ul className="list-disc pl-6 text-foreground/80 space-y-2">
              <li>Payment processors (PayPal, Stripe) to complete transactions</li>
              <li>Shipping and courier services for order delivery</li>
              <li>Professional advisors (accountants, lawyers) as required</li>
              <li>Government authorities if required by law</li>
            </ul>
            <p className="text-foreground/80 leading-relaxed mt-4">
              We do not sell, rent, or trade your personal information to third parties for marketing purposes.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="font-playfair text-2xl font-semibold text-foreground mb-4">6. Data Security</h2>
            <p className="text-foreground/80 leading-relaxed">
              We take reasonable steps to protect your personal information from misuse, interference, loss, 
              unauthorised access, modification, or disclosure. This includes using secure HTTPS connections, 
              encrypted payment processing, and secure data storage practices.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="font-playfair text-2xl font-semibold text-foreground mb-4">7. Cookies and Tracking</h2>
            <p className="text-foreground/80 leading-relaxed">
              Our website uses cookies to enhance your browsing experience, remember your preferences, 
              and analyse website traffic. You can manage cookie preferences through your browser settings. 
              Disabling cookies may affect some website functionality.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="font-playfair text-2xl font-semibold text-foreground mb-4">8. Your Rights</h2>
            <p className="text-foreground/80 leading-relaxed mb-4">Under Australian Privacy law, you have the right to:</p>
            <ul className="list-disc pl-6 text-foreground/80 space-y-2">
              <li>Access your personal information we hold</li>
              <li>Request correction of inaccurate information</li>
              <li>Request deletion of your information (where legally permissible)</li>
              <li>Opt out of marketing communications</li>
              <li>Lodge a complaint with the Office of the Australian Information Commissioner (OAIC)</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="font-playfair text-2xl font-semibold text-foreground mb-4">9. International Customers</h2>
            <p className="text-foreground/80 leading-relaxed">
              If you are accessing our services from outside Australia, please be aware that your information 
              may be transferred to, stored, and processed in Australia. By using our services, you consent 
              to this transfer. We comply with applicable international data protection requirements including 
              GDPR principles for EU customers.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="font-playfair text-2xl font-semibold text-foreground mb-4">10. Contact Us</h2>
            <p className="text-foreground/80 leading-relaxed">
              For privacy-related enquiries or to exercise your rights, please contact us:
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
