"use client";

import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Target, Eye, Heart, Zap } from "lucide-react";

const values = [
  { icon: Target, title: "Mission", desc: "Empower every individual with digital skills and tools to build their future." },
  { icon: Eye, title: "Vision", desc: "Become India's most trusted digital ecosystem for learning, earning, and growth." },
  { icon: Heart, title: "Values", desc: "Transparency, innovation, and student success drive everything we do." },
  { icon: Zap, title: "Impact", desc: "50K+ learners, 250+ projects, and counting. We measure success by your growth." },
];

export default function AboutPage() {
  return (
    <div className="space-y-20 pb-20">
      <section className="pt-24 pb-12 text-center">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
          <h1 className="text-4xl font-bold">About Odlix</h1>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-muted-foreground">
            One platform. Six ecosystems. Infinite possibilities for your digital journey.
          </p>
        </motion.div>
      </section>
      <section className="mx-auto max-w-7xl px-4">
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {values.map((v, i) => {
            const Icon = v.icon;
            return (
              <motion.div key={v.title} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }}>
                <Card className="h-full text-center">
                  <CardContent className="pt-6">
                    <Icon className="h-10 w-10 text-homepage-primary mx-auto mb-3" />
                    <h3 className="font-semibold text-lg mb-2">{v.title}</h3>
                    <p className="text-sm text-muted-foreground">{v.desc}</p>
                  </CardContent>
                </Card>
              </motion.div>
            );
          })}
        </div>
      </section>
    </div>
  );
}

