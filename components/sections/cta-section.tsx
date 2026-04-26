"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight, Zap } from "lucide-react";
import Link from "next/link";

export function CTASection() {
  return (
    <section className="py-24 bg-background">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-homepage-primary to-homepage-secondary px-6 py-16 sm:px-12 sm:py-20 lg:px-16"
        >
          {/* Background decoration */}
          <div className="absolute top-0 right-0 -translate-y-1/4 translate-x-1/4 w-[400px] h-[400px] bg-white/10 rounded-full blur-3xl" />
          <div className="absolute bottom-0 left-0 translate-y-1/4 -translate-x-1/4 w-[300px] h-[300px] bg-white/10 rounded-full blur-3xl" />

          <div className="relative text-center">
            <div className="inline-flex items-center gap-2 rounded-full bg-white/20 px-4 py-1.5 text-sm font-medium text-white mb-6">
              <Zap className="h-4 w-4" />
              Start Your Journey Today
            </div>
            <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl lg:text-5xl">
              Ready to Build Your
              <br />
              Digital Empire?
            </h2>
            <p className="mx-auto mt-6 max-w-2xl text-lg text-white/80">
              Join 50,000+ learners, creators, and entrepreneurs who are already
              growing with Odlix. Your future starts now.
            </p>
            <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link href="/signup">
                <Button
                  size="lg"
                  className="bg-white text-homepage-primary hover:bg-white/90 px-8 h-12 text-base font-semibold"
                >
                  Get Started Free
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </Link>
              <Link href="/learning">
                <Button
                  size="lg"
                  variant="outline"
                  className="border-white/30 text-white hover:bg-white/10 px-8 h-12 text-base"
                >
                  Explore Courses
                </Button>
              </Link>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

