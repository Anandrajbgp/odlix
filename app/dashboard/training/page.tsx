"use client";

import { motion } from "framer-motion";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { Play, BookOpen, Clock, CheckCircle } from "lucide-react";

const trainings = [
  { title: "Affiliate Marketing 101", duration: "45 min", progress: 100, completed: true, type: "Video" },
  { title: "How to Close Sales", duration: "30 min", progress: 75, completed: false, type: "Video" },
  { title: "Social Media Growth Hacks", duration: "60 min", progress: 30, completed: false, type: "Live" },
  { title: "Building Your Personal Brand", duration: "40 min", progress: 0, completed: false, type: "Video" },
  { title: "Advanced Communication Skills", duration: "50 min", progress: 0, completed: false, type: "Workshop" },
];

export default function TrainingPage() {
  return (
    <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} className="space-y-6">
      <div>
        <h1 className="text-2xl font-bold">Training</h1>
        <p className="text-muted-foreground">Level up your skills with expert training</p>
      </div>

      <div className="grid gap-4">
        {trainings.map((training, i) => (
          <Card key={i}>
            <CardContent className="p-6">
              <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                <div className="flex-1">
                  <div className="flex items-center gap-2 mb-2">
                    <BookOpen className="h-5 w-5 text-homepage-primary" />
                    <h3 className="font-semibold">{training.title}</h3>
                    {training.completed && <CheckCircle className="h-4 w-4 text-green-500" />}
                  </div>
                  <div className="flex items-center gap-4 text-sm text-muted-foreground mb-3">
                    <span className="flex items-center gap-1"><Clock className="h-3 w-3" />{training.duration}</span>
                    <span>{training.type}</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Progress value={training.progress} className="flex-1" />
                    <span className="text-sm font-medium w-12">{training.progress}%</span>
                  </div>
                </div>
                <Button className="bg-gradient-to-r from-homepage-primary to-homepage-secondary text-white shrink-0">
                  <Play className="mr-2 h-4 w-4" />
                  {training.progress === 0 ? "Start" : training.progress === 100 ? "Review" : "Continue"}
                </Button>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </motion.div>
  );
}

