"use client";

import { motion } from "framer-motion";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Bell, Mail, MessageSquare, Send, Clock } from "lucide-react";

const campaigns = [
  { title: "Welcome Email", type: "Email", status: "active", sent: 1240, lastRun: "Daily" },
  { title: "Course Completion", type: "Email", status: "active", sent: 856, lastRun: "Auto" },
  { title: "Weekly Leaderboard", type: "WhatsApp", status: "active", sent: 2100, lastRun: "Saturday" },
  { title: "Festival Bonus", type: "WhatsApp", status: "draft", sent: 0, lastRun: "Manual" },
];

export default function AdminNotificationsPage() {
  return (
    <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} className="space-y-6">
      <div>
        <h1 className="text-2xl font-bold">Notifications</h1>
        <p className="text-muted-foreground">Email and WhatsApp campaigns</p>
      </div>

      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2"><Send className="h-5 w-5" /> Send Campaign</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div>
            <Label>Campaign Title</Label>
            <Input placeholder="e.g., New Course Launch" />
          </div>
          <div>
            <Label>Message</Label>
            <Input placeholder="Enter your message here..." />
          </div>
          <div className="flex gap-2">
            <Button variant="outline"><Mail className="mr-2 h-4 w-4" /> Send Email</Button>
            <Button variant="outline"><MessageSquare className="mr-2 h-4 w-4" /> Send WhatsApp</Button>
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2"><Bell className="h-5 w-5" /> Active Campaigns</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {campaigns.map((campaign, i) => (
              <div key={i} className="flex items-center justify-between border-b pb-3 last:border-0">
                <div>
                  <p className="font-medium text-sm">{campaign.title}</p>
                  <div className="flex items-center gap-3 text-xs text-muted-foreground">
                    <span className="flex items-center gap-1">{campaign.type === "Email" ? <Mail className="h-3 w-3" /> : <MessageSquare className="h-3 w-3" />}{campaign.type}</span>
                    <span className="flex items-center gap-1"><Clock className="h-3 w-3" />{campaign.lastRun}</span>
                  </div>
                </div>
                <div className="text-right">
                  <p className="text-sm font-bold">{campaign.sent.toLocaleString()}</p>
                  <p className="text-xs text-muted-foreground">sent</p>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </motion.div>
  );
}

