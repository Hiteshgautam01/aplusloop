import { motion } from "framer-motion";
import { fadeInUp, staggerContainer } from "./animations";
import { 
  Cloud, 
  Database, 
  Code, 
  Shield,
  Server,
  Cpu,
  Layers,
  Workflow,
  Network,
  Lock,
  Sparkles,
  Globe,
  Code2,
  Terminal,
  Bot,
  Brain
} from "lucide-react";

export default function TechnologyStackSection() {
  const techStacks = [
    {
      category: "Cloud & Infrastructure",
      technologies: [
        { 
          name: "Cloud Services", 
          icon: Cloud,
          color: "text-blue-500",
          bgColor: "bg-blue-50"
        },
        { 
          name: "DevOps", 
          icon: Workflow,
          color: "text-purple-500",
          bgColor: "bg-purple-50"
        },
        { 
          name: "Microservices", 
          icon: Layers,
          color: "text-indigo-500",
          bgColor: "bg-indigo-50"
        },
        { 
          name: "Serverless", 
          icon: Server,
          color: "text-cyan-500",
          bgColor: "bg-cyan-50"
        }
      ]
    },
    {
      category: "AI & Data",
      technologies: [
        { 
          name: "Machine Learning", 
          icon: Brain,
          color: "text-rose-500",
          bgColor: "bg-rose-50"
        },
        { 
          name: "Big Data", 
          icon: Database,
          color: "text-orange-500",
          bgColor: "bg-orange-50"
        },
        { 
          name: "AI Solutions", 
          icon: Bot,
          color: "text-pink-500",
          bgColor: "bg-pink-50"
        },
        { 
          name: "Data Analytics", 
          icon: Sparkles,
          color: "text-amber-500",
          bgColor: "bg-amber-50"
        }
      ]
    },
    {
      category: "Development",
      technologies: [
        { 
          name: "Web Development", 
          icon: Code,
          color: "text-emerald-500",
          bgColor: "bg-emerald-50"
        },
        { 
          name: "Mobile Apps", 
          icon: Terminal,
          color: "text-teal-500",
          bgColor: "bg-teal-50"
        },
        { 
          name: "API Integration", 
          icon: Code2,
          color: "text-green-500",
          bgColor: "bg-green-50"
        },
        { 
          name: "Full Stack", 
          icon: Layers,
          color: "text-lime-500",
          bgColor: "bg-lime-50"
        }
      ]
    },
    {
      category: "Security & Blockchain",
      technologies: [
        { 
          name: "Cybersecurity", 
          icon: Shield,
          color: "text-red-500",
          bgColor: "bg-red-50"
        },
        { 
          name: "Blockchain", 
          icon: Network,
          color: "text-violet-500",
          bgColor: "bg-violet-50"
        },
        { 
          name: "Smart Contracts", 
          icon: Code,
          color: "text-blue-500",
          bgColor: "bg-blue-50"
        },
        { 
          name: "Web3", 
          icon: Globe,
          color: "text-indigo-500",
          bgColor: "bg-indigo-50"
        }
      ]
    }
  ];

  return (
    <motion.section 
      initial="initial"
      animate="animate"
      variants={staggerContainer}
      className="py-16 bg-gradient-to-b from-gray-50 to-white relative z-10"
    >
      <div className="container mx-auto px-4">
        <motion.div 
          variants={fadeInUp}
          className="text-center mb-12"
        >
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Our Technology Stack
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Leveraging cutting-edge technologies to build innovative solutions
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {techStacks.map((stack, index) => (
            <motion.div
              key={stack.category}
              variants={fadeInUp}
              className="bg-white rounded-xl p-6 shadow-sm hover:shadow-lg transition-all duration-300"
            >
              <h3 className="text-lg font-semibold text-gray-900 mb-4">
                {stack.category}
              </h3>
              <div className="grid grid-cols-2 gap-4">
                {stack.technologies.map((tech) => {
                  const Icon = tech.icon;
                  return (
                    <motion.div
                      key={tech.name}
                      whileHover={{ y: -5 }}
                      className={`flex flex-col items-center p-3 rounded-lg ${tech.bgColor} hover:bg-opacity-80 transition-colors duration-300`}
                    >
                      <div className={`p-2 rounded-lg ${tech.bgColor} mb-2`}>
                        <Icon className={`w-6 h-6 ${tech.color}`} />
                      </div>
                      <span className="text-sm font-medium text-gray-700">
                        {tech.name}
                      </span>
                    </motion.div>
                  );
                })}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.section>
  );
} 