"use client";

import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Star, Quote, BadgeCheck } from "lucide-react";

const testimonials = [
  {
    name: "Rahul Sharma",
    role: "Software Engineer",
    content:
      "Odlix transformed my career. The e-learning platform helped me master full-stack development in just 3 months. The certificates are recognized by top companies.",
    rating: 5,
    platform: "E-Learning",
    verified: true,
    avatar: "RS",
  },
  {
    name: "Priya Patel",
    role: "Startup Founder",
    content:
      "The Digital Agency services are world-class. They built our entire brand identity and website. Professional, fast, and incredibly creative team.",
    rating: 5,
    platform: "Agency",
    verified: true,
    avatar: "PP",
  },
  {
    name: "Amit Kumar",
    role: "Banking Aspirant",
    content:
      "The test platform helped me crack my IBPS PO exam on the first attempt. The analytics and leaderboard kept me motivated throughout my preparation journey.",
    rating: 5,
    platform: "Tests",
    verified: true,
    avatar: "AK",
  },
  {
    name: "Sneha Gupta",
    role: "Product Manager",
    content:
      "I found amazing productivity tools on the App Store. The curated collection saves me hours every week. Highly recommended for professionals.",
    rating: 5,
    platform: "Apps",
    verified: true,
    avatar: "SG",
  },
  {
    name: "Vikram Singh",
    role: "Full-Time Trader",
    content:
      "The broker platform's analytics are next level. Real-time data, smart alerts, and an intuitive interface. Best trading experience I've had.",
    rating: 5,
    platform: "Broker",
    verified: true,
    avatar: "VS",
  },
  {
    name: "Neha Reddy",
    role: "Graphic Designer",
    content:
      "Mart has the best collection of design resources. I buy templates and assets regularly. The quality is consistently outstanding.",
    rating: 5,
    platform: "Mart",
    verified: true,
    avatar: "NR",
  },
];

export function TestimonialsSection() {
  return (
    <section className="py-24 bg-background">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <Badge variant="secondary" className="mb-4">
            <Star className="h-3 w-3 mr-1 fill-yellow-400 text-yellow-400" />
            4.9/5 Average Rating
          </Badge>
          <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            Loved by Thousands
          </h2>
          <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">
            See what our community members are saying about their Odlix experience.
          </p>
        </motion.div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card className="h-full border-border/50 hover:shadow-md transition-shadow">
                <CardContent className="pt-6">
                  <Quote className="h-8 w-8 text-homepage-primary/20 mb-4" />
                  <div className="flex gap-1 mb-4">
                    {Array.from({ length: testimonial.rating }).map((_, i) => (
                      <Star
                        key={i}
                        className="h-4 w-4 fill-yellow-400 text-yellow-400"
                      />
                    ))}
                  </div>
                  <p className="text-muted-foreground mb-6 text-sm leading-relaxed">
                    &ldquo;{testimonial.content}&rdquo;
                  </p>
                  <div className="flex items-center gap-3">
                    <div className="h-10 w-10 rounded-full bg-gradient-to-br from-homepage-primary to-homepage-secondary flex items-center justify-center text-white font-bold text-sm">
                      {testimonial.avatar}
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center gap-1.5">
                        <span className="font-medium text-foreground text-sm">
                          {testimonial.name}
                        </span>
                        {testimonial.verified && (
                          <BadgeCheck className="h-4 w-4 text-blue-500 shrink-0" />
                        )}
                      </div>
                      <div className="text-xs text-muted-foreground">
                        {testimonial.role} · {testimonial.platform}
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

