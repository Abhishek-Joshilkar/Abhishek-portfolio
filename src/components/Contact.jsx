import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

export default function Contact({ formData, handleChange, handleSubmit }) {
  const { ref, inView } = useInView({ threshold: 0.3, triggerOnce: true });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
  };

  return (
    <section id="contact" className="py-24 px-6 relative">
      <div className="max-w-2xl mx-auto">
        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="text-center mb-12"
        >
          <motion.h2 variants={itemVariants} className="text-4xl md:text-5xl font-bold mb-4">
            Get In <span className="text-cyan-400">Touch</span>
          </motion.h2>
          <motion.p variants={itemVariants} className="text-slate-400">
            Have a project in mind? Let's talk about it.
          </motion.p>
        </motion.div>

        <motion.form
          onSubmit={handleSubmit}
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="space-y-6"
        >
          {/* Name */}
          <motion.div variants={itemVariants}>
            <label className="block text-sm font-medium text-slate-300 mb-2">
              Your Name
            </label>
            <motion.input
              type="text"
              name="name"
              placeholder="Abhishek Joshilkar"
              value={formData.name}
              onChange={handleChange}
              required
              className="w-full px-4 py-3 bg-slate-800 border border-slate-700 rounded-lg text-slate-100 placeholder-slate-500 focus:outline-none focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500/50 transition-all"
              whileFocus={{ scale: 1.02 }}
            />
          </motion.div>

          {/* Email */}
          <motion.div variants={itemVariants}>
            <label className="block text-sm font-medium text-slate-300 mb-2">
              Your Email
            </label>
            <motion.input
              type="email"
              name="email"
              placeholder="you@example.com"
              value={formData.email}
              onChange={handleChange}
              required
              className="w-full px-4 py-3 bg-slate-800 border border-slate-700 rounded-lg text-slate-100 placeholder-slate-500 focus:outline-none focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500/50 transition-all"
              whileFocus={{ scale: 1.02 }}
            />
          </motion.div>

          {/* Message */}
          <motion.div variants={itemVariants}>
            <label className="block text-sm font-medium text-slate-300 mb-2">
              Message
            </label>
            <motion.textarea
              name="message"
              rows="5"
              placeholder="Tell me about your project..."
              value={formData.message}
              onChange={handleChange}
              required
              className="w-full px-4 py-3 bg-slate-800 border border-slate-700 rounded-lg text-slate-100 placeholder-slate-500 focus:outline-none focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500/50 resize-none transition-all"
              whileFocus={{ scale: 1.02 }}
            />
          </motion.div>

          {/* Submit Button */}
          <motion.button
            variants={itemVariants}
            type="submit"
            className="w-full py-3 bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-bold rounded-lg hover:shadow-lg hover:shadow-cyan-500/50 transition-all"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            Send Message
          </motion.button>
        </motion.form>

        {/* Social Links */}
        <motion.div
          variants={itemVariants}
          className="mt-12 flex justify-center gap-6"
        >
          {[
            { icon: "github", label: "GitHub", href: "https://github.com" },
            { icon: "linkedin", label: "LinkedIn", href: "https://linkedin.com" },
            { icon: "twitter", label: "Twitter", href: "https://twitter.com" }
          ].map((social, i) => (
            <motion.a
              key={i}
              href={social.href}
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 flex items-center justify-center bg-slate-800 border border-slate-700 rounded-lg text-slate-400 hover:border-cyan-500 hover:text-cyan-400 transition-all"
              whileHover={{ scale: 1.1, y: -2 }}
              title={social.label}
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2C6.477 2 2 6.477 2 12c0 4.42 2.865 8.17 6.839 9.49.5.092.682-.217.682-.482 0-.237-.008-.868-.013-1.703-2.782.603-3.369-1.343-3.369-1.343-.454-1.156-1.11-1.463-1.11-1.463-.908-.62.069-.608.069-.608 1.003.07 1.531 1.03 1.531 1.03.892 1.529 2.341 1.547 2.91 1.186.092-.923.35-1.548.636-1.904-2.22-.253-4.555-1.11-4.555-4.943 0-1.091.39-1.984 1.029-2.683-.103-.253-.446-1.27.098-2.647 0 0 .84-.269 2.75 1.025A9.578 9.578 0 0112 6.836c.85.004 1.705.114 2.504.336 1.909-1.294 2.747-1.025 2.747-1.025.546 1.377.203 2.394.1 2.647.64.699 1.028 1.592 1.028 2.683 0 3.842-2.339 4.687-4.566 4.935.359.309.678.919.678 1.852 0 1.336-.012 2.415-.012 2.743 0 .267.18.578.688.48C19.138 20.167 22 16.418 22 12c0-5.523-4.477-10-10-10z" />
              </svg>
            </motion.a>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
