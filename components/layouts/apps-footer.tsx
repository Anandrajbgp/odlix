import Link from "next/link";
import { Smartphone } from "lucide-react";

const footerLinks = {
  Categories: [
    { label: "Productivity", href: "#" },
    { label: "Learning", href: "#" },
    { label: "Design", href: "#" },
    { label: "Finance", href: "#" },
  ],
  Support: [
    { label: "Help Center", href: "#" },
    { label: "Privacy", href: "/privacy" },
    { label: "Terms", href: "/terms" },
  ],
};

export function AppsFooter() {
  return (
    <footer className="border-t border-apps-primary/20 bg-background">
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 gap-8 md:grid-cols-4">
          <div className="col-span-2 md:col-span-1">
            <Link href="/apps" className="flex items-center gap-2">
              <div className="h-8 w-8 rounded-lg bg-gradient-to-br from-apps-primary to-apps-secondary flex items-center justify-center">
                <Smartphone className="h-5 w-5 text-white" />
              </div>
              <span className="text-lg font-bold bg-gradient-to-r from-apps-primary to-apps-secondary bg-clip-text text-transparent">Odlix Apps</span>
            </Link>
            <p className="mt-4 text-sm text-muted-foreground max-w-xs">Discover powerful tools to boost your productivity.</p>
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
          <p className="text-sm text-muted-foreground">&copy; {new Date().getFullYear()} Odlix Apps. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}

