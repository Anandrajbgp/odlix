"use client";

import { motion } from "framer-motion";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  BookOpen,
  Briefcase,
  ClipboardCheck,
  Smartphone,
  ShoppingCart,
  TrendingUp,
  ArrowRight,
  Shield,
  Users,
  Award,
} from "lucide-react";
import Link from "next/link";

const platforms = [
  {
    title: "E-Learning",
    description: "Master new skills with expert-led courses, quizzes, and certifications.",
    icon: BookOpen,
    href: "/learning",
    color: "text-learning-primary",
    bg: "bg-learning-primary/10",
    border: "border-learning-primary/20",
    stats: "200+ Courses",
  },
  {
    title: "Digital Agency",
    description: "Premium design, development, and marketing services for your brand.",
    icon: Briefcase,
    href: "/agency",
    color: "text-agency-primary",
    bg: "bg-agency-primary/10",
    border: "border-agency-primary/20",
    stats: "250+ Projects",
  },
  {
    title: "Test Platform",
    description: "Crack competitive exams with adaptive tests and AI guidance.",
    icon: ClipboardCheck,
    href: "/tests",
    color: "text-tests-primary",
    bg: "bg-tests-primary/10",
    border: "border-tests-primary/20",
    stats: "50K+ Questions",
  },
  {
    title: "App Store",
    description: "Discover curated tools for productivity, design, finance, and business.",
    icon: Smartphone,
    href: "/apps",
    color: "text-apps-primary",
    bg: "bg-apps-primary/10",
    border: "border-apps-primary/20",
    stats: "500+ Apps",
  },
  {
    title: "Mart",
    description: "Shop electronics, digital tools, and exclusive Odlix merchandise.",
    icon: ShoppingCart,
    href: "/mart",
    color: "text-mart-primary",
    bg: "bg-mart-primary/10",
    border: "border-mart-primary/20",
    stats: "Fast Delivery",
  },
  {
    title: "Broker",
    description: "Trade stocks, crypto, and commodities with AI-powered analytics.",
    icon: TrendingUp,
    href: "/broker",
    color: "text-broker-primary",
    bg: "bg-broker-primary/10",
    border: "border-broker-primary/20",
    stats: "Real-time Data",
  },
];

const trustBadges = [
  { icon: Shield, label: "Bank-Grade Security" },
  { icon: Users, label: "50K+ Community" },
  { icon: Award, label: "ISO Certified" },
];

export function EcosystemSection() {
  return (
    <section className="py-24 bg-muted/30">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <Badge variant="outline" className="mb-4 border-homepage-primary/30 text-homepage-primary">
            One Account. Six Platforms.
          </Badge>
          <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            The Odlix Ecosystem
          </h2>
          <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">
            Six interconnected platforms designed to help you learn, build, trade, and grow — all with a single login.
          </p>
        </motion.div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {platforms.map((platform, index) => {
            const Icon = platform.icon;
            return (
              <motion.div
                key={platform.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Link href={platform.href}>
                  <Card className={`group h-full cursor-pointer transition-all hover:shadow-lg hover:-translate-y-1 border-border/50 hover:${platform.border}`}>
                    <CardHeader>
                      <div className="flex items-center justify-between">
                        <div
                          className={`inline-flex h-12 w-12 items-center justify-center rounded-xl ${platform.bg} mb-4`}
                        >
                          <Icon className={`h-6 w-6 ${platform.color}`} />
                        </div>
                        <span className="text-xs font-medium text-muted-foreground bg-muted px-2 py-1 rounded-full">
                          {platform.stats}
                        </span>
                      </div>
                      <CardTitle className="text-xl">{platform.title}</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-muted-foreground text-sm">{platform.description}</p>
                      <div className="mt-4 flex items-center text-sm font-medium text-homepage-primary group-hover:underline">
                        Explore <ArrowRight className="ml-1 h-4 w-4 transition-transform group-hover:translate-x-1" />
                      </div>
                    </CardContent>
                  </Card>
                </Link>
              </motion.div>
            );
          })}
        </div>

        {/* Trust badges */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="mt-16 flex flex-wrap items-center justify-center gap-6"
        >
          {trustBadges.map((badge) => {
            const Icon = badge.icon;
            return (
              <div key={badge.label} className="flex items-center gap-2 text-sm text-muted-foreground">
                <Icon className="h-4 w-4 text-homepage-primary" />
                <span>{badge.label}</span>
              </div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}

