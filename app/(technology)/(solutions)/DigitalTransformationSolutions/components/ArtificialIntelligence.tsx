import React from "react";
import { Brain, Cpu, Eye, Bot, Lightbulb, Zap } from "lucide-react";
import ImageTextSection from "@/components/reusable/ImageTextSection";
import ImagePlaceholder from "@/components/reusable/ImagePlaceholder";
import SectionHeader from "@/components/reusable/SectionHeader";

const AISection = () => {
  const aiCapabilities = [
    {
      icon: <Cpu className="w-6 h-6" />,
      title: "Machine Learning (ML)",
      description:
        "At the core of AI is machine learning, where systems learn from data to make predictions or decisions without being explicitly programmed. It's used in everything from recommendation engines to fraud detection.",
    },
    {
      icon: <Brain className="w-6 h-6" />,
      title: "Natural Language Processing (NLP)",
      description:
        "NLP allows AI to understand, interpret, and respond to human language. Chatbots, virtual assistants, and language translation tools rely on this technology to communicate effectively with users.",
    },
    {
      icon: <Eye className="w-6 h-6" />,
      title: "Computer Vision",
      description:
        "AI can 'see' and interpret images and videos using computer vision. Applications include facial recognition, medical imaging analysis, and autonomous vehicle navigation.",
    },
    {
      icon: <Bot className="w-6 h-6" />,
      title: "Robotics",
      description:
        "AI-driven robots are used in manufacturing, healthcare, and even homes. They can perform complex tasks, adapt to changing environments, and work alongside humans safely.",
    },
    {
      icon: <Lightbulb className="w-6 h-6" />,
      title: "Expert Systems",
      description:
        "These systems simulate the decision-making ability of a human expert. They're used in diagnostics, finance, and legal industries to provide informed insights and recommendations.",
    },
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-slate-50 to-blue-50">
      <div className="">
        {/* Section Header */}
        <SectionHeader
          title="Artificial Intelligence"
          description="Artificial Intelligence (AI) is no longer a concept of the future—it's a powerful force reshaping the present. From voice assistants to self-driving cars, AI is revolutionizing how we live and work. But what exactly can AI do? Its areas of expertise are vast and continually expanding. Smart Solutions. Real-Time Insights. Scalable Intelligence. We build AI-driven ecosystems that empower your business with data intelligence and automation."
          icon={<Brain className="w-8 h-8 text-white" />}
          iconBackground="bg-gradient-to-br from-blue-700 to-indigo-600"
          layout="stacked"
          dividerStyle="dashed"
          dividerColor="from-blue-600"
          badge="Transforming Every Industry"
          badgeColor="bg-blue-100 text-blue-800"
          maxWidth="max-w-6xl"
          animationDelay={0.2}
          titleClassName="tracking-tight"
        />

        {/* Main Content Section */}
        <div className="mb-20">
          <ImageTextSection
            title="AI-Powered Solutions That Work"
            content={
              <div className="space-y-6">
                <div className="inline-flex items-center space-x-2 text-blue-700 font-medium">
                  <Zap className="w-5 h-5" />
                  <span>We deliver AI that works.</span>
                </div>

                <div className="space-y-4">
                  {aiCapabilities.map((capability, index) => (
                    <div key={index} className="flex items-start space-x-3">
                      <div className="flex-shrink-0 mt-1">
                        <div className="p-2 bg-blue-100 rounded-lg text-blue-700">
                          {capability.icon}
                        </div>
                      </div>
                      <div>
                        <h4 className="font-semibold text-gray-900">
                          {capability.title}
                        </h4>
                        <p className="text-gray-600 mt-1">
                          {capability.description}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            }
            borderStyle="tilt"
            borderColor="blue"
            badge="Intelligent Automation"
            imagePosition="right"
            textContentStyle="bordered"
            decorative={true}
            backgroundColor="rgba(239, 246, 255, 0.5)"
            backgroundStyle="solid"
            imageEffect="saturation"
            imageSrc="/github-copilot.jpg"
          />
        </div>

        {/* Bottom CTA Section */}
        <div className=" container mx-auto px-6 text-center bg-gradient-to-br from-blue-700 to-indigo-800 rounded-2xl p-12 text-white">
          <div className="max-w-3xl mx-auto">
            <h3 className="text-3xl font-bold mb-4">
              The Future Is AI-Powered
            </h3>
            <p className="text-xl text-blue-100 mb-8 leading-relaxed">
              Ready to transform your business with intelligent solutions? Let's
              build AI that drives real results for your organization.
            </p>
            <button className="bg-white text-blue-700 px-8 py-4 rounded-lg font-semibold hover:bg-blue-50 transition-colors duration-300 inline-flex items-center space-x-2">
              <span>Get Started with AI</span>
              <Zap className="w-5 h-5" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AISection;
