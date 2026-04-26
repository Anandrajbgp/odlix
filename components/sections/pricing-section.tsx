"use client";

import { motion } from "framer-motion";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Check, Sparkles, Lock, Zap, Crown } from "lucide-react";
import Link from "next/link";

const plans = [
  {
    name: "Beginner",
    description: "Begin Your Skill Journey",
    price: "₹999",
    period: "one-time",
    focus: "Earn ₹8–10k/month",
    skills: 8,
    features: [
      "Spoken English",
      "Basic Graphic Design",
      "Video Editing",
      "Affiliate Marketing",
      "Rich Mindset & Time Management",
      "Content Creation",
      "Advanced Communication",
      "Banking & Digital Finance",
      "Starter Community Access",
      "Skill Assessments",
      "Completion Badges",
      "Earning Toolkit",
    ],
    cta: "Get Started",
    href: "/payments/checkout?plan=beginner&amount=999",
    popular: false,
    commission: "Direct 54% | Level 2: 12%",
    icon: Zap,
  },
  {
    name: "Pro",
    description: "Level Up Your Career",
    price: "₹2,499",
    period: "one-time",
    focus: "Earn ₹25–30k/month",
    skills: 15,
    features: [
      "Everything in Beginner",
      "Advanced Graphic Design",
      "YouTube Mastery",
      "Social Media Marketing",
      "Public Speaking",
      "Copywriting",
      "Freelancing",
      "Stock Market Basics",
      "Options & Futures Trading",
      "Skill Certifications",
      "Mentorship Rewards",
      "Priority Community",
      "Hands-on Projects",
    ],
    cta: "Go Pro",
    href: "/payments/checkout?plan=pro&amount=2499",
    popular: true,
    commission: "Direct 56% | Level 2: 14%",
    icon: Crown,
  },
  {
    name: "Expert",
    description: "Scale to Six Figures",
    price: "₹4,999",
    period: "one-time",
    focus: "Earn ₹80k–1L+/month",
    skills: 23,
    features: [
      "Everything in Pro",
      "Financial Literacy, Mutual Funds, SIPs",
      "NFTs & Digital Assets",
      "Commodities & Real Estate Basics",
      "Cryptocurrency & Blockchain",
      "Advanced Video Editing & Motion Graphics",
      "Personal Branding",
      "AI Tools & Data Analytics",
      "E-commerce",
      "Freelance/Project Marketplace",
      "Exclusive Workshops & Masterclasses",
      "Expert Recognition Badges",
      "1-on-1 Growth Sessions",
      "Scaling Blueprint",
    ],
    cta: "Become Expert",
    href: "/payments/checkout?plan=expert&amount=4999",
    popular: false,
    commission: "Direct 58% | Level 2: 17%",
    icon: Sparkles,
  },
  {
    name: "Life Mastery",
    description: "Unlock After Any Package",
    price: "Free",
    period: "unlock",
    focus: "Holistic growth & life success",
    skills: 8,
    features: [
      "Tax & Financial Planning",
      "Emotional Intelligence",
      "Mindfulness & Critical Thinking",
      "Relationship Skills",
      "Civic & Cultural Awareness",
      "Ethical Decision-Making",
      "Environmental Responsibility",
      "Life Success Framework",
    ],
    cta: "Unlock",
    href: "#",
    popular: false,
    commission: null,
    icon: Lock,
    locked: true,
  },
];

export function PricingSection() {
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
          <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            Choose Your Growth Path
          </h2>
          <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">
            One-time investment. Lifetime access. Start earning while you learn.
          </p>
        </motion.div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {plans.map((plan, index) => {
            const Icon = plan.icon;
            return (
              <motion.div
                key={plan.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Card
                  className={`h-full relative flex flex-col ${
                    plan.popular
                      ? "border-homepage-primary shadow-lg shadow-homepage-primary/10 scale-105 z-10"
                      : plan.locked
                      ? "border-dashed border-muted-foreground/30 opacity-80"
                      : "border-border/50"
                  }`}
                >
                  {plan.popular && (
                    <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                      <span className="inline-flex items-center gap-1 rounded-full bg-gradient-to-r from-homepage-primary to-homepage-secondary px-3 py-1 text-xs font-medium text-white">
                        <Sparkles className="h-3 w-3" />
                        Most Popular
                      </span>
                    </div>
                  )}
                  {plan.locked && (
                    <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                      <span className="inline-flex items-center gap-1 rounded-full bg-muted px-3 py-1 text-xs font-medium text-muted-foreground border">
                        <Lock className="h-3 w-3" />
                        Unlock After Purchase
                      </span>
                    </div>
                  )}

                  <CardHeader className="text-center pb-4">
                    <div className="mx-auto h-10 w-10 rounded-xl bg-gradient-to-br from-homepage-primary/10 to-homepage-secondary/10 flex items-center justify-center mb-3">
                      <Icon className="h-5 w-5 text-homepage-primary" />
                    </div>
                    <CardTitle className="text-xl">{plan.name}</CardTitle>
                    <p className="text-sm text-muted-foreground mt-1">
                      {plan.description}
                    </p>
                    <div className="mt-4">
                      <span className="text-3xl font-bold text-foreground">
                        {plan.price}
                      </span>
                      {plan.period === "one-time" && (
                        <span className="text-muted-foreground text-sm ml-1">one-time</span>
                      )}
                    </div>
                    <div className="mt-2 inline-flex items-center gap-1 text-xs font-medium text-green-600 bg-green-50 px-2 py-0.5 rounded-full">
                      <Zap className="h-3 w-3" />
                      {plan.focus}
                    </div>
                    {plan.commission && (
                      <div className="mt-2 text-xs text-muted-foreground">
                        Affiliate: {plan.commission}
                      </div>
                    )}
                  </CardHeader>

                  <CardContent className="flex-1 flex flex-col">
                    <ul className="space-y-2 flex-1">
                      {plan.features.map((feature) => (
                        <li key={feature} className="flex items-start gap-2">
                          <Check className="h-4 w-4 text-green-500 shrink-0 mt-0.5" />
                          <span className="text-sm text-muted-foreground">
                            {feature}
                          </span>
                        </li>
                      ))}
                    </ul>
                    <Link href={plan.href} className="mt-6">
                      <Button
                        className={`w-full ${
                          plan.popular
                            ? "bg-gradient-to-r from-homepage-primary to-homepage-secondary text-white"
                            : plan.locked
                            ? ""
                            : ""
                        }`}
                        variant={plan.locked ? "outline" : plan.popular ? "default" : "outline"}
                        disabled={plan.locked}
                      >
                        {plan.locked ? "Complete Any Package to Unlock" : plan.cta}
                      </Button>
                    </Link>
                  </CardContent>
                </Card>
              </motion.div>
            );
          })}
        </div>

        {/* Affiliate info banner */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="mt-12 rounded-2xl bg-gradient-to-r from-homepage-primary to-homepage-secondary p-6 text-white text-center"
        >
          <h3 className="text-lg font-semibold mb-2">
            Earn While You Learn with Our Affiliate Program
          </h3>
          <p className="text-white/80 text-sm max-w-2xl mx-auto">
            Refer friends and earn up to 58% direct commission + 17% level-2 commission.
            Weekly payouts every Saturday (min ₹200). Festival bonuses, domestic trips, and leaderboard rewards included.
          </p>
        </motion.div>
      </div>
    </section>
  );
}

