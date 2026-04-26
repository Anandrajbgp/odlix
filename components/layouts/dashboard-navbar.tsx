"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { ThemeToggle } from "@/components/shared/theme-toggle";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Bell, User, Menu, X } from "lucide-react";

interface UserData {
  name: string;
  email: string;
  avatar?: string;
  role: string;
}

export function DashboardNavbar() {
  const [user, setUser] = useState<UserData | null>(null);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    fetch("/api/auth/me")
      .then((res) => res.json())
      .then((data) => setUser(data.user))
      .catch(() => setUser(null));
  }, []);

  return (
    <header className="h-16 border-b bg-background flex items-center justify-between px-4 lg:px-6 sticky top-0 z-30">
      <div className="flex items-center gap-4">
        <button
          className="lg:hidden p-2 -ml-2"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
        <h2 className="text-lg font-semibold hidden sm:block">Student Dashboard</h2>
      </div>

      <div className="flex items-center gap-3">
        <Button variant="ghost" size="icon" className="relative">
          <Bell className="h-5 w-5" />
          <span className="absolute top-1 right-1 h-2 w-2 rounded-full bg-red-500" />
        </Button>
        <ThemeToggle />
        <Link href="/profile">
          <Avatar className="h-8 w-8 cursor-pointer">
            <AvatarImage src={user?.avatar} />
            <AvatarFallback className="bg-gradient-to-br from-homepage-primary to-homepage-secondary text-white text-xs">
              {user?.name?.charAt(0) || <User className="h-4 w-4" />}
            </AvatarFallback>
          </Avatar>
        </Link>
      </div>

      {/* Mobile menu overlay */}
      {mobileMenuOpen && (
        <div className="lg:hidden fixed inset-0 top-16 bg-background z-50 p-4">
          <nav className="space-y-2">
            {[
              { href: "/dashboard", label: "Dashboard" },
              { href: "/dashboard/courses", label: "My Courses" },
              { href: "/dashboard/earnings", label: "Earnings" },
              { href: "/dashboard/affiliates", label: "Affiliates" },
              { href: "/dashboard/leaderboard", label: "Leaderboard" },
              { href: "/profile", label: "Profile" },
            ].map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="block rounded-lg px-3 py-2.5 text-sm font-medium hover:bg-accent"
                onClick={() => setMobileMenuOpen(false)}
              >
                {link.label}
              </Link>
            ))}
          </nav>
        </div>
      )}
    </header>
  );
}

