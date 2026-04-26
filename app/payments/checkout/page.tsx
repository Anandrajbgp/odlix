"use client";

import { useSearchParams } from "next/navigation";
import { motion } from "framer-motion";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { CheckCircle, CreditCard, Shield } from "lucide-react";
import { Suspense } from "react";

function CheckoutContent() {
  const searchParams = useSearchParams();
  const orderId = searchParams.get("orderId");
  const amount = searchParams.get("amount");
  const packageName = searchParams.get("package");

  return (
    <div className="min-h-screen flex items-center justify-center py-12 px-4">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="w-full max-w-lg"
      >
        <Card>
          <CardHeader className="text-center">
            <div className="mx-auto h-12 w-12 rounded-full bg-green-100 flex items-center justify-center mb-4">
              <CheckCircle className="h-6 w-6 text-green-600" />
            </div>
            <CardTitle className="text-2xl">Order Created</CardTitle>
            <p className="text-sm text-muted-foreground">Complete your payment to get started</p>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="rounded-lg bg-muted p-4 space-y-2">
              <div className="flex justify-between text-sm">
                <span className="text-muted-foreground">Order ID</span>
                <span className="font-medium">{orderId}</span>
              </div>
              <div className="flex justify-between text-sm">
                <span className="text-muted-foreground">Package</span>
                <span className="font-medium">{packageName}</span>
              </div>
              <div className="flex justify-between text-sm">
                <span className="text-muted-foreground">Amount</span>
                <span className="font-bold text-lg">₹{amount}</span>
              </div>
            </div>

            <div className="space-y-3">
              <Button className="w-full h-12 bg-gradient-to-r from-homepage-primary to-homepage-secondary text-white">
                <CreditCard className="mr-2 h-4 w-4" />
                Pay with Cashfree
              </Button>
              <p className="text-xs text-center text-muted-foreground flex items-center justify-center gap-1">
                <Shield className="h-3 w-3" />
                Secure payment powered by Cashfree Payments
              </p>
            </div>

            <div className="text-center text-sm text-muted-foreground">
              <p>In production, this will redirect to Cashfree checkout.</p>
              <p>Contact team.odlix@gmail.com for support.</p>
            </div>
          </CardContent>
        </Card>
      </motion.div>
    </div>
  );
}

export default function CheckoutPage() {
  return (
    <Suspense fallback={
      <div className="min-h-screen flex items-center justify-center">
        <div className="animate-spin h-8 w-8 border-4 border-homepage-primary border-t-transparent rounded-full" />
      </div>
    }>
      <CheckoutContent />
    </Suspense>
  );
}
