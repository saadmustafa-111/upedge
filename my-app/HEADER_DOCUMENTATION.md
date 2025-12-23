# Header Component Documentation

## Overview
Production-ready Header component for Upedge Technologies - a one-page Next.js App Router site with smooth scrolling navigation, active section highlighting, and responsive design.

## Features

### ✨ Core Features
- **Sticky Header**: Remains fixed at the top with blur background and subtle border
- **Professional Design**: Clean, modern UI using Tailwind CSS and shadcn/ui components
- **Smooth Scrolling**: Custom ScrollLink component for smooth section navigation
- **Active Section Highlighting**: IntersectionObserver-based active link detection
- **Responsive Design**: 
  - Desktop: Full navigation menu visible
  - Mobile: Hamburger menu with Sheet component
- **Theme Toggle**: Light/dark mode support using next-themes
- **CTA Buttons**: 
  - Primary: "Get Free Site Survey" (scrolls to contact section)
  - Secondary: WhatsApp button with configurable link

## Files Created

### 1. `src/components/layout/Header.tsx`
Main header component with all navigation logic.

**Key Features:**
- Sticky positioning with backdrop blur
- Desktop horizontal navigation
- Mobile hamburger menu with Sheet
- Active section highlighting
- CTA buttons (Survey + WhatsApp)
- Theme toggle integration

### 2. `src/components/layout/ThemeToggle.tsx`
Theme switcher component with sun/moon icons.

**Features:**
- Uses next-themes for theme management
- Animated icon transitions
- Prevents hydration mismatch
- Accessible with screen reader support

### 3. `src/components/layout/ScrollLink.tsx`
Reusable component for smooth scroll navigation.

**Props:**
- `to`: Section ID to scroll to
- `children`: Link content
- `className`: Optional CSS classes
- `onClick`: Optional click handler (e.g., close mobile menu)

**Features:**
- Prevents default anchor behavior
- Smooth scroll with header offset compensation
- Uses header height constant for accurate positioning

### 4. `src/hooks/useActiveSection.ts`
Custom hook for tracking the currently visible section.

**How it works:**
- Uses IntersectionObserver API
- Monitors when sections enter the viewport
- Accounts for header height offset
- Returns the active section ID

**Parameters:**
- `sectionIds`: Array of section IDs to observe

### 5. `src/constants/site.ts`
Site-wide configuration constants.

**Constants:**
- `SITE_CONFIG`: Site name, WhatsApp link, header height
- `NAV_SECTIONS`: Array of navigation sections with IDs and labels

### 6. `src/components/theme-provider.tsx`
Wrapper component for next-themes provider.

## Usage

### Basic Setup
The Header is already integrated in `src/app/layout.tsx`:

```tsx
import { Header } from "@/components/layout/Header";
import { ThemeProvider } from "@/components/theme-provider";

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <Header />
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
```

### Creating Sections
Each section needs:
1. An `id` matching the navigation config
2. The `scroll-mt-20` class for proper header offset

Example:
```tsx
<section
  id="services"
  className="min-h-screen scroll-mt-20"
>
  {/* Section content */}
</section>
```

### Configuration

#### Updating WhatsApp Number
Edit `src/constants/site.ts`:
```tsx
export const SITE_CONFIG = {
  whatsappNumber: "1234567890", // Your number
  whatsappLink: "https://wa.me/1234567890", // Same number
  // ...
};
```

#### Adding/Removing Sections
Edit the `NAV_SECTIONS` array in `src/constants/site.ts`:
```tsx
export const NAV_SECTIONS = [
  { id: "home", label: "Home" },
  { id: "services", label: "Services" },
  // Add more sections...
] as const;
```

#### Adjusting Header Height
If you change the header height, update in `src/constants/site.ts`:
```tsx
export const SITE_CONFIG = {
  headerHeight: 80, // Change this value (in pixels)
  // ...
};
```

Also update the Tailwind classes:
- Header: `h-20` (20 * 4 = 80px)
- Sections: `scroll-mt-20` (same value)

## Styling Customization

### Header Background
Modify the header element in `Header.tsx`:
```tsx
<header className="sticky top-0 z-50 w-full border-b bg-background/80 backdrop-blur-lg">
```

### Active Link Style
In `Header.tsx`, adjust the active section styling:
```tsx
className={cn(
  "px-3 py-2 text-sm font-medium transition-colors rounded-md",
  activeSection === section.id
    ? "text-primary bg-accent" // Active state
    : "text-muted-foreground"  // Inactive state
)}
```

### CTA Button
Customize the primary CTA in `Header.tsx`:
```tsx
<Button
  onClick={handleScrollToContact}
  className="hidden md:inline-flex"
  size="sm"
  variant="default" // Try: "outline", "secondary", etc.
>
  Get Free Site Survey
</Button>
```

## Mobile Behavior

### Breakpoints
- **Mobile**: < 1024px - Shows hamburger menu
- **Desktop**: ≥ 1024px - Shows full navigation

### Mobile Menu
- Opens from right side
- Width: 300px (sm: 400px)
- Includes all nav links
- Both CTA buttons at bottom
- Auto-closes when link is clicked

## Accessibility

- ✅ Semantic HTML (`<header>`, `<nav>`)
- ✅ ARIA labels for icon buttons
- ✅ Screen reader text for toggle buttons
- ✅ Keyboard navigation support
- ✅ Focus states on interactive elements

## Performance Optimizations

1. **Client-Side Only**: Components marked with `"use client"` only where needed
2. **Hydration Handling**: Theme toggle prevents mismatch
3. **Efficient Observer**: IntersectionObserver cleans up on unmount
4. **Minimal Re-renders**: Active section state localized to Header

## Browser Support

- ✅ Modern browsers (Chrome, Firefox, Safari, Edge)
- ✅ IntersectionObserver API (95%+ browser support)
- ✅ Backdrop-filter (with fallback)

## Dependencies

Required packages (already installed):
- `next-themes`: Theme management
- `lucide-react`: Icons
- `@radix-ui/react-dialog`: Sheet component (via shadcn)
- `class-variance-authority`: Utility for component variants
- `tailwind-merge`: Tailwind class merging

## Troubleshooting

### Active section not highlighting
- Ensure sections have the correct `id` attribute
- Check that sections have `scroll-mt-20` class
- Verify section IDs match `NAV_SECTIONS` in constants

### Smooth scroll not working
- Ensure sections exist in the DOM
- Check that `SITE_CONFIG.headerHeight` matches actual header height
- Verify no CSS conflicts with `scroll-behavior`

### Theme toggle not working
- Ensure `suppressHydrationWarning` is on `<html>` tag
- Check ThemeProvider is wrapping the app
- Verify next-themes is installed

### Mobile menu not closing
- Check Sheet's `open` and `onOpenChange` props
- Ensure `setMobileMenuOpen(false)` is called in ScrollLink's `onClick`

## Future Enhancements

Potential improvements:
- [ ] Add scroll progress indicator
- [ ] Implement mega menu for services
- [ ] Add notification badge
- [ ] Include search functionality
- [ ] Add language switcher
- [ ] Implement sticky secondary navigation
- [ ] Add scroll-to-top button when scrolling down

## License

Part of Upedge Technologies project.
