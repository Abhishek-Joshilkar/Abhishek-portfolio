import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

export default function Projects() {
  const { ref, inView } = useInView({ threshold: 0.2, triggerOnce: true });

  const projects = [
    {
      id: 1,
      title: "AnimeVerse",
      desc: "Streaming platform for anime lovers. Built with React, responsive design, smooth playback.",
      image: "https://images.unsplash.com/photo-1556740749-887f6717d7e4?q=80&w=1000",
      tags: ["React", "JavaScript", "CSS"]
    },
    {
      id: 2,
      title: "E-Commerce Store",
      desc: "Full-featured shopping experience with cart system, product filters, checkout flow.",
      image: "https://images.reallygooddesigns.com/2022/05/ecommerce-home-page-design-examples.png",
      tags: ["React", "JavaScript", "Bootstrap"]
    },
    {
      id: 3,
      title: "Theme Park Portal",
      desc: "Interactive theme park booking system. Live on Netlify. Full stack with Java backend.",
      image: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?q=80&w=1000",
      tags: ["React", "Java", "MySQL"],
      link: "https://parkpage.netlify.app/"
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1 }
    }
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
    hover: { y: -8, transition: { duration: 0.3 } }
  };

  return (
    <section id="projects" className="py-24 px-6 relative">
      <div className="max-w-6xl mx-auto">
        {/* Heading */}
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Featured <span className="text-cyan-400">Projects</span>
          </h2>
          <p className="text-slate-400 max-w-2xl">
            Selection of work spanning frontend, full-stack, and React expertise.
          </p>
        </motion.div>

        {/* Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="grid md:grid-cols-3 gap-6"
        >
          {projects.map((project) => (
            <motion.div
              key={project.id}
              variants={cardVariants}
              whileHover="hover"
              className="group relative bg-slate-800/50 border border-slate-700 rounded-xl overflow-hidden cursor-pointer hover:border-cyan-500/50 transition-colors"
            >
              {/* Image Container */}
              <div className="relative h-48 overflow-hidden">
                <motion.img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover"
                  whileHover={{ scale: 1.1 }}
                  transition={{ duration: 0.4 }}
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>

              {/* Content */}
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2 group-hover:text-cyan-400 transition-colors">
                  {project.title}
                </h3>
                <p className="text-slate-400 text-sm mb-4">
                  {project.desc}
                </p>

                {/* Tags */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag, i) => (
                    <span
                      key={i}
                      className="text-xs bg-slate-700/50 text-cyan-300 px-3 py-1 rounded-full border border-slate-600/50"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Link */}
                {project.link && (
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block mt-4 px-4 py-2 bg-cyan-600/20 text-cyan-400 text-sm font-semibold rounded-lg border border-cyan-600/50 hover:bg-cyan-600/40 transition-all"
                  >
                    Visit Live →
                  </a>
                )}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
