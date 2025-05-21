"use client";

import React from "react";
import { ArrowRight, Code, Layout } from "lucide-react";
import Link from "next/link";

const Banner = () => {
  // Pink theme colors (matching WebAndMobileDevelopment)
  const primaryColor = "#FF3D9A";
  const secondaryColor = "#C4008C";
  const lightBgColor = "#FFF5F9";

  return (
    <div className="bg-gradient-to-br from-white to-purple-50 py-20">
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row items-center">
          {/* Left side text content */}
          <div className="lg:w-1/2 mb-12 lg:mb-0 pr-0 lg:pr-12">
            <div
              className="inline-flex items-center px-3 py-1 mb-4 rounded-full text-sm font-medium"
              style={{ backgroundColor: lightBgColor, color: secondaryColor }}
            >
              <Layout size={16} className="mr-2" />
              Web and Mobile Development
            </div>

            <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6 leading-tight">
              Develop world-beating apps and websites that are future ready and
              built for scale
            </h1>

            <p className="text-lg text-gray-600 mb-8">
              "Development is where your vision and our design come to life. We
              have the experience and flexibility to tackle the most complex of
              challenges. And we use our expertise to build delightful digital
              products that perform at scale."
            </p>

            <Link
              href="/contact"
              className="inline-flex items-center px-6 py-3 rounded-lg text-white transition-all duration-300 hover:shadow-lg"
              style={{
                background: `linear-gradient(to right, ${primaryColor}, ${secondaryColor})`,
              }}
            >
              Get Started
              <ArrowRight size={20} className="ml-2" />
            </Link>
          </div>

          {/* Right side image/illustration */}
          <div className="lg:w-1/2 relative">
            <div className="relative z-10 rounded-2xl overflow-hidden shadow-2xl transform lg:translate-x-8 transition-all duration-500 hover:-translate-y-2">
              <div className="aspect-[4/3] bg-gradient-to-br from-white to-pink-50 rounded-2xl overflow-hidden relative">
                {/* Abstract code graphics */}
                <div className="absolute inset-0 opacity-10 flex items-center justify-center overflow-hidden">
                  <Code
                    size={400}
                    className="text-pink-500 transform -rotate-12"
                  />
                </div>

                {/* Decorative elements */}
                <div
                  className="absolute -bottom-6 -right-6 w-48 h-48 rounded-full opacity-30"
                  style={{
                    background: `linear-gradient(to right, ${primaryColor}, ${secondaryColor})`,
                  }}
                ></div>
                <div
                  className="absolute top-10 left-10 w-24 h-24 rounded-full opacity-20"
                  style={{
                    background: `linear-gradient(to right, ${primaryColor}, ${secondaryColor})`,
                  }}
                ></div>

                {/* Content inside image area */}
                <div className="absolute inset-0 flex flex-col items-center justify-center p-8">
                  <div className="w-full max-w-sm">
                    <div className="w-full h-8 rounded-full bg-white bg-opacity-30 mb-4"></div>
                    <div className="w-3/4 h-8 rounded-full bg-white bg-opacity-30 mb-8"></div>
                    <div className="grid grid-cols-2 gap-3">
                      {[1, 2, 3, 4].map((i) => (
                        <div
                          key={i}
                          className="aspect-square rounded-xl bg-white bg-opacity-30 shadow-sm"
                        ></div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Decorative background element */}
            <div
              className="absolute top-8 right-0 w-4/5 h-full rounded-2xl -z-10"
              style={{ backgroundColor: lightBgColor }}
            ></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
