"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Badge } from "@/components/ui/badge";
import { Mail, Phone, MapPin, Send, CheckCircle } from "lucide-react";

export default function AgencyContactPage() {
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setLoading(true);
    await new Promise((resolve) => setTimeout(resolve, 1500));
    setSubmitted(true);
    setLoading(false);
  }

  return (
    <div className="space-y-20 pb-20">
      {/* Hero */}
      <section className="relative overflow-hidden bg-gradient-to-br from-agency-primary/10 via-background to-agency-secondary/10 py-24">
        <div className="mx-auto max-w-7xl px-4 text-center">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
            <Badge className="mb-4 bg-agency-primary text-agency-secondary">Contact</Badge>
            <h1 className="text-4xl font-bold tracking-tight sm:text-6xl text-agency-secondary">
              Let&apos;s Build Something Great
            </h1>
            <p className="mx-auto mt-6 max-w-2xl text-lg text-muted-foreground">
              Get a free consultation for your next project. We reply within 24 hours.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact Form + Info */}
      <section className="mx-auto max-w-7xl px-4">
        <div className="grid gap-8 lg:grid-cols-2">
          {/* Form */}
          <motion.div initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }}>
            <Card>
              <CardHeader>
                <CardTitle>Get Free Consultation</CardTitle>
              </CardHeader>
              <CardContent>
                {submitted ? (
                  <div className="py-12 text-center">
                    <CheckCircle className="h-12 w-12 text-green-500 mx-auto mb-4" />
                    <h3 className="text-xl font-semibold mb-2">Message Sent!</h3>
                    <p className="text-muted-foreground">We&apos;ll get back to you within 24 hours.</p>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-4">
                    <div className="grid gap-4 sm:grid-cols-2">
                      <div className="space-y-2">
                        <Label htmlFor="name">Name</Label>
                        <Input id="name" placeholder="Your name" required />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="email">Email</Label>
                        <Input id="email" type="email" placeholder="you@company.com" required />
                      </div>
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="service">Service Interested In</Label>
                      <Input id="service" placeholder="e.g. Website Development" />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="budget">Budget Range</Label>
                      <Input id="budget" placeholder="e.g. ₹50,000 - ₹1,00,000" />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="message">Project Details</Label>
                      <Textarea id="message" placeholder="Tell us about your project..." rows={4} required />
                    </div>
                    <Button type="submit" disabled={loading} className="w-full bg-agency-primary text-agency-secondary font-semibold">
                      <Send className="mr-2 h-4 w-4" />
                      {loading ? "Sending..." : "Send Message"}
                    </Button>
                  </form>
                )}
              </CardContent>
            </Card>
          </motion.div>

          {/* Contact Info */}
          <motion.div initial={{ opacity: 0, x: 20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }} className="space-y-6">
            <Card>
              <CardContent className="p-6 flex items-start gap-4">
                <div className="h-10 w-10 rounded-lg bg-agency-primary/10 flex items-center justify-center shrink-0">
                  <Mail className="h-5 w-5 text-agency-primary" />
                </div>
                <div>
                  <h3 className="font-semibold">Email</h3>
                  <p className="text-sm text-muted-foreground">teamoblivent@gmail.com</p>
                  <p className="text-sm text-muted-foreground">team.odlix@gmail.com</p>
                </div>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-6 flex items-start gap-4">
                <div className="h-10 w-10 rounded-lg bg-agency-primary/10 flex items-center justify-center shrink-0">
                  <Phone className="h-5 w-5 text-agency-primary" />
                </div>
                <div>
                  <h3 className="font-semibold">Phone</h3>
                  <p className="text-sm text-muted-foreground">+91 7372891228</p>
                  <p className="text-sm text-muted-foreground">Mon-Sat, 9AM - 8PM IST</p>
                </div>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-6 flex items-start gap-4">
                <div className="h-10 w-10 rounded-lg bg-agency-primary/10 flex items-center justify-center shrink-0">
                  <MapPin className="h-5 w-5 text-agency-primary" />
                </div>
                <div>
                  <h3 className="font-semibold">Location</h3>
                  <p className="text-sm text-muted-foreground">India (Remote-first team)</p>
                  <p className="text-sm text-muted-foreground">Serving clients globally</p>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </section>
    </div>
  );
}

