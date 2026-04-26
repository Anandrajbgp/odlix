"use client";

import { motion } from "framer-motion";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { Button } from "@/components/ui/button";
import { Play, Award, Clock, BookOpen } from "lucide-react";
import Link from "next/link";

const courses = [
  { title: "Spoken English Mastery", progress: 75, totalLessons: 24, completedLessons: 18, lastAccessed: "2 hours ago", certificate: false },
  { title: "Graphic Design Fundamentals", progress: 100, totalLessons: 20, completedLessons: 20, lastAccessed: "1 week ago", certificate: true },
  { title: "Stock Market Basics", progress: 30, totalLessons: 30, completedLessons: 9, lastAccessed: "3 days ago", certificate: false },
  { title: "YouTube Mastery", progress: 0, totalLessons: 40, completedLessons: 0, lastAccessed: "Not started", certificate: false },
];

export default function MyCoursesPage() {
  return (
    <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} className="space-y-6">
      <div>
        <h1 className="text-2xl font-bold">My Courses</h1>
        <p className="text-muted-foreground">Track your learning progress</p>
      </div>

      <div className="grid gap-4">
        {courses.map((course, i) => (
          <Card key={i}>
            <CardContent className="p-6">
              <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                <div className="flex-1">
                  <div className="flex items-center gap-2 mb-2">
                    <BookOpen className="h-5 w-5 text-homepage-primary" />
                    <h3 className="font-semibold">{course.title}</h3>
                    {course.certificate && <Award className="h-4 w-4 text-yellow-500" />}
                  </div>
                  <div className="flex items-center gap-4 text-sm text-muted-foreground mb-3">
                    <span className="flex items-center gap-1"><Clock className="h-3 w-3" />{course.lastAccessed}</span>
                    <span>{course.completedLessons}/{course.totalLessons} lessons</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Progress value={course.progress} className="flex-1" />
                    <span className="text-sm font-medium w-12">{course.progress}%</span>
                  </div>
                </div>
                <Link href={`/learning/courses/${i}`}>
                  <Button className="bg-gradient-to-r from-homepage-primary to-homepage-secondary text-white">
                    <Play className="mr-2 h-4 w-4" />
                    {course.progress === 0 ? "Start" : course.progress === 100 ? "Review" : "Continue"}
                  </Button>
                </Link>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </motion.div>
  );
}

