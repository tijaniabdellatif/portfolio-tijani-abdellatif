import { motion } from "framer-motion";
import { fadeIn, staggerContainer } from "@/utils/animation";
import { SERVICES } from "@/data/constants";
import { Code, Palette, GraduationCap } from "lucide-react";
import { TextHeading } from "./ui/TextHeading";

const icons = {
  Code,
  Palette,
  GraduationCap,
};

export function Services() {
  return (
    <section id="services" className="bg-black-100 mb-6">
      <div className="container mx-auto px-4">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <motion.div variants={fadeIn} className="text-center max-w-2xl mx-auto mb-16">
            <TextHeading words="What I do" className="text-center text-3xl" />
            <p className="text-lg text-white-100">
              I enjoy creating delightful, human-centered digital experiences that make a difference in people's lives.
            </p>
          </motion.div>

          {/* Modified grid with tablet responsiveness - only use 3 columns on large screens */}
          <div className="grid lg:grid-cols-3 lg:divide-x lg:divide-white/20">
            {SERVICES.map((service, index) => {
              const Icon = icons[service.icon as keyof typeof icons];
              return (
                <motion.div 
                  key={index} 
                  variants={fadeIn} 
                  className="px-8 py-6 relative w-full"
                >
                  {/* Animated Purple Separator - now shown on mobile AND tablet */}
                  {index !== 0 && (
                    <div className="absolute top-0 left-0 right-0 lg:hidden overflow-hidden h-[2px] w-full">
                      <div className="h-full bg-gradient-to-r from-transparent via-purple to-transparent animate-shimmer" />
                    </div>
                  )}
                  
                  {/* Icon */}
                  <div className="mb-8 flex justify-center">
                    <div className="w-16 h-16 bg-purple rounded-full flex items-center justify-center">
                      <Icon className="w-8 h-8 text-white" />
                    </div>
                  </div>
                  
                  {/* Title and Description */}
                  <h3 className="text-xl font-special text-purple font-semibold text-center mb-4">
                    {service.title}
                  </h3>
                  <p className="text-white-100/80 text-center mb-8">
                    {service.description}
                  </p>
                  
                  {/* Sections */}
                  {Object.entries(service.sections).map(([key, section]) => (
                    <div key={key} className="mb-6">
                      <h4 className="text-sm font-semibold text-white mb-3">
                        {section.title}
                      </h4>
                      <ul className="space-y-2">
                        {section.items.map((item) => (
                          <li key={item} className="text-white-100">
                            {item}
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </motion.div>
              );
            })}
          </div>
        </motion.div>
      </div>
    </section>
  );
}