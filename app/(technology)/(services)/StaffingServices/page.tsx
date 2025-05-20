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
  Star,
  Award,
  TrendingUp,
  Globe,
} from "lucide-react";

// Custom Card component
const Card = ({ children, className = "" }: { children: React.ReactNode; className?: string }) => (
  <div className={`rounded-2xl border border-gray-100/50 ${className}`}>
    {children}
  </div>
);

const CardContent = ({ children, className = "" }: { children: React.ReactNode; className?: string }) => (
  <div className={className}>
    {children}
  </div>
);

// Custom Button component
const Button = ({ children, className = "", ...props }: { children: React.ReactNode; className?: string; props?: any }) => (
  <button className={`px-8 py-4 rounded-xl font-semibold transition-all duration-300 flex items-center gap-3 ${className}`} {...props}>
    {children}
  </button>
);

// Custom Badge component
const Badge = ({ children, className = "" }: { children: React.ReactNode; className?: string }) => (
  <span className={`px-4 py-2 rounded-full text-sm font-semibold ${className}`}>
    {children}
  </span>
);

const ITStaffAugmentation = () => {
  // Our expertise areas with descriptions
  const expertiseAreas = [
    {
      name: "Software Developers",
      subtitle: "Frontend, Backend, Full-Stack",
      description: "Expert developers proficient in modern frameworks and technologies",
      icon: <Code className="w-7 h-7" />,
      color: "from-blue-500 to-blue-600"
    },
    {
      name: "Cloud & DevOps Engineers",
      subtitle: "AWS, Azure, GCP",
      description: "Specialists in cloud architecture and continuous deployment",
      icon: <Cloud className="w-7 h-7" />,
      color: "from-sky-500 to-sky-600"
    },
    {
      name: "Cybersecurity Experts",
      subtitle: "Analysts & Consultants",
      description: "Protect your digital assets with enterprise-grade security",
      icon: <Shield className="w-7 h-7" />,
      color: "from-emerald-500 to-emerald-600"
    },
    {
      name: "Project Managers",
      subtitle: "Agile & Waterfall",
      description: "Experienced PMs to drive your projects to success",
      icon: <Settings className="w-7 h-7" />,
      color: "from-purple-500 to-purple-600"
    },
    {
      name: "Data Engineers",
      subtitle: "Analytics & BI",
      description: "Transform raw data into actionable business insights",
      icon: <BarChart3 className="w-7 h-7" />,
      color: "from-indigo-500 to-indigo-600"
    },
    {
      name: "QA Engineers",
      subtitle: "Manual & Automation",
      description: "Ensure quality with comprehensive testing strategies",
      icon: <CheckCircle2 className="w-7 h-7" />,
      color: "from-green-500 to-green-600"
    },
    {
      name: "UI/UX Designers",
      subtitle: "Design & Research",
      description: "Create intuitive and engaging user experiences",
      icon: <Palette className="w-7 h-7" />,
      color: "from-pink-500 to-pink-600"
    },
    {
      name: "ERP Consultants",
      subtitle: "SAP, Oracle, Microsoft",
      description: "Optimize business processes with enterprise solutions",
      icon: <Building2 className="w-7 h-7" />,
      color: "from-orange-500 to-orange-600"
    },
    {
      name: "AI/ML Specialists",
      subtitle: "Machine Learning & AI",
      description: "Leverage artificial intelligence to drive innovation",
      icon: <Brain className="w-7 h-7" />,
      color: "from-violet-500 to-violet-600"
    },
  ];

  // Engagement models with enhanced descriptions
  const engagementModels = [
    {
      title: "Short-Term Contracts",
      subtitle: "1-6 months",
      description: "Perfect for project spikes, covering staff leaves, or testing new technologies before long-term commitment.",
      icon: <Clock className="w-8 h-8" />,
      benefits: ["Quick deployment", "No long-term commitment", "Project-based"]
    },
    {
      title: "Long-Term Assignments",
      subtitle: "6+ months",
      description: "Scale your delivery capacity sustainably with dedicated professionals integrated into your team.",
      icon: <Calendar className="w-8 h-8" />,
      benefits: ["Team integration", "Consistent quality", "Cost-effective"]
    },
    {
      title: "Dedicated Resources",
      subtitle: "Full-time commitment",
      description: "Skilled professionals working exclusively on your projects as an extended part of your team.",
      icon: <UserPlus className="w-8 h-8" />,
      benefits: ["Exclusive focus", "Deep domain knowledge", "Full accountability"]
    },
    {
      title: "Hybrid/Remote Models",
      subtitle: "Flexible arrangements",
      description: "Access global talent with flexible work arrangements that suit your operational needs.",
      icon: <Zap className="w-8 h-8" />,
      benefits: ["Global talent pool", "Flexible hours", "Reduced overhead"]
    },
  ];

  // Why choose benefits with enhanced content
  const benefits = [
    {
      title: "Certified & Vetted Talent",
      description: "Rigorously screened professionals with verified technical skills and domain expertise across multiple industries.",
      icon: <Award className="w-6 h-6" />,
    },
    {
      title: "Rapid Onboarding",
      description: "Get started in days, not months. Our streamlined process gets your augmented team productive immediately.",
      icon: <TrendingUp className="w-6 h-6" />,
    },
    {
      title: "Cost-Effective Scaling",
      description: "Eliminate recruitment costs, training expenses, and overhead while maintaining high-quality deliverables.",
      icon: <Target className="w-6 h-6" />,
    },
    {
      title: "Domain Expertise",
      description: "Industry-specific knowledge with professionals who understand your sector's unique challenges and requirements.",
      icon: <Brain className="w-6 h-6" />,
    },
    {
      title: "Seamless Integration",
      description: "Our professionals adapt to your existing tools, processes, and company culture for smooth collaboration.",
      icon: <Users className="w-6 h-6" />,
    },
    {
      title: "Compliance Assured",
      description: "Full compliance with labor laws, data regulations, and industry standards to protect your business interests.",
      icon: <Shield className="w-6 h-6" />,
    },
  ];

  // Industries with descriptions
  const industries = [
    {
      name: "Government & Public Sector",
      description: "Secure, compliant solutions for public institutions",
      icon: <Building2 className="w-6 h-6" />,
    },
    { 
      name: "Healthcare & Life Sciences", 
      description: "HIPAA-compliant healthcare technology solutions",
      icon: <Heart className="w-6 h-6" /> 
    },
    { 
      name: "Retail & E-commerce", 
      description: "Digital commerce and customer experience platforms",
      icon: <ShoppingCart className="w-6 h-6" /> 
    },
    {
      name: "Banking & Finance",
      description: "Secure fintech and financial services solutions",
      icon: <Briefcase className="w-6 h-6" />,
    },
    { 
      name: "Education & EdTech", 
      description: "Learning management and educational platforms",
      icon: <GraduationCap className="w-6 h-6" /> 
    },
    { 
      name: "Manufacturing & Logistics", 
      description: "Supply chain and industrial automation systems",
      icon: <Truck className="w-6 h-6" /> 
    },
  ];

  // When to consider reasons
  const considerReasons = [
    "You're struggling to hire the right tech talent",
    "You need to scale your team quickly",
    "You're working on time-bound digital transformation projects",
    "You want to reduce overheads while maintaining productivity",
    "You require specialized expertise not available in-house",
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-blue-50 via-white to-indigo-50 py-24 px-4 sm:px-6 lg:px-8 overflow-hidden">
        {/* Background decoration */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -top-40 -right-40 w-80 h-80 bg-blue-100 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-pulse"></div>
          <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-indigo-100 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-pulse"></div>
        </div>
        
        <div className="relative max-w-7xl mx-auto text-center">
          <Badge className="bg-blue-100 text-blue-700 mb-8 inline-flex">
            <Star className="w-4 h-4 mr-2" />
            Premium Staff Augmentation
          </Badge>
          
          <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6 leading-tight">
            IT Staff
            <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent"> Augmentation</span>
          </h1>
          
          <p className="text-lg md:text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed mb-10">
            In today's fast-paced digital world, having the right talent at the right time can be the difference between staying ahead—or falling behind. At Aplusloop, our IT Staff Augmentation services provide scalable, flexible, and expert tech talent to help you accelerate project timelines, reduce operational bottlenecks, and extend your in-house capabilities without long-term commitments.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <Button className="bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white shadow-lg hover:shadow-xl">
              <Target className="w-5 h-5" />
              Get Started Today
              <ArrowRight className="w-5 h-5" />
            </Button>
            
            <Button className="border-2 border-gray-300 text-gray-700 hover:border-blue-500 hover:text-blue-600 bg-white hover:bg-blue-50">
              <Eye className="w-5 h-5" />
              View Success Stories
            </Button>
          </div>
        </div>
      </section>

      {/* What Is IT Staff Augmentation Section */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-6xl mx-auto">
          <Card className="bg-gradient-to-br from-white to-blue-50/30 shadow-xl border-0 overflow-hidden">
            <CardContent className="p-12">
              <div className="grid lg:grid-cols-2 gap-12 items-center">
                <div>
                  <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                    What Is IT Staff Augmentation?
                  </h2>
                  <p className="text-lg text-gray-600 leading-relaxed mb-6">
                    IT Staff Augmentation is a flexible outsourcing strategy that enables you to add skilled tech professionals to your existing team on a short-term or long-term basis. Whether you need developers, cloud engineers, cybersecurity experts, data analysts, or project managers, we bridge the talent gap with pre-vetted specialists ready to hit the ground running.
                  </p>
                  <div className="flex items-center gap-4">
                    <div className="flex -space-x-4">
                      <div className="w-12 h-12 rounded-full bg-blue-100 border-2 border-white flex items-center justify-center">
                        <Code className="w-6 h-6 text-blue-600" />
                      </div>
                      <div className="w-12 h-12 rounded-full bg-indigo-100 border-2 border-white flex items-center justify-center">
                        <Shield className="w-6 h-6 text-indigo-600" />
                      </div>
                      <div className="w-12 h-12 rounded-full bg-purple-100 border-2 border-white flex items-center justify-center">
                        <Brain className="w-6 h-6 text-purple-600" />
                      </div>
                    </div>
                    <span className="text-gray-600 font-medium">500+ Expert Professionals</span>
                  </div>
                </div>
                <div className="relative">
                  <div className="grid grid-cols-2 gap-6">
                    <div className="space-y-6">
                      <div className="bg-white p-6 rounded-2xl shadow-lg">
                        <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center mb-4">
                          <TrendingUp className="w-6 h-6 text-blue-600" />
                        </div>
                        <h3 className="font-bold text-gray-900 mb-1">Fast Scaling</h3>
                        <p className="text-gray-600 text-xs">Scale your team in days, not months</p>
                      </div>
                      <div className="bg-white p-6 rounded-2xl shadow-lg">
                        <div className="w-12 h-12 bg-green-100 rounded-xl flex items-center justify-center mb-4">
                          <Award className="w-6 h-6 text-green-600" />
                        </div>
                        <h3 className="font-bold text-gray-900 mb-1">Vetted Talent</h3>
                        <p className="text-gray-600 text-xs">Pre-screened and certified professionals</p>
                      </div>
                    </div>
                    <div className="space-y-6 mt-12">
                      <div className="bg-white p-6 rounded-2xl shadow-lg">
                        <div className="w-12 h-12 bg-purple-100 rounded-xl flex items-center justify-center mb-4">
                          <Target className="w-6 h-6 text-purple-600" />
                        </div>
                        <h3 className="font-bold text-gray-900 mb-1">Cost Effective</h3>
                        <p className="text-gray-600 text-xs">No recruitment or training costs</p>
                      </div>
                      <div className="bg-white p-6 rounded-2xl shadow-lg">
                        <div className="w-12 h-12 bg-indigo-100 rounded-xl flex items-center justify-center mb-4">
                          <Globe className="w-6 h-6 text-indigo-600" />
                        </div>
                        <h3 className="font-bold text-gray-900 mb-1">Global Reach</h3>
                        <p className="text-gray-600 text-xs">Access worldwide talent pool</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Our Expertise Section */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Our Expertise Covers
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              From frontend development to AI specialists, we have the right talent for your technology needs
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {expertiseAreas.map((area, index) => (
              <Card key={index} className="bg-white hover:shadow-2xl transition-all duration-500 group overflow-hidden border-0 shadow-lg">
                <CardContent className="p-8">
                  <div className="w-14 h-14 bg-gradient-to-br from-blue-100 to-indigo-100 rounded-xl flex items-center justify-center text-blue-600 mb-4 group-hover:scale-110 transition-transform duration-300">
                    {area.icon}
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{area.name}</h3>
                  <p className="text-blue-600 font-semibold mb-3 text-sm">{area.subtitle}</p>
                  <p className="text-gray-600 leading-relaxed text-sm">{area.description}</p>
                  <div className="mt-4 flex items-center gap-2 text-xs text-gray-500 group-hover:text-blue-600 transition-colors">
                    <span>Learn more</span>
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Engagement Models Section */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Engagement Models
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Choose the perfect engagement model that fits your project requirements and budget
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {engagementModels.map((model, index) => (
              <Card key={index} className="bg-gradient-to-br from-white to-gray-50 border-0 shadow-xl hover:shadow-2xl transition-all duration-500 group overflow-hidden">
                <CardContent className="p-10">
                  <div className="flex items-start gap-6 mb-6">
                    <div className="w-20 h-20 bg-gradient-to-br from-blue-100 to-indigo-100 rounded-2xl flex items-center justify-center text-blue-600 group-hover:scale-105 transition-transform duration-300">
                      {model.icon}
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl font-bold text-gray-900 mb-2">{model.title}</h3>
                      <p className="text-blue-600 font-semibold text-sm">{model.subtitle}</p>
                    </div>
                  </div>
                  <p className="text-gray-600 leading-relaxed mb-4 text-sm">{model.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {model.benefits.map((benefit, idx) => (
                      <span key={idx} className="px-3 py-1 bg-blue-50 text-blue-700 rounded-full text-sm font-medium">
                        {benefit}
                      </span>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Section */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-blue-50 to-indigo-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Why Choose Aplusloop?
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              We deliver more than just talent - we provide comprehensive solutions that drive your success
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {benefits.map((benefit, index) => (
              <Card key={index} className="bg-white border-0 shadow-lg hover:shadow-2xl transition-all duration-500 group">
                <CardContent className="p-8">
                  <div className="w-12 h-12 bg-gradient-to-br from-blue-100 to-indigo-100 rounded-xl flex items-center justify-center text-blue-600 mb-4 group-hover:scale-110 transition-transform duration-300">
                    {benefit.icon}
                  </div>
                  <h3 className="text-lg font-bold text-gray-900 mb-3">{benefit.title}</h3>
                  <p className="text-gray-600 leading-relaxed text-sm">{benefit.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Industries Section */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Industries We Serve
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Deep domain expertise across multiple industries to meet your specific requirements
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {industries.map((industry, index) => (
              <Card key={index} className="bg-gradient-to-br from-gray-50 to-white border-0 shadow-lg hover:shadow-xl transition-all duration-500 group cursor-pointer">
                <CardContent className="p-8 text-center">
                  <div className="w-14 h-14 bg-gradient-to-br from-gray-100 to-blue-100 rounded-xl flex items-center justify-center text-gray-600 mx-auto mb-4 group-hover:text-blue-600 group-hover:scale-110 transition-all duration-300">
                    {industry.icon}
                  </div>
                  <h3 className="text-lg font-bold text-gray-900 mb-2">{industry.name}</h3>
                  <p className="text-gray-600 text-sm">{industry.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* When to Consider Section */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <Card className="bg-white border-0 shadow-xl overflow-hidden">
            <CardContent className="p-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-10 text-center">
                When to Consider IT Staff Augmentation
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {considerReasons.map((reason, index) => (
                  <div key={index} className="flex items-start gap-4 p-6 rounded-2xl bg-gradient-to-r from-blue-50 to-indigo-50 hover:from-blue-100 hover:to-indigo-100 transition-all duration-300 group">
                    <div className="w-8 h-8 bg-gradient-to-r from-green-500 to-green-600 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                      <CheckCircle2 className="w-5 h-5 text-white" />
                    </div>
                    <span className="text-base text-gray-700 leading-relaxed group-hover:text-gray-900 transition-colors">
                      {reason}
                    </span>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-gray-900 via-blue-900 to-indigo-900 text-white relative overflow-hidden">
        {/* Background decoration */}
        <div className="absolute inset-0 bg-gradient-to-br from-blue-600/20 to-indigo-600/20"></div>
        <div className="absolute top-20 right-20 w-64 h-64 bg-gradient-to-br from-blue-400/10 to-indigo-400/20 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 left-20 w-80 h-80 bg-gradient-to-tr from-indigo-400/10 to-blue-400/20 rounded-full blur-3xl"></div>
        
        <div className="relative max-w-6xl mx-auto text-center">
          <h2 className="text-3xl md:text-5xl font-bold mb-6">
            Let's Build Together
          </h2>
          <div className="mb-10">
            <p className="text-2xl md:text-3xl font-bold mb-4 bg-gradient-to-r from-blue-300 via-indigo-300 to-sky-300 bg-clip-text text-transparent">
              Build faster. Scale smarter.
            </p>
            <p className="text-lg md:text-xl text-gray-200 leading-relaxed max-w-3xl mx-auto">
              Extend your tech team with expert resources from Aplusloop.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <Button className="bg-gradient-to-r from-blue-600 to-indigo-700 hover:from-blue-700 hover:to-indigo-800 text-white shadow-xl hover:shadow-2xl">
              <Target className="w-6 h-6" />
              Request a Talent Match
              <ArrowRight className="w-5 h-5" />
            </Button>

            <Button className="bg-gradient-to-r from-indigo-600 to-blue-700 hover:from-indigo-700 hover:to-blue-800 text-white shadow-xl hover:shadow-2xl">
              <Eye className="w-6 h-6" />
              View Available Profiles
            </Button>

            <Button className="bg-gradient-to-r from-blue-700 to-indigo-800 hover:from-blue-800 hover:to-indigo-900 text-white shadow-xl hover:shadow-2xl">
              <MessageCircle className="w-6 h-6" />
              Book a Discovery Call
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ITStaffAugmentation;