"use client";

import { motion } from "framer-motion";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Users, CheckCircle, XCircle, IndianRupee } from "lucide-react";

const affiliates = [
  { name: "Rahul Sharma", code: "ODLX1234", earnings: "₹45,250", referrals: 18, status: "approved" },
  { name: "Priya Patel", code: "ODLX5678", earnings: "₹32,100", referrals: 14, status: "approved" },
  { name: "Amit Kumar", code: "ODLX9012", earnings: "₹8,500", referrals: 5, status: "pending" },
  { name: "Sneha Gupta", code: "ODLX3456", earnings: "₹15,200", referrals: 9, status: "approved" },
];

const payouts = [
  { id: "PYT-001", affiliate: "Rahul Sharma", amount: "₹5,200", status: "pending", date: "Mar 22, 2025" },
  { id: "PYT-002", affiliate: "Priya Patel", amount: "₹3,800", status: "approved", date: "Mar 20, 2025" },
];

export default function AdminAffiliatesPage() {
  return (
    <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} className="space-y-6">
      <div>
        <h1 className="text-2xl font-bold">Affiliates</h1>
        <p className="text-muted-foreground">Manage affiliate program</p>
      </div>

      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2"><Users className="h-5 w-5" /> Affiliates</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {affiliates.map((aff, i) => (
              <div key={i} className="flex items-center justify-between border-b pb-3 last:border-0">
                <div className="flex items-center gap-3">
                  <div className="h-10 w-10 rounded-full bg-gradient-to-br from-homepage-primary to-homepage-secondary flex items-center justify-center text-white font-bold text-sm">
                    {aff.name.charAt(0)}
                  </div>
                  <div>
                    <p className="font-medium text-sm">{aff.name}</p>
                    <p className="text-xs text-muted-foreground">Code: {aff.code} · {aff.referrals} referrals</p>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <span className="font-bold">{aff.earnings}</span>
                  <Badge variant={aff.status === "approved" ? "default" : "secondary"}>{aff.status}</Badge>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2"><IndianRupee className="h-5 w-5" /> Payout Requests</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {payouts.map((payout) => (
              <div key={payout.id} className="flex items-center justify-between border-b pb-3 last:border-0">
                <div>
                  <p className="font-medium text-sm">{payout.id}</p>
                  <p className="text-xs text-muted-foreground">{payout.affiliate} · {payout.date}</p>
                </div>
                <div className="flex items-center gap-3">
                  <span className="font-bold">{payout.amount}</span>
                  <div className="flex gap-1">
                    <Button size="sm" variant="outline" className="h-8 w-8 p-0"><CheckCircle className="h-4 w-4 text-green-600" /></Button>
                    <Button size="sm" variant="outline" className="h-8 w-8 p-0"><XCircle className="h-4 w-4 text-red-600" /></Button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </motion.div>
  );
}

