import { motion, useAnimation, useInView } from "framer-motion";
import { useEffect, useRef } from "react";

const FadeReveal = ({children}) => {
  const ref = useRef(null);
  const isinview = useInView(ref, { once: true });
  const maincontrol = useAnimation();
  useEffect(() => {
    if (isinview) {
      maincontrol.start("visible");
    }
  }, [isinview, maincontrol]);
  return (
    <div ref={ref}>
      <motion.div
        variants={{
          hidden: { opacity: 0 },
          visible: { opacity: 1},
        }}
        initial="hidden"
        animate={maincontrol}
        transition={{ duration: 1, delay: 0.5 }}
      >
        {children}
      </motion.div>
    </div>
  );
};

export default FadeReveal;
