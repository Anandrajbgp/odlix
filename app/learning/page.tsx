"use client";

import { motion } from "framer-motion";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { BookOpen, Award, Users, Play, Star } from "lucide-react";
import Link from "next/link";

const courses = [
  { title: "Spoken English", level: "Beginner", students: "12K", rating: 4.8, price: "Free" },
  { title: "Graphic Design Mastery", level: "Intermediate", students: "8K", rating: 4.9, price: "₹999" },
  { title: "Video Editing Pro", level: "Advanced", students: "5K", rating: 4.7, price: "₹1,499" },
  { title: "Stock Market Basics", level: "Beginner", students: "15K", rating: 4.6, price: "Free" },
  { title: "YouTube Mastery", level: "Pro", students: "6K", rating: 4.9, price: "₹2,499" },
  { title: "AI Tools & Analytics", level: "Expert", students: "3K", rating: 5.0, price: "₹4,999" },
];

const packages = [
  { name: "Beginner", price: "₹999", skills: 8, focus: "Earn ₹8-10k/month" },
  { name: "Pro", price: "₹2,499", skills: 15, focus: "Earn ₹25-30k/month" },
  { name: "Expert", price: "₹4,999", skills: 23, focus: "Earn ₹80k-1L+/month" },
];

export default function LearningPage() {
  return (
    <div className="space-y-20 pb-20">
      {/* Hero */}
      <section className="relative overflow-hidden bg-gradient-to-br from-learning-primary/10 via-background to-learning-secondary/10 py-24">
        <div className="mx-auto max-w-7xl px-4 text-center">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
            <h1 className="text-4xl font-bold tracking-tight sm:text-6xl text-learning-primary">
              Master Skills That Pay
            </h1>
            <p className="mx-auto mt-6 max-w-2xl text-lg text-muted-foreground">
              From spoken English to stock trading. Learn from experts, get certified, and start earning.
            </p>
            <div className="mt-10 flex justify-center gap-4">
              <Link href="/signup"><Button size="lg" className="bg-learning-primary text-white">Start Learning</Button></Link>
              <Link href="/learning/courses"><Button variant="outline" size="lg">Browse Courses</Button></Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Stats */}
      <section className="mx-auto max-w-7xl px-4">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          {[
            { value: "200+", label: "Courses" },
            { value: "50K+", label: "Students" },
            { value: "98%", label: "Success Rate" },
            { value: "4.9", label: "Avg Rating" },
          ].map((stat) => (
            <div key={stat.label}>
              <div className="text-3xl font-bold text-learning-primary">{stat.value}</div>
              <div className="mt-1 text-sm text-muted-foreground">{stat.label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Packages */}
      <section className="mx-auto max-w-7xl px-4">
        <h2 className="text-3xl font-bold text-center mb-12">Choose Your Package</h2>
        <div className="grid gap-8 md:grid-cols-3">
          {packages.map((pkg, i) => (
            <motion.div key={pkg.name} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }}>
              <Card className="h-full">
                <CardHeader className="text-center">
                  <CardTitle className="text-xl">{pkg.name}</CardTitle>
                  <div className="text-3xl font-bold text-learning-primary mt-2">{pkg.price}</div>
                </CardHeader>
                <CardContent className="space-y-2 text-center">
                  <p className="text-muted-foreground">{pkg.skills}+ Skills</p>
                  <p className="text-sm font-medium">{pkg.focus}</p>
                  <Link href="/signup"><Button className="w-full mt-4 bg-learning-primary text-white">Enroll Now</Button></Link>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Courses */}
      <section className="mx-auto max-w-7xl px-4">
        <h2 className="text-3xl font-bold text-center mb-12">Popular Courses</h2>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {courses.map((course, i) => (
            <motion.div key={course.title} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }}>
              <Card className="h-full hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-medium bg-learning-primary/10 text-learning-primary px-2 py-1 rounded">{course.level}</span>
                    <span className="text-sm font-bold">{course.price}</span>
                  </div>
                  <CardTitle className="text-lg mt-2">{course.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="flex items-center gap-4 text-sm text-muted-foreground">
                    <span className="flex items-center gap-1"><Users className="h-3 w-3" />{course.students}</span>
                    <span className="flex items-center gap-1"><Star className="h-3 w-3 fill-yellow-400 text-yellow-400" />{course.rating}</span>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </section>
    </div>
  );
}
