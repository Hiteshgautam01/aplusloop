// components/careers/BenefitsSection.tsx
"use client";

import { motion } from "framer-motion";
import { 
  Globe, 
  Clock, 
  Heart, 
  BookOpen, 
  Home, 
  Shield 
} from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

interface BenefitProps {
  title: string;
  description: string;
  icon: React.ReactNode;
  delay: number;
}

const BenefitCard = ({ title, description, icon, delay }: BenefitProps) => (
  <motion.div
    initial={{ opacity: 0, y: 30 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.5, delay }}
    viewport={{ once: true }}
    className="w-full sm:w-1/2 lg:w-1/3 p-4"
  >
    <Card className="h-full hover:shadow-lg transition-shadow duration-300">
      <CardHeader className="pb-2">
        <div className="mb-3 inline-flex h-12 w-12 items-center justify-center rounded-full bg-blue-100 text-blue-700">
          {icon}
        </div>
        <CardTitle className="text-xl">{title}</CardTitle>
      </CardHeader>
      <CardContent>
        <CardDescription className="text-gray-600 text-base">{description}</CardDescription>
      </CardContent>
    </Card>
  </motion.div>
);

export default function BenefitsSection() {
  const benefits = [
    {
      title: "Global Connections",
      description: "Join a diverse team spanning multiple continents, with opportunities to collaborate globally and travel for work.",
      icon: <Globe className="h-6 w-6" />,
    },
    {
      title: "Flexible Time Off",
      description: "We trust you to manage your time. Take vacation when you need it with our flexible PTO policy.",
      icon: <Clock className="h-6 w-6" />,
    },
    {
      title: "Health & Wellness",
      description: "Comprehensive health benefits including medical, dental, vision, and wellness programs to keep you at your best.",
      icon: <Heart className="h-6 w-6" />,
    },
    {
      title: "Learning Stipend",
      description: "Annual budget for courses, books, conferences, and tools to support your professional growth.",
      icon: <BookOpen className="h-6 w-6" />,
    },
    {
      title: "Remote-Friendly",
      description: "Work from home, our offices, or a combination that suits your productivity and lifestyle needs.",
      icon: <Home className="h-6 w-6" />,
    },
    {
      title: "Financial Security",
      description: "Competitive salary, retirement plans with company matching, and equity options for all team members.",
      icon: <Shield className="h-6 w-6" />,
    },
  ];

  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Benefits</h2>
          <div className="h-1 w-24 bg-blue-700 mx-auto mb-6 rounded"></div>
          <p className="max-w-2xl mx-auto text-gray-700">
            We believe that taking care of our team is essential for building great products.
            Here's what you can expect when joining the Aplus Loop family.
          </p>
        </motion.div>

        <div className="flex flex-wrap -mx-4">
          {benefits.map((benefit, index) => (
            <BenefitCard
              key={index}
              title={benefit.title}
              description={benefit.description}
              icon={benefit.icon}
              delay={0.1 + (index * 0.1)}
            />
          ))}
        </div>
      </div>
    </section>
  );
}