"use client"

import * as React from "react"
import { cn } from "@/lib/utils"

export interface CheckboxProps
  extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string
}

const Checkbox = React.forwardRef<HTMLInputElement, CheckboxProps>(
  ({ className, label, ...props }, ref) => {
    return (
      <label className="flex items-center gap-2 cursor-pointer">
        <input
          type="checkbox"
          className={cn(
            "peer h-4 w-4 shrink-0 rounded-sm border border-primary ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 data-[state=checked]:bg-primary data-[state=checked]:text-primary-foreground",
            className
          )}
          ref={ref}
          {...props}
        />
        {label && (
          <span className="text-sm text-muted-foreground peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
            {label}
          </span>
        )}
      </label>
    )
  }
)
Checkbox.displayName = "Checkbox"

export { Checkbox }

