import Link from "next/link";
import { ClipboardCheck } from "lucide-react";

const footerLinks = {
  Exams: [
    { label: "Banking", href: "/tests/banking" },
    { label: "SSC", href: "/tests/ssc" },
    { label: "UPSC", href: "/tests/upsc" },
    { label: "Railway", href: "/tests/railway" },
  ],
  Support: [
    { label: "Help Center", href: "#" },
    { label: "Privacy", href: "/privacy" },
    { label: "Terms", href: "/terms" },
  ],
};

export function TestsFooter() {
  return (
    <footer className="border-t border-tests-primary/20 bg-background">
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 gap-8 md:grid-cols-4">
          <div className="col-span-2 md:col-span-1">
            <Link href="/tests" className="flex items-center gap-2">
              <div className="h-8 w-8 rounded-lg bg-tests-primary flex items-center justify-center">
                <ClipboardCheck className="h-5 w-5 text-white" />
              </div>
              <span className="text-lg font-bold text-tests-primary">Odlix Tests</span>
            </Link>
            <p className="mt-4 text-sm text-muted-foreground max-w-xs">Crack every exam with adaptive tests and AI guidance.</p>
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
          <p className="text-sm text-muted-foreground">&copy; {new Date().getFullYear()} Odlix Tests. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}

