"use client";

import Link from "next/link";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Menu, X, BookOpen, GraduationCap } from "lucide-react";

const navLinks = [
  { href: "/learning", label: "Home" },
  { href: "/learning/courses", label: "Courses" },
  { href: "/learning/packages", label: "Packages" },
  { href: "/learning/certificates", label: "Certificates" },
];

export function LearningNavbar() {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full border-b border-learning-primary/20 bg-background/80 backdrop-blur-md">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <Link href="/learning" className="flex items-center gap-2">
          <div className="h-8 w-8 rounded-lg bg-gradient-to-br from-learning-primary to-learning-secondary flex items-center justify-center">
            <BookOpen className="h-5 w-5 text-white" />
          </div>
          <span className="text-xl font-bold bg-gradient-to-r from-learning-primary to-learning-secondary bg-clip-text text-transparent">
            Odlix Learning
          </span>
        </Link>

        <nav className="hidden md:flex items-center gap-6">
          {navLinks.map((link) => (
            <Link key={link.href} href={link.href} className="text-sm font-medium text-muted-foreground transition-colors hover:text-learning-primary">
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="hidden md:flex items-center gap-3">
          <Link href="/dashboard/courses">
            <Button variant="ghost" size="sm">My Learning</Button>
          </Link>
          <Link href="/login">
            <Button size="sm" className="bg-learning-primary text-white">Sign In</Button>
          </Link>
        </div>

        <button className="md:hidden p-2" onClick={() => setMobileOpen(!mobileOpen)} aria-label="Toggle menu">
          {mobileOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>

      <AnimatePresence>
        {mobileOpen && (
          <motion.div initial={{ opacity: 0, height: 0 }} animate={{ opacity: 1, height: "auto" }} exit={{ opacity: 0, height: 0 }} className="md:hidden border-t border-learning-primary/20 bg-background">
            <div className="flex flex-col gap-2 px-4 py-4">
              {navLinks.map((link) => (
                <Link key={link.href} href={link.href} className="rounded-lg px-3 py-2 text-sm font-medium text-muted-foreground hover:bg-accent hover:text-foreground" onClick={() => setMobileOpen(false)}>
                  {link.label}
                </Link>
              ))}
              <div className="mt-2 flex flex-col gap-2">
                <Link href="/dashboard/courses"><Button variant="outline" className="w-full">My Learning</Button></Link>
                <Link href="/login"><Button className="w-full bg-learning-primary text-white">Sign In</Button></Link>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}

