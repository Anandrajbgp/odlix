import Link from "next/link";
import { Briefcase } from "lucide-react";

const footerLinks = {
  Services: [
    { label: "Web Development", href: "#" },
    { label: "App Development", href: "#" },
    { label: "Video Production", href: "#" },
    { label: "Graphic Design", href: "#" },
  ],
  Company: [
    { label: "About Us", href: "/agency/about" },
    { label: "Portfolio", href: "/agency/portfolio" },
    { label: "Contact", href: "/agency/contact" },
  ],
  Legal: [
    { label: "Privacy Policy", href: "/privacy" },
    { label: "Terms", href: "/terms" },
  ],
};

export function AgencyFooter() {
  return (
    <footer className="border-t border-agency-primary/20 bg-background">
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 gap-8 md:grid-cols-4">
          <div className="col-span-2 md:col-span-1">
            <Link href="/agency" className="flex items-center gap-2">
              <div className="h-8 w-8 rounded-lg bg-gradient-to-br from-agency-primary to-agency-secondary flex items-center justify-center">
                <Briefcase className="h-5 w-5 text-white" />
              </div>
              <span className="text-lg font-bold text-agency-secondary">Oblivent</span>
            </Link>
            <p className="mt-4 text-sm text-muted-foreground max-w-xs">Your Brand. Our Innovation. Infinite Growth.</p>
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
          <p className="text-sm text-muted-foreground">&copy; {new Date().getFullYear()} Oblivent Digital Agency. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}

