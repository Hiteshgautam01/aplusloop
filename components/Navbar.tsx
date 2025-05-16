"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuList,
  NavigationMenuTrigger,
  NavigationMenuContent,
  NavigationMenuLink,
} from "@/components/ui/navigation-menu";

import { MegaMenuContent } from "@/components/landing/menu/MegaMenuContent";
import { BusinessConsultingMenuContent } from "@/components/landing/menu/BusinessConsultingMenuContent";
import AnimatedLogo from "@/components/AnimatedLogo";
import {
  serviceCategories,
  solutionCategories,
} from "@/components/landing/menu/data";

interface NavLink {
  href: string;
  label: string;
  hasMenu?: boolean;
}

const navLinks: NavLink[] = [
  { href: "/technology", label: "Technology", hasMenu: true },
  { href: "/services", label: "Business Consulting", hasMenu: true },
  { href: "/career", label: "Careers" },
  { href: "/contact-us", label: "Contact Us" },
];

export function Navbar() {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeMobileMenu, setActiveMobileMenu] = useState<string | null>(null);

  // Close menus when route changes
  useEffect(() => {
    closeAllMenus();
  }, [pathname]);

  // Handle scroll effect - client-side only
  useEffect(() => {
    if (typeof window !== "undefined") {
      // Initialize scrolled state client-side to avoid hydration mismatch
      setScrolled(window.scrollY > 10);

      const handleScroll = () => setScrolled(window.scrollY > 10);
      window.addEventListener("scroll", handleScroll);
      return () => window.removeEventListener("scroll", handleScroll);
    }
  }, []);

  // Toggle mobile mega menu
  const toggleMobileMenu = (href: string) => {
    setActiveMobileMenu(activeMobileMenu === href ? null : href);
  };

  // Close all menus
  const closeAllMenus = () => {
    setActiveMobileMenu(null);
    setIsOpen(false);
  };

  // Render standard navigation item
  const renderNavItem = (link: NavLink) => {
    if (link.hasMenu) {
      return (
        <NavigationMenuItem key={link.href}>
          <NavigationMenuTrigger
            className={cn(
              "px-4 py-2 text-sm font-medium transition-all bg-transparent",
              "hover:bg-transparent focus:bg-transparent data-[state=open]:bg-transparent",
              pathname === link.href
                ? "text-primary font-semibold"
                : "text-foreground/70 hover:text-foreground"
            )}
          >
            {link.label}
          </NavigationMenuTrigger>

          {link.label === "Technology" && (
            <MegaMenuContent closeMenu={closeAllMenus} />
          )}
          {link.label === "Business Consulting" && (
            <BusinessConsultingMenuContent closeMenu={closeAllMenus} />
          )}
        </NavigationMenuItem>
      );
    }

    return (
      <NavigationMenuItem key={link.href}>
        <Link href={link.href} legacyBehavior passHref>
          <NavigationMenuLink
            className={cn(
              "px-4 py-2 text-sm font-medium inline-flex items-center justify-center",
              pathname === link.href
                ? "text-primary font-semibold"
                : "text-foreground/70 hover:text-foreground"
            )}
          >
            {link.label}
            {pathname === link.href && (
              <motion.span
                className="absolute -bottom-0.5 left-4 right-4 h-0.5 bg-primary/60 rounded-full"
                layoutId="activeIndicator"
                transition={{
                  type: "spring",
                  stiffness: 500,
                  damping: 30,
                }}
              />
            )}
          </NavigationMenuLink>
        </Link>
      </NavigationMenuItem>
    );
  };

  // Render mobile navigation item
  const renderMobileNavItem = (link: NavLink) => {
    return (
      <div key={link.href} className="relative">
        {link.hasMenu ? (
          <div>
            <button
              onClick={() => toggleMobileMenu(link.href)}
              className={cn(
                "flex w-full justify-between items-center rounded-md px-3 py-2.5 text-base font-medium",
                pathname === link.href
                  ? "text-primary font-semibold"
                  : "text-foreground/70 hover:text-foreground"
              )}
            >
              <span>{link.label}</span>
              <ChevronDown
                className={cn(
                  "h-4 w-4 transition-transform",
                  activeMobileMenu === link.href && "transform rotate-180"
                )}
              />
            </button>

            {/* Mobile Mega Menu Content */}
            {activeMobileMenu === link.href && (
              <div className="bg-background/80 border-l border-muted/20 pl-4 ml-3 my-2">
                {link.label === "Technology" && (
                  <div className="py-2">
                    <h4 className="text-sm font-medium text-foreground/80 mb-2">
                      Solutions
                    </h4>
                    <ul className="space-y-2">
                      {solutionCategories.map((category) => (
                        <li key={category.title}>
                          <Link
                            href={category.href}
                            className="flex items-center text-sm pl-2 py-1 text-foreground/70 hover:text-foreground"
                            onClick={closeAllMenus}
                          >
                            <category.icon className="h-3.5 w-3.5 mr-2 text-primary/70" />
                            {category.title}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}

                {link.label === "Business Consulting" && (
                  <div className="py-2">
                    <h4 className="text-sm font-medium text-foreground/80 mb-2">
                      Services
                    </h4>
                    <ul className="space-y-2">
                      {serviceCategories.map((category) => (
                        <li key={category.title}>
                          <Link
                            href={category.href}
                            className="flex items-center text-sm pl-2 py-1 text-foreground/70 hover:text-foreground"
                            onClick={closeAllMenus}
                          >
                            <category.icon className="h-3.5 w-3.5 mr-2 text-primary/70" />
                            {category.title}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>
            )}
          </div>
        ) : (
          <Link
            href={link.href}
            className={cn(
              "block rounded-md px-3 py-2.5 text-base font-medium relative",
              pathname === link.href
                ? "text-primary font-semibold"
                : "text-foreground/70 hover:text-foreground"
            )}
            onClick={closeAllMenus}
          >
            {link.label}
            {pathname === link.href && (
              <motion.span
                className="absolute -left-1 top-2.5 bottom-2.5 w-0.5 bg-primary rounded-full"
                layoutId="mobileActiveIndicator"
                initial={{ scaleY: 0 }}
                animate={{ scaleY: 1 }}
                transition={{
                  type: "spring",
                  stiffness: 500,
                  damping: 30,
                }}
              />
            )}
          </Link>
        )}
      </div>
    );
  };

  return (
    <header
      className={cn(
        "fixed top-0 z-50 w-full transition-colors duration-300 h-16 ",
        scrolled
          ? "bg-background/60 shadow-sm border-b border-muted/20 backdrop-blur-lg"
          : "bg-background/40 backdrop-blur-lg"
      )}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          {/* Logo */}
          <div className="flex items-center">
            <Link href="/" className="relative">
              <AnimatedLogo />
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:block translate-x-[-70px]">
            <div className="ml-10 flex items-center">
              <NavigationMenu>
                <NavigationMenuList className="gap-2">
                  {navLinks.map(renderNavItem)}
                </NavigationMenuList>
              </NavigationMenu>
            </div>
          </div>

          {/* CTA Button */}
          <div className="hidden md:flex items-center">
            <Button
              variant="default"
              size="sm"
              className="bg-primary hover:bg-primary/90 shadow-md transition-all duration-300"
            >
              Book a Consultation
            </Button>
          </div>

          {/* Mobile menu button */}
          <div className="flex md:hidden">
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setIsOpen(!isOpen)}
              className="ml-2"
            >
              <span className="sr-only">Open menu</span>
              {isOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </Button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      <div
        className={cn(
          "md:hidden transition-all duration-300 overflow-hidden bg-background border-t border-muted/10",
          isOpen ? "max-h-screen" : "max-h-0"
        )}
      >
        <div className="space-y-1 px-4 pb-4 pt-2">
          {/* Mobile menu items */}
          {navLinks.map(renderMobileNavItem)}

          {/* Mobile CTA */}
          <div className="mt-6 pt-4 border-t border-muted/20">
            <Button
              variant="default"
              size="sm"
              className="w-full bg-primary hover:bg-primary/90 shadow-md transition-all duration-300"
            >
              Book a Consultation
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
}
