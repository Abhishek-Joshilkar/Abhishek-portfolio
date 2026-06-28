import { useState, useEffect } from "react";
import { motion } from "framer-motion";

export default function Navbar({ scrollToSection }) {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { label: "About", id: "about" },
    { label: "Projects", id: "projects" },
    { label: "Skills", id: "skills" },
    { label: "Resume", id: "resume" },
    { label: "Contact", id: "contact" }
  ];

  return (
    <motion.nav
      className={`fixed w-full top-0 z-50 transition-all duration-300 ${
        isScrolled ? "bg-slate-950/95 backdrop-blur-sm shadow-lg" : "bg-transparent"
      }`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-4 flex justify-between items-center">
        {/* Brand */}
        <motion.a
          href="#"
          className="text-xl font-bold bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent"
          whileHover={{ scale: 1.05 }}
        >
          Abhishek Joshilkar
        </motion.a>

        {/* Desktop Nav */}
        <ul className="hidden md:flex gap-8">
          {navLinks.map((link, i) => (
            <motion.li
              key={i}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
            >
              <button
                onClick={() => scrollToSection(link.id)}
                className="text-slate-300 hover:text-cyan-400 transition-colors duration-200 text-sm font-medium"
              >
                {link.label}
              </button>
            </motion.li>
          ))}
        </ul>

        {/* Mobile Toggle */}
        <button
          className="md:hidden flex flex-col gap-1.5 p-2"
          onClick={() => setIsOpen(!isOpen)}
        >
          {[0, 1, 2].map((i) => (
            <motion.div
              key={i}
              className="w-6 h-0.5 bg-cyan-400"
              animate={{
                rotate: isOpen ? (i === 0 ? 45 : i === 2 ? -45 : 0) : 0,
                y: isOpen ? (i === 0 ? 8 : i === 2 ? -8 : 0) : 0,
                opacity: isOpen && i === 1 ? 0 : 1
              }}
              transition={{ duration: 0.3 }}
            />
          ))}
        </button>
      </div>

      {/* Mobile Menu */}
      <motion.div
        className="md:hidden bg-slate-900 border-t border-slate-800"
        initial={{ opacity: 0, height: 0 }}
        animate={{ opacity: isOpen ? 1 : 0, height: isOpen ? "auto" : 0 }}
        transition={{ duration: 0.3 }}
        style={{ overflow: "hidden" }}
      >
        <ul className="flex flex-col gap-4 p-6">
          {navLinks.map((link, i) => (
            <motion.li
              key={i}
              initial={{ x: -20, opacity: 0 }}
              animate={{ x: isOpen ? 0 : -20, opacity: isOpen ? 1 : 0 }}
              transition={{ delay: i * 0.05 }}
            >
              <button
                onClick={() => {
                  scrollToSection(link.id);
                  setIsOpen(false);
                }}
                className="text-slate-300 hover:text-cyan-400 transition-colors block w-full text-left"
              >
                {link.label}
              </button>
            </motion.li>
          ))}
        </ul>
      </motion.div>
    </motion.nav>
  );
}
