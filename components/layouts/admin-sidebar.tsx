"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import {
  LayoutDashboard,
  Users,
  BookOpen,
  CreditCard,
  Award,
  Settings,
  LogOut,
  GraduationCap,
  BarChart3,
  Mail,
} from "lucide-react";

const links = [
  { href: "/admin", label: "Dashboard", icon: LayoutDashboard },
  { href: "/admin/students", label: "Students", icon: Users },
  { href: "/admin/courses", label: "Courses", icon: BookOpen },
  { href: "/admin/payments", label: "Payments", icon: CreditCard },
  { href: "/admin/affiliates", label: "Affiliates", icon: Award },
  { href: "/admin/reports", label: "Reports", icon: BarChart3 },
  { href: "/admin/notifications", label: "Notifications", icon: Mail },
  { href: "/admin/settings", label: "Settings", icon: Settings },
];

export function AdminSidebar() {
  const pathname = usePathname();

  return (
    <aside className="hidden lg:flex fixed left-0 top-0 h-screen w-64 flex-col border-r bg-background z-40">
      <div className="p-4 border-b">
        <Link href="/" className="flex items-center gap-2">
          <GraduationCap className="h-6 w-6 text-homepage-primary" />
          <span className="text-xl font-bold bg-gradient-to-r from-homepage-primary to-homepage-secondary bg-clip-text text-transparent">
            Odlix Admin
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

