"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import { ModeToggle } from "@/components/mode-toggle";
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuList,
  NavigationMenuTrigger,
  NavigationMenuLink,
  NavigationMenuContent,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";

import { MegaMenuContent } from "@/components/landing/menu/MegaMenuContent";
import { BusinessConsultingMenuContent } from "@/components/landing/menu/BusinessConsultingMenuContent";
import Image from "next/image";
import {
  serviceCategories,
  solutionCategories,
} from "@/components/landing/menu/data";

interface NavLink {
  href: string;
  label: string;
  hasMenu?: boolean;
}

interface HoverRect {
  left: number;
  width: number;
  height: number;
  top: number;
}

const navLinks: NavLink[] = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About Us" },
  { href: "/technology", label: "Technology", hasMenu: true },
  { href: "/services", label: "Business Consulting", hasMenu: true },
  { href: "/blog", label: "Blog" },
  { href: "/career", label: "Careers" },
  { href: "/contact-us", label: "Contact Us" },
];

export function Navbar() {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [scrolled, setScrolled] = useState<boolean>(false);
  const [hoverTarget, setHoverTarget] = useState<string | null>(null);
  const navContainerRef = useRef<HTMLDivElement>(null);
  const mobileNavRef = useRef<HTMLDivElement>(null);
  const [hoverRect, setHoverRect] = useState<HoverRect>({
    left: 0,
    width: 0,
    height: 0,
    top: 0,
  });
  const [isMouseInNav, setIsMouseInNav] = useState<boolean>(false);
  const [activeMobileMenu, setActiveMobileMenu] = useState<string | null>(null);

  useEffect(() => {
    const handleScroll = (): void => {
      setScrolled(window.scrollY > 10);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Update hover rectangle when target changes
  useEffect(() => {
    if (!hoverTarget || !navContainerRef.current) return;

    const isMobile = window.innerWidth < 768;
    const container = isMobile ? mobileNavRef.current : navContainerRef.current;
    if (!container) return;

    const targetElement = container.querySelector(
      `[data-href="${hoverTarget}"]`
    );
    if (!targetElement) return;

    const elementRect = targetElement.getBoundingClientRect();
    const containerRect = container.getBoundingClientRect();

    setHoverRect({
      width: elementRect.width,
      left: elementRect.left - containerRect.left,
      top: isMobile ? elementRect.top - containerRect.top : 0,
      height: isMobile ? elementRect.height : 40,
    });
  }, [hoverTarget]);

  // Mouse tracking for the nav container
  const handleMouseEnter = (href: string): void => {
    setHoverTarget(href);
    setIsMouseInNav(true);
  };

  const handleMouseLeave = (): void => {
    setIsMouseInNav(false);
    // Don't clear the hoverTarget immediately to keep the highlight visible
    // It will be cleared by the effect below if mouse is outside
  };

  // Clear hover target when mouse leaves the nav area
  useEffect(() => {
    if (!isMouseInNav) {
      const timeout = setTimeout(() => {
        setHoverTarget(null);
      }, 300); // Small delay to prevent flickering
      return () => clearTimeout(timeout);
    }
  }, [isMouseInNav]);

  // Toggle mobile mega menu
  const toggleMobileMenu = (href: string): void => {
    setActiveMobileMenu(activeMobileMenu === href ? null : href);
  };

  // Render standard link or navigation menu item
  const renderNavItem = (link: NavLink, index: number) => {
    if (link.hasMenu) {
      return (
        <NavigationMenuItem
          key={link.href}
          data-href={link.href}
          onMouseEnter={() => handleMouseEnter(link.href)}
          className=" bg-transparent"
        >
          <NavigationMenuTrigger
            className={cn(
              "px-4 py-2 text-sm font-medium transition-all bg-transparent hover:bg-transparent ", // Remove default background
              "hover:bg-transparent focus:bg-transparent data-[state=open]:bg-transparent", // Remove default background
              pathname === link.href
                ? "text-primary font-semibold"
                : "text-foreground/70 hover:text-foreground",
              hoverTarget === link.href && "text-foreground"
            )}
          >
            {link.label}
          </NavigationMenuTrigger>
          {link.label === "Technology" && <MegaMenuContent />}
          {link.label === "Business Consulting" && (
            <BusinessConsultingMenuContent />
          )}
        </NavigationMenuItem>
      );
    }

    return (
      <div
        key={link.href}
        className="relative"
        data-href={link.href}
        onMouseEnter={() => handleMouseEnter(link.href)}
      >
        <Link
          href={link.href}
          className={cn(
            "px-4 py-2 text-sm font-medium relative z-10 block transition-all",
            pathname === link.href
              ? "text-primary font-semibold"
              : "text-foreground/70 hover:text-foreground",
            hoverTarget === link.href && "text-foreground"
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
        </Link>
      </div>
    );
  };

  // Render mobile nav item
  const renderMobileNavItem = (link: NavLink) => {
    return (
      <div key={link.href} className="relative">
        {link.hasMenu ? (
          <div>
            <button
              data-href={link.href}
              onMouseEnter={() => handleMouseEnter(link.href)}
              onClick={() => toggleMobileMenu(link.href)}
              className={cn(
                "flex w-full justify-between items-center rounded-md px-3 py-2.5 text-base font-medium relative z-10 transition-all",
                pathname === link.href
                  ? "text-primary font-semibold"
                  : "text-foreground/70 hover:text-foreground",
                hoverTarget === link.href && "text-foreground"
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
                {link.label === "Technology" &&
                  renderMobileMegaMenuContent("technology")}
                {link.label === "Business Consulting" &&
                  renderMobileMegaMenuContent("services")}
              </div>
            )}
          </div>
        ) : (
          <Link
            href={link.href}
            data-href={link.href}
            onMouseEnter={() => handleMouseEnter(link.href)}
            className={cn(
              "block rounded-md px-3 py-2.5 text-base font-medium relative z-10 transition-all",
              pathname === link.href
                ? "text-primary font-semibold"
                : "text-foreground/70 hover:text-foreground",
              hoverTarget === link.href && "text-foreground"
            )}
            onClick={() => setIsOpen(false)}
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

  // Render mobile mega menu content
  const renderMobileMegaMenuContent = (section: string) => {
    if (section === "technology") {
      return (
        <div className="py-2">
          <div className="mb-3">
            <h4 className="text-sm font-medium text-foreground/80 mb-2">
              Solutions
            </h4>
            <ul className="space-y-2">
              {solutionCategories.map((category) => (
                <li key={category.title}>
                  <Link
                    href={category.href}
                    className="flex items-center text-sm pl-2 py-1 text-foreground/70 hover:text-foreground"
                  >
                    <category.icon className="h-3.5 w-3.5 mr-2 text-primary/70" />
                    {category.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      );
    } else if (section === "services") {
      return (
        <div className="py-2">
          <div className="mb-3">
            <h4 className="text-sm font-medium text-foreground/80 mb-2">
              Services
            </h4>
            <ul className="space-y-2">
              {serviceCategories.map((category) => (
                <li key={category.title}>
                  <Link
                    href={category.href}
                    className="flex items-center text-sm pl-2 py-1 text-foreground/70 hover:text-foreground"
                  >
                    <category.icon className="h-3.5 w-3.5 mr-2 text-primary/70" />
                    {category.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      );
    }
    return null;
  };

  return (
    <motion.nav
      className={cn(
        "fixed top-0 z-50 w-full transition-colors duration-300 ease-in-out",
        scrolled
          ? "bg-background/60 shadow-sm border-b border-muted/20 backdrop-blur-lg"
          : "bg-background/40 backdrop-blur-lg"
      )}
      initial={{ height: 64 }}
      animate={{
        height: scrolled ? 60 : 64,
        y: scrolled ? 0 : 0,
      }}
      transition={{
        type: "spring",
        stiffness: 300,
        damping: 30,
      }}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between relative">
          {/* Logo */}
          <div className="">
            <Link href="/" className="absolute left-[-40] top-2">
              {/* <motion.span 
                className="text-xl font-bold tracking-tight bg-gradient-to-r from-primary/90 to-primary/70 bg-clip-text text-transparent"
                animate={{ 
                  scale: scrolled ? 0.95 : 1
                }}
                transition={{
                  type: "spring",
                  stiffness: 300,
                  damping: 30
                }}
              >
                Aplus-loop
              </motion.span> */}
              <Image
                src="/Logo.jpg"
                alt="Aplus-loop"
                width={120}
                height={100}
              />
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:block">
            <div
              className="ml-10 mt-1 flex items-center relative"
              ref={navContainerRef}
              onMouseLeave={handleMouseLeave}
            >
              {/* Continuous hover effect - enhanced for better visibility in light mode */}
              <motion.div
                className="absolute bg-primary/15 dark:bg-primary/15 border border-primary/10 rounded-lg z-0 shadow-sm pointer-events-none"
                initial={{ opacity: 0 }}
                animate={
                  hoverTarget
                    ? {
                        width: hoverRect.width,
                        left: hoverRect.left,
                        height: hoverRect.height,
                        opacity: 1,
                      }
                    : { opacity: 0 }
                }
                transition={{
                  type: "spring",
                  stiffness: 400,
                  damping: 35,
                }}
              />

              {/* Regular links and Mega Menu navigation */}
              <NavigationMenu>
                <NavigationMenuList>
                  {navLinks.map((link, index) => renderNavItem(link, index))}
                </NavigationMenuList>
              </NavigationMenu>
            </div>
          </div>

          {/* Right side: CTA & Theme Toggle */}
          <div className="hidden md:flex items-center space-x-4">
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              transition={{ type: "spring", stiffness: 400, damping: 17 }}
            >
              <Button
                variant="default"
                size="sm"
                className="bg-primary hover:bg-primary/90 shadow-md transition-all duration-300"
              >
                Book a Consultation
              </Button>
            </motion.div>
            {/*   <ModeToggle />*/}
          </div>

          {/* Mobile menu button */}
          <div className="flex md:hidden">
            {/*   <ModeToggle />*/}
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
          "md:hidden transition-all duration-300 ease-in-out overflow-hidden bg-background border-t border-muted/10",
          isOpen ? "max-h-screen" : "max-h-0"
        )}
      >
        <div
          className="space-y-1 px-4 pb-4 pt-2 relative"
          ref={mobileNavRef}
          onMouseLeave={handleMouseLeave}
        >
          {/* Mobile hover effect - enhanced for better visibility */}
          {isOpen && (
            <motion.div
              className="absolute bg-primary/20 dark:bg-primary/25 border border-primary/15 rounded-lg z-0 shadow-sm pointer-events-none"
              initial={{ opacity: 0 }}
              animate={
                hoverTarget
                  ? {
                      width: hoverRect.width,
                      left: hoverRect.left,
                      top: hoverRect.top,
                      height: hoverRect.height,
                      opacity: 1,
                    }
                  : { opacity: 0 }
              }
              transition={{
                type: "spring",
                stiffness: 400,
                damping: 35,
              }}
            />
          )}

          {/* Mobile menu items */}
          {navLinks.map((link) => renderMobileNavItem(link))}

          {/* Mobile CTA */}
          <div className="mt-6 pt-4 border-t border-muted/20">
            <motion.div
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              transition={{ type: "spring", stiffness: 400, damping: 17 }}
            >
              <Button
                variant="default"
                size="sm"
                className="w-full bg-primary hover:bg-primary/90 shadow-md transition-all duration-300"
              >
                Book a Consultation
              </Button>
            </motion.div>
          </div>
        </div>
      </div>
    </motion.nav>
  );
}
