'use client'

import * as React from 'react'
import { cn } from '@/utils/cn'
import * as MenubarPrimitive from '@radix-ui/react-menubar'
import { Check, ChevronRight, Circle } from 'lucide-react'

export const MenubarMenu = MenubarPrimitive.Menu

export const MenubarGroup = MenubarPrimitive.Group

export const MenubarPortal = MenubarPrimitive.Portal

export const MenubarSub = MenubarPrimitive.Sub

export const MenubarRadioGroup = MenubarPrimitive.RadioGroup

export const Menubar = React.forwardRef<
  React.ElementRef<typeof MenubarPrimitive.Root>,
  React.ComponentPropsWithoutRef<typeof MenubarPrimitive.Root>
>(({ className, ...props }, ref) => (
  <MenubarPrimitive.Root
    ref={ref}
    className={cn(
      'flex h-10 items-center space-x-1 rounded-md border border-neutral-300 bg-white p-1 dark:border-neutral-700 dark:bg-neutral-800',
      className,
    )}
    {...props}
  />
))

Menubar.displayName = MenubarPrimitive.Root.displayName

export const MenubarTrigger = React.forwardRef<
  React.ElementRef<typeof MenubarPrimitive.Trigger>,
  React.ComponentPropsWithoutRef<typeof MenubarPrimitive.Trigger>
>(({ className, ...props }, ref) => (
  <MenubarPrimitive.Trigger
    ref={ref}
    className={cn(
      'flex cursor-default select-none items-center rounded-[0.2rem] py-1.5 px-3 text-sm font-medium outline-none focus:bg-neutral-100 data-[state=open]:bg-neutral-100 dark:focus:bg-neutral-700 dark:data-[state=open]:bg-neutral-700',
      className,
    )}
    {...props}
  />
))

MenubarTrigger.displayName = MenubarPrimitive.Trigger.displayName

export const MenubarSubTrigger = React.forwardRef<
  React.ElementRef<typeof MenubarPrimitive.SubTrigger>,
  React.ComponentPropsWithoutRef<typeof MenubarPrimitive.SubTrigger> & {
    inset?: boolean
  }
>(({ className, inset, children, ...props }, ref) => (
  <MenubarPrimitive.SubTrigger
    ref={ref}
    className={cn(
      'flex cursor-default select-none items-center rounded-sm py-1.5 px-2 text-sm font-medium outline-none focus:bg-neutral-100 data-[state=open]:bg-neutral-100 dark:focus:bg-neutral-700 dark:data-[state=open]:bg-neutral-700',
      inset && 'pl-8',
      className,
    )}
    {...props}
  >
    {children}
    <ChevronRight className="ml-auto h-4 w-4" />
  </MenubarPrimitive.SubTrigger>
))

MenubarSubTrigger.displayName = MenubarPrimitive.SubTrigger.displayName

export const MenubarSubContent = React.forwardRef<
  React.ElementRef<typeof MenubarPrimitive.SubContent>,
  React.ComponentPropsWithoutRef<typeof MenubarPrimitive.SubContent>
>(({ className, ...props }, ref) => (
  <MenubarPrimitive.SubContent
    ref={ref}
    className={cn(
      'z-50 min-w-[8rem] overflow-hidden rounded-md border border-neutral-100 bg-white p-1 shadow-md animate-in slide-in-from-left-1 dark:border-neutral-700 dark:bg-neutral-800',
      className,
    )}
    {...props}
  />
))

MenubarSubContent.displayName = MenubarPrimitive.SubContent.displayName

export const MenubarContent = React.forwardRef<
  React.ElementRef<typeof MenubarPrimitive.Content>,
  React.ComponentPropsWithoutRef<typeof MenubarPrimitive.Content>
>(
  (
    { className, align = 'start', alignOffset = -4, sideOffset = 8, ...props },
    ref,
  ) => (
    <MenubarPrimitive.Portal>
      <MenubarPrimitive.Content
        ref={ref}
        align={align}
        alignOffset={alignOffset}
        sideOffset={sideOffset}
        className={cn(
          'z-50 min-w-[12rem] overflow-hidden rounded-md border border-neutral-100 bg-white p-1 text-neutral-700 shadow-md animate-in slide-in-from-top-1 dark:border-neutral-800 dark:bg-neutral-800 dark:text-neutral-400',
          className,
        )}
        {...props}
      />
    </MenubarPrimitive.Portal>
  ),
)

MenubarContent.displayName = MenubarPrimitive.Content.displayName

export const MenubarItem = React.forwardRef<
  React.ElementRef<typeof MenubarPrimitive.Item>,
  React.ComponentPropsWithoutRef<typeof MenubarPrimitive.Item> & {
    inset?: boolean
  }
>(({ className, inset, ...props }, ref) => (
  <MenubarPrimitive.Item
    ref={ref}
    className={cn(
      'relative flex cursor-default select-none items-center rounded-sm py-1.5 px-2 text-sm font-medium outline-none focus:bg-neutral-100 data-[disabled]:pointer-events-none data-[disabled]:opacity-50 dark:focus:bg-neutral-700',
      inset && 'pl-8',
      className,
    )}
    {...props}
  />
))

MenubarItem.displayName = MenubarPrimitive.Item.displayName

export const MenubarCheckboxItem = React.forwardRef<
  React.ElementRef<typeof MenubarPrimitive.CheckboxItem>,
  React.ComponentPropsWithoutRef<typeof MenubarPrimitive.CheckboxItem>
>(({ className, children, checked, ...props }, ref) => (
  <MenubarPrimitive.CheckboxItem
    ref={ref}
    className={cn(
      'relative flex cursor-default select-none items-center rounded-sm py-1.5 pl-8 pr-2 text-sm font-medium outline-none focus:bg-neutral-100 data-[disabled]:pointer-events-none data-[disabled]:opacity-50 dark:focus:bg-neutral-700',
      className,
    )}
    checked={checked}
    {...props}
  >
    <span className="absolute left-2 flex h-3.5 w-3.5 items-center justify-center">
      <MenubarPrimitive.ItemIndicator>
        <Check className="h-4 w-4" />
      </MenubarPrimitive.ItemIndicator>
    </span>
    {children}
  </MenubarPrimitive.CheckboxItem>
))

MenubarCheckboxItem.displayName = MenubarPrimitive.CheckboxItem.displayName

export const MenubarRadioItem = React.forwardRef<
  React.ElementRef<typeof MenubarPrimitive.RadioItem>,
  React.ComponentPropsWithoutRef<typeof MenubarPrimitive.RadioItem>
>(({ className, children, ...props }, ref) => (
  <MenubarPrimitive.RadioItem
    ref={ref}
    className={cn(
      'relative flex cursor-default select-none items-center rounded-sm py-1.5 pl-8 pr-2 text-sm font-medium outline-none focus:bg-neutral-100 data-[disabled]:pointer-events-none data-[disabled]:opacity-50 dark:focus:bg-neutral-700',
      className,
    )}
    {...props}
  >
    <span className="absolute left-2 flex h-3.5 w-3.5 items-center justify-center">
      <MenubarPrimitive.ItemIndicator>
        <Circle className="h-2 w-2 fill-current" />
      </MenubarPrimitive.ItemIndicator>
    </span>
    {children}
  </MenubarPrimitive.RadioItem>
))

MenubarRadioItem.displayName = MenubarPrimitive.RadioItem.displayName

export const MenubarLabel = React.forwardRef<
  React.ElementRef<typeof MenubarPrimitive.Label>,
  React.ComponentPropsWithoutRef<typeof MenubarPrimitive.Label> & {
    inset?: boolean
  }
>(({ className, inset, ...props }, ref) => (
  <MenubarPrimitive.Label
    ref={ref}
    className={cn(
      'px-2 py-1.5 text-sm font-semibold text-neutral-900 dark:text-neutral-300',
      inset && 'pl-8',
      className,
    )}
    {...props}
  />
))

MenubarLabel.displayName = MenubarPrimitive.Label.displayName

export const MenubarSeparator = React.forwardRef<
  React.ElementRef<typeof MenubarPrimitive.Separator>,
  React.ComponentPropsWithoutRef<typeof MenubarPrimitive.Separator>
>(({ className, ...props }, ref) => (
  <MenubarPrimitive.Separator
    ref={ref}
    className={cn(
      '-mx-1 my-1 h-px bg-neutral-100 dark:bg-neutral-700',
      className,
    )}
    {...props}
  />
))

MenubarSeparator.displayName = MenubarPrimitive.Separator.displayName

export const MenubarShortcut = ({
  className,
  ...props
}: React.HTMLAttributes<HTMLSpanElement>) => {
  return (
    <span
      className={cn(
        'ml-auto text-xs tracking-widest text-neutral-500',
        className,
      )}
      {...props}
    />
  )
}

MenubarShortcut.displayname = 'MenubarShortcut'
