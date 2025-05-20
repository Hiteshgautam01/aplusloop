"use client";
import React, { useState } from "react";
import { motion } from "framer-motion";

// Collapsible Section Component
const CollapsibleSection = ({
  title,
  children,
  titleColor = "text-gray-800",
  contentBgColor = "bg-white/50",
  iconColor = "text-pink-600",
  borderColor = "border-pink-200",
  isActive,
  onToggle,
}: {
  title: string;
  children: React.ReactNode;
  titleColor?: string;
  contentBgColor?: string;
  iconColor?: string;
  borderColor?: string;
  isActive?: boolean;
  onToggle?: () => void;
}) => {
  return (
    <div
      className={`mb-6 border-b ${borderColor} pb-4 last:border-0 last:pb-0`}
    >
      <button
        onClick={onToggle}
        className="flex justify-between items-center w-full py-3 text-left transition-all duration-300"
        aria-expanded={isActive}
      >
        <h3
          className={`text-xl font-semibold ${titleColor} transition-colors duration-300`}
        >
          {title}
        </h3>
        <motion.div
          animate={{ rotate: isActive ? 45 : 0 }}
          transition={{ duration: 0.3, type: "spring", stiffness: 300 }}
          className={`flex items-center justify-center w-8 h-8 rounded-full border ${borderColor} ${iconColor}`}
        >
          <svg
            width="16"
            height="16"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M12 4V20M4 12H20"
              stroke="currentColor"
              strokeWidth="2.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </motion.div>
      </button>

      {isActive && (
        <motion.div
          initial={{ opacity: 0, height: 0 }}
          animate={{
            opacity: 1,
            height: "auto",
            transition: { duration: 0.3, ease: "easeOut" },
          }}
          exit={{
            opacity: 0,
            height: 0,
            transition: { duration: 0.2, ease: "easeIn" },
          }}
          className={`overflow-hidden pt-4 ${contentBgColor}`}
        >
          {children}
        </motion.div>
      )}
    </div>
  );
};

// Brand Services Component
const BrandingServices = () => {
  // State for active section
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  // Toggle section open/closed
  const toggleSection = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

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
      <section className="relative bg-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          {/* Pink gradient background element */}
          <div className="absolute top-0 right-0 w-1/3 h-1/2 bg-gradient-to-bl from-pink-100 to-transparent opacity-70"></div>
          <div className="absolute bottom-0 left-0 w-1/2 h-1/3 bg-gradient-to-tr from-pink-50 to-transparent opacity-70"></div>

          <div className="flex flex-col lg:flex-row gap-8 lg:gap-16 relative">
            {/* Sticky Image Side */}
            <div className="lg:w-1/2">
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6 }}
                className="lg:sticky lg:top-8 transition-all duration-300"
              >
                <BrandImage />
              </motion.div>
            </div>

            {/* Scrollable Content Side */}
            <div className="lg:w-1/2">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
              >
                <h2 className="text-3xl font-bold mb-3 text-gray-900">
                  Our Approach to Branding Services
                </h2>
                <p className="text-xl mb-6 text-gray-600">
                  There's no brand quite like yours.
                </p>

                <div className="h-1 w-20 bg-gradient-to-r from-pink-500 to-pink-700 rounded-full mb-8"></div>

                <motion.p
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.2, duration: 0.5 }}
                  className="text-lg mb-10 text-gray-700"
                >
                  Whether you're building it from scratch or freshening up its
                  appeal, we'll create a solution specifically for your goals
                  and ambitions. Combining data and insight with our passion for
                  design, we develop emotionally resonant brand identities and
                  experiences. And we constantly challenge norms and assumptions
                  – all in search of ideas that accelerate your growth and help
                  you make an impact at scale.
                </motion.p>

                <div className="space-y-2 bg-pink-50/40 p-6 rounded-xl">
                  {sections.map((section, index) => (
                    <CollapsibleSection
                      key={index}
                      title={section.title}
                      titleColor="text-pink-800"
                      contentBgColor="bg-white/50"
                      iconColor="text-pink-600"
                      borderColor="border-pink-200"
                      isActive={activeIndex === index}
                      onToggle={() => toggleSection(index)}
                    >
                      <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 0.3 }}
                        className="text-gray-700"
                      >
                        {section.content}
                      </motion.div>
                    </CollapsibleSection>
                  ))}
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

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
