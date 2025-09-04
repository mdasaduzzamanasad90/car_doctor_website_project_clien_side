import { motion, useAnimation, useInView } from "framer-motion";
import { useEffect, useRef } from "react";

const Xreveal = ({children}) => {
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
          hidden: { opacity: 0 , x: 75},
          visible: { opacity: 1 , x: 0},
        }}
        initial="hidden"
        animate={maincontrol}
        transition={{ duration: 1, delay: 1 }}
      >
        {children}
      </motion.div>
    </div>
  );
};

export default Xreveal;
