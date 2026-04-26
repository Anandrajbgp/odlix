"use client";

import { motion } from "framer-motion";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { LineChart, Shield, Zap, BarChart3, Wallet, Globe } from "lucide-react";
import Link from "next/link";

const assets = [
  { name: "Stocks", icon: LineChart },
  { name: "Options & Futures", icon: BarChart3 },
  { name: "Mutual Funds", icon: Wallet },
  { name: "ETFs", icon: Globe },
  { name: "Commodities", icon: Zap },
  { name: "Cryptocurrency", icon: Shield },
];

const features = [
  { icon: LineChart, title: "Advanced Charting", desc: "EMA, RSI, MACD, Fibonacci & more." },
  { icon: Zap, title: "Fast Execution", desc: "One-click buy/sell with 2FA security." },
  { icon: Shield, title: "Secure", desc: "Biometric login & encrypted transactions." },
  { icon: BarChart3, title: "AI Insights", desc: "Trade suggestions & risk analysis." },
];

export default function BrokerPage() {
  return (
    <div className="space-y-20 pb-20">
      <section className="relative overflow-hidden bg-gradient-to-br from-broker-primary/10 via-background to-broker-secondary/10 py-24">
        <div className="mx-auto max-w-7xl px-4 text-center">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
            <h1 className="text-4xl font-bold tracking-tight sm:text-6xl text-broker-primary">
              Trade Like a Pro
            </h1>
            <p className="mx-auto mt-6 max-w-2xl text-lg text-muted-foreground">
              Multi-asset trading platform with smart dashboards, advanced charting, and AI-powered insights.
            </p>
            <div className="mt-10 flex justify-center gap-4">
              <Link href="/signup"><Button size="lg" className="bg-broker-primary text-white">Open Account</Button></Link>
            </div>
          </motion.div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4">
        <h2 className="text-3xl font-bold text-center mb-12">Trade All Asset Classes</h2>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {assets.map((asset, i) => {
            const Icon = asset.icon;
            return (
              <motion.div key={asset.name} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }}>
                <Card className="h-full hover:shadow-lg transition-shadow text-center">
                  <CardContent className="pt-6">
                    <Icon className="h-12 w-12 text-broker-primary mx-auto mb-3" />
                    <h3 className="font-semibold">{asset.name}</h3>
                  </CardContent>
                </Card>
              </motion.div>
            );
          })}
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4">
        <h2 className="text-3xl font-bold text-center mb-12">Why Odlix Broker?</h2>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {features.map((f, i) => {
            const Icon = f.icon;
            return (
              <motion.div key={f.title} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }}>
                <Card className="h-full">
                  <CardHeader>
                    <Icon className="h-8 w-8 text-broker-primary" />
                    <CardTitle className="text-base">{f.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-muted-foreground">{f.desc}</p>
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
