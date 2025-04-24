"use client";

import { useState } from "react";
import { Star, Quote, Building2, Zap, Globe, Lightbulb } from "lucide-react";
import { motion } from "framer-motion";

export function TestimonialsSection() {
  const [activeSlide, setActiveSlide] = useState(0);

  const testimonials = [
    {
      quote:
        "Aplus-loop transformed our business with their innovative technology solutions and strategic marketing approach. Their team's expertise helped us achieve a 200% increase in online engagement and 40% growth in revenue.",
      author: "Sarah Johnson",
      title: "CEO, TechInnovate Inc.",
      initials: "SJ",
      bgColor: "bg-blue-100 dark:bg-blue-900",
      textColor: "text-blue-700 dark:text-blue-300",
    },
    {
      quote:
        "Working with Aplus-loop was a game-changer for our company. Their comprehensive approach to marketing and technology integration gave us the competitive edge we needed in our industry.",
      author: "Michael Rodriguez",
      title: "CTO, Global Solutions",
      initials: "MR",
      bgColor: "bg-purple-100 dark:bg-purple-900",
      textColor: "text-purple-700 dark:text-purple-300",
    },
    {
      quote:
        "Exceptional service and results! The Aplus-loop team delivered beyond our expectations, implementing cutting-edge technologies that streamlined our operations and boosted productivity by 35%.",
      author: "Jennifer Lee",
      title: "COO, Bright Futures Ltd",
      initials: "JL",
      bgColor: "bg-emerald-100 dark:bg-emerald-900",
      textColor: "text-emerald-700 dark:text-emerald-300",
    },
  ];

  const companies = [
    { name: "TechInnovate", icon: Building2 },
    { name: "GlobalSolutions", icon: Globe },
    { name: "BrightFutures", icon: Lightbulb },
    { name: "DigitalEdge", icon: Zap },
  ];

  return (
    <section className="py-24 bg-muted/10 relative overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">What Our Clients Say</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Trusted by businesses worldwide to deliver exceptional results
          </p>
        </div>

        <div className="max-w-5xl mx-auto">
          <div className="relative p-8 md:p-12 bg-card rounded-xl shadow-lg border border-border/50">
            <Quote className="absolute top-6 left-6 h-12 w-12 text-muted-foreground/20" />

            <motion.div
              className="text-center"
              key={activeSlide}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.3 }}
            >
              <p className="text-xl md:text-2xl italic mb-8 relative z-10 max-w-3xl mx-auto">
                "{testimonials[activeSlide].quote}"
              </p>

              <div className="flex items-center justify-center mb-4">
                {[1, 2, 3, 4, 5].map((star) => (
                  <Star
                    key={star}
                    className="h-5 w-5 text-yellow-500 fill-yellow-500"
                  />
                ))}
              </div>

              <div className="flex flex-col items-center">
                <div
                  className={`w-16 h-16 rounded-full overflow-hidden mb-3 flex items-center justify-center ${testimonials[activeSlide].bgColor}`}
                >
                  <span
                    className={`text-xl font-semibold ${testimonials[activeSlide].textColor}`}
                  >
                    {testimonials[activeSlide].initials}
                  </span>
                </div>
                <h4 className="font-bold text-lg">
                  {testimonials[activeSlide].author}
                </h4>
                <p className="text-muted-foreground">
                  {testimonials[activeSlide].title}
                </p>
              </div>
            </motion.div>

            <div className="flex justify-center mt-8 gap-2">
              {testimonials.map((_, i) => (
                <button
                  key={i}
                  className={`h-2.5 rounded-full transition-all ${
                    i === activeSlide ? "w-8 bg-primary" : "w-2.5 bg-primary/30"
                  }`}
                  aria-label={`Go to slide ${i + 1}`}
                  onClick={() => setActiveSlide(i)}
                />
              ))}
            </div>
          </div>

          <div className="mt-16 flex flex-wrap justify-center gap-6">
            {companies.map((company, index) => (
              <div
                key={index}
                className="flex items-center justify-center h-12 px-4 py-2 bg-card/50 border border-border/40 rounded-lg hover:bg-card/80 transition-colors duration-200"
              >
                <company.icon className="h-5 w-5 text-primary/60 mr-2" />
                <span className="text-sm font-medium text-foreground/70">
                  {company.name}
                </span>
              </div>
            ))}
            <div className="flex items-center justify-center h-12 px-4 py-2 bg-card/50 border border-border/40 rounded-lg hover:bg-card/80 transition-colors duration-200">
              <Star className="h-5 w-5 text-primary/60 mr-2" />
              <span className="text-sm font-medium text-foreground/70">
                InnovateX
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
