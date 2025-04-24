"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { ModeToggle } from "@/components/mode-toggle";
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About Us" },
  { href: "/technology", label: "Technology" },
  { href: "/services", label: "Business Consulting & Marketing" },
  { href: "/blog", label: "Blog" },
  { href: "/careers", label: "Careers" },
];

export function Navbar() {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [hoverTarget, setHoverTarget] = useState<string | null>(null);
  const navContainerRef = useRef<HTMLDivElement>(null);
  const mobileNavRef = useRef<HTMLDivElement>(null);
  const [hoverRect, setHoverRect] = useState({ left: 0, width: 0, height: 0, top: 0 });
  const [isMouseInNav, setIsMouseInNav] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
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
    
    const targetElement = container.querySelector(`[data-href="${hoverTarget}"]`);
    if (!targetElement) return;
    
    const elementRect = targetElement.getBoundingClientRect();
    const containerRect = container.getBoundingClientRect();
    
    setHoverRect({
      width: elementRect.width,
      left: elementRect.left - containerRect.left,
      top: isMobile ? elementRect.top - containerRect.top : 0,
      height: isMobile ? elementRect.height : 40
    });
  }, [hoverTarget]);

  // Mouse tracking for the nav container
  const handleMouseEnter = (href: string) => {
    setHoverTarget(href);
    setIsMouseInNav(true);
  };
  
  const handleMouseLeave = () => {
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

  return (
    <motion.nav
      className={cn(
        "fixed top-0 z-50 w-full backdrop-blur-lg transition-colors duration-300 ease-in-out",
        scrolled
          ? "bg-background/60 shadow-sm border-b border-muted/20"
          : "bg-background/40"
      )}
      initial={{ height: 64 }}
      animate={{ 
        height: scrolled ? 60 : 64,
        y: scrolled ? 0 : 0
      }}
      transition={{
        type: "spring",
        stiffness: 300,
        damping: 30
      }}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Link href="/" className="flex items-center">
              <motion.span 
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
              </motion.span>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:block">
            <div
              className="ml-10 flex items-center relative"
              ref={navContainerRef}
              onMouseLeave={handleMouseLeave}
            >
              {/* Continuous hover effect */}
              <motion.div
                className="absolute bg-background/40 dark:bg-primary/10 backdrop-blur-sm rounded-lg z-0 shadow-sm pointer-events-none"
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
              
              {/* Create a continuous interactive area */}
              <div className="flex">
                {navLinks.map((link, index) => (
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
                            damping: 30
                          }}
                        />
                      )}
                    </Link>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right side: CTA & Theme Toggle */}
          <div className="hidden md:flex items-center space-x-4">
            {/* FIX: Replace motion.button with motion.div */}
            <motion.div 
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              transition={{ type: "spring", stiffness: 400, damping: 17 }}
            >
              <Button 
                variant="default" 
                size="sm"
                className="bg-primary/70 hover:bg-primary/80 shadow-sm transition-all duration-300"
              >
                Book a Consultation
              </Button>
            </motion.div>
            <ModeToggle />
          </div>

          {/* Mobile menu button */}
          <div className="flex md:hidden">
            <ModeToggle />
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
          "md:hidden transition-all duration-300 ease-in-out overflow-hidden bg-background/50 backdrop-blur-md",
          isOpen ? "max-h-screen border-t border-muted/10" : "max-h-0"
        )}
      >
        <div 
          className="space-y-1 px-4 pb-4 pt-2 relative" 
          ref={mobileNavRef}
          onMouseLeave={handleMouseLeave}
        >
          {/* Mobile hover effect */}
          {isOpen && (
            <motion.div
              className="absolute bg-background/40 dark:bg-primary/10 backdrop-blur-sm rounded-lg z-0 shadow-sm pointer-events-none"
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
          
          {navLinks.map((link) => (
            <div
              key={link.href}
              className="relative"
              data-href={link.href}
              onMouseEnter={() => handleMouseEnter(link.href)}
            >
              <Link
                href={link.href}
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
                      damping: 30
                    }}
                  />
                )}
              </Link>
            </div>
          ))}
          
          <div className="mt-6 pt-4 border-t border-muted/20">
            {/* FIX: Replace motion.button with motion.div */}
            <motion.div
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              transition={{ type: "spring", stiffness: 400, damping: 17 }}
            >
              <Button 
                variant="default" 
                size="sm" 
                className="w-full bg-primary/70 hover:bg-primary/80 shadow-sm transition-all duration-300"
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