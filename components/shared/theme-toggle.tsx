"use client";

import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { Sun, Moon, Monitor, Check } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export function ThemeToggle() {
  const { theme, setTheme, resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setMounted(true), 10);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    function handleClickOutside(e: MouseEvent) {
      const target = e.target as HTMLElement;
      if (!target.closest("[data-theme-dropdown]")) {
        setOpen(false);
      }
    }
    if (open) document.addEventListener("click", handleClickOutside);
    return () => document.removeEventListener("click", handleClickOutside);
  }, [open]);

  if (!mounted) return <div className="h-9 w-9" />;

  const currentTheme = theme === "system" ? resolvedTheme : theme;

  const options = [
    { value: "light", label: "Light", icon: Sun },
    { value: "dark", label: "Dark", icon: Moon },
    { value: "system", label: "System", icon: Monitor },
  ] as const;

  return (
    <div className="relative" data-theme-dropdown>
      <Button
        variant="ghost"
        size="icon"
        onClick={() => setOpen(!open)}
        className="rounded-full"
        aria-label="Toggle theme"
      >
        {currentTheme === "dark" ? (
          <Sun className="h-5 w-5 text-yellow-400" />
        ) : (
          <Moon className="h-5 w-5 text-slate-600" />
        )}
      </Button>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -8, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -8, scale: 0.95 }}
            transition={{ duration: 0.15 }}
            className="absolute right-0 top-full mt-2 w-40 rounded-xl border border-border bg-popover shadow-lg p-1 z-50"
          >
            {options.map((opt) => {
              const Icon = opt.icon;
              const active = theme === opt.value;
              return (
                <button
                  key={opt.value}
                  onClick={() => {
                    setTheme(opt.value);
                    setOpen(false);
                  }}
                  className={`flex items-center gap-2 w-full rounded-lg px-3 py-2 text-sm transition-colors ${
                    active
                      ? "bg-accent text-accent-foreground font-medium"
                      : "text-muted-foreground hover:bg-accent/50 hover:text-foreground"
                  }`}
                >
                  <Icon className="h-4 w-4" />
                  <span className="flex-1 text-left">{opt.label}</span>
                  {active && <Check className="h-3.5 w-3.5" />}
                </button>
              );
            })}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

