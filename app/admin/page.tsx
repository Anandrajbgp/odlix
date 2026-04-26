"use client";

import { motion } from "framer-motion";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Users, BookOpen, CreditCard, Award, TrendingUp, Eye } from "lucide-react";

const stats = [
  { title: "Total Students", value: "12,450", icon: Users, change: "+12%" },
  { title: "Active Courses", value: "248", icon: BookOpen, change: "+5%" },
  { title: "Revenue (Month)", value: "₹8.4L", icon: CreditCard, change: "+18%" },
  { title: "Affiliates", value: "3,210", icon: Award, change: "+24%" },
];

const recentActivity = [
  { user: "Rahul Sharma", action: "Enrolled in Pro Package", time: "2 min ago" },
  { user: "Priya Patel", action: "Completed Stock Market Basics", time: "15 min ago" },
  { user: "Amit Kumar", action: "Made a payout request", time: "1 hour ago" },
  { user: "Sneha Gupta", action: "Referred 3 new users", time: "2 hours ago" },
  { user: "Vikram Singh", action: "Purchased Expert Package", time: "3 hours ago" },
];

export default function AdminDashboardPage() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4 }}
      className="space-y-6"
    >
      <div>
        <h1 className="text-2xl font-bold">Admin Dashboard</h1>
        <p className="text-muted-foreground">Overview of your platform performance</p>
      </div>

      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        {stats.map((stat) => {
          const Icon = stat.icon;
          return (
            <Card key={stat.title}>
              <CardHeader className="flex flex-row items-center justify-between pb-2">
                <CardTitle className="text-sm font-medium">{stat.title}</CardTitle>
                <Icon className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">{stat.value}</div>
                <p className="text-xs text-green-500 mt-1">{stat.change} from last month</p>
              </CardContent>
            </Card>
          );
        })}
      </div>

      <div className="grid gap-6 lg:grid-cols-2">
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Eye className="h-5 w-5" />
              Recent Activity
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {recentActivity.map((activity, i) => (
                <div key={i} className="flex items-center justify-between border-b pb-3 last:border-0">
                  <div>
                    <p className="font-medium text-sm">{activity.user}</p>
                    <p className="text-sm text-muted-foreground">{activity.action}</p>
                  </div>
                  <span className="text-xs text-muted-foreground">{activity.time}</span>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <TrendingUp className="h-5 w-5" />
              Revenue Overview
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="h-[200px] flex items-end justify-between gap-2">
              {[65, 45, 80, 55, 90, 70, 85, 60, 95, 75, 88, 92].map((h, i) => (
                <div key={i} className="flex-1 flex flex-col items-center gap-1">
                  <div
                    className="w-full rounded-t bg-gradient-to-t from-homepage-primary to-homepage-secondary opacity-80"
                    style={{ height: `${h * 2}px` }}
                  />
                  <span className="text-[10px] text-muted-foreground">
                    {["J", "F", "M", "A", "M", "J", "J", "A", "S", "O", "N", "D"][i]}
                  </span>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </motion.div>
  );
}

