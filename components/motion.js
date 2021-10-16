import { motion } from "framer-motion";

export default function Motion({ children }) {
  return (
    <motion.div
      initial={{
        y: 5,
        opacity: 0,
      }}
      animate={{
        y: [5, 1],
        opacity: 1,
      }}
      transition={{ ease: "easeOut", duration: 0.5 }}
    >
      {children}
    </motion.div>
  );
}
