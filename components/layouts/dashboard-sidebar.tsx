"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import {
  LayoutDashboard,
  BookOpen,
  Wallet,
  Trophy,
  Users,
  Settings,
  LogOut,
  GraduationCap,
  Award,
  HelpCircle,
  Share2,
  BarChart3,
  CreditCard,
  FileText,
} from "lucide-react";

const links = [
  { href: "/dashboard", label: "Dashboard", icon: LayoutDashboard },
  { href: "/dashboard/courses", label: "My Courses", icon: BookOpen },
  { href: "/dashboard/earnings", label: "Earnings", icon: Wallet },
  { href: "/dashboard/payouts", label: "Payouts", icon: CreditCard },
  { href: "/dashboard/affiliates", label: "Affiliates", icon: Users },
  { href: "/dashboard/leaderboard", label: "Leaderboard", icon: Trophy },
  { href: "/dashboard/certificates", label: "Certificates", icon: Award },
  { href: "/dashboard/quiz", label: "Quiz History", icon: HelpCircle },
  { href: "/dashboard/tools", label: "Tools", icon: BarChart3 },
  { href: "/dashboard/social", label: "Social Media", icon: Share2 },
  { href: "/dashboard/training", label: "Training", icon: FileText },
  { href: "/profile", label: "Profile Settings", icon: Settings },
];

export function DashboardSidebar() {
  const pathname = usePathname();

  return (
    <aside className="hidden lg:flex fixed left-0 top-0 h-screen w-64 flex-col border-r bg-background z-40">
      <div className="p-4 border-b">
        <Link href="/" className="flex items-center gap-2">
          <GraduationCap className="h-6 w-6 text-homepage-primary" />
          <span className="text-xl font-bold bg-gradient-to-r from-homepage-primary to-homepage-secondary bg-clip-text text-transparent">
            Odlix
          </span>
        </Link>
      </div>
      <nav className="flex-1 p-3 space-y-1 overflow-y-auto">
        {links.map((link) => {
          const Icon = link.icon;
          const active = pathname === link.href || pathname.startsWith(link.href + "/");
          return (
            <Link
              key={link.href}
              href={link.href}
              className={cn(
                "flex items-center gap-3 rounded-lg px-3 py-2.5 text-sm font-medium transition-colors",
                active
                  ? "bg-gradient-to-r from-homepage-primary/10 to-homepage-secondary/10 text-homepage-primary"
                  : "text-muted-foreground hover:bg-accent hover:text-foreground"
              )}
            >
              <Icon className="h-4 w-4" />
              {link.label}
            </Link>
          );
        })}
      </nav>
      <div className="p-3 border-t">
        <Link
          href="/api/auth/logout"
          className="flex items-center gap-3 rounded-lg px-3 py-2.5 text-sm font-medium text-red-500 hover:bg-red-50 transition-colors"
        >
          <LogOut className="h-4 w-4" />
          Logout
        </Link>
      </div>
    </aside>
  );
}

