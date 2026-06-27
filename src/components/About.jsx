import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import Abhishek from "../assets/Abhishek.png";

export default function About() {
  const { ref, inView } = useInView({ threshold: 0.3, triggerOnce: true });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8 } }
  };

  return (
    <section id="about" className="py-24 px-6 relative">
      <div className="max-w-6xl mx-auto">
        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="grid md:grid-cols-2 gap-12 items-center"
        >
          {/* Image */}
          <motion.div
            variants={itemVariants}
            className="flex justify-center"
          >
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="relative"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/20 to-blue-500/20 rounded-xl blur-2xl" />
              <img
                src={Abhishek}
                alt="Abhishek Joshilkar"
                className="w-full max-w-sm rounded-xl relative z-10 shadow-2xl"
                loading="lazy"
              />
            </motion.div>
          </motion.div>

          {/* Content */}
          <motion.div variants={itemVariants} className="space-y-6">
            <h2 className="text-4xl md:text-5xl font-bold">
              About <span className="text-cyan-400">Me</span>
            </h2>

            <div className="space-y-4 text-slate-400 leading-relaxed">
              <p>
                Full Stack Developer with B.Sc. Computer Science (Distinction) from MIT College, Alandi, Pune.
              </p>
              <p>
                Passionate about building responsive, modern web applications. Skilled in HTML, CSS, Bootstrap, JavaScript, React, Java, and MySQL.
              </p>
              <p>
                Love blending frontend finesse with robust backend architecture. Always learning, always building.
              </p>
            </div>

            {/* Stats */}
            <motion.div
              className="grid grid-cols-3 gap-4 pt-8"
              variants={containerVariants}
            >
              {[
                { label: "Projects", value: "10+" },
                { label: "Tech Stack", value: "7+" },
                { label: "Experience", value: "2y+" }
              ].map((stat, i) => (
                <motion.div
                  key={i}
                  variants={itemVariants}
                  className="bg-slate-800/50 border border-slate-700 rounded-lg p-4 text-center hover:border-cyan-500/50 transition-colors"
                >
                  <div className="text-2xl font-bold text-cyan-400">{stat.value}</div>
                  <div className="text-xs text-slate-500 mt-2">{stat.label}</div>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
