import React from "react";
import { motion, useTransform, useScroll } from "framer-motion";
import img from './BhanuBG.jpg';
const Test = () => {
  const { scrollYProgress } = useScroll();
  const scale = useTransform(scrollYProgress, [0, 1], [1, 1.075]);

  const x = useTransform(scrollYProgress, [0, 1], ["0%", "-19.5%"]);
  const y = useTransform(scrollYProgress, [0, 1], ["0%", "-3.3%"]);

  return (
    <div >
      <motion.div
        style={{ scale, x, y }}>
        <img src={img}/>
      </motion.div>
      <div >
        
      </div>
    </div>
  );
};

export default Test;
