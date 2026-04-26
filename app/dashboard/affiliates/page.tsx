"use client";

import { motion } from "framer-motion";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Users, Copy, Check, Share2, Trophy } from "lucide-react";
import { useState } from "react";

const teamMembers = [
  { name: "Rahul Sharma", level: "Direct", package: "Pro", earnings: "₹1,400", joined: "2 days ago" },
  { name: "Priya Patel", level: "Direct", package: "Beginner", earnings: "₹540", joined: "5 days ago" },
  { name: "Amit Kumar", level: "Level 2", package: "Expert", earnings: "₹850", joined: "1 week ago" },
  { name: "Sneha Gupta", level: "Direct", package: "Pro", earnings: "₹1,400", joined: "2 weeks ago" },
];

export default function AffiliatesPage() {
  const [copied, setCopied] = useState(false);
  const referralLink = "https://odlix.com/signup?ref=ODLX1234";

  function copyLink() {
    navigator.clipboard.writeText(referralLink);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  }

  return (
    <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} className="space-y-6">
      <div>
        <h1 className="text-2xl font-bold">Affiliates</h1>
        <p className="text-muted-foreground">Grow your team and earn commissions</p>
      </div>

      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Share2 className="h-5 w-5" />
            Your Referral Link
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="flex gap-2">
            <Input value={referralLink} readOnly className="flex-1" />
            <Button onClick={copyLink} variant="outline">
              {copied ? <Check className="h-4 w-4" /> : <Copy className="h-4 w-4" />}
            </Button>
          </div>
          <div className="grid grid-cols-3 gap-4 mt-6">
            <div className="text-center">
              <div className="text-2xl font-bold">18</div>
              <div className="text-xs text-muted-foreground">Total Referrals</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold">12</div>
              <div className="text-xs text-muted-foreground">Direct</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold">6</div>
              <div className="text-xs text-muted-foreground">Level 2</div>
            </div>
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Users className="h-5 w-5" />
            Your Team
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {teamMembers.map((member, i) => (
              <div key={i} className="flex items-center justify-between border-b pb-3 last:border-0">
                <div className="flex items-center gap-3">
                  <div className="h-10 w-10 rounded-full bg-gradient-to-br from-homepage-primary to-homepage-secondary flex items-center justify-center text-white font-bold text-sm">
                    {member.name.charAt(0)}
                  </div>
                  <div>
                    <p className="font-medium text-sm">{member.name}</p>
                    <p className="text-xs text-muted-foreground">{member.level} · {member.package}</p>
                  </div>
                </div>
                <div className="text-right">
                  <p className="font-medium text-sm text-green-600">{member.earnings}</p>
                  <p className="text-xs text-muted-foreground">{member.joined}</p>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Trophy className="h-5 w-5" />
            Commission Structure
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid gap-4 md:grid-cols-3">
            {[
              { name: "Beginner", price: "₹999", direct: "54%", level2: "12%" },
              { name: "Pro", price: "₹2,499", direct: "56%", level2: "14%" },
              { name: "Expert", price: "₹4,999", direct: "58%", level2: "17%" },
            ].map((pkg) => (
              <div key={pkg.name} className="border rounded-lg p-4 text-center">
                <h4 className="font-semibold">{pkg.name}</h4>
                <p className="text-sm text-muted-foreground">{pkg.price}</p>
                <div className="mt-3 space-y-1">
                  <p className="text-sm">Direct: <span className="font-bold text-green-600">{pkg.direct}</span></p>
                  <p className="text-sm">Level 2: <span className="font-bold text-blue-600">{pkg.level2}</span></p>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </motion.div>
  );
}

