"use client";

import { motion } from "framer-motion";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Award, Share2, Download, QrCode, CheckCircle } from "lucide-react";

const certificates = [
  {
    id: "CERT-001",
    course: "Spoken English Mastery",
    issued: "Jan 15, 2025",
    verified: true,
    grade: "A+",
    skills: ["Communication", "Public Speaking", "Presentation"],
  },
  {
    id: "CERT-002",
    course: "Graphic Design Fundamentals",
    issued: "Feb 20, 2025",
    verified: true,
    grade: "A",
    skills: ["Photoshop", "Illustrator", "UI Design"],
  },
  {
    id: "CERT-003",
    course: "Stock Market Basics",
    issued: "Mar 10, 2025",
    verified: true,
    grade: "A+",
    skills: ["Technical Analysis", "Fundamental Analysis", "Risk Management"],
  },
];

export default function CertificatesPage() {
  return (
    <div className="space-y-8 pb-20">
      <section className="relative overflow-hidden bg-gradient-to-br from-learning-primary/10 via-background to-learning-secondary/10 py-16">
        <div className="mx-auto max-w-7xl px-4 text-center">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
            <h1 className="text-4xl font-bold tracking-tight sm:text-5xl text-learning-primary">
              Your Certificates
            </h1>
            <p className="mx-auto mt-4 max-w-2xl text-lg text-muted-foreground">
              QR-verified, shareable credentials that showcase your expertise.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4">
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {certificates.map((cert, i) => (
            <motion.div
              key={cert.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
            >
              <Card className="h-full border-learning-primary/20">
                <CardHeader className="pb-3">
                  <div className="flex items-center justify-between">
                    <Badge variant="secondary" className="bg-learning-primary/10 text-learning-primary">
                      {cert.grade}
                    </Badge>
                    {cert.verified && (
                      <span className="flex items-center gap-1 text-xs text-green-600">
                        <CheckCircle className="h-3 w-3" /> Verified
                      </span>
                    )}
                  </div>
                  <CardTitle className="text-lg mt-2">{cert.course}</CardTitle>
                  <p className="text-xs text-muted-foreground">{cert.id} • Issued {cert.issued}</p>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex flex-wrap gap-2">
                    {cert.skills.map((skill) => (
                      <span key={skill} className="text-xs bg-muted px-2 py-1 rounded-full text-muted-foreground">
                        {skill}
                      </span>
                    ))}
                  </div>
                  <div className="flex items-center justify-center py-4">
                    <div className="h-24 w-24 rounded-lg bg-learning-primary/10 flex items-center justify-center">
                      <QrCode className="h-12 w-12 text-learning-primary" />
                    </div>
                  </div>
                  <div className="grid grid-cols-3 gap-2">
                    <Button size="sm" variant="outline" className="text-xs">
                      <Download className="mr-1 h-3 w-3" /> PDF
                    </Button>
                    <Button size="sm" variant="outline" className="text-xs">
                      <Share2 className="mr-1 h-3 w-3" /> Share
                    </Button>
                    <Button size="sm" variant="outline" className="text-xs">
                      <svg
                        className="mr-1 h-3 w-3"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                        aria-hidden="true"
                      >
                        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                      </svg>{" "}
                      Post
                    </Button>
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

