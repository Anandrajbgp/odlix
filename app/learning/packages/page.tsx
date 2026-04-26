"use client";

import { motion } from "framer-motion";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Check, Sparkles, Zap, Crown, Lock, ArrowRight, IndianRupee } from "lucide-react";
import Link from "next/link";

const packages = [
  {
    name: "Beginner",
    price: "₹999",
    focus: "Earn ₹8–10k/month",
    color: "border-blue-200",
    badgeColor: "bg-blue-100 text-blue-700",
    icon: Zap,
    features: [
      "Spoken English", "Basic Graphic Design", "Video Editing",
      "Affiliate Marketing", "Rich Mindset & Time Management",
      "Content Creation", "Advanced Communication", "Banking & Digital Finance",
    ],
    extras: ["Starter Community", "Skill Assessments", "Completion Badges", "Earning Toolkit"],
    commission: "54% Direct | 12% Level 2",
    href: "/payments/checkout?plan=beginner&amount=999",
  },
  {
    name: "Pro",
    price: "₹2,499",
    focus: "Earn ₹25–30k/month",
    color: "border-purple-200",
    badgeColor: "bg-purple-100 text-purple-700",
    icon: Crown,
    popular: true,
    features: [
      "Everything in Beginner",
      "Advanced Graphic Design", "YouTube Mastery", "Social Media Marketing",
      "Public Speaking", "Copywriting", "Freelancing",
      "Stock Market Basics", "Options & Futures Trading",
    ],
    extras: ["Skill Certifications", "Mentorship Rewards", "Priority Community", "Hands-on Projects"],
    commission: "56% Direct | 14% Level 2",
    href: "/payments/checkout?plan=pro&amount=2499",
  },
  {
    name: "Expert",
    price: "₹4,999",
    focus: "Earn ₹80k–1L+/month",
    color: "border-orange-200",
    badgeColor: "bg-orange-100 text-orange-700",
    icon: Sparkles,
    features: [
      "Everything in Pro",
      "Financial Literacy, Mutual Funds, SIPs", "NFTs & Digital Assets",
      "Commodities & Real Estate Basics", "Cryptocurrency & Blockchain",
      "Advanced Video Editing & Motion Graphics", "Personal Branding",
      "AI Tools & Data Analytics", "E-commerce",
    ],
    extras: ["Freelance Marketplace", "Exclusive Workshops", "Expert Badges", "1-on-1 Sessions", "Scaling Blueprint"],
    commission: "58% Direct | 17% Level 2",
    href: "/payments/checkout?plan=expert&amount=4999",
  },
  {
    name: "Life Mastery",
    price: "Free",
    focus: "Holistic Growth",
    color: "border-dashed border-muted",
    badgeColor: "bg-muted text-muted-foreground",
    icon: Lock,
    locked: true,
    features: [
      "Tax & Financial Planning", "Emotional Intelligence",
      "Mindfulness & Critical Thinking", "Relationship Skills",
      "Civic & Cultural Awareness", "Ethical Decision-Making",
      "Environmental Responsibility", "Life Success Framework",
    ],
    extras: ["Unlock after completing any package"],
    commission: null,
    href: "#",
  },
];

export default function LearningPackagesPage() {
  return (
    <div className="space-y-8 pb-20 max-w-7xl mx-auto px-4">
      <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} className="pt-8 text-center">
        <h1 className="text-3xl font-bold">Learning Packages</h1>
        <p className="text-muted-foreground mt-2">Choose the path that fits your goals. One-time payment, lifetime access.</p>
      </motion.div>

      <div className="grid gap-6 md:grid-cols-2">
        {packages.map((pkg, i) => {
          const Icon = pkg.icon;
          return (
            <motion.div key={pkg.name} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }}>
              <Card className={`h-full ${pkg.color} ${pkg.locked ? "opacity-80" : ""}`}>
                <CardHeader>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <div className={`h-10 w-10 rounded-xl flex items-center justify-center ${pkg.badgeColor}`}>
                        <Icon className="h-5 w-5" />
                      </div>
                      <div>
                        <CardTitle className="text-lg">{pkg.name}</CardTitle>
                        <p className="text-xs text-muted-foreground">{pkg.focus}</p>
                      </div>
                    </div>
                    <div className="text-right">
                      <div className="text-2xl font-bold">{pkg.price}</div>
                      {pkg.commission && (
                        <p className="text-[10px] text-muted-foreground">{pkg.commission}</p>
                      )}
                    </div>
                  </div>
                  {pkg.popular && (
                    <Badge className="mt-2 bg-gradient-to-r from-homepage-primary to-homepage-secondary text-white">Most Popular</Badge>
                  )}
                </CardHeader>
                <CardContent className="space-y-4">
                  <div>
                    <p className="text-xs font-semibold text-muted-foreground mb-2 uppercase tracking-wide">Skills Included</p>
                    <ul className="space-y-1.5">
                      {pkg.features.map((f) => (
                        <li key={f} className="flex items-start gap-2 text-sm">
                          <Check className="h-3.5 w-3.5 text-green-500 shrink-0 mt-0.5" />
                          <span className="text-muted-foreground">{f}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <p className="text-xs font-semibold text-muted-foreground mb-2 uppercase tracking-wide">Extras</p>
                    <div className="flex flex-wrap gap-1.5">
                      {pkg.extras.map((e) => (
                        <Badge key={e} variant="secondary" className="text-xs font-normal">{e}</Badge>
                      ))}
                    </div>
                  </div>
                  <Link href={pkg.href}>
                    <Button className="w-full mt-4" variant={pkg.locked ? "outline" : "default"} disabled={pkg.locked}>
                      {pkg.locked ? "Complete Any Package to Unlock" : (
                        <>
                          Enroll Now <ArrowRight className="ml-2 h-4 w-4" />
                        </>
                      )}
                    </Button>
                  </Link>
                </CardContent>
              </Card>
            </motion.div>
          );
        })}
      </div>

      {/* Affiliate note */}
      <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} className="rounded-2xl bg-gradient-to-r from-learning-primary to-learning-secondary p-6 text-white text-center">
        <IndianRupee className="h-8 w-8 mx-auto mb-3 opacity-80" />
        <h3 className="font-semibold mb-1">Affiliate Opportunity</h3>
        <p className="text-sm text-white/80">Refer others and earn up to 58% commission. Weekly payouts every Saturday.</p>
      </motion.div>
    </div>
  );
}

