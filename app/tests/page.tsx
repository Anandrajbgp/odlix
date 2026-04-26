"use client";

import { motion } from "framer-motion";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Timer, BarChart3, BookOpen, Brain } from "lucide-react";
import Link from "next/link";

const exams = [
  { name: "Banking", tests: 120, questions: "50K+" },
  { name: "SSC", tests: 85, questions: "35K+" },
  { name: "UPSC", tests: 45, questions: "20K+" },
  { name: "Railway", tests: 60, questions: "25K+" },
  { name: "State PSC", tests: 40, questions: "18K+" },
  { name: "Campus Placements", tests: 30, questions: "12K+" },
];

const features = [
  { icon: Timer, title: "Real Exam Simulation", desc: "Timer & negative marking just like real exams." },
  { icon: BarChart3, title: "Detailed Analytics", desc: "Score, percentile, strength & weakness map." },
  { icon: Brain, title: "AI Guidance", desc: "Suggested topics & improvement plan." },
  { icon: BookOpen, title: "Offline Mode", desc: "Take tests without internet connection." },
];

export default function TestsPage() {
  return (
    <div className="space-y-20 pb-20">
      <section className="relative overflow-hidden bg-gradient-to-br from-tests-primary/10 via-background to-white py-24">
        <div className="mx-auto max-w-7xl px-4 text-center">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
            <h1 className="text-4xl font-bold tracking-tight sm:text-6xl text-tests-primary">
              Crack Every Exam
            </h1>
            <p className="mx-auto mt-6 max-w-2xl text-lg text-muted-foreground">
              Adaptive tests, realistic simulation, and AI-powered guidance for all competitive exams.
            </p>
            <div className="mt-10 flex justify-center gap-4">
              <Link href="/signup"><Button size="lg" className="bg-tests-primary text-white">Start Free Trial</Button></Link>
            </div>
          </motion.div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4">
        <h2 className="text-3xl font-bold text-center mb-12">Exam Categories</h2>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {exams.map((exam, i) => (
            <motion.div key={exam.name} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }}>
              <Card className="h-full hover:shadow-lg transition-shadow cursor-pointer">
                <CardHeader>
                  <CardTitle className="text-lg">{exam.name}</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="flex justify-between text-sm text-muted-foreground">
                    <span>{exam.tests} Tests</span>
                    <span>{exam.questions} Questions</span>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4">
        <h2 className="text-3xl font-bold text-center mb-12">Platform Features</h2>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {features.map((f, i) => {
            const Icon = f.icon;
            return (
              <motion.div key={f.title} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }}>
                <Card className="h-full text-center">
                  <CardContent className="pt-6">
                    <Icon className="h-10 w-10 text-tests-primary mx-auto mb-3" />
                    <h3 className="font-semibold mb-1">{f.title}</h3>
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
