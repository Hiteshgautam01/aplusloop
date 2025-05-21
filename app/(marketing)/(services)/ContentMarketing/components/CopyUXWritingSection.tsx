import React from "react";
import AccordionSection from "@/components/reusable/AccordionSection";
import { MessageSquare, Type, Edit } from "lucide-react";

const CopyUXWritingSection = () => {
  // Pink theme colors (for consistency with other sections)
  const primaryColor = "#FF3D9A";
  const secondaryColor = "#C4008C";
  const lightBgColor = "#FFF5F9";
  const mediumBgColor = "#FFE0F0";

  // Custom title with creative styling
  const customTitle = (
    <div className="flex flex-col items-center">
      <div className="relative mb-6">
        <div className="absolute -inset-1 bg-gradient-to-r from-pink-300 to-pink-500 rounded-lg blur opacity-30"></div>
        <div className="relative px-6 py-2 bg-white rounded-lg shadow-sm">
          <div className="flex items-center space-x-2">
            <Type className="h-6 w-6 text-pink-500" />
            <Edit className="h-6 w-6 text-pink-500" />
            <MessageSquare className="h-6 w-6 text-pink-500" />
          </div>
        </div>
      </div>
      <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4 relative">
        <span className="relative inline-block z-10">
          Copy & UX Writing
          <span className="absolute bottom-1 left-0 w-full h-3 bg-pink-200 opacity-70 transform -rotate-1"></span>
        </span>
      </h2>
    </div>
  );

  // Custom subtitle with creative styling
  const customSubtitle = (
    <div className="space-y-6 max-w-3xl mx-auto">
      <p className="text-xl text-gray-600 leading-relaxed">
        Content isn't about churning out words or filling templates. It should
        work in harmony with design and always be driven by your users' needs.
      </p>
      <p className="text-xl text-gray-600 leading-relaxed">
        At APLUSLOOP, our writers are the bridge between the visual layout and
        usability. They're a key part of the UX design process, and they work
        closely with our research and design teams at every stage – ensuring the
        best possible results for your users.
      </p>
    </div>
  );

  const uxWritingItems = [
    {
      title: "Discovery",
      content: (
        <div className="space-y-4">
          <p className="text-gray-600 leading-relaxed">
            Our whole design team – including our writers – must first
            understand your business, your users, and the problem to be solved.
            Before we do anything else.
          </p>
          <p className="text-gray-600 leading-relaxed">
            Why? Because it's how we create copy that smashes the brief,
            delights your users, and drives the results you need.
          </p>
          <p className="text-gray-600 leading-relaxed">
            Our writers analyse your competitors to see how they use language.
            How it shapes the structure and flow of their products and
            experiences. And where the opportunities lie for your brand or
            product.
          </p>
          <p className="text-gray-600 leading-relaxed">
            We hold kick-off meetings with you and our own teams, to get to the
            heart of the challenge. We consider your users' needs, emotions and
            obstacles in depth. And we consult with our designers to find the
            best path to success.
          </p>
        </div>
      ),
      hasImage: false,
    },
    {
      title: "Tone of Voice Development",
      content: (
        <div className="space-y-4">
          <p className="text-gray-600 leading-relaxed">
            We can work with your existing brand tone of voice (ToV). Or, if you
            need us to, we'll help you develop it from the ground up.
          </p>
          <p className="text-gray-600 leading-relaxed">
            Through workshops with your stakeholders and our creative team,
            we'll uncover your brand personality and translate it into a ToV
            that sets you apart from your rivals.
          </p>
          <p className="text-gray-600 leading-relaxed">
            We'll then formalise your ToV in a set of clear, practical
            guidelines. This helps our writers – and yours – to project your
            brand voice correctly and consistently. Wherever words are needed.
          </p>
        </div>
      ),
      hasImage: false,
    },
    {
      title: "The Writing Itself",
      content: (
        <div className="space-y-4">
          <p className="text-gray-600 leading-relaxed">
            After brainstorming and researching, gathering ideas, and analysing
            the competition, we're ready to put pen to paper fingers to
            keyboards.
          </p>
          <p className="text-gray-600 leading-relaxed">
            We start by drafting a first version of the copy. We do this quickly
            – embracing imperfection – to get all our ideas down on the page.
            And to give us something to shape into a final product.
          </p>
          <p className="text-gray-600 leading-relaxed">
            The editing stage is where we focus on the finer details. We cut,
            rework and refine the draft copy, clarifying points of confusion and
            identifying areas for improvement in the design. We also consider
            accessibility and localisation needs, as well as consistency of
            terminology and tone of voice.
          </p>
          <p className="text-gray-600 leading-relaxed">
            Next, we thoroughly proofread the edited copy to ensure it's up to
            publishable standard. We check for spelling, grammar and punctuation
            mistakes, and ensure the correct style has been used throughout. If
            the copy is in English, we'll collaborate closely with native
            speakers at this stage.
          </p>
          <p className="text-gray-600 leading-relaxed">
            Testing comes next. We like to see it as an ongoing process, rather
            than an end point. This keeps the focus on continuous improvement
            and adaptation to your users' needs. Because that's ultimately what
            UX is all about.
          </p>
        </div>
      ),
      hasImage: false,
    },
    {
      title: "Final Refinement and Delivery",
      content: (
        <div className="space-y-4">
          <p className="text-gray-600 leading-relaxed">
            We've made all the outstanding tweaks, and you're happy with the
            final copy. Now it's time to put it out there in front of your users
            – and watch the results come in.
          </p>
        </div>
      ),
      hasImage: false,
    },
  ];

  return (
    <AccordionSection
      title={customTitle}
      subtitle={customSubtitle}
      items={uxWritingItems}
      backgroundColor="bg-gradient-to-b from-pink-50 to-white"
    />
  );
};

export default CopyUXWritingSection;
