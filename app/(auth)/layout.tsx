import Link from "next/link";
import { GraduationCap, ArrowLeft } from "lucide-react";
import { ThemeToggle } from "@/components/shared/theme-toggle";

export default function AuthLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-br from-homepage-primary/5 via-background to-homepage-secondary/5">
      {/* Top bar */}
      <div className="w-full px-4 sm:px-6 py-4 flex items-center justify-between">
        <Link
          href="/"
          className="flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors"
        >
          <ArrowLeft className="h-4 w-4" />
          Back to Home
        </Link>
        <ThemeToggle />
      </div>

      {/* Main content */}
      <div className="flex-1 flex flex-col items-center justify-center px-4 pb-12">
        <Link href="/" className="flex items-center gap-2 mb-8">
          <div className="h-10 w-10 rounded-xl bg-gradient-to-br from-homepage-primary to-homepage-secondary flex items-center justify-center">
            <GraduationCap className="h-6 w-6 text-white" />
          </div>
          <span className="text-2xl font-bold bg-gradient-to-r from-homepage-primary to-homepage-secondary bg-clip-text text-transparent">
            Odlix
          </span>
        </Link>
        {children}
      </div>

      {/* Footer */}
      <footer className="py-6 text-center text-sm text-muted-foreground">
        <p>
          &copy; {new Date().getFullYear()} Odlix. One account. Six platforms.
        </p>
        <div className="mt-2 flex items-center justify-center gap-4">
          <Link href="/privacy" className="hover:text-foreground transition-colors">
            Privacy
          </Link>
          <Link href="/terms" className="hover:text-foreground transition-colors">
            Terms
          </Link>
          <Link href="/about" className="hover:text-foreground transition-colors">
            About
          </Link>
        </div>
      </footer>
    </div>
  );
}
