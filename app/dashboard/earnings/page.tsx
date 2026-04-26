"use client";

import { motion } from "framer-motion";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Wallet, TrendingUp, Users, ArrowUpRight, IndianRupee } from "lucide-react";

const stats = [
  { title: "Total Earnings", value: "₹45,250", icon: Wallet, change: "+₹12,000 this month" },
  { title: "Direct Commissions", value: "₹32,100", icon: TrendingUp, change: "71% of total" },
  { title: "Level 2 Commissions", value: "₹13,150", icon: Users, change: "29% of total" },
  { title: "Pending Payout", value: "₹8,500", icon: IndianRupee, change: "Min ₹200 for payout" },
];

const transactions = [
  { type: "Direct", from: "Rahul Sharma", package: "Pro", amount: "₹1,400", date: "Today" },
  { type: "Direct", from: "Priya Patel", package: "Beginner", amount: "₹540", date: "Yesterday" },
  { type: "Level 2", from: "Amit Kumar", package: "Expert", amount: "₹850", date: "2 days ago" },
  { type: "Direct", from: "Sneha Gupta", package: "Pro", amount: "₹1,400", date: "3 days ago" },
  { type: "Level 2", from: "Vikram Singh", package: "Beginner", amount: "₹120", date: "1 week ago" },
];

export default function EarningsPage() {
  return (
    <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold">Earnings</h1>
          <p className="text-muted-foreground">Track your affiliate income</p>
        </div>
        <Button className="bg-gradient-to-r from-homepage-primary to-homepage-secondary text-white">
          Request Payout
        </Button>
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
                <p className="text-xs text-muted-foreground mt-1">{stat.change}</p>
              </CardContent>
            </Card>
          );
        })}
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Recent Transactions</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {transactions.map((tx, i) => (
              <div key={i} className="flex items-center justify-between border-b pb-3 last:border-0">
                <div className="flex items-center gap-3">
                  <div className={`h-8 w-8 rounded-full flex items-center justify-center text-xs font-medium ${tx.type === "Direct" ? "bg-green-100 text-green-700" : "bg-blue-100 text-blue-700"}`}>
                    {tx.type === "Direct" ? "D" : "L2"}
                  </div>
                  <div>
                    <p className="font-medium text-sm">{tx.from}</p>
                    <p className="text-xs text-muted-foreground">{tx.package} Package · {tx.date}</p>
                  </div>
                </div>
                <div className="flex items-center gap-1 text-green-600 font-medium">
                  <ArrowUpRight className="h-4 w-4" />
                  {tx.amount}
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </motion.div>
  );
}

