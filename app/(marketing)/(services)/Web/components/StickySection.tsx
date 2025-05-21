"use client";
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { StickyScroll } from "@/components/ui/sticky-scroll-reveal";

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

      <AnimatePresence>
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
      </AnimatePresence>
    </div>
  );
};

// StickySection Component
const StickySection = () => {
  // State for active section
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  // Toggle section open/closed
  const toggleSection = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  // Dev image placeholder
  const DevImage = () => (
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
                d="M8 9L11 12L8 15M13 15H16M5 20H19C20.1046 20 21 19.1046 21 18V6C21 4.89543 20.1046 4 19 4H5C3.89543 4 3 4.89543 3 6V18C3 19.1046 3.89543 20 5 20Z"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </div>
          <h3 className="text-2xl font-bold text-white mb-2">
            Development Excellence
          </h3>
          <p className="text-white/80">
            Building seamless digital experiences with precision and innovation
          </p>
        </div>
      </div>
    </div>
  );

  // Content sections
  const sections = [
    {
      title: "Technology Workshop",
      content: (
        <div className="space-y-4">
          <p>
            Before we start any development project, we like to run technology
            workshops. These give us the chance to sit down with you and discuss
            and approve the features of your website or app.
          </p>
          <p>
            During the workshops, we gather and analyse your requirements, such
            as technology stack, system architecture, performance KPIs,
            integrations, and CMS. This helps us develop the ideal solution and
            delivery.
          </p>
          <p>
            At the end of the workshop, we look at creating a minimum viable
            product (MVP). This important step allows us to verify the
            hypotheses made during the design phase.
          </p>
          <p>
            It also keeps us focused on implementing only the most necessary
            functionality. That is to say, functionality that brings real
            business value and doesn't need constant changing or rewriting code
            from scratch.
          </p>
        </div>
      ),
    },
    {
      title: "Design Handover",
      content: (
        <div className="space-y-4">
          <p>
            The design handover happens when the UI is finished and ready for
            our developers to implement. In truth, though, there's never really
            such a thing as a 'finished' design for a digital product.
          </p>
          <p>
            Indeed, there's always more we can do. So, in our language,
            'handover' means the point where our designers transfer their ideas
            for development. Supported by a design system that makes the whole
            process seamless.
          </p>
        </div>
      ),
    },
    {
      title: "Infrastructure & Architecture",
      content: (
        <div className="space-y-4">
          <p>
            This stage covers all the behind-the-scenes processes that power a
            website or app – none of which are visible to end users.
          </p>
          <p>
            The development process always starts with the product architecture
            design. We make UML diagrams (deployment, classes, sequences,
            components, etc.). And we manage databases, servers, domains,
            repositories and much more.
          </p>
        </div>
      ),
    },
    {
      title: "Backlog",
      content: (
        <div className="space-y-4">
          <p>
            While the front and backend developers get to grips with the
            infrastructure and architecture, your dedicated product manager sets
            to work on the long list of tasks involved in the website
            development cycle.
          </p>
          <p>
            Our team uses an agile methodology, with all our daily work based in
            Jira.
          </p>
        </div>
      ),
    },
    {
      title: "Coding & Testing",
      content: (
        <div className="space-y-4">
          <p>
            When we create a website or app, our developers follow user stories,
            and our testers perform 'user acceptance' tests. These allow us to
            easily determine whether a particular screen or function is working
            as expected.
          </p>
          <p>
            Bugs in software at the production stage can mean huge costs for
            your business. By continuously testing and refactoring, we create
            stable, high-performing systems with minimal debugging.
          </p>
          <p>
            To keep the project running smoothly, the IT project manager
            organises regular team meetings and stand-ups – as well as frequent
            status updates with you and your stakeholders.
          </p>
          <p>
            During these status updates, we present the results of the work
            completed so far. The feedback you give helps us achieve the shared
            project vision, and results in a product that fully meets
            expectations.
          </p>
          <p>
            We keep the code on the Git code repository. Each task is carried
            out on a separate branch, allowing you to easily introduce
            functionality and implement changes in the production environment at
            any time.
          </p>
        </div>
      ),
    },
    {
      title: "Proof of Concept / MVP",
      content: (
        <div className="space-y-4">
          <p>
            Simply put, this is the first iteration of your website or app. It
            follows the scope of functions defined in the initial tech workshop.
            And it's designed to meet the most necessary requirements before a
            more functional version is developed further down the line.
          </p>
          <p>
            By including only the minimum required functionality, the MVP
            reduces time and workload and gives you a cost-effective solution
            for launch.
          </p>
        </div>
      ),
    },
    {
      title: "Scaling",
      content: (
        <div className="space-y-4">
          <p>
            With the MVP in place, we now focus on constantly evolving the
            website or app's features. In doing so, we shape the product into an
            offering based on the requirements gathered during the technology
            workshops.
          </p>
        </div>
      ),
    },
    {
      title: "Optimisation & Maintenance",
      content: (
        <div className="space-y-4">
          <p>
            Our work doesn't stop once your website or app is delivered. We can
            also offer you ongoing support and development for the product's
            full lifecycle.
          </p>
          <p>
            We also guarantee consistent improvements – a series of small but
            significant iterations of tests that respond to changing market
            requirements.
          </p>
        </div>
      ),
    },
  ];

  return (
    <div className="font-sans bg-gray-50">
      {/* Main Development Section with Sticky-Scroll */}
      <section className="relative bg-white overflow-hidden">
        {/* Pink gradient background elements */}
        <div className="absolute top-0 right-0 w-1/3 h-1/2 bg-gradient-to-bl from-pink-100 to-transparent opacity-70"></div>
        <div className="absolute bottom-0 left-0 w-1/2 h-1/3 bg-gradient-to-tr from-pink-50 to-transparent opacity-70"></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          {/* StickyScroll Component - desktop */}
          <div className="hidden lg:block bg-white rounded-xl">
            <StickyScroll
              content={sections}
              contentClassName="bg-gradient-to-br from-pink-500 to-pink-700"
              title="Our end-to-end Development Process"
              subtitle="Collaboration drives everything."
              introText="Whether we're building websites, web apps, mobile apps or e-commerce platforms, collaboration drives everything. Our development team work closely with our UX/UI designers at every stage. And together they create the fast, secure, outstanding experiences your users expect."
            />
          </div>

          {/* Mobile Version */}
          <div className="lg:hidden">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <h2 className="text-3xl font-bold mb-3 text-gray-900">
                Our end-to-end Development Process
              </h2>
              <p className="text-xl mb-6 text-gray-600">
                Collaboration drives everything.
              </p>

              <div className="h-1 w-20 bg-gradient-to-r from-pink-500 to-pink-700 rounded-full mb-8"></div>

              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.2, duration: 0.5 }}
                className="text-lg mb-10 text-gray-700"
              >
                Whether we're building websites, web apps, mobile apps or
                e-commerce platforms, collaboration drives everything. Our
                development team work closely with our UX/UI designers at every
                stage. And together they create the fast, secure, outstanding
                experiences your users expect.
              </motion.p>
            </motion.div>

            {/* Mobile-only image */}
            <div className="mb-8">
              <DevImage />
            </div>

            {/* Mobile Collapsible Sections */}
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
          </div>
        </div>
      </section>

      {/* Additional Call to Action */}
      <div className="bg-gradient-to-r from-pink-600 to-pink-800 text-white py-24 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h3 className="text-2xl font-bold mb-4">
            Ready to transform your digital presence?
          </h3>
          <p className="text-white/80 mb-6">
            Let's work together to build fast, secure, and outstanding
            experiences for your users.
          </p>
          <button className="bg-white text-pink-700 font-medium rounded-lg px-8 py-3 shadow-lg hover:shadow-xl transition-all duration-300">
            Start Your Development Journey
          </button>
        </div>
      </div>
    </div>
  );
};

export default StickySection;
