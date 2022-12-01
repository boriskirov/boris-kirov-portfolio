import { motion } from "framer-motion";

export default function Motion({ children }) {
  return (
    <motion.div
      initial={{
        y: 7,
        opacity: 0,
      }}
      animate={{
        y: [7, 1],
        opacity: 1,
      }}
      transition={{ ease: "easeIn", duration: 0.5 }}
    >
      {children}
    </motion.div>
  );
}
