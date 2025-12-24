export const NAV_ITEMS = [
  { id: "home", label: "Home" },
  { id: "solutions", label: "Solutions" },
  { id: "blueprint", label: "Blueprint" },
  { id: "services", label: "Services" },
  { id: "packages", label: "Packages" },
  { id: "testimonials", label: "Testimonials" },
  { id: "why", label: "Why Upedge" },
  { id: "faq", label: "FAQ" },
  { id: "contact", label: "Contact" },
] as const;

export type NavItemId = (typeof NAV_ITEMS)[number]["id"];
