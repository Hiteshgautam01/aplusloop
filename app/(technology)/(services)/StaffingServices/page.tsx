"use client";
import React from "react";
import {
  Users,
  Code,
  Shield,
  Cloud,
  BarChart3,
  Settings,
  Palette,
  Brain,
  ArrowRight,
  CheckCircle2,
  Calendar,
  Clock,
  UserPlus,
  Zap,
  Target,
  Building2,
  Heart,
  ShoppingCart,
  Briefcase,
  GraduationCap,
  Truck,
  Eye,
  MessageCircle,
  Award,
  TrendingUp,
  Globe,
  Sparkles,
} from "lucide-react";
import Banner from "../InfoSecurityServices/components/Banner";

const ITStaffAugmentation = () => {
  // Custom colors
  const colors = {
    primary: "#0047FF",
    secondary: "#1E22AA",
    light: "#F5F8FF",
    medium: "#E0E8FF",
    dark: "#1A1A4F",
    darkNavy: '#0a0e27',
    deepBlue: '#151c3a',
    royalBlue: '#1e3a8a',
    electricBlue: '#3b82f6',
    skyBlue: '#60a5fa',
    lightBlue: '#93bbfc'
  };

  // Expertise Areas
  const expertiseAreas = [
    {
      name: "Software Developers",
      subtitle: "Frontend, Backend, Full-Stack",
      icon: <Code className="w-5 h-5" />,
    },
    { name: "Cloud & DevOps Engineers", icon: <Cloud className="w-5 h-5" /> },
    {
      name: "Cybersecurity Consultants & Analysts",
      icon: <Shield className="w-5 h-5" />,
    },
    {
      name: "Project & Program Managers",
      icon: <Settings className="w-5 h-5" />,
    },
    {
      name: "Business Analysts & Data Engineers",
      icon: <BarChart3 className="w-5 h-5" />,
    },
    {
      name: "QA/Test Engineers",
      subtitle: "Manual & Automation",
      icon: <CheckCircle2 className="w-5 h-5" />,
    },
    { name: "UI/UX Designers", icon: <Palette className="w-5 h-5" /> },
    { name: "ERP & CRM Consultants", icon: <Building2 className="w-5 h-5" /> },
    { name: "AI/ML Specialists", icon: <Brain className="w-5 h-5" /> },
  ];

  // Engagement Models
  const engagementModels = [
    {
      title: "Short-Term Contracts",
      subtitle: "Fill temporary gaps during project spikes or staff leaves",
      icon: <Clock className="w-6 h-6" />,
    },
    {
      title: "Long-Term Assignments",
      subtitle: "Scale your delivery capacity sustainably",
      icon: <Calendar className="w-6 h-6" />,
    },
    {
      title: "Dedicated Resources",
      subtitle: "Full-time skilled professionals working as part of your team",
      icon: <UserPlus className="w-6 h-6" />,
    },
    {
      title: "Hybrid/Remote Models",
      subtitle: "Access global talent, onsite or virtually",
      icon: <Globe className="w-6 h-6" />,
    },
  ];

  // Benefits
  const benefits = [
    {
      title: "Certified & Vetted Talent",
      description: "Technically sound professionals with domain experience",
      icon: <Award className="w-5 h-5" />,
    },
    {
      title: "Rapid Onboarding",
      description: "Minimize hiring time with plug-and-play resources",
      icon: <Zap className="w-5 h-5" />,
    },
    {
      title: "Cost-Effective Scaling",
      description: "Avoid recruitment overheads and costs",
      icon: <Target className="w-5 h-5" />,
    },
    {
      title: "Domain Expertise",
      description: "Talent matched to your industry and tech stack",
      icon: <Brain className="w-5 h-5" />,
    },
    {
      title: "Seamless Integration",
      description: "Our staff work with your tools, culture, and processes",
      icon: <Users className="w-5 h-5" />,
    },
    {
      title: "Compliance Assured",
      description:
        "Contracts and engagements aligned with labor & data regulations",
      icon: <Shield className="w-5 h-5" />,
    },
  ];

  // Industries
  const industries = [
    {
      name: "Government & Public Sector",
      icon: <Building2 className="w-5 h-5" />,
    },
    { name: "Healthcare & Life Sciences", icon: <Heart className="w-5 h-5" /> },
    { name: "Retail & E-commerce", icon: <ShoppingCart className="w-5 h-5" /> },
    {
      name: "BFSI (Banking, Finance, Insurance)",
      icon: <Briefcase className="w-5 h-5" />,
    },
    { name: "Education & EdTech", icon: <GraduationCap className="w-5 h-5" /> },
    { name: "Manufacturing & Logistics", icon: <Truck className="w-5 h-5" /> },
  ];

  // Considerations
  const considerations = [
    "You're struggling to hire the right tech talent",
    "You need to scale your team quickly",
    "You're working on time-bound digital transformation projects",
    "You want to reduce overheads while maintaining productivity",
    "You require specialized expertise not available in-house",
  ];

  return (
    <div
      className="min-h-screen mt-16"
      style={{ backgroundColor: colors.light }}
    >
      <Banner
        title="IT Staff Augmentation"
        subtitle="Empower Your Team with On-Demand Technology Talent"
        height="700px"
        overlayType="gradient"
        overlayOpacity={0.7}
        animationDuration={0.8}
        layout="left"
        badge="Innovation"
        ctaButtons={[
          {
            text: "Get Started",
            variant: "primary",
            href: "#contact",
          },
          {
            text: "Learn More",
            variant: "outline",
            href: "#services",
          },
        ]}
        titleClassName="text-4xl md:text-5xl font-light mb-4"
        subtitleClassName="text-xl md:text-2xl font-light max-w-3xl "
        imageSrc="/It.jpg"
      >
        <div className="max-w-5xl mx-auto ">
          <p className="text-lg text-white max-w-3xl mx-auto leading-relaxed mb-12">
            In today's fast-paced digital world, having the right talent at the
            right time can be the difference between staying ahead—or falling
            behind. At Aplusloop, our IT Staff Augmentation services provide
            scalable, flexible, and expert tech talent to help you accelerate
            project timelines, reduce operational bottlenecks, and extend your
            in-house capabilities without long-term commitments.
          </p>
        </div>
      </Banner>

      {/* What Is Section */}
      <section className="px-4 sm:px-6 lg:px-8 py-16">
        <div className="max-w-5xl mx-auto">
          <div
            className="rounded-3xl p-8 md:p-12 relative overflow-hidden"
            style={{ backgroundColor: colors.medium }}
          >
            <div
              className="absolute top-0 right-0 w-40 h-40 rounded-full blur-3xl opacity-30"
              style={{ backgroundColor: colors.primary }}
            ></div>
            <div className="relative">
              <h2
                className="text-3xl md:text-4xl font-bold mb-4"
                style={{ color: colors.dark }}
              >
                What Is IT Staff Augmentation?
              </h2>
              <p
                className="text-lg leading-relaxed"
                style={{ color: colors.secondary }}
              >
                IT Staff Augmentation is a flexible outsourcing strategy that
                enables you to add skilled tech professionals to your existing
                team on a short-term or long-term basis. Whether you need
                developers, cloud engineers, cybersecurity experts, data
                analysts, or project managers, we bridge the talent gap with
                pre-vetted specialists ready to hit the ground running.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Expertise Section */}
      <section className="px-4 sm:px-6 lg:px-8 py-16">
        <div className="max-w-6xl mx-auto">
          <h2
            className="text-3xl md:text-4xl font-bold mb-12 text-center"
            style={{ color: colors.dark }}
          >
            Our Expertise Covers:
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {expertiseAreas.map((area, index) => (
              <div
                key={index}
                className="group relative bg-white rounded-2xl p-5 shadow-sm hover:shadow-xl transition-all duration-300 border hover:border-blue-200"
                style={{ borderColor: colors.medium }}
              >
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-blue-100 rounded-xl flex items-center justify-center text-blue-600 group-hover:scale-110 transition-transform duration-300">
                    {area.icon}
                  </div>
                  <div>
                    <h3
                      className="font-semibold"
                      style={{ color: colors.dark }}
                    >
                      {area.name}
                    </h3>
                    {area.subtitle && (
                      <p className="text-sm text-gray-500">{area.subtitle}</p>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Engagement Models */}
      <section
        className="px-4 sm:px-6 lg:px-8 py-16"
        style={{ backgroundColor: "white" }}
      >
        <div className="max-w-6xl mx-auto">
          <h2
            className="text-3xl md:text-4xl font-bold mb-12 text-center"
            style={{ color: colors.dark }}
          >
            Engagement Models
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {engagementModels.map((model, index) => (
              <div
                key={index}
                className="relative group bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 border overflow-hidden"
                style={{ borderColor: colors.medium }}
              >
                <div
                  className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                  style={{
                    background: `linear-gradient(135deg, ${colors.light} 0%, ${colors.medium} 100%)`,
                  }}
                ></div>
                <div className="relative">
                  <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center text-blue-600 mb-4 group-hover:scale-110 transition-transform duration-300">
                    {model.icon}
                  </div>
                  <h3
                    className="text-xl font-bold mb-2"
                    style={{ color: colors.dark }}
                  >
                    {model.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    {model.subtitle}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Section */}
      <section
        className="px-4 sm:px-6 lg:px-8 py-16"
        style={{ backgroundColor: colors.light }}
      >
        <div className="max-w-6xl mx-auto">
          <h2
            className="text-3xl md:text-4xl font-bold mb-12 text-center"
            style={{ color: colors.dark }}
          >
            Why Choose Aplusloop?
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {benefits.map((benefit, index) => (
              <div key={index} className="group">
                <div
                  className="bg-white rounded-2xl p-6 h-full hover:shadow-lg transition-all duration-300 border hover:border-blue-200"
                  style={{ borderColor: colors.medium }}
                >
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center text-blue-600 flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                      {benefit.icon}
                    </div>
                    <div>
                      <h3
                        className="font-bold mb-1"
                        style={{ color: colors.dark }}
                      >
                        {benefit.title}
                      </h3>
                      <p className="text-sm text-gray-600 leading-relaxed">
                        {benefit.description}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Industries Section */}
      <section className="px-4 sm:px-6 lg:px-8 py-16 bg-white">
        <div className="max-w-5xl mx-auto">
          <h2
            className="text-3xl md:text-4xl font-bold mb-12 text-center"
            style={{ color: colors.dark }}
          >
            Industries We Serve
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {industries.map((industry, index) => (
              <div
                key={index}
                className="bg-white rounded-xl p-5 shadow-sm hover:shadow-md transition-all duration-300 border hover:border-blue-200 flex items-center gap-3"
                style={{ borderColor: colors.medium }}
              >
                <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center text-blue-600">
                  {industry.icon}
                </div>
                <span className="font-medium" style={{ color: colors.dark }}>
                  {industry.name}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* When to Consider Section */}
      <section
        className="px-4 sm:px-6 lg:px-8 py-16"
        style={{ backgroundColor: colors.light }}
      >
        <div className="max-w-4xl mx-auto">
          <div
            className="rounded-3xl p-8 md:p-12"
            style={{ backgroundColor: colors.medium }}
          >
            <h2
              className="text-3xl md:text-4xl font-bold mb-8 text-center"
              style={{ color: colors.dark }}
            >
              When to Consider IT Staff Augmentation
            </h2>
            <div className="space-y-4">
              {considerations.map((item, index) => (
                <div key={index} className="flex items-start gap-3">
                  <div
                    className="w-6 h-6 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5"
                    style={{ backgroundColor: colors.primary }}
                  >
                    <CheckCircle2 className="w-4 h-4 text-white" />
                  </div>
                  <p
                    className="leading-relaxed"
                    style={{ color: colors.secondary }}
                  >
                    {item}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative overflow-hidden">
      {/* Main gradient background */}
      <div 
        className="absolute inset-0"
        style={{
          background: `linear-gradient(135deg, ${colors.darkNavy} 0%, ${colors.deepBlue} 40%, ${colors.royalBlue} 80%, ${colors.electricBlue} 100%)`,
        }}
      />
      
      {/* Overlay gradient for depth */}
      <div 
        className="absolute inset-0 opacity-30"
        style={{
          background: `radial-gradient(circle at 20% 50%, ${colors.electricBlue} 0%, transparent 50%),
                       radial-gradient(circle at 80% 50%, ${colors.skyBlue} 0%, transparent 50%)`,
        }}
      />
      
      {/* Animated background shapes */}
      <div className="absolute inset-0 overflow-hidden">
        <div 
          className="absolute -top-40 -right-40 w-80 h-80 rounded-full opacity-10"
          style={{
            background: colors.electricBlue,
            filter: 'blur(100px)',
            animation: 'float 20s ease-in-out infinite'
          }}
        />
        <div 
          className="absolute -bottom-40 -left-40 w-96 h-96 rounded-full opacity-10"
          style={{
            background: colors.skyBlue,
            filter: 'blur(120px)',
            animation: 'float 25s ease-in-out infinite reverse'
          }}
        />
      </div>

      <div className="relative z-10 px-4 sm:px-6 lg:px-8 py-24">
        <div className="max-w-5xl mx-auto text-center">
          {/* Main heading with gradient text */}
          <h2 className="text-5xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
            <span className="text-white">Let's Build </span>
            <span 
              className="bg-clip-text text-transparent"
              style={{
                backgroundImage: `linear-gradient(to right, ${colors.skyBlue}, ${colors.lightBlue})`,
              }}
            >
              Together
            </span>
          </h2>
          
          {/* Tagline with better styling */}
          <p
            className="text-2xl md:text-3xl font-semibold mb-4"
            style={{ color: colors.lightBlue }}
          >
            Build faster. Scale smarter.
          </p>
          
          {/* Description with improved opacity */}
          <p className="text-lg md:text-xl text-white/70 mb-12 max-w-2xl mx-auto">
            Extend your tech team with expert resources from Aplusloop.
          </p>

          {/* CTA buttons with enhanced styling */}
          <div className="flex flex-col sm:flex-row gap-5 justify-center">
            {/* Primary CTA */}
            <button 
              className="group px-10 py-5 bg-white text-blue-900 font-semibold rounded-2xl shadow-2xl hover:shadow-3xl transition-all duration-300 flex items-center justify-center gap-3 hover:scale-105 relative overflow-hidden"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-blue-50 to-blue-100 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <Target className="w-6 h-6 relative z-10" />
              <span className="relative z-10">Request a Talent Match</span>
            </button>

            {/* Secondary CTAs with glass morphism */}
            <button 
              className="group px-10 py-5 bg-white/5 backdrop-blur-md hover:bg-white/10 text-white font-semibold rounded-2xl border border-white/20 transition-all duration-300 flex items-center justify-center gap-3 hover:scale-105 hover:border-white/40 shadow-lg"
            >
              <Eye className="w-6 h-6 group-hover:text-blue-300 transition-colors" />
              <span>View Available Profiles</span>
            </button>

            <button 
              className="group px-10 py-5 bg-white/5 backdrop-blur-md hover:bg-white/10 text-white font-semibold rounded-2xl border border-white/20 transition-all duration-300 flex items-center justify-center gap-3 hover:scale-105 hover:border-white/40 shadow-lg"
            >
              <MessageCircle className="w-6 h-6 group-hover:text-blue-300 transition-colors" />
              <span>Book a Discovery Call</span>
            </button>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes float {
          0%, 100% {
            transform: translateY(0) translateX(0);
          }
          25% {
            transform: translateY(-20px) translateX(10px);
          }
          50% {
            transform: translateY(10px) translateX(-10px);
          }
          75% {
            transform: translateY(-10px) translateX(20px);
          }
        }
      `}</style>
    </section>
    </div>
  );
};

export default ITStaffAugmentation;
