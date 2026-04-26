"use client";

import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ExternalLink, Eye, ArrowUpRight } from "lucide-react";

const caseStudies = [
  {
    title: "FinTech Dashboard Redesign",
    client: "PayScale India",
    category: "UI/UX + Development",
    results: "3x user engagement, 40% lower bounce rate",
    tags: ["React", "Next.js", "Tailwind"],
    color: "bg-blue-500",
  },
  {
    title: "E-Commerce Brand Launch",
    client: "Aura Cosmetics",
    category: "Branding + Marketing",
    results: "₹2Cr revenue in first quarter",
    tags: ["Shopify", "Meta Ads", "SEO"],
    color: "bg-pink-500",
  },
  {
    title: "EdTech Mobile App",
    client: "LearnSphere",
    category: "App Development",
    results: "100K+ downloads, 4.8★ rating",
    tags: ["React Native", "Firebase", "Node.js"],
    color: "bg-green-500",
  },
  {
    title: "Real Estate Video Campaign",
    client: "Skyline Properties",
    category: "Video Production",
    results: "5M+ views, 200+ qualified leads",
    tags: ["Cinematography", "Motion Graphics", "YouTube"],
    color: "bg-purple-500",
  },
  {
    title: "SaaS Product Design System",
    client: "CloudSync",
    category: "Design System",
    results: "60% faster development cycles",
    tags: ["Figma", "Storybook", "Design Tokens"],
    color: "bg-orange-500",
  },
  {
    title: "Restaurant Chain Rebrand",
    client: "SpiceRoute",
    category: "Branding + Social",
    results: "150% increase in foot traffic",
    tags: ["Identity", "Social Media", "Print"],
    color: "bg-red-500",
  },
];

export default function PortfolioPage() {
  return (
    <div className="space-y-20 pb-20">
      {/* Hero */}
      <section className="relative overflow-hidden bg-gradient-to-br from-agency-primary/10 via-background to-agency-secondary/10 py-24">
        <div className="mx-auto max-w-7xl px-4 text-center">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
            <Badge className="mb-4 bg-agency-primary text-agency-secondary">Our Work</Badge>
            <h1 className="text-4xl font-bold tracking-tight sm:text-6xl text-agency-secondary">
              Portfolio
            </h1>
            <p className="mx-auto mt-6 max-w-2xl text-lg text-muted-foreground">
              Real results for real businesses. Explore our case studies and see the impact we create.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Case Studies Grid */}
      <section className="mx-auto max-w-7xl px-4">
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {caseStudies.map((study, i) => (
            <motion.div
              key={study.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
            >
              <Card className="group h-full hover:shadow-lg transition-all cursor-pointer overflow-hidden">
                {/* Project thumbnail placeholder */}
                <div className={`h-48 ${study.color} relative flex items-center justify-center`}>
                  <div className="text-white/20 text-6xl font-bold">{study.client.charAt(0)}</div>
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors flex items-center justify-center">
                    <ExternalLink className="h-8 w-8 text-white opacity-0 group-hover:opacity-100 transition-opacity" />
                  </div>
                </div>
                <CardContent className="p-6">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-xs font-medium text-muted-foreground">{study.category}</span>
                    <ArrowUpRight className="h-4 w-4 text-muted-foreground group-hover:text-agency-primary transition-colors" />
                  </div>
                  <h3 className="text-lg font-semibold mb-1">{study.title}</h3>
                  <p className="text-sm text-muted-foreground mb-3">{study.client}</p>
                  <div className="flex items-center gap-2 mb-4">
                    <Eye className="h-3 w-3 text-green-500" />
                    <span className="text-xs font-medium text-green-600">{study.results}</span>
                  </div>
                  <div className="flex flex-wrap gap-1.5">
                    {study.tags.map((tag) => (
                      <Badge key={tag} variant="secondary" className="text-xs">{tag}</Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </section>
    </div>
  );
}

