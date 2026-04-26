"use client";

import Link from "next/link";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Menu, X, TrendingUp } from "lucide-react";

const navLinks = [
  { href: "/broker", label: "Home" },
  { href: "/broker/dashboard", label: "Dashboard" },
  { href: "/broker/market", label: "Market" },
  { href: "/broker/portfolio", label: "Portfolio" },
];

export function BrokerNavbar() {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full border-b border-broker-primary/20 bg-background/80 backdrop-blur-md">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <Link href="/broker" className="flex items-center gap-2">
          <div className="h-8 w-8 rounded-lg bg-gradient-to-br from-broker-primary to-broker-secondary flex items-center justify-center">
            <TrendingUp className="h-5 w-5 text-white" />
          </div>
          <span className="text-xl font-bold text-broker-primary">Odlix Broker</span>
        </Link>

        <nav className="hidden md:flex items-center gap-6">
          {navLinks.map((link) => (
            <Link key={link.href} href={link.href} className="text-sm font-medium text-muted-foreground transition-colors hover:text-broker-primary">
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="hidden md:flex items-center gap-3">
          <Link href="/login">
            <Button size="sm" className="bg-broker-primary text-white">Open Account</Button>
          </Link>
        </div>

        <button className="md:hidden p-2" onClick={() => setMobileOpen(!mobileOpen)} aria-label="Toggle menu">
          {mobileOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>

      <AnimatePresence>
        {mobileOpen && (
          <motion.div initial={{ opacity: 0, height: 0 }} animate={{ opacity: 1, height: "auto" }} exit={{ opacity: 0, height: 0 }} className="md:hidden border-t border-broker-primary/20 bg-background">
            <div className="flex flex-col gap-2 px-4 py-4">
              {navLinks.map((link) => (
                <Link key={link.href} href={link.href} className="rounded-lg px-3 py-2 text-sm font-medium text-muted-foreground hover:bg-accent hover:text-foreground" onClick={() => setMobileOpen(false)}>
                  {link.label}
                </Link>
              ))}
              <Link href="/login"><Button className="w-full bg-broker-primary text-white">Open Account</Button></Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}

