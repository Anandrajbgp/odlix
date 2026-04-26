"use client";

import { motion } from "framer-motion";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Users, Search, Mail, Phone } from "lucide-react";

const students = [
  { name: "Rahul Sharma", email: "rahul@example.com", phone: "+91 98765 43210", package: "Pro", status: "active", joined: "Jan 15, 2025" },
  { name: "Priya Patel", email: "priya@example.com", phone: "+91 98765 43211", package: "Expert", status: "active", joined: "Jan 20, 2025" },
  { name: "Amit Kumar", email: "amit@example.com", phone: "+91 98765 43212", package: "Beginner", status: "inactive", joined: "Feb 1, 2025" },
  { name: "Sneha Gupta", email: "sneha@example.com", phone: "+91 98765 43213", package: "Pro", status: "active", joined: "Feb 10, 2025" },
  { name: "Vikram Singh", email: "vikram@example.com", phone: "+91 98765 43214", package: "Expert", status: "active", joined: "Feb 15, 2025" },
];

export default function AdminStudentsPage() {
  return (
    <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold">Students</h1>
          <p className="text-muted-foreground">Manage student accounts</p>
        </div>
        <div className="flex items-center gap-2">
          <Users className="h-5 w-5 text-muted-foreground" />
          <span className="font-bold">{students.length}</span>
        </div>
      </div>

      <div className="relative">
        <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
        <Input placeholder="Search students..." className="pl-10" />
      </div>

      <Card>
        <CardContent className="p-0">
          <div className="divide-y">
            {students.map((student, i) => (
              <div key={i} className="flex items-center justify-between p-4 hover:bg-muted/50 transition-colors">
                <div className="flex items-center gap-3">
                  <div className="h-10 w-10 rounded-full bg-gradient-to-br from-homepage-primary to-homepage-secondary flex items-center justify-center text-white font-bold text-sm">
                    {student.name.charAt(0)}
                  </div>
                  <div>
                    <p className="font-medium text-sm">{student.name}</p>
                    <div className="flex items-center gap-3 text-xs text-muted-foreground">
                      <span className="flex items-center gap-1"><Mail className="h-3 w-3" />{student.email}</span>
                      <span className="flex items-center gap-1"><Phone className="h-3 w-3" />{student.phone}</span>
                    </div>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <Badge variant="outline">{student.package}</Badge>
                  <Badge variant={student.status === "active" ? "default" : "secondary"}>{student.status}</Badge>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </motion.div>
  );
}

