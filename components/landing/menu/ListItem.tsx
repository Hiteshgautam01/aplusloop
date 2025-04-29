"use client";

import * as React from "react";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { NavigationMenuLink } from "@/components/ui/navigation-menu";
import { ListItemProps } from "./data";

// Shared ListItem component for menus
export const ListItem = React.forwardRef<React.ElementRef<"a">, ListItemProps>(
  ({ className, title, description, icon: Icon, href, ...props }, ref) => {
    return (
      <li>
        <NavigationMenuLink asChild>
          <Link
            ref={ref}
            href={href}
            className={cn(
              "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent/30 hover:text-accent-foreground focus:text-accent-foreground group",
              className
            )}
            {...props}
          >
            <div className="flex items-center">
              {Icon && (
                <Icon className="h-4 w-4 mr-2 text-primary group-hover:text-primary" />
              )}
              <div className="text-sm font-medium leading-none">{title}</div>
            </div>
            <p className="line-clamp-2 text-sm leading-snug text-muted-foreground mt-1 pl-6">
              {description}
            </p>
          </Link>
        </NavigationMenuLink>
      </li>
    );
  }
);
ListItem.displayName = "ListItem";
