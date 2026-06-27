import { motion } from "framer-motion";

export default function Footer() {
  return (
    <footer className="border-t border-slate-800 py-8 px-6">
      <div className="max-w-6xl mx-auto text-center text-slate-500 text-sm">
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
        >
          © 2026 Abhishek Joshilkar. All rights reserved.
        </motion.p>
      </div>
    </footer>
  );
}
