export const NAV_ITEMS = [
  { id: "home", label: "Home" },
  { id: "solutions", label: "Solutions" },
  { id: "blueprint", label: "Blueprint" },
  { id: "services", label: "Services" },
  { id: "packages", label: "Packages" },
  { id: "projects", label: "Projects" },
  { id: "why", label: "Why Us" },
  { id: "faq", label: "FAQ" },
  { id: "contact", label: "Contact" },
] as const;

export type NavItemId = (typeof NAV_ITEMS)[number]["id"];
