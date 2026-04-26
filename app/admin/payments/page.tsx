"use client";

import { motion } from "framer-motion";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { IndianRupee, CreditCard, TrendingUp, Users } from "lucide-react";

const payments = [
  { id: "PAY-001", user: "Rahul Sharma", amount: "₹2,499", package: "Pro", status: "success", date: "Mar 20, 2025" },
  { id: "PAY-002", user: "Priya Patel", amount: "₹4,999", package: "Expert", status: "success", date: "Mar 19, 2025" },
  { id: "PAY-003", user: "Amit Kumar", amount: "₹999", package: "Beginner", status: "pending", date: "Mar 18, 2025" },
  { id: "PAY-004", user: "Sneha Gupta", amount: "₹2,499", package: "Pro", status: "success", date: "Mar 17, 2025" },
  { id: "PAY-005", user: "Vikram Singh", amount: "₹4,999", package: "Expert", status: "failed", date: "Mar 16, 2025" },
];

export default function AdminPaymentsPage() {
  const totalRevenue = payments.reduce((acc, p) => acc + (p.status === "success" ? parseInt(p.amount.replace(/[^0-9]/g, "")) : 0), 0);

  return (
    <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} className="space-y-6">
      <div>
        <h1 className="text-2xl font-bold">Payments</h1>
        <p className="text-muted-foreground">Track all transactions</p>
      </div>

      <div className="grid gap-4 md:grid-cols-3">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-sm font-medium">Total Revenue</CardTitle>
            <IndianRupee className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">₹{totalRevenue.toLocaleString()}</div>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-sm font-medium">Successful</CardTitle>
            <CreditCard className="h-4 w-4 text-green-500" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-green-600">3</div>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-sm font-medium">Pending</CardTitle>
            <TrendingUp className="h-4 w-4 text-yellow-500" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-yellow-600">1</div>
          </CardContent>
        </Card>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Recent Transactions</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {payments.map((payment) => (
              <div key={payment.id} className="flex items-center justify-between border-b pb-3 last:border-0">
                <div>
                  <p className="font-medium text-sm">{payment.id}</p>
                  <p className="text-xs text-muted-foreground">{payment.user} · {payment.package}</p>
                </div>
                <div className="flex items-center gap-3">
                  <span className="font-bold">{payment.amount}</span>
                  <Badge variant={payment.status === "success" ? "default" : payment.status === "pending" ? "secondary" : "destructive"}>
                    {payment.status}
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

