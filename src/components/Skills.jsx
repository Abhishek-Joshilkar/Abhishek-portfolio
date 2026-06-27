import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

export default function Skills() {
  const { ref, inView } = useInView({ threshold: 0.3, triggerOnce: true });

  const skillCategories = [
    {
      category: "Frontend",
      skills: ["HTML", "CSS", "Bootstrap", "JavaScript", "React JS", "Tailwind CSS"]
    },
    {
      category: "Backend",
      skills: ["Java", "SQL", "MySQL", "RESTful APIs"]
    },
    {
      category: "Tools",
      skills: ["Git", "VS Code", "Figma", "Chrome DevTools"]
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.05 }
    }
  };

  const skillVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: { 
      opacity: 1, 
      scale: 1,
      transition: { type: "spring", stiffness: 100 }
    },
    hover: { 
      scale: 1.1,
      boxShadow: "0 0 20px rgba(34, 211, 238, 0.5)",
      transition: { duration: 0.2 }
    }
  };

  return (
    <section id="skills" className="py-24 px-6 relative">
      <div className="max-w-6xl mx-auto">
        {/* Heading */}
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
          className="mb-16 text-center"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Skills & <span className="text-cyan-400">Tech Stack</span>
          </h2>
          <p className="text-slate-400">
            Modern tooling. Proven experience. Always learning.
          </p>
        </motion.div>

        {/* Categories */}
        <div className="space-y-12">
          {skillCategories.map((category, catIdx) => (
            <motion.div
              key={catIdx}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ delay: catIdx * 0.1, duration: 0.6 }}
            >
              <h3 className="text-xl font-bold text-cyan-400 mb-6">
                {category.category}
              </h3>

              <motion.div
                className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4"
                variants={containerVariants}
                initial="hidden"
                animate={inView ? "visible" : "hidden"}
              >
                {category.skills.map((skill, idx) => (
                  <motion.div
                    key={idx}
                    variants={skillVariants}
                    whileHover="hover"
                    className="px-6 py-4 bg-gradient-to-br from-slate-800 to-slate-900 border border-slate-700 rounded-lg text-center font-semibold text-slate-200 cursor-pointer hover:border-cyan-500/50 transition-colors"
                  >
                    {skill}
                  </motion.div>
                ))}
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
