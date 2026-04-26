"use client";

import { motion } from "framer-motion";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Trophy, Medal, Crown } from "lucide-react";

const leaders = [
  { rank: 1, name: "Vikram Singh", earnings: "₹1,24,500", referrals: 142, badge: "Diamond" },
  { rank: 2, name: "Priya Patel", earnings: "₹98,200", referrals: 118, badge: "Platinum" },
  { rank: 3, name: "Rahul Sharma", earnings: "₹87,400", referrals: 95, badge: "Gold" },
  { rank: 4, name: "Sneha Gupta", earnings: "₹72,100", referrals: 82, badge: "Gold" },
  { rank: 5, name: "Amit Kumar", earnings: "₹65,800", referrals: 76, badge: "Silver" },
  { rank: 6, name: "Neha Reddy", earnings: "₹54,300", referrals: 64, badge: "Silver" },
  { rank: 7, name: "Karan Malhotra", earnings: "₹48,900", referrals: 58, badge: "Bronze" },
  { rank: 8, name: "Ananya Iyer", earnings: "₹42,500", referrals: 51, badge: "Bronze" },
];

export default function LeaderboardPage() {
  return (
    <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} className="space-y-6">
      <div>
        <h1 className="text-2xl font-bold">Leaderboard</h1>
        <p className="text-muted-foreground">Top performers this month</p>
      </div>

      <div className="grid gap-4 md:grid-cols-3">
        {leaders.slice(0, 3).map((leader) => (
          <Card key={leader.rank} className={leader.rank === 1 ? "border-yellow-400" : ""}>
            <CardContent className="pt-6 text-center">
              <div className="mx-auto h-16 w-16 rounded-full bg-gradient-to-br from-homepage-primary to-homepage-secondary flex items-center justify-center text-white text-2xl font-bold mb-3">
                {leader.rank === 1 ? <Crown className="h-8 w-8" /> : leader.rank}
              </div>
              <h3 className="font-semibold">{leader.name}</h3>
              <p className="text-sm text-muted-foreground">{leader.badge}</p>
              <div className="mt-4 text-2xl font-bold">{leader.earnings}</div>
              <p className="text-xs text-muted-foreground">{leader.referrals} referrals</p>
            </CardContent>
          </Card>
        ))}
      </div>

      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Trophy className="h-5 w-5" />
            All Rankings
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-3">
            {leaders.map((leader) => (
              <div key={leader.rank} className="flex items-center gap-4 p-3 rounded-lg hover:bg-muted/50 transition-colors">
                <div className="w-8 text-center font-bold text-muted-foreground">{leader.rank}</div>
                <div className="h-10 w-10 rounded-full bg-gradient-to-br from-homepage-primary to-homepage-secondary flex items-center justify-center text-white font-bold text-sm">
                  {leader.name.charAt(0)}
                </div>
                <div className="flex-1">
                  <p className="font-medium">{leader.name}</p>
                  <p className="text-xs text-muted-foreground">{leader.badge} · {leader.referrals} referrals</p>
                </div>
                <div className="text-right">
                  <p className="font-bold">{leader.earnings}</p>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </motion.div>
  );
}

