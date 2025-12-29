"use client";

import { SITE_NAME } from "@/lib/constants";
import { cn } from "@/lib/utils";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative py-8 sm:py-12 border-t border-border dark:border-slate-800">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="max-w-7xl mx-auto">
          {/* Main footer content */}
          <div className="text-center space-y-4">
            <div className="text-sm text-muted-foreground dark:text-slate-400">
              © {currentYear} {SITE_NAME}. All rights reserved.
            </div>
            
            {/* Developer Credit */}
            <div className={cn(
              "text-xs text-muted-foreground/70 dark:text-slate-500",
              "flex items-center justify-center gap-1"
            )}>
              <span>Site developed by:</span>
              <span className="font-semibold text-foreground/80 dark:text-slate-400">
             Upedge Technologies
              </span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
