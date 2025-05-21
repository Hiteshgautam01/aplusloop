import React from "react";
import AccordionSection from "@/components/reusable/AccordionSection";

const ApproachSection = () => {
  // Pink theme colors
  const primaryColor = "#FF3D9A";
  const secondaryColor = "#C4008C";
  const lightBgColor = "#FFF5F9";
  const mediumBgColor = "#FFE0F0";

  // Custom subtitle with highlighted text
  const customSubtitle = (
    <div className="space-y-4">
      <p className="text-xl text-gray-600">
        By working with APLUSLOOP, you get a team fully dedicated to your
        project. And you get a professional house's knowledge.
      </p>
      <div className="relative inline-block max-w-xl mx-auto">
        {/* <div className="absolute -inset-1 bg-gradient-to-r from-pink-300 via-pink-400 to-pink-500 rounded-lg blur-md opacity-75 animate-pulse"></div> */}
        <div className="relative bg-white rounded-lg p-5 border-2 border-pink-400 shadow-lg transform rotate-1 hover:rotate-0 transition-all duration-300 hover:scale-105">
          {/* <div className="absolute top-0 right-0 w-20 h-20 bg-pink-100 rounded-full -mr-6 -mt-6 opacity-70"></div>
          <div className="absolute bottom-0 left-0 w-16 h-16 bg-pink-100 rounded-full -ml-4 -mb-4 opacity-70"></div> */}

          <p className="text-xl font-bold text-pink-600 text-center tracking-wider relative z-10">
            <span className="relative inline-block px-1 group transition-all duration-300 hover:scale-110">
              <span className="absolute inset-0 bg-pink-100 -skew-y-3 rounded"></span>
              <span className="relative">On demand</span>
              <svg
                className="absolute -bottom-1 left-0 w-full"
                height="6"
                viewBox="0 0 100 6"
                preserveAspectRatio="none"
              >
                <path
                  d="M0,6 L100,6 L100,4.5 Q50,0 0,4.5 Z"
                  fill="#FF3D9A"
                  opacity="0.5"
                />
              </svg>
              <span className="absolute -right-1 -top-1 w-2 h-2 rounded-full bg-pink-500 opacity-75 group-hover:scale-150 group-hover:opacity-100 transition-all duration-300"></span>
            </span>

            <span className="mx-2 text-gray-400">●</span>

            <span className="relative inline-block px-1 group transition-all duration-300 hover:scale-110">
              <span className="absolute inset-0 bg-pink-100 -skew-y-3 rounded"></span>
              <span className="relative">Within your budget</span>
              <svg
                className="absolute -bottom-1 left-0 w-full"
                height="6"
                viewBox="0 0 100 6"
                preserveAspectRatio="none"
              >
                <path
                  d="M0,6 L100,6 L100,4.5 Q50,0 0,4.5 Z"
                  fill="#FF3D9A"
                  opacity="0.5"
                />
              </svg>
              <span className="absolute -right-1 -top-1 w-2 h-2 rounded-full bg-pink-500 opacity-75 group-hover:scale-150 group-hover:opacity-100 transition-all duration-300"></span>
            </span>

            <span className="mx-2 text-gray-400">●</span>

            <span className="relative inline-block px-1 group transition-all duration-300 hover:scale-110">
              <span className="absolute inset-0 bg-pink-100 -skew-y-3 rounded"></span>
              <span className="relative">Always on time</span>
              <svg
                className="absolute -bottom-1 left-0 w-full"
                height="6"
                viewBox="0 0 100 6"
                preserveAspectRatio="none"
              >
                <path
                  d="M0,6 L100,6 L100,4.5 Q50,0 0,4.5 Z"
                  fill="#FF3D9A"
                  opacity="0.5"
                />
              </svg>
              <span className="absolute -right-1 -top-1 w-2 h-2 rounded-full bg-pink-500 opacity-75 group-hover:scale-150 group-hover:opacity-100 transition-all duration-300"></span>
            </span>
          </p>

          <div className="absolute -right-3 -bottom-3 w-6 h-6 bg-pink-400 rounded-full opacity-70 animate-ping"></div>
        </div>
      </div>
    </div>
  );

  const approachItems = [
    {
      title: "Your business first",
      content: (
        <div className="space-y-4">
          <p className="text-gray-600 leading-relaxed">
            The goal of content creation is not just to find good words. Its
            main objective is to help you achieve your business goals.
          </p>
          <p className="text-gray-600 leading-relaxed">
            That's why we're starting with identifying your needs – and making
            sure your amazing new content fits perfectly into your strategy. We
            also holistically analyze your specific problems and opportunities.
          </p>
          <p className="text-gray-600 leading-relaxed">
            The result: tailored content strategies that resonate with your
            target audience and effectively communicate your message.
          </p>
        </div>
      ),
      hasImage: true,
      imagePosition: "right" as "right",
      imageProps: {
        title: "Business Focus",
        subtitle: "Strategy first, content second",
        iconPath:
          "M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z",
      },
    },
    {
      title: "Discovery",
      content: (
        <div className="space-y-4">
          <p className="text-gray-600 leading-relaxed">
            We begin by understanding your brand, goals, audience, and existing
            content landscape. This phase helps us align with your business
            vision and identify unique content opportunities that resonate with
            your market.
          </p>
        </div>
      ),
      hasImage: true,
      imagePosition: "left" as "left",
      imageProps: {
        title: "Discovery Phase",
        subtitle: "Understanding your needs",
        iconPath: "M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z",
      },
    },
    {
      title: "Strategy",
      content: (
        <div className="space-y-4">
          <p className="text-gray-600 leading-relaxed">
            Based on our findings, we craft a custom content strategy that
            defines tone, formats, platforms, publishing schedules, and
            distribution tactics—designed to meet your marketing and business
            objectives.
          </p>
        </div>
      ),
      hasImage: true,
      imagePosition: "right" as "right",
      imageProps: {
        title: "Strategic Planning",
        subtitle: "Roadmap to success",
        iconPath:
          "M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7",
      },
    },
    {
      title: "Creation",
      content: (
        <div className="space-y-4">
          <p className="text-gray-600 leading-relaxed">
            Our creative team develops high-quality, targeted content—from blog
            posts and social media creatives to videos and case studies—ensuring
            each asset aligns with your brand voice and strategic goals.
          </p>
        </div>
      ),
      hasImage: true,
      imagePosition: "left" as "left",
      imageProps: {
        title: "Content Creation",
        subtitle: "Bringing ideas to life",
        iconPath:
          "M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z",
      },
    },
    {
      title: "Publishing",
      content: (
        <div className="space-y-4">
          <p className="text-gray-600 leading-relaxed">
            We manage the seamless release of your content across selected
            channels, maintaining consistency in messaging and frequency, while
            ensuring optimal timing for maximum impact.
          </p>
        </div>
      ),
      hasImage: true,
      imagePosition: "right" as "right",
      imageProps: {
        title: "Publishing",
        subtitle: "Delivering to your audience",
        iconPath: "M12 19l9 2-9-18-9 18 9-2zm0 0v-8",
      },
    },
    {
      title: "Performance Tracking",
      content: (
        <div className="space-y-4">
          <p className="text-gray-600 leading-relaxed">
            Post-publication, we track performance through analytics and
            KPIs—such as engagement rates, conversions, and reach—using the data
            to refine and enhance future content cycles.
          </p>
        </div>
      ),
      hasImage: true,
      imagePosition: "left" as "left",
      imageProps: {
        title: "Analytics",
        subtitle: "Measuring success",
        iconPath:
          "M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z",
      },
    },
    {
      title: "Within Your Budget",
      content: (
        <div className="space-y-4">
          <p className="text-gray-600 leading-relaxed">
            We are fully transparent when it comes to production estimations. No
            hidden costs. You know what you will get and how much you will pay
            from the beginning.
          </p>
        </div>
      ),
      hasImage: true,
      imagePosition: "right" as "right",
      imageProps: {
        title: "Budget-Friendly",
        subtitle: "Transparent pricing",
        iconPath:
          "M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z",
      },
    },
    {
      title: "Tailored to Your Needs",
      content: (
        <div className="space-y-4">
          <p className="text-gray-600 leading-relaxed">
            You need content for Social Media? Sure. You need an animation to
            present your latest project? Happy to help. You quickly need an
            on-the-budget, short video? No problem.
          </p>
          <p className="text-gray-600 leading-relaxed">
            Whatever you need, we're happy to deliver. Fully tailored to your
            needs – even available in a subscription model, for monthly digital
            content.
          </p>
        </div>
      ),
      hasImage: true,
      imagePosition: "left" as "left",
      imageProps: {
        title: "Customized Solutions",
        subtitle: "Made for you",
        iconPath:
          "M11 4a2 2 0 114 0v1a1 1 0 001 1h3a1 1 0 011 1v3a1 1 0 01-1 1h-1a2 2 0 100 4h1a1 1 0 011 1v3a1 1 0 01-1 1h-3a1 1 0 01-1-1v-1a2 2 0 10-4 0v1a1 1 0 01-1 1H7a1 1 0 01-1-1v-3a1 1 0 00-1-1H4a2 2 0 110-4h1a1 1 0 001-1V7a1 1 0 011-1h3a1 1 0 001-1V4z",
      },
    },
    {
      title: "Top Quality & Timely Delivery",
      content: (
        <div className="space-y-4">
          <p className="text-gray-600 leading-relaxed">
            We deliver our productions on time. Always. Thanks to our rich
            experience, harmony in the team and battle-tested skills, we work
            quickly. With no harm to the quality, of course.
          </p>
        </div>
      ),
      hasImage: true,
      imagePosition: "right" as "right",
      imageProps: {
        title: "Premium Quality",
        subtitle: "Always on time",
        iconPath:
          "M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z",
      },
    },
  ];

  return (
    <AccordionSection
      title="Our Approach"
      subtitle={customSubtitle}
      items={approachItems}
      backgroundColor="bg-gradient-to-b from-white to-pink-50"
    />
  );
};

export default ApproachSection;
