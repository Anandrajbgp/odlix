"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Search, Play, Clock, Users, Star, Filter } from "lucide-react";
import Link from "next/link";

const allCourses = [
  { title: "Spoken English Mastery", category: "Communication", level: "Beginner", students: "12K", rating: 4.8, duration: "24h", price: "Free", image: "SE" },
  { title: "Graphic Design Fundamentals", category: "Design", level: "Beginner", students: "8K", rating: 4.9, duration: "18h", price: "₹999", image: "GD" },
  { title: "Video Editing Pro", category: "Media", level: "Intermediate", students: "5K", rating: 4.7, duration: "30h", price: "₹1,499", image: "VE" },
  { title: "Stock Market Basics", category: "Finance", level: "Beginner", students: "15K", rating: 4.6, duration: "20h", price: "Free", image: "SM" },
  { title: "YouTube Mastery", category: "Media", level: "Pro", students: "6K", rating: 4.9, duration: "40h", price: "₹2,499", image: "YM" },
  { title: "AI Tools & Analytics", category: "Tech", level: "Expert", students: "3K", rating: 5.0, duration: "35h", price: "₹4,999", image: "AI" },
  { title: "Social Media Marketing", category: "Marketing", level: "Intermediate", students: "9K", rating: 4.8, duration: "22h", price: "₹1,999", image: "SMM" },
  { title: "Freelancing Blueprint", category: "Career", level: "Pro", students: "4K", rating: 4.7, duration: "28h", price: "₹2,499", image: "FB" },
  { title: "Cryptocurrency & Blockchain", category: "Finance", level: "Expert", students: "2.5K", rating: 4.9, duration: "32h", price: "₹4,999", image: "CB" },
];

const categories = ["All", "Communication", "Design", "Media", "Finance", "Tech", "Marketing", "Career"];
const levels = ["All", "Beginner", "Intermediate", "Pro", "Expert"];

export default function LearningCoursesPage() {
  const [query, setQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [selectedLevel, setSelectedLevel] = useState("All");

  const filtered = allCourses.filter((c) => {
    const matchesQuery = c.title.toLowerCase().includes(query.toLowerCase());
    const matchesCategory = selectedCategory === "All" || c.category === selectedCategory;
    const matchesLevel = selectedLevel === "All" || c.level === selectedLevel;
    return matchesQuery && matchesCategory && matchesLevel;
  });

  return (
    <div className="space-y-8 pb-20 max-w-7xl mx-auto px-4">
      <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} className="pt-8">
        <h1 className="text-3xl font-bold">All Courses</h1>
        <p className="text-muted-foreground">Browse our complete library of expert-led courses</p>
      </motion.div>

      {/* Filters */}
      <div className="flex flex-col sm:flex-row gap-4">
        <div className="relative flex-1">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
          <Input placeholder="Search courses..." value={query} onChange={(e) => setQuery(e.target.value)} className="pl-10" />
        </div>
        <div className="flex gap-2 overflow-x-auto pb-2">
          <Filter className="h-4 w-4 text-muted-foreground shrink-0 self-center" />
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-3 py-1.5 rounded-full text-xs font-medium whitespace-nowrap transition-colors ${
                selectedCategory === cat ? "bg-learning-primary text-white" : "bg-muted text-muted-foreground hover:bg-muted/80"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>

      <div className="flex gap-2 overflow-x-auto pb-2">
        {levels.map((lvl) => (
          <button
            key={lvl}
            onClick={() => setSelectedLevel(lvl)}
            className={`px-3 py-1.5 rounded-full text-xs font-medium whitespace-nowrap transition-colors ${
              selectedLevel === lvl ? "bg-learning-secondary text-white" : "bg-muted text-muted-foreground hover:bg-muted/80"
            }`}
          >
            {lvl}
          </button>
        ))}
      </div>

      {/* Course Grid */}
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {filtered.map((course, i) => (
          <motion.div key={course.title} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.05 }}>
            <Card className="h-full hover:shadow-lg transition-shadow overflow-hidden group">
              <div className="h-40 bg-gradient-to-br from-learning-primary/20 to-learning-secondary/20 flex items-center justify-center relative">
                <span className="text-4xl font-bold text-learning-primary/30">{course.image}</span>
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors flex items-center justify-center">
                  <Play className="h-10 w-10 text-white opacity-0 group-hover:opacity-100 transition-opacity drop-shadow-lg" />
                </div>
              </div>
              <CardHeader className="pb-2">
                <div className="flex items-center justify-between">
                  <Badge variant="secondary" className="text-xs">{course.category}</Badge>
                  <span className={`text-xs font-medium px-2 py-0.5 rounded-full ${
                    course.level === "Beginner" ? "bg-green-100 text-green-700" :
                    course.level === "Intermediate" ? "bg-blue-100 text-blue-700" :
                    course.level === "Pro" ? "bg-purple-100 text-purple-700" :
                    "bg-orange-100 text-orange-700"
                  }`}>{course.level}</span>
                </div>
                <CardTitle className="text-lg mt-2">{course.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex items-center gap-4 text-xs text-muted-foreground mb-3">
                  <span className="flex items-center gap-1"><Users className="h-3 w-3" />{course.students}</span>
                  <span className="flex items-center gap-1"><Star className="h-3 w-3 fill-yellow-400 text-yellow-400" />{course.rating}</span>
                  <span className="flex items-center gap-1"><Clock className="h-3 w-3" />{course.duration}</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="font-bold text-learning-primary">{course.price}</span>
                  <Link href="/signup">
                    <Button size="sm" className="bg-learning-primary text-white">Enroll</Button>
                  </Link>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </div>

      {filtered.length === 0 && (
        <div className="text-center py-20">
          <p className="text-muted-foreground">No courses found matching your filters.</p>
        </div>
      )}
    </div>
  );
}

