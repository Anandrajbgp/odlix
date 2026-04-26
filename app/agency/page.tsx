"use client";

import { motion } from "framer-motion";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Globe, Smartphone, Video, Palette, Megaphone, ArrowRight } from "lucide-react";
import Link from "next/link";

const services = [
  { icon: Globe, title: "Website Development", desc: "Websites that sell and convert visitors into customers." },
  { icon: Smartphone, title: "App Development", desc: "Native and cross-platform apps that scale." },
  { icon: Video, title: "Video Production", desc: "Stories that convert through cinematic quality." },
  { icon: Palette, title: "Graphic Design", desc: "Designs that inspire and build brand identity." },
  { icon: Megaphone, title: "Digital Marketing", desc: "Campaigns that work across all channels." },
];

const stats = [
  { value: "250+", label: "Projects Delivered" },
  { value: "120+", label: "Happy Clients" },
  { value: "5+", label: "Years Experience" },
  { value: "24/7", label: "Support" },
];

export default function AgencyPage() {
  return (
    <div className="space-y-20 pb-20">
      <section className="relative overflow-hidden bg-gradient-to-br from-agency-primary/10 via-background to-agency-secondary/10 py-24">
        <div className="mx-auto max-w-7xl px-4 text-center">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
            <h1 className="text-4xl font-bold tracking-tight sm:text-6xl text-agency-secondary">
              Your Brand. Our Innovation.
            </h1>
            <p className="mx-auto mt-6 max-w-2xl text-lg text-muted-foreground">
              We design, build & scale businesses with cutting-edge digital solutions.
            </p>
            <div className="mt-10 flex justify-center gap-4">
              <Link href="/agency/contact"><Button size="lg" className="bg-agency-primary text-agency-secondary">Get Free Consultation</Button></Link>
              <Link href="/agency/portfolio"><Button variant="outline" size="lg">View Portfolio</Button></Link>
            </div>
          </motion.div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          {stats.map((stat) => (
            <div key={stat.label}>
              <div className="text-3xl font-bold text-agency-primary">{stat.value}</div>
              <div className="mt-1 text-sm text-muted-foreground">{stat.label}</div>
            </div>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4">
        <h2 className="text-3xl font-bold text-center mb-12">Our Services</h2>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {services.map((service, i) => {
            const Icon = service.icon;
            return (
              <motion.div key={service.title} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }}>
                <Card className="h-full hover:shadow-lg transition-shadow">
                  <CardHeader>
                    <Icon className="h-10 w-10 text-agency-primary mb-2" />
                    <CardTitle className="text-lg">{service.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground">{service.desc}</p>
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
