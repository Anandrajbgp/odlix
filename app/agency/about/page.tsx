"use client";

import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Target, Eye, Heart, Zap, Users, Award, Globe, TrendingUp } from "lucide-react";

const values = [
  { icon: Target, title: "Mission", desc: "Empower every individual with digital skills and tools to build their future." },
  { icon: Eye, title: "Vision", desc: "Become India's most trusted digital ecosystem for learning, earning, and growth." },
  { icon: Heart, title: "Values", desc: "Transparency, innovation, and student success drive everything we do." },
  { icon: Zap, title: "Impact", desc: "50K+ learners, 250+ projects, and counting. We measure success by your growth." },
];

const team = [
  { name: "Aditya Verma", role: "Founder & CEO", initials: "AV" },
  { name: "Riya Kapoor", role: "Creative Director", initials: "RK" },
  { name: "Karan Malhotra", role: "Lead Developer", initials: "KM" },
  { name: "Ananya Desai", role: "Marketing Head", initials: "AD" },
];

const stats = [
  { value: "250+", label: "Projects Delivered", icon: Globe },
  { value: "120+", label: "Happy Clients", icon: Users },
  { value: "5+", label: "Years Experience", icon: Award },
  { value: "24/7", label: "Support", icon: TrendingUp },
];

export default function AgencyAboutPage() {
  return (
    <div className="space-y-20 pb-20">
      {/* Hero */}
      <section className="relative overflow-hidden bg-gradient-to-br from-agency-primary/10 via-background to-agency-secondary/10 py-24">
        <div className="mx-auto max-w-7xl px-4 text-center">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
            <Badge className="mb-4 bg-agency-primary text-agency-secondary">About Us</Badge>
            <h1 className="text-4xl font-bold tracking-tight sm:text-6xl text-agency-secondary">
              We Build Digital Legends
            </h1>
            <p className="mx-auto mt-6 max-w-2xl text-lg text-muted-foreground">
              Oblivent is the digital agency arm of Odlix. We design, develop, and scale brands with cutting-edge technology and creative excellence.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Stats */}
      <section className="mx-auto max-w-7xl px-4">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          {stats.map((stat) => {
            const Icon = stat.icon;
            return (
              <div key={stat.label}>
                <Icon className="h-6 w-6 text-agency-primary mx-auto mb-2" />
                <div className="text-3xl font-bold text-agency-secondary">{stat.value}</div>
                <div className="mt-1 text-sm text-muted-foreground">{stat.label}</div>
              </div>
            );
          })}
        </div>
      </section>

      {/* Values */}
      <section className="mx-auto max-w-7xl px-4">
        <h2 className="text-3xl font-bold text-center mb-12">Our Values</h2>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {values.map((v, i) => {
            const Icon = v.icon;
            return (
              <motion.div key={v.title} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }}>
                <Card className="h-full text-center">
                  <CardContent className="pt-6">
                    <Icon className="h-10 w-10 text-agency-primary mx-auto mb-3" />
                    <h3 className="font-semibold text-lg mb-2">{v.title}</h3>
                    <p className="text-sm text-muted-foreground">{v.desc}</p>
                  </CardContent>
                </Card>
              </motion.div>
            );
          })}
        </div>
      </section>

      {/* Team */}
      <section className="mx-auto max-w-7xl px-4">
        <h2 className="text-3xl font-bold text-center mb-12">Meet the Team</h2>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {team.map((member, i) => (
            <motion.div key={member.name} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }}>
              <Card className="text-center">
                <CardContent className="pt-6">
                  <div className="h-20 w-20 rounded-full bg-gradient-to-br from-agency-primary to-agency-secondary flex items-center justify-center text-white text-xl font-bold mx-auto mb-4">
                    {member.initials}
                  </div>
                  <h3 className="font-semibold">{member.name}</h3>
                  <p className="text-sm text-muted-foreground">{member.role}</p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </section>
    </div>
  );
}

