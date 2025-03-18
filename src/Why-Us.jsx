import React from "react";
import { motion } from "framer-motion";
import Reliabilities from "./Reliabilities";
import "./Styles/WhyUs.css";

const WhyUs = () => {
  return (
    <>
      <section id="why-us" >
        <div className="why-us-heading-and-bkg-img" style={{ overflow: 'hidden' }}>
          <motion.h1 
            variants={{
              hidden: { opacity: 0, y: 300 },
              visible: { opacity: 1, y: -50 }
            }}
            initial='hidden'
            whileInView='visible'
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            Why Us?
          </motion.h1>
        </div>

        <Reliabilities />
      </section>
    </>
  );
}

export default WhyUs;
