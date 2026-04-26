import Link from "next/link";
import { ShoppingCart } from "lucide-react";

const footerLinks = {
  Categories: [
    { label: "Electronics", href: "#" },
    { label: "Stationery", href: "#" },
    { label: "Digital Tools", href: "#" },
    { label: "Lifestyle", href: "#" },
  ],
  Support: [
    { label: "Help Center", href: "#" },
    { label: "Privacy", href: "/privacy" },
    { label: "Terms", href: "/terms" },
  ],
};

export function MartFooter() {
  return (
    <footer className="border-t border-mart-primary/20 bg-background">
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 gap-8 md:grid-cols-4">
          <div className="col-span-2 md:col-span-1">
            <Link href="/mart" className="flex items-center gap-2">
              <div className="h-8 w-8 rounded-lg bg-gradient-to-br from-mart-primary to-mart-secondary flex items-center justify-center">
                <ShoppingCart className="h-5 w-5 text-white" />
              </div>
              <span className="text-lg font-bold bg-gradient-to-r from-mart-primary to-mart-secondary bg-clip-text text-transparent">Odlix Mart</span>
            </Link>
            <p className="mt-4 text-sm text-muted-foreground max-w-xs">Shop digital products, templates, and resources.</p>
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
          <p className="text-sm text-muted-foreground">&copy; {new Date().getFullYear()} Odlix Mart. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}

