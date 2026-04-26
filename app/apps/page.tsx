"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Search, Download, Star } from "lucide-react";

const appList = [
  { name: "Notion Pro", category: "Productivity", rating: 4.9, downloads: "2M+" },
  { name: "Canva Studio", category: "Design", rating: 4.8, downloads: "5M+" },
  { name: "Zerodha Clone", category: "Finance", rating: 4.7, downloads: "1M+" },
  { name: "Buffer Social", category: "Marketing", rating: 4.6, downloads: "800K+" },
  { name: "Figma Plugin Hub", category: "Design", rating: 4.9, downloads: "1.5M+" },
  { name: "QuickBooks Lite", category: "Finance", rating: 4.5, downloads: "600K+" },
];

export default function AppsPage() {
  const [query, setQuery] = useState("");
  const filtered = appList.filter((a) =>
    a.name.toLowerCase().includes(query.toLowerCase()) ||
    a.category.toLowerCase().includes(query.toLowerCase())
  );

  return (
    <div className="space-y-20 pb-20">
      <section className="relative overflow-hidden bg-gradient-to-br from-apps-primary/10 via-background to-apps-secondary/10 py-24">
        <div className="mx-auto max-w-7xl px-4 text-center">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
            <h1 className="text-4xl font-bold tracking-tight sm:text-6xl text-apps-primary">
              Discover Powerful Tools
            </h1>
            <p className="mx-auto mt-6 max-w-2xl text-lg text-muted-foreground">
              Curated apps and websites for productivity, learning, design, finance, and business.
            </p>
            <div className="mt-10 mx-auto max-w-md relative">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
              <Input
                placeholder="Search apps..."
                className="pl-10"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
              />
            </div>
          </motion.div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4">
        <h2 className="text-3xl font-bold text-center mb-12">Featured Apps</h2>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {filtered.map((app, i) => (
            <motion.div key={app.name} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.05 }}>
              <Card className="h-full hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-medium bg-apps-primary/10 text-apps-primary px-2 py-1 rounded">{app.category}</span>
                    <span className="flex items-center gap-1 text-sm"><Star className="h-3 w-3 fill-yellow-400 text-yellow-400" />{app.rating}</span>
                  </div>
                  <CardTitle className="text-lg mt-2">{app.name}</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-muted-foreground flex items-center gap-1"><Download className="h-3 w-3" />{app.downloads}</span>
                    <Button size="sm" variant="outline">Get</Button>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
        {filtered.length === 0 && <p className="text-center text-muted-foreground mt-8">No apps found.</p>}
      </section>
    </div>
  );
}

