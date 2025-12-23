"use client";

import React from "react";
import { HEADER_HEIGHT } from "@/lib/constants";

interface ScrollLinkProps {
  to: string;
  children: React.ReactNode;
  className?: string;
  onClick?: () => void;
}

export function ScrollLink({
  to,
  children,
  className,
  onClick,
}: ScrollLinkProps) {
  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();

    const element = document.getElementById(to);
    if (element) {
      const headerOffset = HEADER_HEIGHT + 10;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition =
        elementPosition + window.pageYOffset - headerOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
    }

    onClick?.();
  };

  return (
    <a href={`#${to}`} onClick={handleClick} className={className}>
      {children}
    </a>
  );
}
