"use client";
import React from "react";
import StickyImageSection from "../../../../../components/reusable/StickyImageComponent";

// BrandingServices Component
const BrandingServices = () => {
  // Brand image placeholder
  const BrandImage = () => (
    <div className="relative w-full h-full aspect-square rounded-xl overflow-hidden shadow-lg">
      <div className="absolute inset-0 bg-gradient-to-br from-pink-500 to-pink-700 opacity-90"></div>
      <div className="absolute inset-0 flex items-center justify-center p-6">
        <div className="text-center">
          <div className="mx-auto w-32 h-32 mb-6 bg-white/20 rounded-full flex items-center justify-center">
            <svg
              className="w-16 h-16 text-white"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M20 7L12 3L4 7M20 7L12 11M20 7V17L12 21M12 11L4 7M12 11V21M4 7V17L12 21"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </div>
          <h3 className="text-2xl font-bold text-white mb-2">
            Branding Excellence
          </h3>
          <p className="text-white/80">
            Crafting memorable brand experiences that resonate and inspire
          </p>
        </div>
      </div>
    </div>
  );

  // Content sections
  const sections = [
    {
      title: "Brand Strategy",
      content: (
        <div className="space-y-4">
          <p>
            We start by asking questions. Lots of them. We then analyse the
            answers, and the insights of our Research and Strategy teams, and
            use it all as the foundation for a future-oriented brand strategy.
            This is how we ensure your brand attracts and engages all the right
            people.
          </p>
          <div className="mt-4">
            <p className="font-medium mb-2">Key steps:</p>
            <ul className="list-disc pl-5 space-y-1">
              <li>Research</li>
              <li>Interviews</li>
              <li>Workshops</li>
              <li>Brand positioning</li>
            </ul>
          </div>
        </div>
      ),
    },
    {
      title: "Brand Concept",
      content: (
        <div className="space-y-4">
          <p>
            With the strategy in place, we can now start creating the concept.
            We explore, visualise, communicate and test different ideas and
            directions. And we push the creative limits to ensure we create
            something truly great.
          </p>
          <div className="mt-4">
            <p className="font-medium mb-2">Key steps:</p>
            <ul className="list-disc pl-5 space-y-1">
              <li>Mood boarding</li>
              <li>Creative concepts</li>
              <li>Iterations</li>
              <li>Testing</li>
            </ul>
          </div>
        </div>
      ),
    },
    {
      title: "Brand Identity",
      content: (
        <div className="space-y-4">
          <p>
            Once the concept is agreed and the direction is set, we start making
            things real. We determine the look and feel, create the brand
            guidelines, and bring a holistic brand identity to life.
          </p>
          <div className="mt-4">
            <p className="font-medium mb-2">Key steps:</p>
            <ul className="list-disc pl-5 space-y-1">
              <li>Design deliverables</li>
              <li>Brand manuals</li>
              <li>Design systems</li>
              <li>Guidelines</li>
            </ul>
          </div>
        </div>
      ),
    },
    {
      title: "Customer Experience",
      content: (
        <div className="space-y-4">
          <p>
            Without context, branding is just a set of pretty pixels. We use the
            brand identity we've created to produce joined-up digital
            experiences – ones that appeal to users' emotions and build loyalty
            towards your products.
          </p>
          <div className="mt-4">
            <p className="font-medium mb-2">Key steps:</p>
            <ul className="list-disc pl-5 space-y-1">
              <li>User experience design</li>
              <li>User interface design</li>
              <li>Visual design</li>
              <li>Launch</li>
            </ul>
          </div>
        </div>
      ),
    },
    {
      title: "Our Package",
      content: (
        <div className="space-y-4">
          <p>
            Our comprehensive branding package includes all the essential
            elements needed to establish and grow your brand. From strategy to
            implementation, we've got you covered with a tailored approach that
            reflects your unique vision and goals.
          </p>
          <div className="mt-4 p-4 bg-pink-100/50 rounded-lg">
            <p className="font-medium text-pink-800">
              Complete solution including:
            </p>
            <ul className="mt-2 space-y-2">
              <li className="flex items-center">
                <span className="w-5 h-5 rounded-full bg-pink-500 flex items-center justify-center mr-2">
                  <svg
                    className="w-3 h-3 text-white"
                    viewBox="0 0 24 24"
                    fill="none"
                  >
                    <path
                      d="M5 12L10 17L20 7"
                      stroke="currentColor"
                      strokeWidth="3"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </span>
                <span>Brand strategy development</span>
              </li>
              <li className="flex items-center">
                <span className="w-5 h-5 rounded-full bg-pink-500 flex items-center justify-center mr-2">
                  <svg
                    className="w-3 h-3 text-white"
                    viewBox="0 0 24 24"
                    fill="none"
                  >
                    <path
                      d="M5 12L10 17L20 7"
                      stroke="currentColor"
                      strokeWidth="3"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </span>
                <span>Visual identity creation</span>
              </li>
              <li className="flex items-center">
                <span className="w-5 h-5 rounded-full bg-pink-500 flex items-center justify-center mr-2">
                  <svg
                    className="w-3 h-3 text-white"
                    viewBox="0 0 24 24"
                    fill="none"
                  >
                    <path
                      d="M5 12L10 17L20 7"
                      stroke="currentColor"
                      strokeWidth="3"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </span>
                <span>Brand guidelines documentation</span>
              </li>
              <li className="flex items-center">
                <span className="w-5 h-5 rounded-full bg-pink-500 flex items-center justify-center mr-2">
                  <svg
                    className="w-3 h-3 text-white"
                    viewBox="0 0 24 24"
                    fill="none"
                  >
                    <path
                      d="M5 12L10 17L20 7"
                      stroke="currentColor"
                      strokeWidth="3"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </span>
                <span>Customer journey mapping</span>
              </li>
            </ul>
          </div>
        </div>
      ),
    },
  ];

  return (
    <div className="font-sans bg-gray-50">
      {/* Main Branding Section */}
      <StickyImageSection
        imageComponent={<BrandImage />}
        title="Our Approach to Branding Services"
        subtitle="There's no brand quite like yours."
        introText="Whether you're building it from scratch or freshening up its appeal, we'll create a solution specifically for your goals and ambitions. Combining data and insight with our passion for design, we develop emotionally resonant brand identities and experiences. And we constantly challenge norms and assumptions – all in search of ideas that accelerate your growth and help you make an impact at scale."
        sections={sections}
        backgroundColor="bg-white"
        textColor="text-gray-700"
        accentColor="bg-gradient-to-r from-pink-500 to-pink-700"
        titleColor="text-gray-900"
        subtitleColor="text-gray-600"
        sectionTitleColor="text-pink-800"
        sectionContentBgColor="bg-white/50"
        iconColor="text-pink-600"
        borderColor="border-pink-200"
        stickyTopOffset="top-8"
        className="relative overflow-hidden"
      />

      {/* Additional Call to Action */}
      <div className="bg-gradient-to-r from-pink-600 to-pink-800 text-white py-12 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h3 className="text-2xl font-bold mb-4">
            Curious what's the optimal creative process for your product and
            challenges?
          </h3>
          <p className="text-white/80 mb-6">
            Let's discover the perfect approach for your unique brand journey
            together.
          </p>
          <button className="bg-white text-pink-700 font-medium rounded-lg px-8 py-3 shadow-lg hover:shadow-xl transition-all duration-300">
            Start Your Brand Journey
          </button>
        </div>
      </div>
    </div>
  );
};

export default BrandingServices;
