import { motion } from "framer-motion";
import Image from "next/image";

const stories = [
  {
    image: "https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=2070&auto=format&fit=crop",
    alt: "Enterprise Digital Transformation",
    title: "Enterprise Digital Transformation",
    tags: ["Digital Transformation", "Efficiency"],
    bullets: [
      "40% Operational Efficiency",
      "35% Cost Reduction",
      "60% Faster Time-to-Market",
    ],
  },
  {
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2070&auto=format&fit=crop",
    alt: "Smart City Implementation",
    title: "Smart City Implementation",
    tags: ["Smart City", "Sustainability"],
    bullets: [
      "50% Energy Savings",
      "45% Traffic Reduction",
      "30% Public Service Efficiency",
    ],
  },
  {
    image: "https://images.unsplash.com/photo-1551434678-e076c223a692?q=80&w=2070&auto=format&fit=crop",
    alt: "Cybersecurity Framework",
    title: "Cybersecurity Framework",
    tags: ["Cybersecurity", "Security Ops"],
    bullets: [
      "99.9% Threat Detection",
      "60% Faster Incident Response",
      "50% Cost Reduction in Security Ops",
    ],
  },
];

export default function SuccessStoriesSection() {
  return (
    <section className="py-24 bg-gradient-to-b from-blue-50 to-white relative z-10">
      <div className="container mx-auto px-4">
        <div className="text-center mb-20">
          <h2 className="text-5xl font-extrabold text-gray-900 mb-4 tracking-tight">
            Proven Results & Success Stories
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Our clients achieve measurable business outcomes through our technology and consulting solutions
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {stories.map((story, idx) => (
            <motion.div
              key={story.title}
              whileHover={{ scale: 1.03 }}
              className="relative group h-[540px] rounded-3xl overflow-hidden cursor-pointer transition-transform duration-500"
              style={{ minHeight: 400 }}
            >
              <Image
                src={story.image}
                alt={story.alt}
                fill
                className="object-cover w-full h-full transition-transform duration-700 group-hover:scale-110"
                priority={idx === 0}
              />
              {/* Tag Chips */}
              <div className="absolute top-6 left-6 flex gap-2 z-20">
                {story.tags.map((tag) => (
                  <span
                    key={tag}
                    className="bg-white/70 backdrop-blur-md text-blue-700 font-semibold px-3 py-1 rounded-full text-xs shadow-sm border border-blue-100"
                  >
                    {tag}
                  </span>
                ))}
              </div>
              {/* Always show the title at the bottom over a gradient */}
              <div className="absolute inset-x-0 bottom-0 z-20  flex flex-col justify-end pointer-events-none">
                <div className="bg-gradient-to-t from-black/80 to-transparent rounded-b-3xl pb-2 pt-8 px-0 ">
                  <h3 className="text-3xl font-bold text-white mb-0 drop-shadow-lg pointer-events-auto p-8 pb-6">
                    {story.title}
                  </h3>
                </div>
              </div>
              {/* Glass Overlay on Hover */}
              <div className="absolute inset-0 flex flex-col justify-end p-8 transition-all duration-500 bg-gradient-to-t from-black/70 via-black/30 to-transparent opacity-0 group-hover:opacity-100 group-hover:backdrop-blur-md z-30">
                <div className="mb-6">
                  <ul className="space-y-2">
                    {story.bullets.map((b, i) => (
                      <li key={i} className="flex items-center text-white/90 text-lg font-medium">
                        <svg className="w-5 h-5 text-blue-400 mr-2 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                        </svg>
                        {b}
                      </li>
                    ))}
                  </ul>
                </div>
                <motion.button
                  whileHover={{ scale: 1.08 }}
                  className="bg-gradient-to-r from-blue-600 to-blue-500 text-white px-7 py-3 rounded-full text-base font-semibold flex items-center gap-2 shadow-lg hover:from-blue-700 hover:to-blue-600 transition-all pointer-events-auto"
                >
                  Read Case Study
                  <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
                </motion.button>
              </div>
              {/* Always show a subtle gradient at the bottom for text readability */}
              <div className="absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-black/60 to-transparent pointer-events-none z-10" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
} 