import React from "react";
import Image from "next/image";

export function DigitalTransformationHero() {
  return (
    <div className="relative bg-gradient-to-r from-blue-900 to-indigo-800 overflow-hidden">
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-blue-900 opacity-70"></div>
        <div className="absolute inset-0 bg-gradient-to-r from-blue-900 to-indigo-800 opacity-50"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 py-24 sm:px-6 lg:px-8 lg:py-32">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h1 className="text-4xl font-extrabold tracking-tight text-white sm:text-5xl lg:text-6xl">
              Digital Transformation Services
            </h1>
            <p className="mt-6 text-xl text-indigo-100 max-w-3xl">
              Revolutionizing transportation through innovative technology
              solutions that enhance efficiency, reduce costs, and improve
              customer experience.
            </p>
            <div className="mt-10">
              <a
                href="#fleet-optimization"
                className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-indigo-800 bg-white hover:bg-indigo-50 transition duration-300"
              >
                Explore Our Solutions
              </a>
            </div>
          </div>

          <div className="relative h-[500px] w-full rounded-lg overflow-hidden shadow-2xl">
            <div className="absolute inset-0 bg-gradient-to-br from-transparent to-indigo-900/30 z-10 rounded-lg"></div>
            <div className="relative h-full w-full transform transition duration-700 hover:scale-105">
              <Image
                src="/images/digital-transformation-hero.jpg"
                alt="Digital transportation platform on smartphone"
                fill
                className="object-cover rounded-lg"
                priority
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
