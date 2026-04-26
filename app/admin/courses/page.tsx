"use client";

import { motion } from "framer-motion";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { BookOpen, Plus, Users, Search } from "lucide-react";

const courses = [
  { title: "Spoken English Mastery", category: "Language", students: 12400, price: "₹999", status: "published" },
  { title: "Graphic Design Fundamentals", category: "Design", students: 8500, price: "₹1,499", status: "published" },
  { title: "Stock Market Basics", category: "Finance", students: 15200, price: "Free", status: "published" },
  { title: "YouTube Mastery", category: "Marketing", students: 6200, price: "₹2,499", status: "draft" },
  { title: "AI Tools & Analytics", category: "Tech", students: 3100, price: "₹4,999", status: "published" },
];

export default function AdminCoursesPage() {
  return (
    <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold">Courses</h1>
          <p className="text-muted-foreground">Manage course content</p>
        </div>
        <Button className="bg-gradient-to-r from-homepage-primary to-homepage-secondary text-white">
          <Plus className="mr-2 h-4 w-4" />
          Add Course
        </Button>
      </div>

      <div className="relative">
        <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
        <Input placeholder="Search courses..." className="pl-10" />
      </div>

      <div className="grid gap-4">
        {courses.map((course, i) => (
          <Card key={i}>
            <CardContent className="p-4">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="h-10 w-10 rounded-lg bg-learning-primary/10 flex items-center justify-center">
                    <BookOpen className="h-5 w-5 text-learning-primary" />
                  </div>
                  <div>
                    <p className="font-medium text-sm">{course.title}</p>
                    <div className="flex items-center gap-3 text-xs text-muted-foreground">
                      <span>{course.category}</span>
                      <span className="flex items-center gap-1"><Users className="h-3 w-3" />{course.students.toLocaleString()}</span>
                      <span>{course.price}</span>
                    </div>
                  </div>
                </div>
                <Badge variant={course.status === "published" ? "default" : "secondary"}>{course.status}</Badge>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </motion.div>
  );
}

