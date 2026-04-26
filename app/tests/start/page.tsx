"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Timer, Flag, ChevronLeft, ChevronRight, AlertCircle } from "lucide-react";

const questions = [
  {
    id: 1,
    question: "What is the capital of India?",
    options: ["Mumbai", "New Delhi", "Kolkata", "Chennai"],
    correct: 1,
    marks: 2,
    negative: 0.5,
  },
  {
    id: 2,
    question: "Which of the following is a constitutional body?",
    options: ["NITI Aayog", "Finance Commission", "Planning Commission", "National Development Council"],
    correct: 1,
    marks: 2,
    negative: 0.5,
  },
  {
    id: 3,
    question: "The Reserve Bank of India was established in which year?",
    options: ["1935", "1947", "1950", "1921"],
    correct: 0,
    marks: 2,
    negative: 0.5,
  },
  {
    id: 4,
    question: "Which article of the Indian Constitution deals with the Right to Equality?",
    options: ["Article 14", "Article 19", "Article 21", "Article 32"],
    correct: 0,
    marks: 2,
    negative: 0.5,
  },
  {
    id: 5,
    question: "Who is known as the 'Father of the Indian Constitution'?",
    options: ["Mahatma Gandhi", "B.R. Ambedkar", "Jawaharlal Nehru", "Sardar Patel"],
    correct: 1,
    marks: 2,
    negative: 0.5,
  },
];

const TOTAL_TIME = 30 * 60; // 30 minutes in seconds

export default function StartTestPage() {
  const [current, setCurrent] = useState(0);
  const [answers, setAnswers] = useState<Record<number, number>>({});
  const [timeLeft, setTimeLeft] = useState(TOTAL_TIME);
  const [submitted, setSubmitted] = useState(false);
  const [score, setScore] = useState(0);

  useEffect(() => {
    if (submitted) return;
    const timer = setInterval(() => {
      setTimeLeft((prev) => {
        if (prev <= 1) {
          clearInterval(timer);
          handleSubmit();
          return 0;
        }
        return prev - 1;
      });
    }, 1000);
    return () => clearInterval(timer);
  }, [submitted]);

  const formatTime = (seconds: number) => {
    const m = Math.floor(seconds / 60);
    const s = seconds % 60;
    return `${m.toString().padStart(2, "0")}:${s.toString().padStart(2, "0")}`;
  };

  const handleAnswer = (optionIndex: number) => {
    setAnswers((prev) => ({ ...prev, [questions[current].id]: optionIndex }));
  };

  const handleSubmit = () => {
    let total = 0;
    questions.forEach((q) => {
      const ans = answers[q.id];
      if (ans === undefined) return;
      if (ans === q.correct) total += q.marks;
      else total -= q.negative;
    });
    setScore(total);
    setSubmitted(true);
  };

  const q = questions[current];
  const isLast = current === questions.length - 1;

  if (submitted) {
    const correct = questions.filter((q) => answers[q.id] === q.correct).length;
    const wrong = questions.filter((q) => answers[q.id] !== undefined && answers[q.id] !== q.correct).length;
    const unattempted = questions.filter((q) => answers[q.id] === undefined).length;

    return (
      <div className="min-h-screen flex items-center justify-center py-12 px-4">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="w-full max-w-lg">
          <Card>
            <CardHeader className="text-center">
              <CardTitle className="text-2xl">Test Submitted!</CardTitle>
              <p className="text-sm text-muted-foreground">Here is your performance summary</p>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="text-center">
                <div className="text-5xl font-bold text-tests-primary">{score}</div>
                <p className="text-sm text-muted-foreground mt-1">Total Score</p>
              </div>
              <div className="grid grid-cols-3 gap-4 text-center">
                <div className="rounded-lg bg-green-50 p-3">
                  <div className="text-xl font-bold text-green-600">{correct}</div>
                  <div className="text-xs text-green-700">Correct</div>
                </div>
                <div className="rounded-lg bg-red-50 p-3">
                  <div className="text-xl font-bold text-red-600">{wrong}</div>
                  <div className="text-xs text-red-700">Wrong</div>
                </div>
                <div className="rounded-lg bg-muted p-3">
                  <div className="text-xl font-bold text-muted-foreground">{unattempted}</div>
                  <div className="text-xs text-muted-foreground">Unattempted</div>
                </div>
              </div>
              <Button className="w-full bg-tests-primary text-white" onClick={() => window.location.reload()}>
                Retake Test
              </Button>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    );
  }

  return (
    <div className="min-h-screen py-8 px-4">
      <div className="mx-auto max-w-4xl">
        {/* Header */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 mb-6">
          <div>
            <h1 className="text-xl font-bold">SSC CGL Mock Test 1</h1>
            <p className="text-sm text-muted-foreground">General Awareness • 5 Questions • 30 Min</p>
          </div>
          <div className={`flex items-center gap-2 px-4 py-2 rounded-lg font-mono text-lg font-bold ${timeLeft < 300 ? "bg-red-100 text-red-700" : "bg-tests-primary/10 text-tests-primary"}`}>
            <Timer className="h-5 w-5" />
            {formatTime(timeLeft)}
          </div>
        </div>

        {/* Progress */}
        <div className="flex gap-1 mb-6">
          {questions.map((q, i) => (
            <button
              key={q.id}
              onClick={() => setCurrent(i)}
              className={`flex-1 h-2 rounded-full transition-colors ${
                i === current
                  ? "bg-tests-primary"
                  : answers[q.id] !== undefined
                  ? "bg-green-400"
                  : "bg-muted"
              }`}
            />
          ))}
        </div>

        {/* Question Card */}
        <motion.div
          key={q.id}
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.3 }}
        >
          <Card className="mb-6">
            <CardHeader>
              <div className="flex items-center justify-between">
                <Badge variant="outline">Q{current + 1} of {questions.length}</Badge>
                <span className="text-xs text-muted-foreground">+{q.marks} marks • -{q.negative} negative</span>
              </div>
              <CardTitle className="text-lg mt-3 font-medium leading-relaxed">
                {q.question}
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              {q.options.map((opt, idx) => {
                const selected = answers[q.id] === idx;
                return (
                  <button
                    key={idx}
                    onClick={() => handleAnswer(idx)}
                    className={`w-full text-left rounded-xl border px-4 py-3 text-sm transition-all ${
                      selected
                        ? "border-tests-primary bg-tests-primary/5 text-tests-primary font-medium"
                        : "border-border hover:border-tests-primary/30 hover:bg-accent"
                    }`}
                  >
                    <span className="inline-flex h-6 w-6 items-center justify-center rounded-full border mr-3 text-xs">
                      {String.fromCharCode(65 + idx)}
                    </span>
                    {opt}
                  </button>
                );
              })}
            </CardContent>
          </Card>
        </motion.div>

        {/* Navigation */}
        <div className="flex items-center justify-between">
          <Button
            variant="outline"
            onClick={() => setCurrent((p) => Math.max(0, p - 1))}
            disabled={current === 0}
          >
            <ChevronLeft className="mr-1 h-4 w-4" /> Previous
          </Button>

          <div className="flex gap-2">
            {isLast ? (
              <Button onClick={handleSubmit} className="bg-tests-primary text-white">
                <Flag className="mr-1 h-4 w-4" /> Submit Test
              </Button>
            ) : (
              <Button onClick={() => setCurrent((p) => Math.min(questions.length - 1, p + 1))} className="bg-tests-primary text-white">
                Next <ChevronRight className="ml-1 h-4 w-4" />
              </Button>
            )}
          </div>
        </div>

        {/* Legend */}
        <div className="mt-8 flex flex-wrap items-center gap-4 text-xs text-muted-foreground">
          <span className="flex items-center gap-1"><div className="h-2 w-2 rounded-full bg-green-400" /> Answered</span>
          <span className="flex items-center gap-1"><div className="h-2 w-2 rounded-full bg-tests-primary" /> Current</span>
          <span className="flex items-center gap-1"><div className="h-2 w-2 rounded-full bg-muted" /> Unattempted</span>
          <span className="flex items-center gap-1"><AlertCircle className="h-3 w-3" /> Negative marking applies</span>
        </div>
      </div>
    </div>
  );
}

