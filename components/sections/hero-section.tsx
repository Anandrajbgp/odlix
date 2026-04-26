"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import {
  ArrowRight,
  Play,
  Sparkles,
  BookOpen,
  Briefcase,
  ClipboardCheck,
  Smartphone,
  ShoppingCart,
  TrendingUp,
} from "lucide-react";
import Link from "next/link";

const platformIcons = [
  { icon: BookOpen, color: "text-learning-primary", bg: "bg-learning-primary/20", label: "Learn" },
  { icon: Briefcase, color: "text-agency-primary", bg: "bg-agency-primary/20", label: "Agency" },
  { icon: ClipboardCheck, color: "text-tests-primary", bg: "bg-tests-primary/20", label: "Tests" },
  { icon: TrendingUp, color: "text-broker-primary", bg: "bg-broker-primary/20", label: "Trade" },
  { icon: Smartphone, color: "text-apps-primary", bg: "bg-apps-primary/20", label: "Apps" },
  { icon: ShoppingCart, color: "text-mart-primary", bg: "bg-mart-primary/20", label: "Mart" },
];

const stats = [
  { value: "50K+", label: "Active Learners" },
  { value: "200+", label: "Expert Courses" },
  { value: "6", label: "Platforms" },
  { value: "99.9%", label: "Uptime" },
];

export function HeroSection() {
  return (
    <section className="relative overflow-hidden bg-background pt-16 pb-24 lg:pt-32 lg:pb-40">
      {/* Deep Blue → Magenta/Purple gradient background */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#001F3F] via-[#0a0a2e] to-[#8B008B] opacity-95" />
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmZmZmYiIGZpbGwtb3BhY2l0eT0iMC4wMyI+PGNpcmNsZSBjeD0iMzAiIGN5PSIzMCIgcj0iMiIvPjwvZz48L2c+PC9zdmc+')] opacity-30" />

      {/* Animated orbs */}
      <motion.div
        animate={{ x: [0, 30, 0], y: [0, -20, 0] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-20 right-[10%] w-[400px] h-[400px] bg-[#4B0082]/30 rounded-full blur-[100px]"
      />
      <motion.div
        animate={{ x: [0, -20, 0], y: [0, 30, 0] }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
        className="absolute bottom-20 left-[5%] w-[350px] h-[350px] bg-[#001F3F]/40 rounded-full blur-[100px]"
      />
      <motion.div
        animate={{ scale: [1, 1.2, 1] }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#8B008B]/10 rounded-full blur-[120px]"
      />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-1.5 text-sm font-medium text-white/90 mb-8 backdrop-blur-sm"
          >
            <Sparkles className="h-4 w-4 text-yellow-300" />
            The All-in-One Digital Ecosystem
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-4xl font-bold tracking-tight text-white sm:text-6xl lg:text-7xl"
          >
            One Account.
            <br />
            <span className="bg-gradient-to-r from-cyan-300 via-purple-300 to-pink-300 bg-clip-text text-transparent">
              Six Platforms.
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="mx-auto mt-6 max-w-2xl text-lg text-white/70"
          >
            Odlix brings together learning, agency services, testing, apps,
            marketplace, and brokerage into one powerful ecosystem. Build your
            digital empire today.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4"
          >
            <Link href="/signup">
              <Button
                size="lg"
                className="bg-white text-[#001F3F] hover:bg-white/90 px-8 h-12 text-base font-semibold shadow-lg shadow-white/10"
              >
                Get Started Free
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
            <Link href="/learning">
              <Button
                variant="outline"
                size="lg"
                className="px-8 h-12 text-base border-white/30 text-white hover:bg-white/10 hover:text-white"
              >
                <Play className="mr-2 h-4 w-4" />
                Explore Platform
              </Button>
            </Link>
          </motion.div>

          {/* Animated platform icons */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.5 }}
            className="mt-16 flex items-center justify-center gap-4 flex-wrap"
          >
            {platformIcons.map((platform, index) => {
              const Icon = platform.icon;
              return (
                <motion.div
                  key={platform.label}
                  initial={{ opacity: 0, scale: 0 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.6 + index * 0.1, type: "spring" }}
                  whileHover={{ scale: 1.15, y: -5 }}
                  className="flex flex-col items-center gap-2"
                >
                  <div
                    className={`h-14 w-14 rounded-2xl ${platform.bg} backdrop-blur-sm flex items-center justify-center border border-white/10`}
                  >
                    <Icon className={`h-7 w-7 ${platform.color}`} />
                  </div>
                  <span className="text-xs text-white/60 font-medium">
                    {platform.label}
                  </span>
                </motion.div>
              );
            })}
          </motion.div>
        </div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.7 }}
          className="mt-20 grid grid-cols-2 gap-8 md:grid-cols-4"
        >
          {stats.map((stat) => (
            <div key={stat.label} className="text-center">
              <div className="text-3xl font-bold text-white">{stat.value}</div>
              <div className="mt-1 text-sm text-white/60">{stat.label}</div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

