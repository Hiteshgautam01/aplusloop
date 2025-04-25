"use client";

import Link from "next/link";
import { Mail, Twitter, Linkedin, Facebook, Instagram } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

// Define TypeScript interfaces for the links
interface FooterLink {
  label: string;
  href: string;
}

interface FooterColumn {
  title: string;
  links: FooterLink[];
}

export function Footer() {
  // Main navigation links based on sitemap
  const mainLinks: FooterLink[] = [
    { label: "Home", href: "/" },
    { label: "About Us", href: "/about" },
    { label: "Technology", href: "/technology" },
    { label: "Business Consulting", href: "/services" },
    { label: "Blog", href: "/blog" },
    { label: "Careers", href: "/careers" },
    { label: "Contact Us", href: "/contact" },
    { label: "Success Stories", href: "/success-stories" },
  ];

  // Technology services links (L2)
  const technologyLinks: FooterLink[] = [
    { label: "Digital Transformation", href: "/technology/services/digital-transformation" },
    { label: "Info Security Services", href: "/technology/services/info-security" },
    { label: "Business Consulting", href: "/technology/services/business-consulting" },
    { label: "IT Staff Augmentation", href: "/technology/services/staff-augmentation" },
    { label: "Business & Infrastructure Solutions", href: "/technology/solutions/business-infrastructure" },
    { label: "Mobility Solutions", href: "/technology/solutions/mobility" },
    { label: "Digital Transformation Solutions", href: "/technology/solutions/digital-transformation" },
    { label: "Cybersecurity Solutions", href: "/technology/solutions/cybersecurity" },
    { label: "Industry 4.0 & IOT", href: "/technology/solutions/industry-iot" },
    { label: "Smart Nations Solutions", href: "/technology/solutions/smart-nations" },
  ];

  // Business consulting links (L2)
  const businessLinks: FooterLink[] = [
    { label: "Design Services", href: "/services/design" },
    { label: "Branding & Creative", href: "/services/branding" },
    { label: "Web Services", href: "/services/web" },
    { label: "Content Marketing", href: "/services/content" },
    { label: "Photography & Video", href: "/services/media" },
    { label: "Digital Marketing", href: "/services/digital-marketing" },
  ];

  // Footer columns structure
  const footerColumns: FooterColumn[] = [
    {
      title: "Main Pages",
      links: mainLinks.slice(0, 6), // First 6 main links
    },
    {
      title: "Technology",
      links: technologyLinks,
    },
    {
      title: "Business and Marketing Consulting",
      links: businessLinks,
    },
  ];

  const socialLinks = [
    { 
      name: "twitter", 
      href: "#",
      icon: Twitter,
      color: "text-[#1DA1F2] bg-white" 
    },
    { 
      name: "linkedin", 
      href: "#",
      icon: Linkedin,
      color: "text-[#0A66C2] bg-white" 
    },
    { 
      name: "facebook", 
      href: "#",
      icon: Facebook,
      color: "text-[#1877F2] bg-white" 
    },
    { 
      name: "instagram", 
      href: "#",
      icon: Instagram,
      color: "text-[#E4405F] bg-white" 
    },
  ];

  const legalLinks: FooterLink[] = [
    { label: "Privacy Policy", href: "/legal/privacy-policy" },
    { label: "Terms of Use", href: "/legal/terms" },
    { label: "Cookie Policy", href: "/legal/cookies" },
  ];

  return (
    <footer className="bg-card pt-16 pb-8 border-t border-border">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
          {/* Company info and social */}
          <div>
            <h3 className="text-xl font-bold mb-4">Aplus-loop</h3>
            <p className="text-muted-foreground mb-6">
              Accelerating business growth through technology and marketing excellence.
            </p>
            <div className="flex space-x-4">
              {socialLinks.map((social) => (
                <a
                  key={social.name}
                  href={social.href}
                  className="h-10 w-10 rounded-full flex items-center justify-center hover:bg-muted/80 transition-colors bg-muted"
                  aria-label={`Visit our ${social.name} page`}
                >
                  {social.icon && (
                    <social.icon
                      className={cn("h-5 w-5", social.color)}
                    />
                  )}
                </a>
              ))}
            </div>
          </div>

          {/* Dynamic footer columns */}
          {footerColumns.map((column) => (
            <div key={column.title}>
              <h4 className="font-bold mb-4">{column.title}</h4>
              <ul className="space-y-3">
                {column.links.map((link) => (
                  <li key={link.label}>
                    <Link
                      href={link.href}
                      className="text-muted-foreground hover:text-foreground transition-colors"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          {/* Newsletter signup */}
          <div>
            <h4 className="font-bold mb-4">Subscribe to our newsletter</h4>
            <p className="text-muted-foreground mb-4">
              Stay updated with our latest news and offers
            </p>
            <div className="flex">
              <div className="relative flex-grow">
                <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-muted-foreground" />
                <input
                  type="email"
                  placeholder="Your email"
                  className="w-full pl-10 pr-3 py-2 rounded-l-lg bg-muted/50 border border-border focus:outline-none focus:ring-2 focus:ring-primary"
                />
              </div>
              <Button className="rounded-l-none">Subscribe</Button>
            </div>
          </div>
        </div>

        {/* Legal links */}
        <div className="border-t border-border pt-6 pb-2">
          <div className="flex flex-wrap justify-center gap-6 mb-4">
            {legalLinks.map((link) => (
              <Link
                key={link.label}
                href={link.href}
                className="text-sm text-muted-foreground hover:text-foreground transition-colors"
              >
                {link.label}
              </Link>
            ))}
          </div>
        </div>

        {/* Copyright */}
        <div className="text-center text-muted-foreground text-sm">
          <p>© {new Date().getFullYear()} Aplus-loop. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}