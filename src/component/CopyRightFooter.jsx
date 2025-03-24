import { motion } from "framer-motion";

const footerVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } },
};

const CopyRightFooter = () => {
  return (
    <motion.footer
      className="relative py-4 bg-gray-800 backdrop-blur-lg text-gray-300 font-mono text-xs md:text-sm border-t border-gray-700"
      initial="hidden"
      whileInView="visible"
      variants={footerVariants}
      viewport={{ once: true }}
    >
      <div className="max-w-[1400px] mx-auto flex flex-col items-center gap-3">
        <p className="text-center tracking-wide">
          © {new Date().getFullYear()}{" "}
          <span className="font-semibold text-white">CodeMyProject</span>
          <span className="text-neon-blue mx-2">/</span>
          <span className="text-neon-blue hover:text-cyan-400 transition-all duration-300">
            Crafted in the Future
          </span>
        </p>
        <motion.div
          className="h-[2px] w-24 bg-gradient-to-r from-transparent via-neon-blue to-transparent"
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          transition={{ delay: 0.3, duration: 1 }}
        />
      </div>
    </motion.footer>
  );
};

export default CopyRightFooter;
