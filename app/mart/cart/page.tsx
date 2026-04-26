"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Trash2, Plus, Minus, ShoppingBag, ArrowRight, Truck } from "lucide-react";
import Link from "next/link";

interface CartItem {
  id: number;
  name: string;
  category: string;
  price: number;
  quantity: number;
}

const initialItems: CartItem[] = [
  { id: 1, name: "Mechanical Keyboard", category: "Electronics", price: 2499, quantity: 1 },
  { id: 2, name: "Premium Notebook Set", category: "Stationery", price: 499, quantity: 2 },
  { id: 3, name: "SEO Toolkit Pro", category: "Digital Tools", price: 999, quantity: 1 },
];

export default function CartPage() {
  const [items, setItems] = useState<CartItem[]>(initialItems);

  function updateQuantity(id: number, delta: number) {
    setItems((prev) =>
      prev.map((item) =>
        item.id === id
          ? { ...item, quantity: Math.max(1, item.quantity + delta) }
          : item
      )
    );
  }

  function removeItem(id: number) {
    setItems((prev) => prev.filter((item) => item.id !== id));
  }

  const subtotal = items.reduce((sum, item) => sum + item.price * item.quantity, 0);
  const shipping = subtotal > 999 ? 0 : 99;
  const total = subtotal + shipping;

  return (
    <div className="space-y-8 pb-20 max-w-5xl mx-auto px-4">
      <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} className="pt-8">
        <h1 className="text-3xl font-bold flex items-center gap-3">
          <ShoppingBag className="h-8 w-8 text-mart-primary" />
          Shopping Cart
        </h1>
        <p className="text-muted-foreground mt-1">Review your items and proceed to checkout</p>
      </motion.div>

      {items.length === 0 ? (
        <Card className="py-20 text-center">
          <CardContent>
            <ShoppingBag className="h-16 w-16 text-muted-foreground mx-auto mb-4" />
            <h2 className="text-xl font-semibold mb-2">Your cart is empty</h2>
            <p className="text-muted-foreground mb-6">Browse our products and add items to your cart</p>
            <Link href="/mart">
              <Button className="bg-mart-primary text-white">Continue Shopping</Button>
            </Link>
          </CardContent>
        </Card>
      ) : (
        <div className="grid gap-6 lg:grid-cols-3">
          {/* Cart Items */}
          <div className="lg:col-span-2 space-y-4">
            {items.map((item, i) => (
              <motion.div key={item.id} initial={{ opacity: 0, x: -10 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: i * 0.1 }}>
                <Card>
                  <CardContent className="p-4 flex items-center gap-4">
                    <div className="h-16 w-16 rounded-lg bg-mart-primary/10 flex items-center justify-center text-mart-primary font-bold text-lg shrink-0">
                      {item.name.charAt(0)}
                    </div>
                    <div className="flex-1 min-w-0">
                      <h3 className="font-semibold text-sm truncate">{item.name}</h3>
                      <Badge variant="secondary" className="text-xs mt-1">{item.category}</Badge>
                    </div>
                    <div className="flex items-center gap-2">
                      <button onClick={() => updateQuantity(item.id, -1)} className="h-8 w-8 rounded-full border flex items-center justify-center hover:bg-muted transition-colors">
                        <Minus className="h-3 w-3" />
                      </button>
                      <span className="w-8 text-center text-sm font-medium">{item.quantity}</span>
                      <button onClick={() => updateQuantity(item.id, 1)} className="h-8 w-8 rounded-full border flex items-center justify-center hover:bg-muted transition-colors">
                        <Plus className="h-3 w-3" />
                      </button>
                    </div>
                    <div className="text-right min-w-[80px]">
                      <p className="font-semibold">₹{item.price * item.quantity}</p>
                      <p className="text-xs text-muted-foreground">₹{item.price} each</p>
                    </div>
                    <button onClick={() => removeItem(item.id)} className="p-2 text-red-500 hover:bg-red-50 rounded-lg transition-colors">
                      <Trash2 className="h-4 w-4" />
                    </button>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>

          {/* Order Summary */}
          <motion.div initial={{ opacity: 0, x: 10 }} animate={{ opacity: 1, x: 0 }}>
            <Card className="sticky top-24">
              <CardHeader>
                <CardTitle className="text-lg">Order Summary</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex justify-between text-sm">
                  <span className="text-muted-foreground">Subtotal</span>
                  <span>₹{subtotal}</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-muted-foreground">Shipping</span>
                  <span>{shipping === 0 ? "Free" : `₹${shipping}`}</span>
                </div>
                {shipping === 0 && (
                  <div className="flex items-center gap-2 text-xs text-green-600 bg-green-50 p-2 rounded-lg">
                    <Truck className="h-3 w-3" />
                    Free shipping on orders above ₹999
                  </div>
                )}
                <div className="border-t pt-4 flex justify-between font-semibold text-lg">
                  <span>Total</span>
                  <span className="text-mart-primary">₹{total}</span>
                </div>
                <Link href="/payments/checkout">
                  <Button className="w-full bg-mart-primary text-white h-12">
                    Proceed to Checkout <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </Link>
                <Link href="/mart">
                  <Button variant="outline" className="w-full">Continue Shopping</Button>
                </Link>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      )}
    </div>
  );
}

