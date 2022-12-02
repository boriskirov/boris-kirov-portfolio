import Card from "./card";
import { motion } from "framer-motion";

const FeedbackForm = ({ description }) => {
  return (
    <div className="contentWrapper">
      <hr />
      <motion.div
        whileHover={{
          scale: 1.025,
          transition: { duration: 0.23 },
        }}
      >
        <Card
          link="https://twitter.com/sboriskirov"
          className="external main-card"
          title="Feedback"
          description={description}
          type="Twitter"
          target="_blank"
        />
      </motion.div>
    </div>
  );
};

export default FeedbackForm;
