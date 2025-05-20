import React from "react";

const Banner = () => {
  return (
    <section className="relative overflow-hidden">
      {/* Gradient background with decorative elements */}
      <div className="absolute inset-0 bg-gradient-to-r from-[#FFF5F9] to-[#FFE0F0] z-0"></div>
      <div className="absolute top-0 right-0 w-1/3 h-1/3 bg-[#FF3D9A] opacity-5 rounded-full blur-3xl transform translate-x-1/4 -translate-y-1/4"></div>
      <div className="absolute bottom-0 left-0 w-1/2 h-1/2 bg-[#C4008C] opacity-5 rounded-full blur-3xl transform -translate-x-1/4 translate-y-1/4"></div>

      <div className="container mx-auto px-4 py-24 md:py-32 relative z-10">
        <div className="max-w-3xl">
          <h1 className="text-5xl md:text-6xl font-bold mb-6 text-gray-900 leading-tight">
            Branding & Creative
          </h1>

          <h2 className="text-2xl md:text-3xl font-semibold mb-8 text-[#FF3D9A] leading-snug">
            Get your digital product noticed, remembered, and chosen over others
          </h2>

          <p className="text-lg md:text-xl text-gray-700 leading-relaxed">
            We create digital-first brands that are grounded in the real world
            of your customers. Strong, distinctive brands that help you stand
            out in the crowded online marketplace, connect with people on an
            emotional level – and gain a competitive edge over your rivals.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Banner;
