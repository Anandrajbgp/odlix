"use client";

import { motion } from "framer-motion";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { CreditCard, Clock, CheckCircle, IndianRupee } from "lucide-react";

const payouts = [
  { id: "PYT-001", amount: "₹5,200", status: "completed", date: "Mar 15, 2025", method: "UPI" },
  { id: "PYT-002", amount: "₹3,800", status: "completed", date: "Mar 8, 2025", method: "Bank Transfer" },
  { id: "PYT-003", amount: "₹8,500", status: "pending", date: "Mar 22, 2025", method: "UPI" },
  { id: "PYT-004", amount: "₹2,100", status: "completed", date: "Feb 28, 2025", method: "UPI" },
];

export default function PayoutsPage() {
  return (
    <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold">Payouts</h1>
          <p className="text-muted-foreground">Manage your withdrawal requests</p>
        </div>
        <Button className="bg-gradient-to-r from-homepage-primary to-homepage-secondary text-white">
          <IndianRupee className="mr-2 h-4 w-4" />
          Request Payout
        </Button>
      </div>

      <div className="grid gap-4 md:grid-cols-3">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-sm font-medium">Available Balance</CardTitle>
            <CreditCard className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">₹8,500</div>
            <p className="text-xs text-muted-foreground">Min ₹200 for payout</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-sm font-medium">Total Payouts</CardTitle>
            <CheckCircle className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">₹36,750</div>
            <p className="text-xs text-muted-foreground">Lifetime withdrawals</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-sm font-medium">Pending</CardTitle>
            <Clock className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">₹8,500</div>
            <p className="text-xs text-muted-foreground">Processing time: 24-48h</p>
          </CardContent>
        </Card>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Payout History</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {payouts.map((payout) => (
              <div key={payout.id} className="flex items-center justify-between border-b pb-3 last:border-0">
                <div>
                  <p className="font-medium text-sm">{payout.id}</p>
                  <p className="text-xs text-muted-foreground">{payout.date} · {payout.method}</p>
                </div>
                <div className="flex items-center gap-3">
                  <span className="font-bold">{payout.amount}</span>
                  <Badge variant={payout.status === "completed" ? "default" : "secondary"}>
                    {payout.status}
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

