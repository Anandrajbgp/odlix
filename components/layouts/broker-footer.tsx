import Link from "next/link";
import { TrendingUp } from "lucide-react";

const footerLinks = {
  Trading: [
    { label: "Stocks", href: "#" },
    { label: "Options", href: "#" },
    { label: "Mutual Funds", href: "#" },
    { label: "ETFs", href: "#" },
  ],
  Support: [
    { label: "Help Center", href: "#" },
    { label: "Privacy", href: "/privacy" },
    { label: "Terms", href: "/terms" },
  ],
};

export function BrokerFooter() {
  return (
    <footer className="border-t border-broker-primary/20 bg-background">
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 gap-8 md:grid-cols-4">
          <div className="col-span-2 md:col-span-1">
            <Link href="/broker" className="flex items-center gap-2">
              <div className="h-8 w-8 rounded-lg bg-gradient-to-br from-broker-primary to-broker-secondary flex items-center justify-center">
                <TrendingUp className="h-5 w-5 text-white" />
              </div>
              <span className="text-lg font-bold text-broker-primary">Odlix Broker</span>
            </Link>
            <p className="mt-4 text-sm text-muted-foreground max-w-xs">Smart trading tools for modern investors.</p>
          </div>
          {Object.entries(footerLinks).map(([category, links]) => (
            <div key={category}>
              <h3 className="text-sm font-semibold text-foreground">{category}</h3>
              <ul className="mt-4 space-y-3">
                {links.map((link) => (
                  <li key={link.label}>
                    <Link href={link.href} className="text-sm text-muted-foreground hover:text-foreground transition-colors">{link.label}</Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <div className="mt-12 border-t border-border/40 pt-8 text-center">
          <p className="text-sm text-muted-foreground">&copy; {new Date().getFullYear()} Odlix Broker. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}

