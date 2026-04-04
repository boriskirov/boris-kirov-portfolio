import FontSwap from "./font-switch";
import Image from "next/image";
import { motion } from "framer-motion";
import Link from "next/link";

const HomePageFooter = () => (
  <motion.div
    initial={{
      y: 25,
      opacity: 0,
    }}
    animate={{
      y: [100, 1],
      opacity: 1,
    }}
    transition={{ ease: "easeOut", duration: 0.5 }}
  >
    <footer className="dock-menu">
      <Link href="./about" title="About" passHref>
        <div className="footer-button">
          <Image src="/about.svg" alt="About me icon" width={24} height={24} />
        </div>
      </Link>
      <Link href="./playground" title="Playground" passHref>
        <div className="footer-button">
          <Image
            src="/playground.svg"
            alt="Playground icon"
            width={16}
            height={16}
          />
        </div>
      </Link>
      <Link href="./writings" title="Writings" passHref>
        <div className="footer-button">
          <Image
            src="/writings.svg"
            alt="Writings icons"
            width={16}
            height={16}
          />
        </div>
      </Link>
      <Link href="./talks" title="Talks" passHref>
        <div className="footer-button">
          <Image src="/talks.svg" alt="Talks icon" width={24} height={24} />
        </div>
      </Link>
      <Link href="./dashboard" title="Dashboard" type="button" passHref>
        <div className="footer-button">
          <Image
            src="/dashboard.svg"
            alt="Dashboard icon"
            width={24}
            height={24}
          />
        </div>
      </Link>
      <button type="button" title="Font swap ⌥+S" className="footer-button">
        <FontSwap />
      </button>
    </footer>
  </motion.div>
);

export default HomePageFooter;
