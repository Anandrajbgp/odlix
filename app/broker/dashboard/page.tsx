"use client";

import { motion } from "framer-motion";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
  TrendingUp,
  TrendingDown,
  Wallet,
  BarChart3,
  Bell,
  ArrowUpRight,
  ArrowDownRight,
  Eye,
  Zap,
} from "lucide-react";

const portfolio = [
  { name: "Reliance Industries", symbol: "RELIANCE", qty: 50, avg: 2450, current: 2680, change: 9.4 },
  { name: "TCS", symbol: "TCS", qty: 10, avg: 3400, current: 3650, change: 7.4 },
  { name: "Infosys", symbol: "INFY", qty: 25, avg: 1450, current: 1380, change: -4.8 },
  { name: "HDFC Bank", symbol: "HDFCBANK", qty: 20, avg: 1520, current: 1610, change: 5.9 },
];

const watchlist = [
  { name: "Adani Ent.", symbol: "ADANIENT", price: 2180, change: 2.3 },
  { name: "Bharti Airtel", symbol: "BHARTIARTL", price: 945, change: -0.8 },
  { name: "SBI", symbol: "SBIN", price: 625, change: 1.5 },
  { name: "ITC", symbol: "ITC", price: 415, change: -0.3 },
];

export default function BrokerDashboardPage() {
  const totalValue = portfolio.reduce((sum, s) => sum + s.current * s.qty, 0);
  const totalInvested = portfolio.reduce((sum, s) => sum + s.avg * s.qty, 0);
  const totalReturn = ((totalValue - totalInvested) / totalInvested) * 100;

  return (
    <div className="space-y-8 pb-20 max-w-7xl mx-auto px-4">
      <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} className="pt-8">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-3xl font-bold">Trading Dashboard</h1>
            <p className="text-muted-foreground">Real-time portfolio overview and market insights</p>
          </div>
          <Button variant="outline" size="sm">
            <Bell className="h-4 w-4 mr-2" />
            Alerts
          </Button>
        </div>
      </motion.div>

      {/* Stats Row */}
      <div className="grid gap-4 md:grid-cols-4">
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium text-muted-foreground">Portfolio Value</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">₹{totalValue.toLocaleString()}</div>
            <div className={`flex items-center gap-1 text-xs mt-1 ${totalReturn >= 0 ? "text-green-600" : "text-red-600"}`}>
              {totalReturn >= 0 ? <ArrowUpRight className="h-3 w-3" /> : <ArrowDownRight className="h-3 w-3" />}
              {totalReturn.toFixed(2)}% all time
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium text-muted-foreground">Available Cash</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">₹45,200</div>
            <div className="text-xs text-muted-foreground mt-1">In your wallet</div>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium text-muted-foreground">Today's P&L</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-green-600">+₹2,840</div>
            <div className="text-xs text-green-600 mt-1">+1.24% today</div>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium text-muted-foreground">Active Positions</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{portfolio.length}</div>
            <div className="text-xs text-muted-foreground mt-1">Across segments</div>
          </CardContent>
        </Card>
      </div>

      <div className="grid gap-6 lg:grid-cols-3">
        {/* Portfolio Holdings */}
        <Card className="lg:col-span-2">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Wallet className="h-5 w-5 text-broker-primary" />
              Holdings
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-3">
              {portfolio.map((stock) => {
                const currentValue = stock.current * stock.qty;
                const invested = stock.avg * stock.qty;
                const pnl = currentValue - invested;
                const pnlPercent = (pnl / invested) * 100;
                const isProfit = pnl >= 0;

                return (
                  <div key={stock.symbol} className="flex items-center justify-between p-3 rounded-lg border hover:bg-muted/50 transition-colors">
                    <div className="flex items-center gap-3">
                      <div className={`h-10 w-10 rounded-lg flex items-center justify-center text-xs font-bold ${isProfit ? "bg-green-100 text-green-700" : "bg-red-100 text-red-700"}`}>
                        {stock.symbol.slice(0, 2)}
                      </div>
                      <div>
                        <p className="font-medium text-sm">{stock.name}</p>
                        <p className="text-xs text-muted-foreground">{stock.qty} shares @ ₹{stock.avg}</p>
                      </div>
                    </div>
                    <div className="text-right">
                      <p className="font-semibold text-sm">₹{currentValue.toLocaleString()}</p>
                      <p className={`text-xs flex items-center justify-end gap-1 ${isProfit ? "text-green-600" : "text-red-600"}`}>
                        {isProfit ? <TrendingUp className="h-3 w-3" /> : <TrendingDown className="h-3 w-3" />}
                        ₹{Math.abs(pnl).toLocaleString()} ({pnlPercent.toFixed(1)}%)
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </CardContent>
        </Card>

        {/* Watchlist + Quick Actions */}
        <div className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-sm">
                <Eye className="h-4 w-4 text-broker-primary" />
                Watchlist
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                {watchlist.map((stock) => (
                  <div key={stock.symbol} className="flex items-center justify-between">
                    <div>
                      <p className="text-sm font-medium">{stock.name}</p>
                      <p className="text-xs text-muted-foreground">{stock.symbol}</p>
                    </div>
                    <div className="text-right">
                      <p className="text-sm font-medium">₹{stock.price}</p>
                      <p className={`text-xs ${stock.change >= 0 ? "text-green-600" : "text-red-600"}`}>
                        {stock.change >= 0 ? "+" : ""}{stock.change}%
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-sm">
                <Zap className="h-4 w-4 text-broker-primary" />
                Quick Actions
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-2">
              <Button className="w-full bg-green-600 hover:bg-green-700 text-white">
                <TrendingUp className="h-4 w-4 mr-2" />
                Buy
              </Button>
              <Button className="w-full bg-red-600 hover:bg-red-700 text-white">
                <TrendingDown className="h-4 w-4 mr-2" />
                Sell
              </Button>
              <Button variant="outline" className="w-full">
                <BarChart3 className="h-4 w-4 mr-2" />
                Advanced Chart
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}

