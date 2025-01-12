'use client'

import * as React from 'react'
import { cn } from '@/utils/cn'
import * as TooltipPrimitive from '@radix-ui/react-tooltip'

export const TooltipProvider = TooltipPrimitive.Provider

export const Tooltip = ({ ...props }) => <TooltipPrimitive.Root {...props} />
Tooltip.displayName = TooltipPrimitive.Tooltip.displayName

export const TooltipTrigger = TooltipPrimitive.Trigger

export const TooltipContent = React.forwardRef<
  React.ElementRef<typeof TooltipPrimitive.Content>,
  React.ComponentPropsWithoutRef<typeof TooltipPrimitive.Content>
>(({ className, sideOffset = 4, ...props }, ref) => (
  <TooltipPrimitive.Content
    ref={ref}
    sideOffset={sideOffset}
    className={cn(
      'z-50 overflow-hidden rounded-md border border-neutral-100 bg-white px-3 py-1.5 text-sm text-neutral-700 shadow-md animate-in fade-in-50 data-[side=bottom]:slide-in-from-top-1 data-[side=top]:slide-in-from-bottom-1 data-[side=left]:slide-in-from-right-1 data-[side=right]:slide-in-from-left-1 dark:border-neutral-800 dark:bg-neutral-800 dark:text-neutral-400',
      className,
    )}
    {...props}
  />
))

TooltipContent.displayName = TooltipPrimitive.Content.displayName
