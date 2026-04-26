"use client";

import { motion } from "framer-motion";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { HelpCircle, CheckCircle, XCircle, Clock } from "lucide-react";

const quizzes = [
  { title: "Spoken English - Module 1", score: 85, total: 100, status: "passed", date: "Mar 10, 2025" },
  { title: "Graphic Design Basics", score: 92, total: 100, status: "passed", date: "Mar 5, 2025" },
  { title: "Stock Market Fundamentals", score: 45, total: 100, status: "failed", date: "Feb 28, 2025" },
  { title: "Video Editing - Premiere Pro", score: 78, total: 100, status: "passed", date: "Feb 20, 2025" },
];

export default function QuizPage() {
  return (
    <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} className="space-y-6">
      <div>
        <h1 className="text-2xl font-bold">Quiz History</h1>
        <p className="text-muted-foreground">Your assessment results</p>
      </div>

      <div className="grid gap-4 md:grid-cols-3">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-sm font-medium">Total Quizzes</CardTitle>
            <HelpCircle className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">24</div>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-sm font-medium">Passed</CardTitle>
            <CheckCircle className="h-4 w-4 text-green-500" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-green-600">18</div>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-sm font-medium">Average Score</CardTitle>
            <Clock className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">76%</div>
          </CardContent>
        </Card>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Recent Quizzes</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {quizzes.map((quiz, i) => (
              <div key={i} className="flex items-center justify-between border-b pb-3 last:border-0">
                <div>
                  <p className="font-medium text-sm">{quiz.title}</p>
                  <p className="text-xs text-muted-foreground">{quiz.date}</p>
                </div>
                <div className="flex items-center gap-3">
                  <span className={`font-bold ${quiz.status === "passed" ? "text-green-600" : "text-red-600"}`}>
                    {quiz.score}/{quiz.total}
                  </span>
                  <Badge variant={quiz.status === "passed" ? "default" : "destructive"}>
                    {quiz.status === "passed" ? <CheckCircle className="mr-1 h-3 w-3" /> : <XCircle className="mr-1 h-3 w-3" />}
                    {quiz.status}
                  </Badge>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </motion.div>
  );
}

