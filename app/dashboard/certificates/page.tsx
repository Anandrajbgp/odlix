"use client";

import { motion } from "framer-motion";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Award, Download, Share2, QrCode } from "lucide-react";

const certificates = [
  { title: "Graphic Design Fundamentals", issueDate: "Jan 15, 2025", verifyId: "ODL-CERT-001", completed: true },
  { title: "Spoken English Mastery", issueDate: "Feb 20, 2025", verifyId: "ODL-CERT-002", completed: true },
  { title: "Stock Market Basics", issueDate: "Pending", verifyId: "ODL-CERT-003", completed: false },
];

export default function CertificatesPage() {
  return (
    <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} className="space-y-6">
      <div>
        <h1 className="text-2xl font-bold">Certificates</h1>
        <p className="text-muted-foreground">Your earned certifications</p>
      </div>

      <div className="grid gap-4">
        {certificates.map((cert, i) => (
          <Card key={i} className={cert.completed ? "" : "opacity-60"}>
            <CardContent className="p-6">
              <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                <div className="flex items-center gap-4">
                  <div className="h-16 w-16 rounded-lg bg-gradient-to-br from-yellow-400 to-orange-500 flex items-center justify-center">
                    <Award className="h-8 w-8 text-white" />
                  </div>
                  <div>
                    <h3 className="font-semibold">{cert.title}</h3>
                    <p className="text-sm text-muted-foreground">Issued: {cert.issueDate}</p>
                    <div className="flex items-center gap-1 mt-1">
                      <QrCode className="h-3 w-3 text-muted-foreground" />
                      <span className="text-xs text-muted-foreground">{cert.verifyId}</span>
                    </div>
                  </div>
                </div>
                {cert.completed && (
                  <div className="flex gap-2">
                    <Button variant="outline" size="sm">
                      <Download className="mr-2 h-4 w-4" />
                      Download
                    </Button>
                    <Button variant="outline" size="sm">
                      <Share2 className="mr-2 h-4 w-4" />
                      Share
                    </Button>
                  </div>
                )}
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </motion.div>
  );
}

