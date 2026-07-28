"use client";

import { Laptop, Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";

export function ThemeToggle() {
  const { setTheme, theme, resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return (
      <Button
        variant="ghost"
        size="icon"
        className="h-11 w-11 rounded-full border border-zinc-200 bg-white/95 text-zinc-900 shadow-[0_8px_20px_rgba(18,18,18,0.06)] hover:bg-zinc-100 dark:border-zinc-800 dark:bg-black/95 dark:text-zinc-100 dark:hover:bg-zinc-900"
        disabled
      >
        <Laptop className="h-[1.05rem] w-[1.05rem]" />
      </Button>
    );
  }

  const selectedTheme = (theme as "system" | "light" | "dark" | undefined) ?? "system";
  const currentTheme = selectedTheme === "system" ? resolvedTheme ?? "light" : selectedTheme;
  const isDark = currentTheme === "dark";
  const label =
    selectedTheme === "system"
      ? `Theme: System (${currentTheme})`
      : `Theme: ${currentTheme}`;

  const handleToggle = () => {
    setTheme(isDark ? "light" : "dark");
  };

  return (
    <Button
      variant="ghost"
      size="icon"
      onClick={handleToggle}
      className="h-11 w-11 rounded-full border border-zinc-200 bg-white/95 text-zinc-900 shadow-[0_8px_20px_rgba(18,18,18,0.06)] transition-all hover:bg-zinc-100 dark:border-zinc-800 dark:bg-black/95 dark:text-zinc-100 dark:hover:bg-zinc-900 cursor-pointer"
      aria-label={`${label}. Activate to switch theme mode.`}
      title={label}
    >
      {selectedTheme === "system" && <Laptop className="h-[1.05rem] w-[1.05rem]" />}
      {selectedTheme !== "system" && !isDark && <Sun className="h-[1.05rem] w-[1.05rem]" />}
      {selectedTheme !== "system" && isDark && <Moon className="h-[1.05rem] w-[1.05rem]" />}
      <span className="sr-only">Toggle theme</span>
    </Button>
  );
}
