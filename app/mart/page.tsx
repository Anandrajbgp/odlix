"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Search, ShoppingBag, Tag, Truck, Shield } from "lucide-react";

const products = [
  { name: "Mechanical Keyboard", category: "Electronics", price: "₹2,499", rating: 4.8 },
  { name: "Premium Notebook Set", category: "Stationery", price: "₹499", rating: 4.6 },
  { name: "SEO Toolkit Pro", category: "Digital Tools", price: "₹999", rating: 4.9 },
  { name: "Odlix Hoodie", category: "Merchandise", price: "₹1,299", rating: 4.7 },
  { name: "Webcam HD 1080p", category: "Electronics", price: "₹3,499", rating: 4.5 },
  { name: "Design Template Pack", category: "Digital Tools", price: "₹799", rating: 4.8 },
];

export default function MartPage() {
  const [query, setQuery] = useState("");
  const filtered = products.filter((p) =>
    p.name.toLowerCase().includes(query.toLowerCase()) ||
    p.category.toLowerCase().includes(query.toLowerCase())
  );

  return (
    <div className="space-y-20 pb-20">
      <section className="relative overflow-hidden bg-gradient-to-br from-mart-primary/10 via-background to-mart-secondary/10 py-24">
        <div className="mx-auto max-w-7xl px-4 text-center">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
            <h1 className="text-4xl font-bold tracking-tight sm:text-6xl text-mart-primary">
              Shop the Best
            </h1>
            <p className="mx-auto mt-6 max-w-2xl text-lg text-muted-foreground">
              Electronics, stationery, digital tools, and exclusive Odlix merchandise.
            </p>
            <div className="mt-10 mx-auto max-w-md relative">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
              <Input
                placeholder="Search products..."
                className="pl-10"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
              />
            </div>
          </motion.div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4">
        <div className="grid grid-cols-3 gap-4 mb-12 text-center">
          <div className="flex flex-col items-center gap-2">
            <Truck className="h-8 w-8 text-mart-primary" />
            <span className="text-sm">Fast Delivery</span>
          </div>
          <div className="flex flex-col items-center gap-2">
            <Shield className="h-8 w-8 text-mart-primary" />
            <span className="text-sm">Verified Products</span>
          </div>
          <div className="flex flex-col items-center gap-2">
            <Tag className="h-8 w-8 text-mart-primary" />
            <span className="text-sm">Best Prices</span>
          </div>
        </div>
        <h2 className="text-3xl font-bold text-center mb-12">Trending Products</h2>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {filtered.map((product, i) => (
            <motion.div key={product.name} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.05 }}>
              <Card className="h-full hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-medium bg-mart-primary/10 text-mart-primary px-2 py-1 rounded">{product.category}</span>
                    <span className="font-bold text-mart-primary">{product.price}</span>
                  </div>
                  <CardTitle className="text-lg mt-2">{product.name}</CardTitle>
                </CardHeader>
                <CardContent>
                  <Button size="sm" className="w-full bg-mart-primary text-white">
                    <ShoppingBag className="mr-2 h-4 w-4" />Add to Cart
                  </Button>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
        {filtered.length === 0 && <p className="text-center text-muted-foreground mt-8">No products found.</p>}
      </section>
    </div>
  );
}

