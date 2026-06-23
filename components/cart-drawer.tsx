"use client"

import { useCart } from "@/components/cart-context"
import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetHeader, SheetTitle } from "@/components/ui/sheet"
import { Separator } from "@/components/ui/separator"
import { Minus, Plus, Trash2, ShoppingBag, CreditCard, Building2 } from "lucide-react"
import Image from "next/image"
import { useState } from "react"

export function CartDrawer() {
  const { items, removeItem, updateQuantity, clearCart, totalItems, totalPrice, isCartOpen, setIsCartOpen } = useCart()
  const [showCheckout, setShowCheckout] = useState(false)

  const handlePayPal = () => {
    const amount = totalPrice.toFixed(2)
    window.open(`https://www.paypal.me/lilmisslimited/${amount}AUD`, "_blank", "noopener,noreferrer")
  }

  return (
    <Sheet open={isCartOpen} onOpenChange={setIsCartOpen}>
      <SheetContent className="flex flex-col w-full sm:max-w-lg bg-background">
        <SheetHeader>
          <SheetTitle className="flex items-center gap-2 text-foreground">
            <ShoppingBag className="h-5 w-5" />
            Your Cart ({totalItems} {totalItems === 1 ? "item" : "items"})
          </SheetTitle>
        </SheetHeader>

        {items.length === 0 ? (
          <div className="flex-1 flex flex-col items-center justify-center gap-4 text-center">
            <ShoppingBag className="h-16 w-16 text-muted-foreground/40" />
            <div>
              <p className="text-lg font-semibold text-foreground">Your cart is empty</p>
              <p className="text-sm text-muted-foreground mt-1">
                Browse our collection and add items to get started.
              </p>
            </div>
            <Button onClick={() => setIsCartOpen(false)} variant="outline" className="bg-transparent">
              Continue Shopping
            </Button>
          </div>
        ) : !showCheckout ? (
          <>
            <div className="flex-1 overflow-y-auto space-y-4 pr-1">
              {items.map((item) => (
                <div key={item.id} className="flex gap-3 rounded-lg border border-border bg-card p-3">
                  <div className="relative h-20 w-20 flex-shrink-0 overflow-hidden rounded-md">
                    <Image
                      src={item.image}
                      alt={item.name}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="flex flex-1 flex-col justify-between">
                    <div>
                      <h4 className="text-sm font-semibold text-foreground leading-tight">{item.name}</h4>
                      <p className="text-xs text-muted-foreground mt-0.5">{item.category}</p>
                    </div>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <button
                          type="button"
                          onClick={() => updateQuantity(item.id, item.quantity - 1)}
                          className="h-7 w-7 rounded-md border border-border flex items-center justify-center hover:bg-accent transition-colors"
                          aria-label="Decrease quantity"
                        >
                          <Minus className="h-3 w-3 text-foreground" />
                        </button>
                        <span className="text-sm font-medium w-6 text-center text-foreground">{item.quantity}</span>
                        <button
                          type="button"
                          onClick={() => updateQuantity(item.id, item.quantity + 1)}
                          className="h-7 w-7 rounded-md border border-border flex items-center justify-center hover:bg-accent transition-colors"
                          aria-label="Increase quantity"
                        >
                          <Plus className="h-3 w-3 text-foreground" />
                        </button>
                      </div>
                      <div className="flex items-center gap-3">
                        <span className="text-sm font-bold text-foreground">
                          ${(item.price * item.quantity).toFixed(2)}
                        </span>
                        <button
                          type="button"
                          onClick={() => removeItem(item.id)}
                          className="text-muted-foreground hover:text-destructive transition-colors"
                          aria-label={`Remove ${item.name} from cart`}
                        >
                          <Trash2 className="h-4 w-4" />
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className="space-y-4 pt-4 border-t border-border">
              <div className="flex items-center justify-between">
                <span className="text-base font-semibold text-foreground">Total</span>
                <span className="text-xl font-bold text-foreground">${totalPrice.toFixed(2)} AUD</span>
              </div>
              <Button onClick={() => setShowCheckout(true)} className="w-full" size="lg">
                Proceed to Checkout
              </Button>
              <div className="flex gap-2">
                <Button onClick={() => setIsCartOpen(false)} variant="outline" className="flex-1 bg-transparent">
                  Continue Shopping
                </Button>
                <Button onClick={clearCart} variant="outline" className="bg-transparent text-destructive hover:text-destructive">
                  Clear Cart
                </Button>
              </div>
            </div>
          </>
        ) : (
          <>
            <div className="flex-1 overflow-y-auto space-y-6 pr-1">
              <div className="rounded-lg border border-border bg-card p-4 space-y-2">
                <h3 className="font-semibold text-foreground">Order Summary</h3>
                {items.map((item) => (
                  <div key={item.id} className="flex justify-between text-sm">
                    <span className="text-muted-foreground">
                      {item.name} x{item.quantity}
                    </span>
                    <span className="font-medium text-foreground">${(item.price * item.quantity).toFixed(2)}</span>
                  </div>
                ))}
                <Separator />
                <div className="flex justify-between font-bold text-foreground">
                  <span>Total</span>
                  <span>${totalPrice.toFixed(2)} AUD</span>
                </div>
              </div>

              <div className="space-y-3">
                <h3 className="font-semibold text-foreground">Choose Payment Method</h3>

                <button
                  type="button"
                  onClick={handlePayPal}
                  className="w-full flex items-center gap-3 rounded-lg border border-border bg-card p-4 hover:border-primary hover:bg-accent/50 transition-colors text-left"
                >
                  <div className="h-10 w-10 rounded-full bg-[#0070ba] flex items-center justify-center flex-shrink-0">
                    <span className="text-white font-bold text-xs">PP</span>
                  </div>
                  <div>
                    <p className="font-semibold text-foreground">Pay with PayPal</p>
                    <p className="text-xs text-muted-foreground">
                      Redirects to PayPal for ${totalPrice.toFixed(2)} AUD
                    </p>
                  </div>
                </button>

                <div className="w-full rounded-lg border border-border bg-card p-4 space-y-2">
                  <div className="flex items-center gap-3">
                    <div className="h-10 w-10 rounded-full bg-secondary flex items-center justify-center flex-shrink-0">
                      <Building2 className="h-5 w-5 text-secondary-foreground" />
                    </div>
                    <div>
                      <p className="font-semibold text-foreground">Bank Transfer</p>
                      <p className="text-xs text-muted-foreground">Westpac Business One</p>
                    </div>
                  </div>
                  <Separator />
                  <div className="text-sm space-y-1 text-muted-foreground">
                    <div className="flex justify-between">
                      <span>BSB:</span>
                      <span className="font-medium text-foreground">032260</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Account No:</span>
                      <span className="font-medium text-foreground">578753</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Amount:</span>
                      <span className="font-medium text-foreground">${totalPrice.toFixed(2)} AUD</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Reference:</span>
                      <span className="font-medium text-foreground">Your name + order</span>
                    </div>
                  </div>
                </div>
              </div>

              <div className="rounded-lg border border-border bg-accent/30 p-4">
                <p className="text-sm text-muted-foreground">
                  After payment, please email your order confirmation to{" "}
                  <a href="mailto:lilmisslimited@gmail.com" className="font-semibold text-primary hover:underline">
                    lilmisslimited@gmail.com
                  </a>{" "}
                  or call{" "}
                  <a href="tel:0414814838" className="font-semibold text-primary hover:underline">
                    0414 814 838
                  </a>{" "}
                  so we can process your order.
                </p>
              </div>
            </div>

            <div className="pt-4 border-t border-border">
              <Button onClick={() => setShowCheckout(false)} variant="outline" className="w-full bg-transparent">
                Back to Cart
              </Button>
            </div>
          </>
        )}
      </SheetContent>
    </Sheet>
  )
}
