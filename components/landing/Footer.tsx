"use client";

import Link from "next/link";
import { Mail } from "lucide-react";
import { Button } from "@/components/ui/button";

export function Footer() {
  const serviceLinks = [
    "Technology Solutions",
    "Marketing Services",
    "Business Consulting",
    "Digital Transformation",
    "IT Strategy",
  ];

  const companyLinks = [
    "About Us",
    "Our Team",
    "Careers",
    "Contact Us",
    "Blog",
  ];

  const socialLinks = ["twitter", "linkedin", "facebook", "instagram"];

  return (
    <footer className="bg-card pt-16 pb-8 border-t border-border">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
          <div>
            <h3 className="text-xl font-bold mb-4">Aplus-loop</h3>
            <p className="text-muted-foreground mb-6">
              Accelerating business growth through technology and marketing
              excellence.
            </p>
            <div className="flex space-x-4">
              {socialLinks.map((social) => (
                <a
                  key={social}
                  href="#"
                  className="h-10 w-10 rounded-full bg-muted/50 flex items-center justify-center hover:bg-primary/10 transition-colors"
                >
                  <span className="sr-only">{social}</span>
                  <div className="h-5 w-5 rounded-full bg-foreground/60" />
                </a>
              ))}
            </div>
          </div>

          <div>
            <h4 className="font-bold mb-4">Services</h4>
            <ul className="space-y-3">
              {serviceLinks.map((item) => (
                <li key={item}>
                  <Link
                    href="#"
                    className="text-muted-foreground hover:text-foreground transition-colors"
                  >
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-bold mb-4">Company</h4>
            <ul className="space-y-3">
              {companyLinks.map((item) => (
                <li key={item}>
                  <Link
                    href="#"
                    className="text-muted-foreground hover:text-foreground transition-colors"
                  >
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

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

        <div className="border-t border-border pt-8 text-center text-muted-foreground">
          <p>© {new Date().getFullYear()} Aplus-loop. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
