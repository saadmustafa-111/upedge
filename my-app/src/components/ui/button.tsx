import * as React from "react"
import { Slot } from "@radix-ui/react-slot"
import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "@/lib/utils"

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-xl text-sm font-medium transition-all disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg:not([class*='size-'])]:size-4 shrink-0 [&_svg]:shrink-0 outline-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive",
  {
    variants: {
      variant: {
        default:
          "border border-black bg-black text-white hover:bg-zinc-800 hover:text-white active:bg-zinc-900 active:text-white focus-visible:ring-zinc-400 disabled:border-zinc-300 disabled:bg-zinc-300 disabled:text-zinc-600 dark:border-white dark:bg-white dark:text-black dark:hover:bg-zinc-200 dark:hover:text-black dark:active:bg-zinc-300 dark:active:text-black dark:focus-visible:ring-zinc-500 dark:disabled:border-zinc-800 dark:disabled:bg-zinc-800 dark:disabled:text-zinc-500",
        destructive:
          "bg-destructive text-white hover:bg-destructive/90 focus-visible:ring-destructive/20 dark:focus-visible:ring-destructive/40 dark:bg-destructive/60",
        outline:
          "border border-zinc-300 bg-white text-black hover:bg-zinc-100 hover:text-black active:bg-zinc-200 active:text-black focus-visible:ring-zinc-400 disabled:border-zinc-200 disabled:bg-zinc-100 disabled:text-zinc-400 dark:border-zinc-700 dark:bg-black dark:text-white dark:hover:bg-zinc-900 dark:hover:text-white dark:active:bg-zinc-800 dark:active:text-white dark:focus-visible:ring-zinc-500 dark:disabled:border-zinc-800 dark:disabled:bg-zinc-950 dark:disabled:text-zinc-600",
        secondary:
          "border border-zinc-300 bg-white text-black hover:bg-zinc-100 hover:text-black active:bg-zinc-200 active:text-black focus-visible:ring-zinc-400 disabled:border-zinc-200 disabled:bg-zinc-100 disabled:text-zinc-400 dark:border-zinc-700 dark:bg-black dark:text-white dark:hover:bg-zinc-900 dark:hover:text-white dark:active:bg-zinc-800 dark:active:text-white dark:focus-visible:ring-zinc-500 dark:disabled:border-zinc-800 dark:disabled:bg-zinc-950 dark:disabled:text-zinc-600",
        ghost:
          "border border-transparent bg-transparent text-black hover:bg-zinc-100 hover:text-black active:bg-zinc-200 active:text-black focus-visible:ring-zinc-400 disabled:text-zinc-400 dark:text-white dark:hover:bg-zinc-900 dark:hover:text-white dark:active:bg-zinc-800 dark:active:text-white dark:focus-visible:ring-zinc-500 dark:disabled:text-zinc-600",
        link: "text-primary underline-offset-4 hover:underline",
      },
      size: {
        default: "h-10 px-4 py-2 has-[>svg]:px-3",
        sm: "h-9 rounded-lg gap-1.5 px-3 has-[>svg]:px-2.5",
        lg: "h-11 rounded-xl px-6 has-[>svg]:px-4",
        icon: "size-9",
        "icon-sm": "size-8",
        "icon-lg": "size-10",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
)

function Button({
  className,
  variant = "default",
  size = "default",
  asChild = false,
  ...props
}: React.ComponentProps<"button"> &
  VariantProps<typeof buttonVariants> & {
    asChild?: boolean
  }) {
  const Comp = asChild ? Slot : "button"

  return (
    <Comp
      data-slot="button"
      data-variant={variant}
      data-size={size}
      className={cn(buttonVariants({ variant, size, className }))}
      {...props}
    />
  )
}

export { Button, buttonVariants }
