import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

export default function Resume() {
  const { ref, inView } = useInView({ threshold: 0.4, triggerOnce: true });

  const containerVariants = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: { 
      opacity: 1, 
      scale: 1,
      transition: { duration: 0.6 }
    }
  };

  return (
    <section id="resume" className="py-24 px-6 relative">
      <div className="max-w-6xl mx-auto">
        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="text-center"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-8">
            My <span className="text-cyan-400">Resume</span>
          </h2>

          <motion.div
            className="inline-block"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <a
              href="./assets/Abhishek_Joshilkar_Resume.pdf"
              download
              className="inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-bold rounded-lg hover:shadow-2xl hover:shadow-cyan-500/50 transition-all group"
            >
              <svg
                className="w-6 h-6 group-hover:-translate-y-1 transition-transform"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"
                />
              </svg>
              Download Resume
            </a>
          </motion.div>

          <p className="mt-8 text-slate-400">
            ATS-optimized. FAANG-ready. Updated regularly.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
