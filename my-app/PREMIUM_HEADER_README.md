# Premium Floating Glass Pill Header - Upedge Technologies

## 🎨 Design Overview

This is a **non-typical, premium header** featuring a floating glass pill design with a status strip, segmented control navigation, and advanced scroll interactions.

### Key Visual Features

- **Top Status Strip**: Thin bar showing service areas and support message
- **Floating Glass Pill**: Centered header with rounded-2xl corners, glassmorphism effect
- **Segmented Control Nav**: iOS-style pill navigation with active state highlighting
- **Scroll-Reactive**: Header shrinks and increases blur after 40px scroll
- **Premium Theme**: Custom cyan/amber accent colors on navy/blue base

## 🎯 Features Implemented

### Visual Design
✅ Floating centered header (not full-width)  
✅ Glass morphism with blur backdrop  
✅ Subtle border and soft shadow  
✅ Top status strip with service info  
✅ Logo with gradient badge  
✅ Segmented control navigation style  
✅ Smooth scroll animations  
✅ Dynamic size change on scroll  

### Functionality
✅ One-page smooth scroll navigation  
✅ Active section highlighting via IntersectionObserver  
✅ Scroll position tracking  
✅ Desktop inline navigation  
✅ Mobile Sheet menu  
✅ Theme toggle (light/dark)  
✅ WhatsApp integration  
✅ Primary CTA button  

### Theme System
✅ Custom color palette (not plain black/white)  
✅ Light mode: #F4F7FF background, #0A1B3D primary  
✅ Dark mode: #0B1220 background (deep navy)  
✅ Accent colors: #00C2FF (cyan), #FFB020 (amber)  
✅ Glass effects with proper opacity  
✅ Manrope font family  

## 📁 Files Created/Modified

### Core Components
```
src/components/layout/
├── Header.tsx              # Main floating glass pill header
├── ThemeToggle.tsx        # Sun/moon theme switcher
└── ScrollLink.tsx         # Smooth scroll navigation component
```

### Hooks
```
src/hooks/
├── useActiveSection.ts    # IntersectionObserver for active nav
└── useScrollPosition.ts   # Scroll threshold detection
```

### Configuration
```
src/lib/
├── constants.ts           # Site config, WhatsApp, service areas
└── nav.ts                 # Navigation items configuration
```

### Styling
```
src/app/
├── globals.css            # Custom theme variables & typography
└── layout.tsx             # Manrope font integration
```

### Demo Page
```
src/app/
└── page.tsx              # Demo sections with proper scroll-mt
```

## 🎨 Theme Colors

### Light Mode
```css
Background: #F4F7FF (soft blue-gray)
Surface:    #FFFFFF (white cards)
Text:       #0B1220 (deep navy)
Primary:    #0A1B3D (navy)
Accent:     #00C2FF (cyan)
Accent 2:   #FFB020 (amber)
Glass:      rgba(255, 255, 255, 0.65)
```

### Dark Mode
```css
Background: #0B1220 (deep navy, NOT black)
Surface:    #111B2E (darker navy)
Text:       #EAF0FF (light blue-white)
Primary:    #EAF0FF (inverted)
Accent:     #00C2FF (cyan - same)
Accent 2:   #FFB020 (amber - same)
Glass:      rgba(17, 27, 46, 0.6)
```

## 🔧 Configuration

### 1. Update Contact Information

Edit `src/lib/constants.ts`:

```typescript
export const WHATSAPP_NUMBER = "+1234567890"; // Your number
export const PHONE = "+1 (234) 567-8900";
export const SERVICE_AREAS = [
  "Your City",
  "Your State",
  // ...
];
```

### 2. Customize Navigation

Edit `src/lib/nav.ts`:

```typescript
export const NAV_ITEMS = [
  { id: "home", label: "Home" },
  { id: "about", label: "About" }, // Add/remove sections
  // ...
];
```

### 3. Adjust Scroll Behavior

Edit `src/lib/constants.ts`:

```typescript
export const HEADER_HEIGHT = 72; // Desktop height
export const HEADER_HEIGHT_SCROLLED = 64; // Scrolled state
export const SCROLL_THRESHOLD = 40; // Scroll trigger (px)
```

### 4. Logo Customization

In `Header.tsx`, replace the text logo with an image:

```tsx
<ScrollLink to="home" className="flex items-center gap-2 group">
  <Image 
    src="/logo.png" 
    alt="Upedge Technologies"
    width={36}
    height={36}
  />
  <div className="flex flex-col">
    <span className="text-sm md:text-base font-bold">
      {SITE_NAME}
    </span>
  </div>
</ScrollLink>
```

## 🎭 Typography

Using **Manrope** font (Google Fonts) with weights:
- 400 (Regular)
- 500 (Medium)
- 600 (Semibold)
- 700 (Bold)
- 800 (Extrabold)

### Type Scale (defined in globals.css)
```
h1: 4xl → 5xl → 6xl (responsive)
h2: 3xl → 4xl → 5xl
h3: 2xl → 3xl
h4: xl → 2xl
h5: lg → xl
h6: base → lg
```

## 🔄 Scroll Behavior

### Header States

**Initial State (top of page):**
- Position: `top-10` (40px from top)
- Padding: `py-3.5`
- Blur: `backdrop-blur-xl`
- Shadow: `shadow-xl`

**Scrolled State (after 40px):**
- Position: `top-2` (8px from top)
- Padding: `py-2.5`
- Blur: `backdrop-blur-2xl`
- Shadow: `shadow-2xl`
- CTA button text: Smaller (`text-xs`)

### Section Scroll Offset

All sections use `scroll-mt-32` (128px) to account for:
- Top status strip (32px)
- Floating header (72px + margin)
- Extra spacing (24px)

## 📱 Responsive Design

### Breakpoints

- **Mobile** (< 640px): Status strip center-aligned, compact logo
- **Tablet** (640px - 1024px): Partial status strip, hamburger menu
- **Desktop** (≥ 1024px): Full header, inline navigation

### Mobile Menu Features

- Slides from right
- Full-screen overlay
- Service areas info card
- Two CTA buttons (stacked)
- Active section highlighting
- Auto-closes on navigation

## 🎯 Navigation Behavior

### Active Section Detection

Uses `IntersectionObserver` with:
- `rootMargin`: `-92px 0px -60% 0px` (accounts for header)
- `threshold`: `0.1` (10% visibility)
- Prioritizes topmost visible section

### Smooth Scrolling

- Native `scroll-behavior: smooth` in CSS
- JavaScript fallback with header offset
- Accounts for floating header position

## 🌙 Theme Toggle

- Positioned in CTA dock (right side)
- Animated icon transition
- Persists preference in localStorage
- Respects system preference
- No hydration mismatch

## 💡 Usage Examples

### Add a New Section

1. **Add to navigation:**
```typescript
// src/lib/nav.ts
export const NAV_ITEMS = [
  // ...
  { id: "team", label: "Our Team" },
];
```

2. **Create section:**
```tsx
// src/app/page.tsx
<section
  id="team"
  className="min-h-screen flex items-center justify-center bg-background scroll-mt-32"
>
  <div className="container mx-auto px-4">
    <h2>Our Team</h2>
    {/* Content */}
  </div>
</section>
```

### Customize Glass Effect

```tsx
// In Header.tsx, modify the glass container:
<div
  className={cn(
    "backdrop-blur-xl", // Change blur intensity
    "dark:bg-[rgba(17,27,46,0.7)]", // Adjust opacity
    "bg-[rgba(255,255,255,0.75)]",
    "border-white/90", // Border opacity
  )}
>
```

### Change Accent Colors

Edit `src/app/globals.css`:

```css
:root {
  --accent: 34 197 94; /* Green instead of cyan */
  --accent-2: 249 115 22; /* Orange instead of amber */
}
```

## 🚀 Performance Optimizations

- ✅ Components use `"use client"` only where needed
- ✅ Passive scroll listeners
- ✅ IntersectionObserver cleanup on unmount
- ✅ CSS transitions (GPU-accelerated)
- ✅ Font display swap
- ✅ Minimal re-renders

## ♿ Accessibility

- ✅ Semantic HTML (`<header>`, `<nav>`)
- ✅ ARIA labels on icon buttons
- ✅ Screen reader text for toggles
- ✅ Keyboard navigation support
- ✅ Focus visible states
- ✅ Color contrast compliant

## 🐛 Troubleshooting

### Header not floating correctly
- Check that sections have proper `scroll-mt-32`
- Verify `HEADER_HEIGHT` constant matches actual height

### Active section not highlighting
- Ensure section IDs match `NAV_ITEMS`
- Check IntersectionObserver thresholds
- Verify sections have minimum height

### Theme not persisting
- Ensure `suppressHydrationWarning` on `<html>`
- Check localStorage permissions
- Verify ThemeProvider wraps entire app

### Glass effect not visible
- Check browser support for `backdrop-filter`
- Verify background opacity values
- Ensure parent containers don't block blur

## 📦 Dependencies

Required packages (all installed):
```json
{
  "next": "16.1.1",
  "next-themes": "^0.x.x",
  "lucide-react": "^0.562.0",
  "tailwindcss": "^4",
  "@radix-ui/react-dialog": "via shadcn",
  "class-variance-authority": "^0.7.1",
  "tailwind-merge": "^3.4.0"
}
```

## 🎬 Getting Started

1. **Review configuration:**
   ```bash
   # Update your contact info
   vim src/lib/constants.ts
   ```

2. **Customize colors (optional):**
   ```bash
   vim src/app/globals.css
   ```

3. **Add your content:**
   ```bash
   vim src/app/page.tsx
   ```

4. **Run development server:**
   ```bash
   npm run dev
   ```

5. **View at:** http://localhost:3000

## 🎨 Design Credits

- **Style**: Premium floating glass pill (iOS-inspired)
- **Colors**: Custom cyan/amber on navy theme
- **Typography**: Manrope (Google Fonts)
- **Icons**: Lucide React
- **Components**: shadcn/ui
- **Framework**: Next.js 14 App Router

## 📝 Notes

- This is a **one-page** site design (scroll navigation, not routing)
- Glass effect requires modern browsers (95%+ support)
- Theme persistence uses localStorage
- Mobile menu auto-closes on navigation
- All animations are GPU-accelerated for performance

---

**Built for Upedge Technologies** 🚀
Premium, non-typical design that stands out.
