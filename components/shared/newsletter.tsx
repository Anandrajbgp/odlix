"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Mail, Send, CheckCircle } from "lucide-react";

export function Newsletter() {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!email) return;
    setLoading(true);
    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 1000));
    setSubmitted(true);
    setLoading(false);
  }

  return (
    <section className="py-20 bg-gradient-to-br from-homepage-primary to-homepage-secondary text-white">
      <div className="mx-auto max-w-4xl px-4 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <Mail className="h-10 w-10 mx-auto mb-4 opacity-80" />
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
            Stay Ahead of the Curve
          </h2>
          <p className="mt-4 text-lg text-white/80 max-w-xl mx-auto">
            Join 50,000+ learners. Get weekly tips, course updates, and exclusive offers delivered to your inbox.
          </p>

          {submitted ? (
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              className="mt-8 flex items-center justify-center gap-2 text-lg"
            >
              <CheckCircle className="h-6 w-6 text-green-300" />
              <span>You&apos;re subscribed! Check your inbox.</span>
            </motion.div>
          ) : (
            <form
              onSubmit={handleSubmit}
              className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-3 max-w-md mx-auto"
            >
              <div className="relative w-full">
                <Mail className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                <Input
                  type="email"
                  placeholder="Enter your email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  className="pl-10 h-12 bg-white/10 border-white/20 text-white placeholder:text-white/50 focus-visible:ring-white/30"
                />
              </div>
              <Button
                type="submit"
                disabled={loading}
                className="h-12 px-6 bg-white text-homepage-primary hover:bg-white/90 font-semibold whitespace-nowrap"
              >
                <Send className="mr-2 h-4 w-4" />
                {loading ? "Subscribing..." : "Subscribe"}
              </Button>
            </form>
          )}

          <p className="mt-4 text-xs text-white/60">
            No spam, ever. Unsubscribe anytime.
          </p>
        </motion.div>
      </div>
    </section>
  );
}

