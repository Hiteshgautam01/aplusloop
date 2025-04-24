"use client";

import * as React from "react";
import { ThemeProvider as NextThemesProvider } from "next-themes";

export function ThemeProvider({
  children,
  ...props
}: React.ComponentProps<typeof NextThemesProvider>) {
  const [mounted, setMounted] = React.useState(false);

  // Prevent hydration mismatch by only mounting after client-side hydration
  React.useEffect(() => {
    setMounted(true);
  }, []);

  // Return early if not mounted yet to avoid theme flashing during hydration
  if (!mounted) {
    // Still render children but without theme switching functionality
    return <>{children}</>;
  }

  return <NextThemesProvider {...props}>{children}</NextThemesProvider>;
}